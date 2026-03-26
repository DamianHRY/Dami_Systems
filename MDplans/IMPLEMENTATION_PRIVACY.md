# Implementation Plan - Privacy Policy Page

This plan outlines the steps to add a new Privacy Policy page to the Dami Systems website at the `/privacy` route.

## 1. Goal
Add a professional, responsive Privacy Policy page in Dutch that matches the existing dark theme and aesthetic (glassmorphism, cyan accents, smooth animations).

## 2. Technical Approach
- Since the project doesn't have a router yet, I will use `window.location.pathname` for light-weight routing within `App.tsx`.
- Create a new component `src/components/Privacy.tsx`.
- Update `src/components/Footer.tsx` to link to `/privacy`.
- Update `src/components/Navigation.tsx` to ensure proper navigation back to home or to the privacy page.

## 3. Implementation Steps

### Phase 1: Create the Privacy Component
- **File**: `src/components/Privacy.tsx`
- **Content**:
    - Dutch text provided in the request.
    - Styling: Use `bg-gray-900/50`, `backdrop-blur-xl`, `border border-gray-800` for container.
    - Title: Large, bold, with `text-cyan-400` or gradient.
    - Sections: Clear headings and readable body text.
    - Header/Footer: Reuse existing components if possible, or ensure consistent layout.

### Phase 2: Update Routing logic in App.tsx
- Modify `App.tsx` to check `window.location.pathname`.
- If `/privacy`, render `Navigation`, `Privacy`, and `Footer`.
- Otherwise, render the standard landing page.

### Phase 3: Update Navigation and Footer
- **Footer**: Update "Privacy Policy" link from `#` to `/privacy`.
- **Navigation**: Ensure the logo or a "Home" button/link allows user to return to the main page.

## 4. Content (Dutch)
The page will include the following sections as requested:
1. **Inleiding**: Belang van persoonsgegevens bij AI-chatbot diensten.
2. **Welke gegevens verzamelen wij?**: Naam, e-mail, telefoon, afspraakgegevens, berichtinhoud.
3. **Waarvoor gebruiken wij uw gegevens?**: Plannen/wijzigen/annuleren van afspraken, bevestigingen, verbeteren dienstverlening.
4. **Delen van gegevens**: Calendly, Airtable, Meta. Nooit verkoop aan derden.
5. **Beveiliging**: Technische en organisatorische maatregelen.
6. **Bewaartermijn**: Niet langer dan noodzakelijk.
7. **Uw rechten**: Inzage, correctie, verwijdering, bezwaar.
8. **Cookies**: Geen gebruik in de chatbot.
9. **Wijzigingen**: Recht om te wijzigen.
10. **Contact**: Dami Systems, website: www.damisystems.net
- **Onderaan**: "Laatst bijgewerkt: Maart 2026"

## 5. Verification
- Standard checks for responsiveness on mobile and desktop.
- Verify links in footer point to the correct route.
- Ensure the aesthetic matches the "Dami Systems" premium look.
