export interface ThemModeOpn {
    label: string;
    value: string;
}

export interface themeInterface {
    [key: string]: ThemModeOpn;
}

export const themeModeOption: themeInterface = {
    light: {
        label: "Light",
        value: "light",
    },
    dark: {
        label: "Dark",
        value: "dark",
    }
};