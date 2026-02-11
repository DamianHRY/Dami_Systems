# Favicon Optimization Master Plan

## Problem Statement
The current favicon (`Logo_zonder_Dami_Systems.png`) is displayed too small in the browser tab. This is caused by excessive transparent padding (whitespace) around the actual logo mark in the image file.

## Objective
**Maximize the visual size of the favicon.** We need the logo to touch the edges of the square canvas so it utilizes 100% of the available 16x16 or 32x32 pixel space in the browser tab.

## Implementation Plan

### Phase 1: Image Optimization (The Critical Step)
We will create a new asset `favicon_optimized.png` derived from the current logo.

1.  **Input**: `public/Logo_zonder_Dami_Systems.png`
2.  **Action**:
    *   Identify the bounding box of the non-transparent pixels (the logo mark).
    *   **Crop** the image to this bounding box, removing all surrounding transparent space.
    *   **Resize** the cropped logo back to a square aspect ratio (keeping the logo centered and as large as possible without cutting it off).
    *   Ensure the background remains transparent.
3.  **Output**: Save as `public/favicon_optimized.png`.

### Phase 2: Deployment
1.  **Update References**: Modify `index.html` to point to the new `favicon_optimized.png` file for all icon types.
    *   `<link rel="icon" ...>`
    *   `<link rel="apple-touch-icon" ...>`
2.  **Clean Up**: (Optional) Remove the old unused favicon link references.

### Phase 3: Verification
1.  **Clear Cache**: Browsers aggressively cache favicons. We will need to force a refresh.
2.  **Visual Check**: Confirm the logo appears significantly larger in the tab.

## Execution Checklist
- [x] generate_image: Create `favicon_optimized.png` (Crop & Maximize `Logo_zonder_Dami_Systems.png`)
- [x] Update `index.html` to use `favicon_optimized.png`
- [x] Verify content of `index.html`
- [ ] Manual User Verification (Browser Refresh)
