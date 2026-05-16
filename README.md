# Elipso — Vercel Dark Theme for Pterodactyl Panel

A Vercel-inspired dark theme for Pterodactyl Panel (release/v1.12.2) featuring Geist typography, near-black canvas surfaces with white ink text, and atmospheric mesh gradients.

## Requirements

- Pterodactyl Panel v1.12.2
- Linux server with bash
- sudo/root access to the panel installation

---

## Installation (One-Liner)

### Method 1: Quick Install (Recommended)

Run this command on your Pterodactyl server:

```bash
curl -sL https://raw.githubusercontent.com/instax-dutta/elipso-theme/main/install.sh -o /tmp/elipso.sh && sudo bash /tmp/elipso.sh
```

### Method 2: Using wget

```bash
wget -qO- https://raw.githubusercontent.com/instax-dutta/elipso-theme/main/install.sh | sudo bash
```

### Method 3: Manual Download

1. Download the theme:
   ```bash
   cd /var/www
   wget https://github.com/instax-dutta/elipso-theme/archive/main.zip
   unzip main.zip
   cd elipso-theme-main
   ```

2. Run the installer:
   ```bash
   sudo bash install.sh
   ```

3. Clean up:
   ```bash
   cd /var/www
   rm -rf elipso-theme-main main.zip
   ```

### Method 4: Clone from Git

```bash
cd /var/www
git clone https://github.com/instax-dutta/elipso-theme.git
cd elipso-theme
sudo bash install.sh
```

---

## After Installation

1. **Clear your browser cache** or use incognito/private mode
2. The theme is applied immediately — no additional configuration needed

---

## Building from Source

The installer automatically builds assets. To rebuild manually:

```bash
cd /var/www/pterodactyl
yarn install
yarn build:production
php artisan optimize:clear
```

---

## Uninstalling

The installer creates a backup at `/var/www/elipso-backup-YYYYMMDD-HHMMSS/`

To restore:

```bash
# Navigate to backup location
cd /var/www/elipso-backup-YYYYMMDD-HHMMSS

# Restore files to their original locations
cp -f GlobalStylesheet.ts /var/www/pterodactyl/resources/scripts/assets/css/
cp -f wrapper.blade.php /var/www/pterodactyl/resources/views/templates/
cp -f core.blade.php /var/www/pterodactyl/resources/views/templates/base/

# Rebuild and clear cache
cd /var/www/pterodactyl
yarn build:production
php artisan optimize:clear
```

---

## File Structure

```
elipso-vercel-theme/
├── install.sh                    # Universal installer
├── README.md                     # This file
├── package.json                  # Node dependencies
├── tailwind.config.js            # Tailwind configuration
├── public/
│   └── themes/elipso-vercel/
│       └── theme.css             # Admin panel styles
└── resources/
    ├── scripts/
    │   ├── assets/css/GlobalStylesheet.ts
    │   └── components/
    │       ├── NavigationBar.tsx
    │       ├── auth/LoginFormContainer.tsx
    │       ├── dashboard/ServerRow.tsx
    │       └── elements/Input.tsx
    └── views/
        └── templates/
            ├── wrapper.blade.php
            └── base/core.blade.php
```

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--elipso-canvas` | #0a0a0a | Page background |
| `--elipso-canvas-soft` | #111111 | Sidebar, cards |
| `--elipso-ink` | #ededed | Primary text |
| `--elipso-body` | #a1a1a1 | Secondary text |
| `--elipso-muted` | #666666 | Placeholders |
| `--elipso-hairline` | #262626 | Borders |
| `--elipso-primary` | #ffffff | Buttons, CTAs |
| `--elipso-link` | #0070f3 | Links |

---

## Troubleshooting

**Issue:** "Could not find Pterodactyl panel"
- The installer couldn't detect your panel path. Enter it manually when prompted.

**Issue:** "Failed to clone from GitHub"
- Check your internet connection, or try downloading the ZIP instead.

**Issue:** Theme not showing after install
- Clear browser cache or use incognito mode.

---

## License

MIT License — Feel free to use, modify, and distribute.

---

## Credits

- [Geist Font](https://vercel.com/font) by Vercel
- [Pterodactyl Panel](https://pterodactyl.io/) by Pterodactyl Team