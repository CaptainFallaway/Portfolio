import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

interface NavBarButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  label: string;
}

export function NavBarButton({ onClick, children, label }: NavBarButtonProps) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip open={tooltipOpen}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="navbar-button"
            onClick={onClick}
            aria-label={label}
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
