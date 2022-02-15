function fillListItems() {
    let elements = document.getElementsByTagName('li');
    let number = 1;
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = 'some text ' + number;
        number++;
    }
}

function countListItems() {
    let elements = document.getElementsByTagName('li');
    alert('Quantity of list items is: ' + elements.length);
}

function changeLinksColor() {
    let elements = document.getElementsByTagName('li');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].innerText.startsWith('http:') && !elements[i].innerText.startsWith('http://int')
            || elements[i].innerText.startsWith('ftp:')) {
            elements[i].classList.add('external-red');
        }
    }
}