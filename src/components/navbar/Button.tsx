import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { useTouchQuery } from "@/hooks/useTouchQuery";

interface NavBarButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  label: string;
}

export function NavBarButton({ onClick, children, label }: NavBarButtonProps) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const isTouch = useTouchQuery();

  const commonButtonProps = {
    variant: "ghost" as "ghost",
    size: "icon" as "icon",
    className: "navbar-button",
    onClick: onClick,
    "aria-label": label,
  };

  // Don't show tooltips on touch devices or mobile/tablet
  if (isTouch) {
    return <Button {...commonButtonProps}>{children}</Button>;
  }

  // Show tooltips on desktop
  return (
    <TooltipProvider>
      <Tooltip open={tooltipOpen}>
        <TooltipTrigger asChild>
          <Button
            {...commonButtonProps}
            onMouseEnter={() => setTooltipOpen(true)}
            onMouseLeave={() => setTooltipOpen(false)}
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="p-1">
            <p className="font-semibold">{label}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
