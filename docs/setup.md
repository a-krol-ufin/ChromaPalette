# Setup Guide

This guide will help you set up and run the Color Palette Generator locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd color-palette-generator
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Development

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

3. The application will automatically reload when you make changes to the code.

## Building for Production

1. **Create a production build**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm run start
   ```

## Project Architecture

### Main Components

- **ColorPalette.tsx**: Displays the color palette with individual color cards that can be locked/unlocked
- **PaletteControls.tsx**: Contains controls for generating new palettes and selecting harmony rules
- **SavedPalettes.tsx**: Manages saved palettes with load/delete functionality

### Key Features Implementation

#### Color Locking
- Colors can be locked to prevent changes during palette regeneration
- Locked colors maintain their values while unlocked colors are regenerated
- Visual indicators show which colors are locked

#### Export Functionality
- **JSON Export**: Exports palette data as JSON file
- **CSS Export**: Exports as CSS custom properties
- **Image Export**: Generates and downloads palette as PNG image

#### Responsive Design
- Mobile-first approach using Tailwind CSS
- Adaptive layouts for different screen sizes
- Touch-friendly interactions on mobile devices

## Troubleshooting

### Common Issues

1. **Port already in use**:
   - The default port is 3000. If it's occupied, Next.js will automatically use the next available port
   - You can specify a different port: `npm run dev -- -p 3001`

2. **Dependencies issues**:
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

3. **Build errors**:
   - Ensure all TypeScript errors are resolved
   - Check that all imports are correct

### Development Tips

- Use the browser's developer tools to inspect component states
- The application uses local storage to persist saved palettes
- Color generation algorithms are based on HSL color space for better harmony

## Environment Variables

Currently, no environment variables are required for basic functionality. The application runs entirely on the client side.

## Contributing

When making changes:

1. Follow the existing code style and TypeScript conventions
2. Test your changes across different screen sizes
3. Ensure color accessibility standards are maintained
4. Update documentation if adding new features

## Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Note: Some features like clipboard API may require HTTPS in production.
