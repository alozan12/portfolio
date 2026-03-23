# How to Add New Projects

## Quick Guide

All projects are managed in one file: `/data/projects.tsx`

### Adding a New Project

1. Open `/data/projects.tsx`
2. Add a new project object to the `allProjects` array:

```tsx
{
  title: "Your Project Name",
  description: "Brief description of what the project does",
  icon: <YourIcon className="h-4 w-4" />,  // Import from lucide-react
  image: "/your-image.png",  // Place image in /public folder
  slug: "your-project-slug",  // Used in URL: /projects/your-project-slug
  tags: ["Tag1", "Tag2", "Tag3"],
  featured: false,  // Set to true to show on home page (keep only 6 featured)
}
```

### Featured vs Non-Featured Projects

- **Featured Projects** (`featured: true`): Shown on home page with glowing cards (limit to 6)
- **Non-Featured Projects** (`featured: false`): Only shown on `/projects` page

### Available Icons

Import any icon from `lucide-react`:
- Bot, Cpu, Code, Database, Globe, Terminal
- Navigation, Compass, Map
- Mountain, Sparkles, Zap
- Accessibility, Users, Shield
- FileText, BookOpen, Newspaper
- And 1000+ more at https://lucide.dev/icons/

### Example

```tsx
import { Code } from "lucide-react";

{
  title: "E-Commerce Platform",
  description: "Full-stack online store with payment integration",
  icon: <Code className="h-4 w-4" />,
  image: "/ecommerce-screenshot.png",
  slug: "ecommerce-platform",
  tags: ["React", "Node.js", "Stripe"],
  featured: false,
}
```

**Note**: Place your project images in the `/public` folder. The image path in the code should start with `/` (e.g., `/my-image.png` references `/public/my-image.png`).

### Project Detail Pages

After adding a project to `/data/projects.tsx`, create a detail page:

1. Go to `/app/projects/[slug]/`
2. Add your project data to the `projectData` object in `page.tsx`
3. Match the `slug` exactly with what you used in `projects.tsx`

### Tips

- Keep `featured: true` for only your **best 6 projects** to avoid overwhelming the home page
- Use descriptive slugs (lowercase, hyphens instead of spaces)
- Keep descriptions concise (1-2 sentences)
- Choose icons that match the project type
- Tags should be 1-3 words each (avoid long phrases)

### File Locations

- **Project Data**: `/data/projects.tsx`
- **Home Page Component**: `/components/Projects.tsx`
- **All Projects Page**: `/app/projects/page.tsx`
- **Individual Project Pages**: `/app/projects/[slug]/page.tsx`
