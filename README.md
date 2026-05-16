# Elipso — Vercel Dark Theme for Pterodactyl Panel

A Vercel-inspired dark theme for Pterodactyl Panel (release/v1.12.2) featuring Geist typography, near-black canvas surfaces with white ink text, and atmospheric mesh gradients.

![Theme Preview](https://via.placeholder.com/800x400?text=Elipso+Vercel+Dark+Theme)

## Features

- **Geist & Geist Mono Typography** — The signature Vercel font family for a modern, developer-focused aesthetic
- **Dark Canvas Design** — Near-black (#0a0a0a) surfaces with white (#ffffff) text and subtle borders (#333333)
- **Atmospheric Gradients** — Multi-color mesh gradient backgrounds on authentication pages
- **Pill-Shaped Buttons** — 100px radius primary actions in white
- **Restrained Color Palette** — Blue links (#0070f3), error red (#ee0000), warning amber (#f5a623)
- **Floating Card Shadows** — Subtle elevation with layered shadows

## Requirements

- Pterodactyl Panel v1.12.2
- Linux server with bash
- sudo/root access to the panel installation

## Installation

### Option 1: Quick Install (Recommended)

Upload the theme archive to your server, extract it, and run the installer:

```bash
cd /path/to/elipso-vercel-theme
sudo bash install.sh /var/www/pterodactyl
```

### Option 2: Manual Install

1. Upload the theme files to your Pterodactyl panel directory
2. Copy the following files to their respective locations:
   - `public/themes/elipso-vercel/theme.css` → `/var/www/pterodactyl/public/themes/elipso-vercel/theme.css`
   - `resources/views/templates/wrapper.blade.php` → `/var/www/pterodactyl/resources/views/templates/wrapper.blade.php`
   - `resources/views/templates/base/core.blade.php` → `/var/www/pterodactyl/resources/views/templates/base/core.blade.php`
   - React components to `resources/scripts/components/`
3. Clear Laravel caches:
   ```bash
   cd /var/www/pterodactyl
   php artisan view:clear
   php artisan cache:clear
   php artisan config:clear
   ```

## Building from Source

By default, the theme uses prebuilt assets. If you want to rebuild:

```bash
cd /path/to/elipso-vercel-theme
sudo ELIPSO_BUILD=1 bash install.sh /var/www/pterodactyl
```

This requires Node.js 22+ and Yarn on the server.

### Manual Build Commands

```bash
yarn install --frozen-lockfile
yarn build:production
php artisan view:clear
php artisan cache:clear
php artisan config:clear
```

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--elipso-ink` | #ffffff | Primary text, buttons, CTAs |
| `--elipso-body` | #a1a1a1 | Secondary text |
| `--elipso-muted` | #666666 | Placeholders, disabled states |
| `--elipso-hairline` | #333333 | Borders, dividers |
| `--elipso-canvas` | #0a0a0a | Card backgrounds |
| `--elipso-canvas-soft` | #111111 | Page background |
| `--elipso-link` | #0070f3 | Links |

## What's Included

```
elipso-vercel-theme/
├── install.sh                    # Theme installer
├── package.json                  # Node dependencies
├── tailwind.config.js            # Tailwind configuration
├── public/
│   ├── assets/                   # Prebuilt React assets
│   └── themes/elipso-vercel/
│       └── theme.css             # Admin panel styles
└── resources/
    ├── scripts/
    │   ├── assets/css/           # Global styles
    │   ├── components/          # React components
    │   └── routers/             # Router configurations
    └── views/
        └── templates/            # Blade templates
```

## Backups

The installer automatically backs up any modified files to `backups/YYYYMMDD-HHMMSS/` in the theme directory before replacing them.

## Uninstalling

To revert to the default theme, restore the backed-up files:

```bash
cd /path/to/elipso-vercel-theme/backups
# Review backup directories and restore as needed
```

Then clear caches:
```bash
cd /var/www/pterodactyl
php artisan view:clear
php artisan cache:clear
php artisan config:clear
```

## License

MIT License — Feel free to use, modify, and distribute.

## Credits

- [Geist Font](https://vercel.com/font) by Vercel
- [Pterodactyl Panel](https://pterodactyl.io/) by Pterodactyl Team