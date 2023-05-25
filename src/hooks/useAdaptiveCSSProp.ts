import { CSSProperties } from 'react';

import { useBreakpoints } from './useBreakpoints';
import {
  calcMobileSize,
  calcTabletSize,
  getDiffRelationConstant,
} from './useAdaptiveCSSProp.utils';
import { MIN_DESKTOP_WIDTH, MIN_MOBILE_WIDTH, MIN_TABLET_WIDTH } from '../constants';

export type AdaptiveSize = [number, number, number];

export const useAdaptiveFont = (
  desktopSize = 17,
  tabletSize?: number,
  mobileSize?: number
) => {
  return useAdaptiveCSSProp('fontSize', desktopSize, tabletSize, mobileSize);
};

// Make sure this is synced with adaptive-properties.scss
/**
 * makes css property responsive between breakpoints on specified values for each breakpoint
 * if no @param mobileSize and @param tabletSize available, the value will be fixed to the @param desktopSize
 * @param prop
 * @param desktopSize
 * @param mobileSize - if omitted then it will be calculcated based on tabletSize
 * @param tabletSize - if omitted then it will be calculcated based on mobileSize
 *
 */
export const useAdaptiveCSSProp = (
  prop: keyof CSSProperties,
  desktopSize: number,
  tabletSize?: number,
  mobileSize?: number
): CSSProperties => {
  const { container, onMobileZone } = useBreakpoints();
  if (mobileSize === undefined && tabletSize === undefined) {
    return { [prop]: `${desktopSize}px` };
  }

  /**
   * Defining possibly undefined mobileSize and tabletSize is done by using the proportion of
   * differences of breakpoints' values with differences of actually specified sizes
   * (desktopSize - tabletSize) / (tabletSize - mobileSize) == (CONTAINER_WIDTH - MIN_TABLET_WIDTH) / (MIN_TABLET_WIDTH - MIN_MOBILE_WIDTH)
   * using proportion above we can extract the undefined value and calculate it
   */
  const diffConstant = getDiffRelationConstant();
  const definedMobileSize = (mobileSize ||
    calcMobileSize(desktopSize, tabletSize, diffConstant)) as number;
  const definedTabletSize = (tabletSize ||
    calcTabletSize(desktopSize, mobileSize, diffConstant)) as number;

  if (onMobileZone) {
    return {
      [prop]: `calc(${definedMobileSize}px + (${
        definedTabletSize - definedMobileSize
      }) * (100vw - ${MIN_MOBILE_WIDTH}px) / (${MIN_TABLET_WIDTH - MIN_MOBILE_WIDTH}))`,
    };
  } else if (container) {
    return {
      [prop]: `calc(${definedTabletSize}px + (${
        desktopSize - definedTabletSize
      }) * (100vw - ${MIN_TABLET_WIDTH}px) / (${MIN_DESKTOP_WIDTH - MIN_TABLET_WIDTH}))`,
    };
  } else {
    return { [prop]: `${desktopSize}px` };
  }
};
