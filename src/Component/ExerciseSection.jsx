import React from 'react';
import styles from "../Component/From.module.css"

export default function ExerciseSection({ formData, handleSelectChange }){
    return(
  <div className={styles.section}>
    <h3 className={styles.sectionTitle}>Exercise & Physical Activity</h3>
    <hr className={styles.divider} />

    <div className={styles.formGroup}>
      <div className={styles.formField}>
        <label htmlFor="moderate_cardio" className={styles.label}>
          How often do you perform moderate-intensity cardio?
        </label>
        <select
          id="moderate_cardio"
          className={styles.select}
          value={formData.moderate_cardio || ""}
          onChange={(e) => handleSelectChange("moderate_cardio", e.target.value)}
        >
          <option>Select</option>
          <option value="0">150+ min per week</option>
          <option value="1">75–149 min per week</option>
          <option value="2">Less than 75 min per week</option>
          <option value="3">Never</option>
        </select>
      </div>

      <div className={styles.formField}>
        <label htmlFor="vigorous_cardio" className={styles.label}>
          How often do you perform vigorous-intensity cardio?
        </label>
        <select
          id="vigorous_cardio"
          className={styles.select}
          value={formData.vigorous_cardio || ""}
          onChange={(e) => handleSelectChange("vigorous_cardio", e.target.value)}
        >
          <option>Select</option>
          <option value="0">75+ min per week</option>
          <option value="1">30–74 min per week</option>
          <option value="2">Less than 30 min per week</option>
          <option value="3">Never</option>
        </select>
      </div>

      <div className={styles.formField}>
        <label htmlFor="strength_training" className={styles.label}>
          How often do you do strength training?
        </label>
        <select
          id="strength_training"
          className={styles.select}
          value={formData.strength_training || ""}
          onChange={(e) => handleSelectChange("strength_training", e.target.value)}
        >
          <option>Select</option>
          <option value="0">3+ times per week</option>
          <option value="1">1–2 times per week</option>
          <option value="2">Rarely/Never</option>
        </select>
      </div>

      <div className={styles.formField}>
        <label htmlFor="non_exercise" className={styles.label}>
          Do you engage in non-exercise activities like walking, taking stairs, or household chores?
        </label>
        <select
          id="non_exercise"
          className={styles.select}
          value={formData.non_exercise || ""}
          onChange={(e) => handleSelectChange("non_exercise", e.target.value)}
        >
          <option>Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
      </div>
    </div>
  </div>
    
)
}