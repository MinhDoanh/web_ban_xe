const buy = $('.buy'); // lấy dữ liệu trên local đổ vào trang mua ngay

function readInfor() //Đok dữ liệu lấy về của từng sp
                        //lưu vào 1 object bike và return ra bike đó
{
    const sanpham = buy.closest('#sanpham')
    const p1 = sanpham.find('#p1')
    // const p2 = sanpham.find('#p2')
    const imgPath = p1.find('img').attr('src');
    const bikeName = $('.product-name').text();
    let bike = {imgPath: imgPath, name: bikeName, quantity: 1};

    let radio1 = $('input:radio[name="g1"]');
    let radio2 = $('input:radio[name="g2"]');
    for (let i = 0; i < radio1.length; i++) {
        if (radio1[i].checked) {
            bike.radio1Value = $(radio1[i]).attr('value');
            const option1 = $(radio1[i].closest('.option'))
            const year = option1.find('span').text();
            const price = option1.find('strong').text();
            bike.year = year;
            bike.price = price;
        }
    }

    for (let i = 0; i < radio2.length; i++) {
        if (radio2[i].checked) {
            bike.radio2Value = $(radio2[i]).attr('value');
            const option2 = $(radio2[i].closest('.option'));
            const color = option2.find('span').text();
            bike.color = color;
        }
    }
    return bike;
}

buy.click(function () {
    const bike = readInfor();
    localStorage.setItem('buy', JSON.stringify(bike));
    // return false;
})

function changeImgByColor() {
    let radio2 = $('input:radio[name="g2"]');
    for (let i = 0; i < radio2.length; i++) {
        if(radio2[i].checked) {
            const value = $(radio2[i]).attr('value');
        console.log(value);
        Border(value);
        const srcImgSelected = $(`#a2-${value}`).attr('src');
        $('#img-main').attr('src', srcImgSelected)
        }
    }
}

function Border(id) //đổi border thành đỏ khi bấm vào 1 trong 3 màu xe
{
    let imgc = document.getElementById('a2-'+id).getAttribute('src');
    document.getElementById('img-main').src=imgc;
    if(id=='1'){
        document.getElementById(id).style.border='1px solid red';
        document.getElementById('2').style.border='none';
        document.getElementById('3').style.border='none';
    }
    else if(id=='2'){
        document.getElementById(id).style.border='1px solid red';
        document.getElementById('1').style.border='none';
        document.getElementById('3').style.border='none';
    }
    else{
        document.getElementById(id).style.border='1px solid red';
        document.getElementById('1').style.border='none';
        document.getElementById('2').style.border='none';
    }
}

function loadQuantityProduct(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart) {
        $(document).find('#item').text(cart.length);
    }
}

loadQuantityProduct();