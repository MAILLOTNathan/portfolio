import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  /** Small label displayed above the title. */
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Shared section heading so every block of the page looks the same. */
export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {lead && (
        <p className={cn("section-lead", align === "center" && "mx-auto")}>
          {lead}
        </p>
      )}
    </div>
  );
}
