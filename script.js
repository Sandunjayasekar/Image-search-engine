const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const loadMore = document.getElementById('load-more');

// api key
const apiKey = "VAcIY6TUR16osJDQLlVthTgoMA4vbaSSPw0_sqRL6bE";

let keyWord = "";
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