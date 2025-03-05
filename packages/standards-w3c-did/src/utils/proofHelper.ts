// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { GeneralError, Guards, Is } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import { nameof } from "@twin.org/nameof";
import type { IJwk } from "@twin.org/web";
import type { IDataIntegrityProof } from "../models/IDataIntegrityProof";
import type { IJsonWebSignature2020Proof } from "../models/IJsonWebSignature2020Proof";
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
		unsignedProof: IJsonLdNodeObject,
		signKey: IJwk
	): Promise<IJsonLdNodeObject> {
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
		securedDocument: IJsonLdNodeObject & {
			proof:
				| IDataIntegrityProof
				| IJsonWebSignature2020Proof
				| (IDataIntegrityProof | IJsonWebSignature2020Proof)[];
		},
		signedProof: IJsonLdNodeObject,
		verifyKey: IJwk
	): Promise<boolean> {
		Guards.object<IJsonLdNodeObject>(this.CLASS_NAME, nameof(securedDocument), securedDocument);
		Guards.object<IJsonLdNodeObject>(this.CLASS_NAME, nameof(signedProof), signedProof);
		Guards.object<IJwk>(this.CLASS_NAME, nameof(verifyKey), verifyKey);

		if (Is.empty(securedDocument.proof)) {
			throw new GeneralError(ProofHelper.CLASS_NAME, "proofMissing");
		}

		const proofs = Is.array(securedDocument.proof)
			? securedDocument.proof
			: [securedDocument.proof];

		let verified = false;

		for (const proof of proofs) {
			const signerVerifier = ProofHelper.createSignerVerifier(proof.type);

			verified = await signerVerifier.verifyProof(
				securedDocument,
				proof as unknown as IJsonLdNodeObject,
				verifyKey
			);

			if (!verified) {
				return false;
			}
		}

		return verified;
	}
}
