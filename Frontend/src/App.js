import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [jsonInput, setJsonInput] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Handle form submission and call backend API
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/bfhl', JSON.parse(jsonInput));
            setResponseData(response.data);
        } catch (error) {
            console.error('Error submitting data', error);
        }
    };

    // Handle selection from the dropdown
    const handleOptionChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedOptions(value);
    };

    return (
        <div className="App">
            <h1>BFHL Dev Challenge</h1>
            <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder="Enter JSON input"
            />
            <button onClick={handleSubmit}>Submit</button>

            {responseData && (
                <>
                    <select multiple onChange={handleOptionChange}>
                        <option value="numbers">Numbers</option>
                        <option value="alphabets">Alphabets</option>
                        <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
                    </select>

                    <div>
                        {selectedOptions.includes("numbers") && (
                            <p>Numbers: {responseData.numbers.join(", ")}</p>
                        )}
                        {selectedOptions.includes("alphabets") && (
                            <p>Alphabets: {responseData.alphabets.join(", ")}</p>
                        )}
                        {selectedOptions.includes("highest_lowercase_alphabet") && (
                            <p>Highest Lowercase Alphabet: {responseData.highest_lowercase_alphabet}</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
