// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Actions.
 * Simple action types (for direct string usage)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ActionTypes = {
	/**
	 * To use the Asset - actions that involve general usage by parties.
	 */
	Use: "use",

	/**
	 * To transfer the ownership to third parties.
	 */
	Transfer: "transfer",

	/**
	 * To accept that the use of the Asset may be tracked.
	 */
	AcceptTracking: "acceptTracking",

	/**
	 * To use the Asset or parts of it as part of a composite collection.
	 */
	Aggregate: "aggregate",

	/**
	 * To add explanatory notations/commentaries to the Asset without modifying the Asset in any other way.
	 */
	Annotate: "annotate",

	/**
	 * To anonymize all or parts of the Asset.
	 */
	Anonymize: "anonymize",

	/**
	 * To store the Asset (in a non-transient form).
	 */
	Archive: "archive",

	/**
	 * To attribute the use of the Asset.
	 */
	Attribute: "attribute",

	/**
	 * Credit be given to copyright holder and/or author.
	 */
	Attribution: "attribution",

	/**
	 * Exercising rights for commercial purposes.
	 */
	CommercialUse: "commercialUse",

	/**
	 * To compensate by transfer of some amount of value for using or selling the Asset.
	 */
	Compensate: "compensate",

	/**
	 * To create multiple copies of the Asset that are being concurrently used.
	 */
	ConcurrentUse: "concurrentUse",

	/**
	 * To permanently remove all copies of the Asset after it has been used.
	 */
	Delete: "delete",

	/**
	 * To create a new derivative Asset from this Asset and to edit or modify the derivative.
	 */
	Derive: "derive",

	/**
	 * Distribution of derivative works.
	 */
	DerivativeWorks: "derivativeWorks",

	/**
	 * To produce a digital copy of (or otherwise digitize) the Asset from its analogue form.
	 */
	Digitize: "digitize",

	/**
	 * To create a static and transient rendition of an Asset.
	 */
	Display: "display",

	/**
	 * To supply the Asset to third-parties.
	 */
	Distribute: "distribute",

	/**
	 * Distribution, public display, and publicly performance.
	 */
	Distribution: "distribution",

	/**
	 * To ensure that the Rule on the Asset is exclusive.
	 */
	EnsureExclusivity: "ensureExclusivity",

	/**
	 * To run the computer program Asset.
	 */
	Execute: "execute",

	/**
	 * To extract parts of the Asset and to use it as a new Asset.
	 */
	Extract: "extract",

	/**
	 * To transfer the ownership without compensation and while deleting the original asset.
	 */
	Give: "give",

	/**
	 * To grant the use of the Asset to third parties.
	 */
	GrantUse: "grantUse",

	/**
	 * To include other related assets in the Asset.
	 */
	Include: "include",

	/**
	 * To record the Asset in an index.
	 */
	Index: "index",

	/**
	 * To inform that an action has been performed on or in relation to the Asset.
	 */
	Inform: "inform",

	/**
	 * To load the computer program Asset onto a storage device.
	 */
	Install: "install",

	/**
	 * To change existing content of the Asset without creating a new asset.
	 */
	Modify: "modify",

	/**
	 * To move the Asset from one digital location to another including deleting the original copy.
	 */
	Move: "move",

	/**
	 * To grant the specified Policy to a third party for their use of the Asset.
	 */
	NextPolicy: "nextPolicy",

	/**
	 * Copyright and license notices be kept intact.
	 */
	Notice: "notice",

	/**
	 * To obtain verifiable consent to perform the requested action.
	 */
	ObtainConsent: "obtainConsent",

	/**
	 * To create a sequential and transient rendition of an Asset.
	 */
	Play: "play",

	/**
	 * To publicly perform the Asset.
	 */
	Present: "present",

	/**
	 * To create a tangible and permanent rendition of an Asset.
	 */
	Print: "print",

	/**
	 * To obtain data from the Asset.
	 */
	Read: "read",

	/**
	 * To make duplicate copies of the Asset in any material form.
	 */
	Reproduce: "reproduce",

	/**
	 * Making multiple copies.
	 */
	Reproduction: "reproduction",

	/**
	 * To review the Policy applicable to the Asset.
	 */
	ReviewPolicy: "reviewPolicy",

	/**
	 * To transfer the ownership with compensation and while deleting the original asset.
	 */
	Sell: "sell",

	/**
	 * Derivative works be licensed under the same terms or compatible terms.
	 */
	ShareAlike: "shareAlike",

	/**
	 * Permits commercial derivatives, but only non-commercial distribution.
	 */
	Sharing: "sharing",

	/**
	 * Source code must be provided when exercising some rights.
	 */
	SourceCode: "sourceCode",

	/**
	 * To deliver the Asset in real-time.
	 */
	Stream: "stream",

	/**
	 * To use the Asset in timed relations with media elements of another Asset.
	 */
	Synchronize: "synchronize",

	/**
	 * To have a text Asset read out loud.
	 */
	TextToSpeech: "textToSpeech",

	/**
	 * To convert the Asset into a different format.
	 */
	Transform: "transform",

	/**
	 * To translate the Asset into another natural language.
	 */
	Translate: "translate",

	/**
	 * To unload and delete the computer program Asset.
	 */
	Uninstall: "uninstall",

	/**
	 * To apply a watermark to the Asset.
	 */
	Watermark: "watermark"
} as const;

/**
 * The types for ODRL Actions.
 */
export type ActionType = (typeof ActionTypes)[keyof typeof ActionTypes];
