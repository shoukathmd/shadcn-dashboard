import React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};

export default function Card(props: CardProps) {
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        <p className="text-sm">{props.label}</p>
        <props.icon className="h-4 w-4 text-gray-400" />
      </section>
      <section className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">{props.amount}</p>
        <p className="text-sm text-gray-500">{props.description}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    ></div>
  );
}
