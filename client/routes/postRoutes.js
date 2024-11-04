const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Подключите модель Post

// Получение всех постов
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Создание нового поста
router.post('/', async (req, res) => {
    const post = new Post(req.body);
    try {
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).send(error);
    }
});
const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
];

router.get('/', (req, res) => {
    res.json(posts);
});
module.exports = router;
