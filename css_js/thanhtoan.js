const buy = JSON.parse(localStorage.getItem('buy'));
$('.cart_img img').attr('src', buy.imgPath);
$('.bike-name').text(buy.name);
$('.bike-year-color').text(buy.year + '-' + buy.color);
$('.product-price').text(buy.price);
$('.price-text').text(buy.price);

let priceTotal = calcTotal(buy.price, buy.quantity);
$('.price-total').text(priceTotal);

let radio1 = $('input:radio[name="g1"]');
let radio2 = $('input:radio[name="g2"]');

$(`#g1-${buy.radio1Value}`).attr('checked', true)
$(`#g2-${buy.radio2Value}`).attr('checked', true)

let quantity = $('#quantity');
$('.btn-decrease').click(function() {
    const quantityOld = Number(quantity.val());
    let quantityNew;

    if (quantityOld > 0) {
        quantityNew = quantityOld - 1;
    }
    else quantityNew = quantityOld;

    quantity.attr('value', quantityNew);
    $('.price-total').text(toVND(calcTotal(buy.price, quantityNew)));
})

$('.btn-increase').click(function() {
    const quantityOld = Number(quantity.val());
    let quantityNew;
    if (quantityOld < 100) {
        quantityNew = quantityOld + 1;
    }
    else quantityNew = quantityOld;

    quantity.attr('value', quantityNew);
    $('.price-total').text(toVND(calcTotal(buy.price, quantityNew)));
})

function calcTotal(priceText, quantity) {
    let priceNumber = Number(priceText.replace(/[^0-9]+/g, ""))
    let total = priceNumber * quantity;
    return total;
}

function toVND(price) {
    return price.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}

function loadQuantityProduct(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    $(document).find('#item').text(cart.length);
}

loadQuantityProduct();

// function xacnhan() {
//     window.location.href = window.location.origin + '/html/index.html';
// }