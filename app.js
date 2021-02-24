const express = require('express');
const app = express();

const cloudinary = require('./cloudinary');

app.use(express.json({ limit: '50mb' }));

const port = process.env.PORT || 3001;

app.post('/api/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {});

        res.json({ data: uploadResponse });
    } catch (err) {
        res.status(500).json({ err: 'Something went wrong' });
    }
});


app.listen(port, () => {
    console.log('listening on 3001');
});