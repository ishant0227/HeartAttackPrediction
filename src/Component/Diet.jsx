import styles from "../Component/From.module.css"
export default function Diet({formData, handleSelectChange}){
    return(
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
                              value={formData.diet_preference || ""}
                              className={styles.select}
                              onChange={(e) => handleSelectChange("diet_preference", e.target.value)}
                              
                            >
                              <option >Select</option>
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
                                value={formData.fresh_fruits || ""}
                                className={styles.select}
                                onChange={(e) => handleSelectChange("fresh_fruits", e.target.value)}
                                
                              >
                                <option >Select</option>
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
                                value={formData.leafy_greens || ""}
                                className={styles.select}
                                onChange={(e) => handleSelectChange("leafy_greens", e.target.value)}
                                 
                              >
                                <option >Select</option>
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
                                value={formData.other_vegetables || ""}
                                className={styles.select}
                                onChange={(e) => handleSelectChange("other_vegetables", e.target.value)}
                                
                              >
                                <option >Select</option>
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
                                value={formData.whole_grains || ""}
                                className={styles.select}
                                onChange={(e) => handleSelectChange("whole_grains", e.target.value)}
                                 
                              >
                                <option >Select</option>
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
                                value={formData.legumes || ""}
                                className={styles.select}
                                onChange={(e) => handleSelectChange("legumes", e.target.value)}
                                 
                              >
                                <option >Select</option>
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
                                value={formData.nuts_seeds || ""}
                                className={styles.select}
                                onChange={(e) => handleSelectChange("nuts_seeds", e.target.value)}
                                 
                              >
                                <option >Select</option>
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
                                value={formData.dairy || ""}
                                className={styles.select}
                                onChange={(e) => handleSelectChange("dairy", e.target.value)}
                                 
                              >
                                <option >Select</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="rarely">Rarely</option>
                                <option value="never">Never</option>
                              </select>
                            </div>
        
                            <div className={styles.formField}>
                              <label htmlFor="healthy_oils" className={styles.label}>
                                Healthy oils (Soyabean oil, Sunflower oil, coconut oil etc)
                                *NOT REUSED
                              </label>
                              <select
                                id="healthy_oils"
                                value={formData.healthy_oils || ""}
                                className={styles.select}
                                onChange={(e) => handleSelectChange("healthy_oils", e.target.value)}
                                 
                              >
                                <option >Select</option>
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
                                value={formData.sugary_foods || ""}
                                className={styles.select}
                                onChange={(e) => handleSelectChange("sugary_foods", e.target.value)}
                                 
                              >
                                <option >Select</option>
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
                                value={formData.processed_foods || ""}
                                className={styles.select}
                                onChange={(e) => handleSelectChange("processed_foods", e.target.value)}
                                 
                              >
                                <option >Select</option>
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
                                value={formData.high_salt_foods || ""}
                                className={styles.select}
                                onChange={(e) => handleSelectChange("high_salt_foods", e.target.value)}
                                 
                              >
                                <option >Select</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="rarely">Rarely</option>
                                <option value="never">Never</option>
                              </select>
                            </div>
                          </div>
                          
        
                          {formData?.diet_preference === "non-vegetarian" && (
                            <>
                              <h4 className={styles.subSectionTitle}>Non-Vegetarian Diet Questions</h4>
        
                              <div className={styles.formRow}>
                                <div className={styles.formField}>
                                  <label htmlFor="eggs" className={styles.label}>
                                    Eggs
                                  </label>
                                  <select
                                    id="eggs"
                                    value={formData.eggs || ""}
                                    className={styles.select}
                                    onChange={(e) => handleSelectChange("eggs", e.target.value)}
                                     
                                  >
                                    <option >Select</option>
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
                                    value={formData.chicken || ""}
                                    className={styles.select}
                                    onChange={(e) => handleSelectChange("chicken", e.target.value)}
                                     
                                  >
                                    <option >Select</option>
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
                                    value={formData.fish || ""}
                                    className={styles.select}
                                    onChange={(e) => handleSelectChange("fish", e.target.value)}
                                     
                                  >
                                    <option >Select</option>
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
                                    value={formData.fried_meat || ""}
                                    className={styles.select}
                                    onChange={(e) => handleSelectChange("fried_meat", e.target.value)}
                                     
                                  >
                                    <option >Select</option>
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
                                    value={formData.processed_meat || ""}
                                    className={styles.select}
                                    onChange={(e) => handleSelectChange("processed_meat", e.target.value)}
                                     
                                  >
                                    <option >Select</option>
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
                                    value={formData.cream_dishes || ""}
                                    className={styles.select}
                                    onChange={(e) => handleSelectChange("cream_dishes", e.target.value)}
                                     
                                  >
                                    <option >Select</option>
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="rarely">Rarely</option>
                                    <option value="never">Never</option>
                                  </select>
                                </div>
                              </div>
                            </>
                          )}
        
        <h4 className={styles.subSectionTitle}>Cooking & Eating Habits</h4><div className={styles.formRow}>
        <div className={styles.formField}>
            <label htmlFor="food_preparation" className={styles.label}>
                How is your food usually prepared?
            </label>
            <select
                id="food_preparation"
                value={formData.food_preparation || ""}
                className={styles.select}
                onChange={(e) => handleSelectChange("food_preparation", e.target.value)}

            >
                <option>Select</option>
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
                value={formData.eating_out || ""}
                className={styles.select}
                onChange={(e) => handleSelectChange("eating_out", e.target.value)}

            >
                <option>Select</option>
                <option value="more_than_4">More than 4 times a week</option>
                <option value="2_3_week">2-3 times a week</option>
                <option value="once_week">Once a week</option>
                <option value="once_month">Once a Month</option>
                <option value="never">Never</option>
            </select>
            </div>
            <div className={styles.formRow}>
            <div className={styles.formField}>
                <label htmlFor="extra_salt" className={styles.label}>
                    Do you add extra salt to your meals?
                </label>
                <select
                    id="extra_salt"
                    value={formData.extra_salt || ""}
                    className={styles.select}
                    onChange={(e) => handleSelectChange("extra_salt", e.target.value)}

                >
                    <option>Select</option>
                    <option value="regularly">Yes, regularly</option>
                    <option value="occasionally">Occasionally</option>
                    <option value="no">No</option>
                </select>
            </div>
        </div>
    </div>
</div>
</div>
    )
}