"use client";

import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
    ReactNode,
} from "react";
import { themeModeOption } from "@/config/theme/themeMode";
import { applyContentLayoutMode, contentLayoutOption } from "@/config/theme/contentLayout";
import { applyThemePreset, themePresets } from "@/config/theme/themePresets";
import { applyBorderRadius, borderRadius } from "@/config/theme/borderRadius";
import { applyFontSizeScale, scaleOption } from "@/config/theme/scaleOption";
import { applySidebarMode, sidebarModeOption } from "@/config/theme/sidebarMode";

// Theme setting types
export type ThemePresetKey = keyof typeof themePresets;
export type RadiusType = keyof typeof borderRadius;
export type ColorModeType = keyof typeof themeModeOption;
export type ScaleType = keyof typeof scaleOption;
export type ContentLayoutType = keyof typeof contentLayoutOption;
export type SidebarModeType = keyof typeof sidebarModeOption;
export type FontFamilyType = "inter" | "roboto" | "poppins" | "system";

// Theme settings interface
export interface ThemeSettings {
    themePreset: ThemePresetKey;
    radius: RadiusType;
    colorMode: ColorModeType;
    scale: ScaleType;
    contentLayout: ContentLayoutType;
    sidebarMode: SidebarModeType;
    fontFamily: FontFamilyType;
}

// Context interface
export interface ThemeContextType extends ThemeSettings {
    updateSetting: <K extends keyof ThemeSettings>(
        key: K,
        value: ThemeSettings[K]
    ) => void;
    resetToDefault: () => void;
    toggleColorMode: () => void;
    systemPreference: ColorModeType | null;
    useSystemTheme: () => void;
}

// Default settings
const defaultSettings: ThemeSettings = {
    themePreset: "default",
    radius: "md",
    colorMode: "light",
    scale: 'default',
    contentLayout: "full",
    sidebarMode: "default",
    fontFamily: "inter",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider props
interface ThemeProviderProps {
    children: ReactNode;
    disableTransitions?: boolean;
}

export function ThemeProvider({ children, disableTransitions = false }: ThemeProviderProps) {
    const [themeSettings, setThemeSettings] = useState<ThemeSettings>(defaultSettings);
    const [systemPreference, setSystemPreference] = useState<ColorModeType | null>(null);
    const [themeLoaded, setThemeLoaded] = useState(false);

    // Load settings from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("themeSettings");
        let settings = defaultSettings;

        if (saved) {
            try {
                settings = JSON.parse(saved);
                setThemeSettings(settings);
            } catch {
                localStorage.removeItem("themeSettings");
            }
        }

        // Apply initial dark/light class before rendering children
        if (settings.colorMode === "dark" || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        setThemeLoaded(true);
    }, []);

    // Detect system preference
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
            setSystemPreference(e.matches ? "dark" : "light");
        };

        handleChange(darkModeMediaQuery);

        darkModeMediaQuery.addEventListener("change", handleChange);
        return () => darkModeMediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Add transition styles when theme changes
    useEffect(() => {
        if (disableTransitions) return;

        const html = document.documentElement;
        html.classList.add('transition-colors');
        html.style.transition = 'background-color 0.3s ease, color 0.3s ease';

        return () => {
            html.classList.remove('transition-colors');
            html.style.transition = '';
        };
    }, [disableTransitions]);

    // Update localStorage when settings change
    const updateSetting = useCallback(
        <K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) => {
            const newSettings = { ...themeSettings, [key]: value };
            setThemeSettings(newSettings);
            localStorage.setItem("themeSettings", JSON.stringify(newSettings));
        },
        [themeSettings]
    );

    const resetToDefault = useCallback(() => {
        setThemeSettings(defaultSettings);
        localStorage.setItem("themeSettings", JSON.stringify(defaultSettings));
    }, []);

    const toggleColorMode = useCallback(() => {
        const newMode = themeSettings.colorMode === "dark" ? "light" : "dark";
        updateSetting("colorMode", newMode);
    }, [themeSettings.colorMode, updateSetting]);

    const useSystemTheme = useCallback(() => {
        if (systemPreference) {
            updateSetting("colorMode", systemPreference);
        }
    }, [systemPreference, updateSetting]);

    // Apply settings on themeSettings change
    useEffect(() => {
        if (!themeLoaded) return;

        const applySettings = async () => {
            if (themeSettings.colorMode === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            applyThemePreset(String(themeSettings.themePreset));
            applyFontSizeScale(String(themeSettings.scale));
            applyBorderRadius(String(themeSettings.radius));
            applySidebarMode(String(themeSettings.sidebarMode));
            applyContentLayoutMode(String(themeSettings.contentLayout));
        };
        applySettings();
    }, [themeSettings, themeLoaded]);

    if (!themeLoaded) return null;

    return (
        <ThemeContext.Provider
            value={{
                ...themeSettings,
                updateSetting,
                resetToDefault,
                toggleColorMode,
                systemPreference,
                useSystemTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
