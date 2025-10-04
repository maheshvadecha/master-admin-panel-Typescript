'use client';

//** React imports */
import { useState } from 'react';

//** Third party imports */
import { Settings } from 'lucide-react';

//** ShadCn UI component imports */
import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useTheme } from '@/context/ThemeContext';
import { themePresets } from '@/config/theme/themePresets';
import { scaleOption } from '@/config/theme/scaleOption';
import { borderRadius } from '@/config/theme/borderRadius';
import { themeModeOption } from '@/config/theme/themeMode';
import { sidebarModeOption } from '@/config/theme/sidebarMode';
import { contentLayoutOption } from '@/config/theme/contentLayout';

export function ThemeSettingToggleButton() {
    //** State */
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {
        radius,
        colorMode,
        scale,
        contentLayout,
        sidebarMode,
        themePreset,
        // fontFamily,
        updateSetting,
        resetToDefault,
    } = useTheme();

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    type="button"
                    variant="outline"
                    className="cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Settings className="h-6 w-6" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 mx-h-[655px] p-0 overflow-y-auto" align="end">
                <div className="space-y-5 p-4 w-full mx-h-[655px] overflow-y-auto overflow-x-hidden select-none">
                    <div>
                        <h3 className="mb-2 text-sm font-medium">Theme preset:</h3>
                        <Select
                            value={String(themePreset)}
                            onValueChange={(value) => updateSetting("themePreset", value)}
                        >
                            <SelectTrigger className="w-full cursor-pointer">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                {Object.entries(themePresets).map(([key, { label, dotColor }]) => (
                                    <SelectItem key={key} value={key}>
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="h-2 w-2 rounded-full"
                                                style={{ backgroundColor: dotColor }}
                                            ></span>
                                            {label}
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm font-medium">Scale:</h3>
                        <div className="flex gap-2">
                            {Object.entries(scaleOption).map(([key, { label }]) => (
                                <Button
                                    key={key}
                                    variant={scale === key ? "default" : "outline"}
                                    className="flex-1 cursor-pointer"
                                    onClick={() => updateSetting("scale", key)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm font-medium">Radius:</h3>
                        <div className="flex gap-2">
                            {Object.entries(borderRadius).map(([key, { label }]) => (
                                <Button
                                    key={key}
                                    size="sm"
                                    variant={radius === key ? "default" : "outline"}
                                    className="flex-1 cursor-pointer"
                                    onClick={() => updateSetting("radius", key)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* <div>
                        <h3 className="mb-2 text-sm font-medium">Font:</h3>
                        <Select
                            value={fontFamily}
                            onValueChange={(value) => updateSetting("fontFamily", value)}
                        >
                            <SelectTrigger className="w-full cursor-pointer">
                                <SelectValue value={fontFamily} />
                            </SelectTrigger>
                            <SelectContent className={"w-full"}>
                                {fontOptions?.map((d, index) => (
                                    <SelectItem key={index} value={d?.val}>
                                        {d?.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div> */}

                    <div>
                        <h3 className="mb-2 text-sm font-medium">Color mode:</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {Object.entries(themeModeOption).map(([key, { label }]) => (
                                <Button
                                    key={key}
                                    size="sm"
                                    variant={colorMode === key ? "default" : "outline"}
                                    className="flex-1 cursor-pointer"
                                    onClick={() => updateSetting("colorMode", key)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm font-medium">Content layout</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {Object.entries(contentLayoutOption).map(([key, { label }]) => (
                                <Button
                                    key={key}
                                    size="sm"
                                    variant={contentLayout === key ? "default" : "outline"}
                                    className="flex-1 cursor-pointer"
                                    onClick={() => updateSetting("contentLayout", key)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm font-medium">Sidebar mode:</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {Object.entries(sidebarModeOption).map(([key, { label }]) => (
                                <Button
                                    key={key}
                                    size="sm"
                                    variant={sidebarMode === key ? "default" : "outline"}
                                    className="flex-1 cursor-pointer"
                                    onClick={() => updateSetting("sidebarMode", key)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Button className="w-full" onClick={resetToDefault}>
                        Reset to Default
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
