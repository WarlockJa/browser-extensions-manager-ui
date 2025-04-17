"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import SVGIconSun from "@/assets/svg/svg-icon-sun";
import SVGIconMoon from "@/assets/svg/svg-icon-moon";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  function handleThemeSwitch() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  return (
    <Button
      size="icon"
      onClick={handleThemeSwitch}
      className="w-12 h-12 p-3 rounded-2xl border-0 bg-muted hover:bg-custom-neutral-300 focus:bg-custom-neutral-300 dark:hover:bg-custom-neutral-600 dark:focus:bg-custom-neutral-600 ring-offset-2 ring-offset-muted"
    >
      <SVGIconMoon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 stroke-foreground fill-none [&_svg]:size-1" />
      <SVGIconSun className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 stroke-foreground fill-none [&_svg]:size-1" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
