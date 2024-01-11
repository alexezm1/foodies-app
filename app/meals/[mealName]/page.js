import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealName);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealNamePage({ params }) {
  const meal = getMeal(params.mealName);
  if (!meal) {
    notFound();
  }
  const { title, image, summary, instructions, creator, creator_email } = meal;

  const instructionsFormatted = instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} alt={summary} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: `${instructionsFormatted}`,
          }}
        ></p>
      </main>
    </>
  );
}
