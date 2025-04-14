import { useEffect, useState } from "react"
import {addLifestyle} from "../Lifestyle"
import {useNavigate} from "react-router-dom"
import styles from "../Component/From.module.css"
import Stress from "../Component/Stress"
import Diet from "../Component/Diet"
import ExerciseSection from "../Component/ExerciseSection"
import LifestyleSection from "../Component/LifestyleSection"

export default function Form() {
  const [currentSection, setCurrentSection] = useState(0)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    diet_preference: "vegetarian",
    weight:"",
    height:"",
    bmi:""
  });
 
  const [isSubmitting, setIsSubmitting] = useState(false);


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
    { id: "Stress", title: "Mental & Physical Stress" },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (currentSection < sections.length - 1) {
      nextSection();
    } else {
      try {
        setIsSubmitting(true); // show loading spinner / disable button
  
        const resp = await addLifestyle(formData);
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
        navigate("/~thank");
      } catch (error) {
        console.error("Form not submitted:", error);
        alert("Form not submitted!!! Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  

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
                    <label htmlFor="name" className={styles.label}>
                        Enter Your Full Name:
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your Full Name"
                        onChange={handleInputChange}
                        className={styles.input}
                        required
                      />
                      </div>
                      <div className={styles.formField}>
                      <label htmlFor="email" className={styles.label}>
                        Enter Your Email Address:
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
                        onChange={handleInputChange}
                        className={styles.input}
                        required
                      />
                      </div>
                      </div>

                      <div className={styles.formField}>
                      <label htmlFor="email" className={styles.label}>
                        Enter Your Profession?
                      </label>
                      <input
                        id="profession"
                        name="profession"
                        type="text"
                        placeholder="Enter your Profession"
                        onChange={handleInputChange}
                        className={styles.input}
                        required
                      />
                      </div>
                      

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
                        What is your weight ? (in kgs only)
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
                        What is your Height? (in cm only)
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
                        Your BMI is?(Body Mass Index)
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
                <div className={styles.formGroup}>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                    <Stress
                    formData={formData}
                    handleSelectChange={handleSelectChange}
                    handleInputChange={handleInputChange}
                    />
                    </div>
                    </div>
                  </div>
                </div>
            )}

            {currentSection === 2 && (
              <div className={styles.section}>
                <div className={styles.formGroup}>
                  <div className={styles.formField}>
                  <Diet formData={formData}
                    handleSelectChange={handleSelectChange}
                    handleInputChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentSection === 3 && (
              <div className={styles.section}>
                <div className={styles.formGroup}>
                  <div className={styles.formField}>
                  <ExerciseSection
                  formData={formData}
                  handleSelectChange={handleSelectChange}
                  />
                  </div>
                </div>
              </div>
            )}

            {currentSection === 4 && (
              <div className={styles.section}>       
                <div className={styles.formGroup}>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                    <LifestyleSection
                    formData={formData}
                    handleSelectChange={handleSelectChange}
                    handleInputChange={handleInputChange}
                    />
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

              <button
  type="button"
  className={`${styles.button} ${styles.buttonSubmit}`}
  onClick={handleSubmit}
  disabled={isSubmitting} // prevent double submits
>
  {isSubmitting
    ? "Submitting..."
    : currentSection < sections.length - 1
    ? "Next"
    : "Submit"}
</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
