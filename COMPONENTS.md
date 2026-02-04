# 📦 Component Usage Guide

## DemoSection (Most Important - Reusable!)

The `DemoSection` component is your workhorse for showcasing features. Use it as many times as you need.

### Basic Image Demo
```astro
<DemoSection
  id="my-feature"
  title="Feature Title"
  subtitle="Optional description"
  mediaSrc="/images/my-demo.png"
  mediaAlt="Description for screen readers"
  backgroundColor="#ffffff"
/>
```

### Video Demo
```astro
<DemoSection
  id="video-feature"
  title="Watch it in Action"
  subtitle="See how it works"
  mediaType="video"
  mediaSrc="/images/demo.mp4"
  backgroundColor="#f9f9f9"
/>
```

### Props Reference
- `id` (optional): HTML id for anchor links
- `title` (required): Section heading
- `subtitle` (optional): Description text
- `mediaType` (optional): `"image"` or `"video"` (default: `"image"`)
- `mediaSrc` (required): Path to media file (in `/public/images/`)
- `mediaAlt` (optional): Alt text for images
- `backgroundColor` (optional): Background color (default: `#ffffff`)

---

## Navbar

Simple navigation with logo and CTA button.

### Customization
Edit `src/components/Navbar.astro`:

```astro
<!-- Change logo text -->
<span class="logo-text">Your Brand</span>

<!-- Update button link -->
<a href="https://your-link.com" class="cta-button">
  Your CTA Text
</a>
```

---

## Hero

Your main landing section with gradient background.

### Customization
Edit `src/components/Hero.astro`:

```astro
<!-- Update headline -->
<h1 class="hero-title">
  Your Main<br />
  Headline Here
</h1>

<!-- Update subheadline -->
<p class="hero-subtitle">
  Your compelling description that explains what you do.
</p>

<!-- Change demo image -->
<img 
  src="/images/your-hero-image.png" 
  alt="Your product demo" 
/>
```

### Background Colors
Gradient is defined in `src/layouts/Layout.astro`:
```css
--gradient-start: #FFA6B3;
--gradient-end: #F78595;
```

---

## FeatureCards

Three-column feature showcase with numbered steps.

### Customization
Edit `src/components/FeatureCards.astro`:

```astro
const features = [
  {
    number: "01",
    title: "Your First Step",
    description: "Describe what happens first"
  },
  {
    number: "02",
    title: "Your Second Step",
    description: "Describe what happens next"
  },
  {
    number: "03",
    title: "Your Third Step",
    description: "Describe the final step"
  }
];
```

### Adding More Features
Simply add more objects to the array:
```javascript
{
  number: "04",
  title: "Another Feature",
  description: "More details here"
}
```

---

## LLMProviders

Grid of logos with names - perfect for showcasing integrations or partners.

### Customization
Edit `src/components/LLMProviders.astro`:

```astro
const providers = [
  { name: "Partner 1", logo: "partner1.svg" },
  { name: "Partner 2", logo: "partner2.svg" },
  // Add more...
];
```

### Logo Requirements
- Place logos in `public/images/providers/`
- Recommended size: 80x80px (SVG preferred)
- Transparent background works best

### Changing Section Title
```astro
<h2 class="section-title">Your Partners & Integrations</h2>
<p class="section-subtitle">
  Your description of the partnerships.
</p>
```

---

## FooterCTA

Final call-to-action before the footer with pink gradient.

### Customization
Edit `src/components/FooterCTA.astro`:

```astro
<!-- Change title -->
<h2 class="cta-title">Ready to get started?</h2>

<!-- Update button -->
<a href="https://your-link.com" class="cta-button">
  Your CTA Text
</a>
```

---

## Footer

Full footer with brand, links, and social icons.

### Customization
Edit `src/components/Footer.astro`:

#### Update Links
```astro
const footerLinks = [
  { name: "About", url: "https://example.com/about" },
  { name: "Pricing", url: "https://example.com/pricing" },
  { name: "Contact", url: "https://example.com/contact" },
  // Add or remove as needed
];
```

#### Update Social Icons
```astro
<!-- GitHub -->
<a href="https://github.com/yourusername">
  <!-- SVG icon -->
</a>

<!-- Add more social links -->
<a href="https://twitter.com/yourusername">
  <!-- Twitter icon -->
</a>
```

---

## Layout (Base Template)

Global styles and fonts are defined here.

### Change Font
Edit `src/layouts/Layout.astro`:

```html
<!-- In <head> -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
```

Then update CSS:
```css
font-family: 'Inter', system-ui, sans-serif;
```

### Update Brand Colors
```css
:root {
  --pink: #F78595;
  --grey: #696969;
  --white: #F2F2F2;
  /* Add your custom colors */
  --custom-blue: #0066FF;
}
```

Use in components:
```css
color: var(--custom-blue);
```

---

## 🎨 Styling Tips

### Mobile-First Approach
All components use mobile-first breakpoints:

```css
/* Mobile styles (default) */
.element {
  font-size: 1rem;
}

/* Tablet and up */
@media (max-width: 768px) {
  .element {
    font-size: 1.125rem;
  }
}

/* Desktop and up */
@media (max-width: 968px) {
  .element {
    font-size: 1.25rem;
  }
}
```

### Responsive Text
Using `clamp()` for fluid typography:

```css
font-size: clamp(1rem, 2vw, 1.5rem);
/*             min   ideal  max     */
```

---

## 🔄 Common Patterns

### Adding a New Section
1. Create component in `src/components/YourSection.astro`
2. Import in `src/pages/index.astro`
3. Add to page: `<YourSection />`

### Creating Section Anchors
```astro
<section id="my-section">
  <!-- content -->
</section>
```

Link to it:
```astro
<a href="#my-section">Jump to Section</a>
```

### Conditional Rendering
```astro
{subtitle && <p class="subtitle">{subtitle}</p>}
```

### Looping Through Data
```astro
{items.map((item) => (
  <div class="item">
    <h3>{item.title}</h3>
    <p>{item.description}</p>
  </div>
))}
```

---

## 🚀 Pro Tips

1. **Keep components small** - One responsibility per component
2. **Use props** - Make components reusable with props
3. **Mobile-first** - Design for mobile, enhance for desktop
4. **Test on devices** - Use browser dev tools mobile emulation
5. **Optimize images** - Compress before adding to `public/`
6. **Use semantic HTML** - `<section>`, `<nav>`, `<header>`, `<footer>`
7. **Accessibility** - Always add `alt` text to images

---

Need help? Check the [Astro docs](https://docs.astro.build) or ask Claude! 🚀
