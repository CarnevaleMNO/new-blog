import { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-12 mb-12 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
