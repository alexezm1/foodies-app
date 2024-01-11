"use client";

import { shareMeal } from "@/lib/actions";
import ImagePicker from "@/ui/meals/ImagePicker";
import MealButtonSubmit from "@/ui/meals/MealButtonSubmit";
import { useFormState } from "react-dom";
import styles from "./page.module.css";

export default function ShareMealPage() {
  const [state, dispatch] = useFormState(shareMeal, { message: null });
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form action={dispatch} className={styles.form}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
            ></textarea>
          </p>
          <ImagePicker label={"Image"} name={"image"} />
          {state.message && <p>{state.message}</p>}
          <p className={styles.actions}>
            <MealButtonSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
