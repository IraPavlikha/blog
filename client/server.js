const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const tagRoutes = require('./routes/tagRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());

// Маршруты
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/tags', tagRoutes);

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
document.addEventListener('DOMContentLoaded', () => {// Получение постов
    fetch('http://localhost:3000/api/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Логируем посты в консоль
        })
        .catch(error => console.error('Error fetching posts:', error));

    // Получение категорий
    fetch('http://localhost:3000/api/categories')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Логируем категории в консоль
        })
        .catch(error => console.error('Error fetching categories:', error));

    // Получение тегов
    fetch('http://localhost:3000/api/tags')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Логируем теги в консоль
        })
        .catch(error => console.error('Error fetching tags:', error));
});
