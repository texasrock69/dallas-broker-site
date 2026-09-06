import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

describe("Dallas hero readability", () => {
  it("uses the stronger navy overlay and headline shadow from the sample broker treatment", () => {
    const homePath = fileURLToPath(new URL("./pages/Home.tsx", import.meta.url));
    const source = readFileSync(homePath, "utf8");

    expect(source).toContain("rgba(3,14,28,0.62)");
    expect(source).toContain("rgba(3,14,28,0.35)");
    expect(source).toContain("textShadow: \"0 2px 12px rgba(0,0,0,0.75)");
  });
});
