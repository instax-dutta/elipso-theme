# Elipso Vercel Theme (Dark Mode)

Elipso is a Vercel-inspired dark theme for Pterodactyl Panel `release/v1.12.2`.

## What It Changes

- Geist and Geist Mono typography.
- Near-black canvas (#0a0a0a), white ink text (#ffffff), compact radii, and subtle borders.
- White primary actions, dark secondary actions, and blue link accents.
- Gradient atmosphere on authentication pages.
- Dark themed React client surfaces and Blade/admin panel overrides.

## Install On A Panel Server

Upload this bundle to your Pterodactyl server, extract it, then run:

```bash
cd elipso-vercel-theme
sudo bash install.sh /var/www/pterodactyl
```

If your panel is somewhere else, pass that path instead.

The installer backs up changed files under `backups/`, copies the theme files, installs frontend dependencies with Yarn when available, builds production assets, and clears Laravel caches.

By default it uses the prebuilt assets included in the bundle, so Node is not required on the server. To rebuild assets on the server instead, run:

```bash
sudo ELIPSO_BUILD=1 bash install.sh /var/www/pterodactyl
```

## Manual Build Commands

```bash
yarn install --frozen-lockfile
yarn build:production
php artisan view:clear
php artisan cache:clear
php artisan config:clear
```