"use client";
import { Button } from "@/components/ui/button";
import { navItems } from "@/constants/data";
import { cn, scrollToSection } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function MobileNavItems() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="group size-8 lg:hidden"
          >
            <svg
              className="pointer-events-none"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <nav className="space-y-2">
            {navItems.map((navItem) => (
              <DropdownMenuItem
                key={navItem}
                className={cn(
                  "p-2 rounded-md focus:bg-muted focus:text-muted-foreground capitalize",
                )}
                onClick={() => scrollToSection(navItem)}
              >
                {navItem}
              </DropdownMenuItem>
            ))}
          </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default MobileNavItems;
