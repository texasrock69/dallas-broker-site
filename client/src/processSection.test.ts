import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

describe("Dallas process section", () => {
  it("uses the same high-contrast step treatment as the sample broker site", () => {
    const homePath = fileURLToPath(new URL("./pages/Home.tsx", import.meta.url));
    const source = readFileSync(homePath, "utf8");

    expect(source).toContain("processSteps.map((s, idx)");
    expect(source).toContain('style={{ color: "#00b4c8"');
    expect(source).toContain("bg-green-500 rounded");
    expect(source).toContain("2px dashed #00b4c8");
    expect(source).toContain("text-gray-300 text-sm leading-relaxed");
  });
});
