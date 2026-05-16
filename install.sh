#!/bin/bash

# Elipso Theme Installer - One-liner for Pterodactyl Panel
# Usage: bash <(curl -sL https://raw.githubusercontent.com/instax-dutta/elipso-theme/main/install.sh)

if (( $EUID != 0 )); then
    echo "Please run as root (sudo bash)"
    exit 1
fi

clear

echo "========================================"
echo "  Elipso - Vercel Dark Theme for Pterodactyl"
echo "========================================"
echo ""

# Detect panel directory
PANEL_DIR=""
if [ -f "/var/www/pterodactyl/artisan" ]; then
    PANEL_DIR="/var/www/pterodactyl"
elif [ -f "/var/www/panel/artisan" ]; then
    PANEL_DIR="/var/www/panel"
elif [ -f "/var/www/html/pterodactyl/artisan" ]; then
    PANEL_DIR="/var/www/html/pterodactyl"
elif [ -f "/var/www/html/panel/artisan" ]; then
    PANEL_DIR="/var/www/html/panel"
else
    echo "Could not find Pterodactyl panel."
    echo "Please specify the panel directory:"
    read -p "Enter path (e.g. /var/www/pterodactyl): " PANEL_DIR
    if [ ! -f "$PANEL_DIR/artisan" ]; then
        echo "Invalid panel directory. Exiting."
        exit 1
    fi
fi

echo "Found panel at: $PANEL_DIR"
echo ""

# Create backup
BACKUP_DIR="/var/www/elipso-backup-$(date +%Y%m%d-%H%M%S)"
echo "Creating backup at: $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"
cp -a "$PANEL_DIR/resources/scripts/assets/css/GlobalStylesheet.ts" "$BACKUP_DIR/" 2>/dev/null || true
cp -a "$PANEL_DIR/resources/views/templates/wrapper.blade.php" "$BACKUP_DIR/" 2>/dev/null || true
cp -a "$PANEL_DIR/resources/views/templates/base/core.blade.php" "$BACKUP_DIR/" 2>/dev/null || true
cp -a "$PANEL_DIR/public/themes/elipso-vercel" "$BACKUP_DIR/" 2>/dev/null || true
echo "Backup complete."
echo ""

# Clone repo
echo "Cloning Elipso theme..."
cd /var/www
rm -rf elipso-theme 2>/dev/null
git clone https://github.com/instax-dutta/elipso-theme.git elipso-theme

if [ ! -d "elipso-theme" ]; then
    echo "Failed to clone repository. Exiting."
    exit 1
fi

cd elipso-theme

# Copy files
echo "Installing theme files..."
THEME_DIR="$PANEL_DIR/resources/scripts/assets/css"
mkdir -p "$THEME_DIR"
cp -a resources/scripts/assets/css/GlobalStylesheet.ts "$THEME_DIR/"

NAVBAR_DIR="$PANEL_DIR/resources/scripts/components"
mkdir -p "$NAVBAR_DIR"
cp -a resources/scripts/components/NavigationBar.tsx "$NAVBAR_DIR/"
cp -a resources/scripts/components/auth/LoginFormContainer.tsx "$NAVBAR_DIR/auth/"
cp -a resources/scripts/components/dashboard/ServerRow.tsx "$NAVBAR_DIR/dashboard/"
mkdir -p "$NAVBAR_DIR/elements"
cp -a resources/scripts/components/elements/Input.tsx "$NAVBAR_DIR/elements/"

VIEWS_DIR="$PANEL_DIR/resources/views/templates"
mkdir -p "$VIEWS_DIR/base"
cp -a resources/views/templates/wrapper.blade.php "$VIEWS_DIR/"
cp -a resources/views/templates/base/core.blade.php "$VIEWS_DIR/base/"

mkdir -p "$PANEL_DIR/public/themes/elipso-vercel"
cp -a public/themes/elipso-vercel/theme.css "$PANEL_DIR/public/themes/elipso-vercel/"

cp -a tailwind.config.js "$PANEL_DIR/"

echo "Files copied."
echo ""

# Build assets
echo "Building assets..."
cd "$PANEL_DIR"

if command -v yarn >/dev/null 2>&1; then
    yarn install --frozen-lockfile 2>/dev/null || yarn install
    yarn build:production
elif command -v npm >/dev/null 2>&1; then
    npm install --legacy-peer-deps
    npm run build:production
else
    echo "Warning: Neither yarn nor npm found. Skipping build."
    echo "You may need to build manually or use prebuilt assets."
fi

# Clear cache
echo "Clearing caches..."
php artisan view:clear 2>/dev/null || true
php artisan cache:clear 2>/dev/null || true
php artisan config:clear 2>/dev/null || true
php artisan optimize:clear 2>/dev/null || true

# Set permissions
chown -R www-data:www-data "$PANEL_DIR/public/assets" 2>/dev/null || true

echo ""
echo "========================================"
echo "  Elipso theme installed successfully!"
echo "========================================"
echo ""
echo "Backup location: $BACKUP_DIR"
echo ""
echo "Clear your browser cache or use incognito to see the new theme."
echo ""
echo "To uninstall/restore: $BACKUP_DIR"