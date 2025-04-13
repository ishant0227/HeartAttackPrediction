import styles from "../Component/From.module.css";

export default function Stress({ formData, handleSelectChange }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Mental & Physical Stress</h3>
      <hr className={styles.divider} />

      <div className={styles.formGroup}>
        {/* Mental Stress */}
        <h4 className={styles.subTitle}>Mental Stress</h4>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label className={styles.label}>Do you often feel tense, worried, or anxious during your day?</label>
            <select
              value={formData.mental_anxious || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("mental_anxious", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>Sometimes</option>
              <option>No</option>
            </select>
          </div>

          <div className={styles.formField}>
            <label className={styles.label}>In the last 6 months, have you felt stressed due to family, job, or financial problems?</label>
            <select
              value={formData.mental_family_stress || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("mental_family_stress", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label className={styles.label}>Do you feel emotionally tired or mentally exhausted often?</label>
            <select
              value={formData.mental_exhausted || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("mental_exhausted", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>Sometimes</option>
              <option>No</option>
            </select>
          </div>

          <div className={styles.formField}>
            <label className={styles.label}>How often do you feel angry or frustrated without any strong reason?</label>
            <select
              value={formData.mental_anger || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("mental_anger", e.target.value)}
            >
              <option>Select</option>
              <option>Often</option>
              <option>Sometimes</option>
              <option>Rarely</option>
              <option>Never</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label className={styles.label}>Are you able to sleep peacefully at night for at least 6–8 hours?</label>
            <select
              value={formData.mental_sleep || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("mental_sleep", e.target.value)}
            >
              <option>Select</option>
              <option>Always</option>
              <option>Sometimes</option>
              <option>Never</option>
            </select>
          </div>

          <div className={styles.formField}>
            <label className={styles.label}>Do you find it hard to relax even during holidays or weekends?</label>
            <select
              value={formData.mental_relax || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("mental_relax", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className={styles.formField}>
            <label className={styles.label}>
            On average, how quickly do you fall asleep after lying in bed?
              </label>
            <select
              value={formData.fall_asleep || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("fall_asleep", e.target.value)}
            >
              <option>Select</option>
              <option>Less than 5 minutes</option>
              <option> 5–15 minutes</option>
              <option>15–30 minutes</option>
              <option>More than 30 minutes</option>
            </select>
          </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label className={styles.label}>Have you lost interest in hobbies or activities you used to enjoy?</label>
            <select
              value={formData.mental_interest_loss || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("mental_interest_loss", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className={styles.formField}>
            <label className={styles.label}>Has any major stressful event happened in your life recently?</label>
            <select
              value={formData.mental_major_event || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("mental_major_event", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label className={styles.label}>Do you often feel hopeless or like nothing will get better?</label>
            <select
              value={formData.mental_hopeless || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("mental_hopeless", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className={styles.formField}>
            <label className={styles.label}>Do you frequently suffer from headaches or body pain due to stress?</label>
            <select
              value={formData.mental_bodypain || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("mental_bodypain", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>Sometimes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* Physical Stress */}
        <h4 className={styles.subTitle}>Physical Stress</h4>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label className={styles.label}>Do you do any heavy physical work?</label>
            <select
              value={formData.physical_heavy_work || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("physical_heavy_work", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>Sometimes</option>
              <option>No</option>
            </select>
          </div>

          <div className={styles.formField}>
            <label className={styles.label}>Do you feel physically tired even with normal daily work?</label>
            <select
              value={formData.physical_tired || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("physical_tired", e.target.value)}
            >
              <option>Select</option>
              <option>Often</option>
              <option>Sometimes</option>
              <option>Rarely</option>
              <option>Never</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label className={styles.label}>Do you get enough rest or breaks during your daily routine?</label>
            <select
              value={formData.physical_rest || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("physical_rest", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className={styles.formField}>
            <label className={styles.label}>Do you regularly sleep less than 6 hours a night?</label>
            <select
              value={formData.physical_less_sleep || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("physical_less_sleep", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label className={styles.label}>Have you experienced body pain, fatigue, or breathlessness recently?</label>
            <select
              value={formData.physical_pain_breath || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("physical_pain_breath", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className={styles.formField}>
            <label className={styles.label}>How often do you feel too tired to work or move around?</label>
            <select
              value={formData.physical_lazy || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("physical_lazy", e.target.value)}
            >
              <option>Select</option>
              <option>Often</option>
              <option>Sometimes</option>
              <option>Rarely</option>
              <option>Never</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label className={styles.label}>Have you continued working even when feeling physically unwell?</label>
            <select
              value={formData.physical_continue_work || ""}
              className={styles.select}
              onChange={(e) => handleSelectChange("physical_continue_work", e.target.value)}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
