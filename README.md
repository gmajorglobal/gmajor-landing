# GMAJOR Landing Page

A modern, responsive landing page for GMAJOR built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for modern styling
- 📱 **Responsive design** for all devices
- 🌍 **Vietnamese language** support
- ✨ **Modern UI/UX** with geometric shapes and dotted background
- 🚀 **Vercel ready** for deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd gmajor-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
gmajor-landing/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   └── Hero.tsx            # Main hero section
│   ├── globals.css             # Global styles and Tailwind
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── public/                     # Static assets
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Build

```bash
npm run build
npm run start
```

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'gmajor-blue': '#1e40af',
  'gmajor-light-blue': '#3b82f6',
  'gmajor-dark': '#1f2937',
}
```

### Content
- Update Vietnamese text in `app/components/Hero.tsx`
- Modify navigation links in `app/components/Header.tsx`
- Replace placeholder image with actual business professionals photo

### Styling
- Modify geometric shapes in `app/globals.css`
- Adjust dotted background pattern
- Update image mask shape

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## License

This project is private and proprietary to GMAJOR.

---

Built with ❤️ for GMAJOR's global expansion mission.
