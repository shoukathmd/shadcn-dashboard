import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DrinksList({ drinks }: any) {
  return (
    <div>
      <ul>
        {drinks.map((drink: any) => {
          return (
            <li key={drink.idDrink}>
              <Link
                href={`/drinks/${drink.idDrink}`}
                className="text-xl font-medium"
              >
                <div>
                  <Image
                    src={drink.strDrinkThumb}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw"
                    alt={drink.strDrink}
                    className="rounded-md object-cover"
                  />
                </div>
                {drink.strDrink}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
