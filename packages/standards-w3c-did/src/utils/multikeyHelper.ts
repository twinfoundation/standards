// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { Converter, GeneralError, Guards, Is } from "@twin.org/core";
import { nameof } from "@twin.org/nameof";
import type { IJwk } from "@twin.org/web";
import { DidContexts } from "../models/didContexts";
import { DidTypes } from "../models/didTypes";
import type { IMultikey } from "../models/IMultikey";

/**
 * Helper methods for multikey.
 */
export class MultikeyHelper {
	/**
	 * Runtime name for the class.
	 */
	public static readonly CLASS_NAME: string = nameof<MultikeyHelper>();

	/**
	 * Convert a multikey to a JWK.
	 * @param multikey The multikey to convert.
	 * @returns The JWK.
	 * @throws GeneralError if the multikey is invalid.
	 */
	public static toJwk(multikey: IMultikey): IJwk {
		Guards.object<IMultikey>(MultikeyHelper.CLASS_NAME, nameof(multikey), multikey);

		const { publicKey, privateKey } = MultikeyHelper.toRaw(multikey);

		return {
			kty: "OKP",
			crv: "Ed25519",
			alg: "EdDSA",
			x: Is.uint8Array(publicKey) ? Converter.bytesToBase64Url(publicKey) : undefined,
			d: Is.uint8Array(privateKey) ? Converter.bytesToBase64Url(privateKey) : undefined
		};
	}

	/**
	 * Convert a JWK to a Multikey.
	 * @param controller The controller of the multikey.
	 * @param id The id of the multikey.
	 * @param jwk The jwk to convert.
	 * @returns The multikey.
	 * @throws GeneralError if the jwk is invalid.
	 */
	public static fromJwk(controller: string, id: string, jwk: IJwk): IMultikey {
		Guards.stringValue(MultikeyHelper.CLASS_NAME, nameof(controller), controller);
		Guards.stringValue(MultikeyHelper.CLASS_NAME, nameof(id), id);
		Guards.object<IJwk>(MultikeyHelper.CLASS_NAME, nameof(jwk), jwk);
		Guards.stringValue(MultikeyHelper.CLASS_NAME, nameof(jwk.x), jwk.x);

		if (jwk.kty !== "OKP") {
			throw new GeneralError(MultikeyHelper.CLASS_NAME, "unsupportedKty", { kty: jwk.kty });
		}

		if (jwk.crv !== "Ed25519") {
			throw new GeneralError(MultikeyHelper.CLASS_NAME, "unsupportedCrv", { crv: jwk.crv });
		}

		const publicRaw = Converter.base64UrlToBytes(jwk.x);
		const publicKey = new Uint8Array(2 + publicRaw.length);
		publicKey[0] = 0xed;
		publicKey[1] = 0x01;
		publicKey.set(publicRaw, 2);

		const multikey: IMultikey = {
			"@context": DidContexts.ContextControllerIdentifiers,
			type: DidTypes.Multikey,
			controller,
			id,
			publicKeyMultibase: `z${Converter.bytesToBase58(publicKey)}`
		};

		if (Is.stringValue(jwk.d)) {
			const privateRaw = Converter.base64UrlToBytes(jwk.d);
			const secretKey = new Uint8Array(2 + privateRaw.length);
			secretKey[0] = 0x80;
			secretKey[1] = 0x26;
			secretKey.set(privateRaw, 2);
			multikey.secretKeyMultibase = `z${Converter.bytesToBase58(secretKey)}`;
		}

		return multikey;
	}

	/**
	 * Convert a multikey to raw keys.
	 * @param multikey The multikey to convert.
	 * @returns The JWK.
	 * @throws GeneralError if the multikey is invalid.
	 */
	public static toRaw(multikey: IMultikey): {
		publicKey: Uint8Array;
		privateKey: Uint8Array;
	} {
		Guards.object<IMultikey>(MultikeyHelper.CLASS_NAME, nameof(multikey), multikey);

		let publicKeyRaw: Uint8Array | undefined;
		let secretKeyRaw: Uint8Array | undefined;

		if (Is.stringValue(multikey.publicKeyMultibase)) {
			if (!multikey.publicKeyMultibase.startsWith("z")) {
				throw new GeneralError(MultikeyHelper.CLASS_NAME, "invalidPublicKeyMultibase", {
					publicKeyMultibase: multikey.publicKeyMultibase
				});
			}

			publicKeyRaw = Converter.base58ToBytes(multikey.publicKeyMultibase.slice(1));
			if (publicKeyRaw[0] !== 0xed || publicKeyRaw[1] !== 0x01) {
				throw new GeneralError(MultikeyHelper.CLASS_NAME, "publicKeyMultibaseMissingHeader", {
					publicKeyMultibase: multikey.publicKeyMultibase
				});
			}
		}

		if (Is.stringValue(multikey.secretKeyMultibase)) {
			if (!multikey.secretKeyMultibase.startsWith("z")) {
				throw new GeneralError(MultikeyHelper.CLASS_NAME, "invalidSecretKeyMultibase", {
					secretKeyMultibase: multikey.secretKeyMultibase
				});
			}
			secretKeyRaw = Converter.base58ToBytes(multikey.secretKeyMultibase.slice(1));
			if (secretKeyRaw[0] !== 0x80 || secretKeyRaw[1] !== 0x26) {
				throw new GeneralError(MultikeyHelper.CLASS_NAME, "publicKeyMultibaseMissingHeader", {
					publicKeyMultibase: multikey.publicKeyMultibase
				});
			}
		}

		return {
			publicKey: publicKeyRaw?.slice(2) ?? new Uint8Array(),
			privateKey: secretKeyRaw?.slice(2, 34) ?? new Uint8Array()
		};
	}
}
