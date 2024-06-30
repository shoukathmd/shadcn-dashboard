import OpenAINavBar from "@/components/openai/OpenAINavBar/OpenAINavBar";
import React from "react";

const DrinkLayout = ({ children }: any) => {
  return (
    <div>
      <OpenAINavBar />
      <div className="max-w-xl mt-16 ml-16">
        <div className="mockup-code mb-8">
          <pre data-prefix="$">
            <code>npx create-next-app@latest nextjs-tutorial</code>
          </pre>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DrinkLayout;
