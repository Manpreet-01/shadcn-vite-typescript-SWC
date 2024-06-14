import { ThemeProvider } from "@/components/theme-provider";
import { Menu } from "./components/Menu";
import { AccordionSection } from "./components/accodrion";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Menu />

      <div className="flex justify-center p-8">
        <AccordionSection />
      </div>
    </ThemeProvider>
  );
}
