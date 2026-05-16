# Elipso — Vercel Dark Theme for Pterodactyl Panel

A Vercel-inspired dark-only Pterodactyl theme with a more restrained, professional finish across the client and the legacy AdminLTE admin panel.

## Requirements

- Pterodactyl Panel v1.12.2
- Linux server with bash
- sudo/root access to the panel installation

---

## Installation

### Method 1: Quick Install (Recommended)

Run this on your Pterodactyl server:

```bash
curl -fsSL https://raw.githubusercontent.com/instax-dutta/elipso-theme/main/install.sh | sudo bash
```

### Method 2: Using wget

```bash
wget -qO- https://raw.githubusercontent.com/instax-dutta/elipso-theme/main/install.sh | sudo bash
```

### Method 3: Manual Download

```bash
wget https://github.com/instax-dutta/elipso-theme/archive/refs/heads/main.zip
unzip main.zip
cd elipso-theme-main
sudo bash install.sh
```

If your panel is not in `/var/www/pterodactyl`, pass the path explicitly:

```bash
curl -fsSL https://raw.githubusercontent.com/instax-dutta/elipso-theme/main/install.sh | sudo bash -s -- /path/to/panel
```

---

## After Installation

1. Open the panel in an incognito/private window or do one hard refresh.
2. The installer already clears Laravel caches for you.

---

## Build Notes

This installer does not rebuild frontend assets. It ships a prebuilt `public/assets` bundle together with the required Blade and theme CSS files, so install stays fast and does not depend on Node being available on the production server.

---

## Restore / Uninstall

Every install creates a backup at `/var/www/elipso-backup-YYYYMMDD-HHMMSS/`.

To restore:

```bash
# Navigate to backup location
cd /var/www/elipso-backup-YYYYMMDD-HHMMSS

# Restore files to their original locations
cp -f wrapper.blade.php /var/www/pterodactyl/resources/views/templates/
cp -f core.blade.php /var/www/pterodactyl/resources/views/templates/base/
cp -f admin.blade.php /var/www/pterodactyl/resources/views/layouts/
cp -rf elipso-vercel /var/www/pterodactyl/public/themes/
cp -rf assets /var/www/pterodactyl/public/

# Clear cache
cd /var/www/pterodactyl
php artisan optimize:clear
```

---

## File Structure

```
elipso-vercel-theme/
├── install.sh                    # Universal installer
├── README.md                     # This file
├── public/
│   ├── assets/                  # Prebuilt frontend assets used at runtime
│   └── themes/elipso-vercel/
│       ├── elipso.css            # Shared client theme styles
│       └── theme.css             # Admin panel styles
└── resources/
    └── views/
        ├── templates/
        │   ├── wrapper.blade.php
        │   └── base/core.blade.php
        └── layouts/
            └── admin.blade.php
```

---

## Theme Behavior

- Dark-only interface with near-black canvas, quiet elevated surfaces, and restrained contrast.
- Shared Geist and Geist Mono typography across the panel and admin area.
- Prebuilt frontend assets included, so login, dashboard, and the rest of the client UI stay in the same dark-only visual system.

---

## Troubleshooting

**Issue:** "Could not find Pterodactyl panel"
- Rerun with the panel path explicitly: `sudo bash install.sh /var/www/pterodactyl`

**Issue:** Download failed
- Check your internet connection, then retry with `curl` or `wget`.

**Issue:** Theme not showing after install
- Clear browser cache or use incognito mode.
- Confirm `/public/assets/manifest.json` changed on the server after install.

**Issue:** Admin panel still looks stock
- Confirm `resources/views/layouts/admin.blade.php` was copied by the installer.
- Run `php artisan view:clear && php artisan optimize:clear`.

---

## License

MIT License — Feel free to use, modify, and distribute.

---

## Credits

- [Geist Font](https://vercel.com/font) by Vercel
- [Pterodactyl Panel](https://pterodactyl.io/) by Pterodactyl Team
