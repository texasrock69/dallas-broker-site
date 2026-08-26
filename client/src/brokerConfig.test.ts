import { describe, expect, it } from "vitest";
import { brokerConfig } from "./brokerConfig";
import { testimonials } from "./pages/Home";

describe("Dallas broker image assets", () => {
  it("uses project-local paths for the hero and broker headshot", () => {
    expect(brokerConfig.heroImage).toBe("/assets/dallas-hero.webp");
    expect(brokerConfig.brokerPhoto).toBe("/assets/toby-headshot.jpeg");
  });

  it("uses project-local paths for all three reference images", () => {
    expect(testimonials.map(({ image }) => image)).toEqual([
      "/assets/sell-reference.jpg",
      "/assets/buy-reference.jpg",
      "/assets/market-reference.jpg",
    ]);
  });
});
