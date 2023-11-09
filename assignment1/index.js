const output = document.getElementById('output');
const btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (a) => {
        text = a.target.innerText;

        if (text == '÷') {
            text = '/';
        }
        if (text == '×') {
            text = '*';
        }
        if (text == '+/-') {
            text = '-';
        }

        output.value += text;
    });
}


function del() {
    output.value = output.value.substr(0, output.value.length - 1);
}