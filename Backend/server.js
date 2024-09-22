const express = require('express');
const app = express();
app.use(express.json());

// POST Method to handle JSON input and file processing
app.post('/bfhl', (req, res) => {
    const { data, file_b64 } = req.body;

    // User details
    const user_id = "john_doe_17091999"; // Customize this for your use case
    const email = "john@xyz.com";
    const roll_number = "ABCD123";

    // Separate numbers and alphabets
    let numbers = data.filter(item => !isNaN(item));
    let alphabets = data.filter(item => isNaN(item));

    // Find the highest lowercase alphabet
    let lowerAlphabets = alphabets.filter(item => item === item.toLowerCase());
    let highestLowercase = lowerAlphabets.length > 0 ? [lowerAlphabets.sort().pop()] : [];

    // File validation (simple check)
    let file_valid = file_b64 ? true : false;
    let file_mime_type = file_valid ? 'image/png' : null; // Example MIME type
    let file_size_kb = file_valid ? 400 : null; // Example file size

    // Response object
    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase,
        file_valid,
        file_mime_type,
        file_size_kb
    });
});

// GET Method to return a hardcoded operation code
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
