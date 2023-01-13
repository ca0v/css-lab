try {
const showSearchButton = document.querySelector('.show-search-input');
const search = document.querySelector('.search');
const flickr = document.querySelector('.flickr');

console.log({showSearchButton, search, flickr})
let searching = false;

const toggler = () => {
    searching = !searching;
    search.classList.toggle('hidden', !searching);
    flickr.classList.toggle('hidden', searching);
    showSearchButton.classList.toggle("searching", searching);
}

showSearchButton.addEventListener('click', toggler);

searching = true;
toggler();

} catch (e) {
    alert(e)
}