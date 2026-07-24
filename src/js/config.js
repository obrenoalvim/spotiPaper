
export const SPOTIFY_CONFIG = {
    CLIENT_ID: import.meta.env.VITE_CLIENT_ID || '43f8be46cbcd48b5899f8e893274bd22',
    REDIRECT_URI: import.meta.env.VITE_REDIRECT_URI || window.location.origin,
    SCOPES: import.meta.env.VITE_SCOPES || 'user-read-private',
    API_BASE_URL: 'https://api.spotify.com/v1',
    AUTH_URL: 'https://accounts.spotify.com/authorize',
    TOKEN_URL: 'https://accounts.spotify.com/api/token'
};

export const CANVAS_CONFIG = {
    WIDTH: 1080,
    HEIGHT: 1920,
    MARGINS: {
        SIDE: 120,
        TOP: 120
    },
    PALETTE: {
        START_X: 120,
        START_Y: 120,
        COLOR_WIDTH: 56,
        COLOR_HEIGHT: 20,
        COLOR_GAP: 8
    },
    DURATION: { X: 960, Y: 130, ALIGN: 'right' },
    TITLE: { X: 120, Y: 200, ALIGN: 'left' },
    TEXT_MAX_WIDTH: 840,
    COVER: {
        SIZE: 840,
        BORDER_RADIUS: 8,
        X: 120,
        Y: 460
    },
    SPOTIFY_CODE: {
        WIDTH: 800,
        HEIGHT: 190,
        X: 140,
        Y: 1364
    }
};

export const LANDSCAPE_SIZE = { WIDTH: 1920, HEIGHT: 1080 };

export const LANDSCAPE_LAYOUTS = {
        column: {
        PALETTE: { START_X: 960, START_Y: 160, COLOR_WIDTH: 56, COLOR_HEIGHT: 20, COLOR_GAP: 8 },
        DURATION: { X: 1820, Y: 170, ALIGN: 'right' },
        TITLE: { X: 960, Y: 220, ALIGN: 'left' },
        TEXT_MAX_WIDTH: 860,
        COVER: { SIZE: 760, BORDER_RADIUS: 8, X: 100, Y: 160 },
        SPOTIFY_CODE: { WIDTH: 700, HEIGHT: 166, X: 960, Y: 814 }
    },

        poster: {
        BACKGROUND: 'radial',
        PALETTE: { START_X: 804, START_Y: 560, COLOR_WIDTH: 56, COLOR_HEIGHT: 20, COLOR_GAP: 8 },
        DURATION: { X: 1820, Y: 90, ALIGN: 'right' },
        TITLE: { X: 960, Y: 620, ALIGN: 'center' },
        TEXT_MAX_WIDTH: 1200,
        COVER: { SIZE: 460, BORDER_RADIUS: 8, X: 730, Y: 70 },
        SPOTIFY_CODE: { WIDTH: 560, HEIGHT: 133, X: 680, Y: 840 }
    },

        editorial: {
        PALETTE: { START_X: 100, START_Y: 430, COLOR_WIDTH: 56, COLOR_HEIGHT: 20, COLOR_GAP: 8 },
        DURATION: { X: 100, Y: 140, ALIGN: 'left' },
        TITLE: { X: 100, Y: 200, ALIGN: 'left', FONT: 'bold 64px Inter, system-ui', LINE_HEIGHT: 70 },
        TEXT_MAX_WIDTH: 940,
        COVER: { SIZE: 700, BORDER_RADIUS: 8, X: 1120, Y: 190 },
        SPOTIFY_CODE: { WIDTH: 620, HEIGHT: 147, X: 100, Y: 833 }
    },

        cinematic: {
        PALETTE: { START_X: 1350, START_Y: 90, COLOR_WIDTH: 56, COLOR_HEIGHT: 20, COLOR_GAP: 8 },
        DURATION: { X: 1820, Y: 100, ALIGN: 'right' },
        TITLE: { X: 320, Y: 855, ALIGN: 'left' },
        TEXT_MAX_WIDTH: 1300,
        COVER: { SIZE: 180, BORDER_RADIUS: 8, X: 100, Y: 800 },
        SPOTIFY_CODE: { WIDTH: 260, HEIGHT: 62, X: 1560, Y: 918 }
    }
};

export const FONT_CONFIG = {
    TITLE: 'bold 48px Inter, system-ui',
    SUBTITLE: '28px Inter, system-ui',
    DURATION: 'bold 24px Inter, system-ui'
};

export const COLOR_CONFIG = {
    BACKGROUND: '#000000',
    TEXT: '#ffffff',
    SPOTIFY_GREEN: '#1db954',
    SPOTIFY_GREEN_HOVER: '#1ed760'
};