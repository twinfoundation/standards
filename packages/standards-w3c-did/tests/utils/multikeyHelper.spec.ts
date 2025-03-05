// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJwk } from "@twin.org/web";
import type { IMultikey } from "../../src/models/IMultikey";
import { MultikeyHelper } from "../../src/utils/multikeyHelper";

describe("MultikeyHelper", () => {
	test("Can convert a multikey to a JWK", async () => {
		const multikey: IMultikey = {
			"@context": "https://www.w3.org/ns/cid/v1",
			type: "Multikey",
			controller: "https://example.edu/issuers/565049",
			id: "https://example.edu/issuers/565049#z6MkwXG2WjeQnNxSoynSGYU8V9j3QzP3JSqhdmkHc6SaVWoT",
			publicKeyMultibase: "z6MkwXG2WjeQnNxSoynSGYU8V9j3QzP3JSqhdmkHc6SaVWoT",
			secretKeyMultibase:
				"zrv3rbPamVDGvrm7LkYPLWYJ35P9audujKKsWn3x29EUiGwwhdZQd1iHhrsmZidtVALBQmhX3j9E5Fvx6Kr29DPt6LH"
		};

		const jwk = MultikeyHelper.toJwk(multikey);
		expect(jwk).toEqual({
			alg: "EdDSA",
			crv: "Ed25519",
			kty: "OKP",
			x: "_Zz634jYJEvacPDsRD9UVM-DIaFRYGdoVOxVaujTHGo",
			d: "oP_pUCUmCIKVcDFHrlYx0IRCZxE9ekfcjpyaepCuKaQ"
		});
	});

	test("Can convert a JWK to a multikey", async () => {
		const jwk: IJwk = {
			alg: "EdDSA",
			crv: "Ed25519",
			kty: "OKP",
			x: "_Zz634jYJEvacPDsRD9UVM-DIaFRYGdoVOxVaujTHGo",
			d: "oP_pUCUmCIKVcDFHrlYx0IRCZxE9ekfcjpyaepCuKaQ"
		};

		const multikey = MultikeyHelper.fromJwk(
			"https://example.edu/issuers/565049",
			"https://example.edu/issuers/565049#z6MkwXG2WjeQnNxSoynSGYU8V9j3QzP3JSqhdmkHc6SaVWoT",
			jwk
		);
		expect(multikey).toEqual({
			"@context": "https://www.w3.org/ns/cid/v1",
			type: "Multikey",
			controller: "https://example.edu/issuers/565049",
			id: "https://example.edu/issuers/565049#z6MkwXG2WjeQnNxSoynSGYU8V9j3QzP3JSqhdmkHc6SaVWoT",
			publicKeyMultibase: "z6MkwXG2WjeQnNxSoynSGYU8V9j3QzP3JSqhdmkHc6SaVWoT",
			secretKeyMultibase: "z3u2c4HM6CaygXPa899qMhkv4Q7jf3rc7kYBA9UeQmgmH6u9"
		});
	});
});
