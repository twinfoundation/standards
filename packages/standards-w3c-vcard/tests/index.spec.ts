// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { VCardContexts, VCardPropertyType } from "../src/index";

describe("VCard", () => {
	it("should have correct context", () => {
		expect(VCardContexts.Context).toBe("http://www.w3.org/2006/vcard/ns#");
	});

	it("should have correct property types", () => {
		expect(VCardPropertyType.FormattedName).toBe("vcard:fn");
		expect(VCardPropertyType.Email).toBe("vcard:hasEmail");
		expect(VCardPropertyType.Organization).toBe("vcard:Organization");
		expect(VCardPropertyType.Group).toBe("vcard:Group");
		expect(VCardPropertyType.Individual).toBe("vcard:Individual");
		expect(VCardPropertyType.Address).toBe("vcard:Address");
		expect(VCardPropertyType.Phone).toBe("vcard:hasTelephone");
		expect(VCardPropertyType.Url).toBe("vcard:hasUrl");
		expect(VCardPropertyType.Nickname).toBe("vcard:nickname");
		expect(VCardPropertyType.Birthday).toBe("vcard:bday");
		expect(VCardPropertyType.Photo).toBe("vcard:hasPhoto");
	});
});
