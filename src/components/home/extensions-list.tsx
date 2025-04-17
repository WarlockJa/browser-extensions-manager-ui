"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import ExtensionCard from "./extension-card";
import { cn } from "@/lib/utils";

function getFilteredExtensions(
  extensionsData: ExtensionItem[],
  filter: FilterStates,
): ExtensionItem[] {
  switch (filter) {
    case "all":
      return extensionsData;

    case "active":
      return extensionsData.filter((item) => item.isActive);

    case "inactive":
      return extensionsData.filter((item) => !item.isActive);

    default:
      return extensionsData;
  }
}

function FilterButton({
  onClick,
  text,
  isActive,
}: {
  onClick: () => void;
  text: string;
  isActive: boolean;
}) {
  return (
    <Button
      className={cn(
        "ring-offset-gradient-start bg-background text-foreground focus:dark:bg-custom-neutral-600 focus:bg-custom-neutral-100 rounded-3xl p-5 text-xl ring-offset-2",
        isActive &&
          "bg-custom-red-500 text-background hover:bg-custom-red-700/90 focus:bg-custom-red-700/90 focus:dark:bg-custom-red-700/90",
      )}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default function ExtensionsList({
  initExtensionsData,
}: {
  initExtensionsData: ExtensionItem[];
}) {
  const [extensionsData, setExtensionsData] = useState(initExtensionsData);
  const [extensionsFilter, setExtensionsFilter] = useState<FilterStates>("all");

  const filteredExtensions = getFilteredExtensions(
    extensionsData,
    extensionsFilter,
  );
  return (
    <div>
      <div className="my-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h1 className="text-3xl font-bold">Extensions List</h1>
        <div className="flex gap-2">
          <FilterButton
            onClick={() => setExtensionsFilter("all")}
            text="All"
            isActive={extensionsFilter === "all"}
          />
          <FilterButton
            onClick={() => setExtensionsFilter("active")}
            text="Active"
            isActive={extensionsFilter === "active"}
          />
          <FilterButton
            onClick={() => setExtensionsFilter("inactive")}
            text="Inactive"
            isActive={extensionsFilter === "inactive"}
          />
        </div>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredExtensions.map((extension) => (
          <ExtensionCard
            key={extension.name}
            {...extension}
            onRemoveClick={() =>
              setExtensionsData((prev) =>
                prev.filter((item) => item.name !== extension.name),
              )
            }
            onActiveChange={() =>
              setExtensionsData((prev) =>
                prev.map((item) =>
                  item.name !== extension.name
                    ? item
                    : { ...item, isActive: !item.isActive },
                ),
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}
