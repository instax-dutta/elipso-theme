#!/usr/bin/env bash
set -euo pipefail

PANEL_DIR="${1:-/var/www/pterodactyl}"
THEME_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKUP_DIR="$THEME_DIR/backups/$(date +%Y%m%d-%H%M%S)"

if [[ ! -f "$PANEL_DIR/artisan" ]]; then
    echo "Could not find a Pterodactyl panel at: $PANEL_DIR"
    echo "Usage: sudo bash install.sh /path/to/pterodactyl"
    exit 1
fi

mkdir -p "$BACKUP_DIR"

copy_path() {
    local source="$1"
    local target="$PANEL_DIR/$source"

    if [[ -e "$target" ]]; then
        mkdir -p "$BACKUP_DIR/$(dirname "$source")"
        cp -a "$target" "$BACKUP_DIR/$source"
    fi

    mkdir -p "$(dirname "$target")"
    cp -a "$THEME_DIR/$source" "$target"
}

echo "Installing Elipso Vercel theme into $PANEL_DIR"

copy_path "package.json"
copy_path "tailwind.config.js"
copy_path "resources/scripts/assets/css/GlobalStylesheet.ts"
copy_path "resources/scripts/components/NavigationBar.tsx"
copy_path "resources/scripts/components/elements/GreyRowBox.tsx"
copy_path "resources/scripts/components/dashboard/ServerRow.tsx"
copy_path "resources/scripts/components/elements/button/style.module.css"
copy_path "resources/scripts/components/elements/Input.tsx"
copy_path "resources/scripts/components/auth/LoginFormContainer.tsx"
copy_path "resources/scripts/routers/AuthenticationRouter.tsx"
copy_path "resources/views/templates/wrapper.blade.php"
copy_path "resources/views/templates/base/core.blade.php"
copy_path "public/themes/elipso-vercel/theme.css"

cd "$PANEL_DIR"

if [[ "${ELIPSO_BUILD:-0}" == "1" ]]; then
    if command -v yarn >/dev/null 2>&1; then
        yarn install --frozen-lockfile
        yarn build:production
    else
        npm install --legacy-peer-deps
        npm run build:production
    fi
else
    if [[ ! -f "$THEME_DIR/public/assets/manifest.json" ]]; then
        echo "Prebuilt assets were not found in this bundle. Re-run with ELIPSO_BUILD=1."
        exit 1
    fi

    mkdir -p "$BACKUP_DIR/public/assets" "$PANEL_DIR/public/assets"
    cp -a "$PANEL_DIR/public/assets/manifest.json" "$BACKUP_DIR/public/assets/manifest.json" 2>/dev/null || true
    cp -a "$THEME_DIR/public/assets/." "$PANEL_DIR/public/assets/"
fi

php artisan view:clear
php artisan cache:clear
php artisan config:clear

if command -v chown >/dev/null 2>&1; then
    chown -R www-data:www-data storage bootstrap/cache public/assets 2>/dev/null || true
fi

echo "Elipso Vercel theme installed. Backups are in: $BACKUP_DIR"
