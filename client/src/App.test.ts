import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

describe("Dallas app shell", () => {
  it("does not render the floating chat widget", () => {
    const appPath = fileURLToPath(new URL("./App.tsx", import.meta.url));
    const source = readFileSync(appPath, "utf8");

    expect(source).not.toMatch(/import\s+ChatBot/);
    expect(source).not.toMatch(/<ChatBot\s*\/>/);
  });
});
