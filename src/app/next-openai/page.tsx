import OpenAINavBar from "@/components/openai/OpenAINavBar/OpenAINavBar";
import { Link } from "lucide-react";
import React from "react";

const links = [
  { href: "/next-openai/clients", label: "client" },
  { href: "/next-openai/drinks", label: "drinks" },
  { href: "/next-openai/prisma-example", label: "prisma" },
  { href: "/next-openai/tasks", label: "tasks" },
];

export default function OpenAiPage() {
  return <OpenAINavBar />;
}
