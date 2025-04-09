import styles from "../Component/From.module.css"

export default function LifestyleSection({ formData, handleSelectChange, handleInputChange }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Habits</h3>
      <hr className={styles.divider} />

      <div className={styles.formGroup}>
        {/* Smoking */}
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="smoking_habit" className={styles.label}>
              Do you smoke cigarettes or bidi? If yes, how many per day?
            </label>
            <select
              id="smoking_habit"
              value={formData.smoking_habit || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("smoking_habit", e.target.value)}
            >
              <option value="">Select</option>
              <option value="none">I don’t smoke</option>
              <option value="1-2">1–2</option>
              <option value="3-5">3–5</option>
              <option value="more_than_5">More than 5</option>
            </select>
          </div>

          {/* Tobacco Chewing */}
          <div className={styles.formField}>
            <label htmlFor="tobacco" className={styles.label}>
              Do you chew tobacco (gutkha, khaini, paan with zarda, etc.)?
            </label>
            <select
              id="tobacco"
              value={formData.tobacco || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("tobacco", e.target.value)}
            >
              <option value="">Select</option>
              <option value="never">Never</option>
              <option value="occasionally">Occasionally</option>
              <option value="daily">Daily</option>
            </select>
          </div>
        </div>

        {/* Alcohol */}
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="alcohol" className={styles.label}>
              How often do you consume alcohol?
            </label>
            <select
              id="alcohol"
              value={formData.alcohol || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("alcohol", e.target.value)}
            >
              <option value="">Select</option>
              <option value="never">Never</option>
              <option value="occasionally">Occasionally</option>
              <option value="weekly">Weekly</option>
              <option value="daily">Daily</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
