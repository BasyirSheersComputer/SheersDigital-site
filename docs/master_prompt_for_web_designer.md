# MASTER PROMPT FOR WEB DESIGNER

---

## TO: Web Designer / Developer
## FROM: Strategic Advisory
## RE: Complete Website Rebuild — Nocturn AI by Sheers Digital
## PRIORITY: Urgent — Begin Immediately

---

## CONTEXT

You are rebuilding the website for Nocturn AI (by Sheers Software Sdn Bhd), a founding-stage AI-powered inquiry capture system for Malaysian hotels. The product captures guest inquiries across WhatsApp, email, and web chat — 24/7 — so hotels stop losing direct bookings to silence and OTA commissions.

**The company has zero clients.** This is not a flaw to hide — it is a strategic positioning advantage that the website must leverage through a "Founding Cohort" model where 5 hotels are selected as founding partners. Every design and content decision flows from this reality.

You have two reference documents:
1. **The current codebase** (Next.js/React application in the GitHub repository)
2. **The Complete Website Content Document** (the comprehensive guide containing all copy, page architecture, component specifications, and implementation instructions)

Your job is to execute the content document precisely while maintaining and improving the existing visual design system where it works. This prompt tells you exactly how to proceed, in what order, what to keep, what to kill, and what to build new.

---

## YOUR MISSION IN ONE SENTENCE

**Transform this website from a fabricated-proof SaaS marketing site into an honest, high-converting founding-stage product site that earns trust through specificity, transparency, and the sheer quality of how well it articulates the ICP's pain — then channels that trust into Founding Cohort applications.**

---

## PHASE 0: EMERGENCY REMOVALS (Do This First — Before Any Other Work)

**Time estimate: 1-2 hours**
**Why this is Phase 0:** The website currently contains fabricated social proof that poses an immediate credibility risk. If any of our target ICPs — Revenue Managers, GMs, or industry consultants with 20-30 years of experience — visit the site and detect the fabrication (and they will), our credibility is permanently destroyed. These removals must happen before we share the URL with anyone.

### Task 0.1: Remove the Fabricated Social Proof Strip from Homepage

**Location in code:** Homepage, Section 4 — the `section-dark proof-strip` section

**What to remove:**
- The entire section containing "95% Inquiry Response Rate"
- The "< 30s Response Time" stat (in this context — it appears alongside fabricated stats)
- The "RM 8k Avg. Monthly Revenue Recovered" stat
- The fake testimonial quote: "We knew we were losing bookings after 10pm, but we didn't know how many until we turned on Nocturn AI. It paid for itself in the first week."
- The fake attribution: "— Sarah L., Hotel Manager, 3-Star Business Hotel in KL"

**What to do with the space:** Leave it empty for now. This section will be replaced with the Problem Testimony section in Phase 2. Do not put a placeholder. Just remove.

### Task 0.2: Remove the Fabricated Case Study Page

**Location:** `/case-studies` (entire page)

**What to remove:**
- The entire page content, including:
  - "How a Bukit Bintang City Hotel Recovered RM 12k in 30 Days"
  - "463 Inquiries Handled" / "92% Captured" / "RM 12,400 Est. Revenue Recovered"
  - The fabricated problem quote and "Nocturn Fix" description
  - The "EARLY PILOT DATA" badge (there is no pilot data)

**What to do:** 
- Delete the page component entirely
- Set up a 301 redirect: `/case-studies` → `/` (homepage)
- This page will be recreated in the future ONLY when real pilot data exists from real properties

### Task 0.3: Remove the Fabricated Trust Badge from Hero

**Location in code:** Homepage Hero section

**Current code:**
```jsx
<span className="badge badge-green-solid">
  ✦ Trusted by Independent Hotels in Malaysia
</span>
```

**Action:** Replace the text content only (keep the badge component styling):
```
Now accepting 5 hotels into our Founding Cohort
```

### Task 0.4: Remove Fake Client Logos from Book Demo Page

**Location:** `/book-demo` page, the "trust-badges" section

**What to remove:**
- "Powering Revenue Teams At" text
- The fake grayscale logos ("CITY HOTELS" / "RESORT STAY")

**Action:** Remove the entire `trust-badges` div. Do not replace with anything.

### Task 0.5: Remove Unverified Hero Proof Claims

**Location in code:** Homepage Hero, the `hero-proof` div

**Current:**
```
✓ 30-day free pilot · ✓ Recover ~RM 5k/month · ✓ No integration tax
```

**Replace with:**
```
✓ Built for Malaysian hospitality · ✓ WhatsApp + Email + Web · ✓ No system replacement required
```

### Task 0.6: Clean Dashboard Mockup Stats

**Location in code:** Homepage Hero, the `dash-stats` div

**Current third stat:**
```jsx
<div className="dash-stat">
  <span className="dash-num">95%</span>
  <span className="dash-label">Recovery</span>
</div>
```

**Replace with:**
```jsx
<div className="dash-stat">
  <span className="dash-num">3</span>
  <span className="dash-label">Channels Live</span>
</div>
```

**Reason:** "95% Recovery" implies measured performance. "3 Channels Live" describes capability without claiming results.

### PHASE 0 CHECKPOINT
After completing all Task 0.x items, do a full visual scan of every page for any remaining:
- Specific performance numbers presented as achieved results (not projections)
- Named testimonials from people who are not real clients
- "Trusted by" or "Powering" language implying existing client base
- Any reference to the Bukit Bintang case study

