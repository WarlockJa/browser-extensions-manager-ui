interface ExtensionItem {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

type FilterStates = "all" | "active" | "inactive";
