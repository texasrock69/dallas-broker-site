# Hero Readability Review

The live sample broker hero and the Dallas hero were compared at desktop and 375-pixel phone widths.

The sample treatment uses a stronger left-side overlay: 62% opacity at the left edge, easing to 35% through the copy area, together with a two-layer headline shadow. The Dallas hero had been using a lighter 48% to 28% overlay and no comparable headline shadow. On the brighter, detailed Dallas skyline, this allowed building edges and sky highlights to compete more directly with the white copy.

The Dallas preview now applies the sample treatment using the Dallas navy tint: `rgba(3,14,28,0.62)` at the left edge, easing to `rgba(3,14,28,0.35)`, with the sample headline shadow. The preview confirms a material improvement in headline and body-copy readability on desktop and at 375-pixel phone width while leaving the right side of the Dallas skyline bright and unobscured.

This is currently a local preview only and has not been published to Railway.

## Production verification

The approved treatment was published to Railway and rechecked at 1280 by 720 and 375 by 812 live viewports. At both sizes, the white headline and supporting copy remain clearly readable, the cyan brand headline retains strong contrast, and the right side of the Dallas skyline remains bright and visible.

The Dallas GitHub repository `main` branch was then verified to contain the approved hero readability commit `5be611246acf2ef7ce0b6b22839ce16650876c31`, confirming the production result is backed by the repository update.