**If you find any, remove them. When in doubt, remove it.** We can always add truthful content later. We cannot recover from fabricated content being discovered.

**Commit this as a standalone deployment. The site should be live with these removals before any Phase 1 work begins.**

---

## PHASE 1: STRUCTURAL CHANGES (Page Architecture)

**Time estimate: 4-6 hours**
**Purpose:** Align the site architecture with the new page map, set up redirects, and prepare the skeleton for new content.

### Task 1.1: Create New Pages

Create the following new page files/routes in the Next.js application:

```
/src/app/pilot/page.tsx          (new — Founding Cohort / Pilot Program page)
/src/app/apply/page.tsx          (new — Application page, replaces /book-demo)
```

For now, these can contain placeholder content with the correct page titles and meta tags. Full content will be added in Phase 2.

### Task 1.2: Set Up Redirects

In your Next.js configuration (next.config.js or middleware), set up permanent (301) redirects:

```javascript
async redirects() {
  return [
    {
      source: '/features',
      destination: '/',
      permanent: true,
    },
    {
      source: '/pricing',
      destination: '/pilot',
      permanent: true,
    },
    {
      source: '/case-studies',
      destination: '/',
      permanent: true,
    },
    {
      source: '/book-demo',
      destination: '/apply',
      permanent: true,
    },
  ]
}
```

### Task 1.3: Update Navigation

**Current navigation:**
```
How It Works | Features | Pricing | Case Studies | About | Blog | [Book a Demo]
```

**New navigation:**
```
How It Works | Pilot Program | About | Blog | [Apply for Pilot →]
```

Update both desktop and mobile navigation components.

**Desktop:** The CTA button in the nav ("Apply for Pilot →") should:
- Link to `/apply`
- Use the primary green button style (`btn btn-primary`)
- Be visually distinct from the text nav links

**Mobile (hamburger menu):**
```
How It Works
Pilot Program
About
Blog
---
[Apply for Founding Cohort →]  (full-width green button at bottom of menu)
```

### Task 1.4: Update Footer

Replace the current footer content with:

```
Left column:
  Nocturn AI
  by Sheers Software Sdn Bhd
  
  AI-powered inquiry capture
  for Malaysian hotels.

Middle column (Product):
  How It Works    → /how-it-works
  Pilot Program   → /pilot
  Apply           → /apply

Middle column (Company):
  About           → /about
  Blog            → /blog

Middle column (Legal):
  Privacy Policy  → /privacy
  Terms of Service → /terms

Bottom bar:
  © 2025 Sheers Software Sdn Bhd. SSM Registered. PDPA Compliant. Built in Malaysia 🇲🇾
  
  [LinkedIn icon]  [WhatsApp icon]  [Email icon]
```

Remove any existing "Powering Revenue Teams At" or fake logo strips from the footer if they exist.

