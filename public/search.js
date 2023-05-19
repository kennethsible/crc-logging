let availableKeywords = [];

fetch('/api/getFiles')
    .then(response => response.json())
    .then(data => {
        data.files.forEach(file => {
            availableKeywords.push(file.replace(/\.md$/, ''));
        });
    })
    .catch(err => {
        console.error(`[${new Date().toLocaleTimeString()}] `, err);
    });

const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if (!result.length) {
        resultBox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list) => {
        return '<li onclick=selectInput(this)>' + list + '</li>';
    });
    resultBox.innerHTML = '<ul>' + content.join('') + '</ul>';
}
