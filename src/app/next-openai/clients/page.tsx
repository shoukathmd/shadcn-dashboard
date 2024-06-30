import OpenAINavBar from "@/components/openai/OpenAINavBar/OpenAINavBar";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await response.json();
  return data;
};

export default async function ClientPage() {
  await fetchDrinks();
  return (
    <div>
      <OpenAINavBar />
      <h1>Successfully loaded</h1>
    </div>
  );
}
