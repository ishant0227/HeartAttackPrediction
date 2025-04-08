import { useEffect, useState } from "react"
import styles from "../Component/From.module.css"
import axios from 'axios'

import {addLifestyle} from "../Lifestyle"

export default function HealthAssessmentForm() {
  const [currentSection, setCurrentSection] = useState(0)
  const [formData, setFormData] = useState({
    diet_preference: "vegetarian",
    weight:"",
    height:"",
    bmi:""
  });

  useEffect(()=>{
    const h = parseFloat(formData.height);
    const w = parseFloat(formData.weight)
    if(h>0 && w>0){
      const m = h/100;
      const bmivalue =w/(m*m);
      setFormData((prev)=>({...prev,bmi:bmivalue.toFixed(2),}));
    }

  },[formData.height, formData.weight]);



  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const sections = [
    { id: "basic", title: "Basic Information" },
    { id: "diet", title: "Diet & Nutrition" },
    { id: "exercise", title: "Exercise & Physical Activity" },
    { id: "lifestyle", title: "Lifestyle & Habits" },
  ]

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (currentSection < sections.length - 1){
        nextSection();
    }else{
      try{
      const resp = await addLifestyle(formData);
    console.log("Form submitted:", formData)
    alert("Form submitted successfully!")
  }catch(error){
    console.log('From not submitted',error);
    alert("Form not submitted!!!",error)
  }
}
}

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Health Assessment Questionnaire</h2>
          <p className={styles.cardDescription}>
            Please complete all sections to receive your personalized health insights
          </p>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.progressNav}>
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`${styles.progressStep} ${currentSection === index ? styles.activeStep : ""}`}
                onClick={() => setCurrentSection(index)}
              >
                <div className={styles.stepIndicator}>
                  <div className={`${styles.stepNumber} ${currentSection >= index ? styles.completedStep : ""}`}>
                    {index + 1}
                  </div>
                </div>
                <span className={styles.stepTitle}>{section.title}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {currentSection === 0 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Basic Information</h3>
                <hr className={styles.divider} />

                <div className={styles.formGroup}>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="age" className={styles.label}>
                        What is your age?
                      </label>
                      <input
                        id="age"
                        name="age"
                        type="number"
                        placeholder="Enter your age"
                        onChange={handleInputChange}
                        className={styles.input}
                        required
                      />
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="weight" className={styles.label}>
                        What is your weight ?(in kgs)
                      </label>
                      <input
                        id="weigth"
                        name="weight"
                        type="number"
                        placeholder="Enter in kg"
                        onChange={handleInputChange}
                       className={styles.input}
                        required
                      />
                    </div>
                    </div>

                    <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="height" className={styles.label}>
                        What is your Height?(in cm)
                      </label>
                      <input
                        id="height"
                        name="height"
                        type="number"
                        placeholder="Enter your height in cm"
                        onChange={handleInputChange}
                        className={styles.input}
                        required
                      />
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="bmi" className={styles.label}>
                        What is your BMI?(Body Mass Index)
                      </label>
                      <input
                        id="bmi"
                        name="bmi"
                        type="number"
                        value={formData.bmi}
                        step="0.01"
                        placeholder="Enter your BMI"
                        readOnly
                        disabled
                        className={styles.input}
                      />
                    </div>
                  </div>

                </div>
              </div>
            )}

            {currentSection === 1 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Diet & Nutrition</h3>
                <hr className={styles.divider} />

                <div className={styles.formGroup}>
                  <div className={styles.formField}>
                    <label htmlFor="diet_preference" className={styles.label}>
                      What is your dietary preference?
                    </label>
                    <select
                      id="diet_preference"
                      className={styles.select}
                      onChange={(e) => handleSelectChange("diet_preference", e.target.value)}
                      defaultValue="vegetarian"
                    >
                      <option value="vegetarian">Vegetarian</option>
                      <option value="non-vegetarian">Non-Vegetarian</option>
                    </select>
                  </div>

                  <h4 className={styles.subSectionTitle}>How often do you consume the following?</h4>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="fresh_fruits" className={styles.label}>
                        Fresh fruits
                      </label>
                      <select
                        id="fresh_fruits"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("fresh_fruits", e.target.value)}
                        defaultValue="weekly"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="leafy_greens" className={styles.label}>
                        Leafy green vegetables
                      </label>
                      <select
                        id="leafy_greens"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("leafy_greens", e.target.value)}
                        defaultValue="weekly"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="other_vegetables" className={styles.label}>
                        Other vegetables (carrots, bell pepper, etc.)
                      </label>
                      <select
                        id="other_vegetables"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("other_vegetables", e.target.value)}
                        defaultValue="weekly"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="whole_grains" className={styles.label}>
                        Whole grains (whole wheat)
                      </label>
                      <select
                        id="whole_grains"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("whole_grains", e.target.value)}
                        defaultValue="weekly"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="legumes" className={styles.label}>
                        Legumes and beans (lentils, chickpeas, kidney beans)
                      </label>
                      <select
                        id="legumes"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("legumes", e.target.value)}
                        defaultValue="weekly"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="nuts_seeds" className={styles.label}>
                        Nuts and seeds (almonds, walnuts, flaxseeds)
                      </label>
                      <select
                        id="nuts_seeds"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("nuts_seeds", e.target.value)}
                        defaultValue="weekly"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="dairy" className={styles.label}>
                        Dairy products (milk, yogurt, cheese)
                      </label>
                      <select
                        id="dairy"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("dairy", e.target.value)}
                        defaultValue="weekly"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="healthy_oils" className={styles.label}>
                        Healthy oils (olive oil, mustard oil, coconut oil)
                      </label>
                      <select
                        id="healthy_oils"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("healthy_oils", e.target.value)}
                        defaultValue="weekly"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                  </div>

                  <h4 className={styles.subSectionTitle}>How often do you consume unhealthy vegetarian foods?</h4>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="sugary_foods" className={styles.label}>
                        Sugary foods (sweets, cakes, sugary drinks)
                      </label>
                      <select
                        id="sugary_foods"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("sugary_foods", e.target.value)}
                        defaultValue="weekly"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="processed_foods" className={styles.label}>
                        Processed foods (instant noodles, packaged chips, biscuits)
                      </label>
                      <select
                        id="processed_foods"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("processed_foods", e.target.value)}
                        defaultValue="weekly"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="high_salt_foods" className={styles.label}>
                        High-salt foods (pickles, papad, canned foods)
                      </label>
                      <select
                        id="high_salt_foods"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("high_salt_foods", e.target.value)}
                        defaultValue="weekly"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                  </div>

                  {formData.diet_preference === "non-vegetarian" && (
                    <>
                      <h4 className={styles.subSectionTitle}>Non-Vegetarian Diet Questions</h4>

                      <div className={styles.formRow}>
                        <div className={styles.formField}>
                          <label htmlFor="eggs" className={styles.label}>
                            Eggs
                          </label>
                          <select
                            id="eggs"
                            className={styles.select}
                            onChange={(e) => handleSelectChange("eggs", e.target.value)}
                            defaultValue="weekly"
                          >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="rarely">Rarely</option>
                            <option value="never">Never</option>
                          </select>
                        </div>

                        <div className={styles.formField}>
                          <label htmlFor="chicken" className={styles.label}>
                            Chicken (grilled/boiled)
                          </label>
                          <select
                            id="chicken"
                            className={styles.select}
                            onChange={(e) => handleSelectChange("chicken", e.target.value)}
                            defaultValue="weekly"
                          >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="rarely">Rarely</option>
                            <option value="never">Never</option>
                          </select>
                        </div>
                      </div>

                      <div className={styles.formRow}>
                        <div className={styles.formField}>
                          <label htmlFor="fish" className={styles.label}>
                            Fish (salmon, tuna, mackerel, etc.)
                          </label>
                          <select
                            id="fish"
                            className={styles.select}
                            onChange={(e) => handleSelectChange("fish", e.target.value)}
                            defaultValue="weekly"
                          >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="rarely">Rarely</option>
                            <option value="never">Never</option>
                          </select>
                        </div>
                      </div>

                      <h4 className={styles.subSectionTitle}>How often do you consume unhealthy non-veg foods?</h4>

                      <div className={styles.formRow}>
                        <div className={styles.formField}>
                          <label htmlFor="fried_meat" className={styles.label}>
                            Deep-fried Meat
                          </label>
                          <select
                            id="fried_meat"
                            className={styles.select}
                            onChange={(e) => handleSelectChange("fried_meat", e.target.value)}
                            defaultValue="weekly"
                          >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="rarely">Rarely</option>
                            <option value="never">Never</option>
                          </select>
                        </div>
                      </div>

                      <div className={styles.formRow}>
                        <div className={styles.formField}>
                          <label htmlFor="processed_meat" className={styles.label}>
                            Processed meat
                          </label>
                          <select
                            id="processed_meat"
                            className={styles.select}
                            onChange={(e) => handleSelectChange("processed_meat", e.target.value)}
                            defaultValue="weekly"
                          >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="rarely">Rarely</option>
                            <option value="never">Never</option>
                          </select>
                        </div>

                        <div className={styles.formField}>
                          <label htmlFor="cream_dishes" className={styles.label}>
                            Heavy cream-based dishes (butter chicken etc.)
                          </label>
                          <select
                            id="cream_dishes"
                            className={styles.select}
                            onChange={(e) => handleSelectChange("cream_dishes", e.target.value)}
                            defaultValue="weekly"
                          >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="rarely">Rarely</option>
                            <option value="never">Never</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  <h4 className={styles.subSectionTitle}>Cooking & Eating Habits</h4>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="food_preparation" className={styles.label}>
                        How is your food usually prepared?
                      </label>
                      <select
                        id="food_preparation"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("food_preparation", e.target.value)}
                        defaultValue="grilled"
                      >

                        <option value="Balanced_diet">Balanced of all</option>
                        <option value="boiled">Mostly boiled/steamed</option>
                        <option value="grilled">Mostly grilled/roasted</option>
                        <option value="fried">Mostly fried/heavy oil-based</option>

                      </select>
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="eating_out" className={styles.label}>
                        How often do you eat outside (restaurant/fast food)?
                      </label>
                      <select
                        id="eating_out"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("eating_out", e.target.value)}
                        defaultValue="once_week"
                      >
                        <option value="more_than_4">More than 4 times a week</option>
                        <option value="2_3_week">2-3 times a week</option>
                        <option value="once_week">Once a week</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="extra_salt" className={styles.label}>
                        Do you add extra salt to your meals?
                      </label>
                      <select
                        id="extra_salt"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("extra_salt", e.target.value)}
                        defaultValue="occasionally"
                      >
                        <option value="regularly">Yes, regularly</option>
                        <option value="occasionally">Occasionally</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentSection === 2 && (
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
                      onChange={(e) => handleSelectChange("moderate_cardio", e.target.value)}
                      defaultValue="less_than_75"
                    >
                      <option value="150_plus">150+ min per week</option>
                      <option value="75_149">75–149 min per week</option>
                      <option value="less_than_75">Less than 75 min per week</option>
                      <option value="never">Never</option>
                    </select>
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="vigorous_cardio" className={styles.label}>
                      How often do you perform vigorous-intensity cardio?
                    </label>
                    <select
                      id="vigorous_cardio"
                      className={styles.select}
                      onChange={(e) => handleSelectChange("vigorous_cardio", e.target.value)}
                      defaultValue="less_than_30"
                    >
                      <option value="75_plus">75+ min per week</option>
                      <option value="30_74">30–74 min per week</option>
                      <option value="less_than_30">Less than 30 min per week</option>
                      <option value="never">Never</option>
                    </select>
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="strength_training" className={styles.label}>
                      How often do you do strength training?
                    </label>
                    <select
                      id="strength_training"
                      className={styles.select}
                      onChange={(e) => handleSelectChange("strength_training", e.target.value)}
                      defaultValue="rarely"
                    >
                      <option value="3_plus">3+ times per week</option>
                      <option value="1_2">1–2 times per week</option>
                      <option value="rarely">Rarely/Never</option>
                    </select>
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="non_exercise" className={styles.label}>
                    Do you engage in non-exercise activities like: (walking,taking stairs,household chores)
                    </label>
                    <select
                      id="non_exercise"
                      className={styles.select}
                      onChange={(e) => handleSelectChange("non_exercise", e.target.value)}
                      defaultValue="yes"
                    >
                      <option value="yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {currentSection === 3 && (
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
                        placeholder="Hours"
                        onChange={handleInputChange}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="sleep" className={styles.label}>
                        How many hours do you sleep?(at night)
                      </label>
                      <input
                        id="sleep"
                        name="sleep"
                        type="number"
                        min="0"
                        max="24"
                        placeholder="Hours"
                        onChange={handleInputChange}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    
                    <div className={styles.formField}>
                      <label htmlFor="smoke" className={styles.label}>
                        How much do you smoke in a day?
                      </label>
                      <select
                        id="smoke"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("smoke", e.target.value)}
                        defaultValue="no"
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    {formData.smoke==="yes" && (
                      <>
                      <div className={styles.formField}>
                      <label htmlFor="smoke_consume" className={styles.label}>
                        How much do you smoke in a day?
                      </label>
                      <input
                        id="smoke_consume"
                        name="smoke_consume"
                        type="number"
                        placeholder="Enter the number of consumptions"
                        onChange={handleInputChange}
                        className={styles.input}
                      />
                      
                    </div>
                      </>
                    )}

                    </div>


                    <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="alcohol" className={styles.label}>
                        Do you consume alcohol?
                      </label>
                      <select
                        id="alcohol"
                        className={styles.select}
                        onChange={(e) => handleSelectChange("alcohol", e.target.value)}
                        defaultValue="never"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="occasionally">Occasionally</option>
                        <option value="never">Never</option>

                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.formNavigation}>
              <button
                type="button"
                className={`${styles.button} ${styles.buttonOutline}`}
                onClick={prevSection}
                disabled={currentSection === 0}
              >
                Previous
              </button>

              <button type="button" className={`${styles.button} ${styles.buttonSubmit}`} onClick={handleSubmit}>
  {currentSection < sections.length - 1 ? "Next" : "Submit"}
</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
