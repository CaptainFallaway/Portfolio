import type { LucideIcon } from 'lucide-react';
import type { FC, SVGProps } from 'react';

// Type for custom SVG icon components
export type IconComponent = FC<SVGProps<SVGSVGElement>>;

// Type for configuration that can accept either Lucide or custom icons
export type IconType = LucideIcon | IconComponent;