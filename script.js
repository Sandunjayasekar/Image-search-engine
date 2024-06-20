const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.querySelector('.search-result');
const loadMore = document.getElementById('load-more');

// api key
const apiKey = "AIzaSyDl7w6w2yH8s8Fw9XZTn8j4XG6fJ-6zZxw";

let keyWord = '';
let page = 1;

async function searchImages() {
    keyWord = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})