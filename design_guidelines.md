# Portfolio Website Design Guidelines for Grant M. Johnson

## Design Approach
**Reference-Based Approach** inspired by modern developer portfolios (Linear, Vercel, GitHub profiles) with emphasis on clean aesthetics and technical credibility. This portfolio balances professional presentation with creative visual impact to showcase Grant's engineering work and achievements.

## Core Design Principles
1. **Technical Sophistication**: Clean, modern design reflecting engineering precision
2. **Achievement-First**: Highlight awards and accomplishments prominently
3. **Visual Hierarchy**: Guide visitors from intro → projects → experience → skills
4. **Professional Impact**: Create memorable first impression for recruiters/employers

## Color Palette

**Dark Mode (Primary)**
- Background: 222 15% 8% (deep charcoal)
- Surface: 222 13% 12% (elevated cards)
- Primary: 217 91% 60% (vibrant blue - trust, tech)
- Accent: 142 76% 45% (success green for achievements/awards)
- Text Primary: 210 40% 98%
- Text Secondary: 215 20% 65%

**Light Mode**
- Background: 0 0% 100%
- Surface: 210 20% 98%
- Primary: 217 91% 60%
- Text: 222 47% 11%

## Typography

**Font Families** (Google Fonts)
- Primary: 'Inter' - Clean, modern sans-serif for body and UI
- Headings: 'Space Grotesk' - Technical yet approachable for headlines

**Scale**
- Hero Headline: text-6xl md:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl font-bold
- Project Titles: text-2xl font-semibold
- Body: text-base md:text-lg
- Captions: text-sm

## Layout System

**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Consistent section padding: py-20 md:py-32
- Card spacing: p-6 md:p-8
- Gap between elements: gap-6 md:gap-8

**Container Strategy**
- Max width: max-w-7xl
- Content sections: max-w-6xl
- Text content: max-w-4xl

## Component Library

### Hero Section (100vh)
- **Background**: Large professional headshot or workspace image with subtle gradient overlay
- **Content Layout**: Centered with name, title, one-line bio
- **CTA Group**: Email and LinkedIn buttons (variant="outline" with backdrop-blur-md)
- **Scroll Indicator**: Subtle animated arrow at bottom

### Navigation
- Sticky header with backdrop-blur
- Logo/Name (left) + Navigation links (right)
- Smooth scroll to sections
- Mobile: Hamburger menu with slide-in drawer

### Work Experience Timeline
- Vertical timeline with connecting line
- Each entry: Company logo, role, dates, 3-4 key achievements
- Alternating left/right layout on desktop
- Icons for each company (Intel, Galago, ASU)

### Projects Showcase
- Grid layout: grid-cols-1 md:grid-cols-2 gap-8
- Project cards with:
  - Featured image/mockup
  - Award badge (1st Place, Winner) positioned top-right
  - Title, tech stack tags
  - Brief description
  - Links to live demo/GitHub
- Hover effect: subtle scale and shadow enhancement

### Skills Section
- Multi-column grid for categories
- Programming Languages: Badge-style pills with language names
- Frameworks: Icon + name layout
- Tools: Grid of tech logos/icons with labels

### Education & Professional Development
- Split layout: Education (left) | Professional Dev (right)
- ASU degree with GPA badge, honors, coursework list
- Consulting roles with bullet points

### Contact/Footer
- Newsletter signup form (if applicable)
- Social links: LinkedIn, GitHub, Email
- Quick navigation links
- Copyright and "Built with React + Tailwind" credit

## Images

**Hero Image**: Professional headshot or workspace photo with laptop/coding setup, subtle blur or gradient overlay (rgba 0 0 0 / 0.4)

**Project Images**: 
- AlterView: AI/education interface mockup
- Fable: Storytelling app screenshot
- Use placeholder images initially, suggest real screenshots/mockups

**Company Logos**: Intel, Galago, ASU icons for timeline

**Tech Stack**: Icons for React, TypeScript, Next.js, Python, etc.

## Visual Enhancements

**Card Design**
- Rounded corners: rounded-xl
- Subtle shadows: shadow-lg hover:shadow-xl
- Border: border border-white/10 (dark mode)

**Interactive States**
- Hover: Scale (1.02), shadow increase
- Focus: Ring with primary color
- Buttons: Smooth background/text color transitions

**Micro-interactions**
- Project cards: Slide-up animation on scroll into view
- Timeline: Fade-in entries sequentially
- Skills: Stagger animation for tech badges

## Accessibility
- Dark mode default with light mode toggle
- WCAG AA contrast ratios
- Keyboard navigation support
- Screen reader friendly labels
- Focus indicators on all interactive elements

## Responsive Breakpoints
- Mobile: Base styles, single column
- Tablet (md:768px): 2-column projects, expanded nav
- Desktop (lg:1024px): Full multi-column layouts, timeline alternating
- Wide (xl:1280px): Max content width, generous spacing

This design creates a **polished, professional portfolio** that highlights Grant's technical achievements and engineering expertise while maintaining modern visual appeal.