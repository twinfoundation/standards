// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for DID Proof crypto suites.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DidCryptoSuites = {
	/**
	 * The type for EdDSA crypto suite for JSON Canonicalization Scheme [RFC8785].
	 * https://www.w3.org/TR/vc-di-eddsa/#eddsa-jcs-2022
	 */
	EdDSAJcs2022: "eddsa-jcs-2022",

	/**
	 * The type for EdDSA crypto suite for RDF Dataset Canonicalization.
	 * https://www.w3.org/TR/vc-di-eddsa/#eddsa-rdfc-2022
	 */
	EdDSARdfc2022: "eddsa-rdfc-2022"
} as const;

/**
 * The types for DID Proof crypto suites.
 */
export type DidCryptoSuites = (typeof DidCryptoSuites)[keyof typeof DidCryptoSuites];
