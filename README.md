# Color Palette Generator

A sleek, minimalist web application that generates harmonious color palettes for UI design projects with an intuitive interface.

## Features

- **Interactive Color Picker**: Adjust individual colors with ability to lock/unlock during generation
- **Smart Palette Generation**: One-click palette generation with different harmony rules (complementary, analogous, triadic)
- **Multiple Copy Formats**: Copy colors in HEX, RGB, or HSL formats
- **Save & Export**: Save favorite palettes and export in multiple formats (JSON, CSS, Image)
- **Responsive Design**: Clean, elegant UI with ample white space and subtle animations
- **Lock Colors**: Lock specific colors to prevent them from changing during regeneration

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx             # Main application page
│   └── globals.css          # Global styles
├── components/
│   ├── ColorPalette.tsx     # Main color palette component
│   ├── PaletteControls.tsx  # Generation and harmony controls
│   ├── SavedPalettes.tsx    # Saved palettes management
│   └── ui/                  # Reusable UI components
└── lib/
    └── utils.ts             # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Documentation

For detailed setup instructions and development guide, see the [docs folder](./docs/).

## License

MIT License
