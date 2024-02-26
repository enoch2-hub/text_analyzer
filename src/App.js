import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAnalyzeClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/analyze', { text });
      setAnalysisResult(response.data.analysisResult);
    } catch (error) {
      console.error('Error analyzing text:', error.message);
    }
  };


  return (
    <div className="container">
      {/* <h1>Text Analyzer</h1> */}
      <textarea rows="4" value={text} onChange={handleTextChange} />
      <br />
      <button onClick={handleAnalyzeClick}>Analyze Text</button>
      <br />
      {analysisResult && (
        <div className='analysis-container'>
          {/* <h2>Analysis Result:</h2>
          <p>Number of characters (with spaces): {analysisResult.charactersWithSpaces}</p>
          <p>Number of characters (without spaces): {analysisResult.charactersWithoutSpaces}</p>
          <p>Number of words: {analysisResult.wordsCount}</p>
          <p>Number of sentences: {analysisResult.sentencesCount}</p>
          <p>Number of syllables: {analysisResult.syllablesCount}</p> */}


          <table>
            <thead>
              <tr>
                <th>Analysis Type</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Number of characters (with spaces)</td>
                <td>{analysisResult.charactersWithSpaces}</td>
              </tr>
              <tr>
                <td>Number of characters (without spaces)</td>
                <td>{analysisResult.charactersWithoutSpaces}</td>
              </tr>
              <tr>
                <td>Number of words</td>
                <td>{analysisResult.wordsCount}</td>
              </tr>
              <tr>
                <td>Number of sentences</td>
                <td>{analysisResult.sentencesCount}</td>
              </tr>
              <tr>
                <td>Number of syllables</td>
                <td>{analysisResult.syllablesCount}</td>
              </tr>
              {/* Add other analysis results as needed */}
            </tbody>
          </table>

          </div>

      )}
    </div>
  );
}

export default App;
