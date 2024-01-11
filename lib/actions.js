"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const isInvalidText = (text) => {
  return text.trim() === "" || !text;
};

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator_email: formData.get("email"),
    creator: formData.get("name"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  const savedMeal = await saveMeal(meal);
  revalidatePath("/meals", "layout");
  redirect(`/meals/${savedMeal.slug}`);
};
