import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import SVGLogoDevlens from "@/assets/svg/svg-logo-devlens";
import SVGLogoStyleSpy from "@/assets/svg/svg-logo-style-spy";
import SVGLogoSpeedBoost from "@/assets/svg/svg-logo-speed-boost";
import SVGLogoJSONWizard from "@/assets/svg/svg-logo-json-wizard";
import SVGLogoTabMasterPro from "@/assets/svg/svg-logo-tab-master-pro";
import SVGLogoViewportBuddy from "@/assets/svg/svg-logo-viewport-buddy";
import SVGLogoMarkupNotes from "@/assets/svg/svg-logo-markup-notes";
import SVGLogoGridGuides from "@/assets/svg/svg-logo-grid-guides";
import SVGLogoPalettePicker from "@/assets/svg/svg-logo-palette-picker";
import SVGLogoLinkChecker from "@/assets/svg/svg-logo-link-checker";
import SVGLogoDomSnapshot from "@/assets/svg/svg-logo-dom-snapshot";
import SVGlogoConsolePlus from "@/assets/svg/svg-logo-console-plus";

function getExtensionSVG(logo: string) {
  switch (logo) {
    case "./assets/images/logo-devlens.svg":
      return SVGLogoDevlens;
    case "./assets/images/logo-style-spy.svg":
      return SVGLogoStyleSpy;
    case "./assets/images/logo-speed-boost.svg":
      return SVGLogoSpeedBoost;
    case "./assets/images/logo-json-wizard.svg":
      return SVGLogoJSONWizard;
    case "./assets/images/logo-tab-master-pro.svg":
      return SVGLogoTabMasterPro;
    case "./assets/images/logo-viewport-buddy.svg":
      return SVGLogoViewportBuddy;
    case "./assets/images/logo-markup-notes.svg":
      return SVGLogoMarkupNotes;
    case "./assets/images/logo-grid-guides.svg":
      return SVGLogoGridGuides;
    case "./assets/images/logo-palette-picker.svg":
      return SVGLogoPalettePicker;
    case "./assets/images/logo-link-checker.svg":
      return SVGLogoLinkChecker;
    case "./assets/images/logo-dom-snapshot.svg":
      return SVGLogoDomSnapshot;
    case "./assets/images/logo-console-plus.svg":
      return SVGlogoConsolePlus;

    default:
      return SVGLogoDevlens;
  }
}

export default function ExtensionCard({
  description,
  isActive,
  logo,
  name,
  onRemoveClick,
  onActiveChange,
}: ExtensionItem & { onRemoveClick: () => void; onActiveChange: () => void }) {
  const ExtensionSVG = getExtensionSVG(logo);
  return (
    <Card className="py-4 justify-between">
      <CardHeader className="grid grid-cols-[4em_1fr] px-4">
        <ExtensionSVG />
        <div className="flex flex-col gap-2">
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-between px-4">
        <Button
          onClick={onRemoveClick}
          className="rounded-3xl hover:bg-custom-red-500 bg-background border text-foreground hover:text-background ring-offset-2 ring-offset-card focus:border-none focus:dark:bg-custom-neutral-600 focus:bg-custom-neutral-100"
        >
          Remove
        </Button>
        <Switch
          checked={isActive}
          onClick={onActiveChange}
          className="cursor-pointer data-[state=checked]:bg-custom-red-400 *:dark:data-[state=checked]:bg-foreground ring-offset-2 ring-offset-card hover:data-[state=checked]:bg-custom-red-700 focus:border-none"
        />
      </CardContent>
    </Card>
  );
}
