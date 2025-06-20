# 🎲 GachaWiki

> **Comprehensive guides, character builds, and game strategies for popular gacha games**

A beautifully designed wiki and guide platform built with Astro, featuring comprehensive content for gacha gaming enthusiasts.

🌐 **Live Site**: [gachawiki.info](https://gachawiki.info)  
📖 **Source Code**: [GitHub Repository](https://github.com/boring877/gacha-wiki)

<!-- v2.0.5 deployment trigger -->

## ✨ Features

- 🎮 **Game Guides**: In-depth coverage of gacha games starting with Zone Nova
- 📱 **Mobile Responsive**: Optimized for all devices with touch-friendly interfaces
- ⚡ **Performance**: Lightning-fast loading with 100/100 Lighthouse scores
- 🎨 **Modern Design**: Beautiful UI with custom color palette and animations
- 🔍 **SEO Optimized**: Meta tags, Open Graph data, and sitemap support
- 🎯 **Interactive Elements**: Event timers, character stats, and dynamic content
- 📋 **MIT Licensed**: Open source and freely available for the community

## 🚀 Quick Start

### Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **Bun** (recommended) or npm/yarn as package manager

#### Installing Bun (Recommended)

```bash
# On Windows (PowerShell)
irm bun.sh/install.ps1 | iex

# On macOS/Linux
curl -fsSL https://bun.sh/install | bash
```

Or use npm if you prefer:
```bash
npm install -g bun
```

### 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/boring877/gacha-wiki.git
   cd gacha-wiki
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```
   *Or with npm:*
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   bun dev
   ```
   *Or with npm:*
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:4321` to see the site running locally!

### 🧞 Development Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Install dependencies                             |
| `bun dev`                 | Start dev server at `localhost:4321`            |
| `bun build`               | Build production site to `./dist/`              |
| `bun preview`             | Preview build locally before deploying          |
| `bun astro add <package>` | Add Astro integrations                          |
| `bun astro check`         | Run type checking and diagnostics               |

### 🔧 Troubleshooting

**Port already in use?**
```bash
# Kill the process using port 4321
npx kill-port 4321
# Or use a different port
bun dev --port 3000
```

**Dependencies issues?**
```bash
# Clear cache and reinstall
rm -rf node_modules bun.lockb
bun install
```

**Build errors?**
```bash
# Check for TypeScript errors
bun astro check
```

## 🎮 Game Coverage

### Zone Nova
- **Characters**: Detailed guides for Guinevere, Naiya, Kela, and more
- **Events**: Live event tracking with countdown timers
- **Runes & Crafting**: Complete equipment and upgrade systems
- **News & Updates**: Latest patches and community announcements

*More games coming soon!*

## 🚀 Project Structure

```text
gacha-wiki/
├── public/
│   ├── images/
│   │   └── characters/   # Character images and assets
│   └── tabicoin.svg      # Custom gaming favicon
├── src/
│   ├── components/       # Reusable Astro components
│   ├── layouts/          # Page layouts and templates
│   ├── pages/            # Site pages and routing
│   │   ├── guides/
│   │   │   └── zone-nova/
│   │   │       ├── characters/  # Character guides
│   │   │       ├── events/      # Event guides
│   │   │       └── ...
│   │   └── index.astro   # Homepage with featured games
│   └── styles/           # Global styles and color system
├── astro.config.mjs      # Astro configuration
├── LICENSE               # MIT License
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Modern static site generator
- **Styling**: Custom CSS with design system variables
- **Icons**: Custom SVG favicon with theme-aware colors
- **Deployment**: Vercel with automatic deployments
- **Package Manager**: Bun for fast dependency management
- **CSS Framework**: Traditional CSS with modular imports for maintainability

## 🎨 Design System

The site uses a carefully crafted color palette:

- **Rich Black** (`#1C1C1C`) - Main backgrounds
- **Amber Glow** (`#FFB74D`) - Important UI elements  
- **Teal Crystal** (`#00ACC1`) - Links and interactions
- **Rose Quartz** (`#E91E63`) - Special events and highlights
- **Mocha Mousse** (`#A47864`) - Secondary backgrounds

## 📝 Adding New Content

### Adding a New Character

1. **Add character images** to `public/images/characters/`
2. **Create character page** in `src/pages/guides/zone-nova/characters/`
3. **Update character listing** in `src/pages/guides/zone-nova/characters.astro`

### Adding a New Game

1. **Create game directory** in `src/pages/guides/[game-name]/`
2. **Add game layout** in `src/layouts/`
3. **Update homepage** to feature the new game

## 🤝 Contributing

We welcome contributions! Whether it's:
- 📝 Adding new game guides
- 🐛 Fixing bugs or improving performance  
- 🎨 Enhancing the design and user experience
- 📱 Mobile responsiveness improvements

### How to Contribute

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/gacha-wiki.git
   ```
3. **Create your feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Make your changes** and test locally
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build) framework
- Deployed on [Vercel](https://vercel.com)
- Inspired by the amazing gacha gaming community

---

**Made with ❤️ by someone who's spent way too much time on gacha games...**
