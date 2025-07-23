"use client";

import { cn, scrollToSection } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  btnText: string;
  to: string;
  icon: boolean;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | undefined;
  btnClassName?: string;
  iconClassName?: string;
}

function CtaButton({
  btnText,
  to,
  icon,
  variant,
  btnClassName,
  iconClassName,
}: CTAButtonProps) {
  return (
    <Button
      className={cn("group", btnClassName)}
      variant={variant}
      onClick={() => scrollToSection(to)}
    >
      {btnText}{" "}
      {icon && (
        <ArrowRight
          className={cn(
            "group-hover:translate-x-0.5 transition-transform duration-200",
            iconClassName,
          )}
        />
      )}
    </Button>
  );
}

export default CtaButton;