Social links:
- LinkedIn → Company LinkedIn page URL (get from Basyir)
- WhatsApp → `https://wa.me/60XXXXXXXXXX` (Basyir's business WhatsApp — get number from Basyir)
- Email → `mailto:hello@sheersdigital.com` (or appropriate domain)

### Task 1.5: Add Announcement Bar Component

Create a new component that renders at the top of every page, above the sticky header.

**Specifications from Content Document Section 16A:**

```jsx
// AnnouncementBar.tsx
// - Full-width bar, background: var(--color-navy)
// - Text: white, 14px, font-weight 600
// - Contains: emoji + text + [Apply →] link + dismiss [✕] button
// - Dismiss persists via localStorage for 7 days
// - Height: ~40px
// - Fixed position above header (header position adjusts when bar is visible)

Content: "🔥 Now Accepting 5 Hotels Into Our Founding Cohort — 30 Days Free"
Link text: "Apply →"
Link destination: /apply
```

This bar must appear on EVERY page. Include it in the root layout component.

### Task 1.6: Add WhatsApp Floating Button

Create a floating action button component that appears on every page.

**Specifications from Content Document Section 21:**

```
- Position: fixed, bottom-right (bottom: 24px, right: 24px)
- Appearance: Circular, 56px diameter, WhatsApp green (#25D366)
- Icon: White WhatsApp icon (use SVG or emoji 💬)
- Shadow: 0 4px 12px rgba(0,0,0,0.15)
- Behavior: 
  - Appears after 3-second delay on page load
  - On click: opens https://wa.me/60XXXXXXXXXX?text=Hi%2C%20I'm%20interested%20in%20Nocturn%20AI%20for%20my%20hotel.
  - On mobile: opens WhatsApp app directly
  - On desktop: opens WhatsApp Web
- Z-index: high enough to float above all content but below modals
- Optional tooltip on hover: "Chat with us on WhatsApp"
- Subtle pulse animation on first appearance (one cycle, then static)
```

Include in root layout so it appears on all pages.

### Task 1.7: Delete Removed Pages

Delete the following page files/components (redirects are already set up in Task 1.2):

```
/src/app/features/page.tsx       → DELETE
/src/app/pricing/page.tsx        → DELETE  
/src/app/case-studies/page.tsx   → DELETE
/src/app/book-demo/page.tsx      → DELETE (after /apply is functional)
```

**Do NOT delete `/book-demo` until `/apply` is fully built and functional in Phase 2.**

### PHASE 1 CHECKPOINT
At this point, the site should have:
- ✅ All fabricated content removed (Phase 0)
- ✅ New page routes created (even if placeholder content)
- ✅ Navigation updated to new page structure
- ✅ All redirects working
- ✅ Footer updated
- ✅ Announcement bar visible on all pages
- ✅ WhatsApp floating button visible on all pages
- ✅ Removed pages deleted (except /book-demo, which stays until /apply is ready)

**Deploy this as a checkpoint build.** Test all redirects. Test navigation on mobile and desktop. Test that no 404s exist.

---

## PHASE 2: HOMEPAGE REBUILD (The Conversion Machine)

**Time estimate: 10-16 hours**
**Purpose:** This is the most important page on the entire site. It does the job of 3-4 pages — it's a long-form landing page that takes the visitor from problem awareness to application intent in one scroll.

### Homepage Section Architecture (Top to Bottom)

Build the homepage with these sections in this exact order. The Content Document provides all copy for each section. I am referencing the section numbers from that document below.

```
Section 1:  HERO                    → Content Doc: Section 4, "Section 1: Hero"
Section 2:  PAIN (Inquiry Graveyard) → Content Doc: Section 4, "Section 2"
Section 3:  WHO THIS IS FOR          → Content Doc: Section 4, "Section 3"
Section 4:  SOLUTION (Features)      → Content Doc: Section 4, "Section 4"
Section 5:  MIDNIGHT TEST            → Content Doc: Section 4, "Section 5"
Section 6:  PROBLEM TESTIMONY        → Content Doc: Section 4, "Section 6"
Section 7:  HOW IT WORKS (condensed) → Content Doc: Section 4, "Section 7"
Section 8:  ROI CALCULATOR           → Content Doc: Section 4, "Section 8"
Section 9:  FOUNDING COHORT OFFER    → Content Doc: Section 4, "Section 9"
Section 10: FOUNDER'S NOTE           → Content Doc: Section 4, "Section 10"
Section 11: FAQ                      → Content Doc: Section 4, "Section 11"
Section 12: FINAL CTA                → Content Doc: Section 4, "Section 12"
```

### Task 2.1: Rebuild Hero Section

**Keep from current site:**
- The overall two-column layout (content left, visual right)
- The WhatsApp bubble animation component (`animate-float` class)
- The dashboard mockup component (with stats adjusted per Phase 0)
- The gradient orb background effect

**Change:**

Replace all text content with the copy from the Content Document.

**New H1:**
```
Your Reservations Team Goes Home at 6PM.
Your Guests Don't Stop Inquiring.
```

**New sub-headline (p.hero-sub):**
```
Malaysian hotels lose direct bookings every night to unanswered WhatsApp messages, unfollowed emails, and after-hours silence. Nocturn AI captures every inquiry, responds instantly, follows up automatically, and shows you exactly what you're converting — 24/7.
```

**New CTA button:**
```
Text: "Apply for Founding Cohort →"
Link: /apply
Style: Keep btn btn-primary btn-lg
```

**Below CTA:**
```
Text: "30-day free pilot · No setup fee · Live in 48 hours"
Style: Keep text-small text-gray-500
```

**New hero-proof bar:**
```
✓ Built for Malaysian hospitality · ✓ WhatsApp + Email + Web · ✓ No system replacement required
```

**Meta tags:**
```html
<title>Nocturn AI — Stop Losing Hotel Bookings to Silence | 24/7 Inquiry Capture</title>
<meta name="description" content="Malaysian hotels lose 12-18% of direct bookings to unanswered WhatsApp messages & emails. Nocturn AI captures every inquiry 24/7. Live in 48 hours. 30-day free pilot." />
```

### Task 2.2: Rebuild Pain Section

**Keep from current site:**
- The stat-grid layout with 3 stat-cards
- The counter animation script (IntersectionObserver-based)
- The eyebrow + h2 pattern

**Change all content.** Replace the three stat cards and body copy with the exact content from the Content Document Section 4, Section 2.

**New stat cards:**

Card 1:
```
Number: 90 (with % suffix, animated)
Label: of Malaysian hotel bookings come from manual channels
Sub: WhatsApp, phone calls, emails, walk-ins — not your website.
Source: Based on industry operator interviews, 2025
```

Card 2:
```
Number: 30 (with + suffix, animated)
Label: daily inquiry touchpoints per property
Sub: And your reservation desk has 3 people to handle them all.
Source: Malaysian hotel operator data, 2025
```

Card 3:
```
Number: 0 (with % suffix, animated)
Label: of inquiries captured after 6PM
Sub: When your reservations team goes home, every inquiry is dropped.
Source: Independent hotel operator interviews, 2025
```

**New body copy:** Replace with the three ❌ scenario paragraphs from the Content Document (WhatsApp at 9:47 PM, corporate email buried, phone call during check-in).

**Design note:** The "0%" stat card should feel visually stark — perhaps use a red accent instead of green to convey the severity of "zero capture after hours."

### Task 2.3: Rebuild Who This Is For Section

**Keep from current site:**
- The 3-card grid layout
- The emoji + title + description card structure

**Change all content.** Use the three persona cards from Content Document Section 4, Section 3:
1. 🛎️ The Reservation Manager
2. 📈 The Revenue Manager
3. 👔 The General Manager

**Remove** the qualifying text "Not for budget hotels. Not for 5-star luxury resorts." Replace with the positive sub-title from the Content Document.

### Task 2.4: Build Solution Section (Replaces /features page entirely)

**This is NEW content.** The current homepage has a solution section but it needs to be expanded to include ALL features that were previously on the separate `/features` page.

Use the six feature blocks from Content Document Section 4, Section 4.

**Layout:** 2-column grid on desktop (3 rows × 2 columns), single column stack on mobile.

Each feature block:
```
[Icon emoji]
[Title — bold, 18px]
[Description — 14-16px, gray-600]
```

**Visual companion:** Keep the mockup showing "Live Conversations" with WhatsApp/Email/Web Chat entries and status indicators. This mockup already exists on the current site in the solution section — keep it, positioned to the left or right of the feature grid.

**Section heading:**
```
Eyebrow: THE SOLUTION
H2: One Inbox. Every Channel. Every Inquiry Captured — Even at 3AM.
Sub: [from Content Document]
```

### Task 2.5: Build/Update Midnight Test Section

**Keep from current site:**
- The WhatsApp conversation mockup styling (it is excellent)
- The green header bar with hotel name
- The alternating bubble layout

**Change:**
- Update the conversation copy to match Content Document Section 4, Section 5
- **ADD** the system capture tag at the bottom of the conversation (this is NEW):

```html
<div style="background: var(--color-gray-100); padding: 8px 12px; border-radius: 8px; 
            font-size: 12px; color: var(--color-gray-500); margin-top: 8px; 
            border-left: 3px solid var(--color-green);">
  Lead captured · Name: Ahmad · Intent: Room booking · Channel: WhatsApp · 
  Time: 11:48 PM · Status: Queued for morning team
</div>
```

- **ADD** the commission math paragraph below the mockup (from Content Document)

### Task 2.6: Build Problem Testimony Section (NEW — Replaces Fabricated Social Proof)

**This is the section that replaces the deleted social proof strip from Phase 0.**

**This section is entirely new.** Build it according to Content Document Section 4, Section 6.

**Layout:** 
- Section with light background (var(--color-gray-50))
- Eyebrow: "WHAT OPERATORS TOLD US"
- H2: From Content Document
- Sub-headline: From Content Document
- 4 testimony cards in a 2×2 grid on desktop, stacked on mobile

**Testimony card component spec** (from Content Document Section 16B):
```
- Background: white
- Border: 1px solid var(--color-gray-200)
- Border-left: 3px solid var(--color-green)
- Quote: 16-18px, italic, var(--color-navy), line-height 1.6
- Divider: thin horizontal line below quote
- Attribution line 1: Role title (e.g., "Revenue Manager")
- Attribution line 2: Property type + location (e.g., "International 4-Star Chain Hotel, Kuala Lumpur")
- Attribution style: 14px, var(--color-gray-500), font-weight 600
- Padding: 24-32px
- Border-radius: 12px
- NO star ratings, NO photos, NO "verified" badges
```

**4 quotes to use:** Exactly as provided in Content Document Section 4, Section 6. Do not modify the wording.

**Below the 4 cards, add the closing line:**
```
"These aren't testimonials for our product. They're testimonies of the problem. 
We built Nocturn AI to be the solution these operators described — nothing more, nothing less."
```

Style this closing line in italic, var(--color-gray-500), centered, 14px.

### Task 2.7: Build Condensed How It Works Section

**Keep from current site:**
- The 3-step card layout with step numbers
- The dashed connector lines between steps

**Change all content** to match Content Document Section 4, Section 7.

**Key addition:** Each step card must include a "Your time:" line styled distinctly:
```css
.step-time {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-green);
  margin-top: 8px;
}
```

**Below the steps, add a link:**
```
[See the Full Setup Timeline →]  → links to /how-it-works
Style: btn btn-outline (current outline button style)
```

### Task 2.8: Update ROI Calculator

**Keep from current site:**
- The calculator component, sliders, inputs, and calculation logic — it works well
- The visual layout

**Change:**
1. Update CTA text from "Book a Demo" to "Apply for Founding Cohort →" (link to `/apply`)
2. Update disclaimer text to match Content Document Section 4, Section 8
3. Update framing text above the calculator
4. Add ADR context note below the ADR input: "(The average ADR for Malaysian 3-4 star hotels is approximately RM 200-280)"

### Task 2.9: Build Founding Cohort Offer Section (NEW — Core Conversion Section)

**This is entirely new and is the most important section on the homepage.**

Build according to Content Document Section 4, Section 9.

**Layout:**
```
┌──────────────────────────────────────────────────────────┐
│  Eyebrow: FOUNDING COHORT                                │
│  H2: Be One of the First 5 Hotels to Shape...           │
│  Sub-headline paragraph                                  │
│                                                          │
│  ┌──────────────────────────────────────────────┐        │
│  │ ✅ Full Nocturn AI Setup                     │        │
│  │    Description...                            │        │
│  ├──────────────────────────────────────────────┤        │
│  │ ✅ AI Knowledge Base                         │        │
│  │    Description...                            │        │
│  ├──────────────────────────────────────────────┤        │
│  │ ✅ 48-Hour Installation                      │        │
│  │    Description...                            │        │
│  ├──────────────────────────────────────────────┤        │
│  │ ✅ Automated Follow-Up Engine                │        │
│  │    Description...                            │        │
│  ├──────────────────────────────────────────────┤        │
│  │ ✅ Conversion Tracking Dashboard             │        │
│  │    Description...                            │        │
│  ├──────────────────────────────────────────────┤        │
│  │ ✅ GM Morning Report                         │        │
│  │    Description...                            │        │
│  ├──────────────────────────────────────────────┤        │
│  │ ✅ Guest Insight Report at Day 30            │        │
│  │    Description...                            │        │
│  ├──────────────────────────────────────────────┤        │
│  │ ✅ Direct WhatsApp Line to Founder           │        │
│  │    Description...                            │        │
│  └──────────────────────────────────────────────┘        │
│                                                          │
│  ╔══════════════════════════════════════════════╗        │
│  ║  🛡️ THE 30-DAY GUARANTEE                   ║        │
│  ║  [Guarantee copy from Content Doc]          ║        │
│  ╚══════════════════════════════════════════════╝        │
│                                                          │
│  [Apply for Founding Cohort — 5 Spots Only →]  (button) │
│  Application takes 2 minutes. We respond within 24 hrs. │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Value stack items:** Use the Value Stack Item component spec from Content Document Section 16C.

**Guarantee box:** Use the Guarantee Box component spec from Content Document Section 16D. This box MUST be visually distinct — green border, light green background tint, shield emoji. It's the risk-reversal moment that overcomes the final objection.

**CTA button:** Large, green, full-width on mobile. Links to `/apply`.

**This section should feel like the climax of the page.** Everything above it builds the case. This section makes the offer. Everything below it handles remaining objections (founder's note, FAQ) and provides the final push (closing CTA).

### Task 2.10: Build Founder's Note Section (NEW)

Build according to Content Document Section 4, Section 10.

**Layout:**
- Different visual treatment from other sections — this should feel like a personal letter
- Optional: slightly off-white or cream background, or a subtle paper texture
- Photo of Basyir on the left (or above on mobile) — if no professional photo is available, use a clean branded placeholder with initials
- First-person copy on the right
- Signature line: "— Basyir Sheers, Founder, Sheers Software Sdn Bhd"

**Copy:** Exactly as provided in the Content Document. Do not modify the tone — it is deliberately personal and vulnerable.

### Task 2.11: Build FAQ Section

**Keep from current site:**
- The accordion expand/collapse mechanism
- The FAQ Schema JSON-LD implementation

**Replace all FAQ content** with the 9 FAQ items from Content Document Section 4, Section 11.

**Important:** The current site has 6 FAQ items. The new site has 9. Add the three new ones:
- "We already use WhatsApp for everything. How is this different?"
- "What happens after 6PM when our reservations team goes home?"
- "We tried a chatbot before and nobody used it."

These three specifically address objections surfaced in our ICP interviews and are critical for conversion.

### Task 2.12: Build Final CTA Section

**Keep from current site:**
- The dark background styling
- The pattern overlay (if it exists)

**Replace all content** with copy from Content Document Section 4, Section 12.

**New H2:** "Every Night Your Hotel Isn't Capturing Inquiries, You're Paying for It in OTA Commissions"

**Remove:** "78% of hotel chains have integrated AI in 2025" and "Your Competitors Are Already Capturing..."

**CTA button:** "Apply for Founding Cohort →" linking to `/apply`

**Below CTA:** "30-day free pilot · No setup fee · Live in 48 hours · 5 spots remaining"

### PHASE 2 CHECKPOINT

The homepage should now have 12 sections in the exact order specified. Do a complete visual review:

- [ ] Hero reads naturally and the CTA is prominent
- [ ] Pain section stat cards animate on scroll
- [ ] Persona cards clearly describe each ICP role
- [ ] All 6 solution features are visible and scannable
- [ ] Midnight Test WhatsApp mockup looks authentic
- [ ] Problem testimony cards display 4 real operator quotes
- [ ] How It Works shows 3 steps with "Your time:" indicators
- [ ] ROI calculator is functional with updated CTA
- [ ] Founding Cohort offer section has all 8 value stack items + guarantee box
- [ ] Founder's note feels personal and distinct from other sections
- [ ] FAQ accordion works with all 9 items
- [ ] Final CTA has updated copy and links to /apply
- [ ] Every CTA on the page links to /apply (not /book-demo)
- [ ] No fabricated content remains anywhere on the page
- [ ] Page is fully responsive on mobile (all grids collapse to single column)

**Deploy and test on mobile devices before proceeding to Phase 3.**

---

## PHASE 3: SECONDARY PAGES

**Time estimate: 8-12 hours**
**Purpose:** Build the supporting pages that handle specific visitor intents (detailed process, pilot details, company trust, application form).

### Task 3.1: Rebuild /how-it-works

**Content source:** Content Document Section 5

**Keep from current site:**
- The vertical timeline component with dots and connector lines
- The TimelineStep component structure

**Changes:**
1. Replace hero headline and sub-headline with Content Document copy
2. Replace all 6 timeline steps with new content (Day 0 through Day 30 — the current site has these but content needs updating)
3. **ADD new section: "What Your Team Does / Doesn't Do"** — this is a two-column comparison table that doesn't currently exist. Build it as a simple grid:

```
Left column (green accents):     Right column (red/gray accents):
YOUR TEAM DOES:                  YOUR TEAM DOESN'T:
✓ Share property info            ✗ Install any software
✓ Review morning report          ✗ Learn a new system
✓ Take over complex convos      ✗ Change existing workflow
✓ Give feedback in reviews       ✗ Integrate with Opera/PMS
✓ Close the bookings captured    ✗ Manage technical setup
                                 ✗ Stay late for after-hours inquiries
```

4. **Update demo video section:** Remove "Demo video coming soon" text. Replace with: "We'll walk you through a live demo personalized for your property during your application call." Keep the video placeholder box for when the actual video is recorded.
5. Update page CTA to link to `/apply` with new copy from Content Document

### Task 3.2: Build /pilot (NEW page — replaces /pricing)

**Content source:** Content Document Section 6

**Page structure:**
1. Hero section (headline + sub-headline)
2. What You Get — 6 value stack items using the Value Stack Item component
3. The 30-Day Guarantee — using the Guarantee Box component
4. What Happens After the Pilot — pricing philosophy section (text only, no price cards)
5. Who Should Apply — qualification checklist (✅ right fit items + ❌ not right fit items)
6. Page CTA — links to `/apply`

**Critical design note:** This page deliberately does NOT show pricing tiers. Do not carry over any PricingCard components from the deleted /pricing page. The philosophy is explained in Content Document Section 6, Section 4 — pricing is discussed in the qualification call, not displayed publicly.

**The qualification checklist (Section 5 of this page) serves a dual purpose:**
1. Filters out bad-fit prospects
2. Makes the right-fit ICP self-identify ("That's literally my situation")

Style the "right fit" items with green checkmarks and the "not right fit" items with neutral gray text — don't use red X marks, which feel exclusionary. Use a softer "This cohort is NOT designed for:" framing.

### Task 3.3: Rebuild /about

**Content source:** Content Document Section 7

**Keep from current site:**
- The general page structure and section layouts
- The credential cards (SSM, PDPA, Malaysian-Founded)
- The "Why Nocturn?" name explanation section

**Changes:**
1. Replace hero headline and sub-headline
2. **REPLACE the origin story** — the current site names specific interviewees (Zul, Bernard, Shamsuridah). Replace with anonymized role descriptions per Content Document Section 7, Section 2
3. **ADD new section: The Founder** — include Basyir's name, photo (if available), brief bio, and LinkedIn/email links. Spec in Content Document Section 7, Section 4
4. **ADD new section: Advisory / Industry Input** — deliberately vague section signaling that industry professionals contributed to the product development. Spec in Content Document Section 7, Section 5
5. Update company credentials card to include SSM registration number (get from Basyir)
6. Update page CTA to link to `/apply`

### Task 3.4: Build /apply (NEW page — replaces /book-demo)

**Content source:** Content Document Section 8 and Section 16H

**Layout:** Two columns on desktop (value left, form right). Single column on mobile (value ABOVE form).

**Left column (value reinforcement):**
- H1: "Apply for the Founding Cohort"
- Sub-headline
- 5-item value checklist with green checkmarks
- Trust indicators (SSM, PDPA, Malaysian-Built, 48-Hour Setup) — small icons

**Right column (application form):**

Build a custom-styled form (NOT a HubSpot embed) with these fields. See Content Document Section 16H for exact specifications.

**Form fields:**
```
Group 1 — About You:
  - Full Name (text, required)
  - Role (dropdown, required): GM / Revenue Manager / Reservation Manager / Front Office Manager / Director of Sales / Owner / Other

Group 2 — About Your Property:
  - Hotel/Property Name (text, required)
  - City/Location (text, required)
  - Number of Rooms (dropdown, required): Under 50 / 50-100 / 100-200 / 200-300 / 300+
  - Star Rating (dropdown, required): 2-star/Budget / 3-star / 4-star / 5-star / Boutique/Unrated

Group 3 — Current Reality:
  - Inquiry Channels (multi-checkbox, required): WhatsApp / Phone / Email / Website / Walk-ins / OTA messaging
  - Daily Inquiries (dropdown, required): Under 10 / 10-30 / 30-50 / 50-100 / 100+
  - Biggest Frustration (textarea, optional, max 500 chars)

Group 4 — Contact:
  - Email (email input, required)
  - WhatsApp Number (tel input, required)
```

**Submit button:** Full-width, green, "Submit Application →"

**Below submit:** "We review every application personally and respond within 24 hours via WhatsApp."

**Form backend:**
- POST to HubSpot via API (if HubSpot is set up) OR to Airtable via API
- On successful submit: 
  1. Redirect to `/thank-you`
  2. Fire `form_submit` event to Google Analytics 4
  3. Send notification to Basyir's WhatsApp via Make/Zapier webhook with all form data

**Form validation:**
- Real-time validation (not just on submit)
- Email format check
- Phone number format check (accept +60 format)
- Required field indicators and error messages

**CRITICAL: Do NOT use the HubSpot default form embed.** The current /book-demo page uses `HubSpotLeadForm` and `HubSpotModal` components. These should be replaced with a custom form that matches the site design. The HubSpot form looks generic and signals template-level effort to sophisticated ICPs.

If the backend integration with HubSpot is needed for CRM, POST the form data to HubSpot's API endpoint programmatically from your custom form's submit handler.

### Task 3.5: Rebuild /thank-you

**Content source:** Content Document Section 10

**Changes from current page:**
1. Replace headline with "Application Received. Here's What Happens Next."
2. Replace body with specific 3-step next-steps timeline (from Content Document)
3. **Remove** link to Case Studies (page is deleted)
4. **ADD** two blog article links (link to the first two articles when they're published — until then, link to `/blog`)
5. **ADD** direct contact info: "Questions? WhatsApp us at [number] or email hello@[domain]."
6. Remove the 🎉 emoji and "You're all set!" — replace with ✅ and the more specific headline

### PHASE 3 CHECKPOINT

All pages should now be complete. Do a full-site navigation test:

- [ ] Homepage → all 12 sections render correctly
- [ ] How It Works → timeline + team comparison + video placeholder + CTA
- [ ] Pilot Program → value stack + guarantee + pricing philosophy + qualification + CTA
- [ ] About → origin story + company + founder + advisory + name story + CTA
- [ ] Apply → value column + 10-field form + form submits successfully
- [ ] Thank You → next steps + article links + contact info
- [ ] Blog → hub page loads (articles may be stubs — that's fine for now)
- [ ] Every CTA across all pages links to /apply
- [ ] All redirects work (/features, /pricing, /case-studies, /book-demo)
- [ ] Navigation works on desktop and mobile
- [ ] Announcement bar appears on all pages
- [ ] WhatsApp floating button appears on all pages
- [ ] Footer is consistent across all pages

---

## PHASE 4: BLOG SETUP

**Time estimate: 2-4 hours (template setup — content to be provided separately)**
**Purpose:** Set up the blog infrastructure so articles can be published as they're written.

### Task 4.1: Clean Up Blog Hub Page

**Keep:** The article grid layout and card styling from the current site.

**Remove:** All article cards that link to "Coming Soon" stub pages. The blog hub should ONLY show articles that have been fully written and published.

**If no articles are ready at launch:** Show the blog hub page with:
```
Headline: Insights for Hotel Revenue Leaders
Sub: Data-backed articles on capturing more direct bookings, reducing OTA dependency, 
     and using AI to recover lost revenue. First articles publishing soon.

[Subscribe notification — email input + "Notify me when articles are published" button]
```

This is better than showing 8 article cards that all lead to "Coming Soon" pages.

### Task 4.2: Update Blog Article Template

**Keep:** The general article page layout.

**Changes:**
1. Add author info block at top of article:
```
[Photo] Basyir Sheers · Founder, Sheers Software · [date] · [reading time]
```

2. Add contextual CTA at end of article (not generic "Book a Demo"):
```
Each article's closing CTA should relate to the article topic.
Example for "After-Hours Revenue Leak" article:
  "Want to see what your after-hours inquiry capture could look like? 
   Apply for our Founding Cohort — we'll show you in your first morning report."
  [Apply for Founding Cohort →]
```

3. Ensure Article Schema (JSON-LD) is implemented on each article page with:
   - headline
   - datePublished
   - author (name + url)
   - publisher (organization name + logo)
   - description

4. Remove the generic "Article Coming Soon" component from the `[slug]` template. Each slug should either render real content or return a 404 (not a "coming soon" page).

### Task 4.3: Update Blog Article Categories and Colors

**Keep the current category color mapping** — it works. Update to match the final article list:

```javascript
const categoryColors = {
  "Revenue Recovery": "#22C55E",    // Green
  "Direct Bookings": "#3B82F6",     // Blue
  "Technology": "#8B5CF6",          // Purple
  "Industry": "#F59E0B",           // Amber
  "Compliance": "#64748B",         // Gray
  "Product": "#0F172A",            // Navy
};
```

---

## PHASE 5: TECHNICAL SETUP

**Time estimate: 4-6 hours**
**Purpose:** Analytics, SEO infrastructure, and form backend.

### Task 5.1: Google Analytics 4 Setup

Install GA4 and configure the following events (from Content Document Section 14):

```javascript
// Custom events to track:
gtag('event', 'scroll_depth_50', { page: window.location.pathname });
gtag('event', 'scroll_to_pain_section', {});
gtag('event', 'scroll_to_solution_section', {});
gtag('event', 'scroll_to_offer_section', {});
gtag('event', 'roi_calculator_interaction', { action: 'slider_moved' });
gtag('event', 'cta_click', { location: 'hero' | 'offer' | 'final' | 'nav' });
gtag('event', 'form_view', {});
gtag('event', 'form_start', { first_field: field_name });
gtag('event', 'form_submit', {});
gtag('event', 'faq_expand', { question: question_text });
gtag('event', 'blog_article_click', { article: slug });
```

**Scroll depth events** should use IntersectionObserver (the current site already uses this pattern for counter animations — extend it).

**CTA click events** should use data attributes on the buttons:
```html
<a href="/apply" class="btn btn-primary" data-cta-location="hero">Apply for Founding Cohort →</a>
```

### Task 5.2: Form Backend Integration

Set up the application form submission pipeline:

**Option A (HubSpot):**
```
Form submit → POST to HubSpot Contacts API → Create/update contact
                                            → Set lifecycle stage to "Lead"
                                            → Set lead source to "Website - Founding Cohort Application"
                                            → Map all form fields to HubSpot properties
```

**Option B (Airtable — simpler, recommended if HubSpot is not already configured):**
```
Form submit → POST to Airtable API → Create record in "Applications" table
                                    → Columns: Name, Role, Property, City, Rooms, 
                                      Star Rating, Channels, Daily Inquiries, 
                                      Frustration, Email, WhatsApp, Date, Status
```

**Regardless of Option A or B, also set up:**
```
Form submit → POST to Make.com/Zapier webhook → Send WhatsApp message to Basyir
                                                with all form data
```

The WhatsApp notification is CRITICAL. When a property applies, Basyir needs to know within minutes — not hours. The promise on the site is "We respond within 24 hours" but the competitive advantage is responding within 1 hour.

### Task 5.3: SEO Infrastructure

1. **Sitemap:** Ensure `sitemap.xml` is auto-generated and includes all public pages:
```
/
/how-it-works
/pilot
/about
/apply
/blog
/blog/[each-published-slug]
/privacy
/terms
```

2. **robots.txt:**
```
User-agent: *
Allow: /
Disallow: /thank-you
Sitemap: https://[domain]/sitemap.xml
```

3. **Schema markup:**
   - Homepage: FAQPage Schema (already exists in current code — update content to match new 9 FAQs)
   - About: Organization Schema
   - Blog articles: Article Schema
   - All pages: BreadcrumbList Schema

4. **Meta tags:** Verify every page has the exact meta title and description specified in the Content Document.

5. **Canonical URLs:** Ensure each page has a self-referencing canonical tag.

### Task 5.4: Legal Pages

Create minimal but real `/privacy` and `/terms` pages. See Content Document Section 20 for required content areas.

These don't need to be designed with the full section styling — a clean text layout with proper headings is sufficient. But they MUST exist and contain substantive content, not placeholder text. Floyd explicitly mentioned PDPA data protection as a concern in his assessment.

---

## PHASE 6: FINAL QA AND LAUNCH

**Time estimate: 4-6 hours**
**Purpose:** Comprehensive testing across devices, browsers, and user flows.

### Task 6.1: Content Audit

Go through the complete Pre-Launch QA Checklist from Content Document Section 23. Every item must be checked off.

**The most critical checks:**
```
□ ZERO fabricated statistics remain on any page
□ ZERO fabricated testimonials remain on any page
□ ZERO "Trusted by" or "Powering" claims without real clients
□ All operator quotes have been verified for permission
□ Application form submits successfully and triggers WhatsApp notification
□ All redirects work (test each: /features, /pricing, /case-studies, /book-demo)
□ All CTAs link to /apply
□ Mobile layout is fully functional on iPhone SE and Galaxy S23
```

### Task 6.2: Cross-Browser Testing

Test on:
- Chrome (desktop + mobile)
- Safari (desktop + iPhone)
- Firefox (desktop)
- Samsung Internet (mobile)
- WhatsApp in-app browser (CRITICAL — many visitors will open the link from WhatsApp)

### Task 6.3: Performance Audit

Run Lighthouse audit on all pages. Targets:
- Performance: 85+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

Fix any critical issues (render-blocking CSS, unoptimized images, missing alt text).

### Task 6.4: User Flow Testing

Walk through these complete user journeys and verify each works end-to-end:

**Journey 1: Direct visitor**
```
Google search → Homepage → scroll through all sections → click "Apply" CTA → 
/apply page → fill form → submit → /thank-you page → WhatsApp notification received
```

**Journey 2: Blog entry**
```
Google search → Blog article → read article → click contextual CTA → 
/apply page → fill form → submit → /thank-you page
```

**Journey 3: Referral (WhatsApp shared link)**
```
Open link in WhatsApp browser → Homepage renders correctly → 
scroll → click CTA → /apply → form works in WhatsApp browser
```

**Journey 4: Information gatherer**
```
Homepage → How It Works → Pilot Program → About → Apply
(verify navigation flow and all internal links work)
```

**Journey 5: Mobile quick visitor**
```
Homepage on iPhone → reads hero + pain sections → 
clicks CTA in hero → /apply on mobile → form is usable without zooming → 
submit → thank-you page → taps WhatsApp floating button
```

---

## SUMMARY: WHAT THE FINISHED SITE LOOKS LIKE

When all phases are complete, the website consists of:

```
7 Pages:
├── /              Homepage (12 sections, long-form landing page)
├── /how-it-works  Detailed setup timeline + team responsibilities
├── /pilot         Founding Cohort details + guarantee + qualification
├── /about         Founder story + company + advisory
├── /apply         Application form (the single conversion point)
├── /blog          Content hub (articles published as written)
└── /thank-you     Post-application confirmation with next steps

2 Legal Pages:
├── /privacy       Privacy Policy
└── /terms         Terms of Service

Global Elements:
├── Announcement bar (top of every page)
├── Updated navigation (5 items + CTA button)
├── Updated footer (company info, links, social, legal)
└── WhatsApp floating button (bottom-right of every page)

Redirects:
├── /features     → /
├── /pricing      → /pilot
├── /case-studies → /
└── /book-demo    → /apply
```

**Zero fabricated content.** 
**Zero fake social proof.** 
**One clear offer: Join the Founding Cohort.** 
**One clear action: Apply.**

Every page, every section, every sentence drives toward that application. The site earns trust through specificity (real operator quotes, real pain points, real numbers), transparency (founding stage, no clients yet, founder's direct WhatsApp), and a risk-free offer (30 days free, no contracts, no credit card).

---

## COMMUNICATION PROTOCOL

### During Implementation

- Share progress at end of each Phase for review
- Do not proceed to next Phase until current Phase is approved
- If any content is unclear or seems contradictory, refer to the Content Document first. If still unclear, ask before guessing. A wrong guess on content could reintroduce fabricated claims.
- All copy changes must match the Content Document exactly. Do not rephrase, "improve," or add creative flair to the provided copy. The language was specifically crafted to match how hospitality operators actually speak, based on real interview data.

### After Launch

- Monitor GA4 data for the first 72 hours
- Report any form submission failures immediately
- Report any 404 errors from the redirect mapping
- Be available for rapid fixes in the first week post-launch

---

**Begin with Phase 0 immediately. The fabricated content is the single biggest risk to this company's credibility and must be removed before anything else is built.**

**Once Phase 0 is deployed, proceed through Phases 1-6 in order. Do not skip phases. Do not parallelize Phase 2 (homepage) with Phase 3 (secondary pages) — the homepage must be complete and approved before secondary pages are built, because the homepage establishes the design patterns, component library, and content standards that all other pages inherit.**

**Total estimated implementation time: 30-45 hours across all phases.**

**Let's build this right.**