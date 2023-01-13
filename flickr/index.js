try {
const showSearchButton = document.querySelector('.show-search-input');
const nav = document.querySelector('nav');
const cookieButton = document.querySelector('.cookie-policy-button');

let searching = false;

// close the cookie policy on click
cookieButton.addEventListener('click', () => {
    document.querySelector('.cookie-policy')?.remove();
});

const toggler = () => {
    searching = !searching;
    nav.classList.toggle('searching', searching);
}

showSearchButton.addEventListener('click', toggler);

searching = true;
toggler();

} catch (e) {
    alert(e)
}