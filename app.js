const imageDom = document.querySelectorAll('.image');
const modalDom = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-content');
const close = document.querySelector('.close');
const moreDate = document.querySelector('.more');
const lessDate = document.querySelector('.less');
const dates = document.querySelector('.date').value;
const cardShop = document.querySelector('.list-shop');
const cadSelect = document.querySelector('.card-shop ');
const btonCard = document.querySelector('.button-card');
const allItemIconCard = document.querySelector('.items-select');
const all_amountDates = document.querySelector('.all_amount');
const totalPriceAll = document.querySelector('.total_price');
const trashClean = document.querySelector('.trash');
const description = document.querySelector('.descriptions');
const datesShop = document.querySelector('.dateCard');
const datesSHopall = document.querySelector('.dateText');
const arrowRight = document.querySelector('.right');
const arrowLeft = document.querySelector('.left');
const openBarMobil = document.querySelector('.openBars');
const contentBar = document.querySelector('.nav-mobile');
const iconClosed = document.querySelector('.closed');

const imageEvento = imageDom.forEach(botonAllDom => botonAllDom.addEventListener('click', completePicture));
const closeEvento = close.addEventListener('click', closeModal);
const moreDateEvento = moreDate.addEventListener('click', showDateMOre);
const lessDateEvento = lessDate.addEventListener('click', showDateLass);
const shoppingCart = cardShop.addEventListener('click', cardAll);
const NewbtonCard = btonCard.addEventListener('click', addCard);
const trashCleanE = trashClean.addEventListener('click', Clean);
const eventArrowRight = arrowRight.addEventListener('click', ImgMore)
const eventArrowLeft = arrowLeft.addEventListener('click', ImgLess)
const eventOpenBar = openBarMobil.addEventListener('click', openBar);
const eventClosedBar = iconClosed.addEventListener('click', closedBar)

let counter = '0';
let imgSet = '0';
cadSelect.dataset.pressed = 'false';

function completePicture(e) {
    let numberPic = e.target.dataset.pic
    console.log(numberPic);
    modalDom.style.display = 'block';

    switch (numberPic) {
        case '1':
            modalImage.setAttribute('src', './images/image-product-1.jpg');
            break;

        case '2':
            modalImage.setAttribute('src', './images/image-product-2.jpg');
            break;
        case '3':
            modalImage.setAttribute('src', './images/image-product-3.jpg');
            break;
        case '4':
            modalImage.setAttribute('src', './images/image-product-4.jpg');
            break;
    }
}
function closeModal() {
    modalDom.style.display = 'none';
}
function showDateMOre() {
    let numbers = parseInt(counter);
    numbers++;
    counter = numbers.toString();
    let maximumAmount = document.querySelector('input[type="text"]').value = counter;
    if (maximumAmount > 9) {
        maximumAmount = 9;
        document.querySelector('input[type="text"]').value = maximumAmount;
        allItemIconCard.textContent = minimumQuantity;
    }
}
function showDateLass() {
    let numbers = parseInt(counter);
    numbers--;
    counter = numbers.toString();
    let minimumQuantity = document.querySelector('input[type="text"]').value = counter;
    if (minimumQuantity < 0) {
        minimumQuantity = 0;
        document.querySelector('input[type="text"]').value = minimumQuantity;
        allItemIconCard.textContent = minimumQuantity;
    }
    addCard()

}
function cardAll(e) {
    if (e.target.dataset.pressed === 'false') {
        cadSelect.style.display = 'block';
        e.target.dataset.pressed = 'true';
    } else {
        cadSelect.style.display = 'none';
        e.target.dataset.pressed = 'false';
    }
}
function addCard() {
    allItemIconCard.textContent = counter;
    all_amountDates.textContent = counter;
    multipliDates = parseFloat(counter) * 125.00;
    totalPriceAll.textContent = '$' + multipliDates + '.00';
    if (counter > '0') {
        datesShop.style.display = 'block';
        datesSHopall.style.display = 'none';
    } else {
        datesShop.style.display = 'none';
        datesSHopall.style.display = 'block';
    }
}
function Clean() {
    datesShop.style.display = 'none';
    datesSHopall.style.display = 'block';
    allItemIconCard.textContent = '0';
    all_amountDates.textContent = '0';
    totalPriceAll.textContent = '$0.00';
    document.querySelector('input[type="text"]').value = '0';
}
function ImgMore() {
    imgSet++;
    if (imgSet > 4) {
        imgSet = 4;
    }
    switch (imgSet) {
        case 1:
            modalImage.setAttribute('src', './images/image-product-1.jpg');
            break;
        case 2:
            modalImage.setAttribute('src', './images/image-product-2.jpg');
            break;
        case 3:
            modalImage.setAttribute('src', './images/image-product-3.jpg');
            break;
        case 4:
            modalImage.setAttribute('src', './images/image-product-4.jpg');
            break;
    }
}
function ImgLess() {
    imgSet--;
    if (imgSet < 0) {
        imgSet = 0;
    }
    switch (imgSet) {
        case 1:
            modalImage.setAttribute('src', './images/image-product-1.jpg');
            break;
        case 2:
            modalImage.setAttribute('src', './images/image-product-2.jpg');
            break;
        case 3:
            modalImage.setAttribute('src', './images/image-product-3.jpg');
            break;
        case 4:
            modalImage.setAttribute('src', './images/image-product-4.jpg');
            break;
    }
}
function openBar() {
    contentBar.style.display = 'flex';
}
function closedBar() {
    contentBar.style.display = 'none';
}