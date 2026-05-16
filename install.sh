#!/bin/bash

# Elipso Theme Installer - Universal One-Liner for Pterodactyl Panel
# Compatible with all installation methods

set -euo pipefail

# Detect if script is being run via pipe/curl/wget vs direct execution
detect_installer() {
    if [[ -n "${ELIPSO_SOURCE:-}" ]]; then
        return 0
    fi
    
    # Check if running via: curl ... | bash  or  bash <(curl ...)
    if [[ ! -t 0 ]] || [[ "$0" == "/dev/fd/"* ]]; then
        return 0
    fi
    
    return 1
}

# Download installer if needed
download_installer() {
    local url="${1:-https://raw.githubusercontent.com/instax-dutta/elipso-theme/main/install.sh}"
    local tmpfile="/tmp/elipso-install-$$.sh"
    
    echo "Downloading Elipso installer..."
    
    if command -v curl >/dev/null 2>&1; then
        curl -sL "$url" -o "$tmpfile" || download_failed
    elif command -v wget >/dev/null 2>&1; then
        wget -qO "$tmpfile" "$url" || download_failed
    else
        echo "Error: Neither curl nor wget found. Please install one of them."
        exit 1
    fi
    
    chmod +x "$tmpfile"
    exec bash "$tmpfile" ELIPSO_SOURCE=downloaded
}

download_failed() {
    echo "Failed to download. Check your internet connection."
    exit 1
}

