import {useWindowSize} from './useWindowSize';
import {MIN_DESKTOP_WIDTH} from "../constants";

export const useBreakpoints = () => {
    const {windowSize} = useWindowSize();

    const container = windowSize && windowSize <= MIN_DESKTOP_WIDTH;
    const onDesktopZone = Boolean(windowSize && windowSize > 1024);
    const onTabletZone = Boolean(windowSize && windowSize >= 768 && windowSize <= 1024);
    const onMobileZone = Boolean(windowSize && windowSize < 768);

    // Add more breakpoints here if you need some
    return {container, onDesktopZone, onTabletZone, onMobileZone, windowSize: windowSize};
};
