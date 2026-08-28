import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

describe("Dallas mobile hero layout", () => {
  it("reserves enough height for the complete hero message on phones", () => {
    const stylePath = fileURLToPath(new URL("./index.css", import.meta.url));
    const styles = readFileSync(stylePath, "utf8");

    expect(styles).toContain("height: 560px;");
    expect(styles).toContain("font-size: clamp(2.25rem, 10vw, 3rem) !important;");
    expect(styles).toContain("font-size: 1rem;");
  });
});
