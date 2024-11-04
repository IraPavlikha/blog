const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

// Получить все категории
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Создать новую категорию
router.post('/', async (req, res) => {
    const category = new Category({
        name: req.body.name,
    });

    try {
        const savedCategory = await category.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const categories = [
    { id: 1, name: 'Tech' },
    { id: 2, name: 'Lifestyle' },
];

router.get('/', (req, res) => {
    res.json(categories);
});
module.exports = router;
