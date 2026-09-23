const button = document.getElementById('increment');
const span = document.getElementById('count');

button.addEventListener('click', () => {
    let count = parseInt(span.innerText, 10);
    count++;
    span.innerText = count;
});