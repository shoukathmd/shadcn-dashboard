import OpenAINavBar from "@/components/openai/OpenAINavBar/OpenAINavBar";
import React from "react";

export default function loading() {
  return (
    <div>
      <OpenAINavBar />
      <h1 className="loading text-3xl">loading....</h1>
    </div>
  );
}
