export interface ContentLayout {
    label: string;
    value: string;
}

export interface contentLayoutOpn {
    [key: string]: ContentLayout;
}

export const contentLayoutOption: contentLayoutOpn = {
    full: {
        label: "Full",
        value: "full",
    },
    centered: {
        label: "Centered",
        value: "centered",
    },
};

export const applyContentLayoutMode = (mode: string) => {
    const selectedMode = contentLayoutOption[mode]?.value || contentLayoutOption['full'].value;

    // Select the element regardless of the current value
    const layoutContentElement = document.querySelector('[data-theme-content-layout]');

    if (layoutContentElement) {
        layoutContentElement.setAttribute('data-theme-content-layout', selectedMode);
    } else {
        console.warn('Layout element with [data-theme-content-layout] not found');
    }
};
