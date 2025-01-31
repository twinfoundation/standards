// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { VCardContexts, VCardPropertyType } from "../src/index";

describe("VCard", () => {
	it("should have correct context", () => {
		expect(VCardContexts.Context).toBe("http://www.w3.org/2006/vcard/ns#");
	});

	it("should have correct property types", () => {
		expect(`vcard:${VCardPropertyType.FormattedName}`).toBe("vcard:fn");
		expect(`vcard:${VCardPropertyType.Email}`).toBe("vcard:hasEmail");
		expect(`vcard:${VCardPropertyType.Organization}`).toBe("vcard:Organization");
		expect(`vcard:${VCardPropertyType.Group}`).toBe("vcard:Group");
		expect(`vcard:${VCardPropertyType.Individual}`).toBe("vcard:Individual");
		expect(`vcard:${VCardPropertyType.Address}`).toBe("vcard:Address");
		expect(`vcard:${VCardPropertyType.Phone}`).toBe("vcard:hasTelephone");
		expect(`vcard:${VCardPropertyType.Url}`).toBe("vcard:hasUrl");
		expect(`vcard:${VCardPropertyType.Nickname}`).toBe("vcard:nickname");
		expect(`vcard:${VCardPropertyType.Birthday}`).toBe("vcard:bday");
		expect(`vcard:${VCardPropertyType.Photo}`).toBe("vcard:hasPhoto");
	});
});
