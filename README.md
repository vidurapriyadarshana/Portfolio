# Personal Portfolio - Vidura Priyadarshana

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design with mobile-first approach
- Smooth navigation with anchor links
- Professional sections: About, Skills, Experience, Projects, Education, Contact
- Interactive project cards with live demos and GitHub links
- Contact form integration
- Modern UI with gradient accents

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your Web3Forms API key
# Get a free API key from https://web3forms.com
VITE_WEB3FORMS_ACCESS_KEY=your_api_key_here
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Contact Form Setup

The contact form uses Web3Forms (a free service) to send emails. To set it up:

1. Visit [https://web3forms.com](https://web3forms.com)
2. Get your free Access Key
3. Add it to your `.env` file:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
4. **Never commit the `.env` file to Git** - it's already in `.gitignore`

**Note**: If no API key is configured, the form will fall back to opening the default email client (mailto link).

## Adding Images

Replace the following placeholder images in the `public/` directory:

1. **Profile Image**: `/avatar.JPG` - Your professional headshot (160x160px recommended)
2. **User Image**: `/user-image.JPG` - Sidebar profile image (full height)
3. **Frontend Icon**: `/fontend.png` - Frontend development icon (80x80px)
4. **Backend Icon**: `/backend.png` - Backend development icon (80x80px)
5. **Logo**: `/icons8-v-400.png` - Your personal logo (for header)

### Project Images
Add project screenshots to the `public/projects/` directory:
- `/projects/vibzi.jpg`
- `/projects/akapilot.jpg`
- `/projects/subscription-tracker.jpg`
- `/projects/complaint-management.jpg`
- `/projects/disney-clone.jpg`
- `/projects/data-dish.jpg`

**Recommended size**: 800x600px or 16:9 aspect ratio

## Customization

All portfolio data is centralized in `src/data/portfolioData.ts`. Edit this file to update:
- Personal information
- Professional summary
- Skills
- Experience
- Projects
- Education
- Certifications
- Languages

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Vite
- React Icons

## Project Structure

```
src/
├── components/       # React components
├── data/            # Portfolio data
├── shared/          # Shared constants and strings
├── types/           # TypeScript type definitions
└── App.tsx          # Main application component
```

## License

MIT
