import React, { useState } from "react";
import axios from "axios";

const TextAnalyzer = () => {
  const [inputText, setInputText] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const analyzeText = () => {
    axios
      .post("http://localhost:5000/analyze-text", { text: inputText })
      .then((response) => {
        setAnalysisResult(response.data.analysisResult);
      })
      .catch((error) => {
        console.error("Error analyzing text:", error);
      });
  };

  return (
    <div>
      <h1>Text Analyzer App</h1>
      <textarea
        placeholder="Enter text to analyze..."
        value={inputText}
        onChange={handleTextChange}
      />
      <button onClick={analyzeText}>Analyze Text</button>
      {analysisResult && (
        <div>
          <h2>Analysis Result:</h2>
          <p>{analysisResult}</p>
        </div>
      )}
    </div>
  );
};

export default TextAnalyzer;
