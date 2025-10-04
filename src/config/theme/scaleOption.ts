export interface ScaleOption {
    label: string;
    value: string;
}

export interface ScaleInterface {
    [key: string]: ScaleOption;
}

export const scaleOption: ScaleInterface = {
    default: { label: "⊘", value: "default" },
    xs: {
        label: "XS",
        value: "xs"
    },
    sm: {
        label: "SM",
        value: "sm"
    },
    md: {
        label: "MD",
        value: "md"
    },
    lg: {
        label: "LG",
        value: "lg"
    },
    xl: {
        label: "XL",
        value: "xl"
    },
};

// Modular scale (approx. ratio of 1.125)
export const applyFontSizeScale = (scaleSetting: string) => {
    // Set the attribute on root element
    document.documentElement.setAttribute('data-scale', scaleSetting);

    const scaleMultiplier: Record<string, number> = {
        default: 1,
        xs: 0.875,   // ~ -1 step
        sm: 0.95,    // slight reduction
        md: 1,       // base
        lg: 1.125,   // one up
        xl: 1.25     // two up
    };

    const scale = scaleMultiplier[scaleSetting] ?? 1;

    const fontSizeBaseValues: Record<string, number> = {
        '--font-size-xs': 0.75,
        '--font-size-sm': 0.875,
        '--font-size-base': 1,
        '--font-size-lg': 1.125,
        '--font-size-xl': 1.25,
    };

    Object.entries(fontSizeBaseValues).forEach(([varName, baseValue]) => {
        const scaledValue = baseValue * scale;
        document.documentElement.style.setProperty(varName, `${scaledValue}rem`);
    });

    document.documentElement.style.setProperty('--font-scale', `${scale}`);
};
