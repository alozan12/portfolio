# Abraham Lozano - Portfolio

A modern, animated portfolio showcasing software development and AI engineering projects.

## Features

- **Modern Design**: Dark theme with vibrant green accents (#141313 background, #17ca0a primary)
- **Impressive Animations**:
  - Scroll-triggered animations
  - Smooth transitions with Framer Motion
  - Parallax effects
  - Micro-interactions on hover/click
  - Floating particles and gradient animations
- **Single-Page Layout**: Smooth scrolling between Hero, About, Projects, and Contact sections
- **Project Detail Pages**: Separate pages for each project with detailed information
- **Fully Responsive**: Optimized for all screen sizes
- **Accessibility**: WCAG compliant with keyboard navigation and reduced motion support
- **Performance Optimized**: Built with Next.js for optimal loading and SEO

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Archivo & Space Mono (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment on Vercel

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
portfolio-app/
├── app/
│   ├── projects/[slug]/    # Dynamic project pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── About.tsx           # About/Mission section
│   ├── AnimatedSection.tsx # Reusable animation wrapper
│   ├── Contact.tsx         # Contact section
│   ├── Hero.tsx            # Hero section
│   ├── Navigation.tsx      # Navigation bar
│   └── Projects.tsx        # Projects grid
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: "#17ca0a",        // Main green accent
  secondary: "#d8d8d8",      // Light gray text
  dark: "#141313",           // Background
  "primary-hover": "#69d883",// Hover state
}
```

### Content

- Update project data in `components/Projects.tsx` and `app/projects/[slug]/page.tsx`
- Modify about text in `components/About.tsx`
- Change contact information in `components/Contact.tsx`

### Adding New Projects

Add project data to both:
1. `components/Projects.tsx` - projects array
2. `app/projects/[slug]/page.tsx` - projectData object

## Performance Features

- Automatic image optimization
- Code splitting and lazy loading
- Font optimization
- CSS purging in production
- Server-side rendering
- Static generation where possible

## Accessibility Features

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- Reduced motion support for users who prefer it
- Proper heading hierarchy
- Alt text for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Abraham Lozano
- Email: alozan12@asu.edu
- Phone: (480) 200-7546
