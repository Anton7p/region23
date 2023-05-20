import {
    MIN_DESKTOP_WIDTH,
    MIN_MOBILE_WIDTH,
    MIN_TABLET_WIDTH,
} from "@/constants";

export const getDiffRelationConstant = () => {
    return (MIN_DESKTOP_WIDTH - MIN_TABLET_WIDTH) / (MIN_TABLET_WIDTH - MIN_MOBILE_WIDTH);
};

export const calcMobileSize = (
    desktopSize: number,
    tabletSize: number | undefined,
    diffRelationConstant: number,
) => {
    return (
        tabletSize && (tabletSize * (diffRelationConstant + 1) - desktopSize) / diffRelationConstant
    );
};

export const calcTabletSize = (
    desktopSize: number,
    mobileSize: number | undefined,
    diffRelationConstant: number,
) => {
    return (
        mobileSize && (desktopSize + diffRelationConstant * mobileSize) / (diffRelationConstant + 1)
    );
};
