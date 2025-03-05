// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { GeneralError, Guards, Is } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import { nameof } from "@twin.org/nameof";
import type { IJwk } from "@twin.org/web";
import { DidContexts } from "../models/didContexts";
import { DidCryptoSuites } from "../models/didCryptoSuites";
import type { IProof } from "../models/IProof";
import type { IProofSignerVerifier } from "../models/IProofSignerVerifier";
import { ProofTypes } from "../models/proofTypes";
import { DataIntegrityProofSignerVerifier } from "../signerVerifiers/dataIntegrityProofSignerVerifier";
import { JsonWebSignature2020SignerVerifier } from "../signerVerifiers/jsonWebSignature2020SignerVerifier";

/**
 * Helper methods for creating and verifying proofs.
 */
export class ProofHelper {
	/**
	 * Runtime name for the class.
	 */
	public static readonly CLASS_NAME: string = nameof<ProofHelper>();

	/**
	 * Create a signer verifier.
	 * @param proofType The type of proof to create.
	 * @returns The created signer verifier.
	 * @throws GeneralError if the proof type is not supported.
	 */
	public static createSignerVerifier(proofType: ProofTypes): IProofSignerVerifier {
		Guards.arrayOneOf(this.CLASS_NAME, nameof(proofType), proofType, Object.values(ProofTypes));

		let signerVerifier: IProofSignerVerifier | undefined;
		if (proofType === ProofTypes.DataIntegrityProof) {
			signerVerifier = new DataIntegrityProofSignerVerifier();
		} else if (proofType === ProofTypes.JsonWebSignature2020) {
			signerVerifier = new JsonWebSignature2020SignerVerifier();
		}

		if (Is.empty(signerVerifier)) {
			throw new GeneralError(ProofHelper.CLASS_NAME, "unsupportedProofType", { proofType });
		}
		return signerVerifier;
	}

	/**
	 * Create a proof for the given data.
	 * @param proofType The type of proof to create.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The proof options.
	 * @param signKey The key to sign the proof with.
	 * @returns The created proof.
	 */
	public static async createProof(
		proofType: ProofTypes,
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IProof,
		signKey: IJwk
	): Promise<IProof> {
		Guards.arrayOneOf(this.CLASS_NAME, nameof(proofType), proofType, Object.values(ProofTypes));
		Guards.object<IJsonLdNodeObject>(this.CLASS_NAME, nameof(unsecuredDocument), unsecuredDocument);
		Guards.object<IJsonLdNodeObject>(this.CLASS_NAME, nameof(unsignedProof), unsignedProof);
		Guards.object<IJwk>(this.CLASS_NAME, nameof(signKey), signKey);
		return ProofHelper.createSignerVerifier(proofType).createProof(
			unsecuredDocument as unknown as IJsonLdNodeObject,
			unsignedProof,
			signKey
		);
	}

	/**
	 * Verify a proof for the given data.
	 * @param securedDocument The credential to verify.
	 * @param signedProof The proof to verify.
	 * @param verifyKey The public key to verify the proof with.
	 * @returns True if the credential was verified.
	 */
	public static async verifyProof(
		securedDocument: IJsonLdNodeObject,
		signedProof: IProof,
		verifyKey: IJwk
	): Promise<boolean> {
		Guards.object<IJsonLdNodeObject>(this.CLASS_NAME, nameof(securedDocument), securedDocument);
		Guards.object<IJsonLdNodeObject>(this.CLASS_NAME, nameof(signedProof), signedProof);
		Guards.stringValue(this.CLASS_NAME, nameof(signedProof.type), signedProof.type);
		Guards.object<IJwk>(this.CLASS_NAME, nameof(verifyKey), verifyKey);

		const signerVerifier = ProofHelper.createSignerVerifier(signedProof.type as ProofTypes);

		return signerVerifier.verifyProof(securedDocument, signedProof, verifyKey);
	}

	/**
	 * Create an unsigned proof.
	 * @param proofType The type of proof to create.
	 * @param verificationMethodId The verification method id.
	 * @param otherParams Other parameters for the proof.
	 * @returns The created proof.
	 * @throws GeneralError if the proof type is not supported.
	 */
	public static createUnsignedProof(
		proofType: ProofTypes,
		verificationMethodId: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		otherParams?: any
	): IProof {
		let proof: IProof | undefined;
		if (proofType === ProofTypes.DataIntegrityProof) {
			proof = {
				"@context": DidContexts.ContextDataIntegrity,
				type: ProofTypes.DataIntegrityProof,
				cryptosuite: DidCryptoSuites.EdDSAJcs2022,
				created: new Date(Date.now()).toISOString(),
				verificationMethod: verificationMethodId,
				proofPurpose: "assertionMethod",
				...otherParams
			};
		} else if (proofType === ProofTypes.JsonWebSignature2020) {
			proof = {
				"@context": DidContexts.ContextSecurityJws2020,
				type: ProofTypes.JsonWebSignature2020,
				created: new Date(Date.now()).toISOString(),
				verificationMethod: verificationMethodId,
				proofPurpose: "assertionMethod",
				...otherParams
			};
		}
		if (Is.empty(proof)) {
			throw new GeneralError(ProofHelper.CLASS_NAME, "unsupportedProofType", { proofType });
		}
		return proof;
	}
}
