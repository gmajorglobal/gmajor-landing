# GMAJOR Landing Page - Project Structure

## 📁 Directory Structure

```
gmajor-landing/
├── 📁 app/                          # Next.js 14 App Router
│   ├── 📁 components/               # React Components
│   │   ├── 📄 Header.tsx           # Navigation Header
│   │   └── 📄 Hero.tsx             # Main Hero Section
│   ├── 📄 globals.css              # Global Styles & Tailwind CSS
│   ├── 📄 layout.tsx               # Root Layout Component
│   └── 📄 page.tsx                 # Home Page Component
├── 📁 public/                       # Static Assets
│   ├── 📁 images/                  # Image Assets
│   │   ├── 📁 hero/                # Hero Section Images
│   │   ├── 📁 icons/               # Icons & Small Graphics
│   │   ├── 📁 logos/               # Company Logos
│   │   └── 📁 backgrounds/         # Background Patterns
│   └── 📄 favicon.ico              # Site Favicon
├── 📄 package.json                  # Dependencies & Scripts
├── 📄 next.config.js               # Next.js Configuration
├── 📄 tailwind.config.js           # Tailwind CSS Configuration
├── 📄 postcss.config.js            # PostCSS Configuration
├── 📄 tsconfig.json                # TypeScript Configuration
├── 📄 vercel.json                  # Vercel Deployment Config
├── 📄 .gitignore                   # Git Ignore Rules
└── 📄 README.md                     # Project Documentation
```

## 🎨 Design System

### Colors
- **Primary Blue**: `#1e40af` (blue-800)
- **Secondary Blue**: `#3b82f6` (blue-600)
- **Dark Text**: `#111827` (gray-900)
- **Body Text**: `#374151` (gray-700)
- **Background**: `#ffffff` (white)
- **Dotted Pattern**: `#e5e7eb` (gray-200)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, Large (4xl-5xl)
- **Body Text**: Regular, Medium (lg)
- **Navigation**: Semibold, Small (sm)

### Spacing
- **Container**: `max-w-7xl` (1280px)
- **Padding**: `px-2` (24px horizontal)
- **Gap**: `gap-12` (48px between sections)
- **Section Padding**: `py-16` (64px vertical)

## 🚀 Components

### Header Component
- **Purpose**: Main navigation
- **Features**: Responsive, hover effects, centered layout
- **Navigation Items**: HOME, ABOUT US, CONTACT, BLOG

### Hero Component
- **Purpose**: Main content section
- **Layout**: Two-column grid (text + image)
- **Features**: Call-to-action button, geometric shapes, image placeholder

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Default (320px+)
- **Tablet**: `lg:` (1024px+)
- **Desktop**: `xl:` (1280px+)

### Grid System
- **Mobile**: Single column layout
- **Desktop**: Two-column grid layout

## 🎯 Key Features

1. **Modern Design**: Clean, professional appearance
2. **Vietnamese Language**: Full Vietnamese text support
3. **Geometric Elements**: Plus signs, circles, and decorative shapes
4. **Dotted Background**: Subtle pattern overlay
5. **Call-to-Action**: Prominent registration button
6. **Responsive**: Works on all device sizes

## 🔧 Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter)
- **Deployment**: Vercel-ready

## 📸 Image Requirements

### Hero Image
- **Size**: 500x500px minimum
- **Format**: JPG/PNG
- **Content**: Business professionals in office setting
- **Style**: Professional, modern, diverse representation

### Geometric Shapes
- **Type**: SVG vector graphics
- **Colors**: Blue (#1e40af)
- **Style**: Abstract, modern, geometric

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Automatic deployment on push

### Manual Build
```bash
npm run build
npm run start
```

## 📝 Development Commands

```bash
# Install dependencies
npm install

# Development server (port 1080)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
``` 