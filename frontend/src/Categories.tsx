import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "./config";
import { get } from "./Fetchers";
import { Category } from "./types/types";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    const categories = await get<Category[]>(`${config.apiUrl}/categories/`);
    console.log(categories);

    setCategories(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div>
          <nav>
            <h2>{category.name}</h2>
            <ul>
              <li>Edit</li>
              <li>Delete</li>
            </ul>
          </nav>
          <ol>
            {category.questions.map((question) => (
              <li>
                <Link to={`/questions/${question.id}`}>{question.title}</Link>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default Categories;
