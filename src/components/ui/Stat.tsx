import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Heading } from "./Heading";
import { Text } from "./Text";

export type StatProps = {
  value: ReactNode;

  label: ReactNode;

  variant?: "plain" | "chip";
  align?: "center" | "left";

  fill?: boolean;
  className?: string;
};

export function Stat({
  value,
  label,
  variant = "plain",
  align,
  fill = true,
  className,
}: StatProps) {
  const centered =
    (align ?? (variant === "plain" ? "center" : "left")) === "center";

  if (variant === "chip") {
    return (
      <div
        className={cn(
          "flex flex-col justify-center rounded-chip border border-line-strong bg-surface-raised px-4 py-2.5",
          centered && "items-center text-center",
          className
        )}
      >
        <Heading as="span" size="quote">
          {value}
        </Heading>
        <Text as="span" size="sm">
          {label}
        </Text>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col justify-center",
        fill && "w-full",
        centered && "items-center text-center",
        className
      )}
    >
      <Text as="p" size="lg" weight="medium" className="lg:text-xl">
        {value}
      </Text>
      <Text as="p" size="sm" tone="subtle" className="mt-1 lg:text-base">
        {label}
      </Text>
    </div>
  );
}
