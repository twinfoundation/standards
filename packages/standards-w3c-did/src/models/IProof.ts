// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDataIntegrityProof } from "./IDataIntegrityProof";
import type { IJsonWebSignature2020Proof } from "./IJsonWebSignature2020Proof";

/**
 * Interface describing a proof.
 */
export type IProof = IDataIntegrityProof | IJsonWebSignature2020Proof;
