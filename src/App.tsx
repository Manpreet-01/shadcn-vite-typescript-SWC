import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { Menu } from "./components/Menu";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex justify-end">
        <ModeToggle />
      </div>
      <Menu />
    </ThemeProvider>
  );
}
