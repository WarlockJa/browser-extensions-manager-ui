import SVGLogo from "@/assets/svg/svg-logo";
import ExtensionsList from "@/components/home/extensions-list";
import { ThemeToggle } from "@/components/theme-toggle";
import extensionsData from "@/lib/data.json";

export default function Home() {
  return (
    <div className="flex flex-col w-screen max-w-5xl mx-auto p-4">
      <header className="px-4 py-3 flex justify-between items-center bg-background rounded-2xl shadow">
        <SVGLogo className="fill-foreground" />
        <ThemeToggle />
      </header>
      <main>
        <ExtensionsList initExtensionsData={extensionsData} />
      </main>
    </div>
  );
}
