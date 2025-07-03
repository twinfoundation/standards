// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Actions.
 * URI action types (for use with rdf:value/@id)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UriActionType = {
	/**
	 * To use the Asset - actions that involve general usage by parties.
	 */
	OdrlUse: "odrl:use",

	/**
	 * To transfer the ownership to third parties.
	 */
	OdrlTransfer: "odrl:transfer",

	/**
	 * To accept that the use of the Asset may be tracked.
	 */
	OdrlAcceptTracking: "odrl:acceptTracking",

	/**
	 * To use the Asset or parts of it as part of a composite collection.
	 */
	OdrlAggregate: "odrl:aggregate",

	/**
	 * To add explanatory notations/commentaries to the Asset without modifying the Asset in any other way.
	 */
	OdrlAnnotate: "odrl:annotate",

	/**
	 * To anonymize all or parts of the Asset.
	 */
	OdrlAnonymize: "odrl:anonymize",

	/**
	 * To store the Asset (in a non-transient form).
	 */
	OdrlArchive: "odrl:archive",

	/**
	 * To attribute the use of the Asset.
	 */
	OdrlAttribute: "odrl:attribute",

	/**
	 * Credit be given to copyright holder and/or author.
	 */
	OdrlAttribution: "odrl:attribution",

	/**
	 * Exercising rights for commercial purposes.
	 */
	OdrlCommercialUse: "odrl:commercialUse",

	/**
	 * To compensate by transfer of some amount of value for using or selling the Asset.
	 */
	OdrlCompensate: "odrl:compensate",

	/**
	 * To create multiple copies of the Asset that are being concurrently used.
	 */
	OdrlConcurrentUse: "odrl:concurrentUse",

	/**
	 * To permanently remove all copies of the Asset after it has been used.
	 */
	OdrlDelete: "odrl:delete",

	/**
	 * To create a new derivative Asset from this Asset and to edit or modify the derivative.
	 */
	OdrlDerive: "odrl:derive",

	/**
	 * Distribution of derivative works.
	 */
	OdrlDerivativeWorks: "odrl:derivativeWorks",

	/**
	 * To produce a digital copy of (or otherwise digitize) the Asset from its analogue form.
	 */
	OdrlDigitize: "odrl:digitize",

	/**
	 * To create a static and transient rendition of an Asset.
	 */
	OdrlDisplay: "odrl:display",

	/**
	 * To supply the Asset to third-parties.
	 */
	OdrlDistribute: "odrl:distribute",

	/**
	 * Distribution, public display, and publicly performance.
	 */
	OdrlDistribution: "odrl:distribution",

	/**
	 * To ensure that the Rule on the Asset is exclusive.
	 */
	OdrlEnsureExclusivity: "odrl:ensureExclusivity",

	/**
	 * To run the computer program Asset.
	 */
	OdrlExecute: "odrl:execute",

	/**
	 * To extract parts of the Asset and to use it as a new Asset.
	 */
	OdrlExtract: "odrl:extract",

	/**
	 * To transfer the ownership without compensation and while deleting the original asset.
	 */
	OdrlGive: "odrl:give",

	/**
	 * To grant the use of the Asset to third parties.
	 */
	OdrlGrantUse: "odrl:grantUse",

	/**
	 * To include other related assets in the Asset.
	 */
	OdrlInclude: "odrl:include",

	/**
	 * To record the Asset in an index.
	 */
	OdrlIndex: "odrl:index",

	/**
	 * To inform that an action has been performed on or in relation to the Asset.
	 */
	OdrlInform: "odrl:inform",

	/**
	 * To load the computer program Asset onto a storage device.
	 */
	OdrlInstall: "odrl:install",

	/**
	 * To change existing content of the Asset without creating a new asset.
	 */
	OdrlModify: "odrl:modify",

	/**
	 * To move the Asset from one digital location to another including deleting the original copy.
	 */
	OdrlMove: "odrl:move",

	/**
	 * To grant the specified Policy to a third party for their use of the Asset.
	 */
	OdrlNextPolicy: "odrl:nextPolicy",

	/**
	 * Copyright and license notices be kept intact.
	 */
	OdrlNotice: "odrl:notice",

	/**
	 * To obtain verifiable consent to perform the requested action.
	 */
	OdrlObtainConsent: "odrl:obtainConsent",

	/**
	 * To create a sequential and transient rendition of an Asset.
	 */
	OdrlPlay: "odrl:play",

	/**
	 * To publicly perform the Asset.
	 */
	OdrlPresent: "odrl:present",

	/**
	 * To create a tangible and permanent rendition of an Asset.
	 */
	OdrlPrint: "odrl:print",

	/**
	 * To obtain data from the Asset.
	 */
	OdrlRead: "odrl:read",

	/**
	 * To make duplicate copies of the Asset in any material form.
	 */
	OdrlReproduce: "odrl:reproduce",

	/**
	 * Making multiple copies.
	 */
	OdrlReproduction: "odrl:reproduction",

	/**
	 * To review the Policy applicable to the Asset.
	 */
	OdrlReviewPolicy: "odrl:reviewPolicy",

	/**
	 * To transfer the ownership with compensation and while deleting the original asset.
	 */
	OdrlSell: "odrl:sell",

	/**
	 * Derivative works be licensed under the same terms or compatible terms.
	 */
	OdrlShareAlike: "odrl:shareAlike",

	/**
	 * Permits commercial derivatives, but only non-commercial distribution.
	 */
	OdrlSharing: "odrl:sharing",

	/**
	 * Source code must be provided when exercising some rights.
	 */
	OdrlSourceCode: "odrl:sourceCode",

	/**
	 * To deliver the Asset in real-time.
	 */
	OdrlStream: "odrl:stream",

	/**
	 * To use the Asset in timed relations with media elements of another Asset.
	 */
	OdrlSynchronize: "odrl:synchronize",

	/**
	 * To have a text Asset read out loud.
	 */
	OdrlTextToSpeech: "odrl:textToSpeech",

	/**
	 * To convert the Asset into a different format.
	 */
	OdrlTransform: "odrl:transform",

	/**
	 * To translate the Asset into another natural language.
	 */
	OdrlTranslate: "odrl:translate",

	/**
	 * To unload and delete the computer program Asset.
	 */
	OdrlUninstall: "odrl:uninstall",

	/**
	 * To apply a watermark to the Asset.
	 */
	OdrlWatermark: "odrl:watermark"
} as const;
/**
 * The types for ODRL Actions.
 * Simple action types (for direct string usage)
 */
export type UriActionType = (typeof UriActionType)[keyof typeof UriActionType];
