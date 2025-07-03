// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { DublinCoreContexts, DublinCorePropertyType } from "../src/index";

describe("Dublin Core", () => {
	it("should have correct context", () => {
		expect(DublinCoreContexts.ContextTerms).toBe("http://purl.org/dc/terms/");
	});

	it("should have correct property types", () => {
		expect(`dc:${DublinCorePropertyType.Creator}`).toBe("dc:creator");
		expect(`dc:${DublinCorePropertyType.Description}`).toBe("dc:description");
		expect(`dc:${DublinCorePropertyType.Issued}`).toBe("dc:issued");
		expect(`dc:${DublinCorePropertyType.Modified}`).toBe("dc:modified");
		expect(`dc:${DublinCorePropertyType.Publisher}`).toBe("dc:publisher");
		expect(`dc:${DublinCorePropertyType.Subject}`).toBe("dc:subject");
		expect(`dc:${DublinCorePropertyType.Coverage}`).toBe("dc:coverage");
		expect(`dc:${DublinCorePropertyType.Replaces}`).toBe("dc:replaces");
		expect(`dc:${DublinCorePropertyType.IsReplacedBy}`).toBe("dc:isReplacedBy");
	});
});
