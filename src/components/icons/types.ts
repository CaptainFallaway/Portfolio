import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

/**
 * Base type for all custom icon components
 * Ensures consistent props and typing across all icons
 */
export type IconComponent = React.FC<IconProps>;
