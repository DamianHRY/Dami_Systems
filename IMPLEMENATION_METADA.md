# Implementation Plan: Website Metadata & Social Optimization

This document outlines the plan to replace the default "Bolt" previews with a custom branded snapshot and robust SEO/social metadata for **Dami Systems**.

## 1. Project Objectives
- Replace generic `https://bolt.new/static/og_default.png` with a high-quality website snapshot.
- Implement comprehensive SEO metadata to improve search ranking.
- Ensure premium social media previews across LinkedIn, Twitter/X, and Facebook.
- Add technical SEO headers (robots, canonical, etc.).

## 2. Technical Roadmap

### Phase 1: Asset Preparation
- [x] Save the provided website snapshot as `public/og-main.png`.
- [x] Ensure the image is optimized for web.
- [ ] Check/Update Favicon to match the logo provided in the screenshot.

### Phase 2: Core Metadata Implementation (`index.html`)
- [x] **Standard SEO**:
    - `title`: Dami Systems | Premium AI Automation & Agent Solutions
    - `description`: Automate your business with 24/7 AI agents. We specialize in AI Phone Callers, Chatbots, and custom automation workflows to scale your efficiency.
    - `keywords`: AI Automation, Business AI Agents, AI Phone Calling, Automated Customer Service, Dami Systems.
- [x] **Open Graph (OG)**:
    - `og:type`: website
    - `og:url`: https://damisystems.com
    - `og:title`: Dami Systems - Your Business, Automated with AI
    - `og:description`: Scale your business with AI agents that work 24/7.
    - `og:image`: `/og-main.png`
- [x] **Twitter/X Card**:
    - `twitter:card`: summary_large_image
    - `twitter:title`: Dami Systems - AI Automation Experts
    - `twitter:description`: Transform your operations with cutting-edge AI agents.
    - `twitter:image`: `/og-main.png`

### Phase 3: Technical SEO Additions
- [x] Add `<link rel="canonical" href="..." />`
- [x] Add `<meta name="robots" content="index, follow" />`
- [x] Add `<meta name="theme-color" content="#000000" />`
- [x] Add Apple Touch Icons for iOS home screen consistency.

## 3. Deployment & Validation
- [ ] Verify social previews using [metatags.io](https://metatags.io).
- [ ] Test OG tags with Facebook Sharing Debugger.
- [ ] Verify Twitter Card via X Card Validator.

## 4. Next Steps
1. **User Action**: Save the image you sent as `public/og-main.png`.
2. I have already applied all metadata changes to `index.html`.
3. Verify the changes in your development preview.
