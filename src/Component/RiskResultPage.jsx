import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './RiskResultPage.module.css';

const RiskResult = ({ recommendations }) => {
  const [annScore, setAnnScore] = useState(0);
  const [randomForestScore, setRandomForestScore] = useState(0);
  const [riskScore, setRiskScore] = useState(0);
  const [showLipidProfile, setShowLipidProfile] = useState(false);



const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
  const fetchRiskScores = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get_risk_score');
      const { annScore, randomForestScore, riskScore } = response.data;
      console.log(response.data)
      setAnnScore(annScore);
      setRandomForestScore(randomForestScore);
      setRiskScore(riskScore);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching risk scores:', error);
      setError('Failed to fetch risk scores');
      setLoading(false);
    }
  };

  fetchRiskScores();
}, []);


  const handleLipidFormToggle = () => {
    setShowLipidProfile(!showLipidProfile);
  };

  const getRiskLevel = () => {
    if (riskScore >= 66) return 'High';
    if (riskScore >= 33) return 'Moderate';
    return 'Low';
  };

  const getProgressValue = () => riskScore;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Heart Attack Risk Assessment Result</h1>

      <div className={styles.result}>
        <h2 className={styles.riskTitle}>Risk Level: {getRiskLevel()}</h2>
        <div className={styles.riskDescription}>
          {getRiskLevel() === 'High' ? (
            <p>Your risk is high. Please consider following medical advice.</p>
          ) : getRiskLevel() === 'Moderate' ? (
            <p>Your risk is moderate. Monitor your health regularly.</p>
          ) : (
            <p>Your risk is low. Keep up the healthy lifestyle!</p>
          )}
        </div>

        {/* Progress Bar */}
        <div className={styles.progressWrapper}>
          <span className={styles.progressLabel}>Low</span>
          <div className={styles.customProgressBar}>
            <div
              className={styles.filledBar}
              style={{
                width: `${getProgressValue()}%`,
                backgroundColor:
                  getProgressValue() >= 66
                    ? '#f44336'
                    : getProgressValue() >= 33
                    ? '#ff9800'
                    : '#4caf50',
              }}
            ></div>
          </div>
          <span className={styles.progressLabel}>High</span>
        </div>

        <div className={styles.riskPercentage}>
          <p>Total Risk Percentage: {riskScore}%</p>
        </div>
      </div>

      <div className={styles.recommendations}>
        <h3>Recommendations:</h3>
        <ul>
          {recommendations.map((rec, index) => (
            <li key={index} className={styles.recommendationItem}>
              {rec}
            </li>
          ))}
        </ul>
      </div>

      {getRiskLevel() === 'High' && (
        <div className={styles.lipidProfile}>
          <button className={styles.toggleButton} onClick={handleLipidFormToggle}>
            {showLipidProfile ? 'Hide Lipid Profile Form' : 'Show Lipid Profile Form'}
          </button>

          {showLipidProfile && (
            <form className={styles.lipidForm}>
              <h4>Lipid Profile Form</h4>
              {/* Lipid Profile form fields go here */}
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default RiskResult;
