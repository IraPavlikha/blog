document.addEventListener('DOMContentLoaded', function() {
    fetchPosts();
    fetchCategories();
    fetchTags();
});

// Функция для получения постов
function fetchPosts() {
    fetch('/api/posts')
        .then(response => response.json())
        .then(posts => {
            const postList = document.getElementById('post-list');
            postList.innerHTML = ''; // Очистить предыдущий контент
            posts.forEach(post => {
                const postItem = document.createElement('div');
                postItem.classList.add('post');
                postItem.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
                postList.appendChild(postItem);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
}

// Функция для получения категорий
function fetchCategories() {
    fetch('/api/categories')
        .then(response => response.json())
        .then(categories => {
            const categoryList = document.getElementById('category-list');
            categoryList.innerHTML = ''; // Очистить предыдущий контент
            categories.forEach(category => {
                const categoryItem = document.createElement('div');
                categoryItem.classList.add('category');
                categoryItem.innerHTML = `<h4>${category.name}</h4>`;
                categoryList.appendChild(categoryItem);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
}

// Функция для получения тегов
function fetchTags() {
    fetch('/api/tags')
        .then(response => response.json())
        .then(tags => {
            const tagList = document.getElementById('tag-list');
            tagList.innerHTML = ''; // Очистить предыдущий контент
            tags.forEach(tag => {
                const tagItem = document.createElement('div');
                tagItem.classList.add('tag');
                tagItem.innerHTML = `<h4>${tag.name}</h4>`;
                tagList.appendChild(tagItem);
            });
        })
        .catch(error => console.error('Error fetching tags:', error));
}
// Пример кода для получения постов
fetch('http://localhost:3000/api/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Обработка полученных данных
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
    });
