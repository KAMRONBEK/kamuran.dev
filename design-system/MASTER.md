# Kamuran.dev — Design System (Master)

Generated from UI UX Pro Max for developer portfolio. Source: Portfolio/Personal + Tech Startup.

## Pattern

**Hero-Centric + Social Proof**
- Hero with name/role, CTAs above fold
- Project showcase as social proof
- About/Philosophy section
- Contact CTA at bottom

## Style

**Motion-Driven + Minimalism**
- Parallax (3–5 layers), scroll-triggered reveals
- Clean layout, ample whitespace
- Subtle animations (150–300ms transitions)
- Avoid: Corporate templates, generic layouts

## Colors (Dark Mode)

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | #06b6d4 | Accents, links, CTAs |
| Secondary | #8b5cf6 | Gradients, hover states |
| CTA | #06b6d4 | Buttons, primary actions |
| Background | #030712 | Page background |
| Foreground | #f3f4f6 | Body text |
| Muted | #9ca3af | Secondary text |
| Card | #111827 | Card backgrounds |
| Card Border | #1f2937 | Borders |

## Typography

**Tech Startup** — Space Grotesk + DM Sans
- Headings: Space Grotesk (400, 500, 600, 700)
- Body: DM Sans (400, 500, 700)
- Mono: Geist Mono (code snippets)

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Key Effects

- Soft shadows + smooth transitions (200–300ms)
- Gentle hover states (color/opacity, no layout shift)
- Gradient text for headlines (primary → secondary)
- Subtle grid/dot background patterns

## Anti-Patterns to Avoid

- No emojis as icons (use Heroicons/Lucide SVG)
- No AI purple/pink gradients
- No scale transforms that shift layout on hover
- No bg-white/10 in light mode (too transparent)

## Pre-Delivery Checklist

### Visual Quality
- [ ] No emojis used as icons (use SVG)
- [ ] All icons from Heroicons/Lucide
- [ ] Hover states don't cause layout shift
- [ ] cursor-pointer on all clickable elements

### Interaction
- [ ] Smooth transitions (150–300ms)
- [ ] Focus states visible for keyboard nav
- [ ] prefers-reduced-motion respected

### Layout
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile
- [ ] Floating elements have proper spacing

### Accessibility
- [ ] Text contrast 4.5:1 minimum
- [ ] All images have alt text
- [ ] Form inputs have labels
