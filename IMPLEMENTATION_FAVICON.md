# IMPLEMENATION_FAVICON Plan

## Objective
Update the website's favicon to use the provided logo image: `public/Logo_zonder_Dami_Systems.png`.
**Crucial Goal**: Ensure the favicon is formatted to the **perfect size**, looking clean, crisp, and maximizing visibility (avoiding a "too small/barely seen" look).

## Current State
- The `public/` directory contains `Logo_zonder_Dami_Systems.png` (approx 2.2MB).
- The `index.html` file currently references `favicon_optimized.png`, which does not exist.
- Current `index.html` references:
  - `apple-touch-icon`: 180x180
  - `icon`: 32x32
  - `icon`: 16x16

## Implementation Plan

We will process the high-resolution logo to create optimized, high-visibility favicons.

### Checklist

- [ ] **Analyze Source Image**:
    - Check the dimensions of `public/Logo_zonder_Dami_Systems.png`.
    - **Optimization Strategy**: content should fill the square as much as possible. If the logo has excessive transparent padding, it must be cropped to maximize the icon size within the 32x32/16x16 canvas.
- [ ] **Generate Optimized & Sized Assets**:
    - We will generate a new set of icons, ensuring valuable pixels are maximized.
    - **Sizes to Generate**:
        - `favicon-180x180.png` (Apple Touch Icon - High Res/Mobile)
        - `favicon-32x32.png` (Desktop Tab - Standard)
        - `favicon-16x16.png` (Small Tab - Low Res)
    - *Technique*: Use a script (e.g., Node.js with `sharp` or similar) to high-quality downscale the image.
- [ ] **Update `index.html`**:
    - Update the `<head>` section to point to these new, specific files.
    - Ensure `sizes` attributes match the actual files.
- [ ] **Clean Up**:
    - Remove old/unused favicon references.
- [ ] **Visual Verification**:
    - Verify the new favicon aligns well and is clearly visible in the browser tab.

## Proposed `index.html` Changes

```html
<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
```
