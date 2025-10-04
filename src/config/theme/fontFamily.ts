export interface FontOption {
    label: string;
    val: string;
    cssVar: string;
}

export const fontOptions: Array<FontOption> = [
    {
        label: "Inter",
        val: "inter",
        cssVar: "'Inter', sans-serif",
    },
    {
        label: "Roboto",
        val: "roboto",
        cssVar: "'Roboto', sans-serif",
    },
    {
        label: "Poppins",
        val: "poppins",
        cssVar: "'Poppins', sans-serif",
    },
    {
        label: "System",
        val: "system",
        cssVar: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    },
];