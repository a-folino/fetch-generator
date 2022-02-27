const button = document.querySelector('button');
const apiURL = document.querySelector('.api');
const fetch1 = document.querySelector('.fetch');
const then1 = document.querySelector('.then1');
const then2 = document.querySelector('.then2');
const select = document.querySelector('select');
const yes = document.querySelector('.yes');
const code = document.querySelector('.jsonObject');
const explain = document.querySelector('.explain');

const logData = () => {
    fetch(apiURL.value)
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
};

button.addEventListener('click', () => {
    if (select.value === 'n') {
        fetch1.textContent = `fetch(${apiURL.value})`
        then1.textContent = `.then(response => response.json())`;
        then2.textContent = `.then(data => console.log(data));`;
        yes.textContent = '';
        logData();
    } else {
        yes.textContent = `const url = "${apiURL.value}";`
        fetch1.textContent = `fetch(url)`
        then1.textContent = `.then(response => response.json())`;
        then2.textContent = `.then(data => console.log(data));`;
        logData();
    }
});

apiURL.addEventListener('keyup', (e) => {
    if (select.value === 'n' && e.keyCode == 13 || e.which == 13) {
        fetch1.textContent = `fetch(${apiURL.value})`
        then1.textContent = `.then(response => response.json())`;
        then2.textContent = `.then(data => console.log(data));`;
        y.textContent = '';
        logData();
    } else if (select.value === 'y' && e.keyCode == 13 || e.which == 13) {
        y.textContent = `const url = "${apiURL.value}";`
        fetch1.textContent = `fetch(url)`
        then1.textContent = `.then(response => response.json())`;
        then2.textContent = `.then(data => console.log(data));`;
        logData();
    }
});
