import styles from "../Component/From.module.css"
export default function LifestyleSection({ formData, handleSelectChange, handleInputChange }){
    return(
  <div className={styles.section}>
    <h3 className={styles.sectionTitle}>Lifestyle & Habits</h3>
    <hr className={styles.divider} />

    <div className={styles.formGroup}>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="work_hours" className={styles.label}>
            How many hours do you work per day?
          </label>
          <input
            id="work_hours"
            name="work_hours"
            type="number"
            min="0"
            max="24"
            value={formData.work_hours || ""}
            placeholder="Hours"
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="sleep" className={styles.label}>
            Average hours of sleep at night?
          </label>
          <input
            id="sleep"
            name="sleep"
            type="number"
            min="0"
            max="24"
            value={formData.sleep || ""}
            placeholder="Hours"
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="smoke" className={styles.label}>
            Do you smoke?
          </label>
          <select
            id="smoke"
            value={formData.smoke || ""}
            className={styles.select}
            onChange={(e) => handleSelectChange("smoke", e.target.value)}
          >
            <option>Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.smoke === "yes" && (
          <div className={styles.formField}>
            <label htmlFor="smoke_consume" className={styles.label}>
              How many cigarettes per day?
            </label>
            <input
              id="smoke_consume"
              name="smoke_consume"
              type="number"
              value={formData.smoke_consume || ""}
              placeholder="Enter number"
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
        )}
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="alcohol" className={styles.label}>
            Do you consume alcohol?
          </label>
          <select
            id="alcohol"
            value={formData.alcohol || ""}
            className={styles.select}
            onChange={(e) => handleSelectChange("alcohol", e.target.value)}
          >
            <option>Select</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="occasionally">Occasionally</option>
            <option value="never">Never</option>
          </select>
        </div>
      </div>
    </div>
  </div>

)
}