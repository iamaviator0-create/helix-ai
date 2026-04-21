const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is healthy', timestamp: new Date().toISOString(), service: 'Helix AI Backend' });
});

app.get('/status', (req, res) => {
    res.status(200).json({ status: 'Helix-AI is running smoothly', modelVersion: 'Helix-AI-23M', timestamp: new Date().toISOString() });
});

app.post('/query', async (req, res) => {
    try {
        const { input } = req.body;
        if (!input) {
            return res.status(400).json({ error: 'Input is required' });
        }

        const axios = require('axios');
        const modelResponse = await axios.post('http://localhost:5000/query', { input });
        res.status(200).json({ response: modelResponse.data.response, timestamp: new Date().toISOString() });
    } catch (error) {
        console.error('Error querying model:', error.message);
        res.status(500).json({ error: 'Failed to query model' });
    }
});

app.post('/train', async (req, res) => {
    try {
        const { data } = req.body;
        if (!data) {
            return res.status(400).json({ error: 'Training data is required' });
        }

        const axios = require('axios');
        const trainResponse = await axios.post('http://localhost:5000/train', { data });
        res.status(200).json({ status: 'Training initiated', message: trainResponse.data.message, timestamp: new Date().toISOString() });
    } catch (error) {
        console.error('Error during training:', error.message);
        res.status(500).json({ error: 'Training failed' });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`✨ Backend server is running on port ${PORT}`);
    console.log(`🤖 Helix AI Service is active`);
    console.log(`📡 Ready to accept requests...`);
});
