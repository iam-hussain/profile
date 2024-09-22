
import { Sun, Moon, SunMoon } from "lucide-react"; // Assuming shadcn uses Lucide icons
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeModeToggle() {
  const { setTheme, theme = 'system', systemTheme } = useTheme();

  const handleThemeChange = () => {
    if (systemTheme) {
      if (theme === 'light') {
        setTheme('dark')
      } else if (theme === 'dark') {
        setTheme('system')
      } else {
        setTheme('light')
      }
    } else {
      if (theme === 'light') {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }
  }

  return (
    <Button variant={'icon'} onClick={() => handleThemeChange()}>
      {theme === 'light' && <Sun />}
      {theme === 'dark' && <Moon />}
      {theme === 'system' && <SunMoon />}
    </Button>
  );
}
