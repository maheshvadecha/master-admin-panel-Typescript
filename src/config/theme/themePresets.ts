export interface ThemePresetColor {
    [key: string]: string;
}

export interface ThemePreset {
    label: string;
    dotColor: string;
    colors: ThemePresetColor;
}

export interface ThemePresets {
    [key: string]: ThemePreset;
}

export const themePresets: ThemePresets = {
    'default': {
        label: 'Default',
        dotColor: 'oklch(0.205 0 0)', // Black tone
        colors: {
            '--background': 'oklch(1 0 0)',
            '--foreground': 'oklch(0.145 0 0)',
            '--card': 'oklch(1 0 0)',
            '--card-foreground': 'oklch(0.145 0 0)',
            '--popover': 'oklch(1 0 0)',
            '--popover-foreground': 'oklch(0.145 0 0)',
            '--primary': 'oklch(0.205 0 0)',
            '--primary-foreground': 'oklch(0.985 0 0)',
            '--secondary': 'oklch(0.97 0 0)',
            '--secondary-foreground': 'oklch(0.205 0 0)',
            '--muted': 'oklch(0.97 0 0)',
            '--muted-foreground': 'oklch(0.556 0 0)',
            '--accent': 'oklch(0.97 0 0)',
            '--accent-foreground': 'oklch(0.205 0 0)',
            '--destructive': 'oklch(0.577 0.245 27.325)',
            '--border': 'oklch(0.922 0 0)',
            '--input': 'oklch(0.922 0 0)',
            '--ring': 'oklch(0.708 0 0)',
            '--chart-1': 'oklch(0.646 0.222 41.116)',
            '--chart-2': 'oklch(0.6 0.118 184.704)',
            '--chart-3': 'oklch(0.398 0.07 227.392)',
            '--chart-4': 'oklch(0.828 0.189 84.429)',
            '--chart-5': 'oklch(0.769 0.188 70.08)',
            '--sidebar': 'oklch(0.985 0 0)',
            '--sidebar-foreground': 'oklch(0.145 0 0)',
            '--sidebar-primary': 'oklch(0.205 0 0)',
            '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
            '--sidebar-accent': 'oklch(0.97 0 0)',
            '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
            '--sidebar-border': 'oklch(0.922 0 0)',
            '--sidebar-ring': 'oklch(0.708 0 0)',
        },
    },
    'desert-heat': {
        label: 'Desert Heat',
        dotColor: 'oklch(0.7 0.22 40)', // Warm orange
        colors: {
            '--background': 'oklch(0.99 0.02 40)', // Very light orange
            '--foreground': 'oklch(0.145 0 0)',
            '--card': 'oklch(1 0 0)',
            '--card-foreground': 'oklch(0.145 0 0)',
            '--popover': 'oklch(1 0 0)',
            '--popover-foreground': 'oklch(0.145 0 0)',
            '--primary': 'oklch(0.7 0.22 40)', // Warm orange
            '--primary-foreground': 'oklch(0.985 0 0)',
            '--secondary': 'oklch(0.97 0.04 40)',
            '--secondary-foreground': 'oklch(0.205 0 0)',
            '--muted': 'oklch(0.97 0.02 40)',
            '--muted-foreground': 'oklch(0.556 0 0)',
            '--accent': 'oklch(0.75 0.18 40)', // Lighter orange
            '--accent-foreground': 'oklch(0.205 0 0)',
            '--destructive': 'oklch(0.577 0.245 27.325)',
            '--border': 'oklch(0.922 0.02 40)',
            '--input': 'oklch(0.922 0.02 40)',
            '--ring': 'oklch(0.708 0.1 40)',
            '--chart-1': 'oklch(0.7 0.22 40)',
            '--chart-2': 'oklch(0.75 0.2 30)',
            '--chart-3': 'oklch(0.8 0.18 50)',
            '--chart-4': 'oklch(0.65 0.2 35)',
            '--chart-5': 'oklch(0.6 0.22 45)',
            '--sidebar': 'oklch(0.95 0.04 40)', // Light orange
            '--sidebar-foreground': 'oklch(0.145 0 0)',
            '--sidebar-primary': 'oklch(0.7 0.22 40)',
            '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
            '--sidebar-accent': 'oklch(0.95 0.08 40)',
            '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
            '--sidebar-border': 'oklch(0.922 0.02 40)',
            '--sidebar-ring': 'oklch(0.708 0.1 40)',
        },
    },
    'lake-view': {
        label: 'Lake view',
        dotColor: 'oklch(0.65 0.15 220)', // Cool blue
        colors: {
            '--background': 'oklch(0.98 0.02 220)', // Very light blue
            '--foreground': 'oklch(0.145 0 0)',
            '--card': 'oklch(1 0 0)',
            '--card-foreground': 'oklch(0.145 0 0)',
            '--popover': 'oklch(1 0 0)',
            '--popover-foreground': 'oklch(0.145 0 0)',
            '--primary': 'oklch(0.65 0.15 220)', // Cool blue
            '--primary-foreground': 'oklch(0.985 0 0)',
            '--secondary': 'oklch(0.97 0.04 220)',
            '--secondary-foreground': 'oklch(0.205 0 0)',
            '--muted': 'oklch(0.97 0.02 220)',
            '--muted-foreground': 'oklch(0.556 0 0)',
            '--accent': 'oklch(0.75 0.12 220)', // Lighter blue
            '--accent-foreground': 'oklch(0.205 0 0)',
            '--destructive': 'oklch(0.577 0.245 27.325)',
            '--border': 'oklch(0.922 0.02 220)',
            '--input': 'oklch(0.922 0.02 220)',
            '--ring': 'oklch(0.708 0.1 220)',
            '--chart-1': 'oklch(0.65 0.15 220)',
            '--chart-2': 'oklch(0.7 0.13 230)',
            '--chart-3': 'oklch(0.75 0.11 210)',
            '--chart-4': 'oklch(0.6 0.14 225)',
            '--chart-5': 'oklch(0.55 0.16 215)',
            '--sidebar': 'oklch(0.95 0.04 220)', // Light blue
            '--sidebar-foreground': 'oklch(0.145 0 0)',
            '--sidebar-primary': 'oklch(0.65 0.15 220)',
            '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
            '--sidebar-accent': 'oklch(0.95 0.08 220)',
            '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
            '--sidebar-border': 'oklch(0.922 0.02 220)',
            '--sidebar-ring': 'oklch(0.708 0.1 220)',
        },
    },
    'sunset-glow': {
        label: 'Sunset Glow',
        dotColor: 'oklch(0.7 0.22 25)', // Warm red-pink
        colors: {
            '--background': 'oklch(0.98 0.02 25)', // Very light red
            '--foreground': 'oklch(0.145 0 0)',
            '--card': 'oklch(1 0 0)',
            '--card-foreground': 'oklch(0.145 0 0)',
            '--popover': 'oklch(1 0 0)',
            '--popover-foreground': 'oklch(0.145 0 0)',
            '--primary': 'oklch(0.7 0.22 25)', // Warm red-pink
            '--primary-foreground': 'oklch(0.985 0 0)',
            '--secondary': 'oklch(0.97 0.04 25)',
            '--secondary-foreground': 'oklch(0.205 0 0)',
            '--muted': 'oklch(0.97 0.02 25)',
            '--muted-foreground': 'oklch(0.556 0 0)',
            '--accent': 'oklch(0.75 0.18 25)', // Lighter red
            '--accent-foreground': 'oklch(0.205 0 0)',
            '--destructive': 'oklch(0.577 0.245 27.325)',
            '--border': 'oklch(0.922 0.02 25)',
            '--input': 'oklch(0.922 0.02 25)',
            '--ring': 'oklch(0.708 0.1 25)',
            '--chart-1': 'oklch(0.7 0.22 25)',
            '--chart-2': 'oklch(0.75 0.2 15)',
            '--chart-3': 'oklch(0.8 0.18 35)',
            '--chart-4': 'oklch(0.65 0.2 20)',
            '--chart-5': 'oklch(0.6 0.22 30)',
            '--sidebar': 'oklch(0.95 0.04 25)', // Light red
            '--sidebar-foreground': 'oklch(0.145 0 0)',
            '--sidebar-primary': 'oklch(0.7 0.22 25)',
            '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
            '--sidebar-accent': 'oklch(0.95 0.08 25)',
            '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
            '--sidebar-border': 'oklch(0.922 0.02 25)',
            '--sidebar-ring': 'oklch(0.708 0.1 25)',
        },
    },
    'forest-whisper': {
        label: 'Forest Whisper',
        dotColor: 'oklch(0.735 0.144 147)', // Green tone
        colors: {
            '--background': 'oklch(0.98 0.02 147)', // Very light green
            '--foreground': 'oklch(0.145 0 0)',
            '--card': 'oklch(1 0 0)',
            '--card-foreground': 'oklch(0.145 0 0)',
            '--popover': 'oklch(1 0 0)',
            '--popover-foreground': 'oklch(0.145 0 0)',
            '--primary': 'oklch(0.735 0.144 147)', // Green tone
            '--primary-foreground': 'oklch(0.985 0 0)',
            '--secondary': 'oklch(0.97 0.04 147)',
            '--secondary-foreground': 'oklch(0.205 0 0)',
            '--muted': 'oklch(0.97 0.02 147)',
            '--muted-foreground': 'oklch(0.556 0 0)',
            '--accent': 'oklch(0.8 0.12 147)', // Lighter green
            '--accent-foreground': 'oklch(0.205 0 0)',
            '--destructive': 'oklch(0.577 0.245 27.325)',
            '--border': 'oklch(0.922 0.02 147)',
            '--input': 'oklch(0.922 0.02 147)',
            '--ring': 'oklch(0.708 0.1 147)',
            '--chart-1': 'oklch(0.735 0.144 147)',
            '--chart-2': 'oklch(0.765 0.13 157)',
            '--chart-3': 'oklch(0.795 0.11 137)',
            '--chart-4': 'oklch(0.685 0.15 152)',
            '--chart-5': 'oklch(0.635 0.16 142)',
            '--sidebar': 'oklch(0.95 0.04 147)', // Light green
            '--sidebar-foreground': 'oklch(0.145 0 0)',
            '--sidebar-primary': 'oklch(0.735 0.144 147)',
            '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
            '--sidebar-accent': 'oklch(0.95 0.08 147)',
            '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
            '--sidebar-border': 'oklch(0.922 0.02 147)',
            '--sidebar-ring': 'oklch(0.708 0.1 147)',
        },
    },
    'ocean-breeze': {
        label: 'Ocean Breeze',
        dotColor: 'oklch(0.745 0.176 249)', // Blue tone
        colors: {
            '--background': 'oklch(0.98 0.02 249)', // Very light blue
            '--foreground': 'oklch(0.145 0 0)',
            '--card': 'oklch(1 0 0)',
            '--card-foreground': 'oklch(0.145 0 0)',
            '--popover': 'oklch(1 0 0)',
            '--popover-foreground': 'oklch(0.145 0 0)',
            '--primary': 'oklch(0.745 0.176 249)', // Blue tone
            '--primary-foreground': 'oklch(0.985 0 0)',
            '--secondary': 'oklch(0.97 0.04 249)',
            '--secondary-foreground': 'oklch(0.205 0 0)',
            '--muted': 'oklch(0.97 0.02 249)',
            '--muted-foreground': 'oklch(0.556 0 0)',
            '--accent': 'oklch(0.8 0.14 249)', // Lighter blue
            '--accent-foreground': 'oklch(0.205 0 0)',
            '--destructive': 'oklch(0.577 0.245 27.325)',
            '--border': 'oklch(0.922 0.02 249)',
            '--input': 'oklch(0.922 0.02 249)',
            '--ring': 'oklch(0.708 0.1 249)',
            '--chart-1': 'oklch(0.745 0.176 249)',
            '--chart-2': 'oklch(0.775 0.156 259)',
            '--chart-3': 'oklch(0.805 0.136 239)',
            '--chart-4': 'oklch(0.695 0.186 254)',
            '--chart-5': 'oklch(0.645 0.196 244)',
            '--sidebar': 'oklch(0.95 0.04 249)', // Light blue
            '--sidebar-foreground': 'oklch(0.145 0 0)',
            '--sidebar-primary': 'oklch(0.745 0.176 249)',
            '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
            '--sidebar-accent': 'oklch(0.95 0.08 249)',
            '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
            '--sidebar-border': 'oklch(0.922 0.02 249)',
            '--sidebar-ring': 'oklch(0.708 0.1 249)',
        },
    },
    'lavender-dream': {
        label: 'Lavender Dream',
        dotColor: 'oklch(0.688 0.175 302)', // Violet tone
        colors: {
            '--background': 'oklch(0.98 0.02 302)', // Very light violet
            '--foreground': 'oklch(0.145 0 0)',
            '--card': 'oklch(1 0 0)',
            '--card-foreground': 'oklch(0.145 0 0)',
            '--popover': 'oklch(1 0 0)',
            '--popover-foreground': 'oklch(0.145 0 0)',
            '--primary': 'oklch(0.688 0.175 302)', // Violet tone
            '--primary-foreground': 'oklch(0.985 0 0)',
            '--secondary': 'oklch(0.97 0.04 302)',
            '--secondary-foreground': 'oklch(0.205 0 0)',
            '--muted': 'oklch(0.97 0.02 302)',
            '--muted-foreground': 'oklch(0.556 0 0)',
            '--accent': 'oklch(0.75 0.14 302)', // Lighter violet
            '--accent-foreground': 'oklch(0.205 0 0)',
            '--destructive': 'oklch(0.577 0.245 27.325)',
            '--border': 'oklch(0.922 0.02 302)',
            '--input': 'oklch(0.922 0.02 302)',
            '--ring': 'oklch(0.708 0.1 302)',
            '--chart-1': 'oklch(0.688 0.175 302)',
            '--chart-2': 'oklch(0.738 0.155 312)',
            '--chart-3': 'oklch(0.788 0.135 292)',
            '--chart-4': 'oklch(0.638 0.185 307)',
            '--chart-5': 'oklch(0.588 0.195 297)',
            '--sidebar': 'oklch(0.95 0.04 302)', // Light violet
            '--sidebar-foreground': 'oklch(0.145 0 0)',
            '--sidebar-primary': 'oklch(0.688 0.175 302)',
            '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
            '--sidebar-accent': 'oklch(0.95 0.08 302)',
            '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
            '--sidebar-border': 'oklch(0.922 0.02 302)',
            '--sidebar-ring': 'oklch(0.708 0.1 302)',
        },
    },
    'retro': {
        label: 'Retro',
        dotColor: 'oklch(0.707 0.223 329)', // Pink tone
        colors: {
            '--background': 'oklch(0.98 0.02 60)', // Light amber
            '--foreground': 'oklch(0.145 0 0)',
            '--card': 'oklch(1 0 0)',
            '--card-foreground': 'oklch(0.145 0 0)',
            '--popover': 'oklch(1 0 0)',
            '--popover-foreground': 'oklch(0.145 0 0)',
            '--primary': 'oklch(0.707 0.223 329)', // Pink tone
            '--primary-foreground': 'oklch(0.985 0 0)',
            '--secondary': 'oklch(0.97 0.04 60)',
            '--secondary-foreground': 'oklch(0.205 0 0)',
            '--muted': 'oklch(0.97 0.02 60)',
            '--muted-foreground': 'oklch(0.556 0 0)',
            '--accent': 'oklch(0.75 0.18 329)', // Lighter pink
            '--accent-foreground': 'oklch(0.205 0 0)',
            '--destructive': 'oklch(0.577 0.245 27.325)',
            '--border': 'oklch(0.922 0.02 60)',
            '--input': 'oklch(0.922 0.02 60)',
            '--ring': 'oklch(0.708 0.1 329)',
            '--chart-1': 'oklch(0.707 0.223 329)',
            '--chart-2': 'oklch(0.757 0.203 339)',
            '--chart-3': 'oklch(0.807 0.183 319)',
            '--chart-4': 'oklch(0.657 0.233 334)',
            '--chart-5': 'oklch(0.607 0.243 324)',
            '--sidebar': 'oklch(0.96 0.04 60)', // Medium light amber
            '--sidebar-foreground': 'oklch(0.145 0 0)',
            '--sidebar-primary': 'oklch(0.707 0.223 329)',
            '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
            '--sidebar-accent': 'oklch(0.96 0.08 60)',
            '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
            '--sidebar-border': 'oklch(0.922 0.02 60)',
            '--sidebar-ring': 'oklch(0.708 0.1 329)',
        },
    },
};

export const applyThemePreset = (preset: string) => {
    const safePreset = typeof preset === "string" ? preset : String(preset);
    const values = themePresets[safePreset]?.colors || themePresets["default"].colors;

    Object.entries(values).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });

    localStorage.setItem("theme-preset", safePreset);
};