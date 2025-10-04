export interface SidebarOpn {
    label: string;
    value: string;
}

export interface sidebarInterface {
    [key: string]: SidebarOpn;
}

export const sidebarModeOption: sidebarInterface = {
    default: {
        label: "Default",
        value: "default",
    },
    icon: {
        label: "Icon",
        value: "icon",
    }
};

export const applySidebarMode = (mode: string) => {
    const selectedMode = sidebarModeOption[mode]?.value || sidebarModeOption['default'].value;

    const sidebarElement = document.querySelector('[data-slot="sidebar"]');
    if (sidebarElement) {
        sidebarElement.setAttribute('data-collapsible', selectedMode);
    } else {
        console.warn('Sidebar element not found');
    }
};