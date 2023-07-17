function addToCart() {
    $('#them_hang').click(function () {
        let cart = JSON.parse(localStorage.getItem('cart'));
        // Nếu giỏ hàng chưa tồn tại thì tạo giỏ hàng rỗng
        if (!cart) {
            cart = [];
        }

        const bike = readInfor();
        let exits = false;

        // Duyệt giỏ hàng
        cart.forEach(function (data, index) {
            // Nếu sản phẩm đã được đặt trước đó thì tăng số lượng lên 1
            if (bike.imgPath == data.imgPath && bike.color == data.color && bike.name == data.name
                && bike.year == data.year && bike.price == data.price) {
                data.quantity++;
                exits = true;
                return false; // Dừng vòng lặp forEach
            }
        })
        // Nếu sản phẩm chưa từng được đặt thì thêm sản phẩm vào cuối giỏ hàng
        if (!exits) {
            cart.push(bike);
        }
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Thêm sản phẩm vào giỏ hàng thành công!');
        loadQuantityProduct();
    })
}

function increase(ele, index) {
    let total = 0;
    let cart = JSON.parse(localStorage.getItem('cart'));
    let quantity = $(ele).prev();
    quantity.val(Number(quantity.val()) + 1);
    cart[index].quantity = Number(quantity.val());
    cart.forEach(function (data, index) {
        total += calcTotal(data.price, data.quantity);
    })
    $(".price-text").text(toVND(total));
    localStorage.setItem('cart', JSON.stringify(cart));
}

function decrease(ele, index) {
    let total = 0;
    let cart = JSON.parse(localStorage.getItem('cart'));
    let quantity = $(ele).next();
    if (Number(quantity.val()) > 0) {
        quantity.val(Number(quantity.val()) - 1);
    }
    cart[index].quantity = Number(quantity.val());
    cart.forEach(function (data, index) {
        total += calcTotal(data.price, data.quantity);
    })
    $(".price-text").text(toVND(total));
    localStorage.setItem('cart', JSON.stringify(cart));

}

function Xoa(index) {
    let total = 0;
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (index >= 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    cart.forEach(function (data, index) {
        total += calcTotal(data.price, data.quantity);
    })
    $(".price-text").text(toVND(total));
    $(`.item-${index}`).remove();
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    // Nếu giỏ hàng có sản phẩm
    console.log(cart);
    if (cart) {
        var t = 0;
        cart.forEach(function (x, index) {
            t += calcTotal(x.price, x.quantity);
            console.log(x)
            console.log(t)
            str += `<div class="item-${index} item">
                <div class="img col-3">
                    <img src="`+ x.imgPath + `" alt="` + x.name + `">
                    <p class="title">`+ x.name + `</p>
                    <p class="price">
                        <strong>`+ x.price + ` ₫</strong>
                    </p>
                    <div class="number">
                        <label>Số lượng</label>
                        <div class="control">
                            <button onclick="decrease(this, `+ index + `)">-</button>
                            <input type="text" value="`+ x.quantity + `">
                            <button onclick="increase(this, `+ index + `)">+</button>
                        </div>
                    </div>
                </div>
                <div class="edit">
                    <button class="red" onclick="Xoa(`+ index + `)">
                        <span>-</span>
                    </button>
                </div>
                <div class="info col-8">
                    <div class="nd_km"></div>
                    <div class="chon">
                        <div class="option">
                            <strong>Năm</strong>
                            <label>
                                <img src="https://img.icons8.com/material-rounded/14/008000/checked--v1.png"/>
                                <span>`+ x.year + `</span>
                            </label>
                        </div>
                        <div class="option">
                            <strong>Màu sắc</strong>
                            <label>
                                <img src="https://img.icons8.com/material-rounded/14/008000/checked--v1.png"/>
                                <span>`+ x.color + `</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>`;
        })

        $("#item-cart").html(str);
        $(".price-text").text(toVND(t));
    }
}

addToCart();
$(document).ready(function () {
    loadCart();
})

function calcTotal(priceText, quantity) {
    let priceNumber = Number(priceText.replace(/[^0-9]+/g, ""))
    let total = priceNumber * quantity;
    return total;
}

function toVND(price) {
    return price.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}


function loadQuantityProduct() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    const item = $(document).find('#item');
    if (cart) {
        item.text(cart.length);
        item.addClass('haveProduct');
    }
    if (item.text() == 0) {
        item.removeClass('haveProduct');
    }
}

loadQuantityProduct();

// function xacnhan() {
//     window.location.href = window.location.origin + '/html/index.html';
// }