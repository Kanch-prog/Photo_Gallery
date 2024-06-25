const express = require('express');
const multer = require('multer');
const Image = require('../models/Image');
const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Routes
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const newImage = new Image({
      title: req.body.title,
      imageUrl: `/uploads/${req.file.filename}`
    });
    const savedImage = await newImage.save();
    res.json(savedImage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
