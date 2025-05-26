# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern Design**: Clean, professional, and visually appealing interface
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🌙 **Dark/Light Mode**: Toggle between themes with smooth transitions
- 🎭 **Smooth Animations**: Beautiful animations powered by Framer Motion
- ⚡ **Fast Performance**: Optimized with Next.js 15 and modern best practices
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and structured data
- 📧 **Contact Form**: Functional contact form with validation
- 🎯 **Competitive Programming**: Showcase your coding profiles and achievements
- 🚀 **Easy Deployment**: Ready for deployment on Vercel

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Form Handling**: React Hook Form (ready to integrate)
- **Email Service**: EmailJS (ready to integrate)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

1. **app/layout.tsx** - Update metadata, title, and description
2. **components/hero-section.tsx** - Update name, titles, and introduction
3. **components/about-section.tsx** - Update bio, education, and interests
4. **components/projects-section.tsx** - Add your projects
5. **components/experience-section.tsx** - Add your work experience
6. **components/competitive-programming-section.tsx** - Update your CP profiles
7. **components/contact-section.tsx** - Update contact information

### Adding Projects

Edit the \`projects\` array in \`components/projects-section.tsx\`:

\`\`\`typescript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description...',
    image: '/path-to-your-image.jpg',
    technologies: ['React', 'Next.js', 'TypeScript'],
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://your-project.vercel.app',
    featured: true, // Set to true for featured projects
  },
  // Add more projects...
]
\`\`\`

### Updating Experience

Edit the \`experiences\` array in \`components/experience-section.tsx\`:

\`\`\`typescript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'Location',
    period: 'Start Date - End Date',
    description: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
    ],
    technologies: ['Tech1', 'Tech2'],
  },
  // Add more experiences...
]
\`\`\`

### Competitive Programming Profiles

Update the \`platforms\` array in \`components/competitive-programming-section.tsx\`:

\`\`\`typescript
const platforms = [
  {
    name: 'Codeforces',
    handle: 'your_handle',
    rating: 1234,
    maxRating: 1456,
    rank: 'Your Rank',
    color: 'text-blue-600',
    url: 'https://codeforces.com/profile/your_handle',
    icon: Code,
  },
  // Update other platforms...
]
\`\`\`

## Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy on Netlify

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. Deploy the \`out\` folder to Netlify

### Environment Variables

If you're using EmailJS or other services, add these environment variables:

\`\`\`env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
\`\`\`

## File Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── hero-section.tsx    # Hero/landing section
│   ├── about-section.tsx   # About section
│   ├── projects-section.tsx # Projects showcase
│   ├── experience-section.tsx # Work experience
│   ├── competitive-programming-section.tsx # CP profiles
│   ├── achievements-section.tsx # Achievements & tech stack
│   ├── contact-section.tsx # Contact form
│   ├── navbar.tsx          # Navigation bar
│   ├── footer.tsx          # Footer
│   ├── theme-toggle.tsx    # Dark/light mode toggle
│   ├── typewriter-text.tsx # Animated typewriter effect
│   └── project-card.tsx    # Project card component
├── public/
│   ├── resume.pdf          # Your resume (add this)
│   └── og-image.jpg        # Open Graph image (add this)
└── README.md
\`\`\`

## Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Optimized fonts with next/font
- ✅ Efficient CSS with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimization with metadata

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you found this helpful, please give it a ⭐ on GitHub!

For questions or support, feel free to reach out:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Twitter: [@yourhandle](https://twitter.com/yourhandle)
