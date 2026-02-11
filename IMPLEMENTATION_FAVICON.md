# Favicon Implementation Plan

## Objective
Update the website's favicon to use the existing `Logo_zonder_Dami_Systems.png` image (Option A). This image, likely containing only the logomark without text, will provide better visibility and aesthetics in browser tabs compared to the current full logo.

## Implementation Steps

### Phase 1: Preparation
- [x] **Verify Asset**: Confirm `Logo_zonder_Dami_Systems.png` is available in the `public/` directory and is suitable for use as an icon.
- [ ] **Backup**: (Optional) Keep the reference to the old favicon temporarily or rely on Git history.

### Phase 2: Initial Implementation
- [x] **Update `index.html`**:
    - Locate the `<head>` section.
    - Replace the `href` attribute for `apple-touch-icon`:
      - *From*: `/FullLogo_Transparent_NoBuffer.png`
      - *To*: `/Logo_zonder_Dami_Systems.png`
    - Replace the `href` attribute for `icon` (32x32):
      - *From*: `/FullLogo_Transparent_NoBuffer.png`
      - *To*: `/Logo_zonder_Dami_Systems.png`
    - Replace the `href` attribute for `icon` (16x16):
      - *From*: `/FullLogo_Transparent_NoBuffer.png`
      - *To*: `/Logo_zonder_Dami_Systems.png`

### Phase 3: Verification & Cleanup
- [ ] **Browser Test**: Open the application in a browser and check the tab to see if the new icon renders correctly.
- [ ] **Hard Refresh**: If the old icon persists, perform a hard refresh (Ctrl+F5) or clear the cache.
- [ ] **Final Check**: Ensure the icon looks good on both light and dark browser themes.

### Phase 4: Optimization (Size Adjustment)
*The user noted the favicon appears too small, indicating excessive padding around the logo.*

- [ ] **Generate Optimized Asset**: Create a new version (`favicon_optimized.png`) by trimming transparent whitespace from `Logo_zonder_Dami_Systems.png` and scaling the logo to fill the canvas.
- [ ] **Update `index.html` Again**: Point the favicon links to the new optimized file.
- [ ] **Verify Visibility**: Confirm the logo appears larger and clearer in the browser tab.

## Checklist
- [x] Verify `public/Logo_zonder_Dami_Systems.png` exists
- [x] Update `apple-touch-icon` link in `index.html`
- [x] Update `icon` (32x32) link in `index.html`
- [x] Update `icon` (16x16) link in `index.html`
- [ ] Verify favicon appears in browser tab
- [ ] Generate `favicon_optimized.png` (Trim whitespace/Maximize logo size)
- [ ] Update `index.html` to use `favicon_optimized.png`