# Run main logic
main() {
    if (( $EUID != 0 )); then
        echo "Please run as root: sudo bash install.sh"
        echo "Or use: curl -sL https://raw.githubusercontent.com/instax-dutta/elipso-theme/main/install.sh | sudo bash"
        exit 1
    fi

    clear

    echo "========================================"
    echo "  Elipso - Vercel Dark Theme for Pterodactyl"
    echo "========================================"
    echo ""

    # Detect panel directory
    PANEL_DIR=""
    PANEL_FOUND=false
    
    for dir in "/var/www/pterodactyl" "/var/www/panel" "/var/www/html/pterodactyl" "/var/www/html/panel" "/opt/pterodactyl" "/opt/panel"; do
        if [ -f "$dir/artisan" ]; then
            PANEL_DIR="$dir"
            PANEL_FOUND=true
            break
        fi
    done

    if [ "$PANEL_FOUND" = false ]; then
        echo "Could not automatically find Pterodactyl panel."
        echo ""
        echo "Please enter the full path to your Pterodactyl installation."
        echo "Common paths:"
        echo "  - /var/www/pterodactyl"
        echo "  - /var/www/panel"
        echo "  - /var/www/html/pterodactyl"
        echo "  - /opt/pterodactyl"
        echo ""
        read -p "Panel path: " PANEL_DIR
        
        if [ ! -f "$PANEL_DIR/artisan" ]; then
            echo ""
            echo "Error: Invalid path. Could not find artisan file at: $PANEL_DIR/artisan"
            echo ""
            echo "Please verify your panel installation path and try again."
            exit 1
        fi
    fi

    echo "✓ Found panel at: $PANEL_DIR"
    echo ""

    # Confirm installation
    echo "This will install the Elipso dark theme on your Pterodactyl panel."
    echo "A backup will be created before making any changes."
    echo ""
    read -p "Continue? [y/N]: " confirm
    if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
        echo "Installation cancelled."
        exit 0
    fi
    echo ""

    # Create backup
    BACKUP_DIR="/var/www/elipso-backup-$(date +%Y%m%d-%H%M%S)"
    echo "📦 Creating backup at: $BACKUP_DIR"
    mkdir -p "$BACKUP_DIR"
    
    # Backup existing files
    cp -a "$PANEL_DIR/resources/scripts/assets/css/GlobalStylesheet.ts" "$BACKUP_DIR/" 2>/dev/null || true
    cp -a "$PANEL_DIR/resources/views/templates/wrapper.blade.php" "$BACKUP_DIR/" 2>/dev/null || true
    cp -a "$PANEL_DIR/resources/views/templates/base/core.blade.php" "$BACKUP_DIR/" 2>/dev/null || true
    cp -a "$PANEL_DIR/tailwind.config.js" "$BACKUP_DIR/" 2>/dev/null || true
    
    if [ -d "$PANEL_DIR/public/themes/elipso-vercel" ]; then
        cp -a "$PANEL_DIR/public/themes/elipso-vercel" "$BACKUP_DIR/" 2>/dev/null || true
    fi
    
    if [ -d "$PANEL_DIR/public/assets" ]; then
        cp -a "$PANEL_DIR/public/assets" "$BACKUP_DIR/" 2>/dev/null || true
    fi
    
    echo "✓ Backup complete."
    echo ""

    # Clone repo
    echo "📥 Cloning Elipso theme..."
    cd /var/www
    
    if [ -d "elipso-theme" ]; then
        rm -rf elipso-theme
    fi
    
    # Try with https first, fallback to git protocol
    if ! git clone https://github.com/instax-dutta/elipso-theme.git elipso-theme 2>/dev/null; then
        echo "HTTPS failed, trying git protocol..."
        if ! git clone git://github.com/instax-dutta/elipso-theme.git elipso-theme 2>/dev/null; then
            echo "Failed to clone. Trying with access token..."
            read -p "Enter GitHub token (or press enter to try manual download): " GH_TOKEN
            if [ -n "$GH_TOKEN" ]; then
                git clone "https://${GH_TOKEN}@github.com/instax-dutta/elipso-theme.git" elipso-theme || clone_failed
            else
                clone_failed
            fi
        fi
    fi

    clone_failed() {
        echo ""
        echo "Failed to clone from GitHub."
        echo "Please check your internet connection or try manually:"
        echo "  1. Download: https://github.com/instax-dutta/elipso-theme/archive/main.zip"
        echo "  2. Upload to /var/www/"
        echo "  3. Extract and run: cd elipso-theme && sudo bash install.sh"
        exit 1
    }

    if [ ! -d "elipso-theme" ]; then
        clone_failed
    fi

    cd elipso-theme

    echo "✓ Cloned successfully."
    echo ""

    # Copy files
    echo "📁 Installing theme files..."

    # CSS
    THEME_CSS_DIR="$PANEL_DIR/resources/scripts/assets/css"
    mkdir -p "$THEME_CSS_DIR"
    cp -f resources/scripts/assets/css/GlobalStylesheet.ts "$THEME_CSS_DIR/"

    # Components
    COMPONENTS_DIR="$PANEL_DIR/resources/scripts/components"
    mkdir -p "$COMPONENTS_DIR/auth" "$COMPONENTS_DIR/dashboard" "$COMPONENTS_DIR/elements"
    cp -f resources/scripts/components/NavigationBar.tsx "$COMPONENTS_DIR/"
    cp -f resources/scripts/components/auth/LoginFormContainer.tsx "$COMPONENTS_DIR/auth/"
    cp -f resources/scripts/components/dashboard/ServerRow.tsx "$COMPONENTS_DIR/dashboard/"
    cp -f resources/scripts/components/elements/Input.tsx "$COMPONENTS_DIR/elements/"

    # Views
    VIEWS_DIR="$PANEL_DIR/resources/views/templates"
    mkdir -p "$VIEWS_DIR/base"
    cp -f resources/views/templates/wrapper.blade.php "$VIEWS_DIR/"
    cp -f resources/views/templates/base/core.blade.php "$VIEWS_DIR/base/"

    # Theme CSS
    mkdir -p "$PANEL_DIR/public/themes/elipso-vercel"
    cp -f public/themes/elipso-vercel/theme.css "$PANEL_DIR/public/themes/elipso-vercel/"

    # Tailwind config
    cp -f tailwind.config.js "$PANEL_DIR/"

    echo "✓ Files installed."
    echo ""

    # Check/install Node.js 22+
    NODE_VERSION=$(node --version 2>/dev/null | sed 's/v//' | cut -d. -f1)
    
    if [ -z "$NODE_VERSION" ] || [ "$NODE_VERSION" -lt 22 ]; then
        echo "📦 Installing Node.js 22+ (current: v${NODE_VERSION:-none})..."
        
        # Check package manager
        if command -v apt-get >/dev/null 2>&1; then
            # Remove old node if exists
            apt-get remove -y nodejs npm 2>/dev/null || true
            
            # Install Node.js 22 from NodeSource
            curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
            apt-get install -y nodejs
            
        elif command -v yum >/dev/null 2>&1; then
            yum remove -y nodejs 2>/dev/null || true
            curl -fsSL https://rpm.nodesource.com/setup_22.x | bash -
            yum install -y nodejs
            
        elif command -v dnf >/dev/null 2>&1; then
            dnf remove -y nodejs 2>/dev/null || true
            curl -fsSL https://rpm.nodesource.com/setup_22.x | bash -
            dnf install -y nodejs
        fi
        
        echo "Node version: $(node --version)"
    fi

    echo "Node version: $(node --version)"
    echo ""

    # Install yarn if needed
    if ! command -v yarn >/dev/null 2>&1; then
        echo "📦 Installing Yarn..."
        npm install -g yarn
    fi

    # Build assets
    echo "🔨 Building assets..."
    cd "$PANEL_DIR"

    if command -v yarn >/dev/null 2>&1; then
        echo "Installing dependencies with Yarn..."
        yarn install --network-timeout 100000 --ignore-engines || yarn install --network-timeout 100000
        echo "Building production assets..."
        yarn build:production --progress=false || yarn build:production
    elif command -v npm >/dev/null 2>&1; then
        echo "Installing dependencies with npm..."
        npm install --legacy-peer-deps --no-audit --no-fund --ignore-engines
        echo "Building production assets..."
        npm run build:production
    else
        echo "⚠️ Warning: Neither yarn nor npm found. Skipping build."
        echo "Please build manually:"
        echo "  cd $PANEL_DIR"
        echo "  yarn install && yarn build:production"
    fi

    echo ""

    # Clear caches
    echo "🧹 Clearing caches..."
    php artisan view:clear 2>/dev/null || true
    php artisan cache:clear 2>/dev/null || true
    php artisan config:clear 2>/dev/null || true
    php artisan optimize:clear 2>/dev/null || true

    # Set permissions
    chown -R www-data:www-data "$PANEL_DIR/public/assets" 2>/dev/null || true
    chown -R www-data:www-data "$PANEL_DIR/bootstrap/cache" 2>/dev/null || true

    echo ""
    echo "========================================"
    echo "  ✅ Elipso theme installed successfully!"
    echo "========================================"
    echo ""
    echo "📦 Backup location: $BACKUP_DIR"
    echo ""
    echo "⚠️  Important: Clear your browser cache or use incognito/private mode"
    echo "    to see the new theme. Regular refresh may show old cached styles."
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  Uninstall Instructions"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "To restore your previous theme:"
    echo "  1. Navigate to: $BACKUP_DIR"
    echo "  2. Copy backed up files back to their original locations"
    echo "  3. Run: cd $PANEL_DIR && yarn build:production"
    echo "  4. Run: php artisan optimize:clear"
    echo ""
}

# Run main
main "$@"