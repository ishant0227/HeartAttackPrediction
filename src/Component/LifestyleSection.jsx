import styles from "../Component/From.module.css"

export default function LifestyleSection({ formData, handleSelectChange, handleInputChange }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Habits & lifestyle</h3>
      <hr className={styles.divider} />

      <div className={styles.formGroup}>

      <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="late_night_screen" className={styles.label}>
            Do you watch screens (TV, mobile, OTT) till late night?
            </label>
            <select
              id="late_night_screen"
              value={formData.late_night_screen || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("late_night_screen", e.target.value)}
            >
              <option value="">Select</option>
              <option value="2">Yes</option>
              <option value="1">Sometime</option>
              <option value="0">No</option>
            </select>
          </div>

          
          <div className={styles.formField}>
            <label htmlFor="late_food" className={styles.label}>
            Do you usually eat heavy or junk food late at night?
            </label>
            <select
              id="late_food"
              value={formData.late_food || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("late_food", e.target.value)}
            >
              <option value="">Select</option>
              <option value="3">Often</option>
              <option value="2">Sometimes</option>
              <option value="1">Rarely</option>
              <option value="0">Never</option>
            </select>
          </div>
        </div>
        
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
              <option value="0">I don’t smoke</option>
              <option value="1">1–2</option>
              <option value="2">3–5</option>
              <option value="3">More than 5</option>
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
              <option value="0">Never</option>
              <option value="1">Occasionally</option>
              <option value="2">Daily</option>
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
              <option value="0">Never</option>
              <option value="1">Occasionally</option>
              <option value="2">Weekly</option>
              <option value="3">Daily</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
