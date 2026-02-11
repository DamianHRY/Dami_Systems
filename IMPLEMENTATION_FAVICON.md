# Favicon Optimization Plan

## Objective
The current favicon (`Logo_zonder_Dami_Systems.png`) renders too small in the browser tab because of excessive transparent padding around the logomark. The goal is to maximize the logo's size within the square aspect ratio to ensure it is "perfectly" visible.

## Status: **In Progress**

### Phase 1: Initial Switch (Completed)
- [x] **Verify Asset**: Confirmed `Logo_zonder_Dami_Systems.png` availability.
- [x] **Update `index.html`**: Switched from the old text-heavy logo to the symbol-only logo.
  - *Result*: Logo is visible but too small (too much whitespace).

### Phase 2: Refinement (Current Focus)
The following steps aim to remove the padding and scale the icon.

#### Step 1: Generate Optimized Asset
- [ ] **Create `favicon_optimized.png`**:
    - Take `public/Logo_zonder_Dami_Systems.png` as input.
    - Crop all surrounding transparent whitespace.
    - Center the logomark in a square canvas.
    - Scale the logomark to touch the edges (maximize size).
    - Save as `public/favicon_optimized.png`.

#### Step 2: Implementation
- [ ] **Update `index.html`**:
    - Change `<link rel="icon" ...>` tags to point to `/favicon_optimized.png`.
    - Change `<link rel="apple-touch-icon" ...>` to point to `/favicon_optimized.png`.

#### Step 3: Verification
- [ ] **Browser Test**: Verify the new icon fills the tab area effectively.
- [ ] **Cache Clear**: Ensure the new file is loaded (force refresh).

## Checklist
- [x] Initial switch to `Logo_zonder_Dami_Systems.png`
- [ ] Generate cropped/maximized `favicon_optimized.png`
- [ ] Update HTML references to new file
- [ ] Final visual verification
