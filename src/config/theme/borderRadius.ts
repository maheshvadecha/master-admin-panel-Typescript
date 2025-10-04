export interface RadiusOption {
    label: string;
    value: string;
}

export interface BorderRadiusOptions {
    [key: string]: RadiusOption;
}

export const borderRadius: BorderRadiusOptions = {
    none: {
        label: "None",
        value: "0px",
    },
    sm: {
        label: "SM",
        value: "0.125rem",
    },
    md: {
        label: "MD",
        value: "0.375rem",
    },
    lg: {
        label: "LG",
        value: "0.5rem",
    },
    xl: {
        label: "XL",
        value: "0.75rem",
    },
};

export const applyBorderRadius = (radius: string) => {
    const selectedRadius = borderRadius[radius].value || borderRadius['none'].value
    document.documentElement.style.setProperty('--radius', selectedRadius);
};