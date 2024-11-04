const express = require('express');
const Tag = require('../models/Tag');
const router = express.Router();

// Получить все теги
router.get('/', async (req, res) => {
    try {
        const tags = await Tag.find();
        res.json(tags);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Создать новый тег
router.post('/', async (req, res) => {
    const tag = new Tag({
        name: req.body.name,
    });

    try {
        const savedTag = await tag.save();
        res.status(201).json(savedTag);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const tags = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Node.js' },
];

router.get('/', (req, res) => {
    res.json(tags);
});
module.exports = router;
