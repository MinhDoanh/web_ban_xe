// function  addToCart(item) {
//     // debugger; //công cụ fix lỗi         
//     item.quantity = 1;//gán số lượng đặt cho item
//     console.log(item.quantity);
//     var list;
//     //kiểm tra xem trong locastorage có sản phẩm hay chưa
//     if (localStorage.getItem('giohang') == null) {
//         list = [item];
//     } else {
//         list = JSON.parse(localStorage.getItem('giohang')) || [];//gán dl có trong locastorage
//         let ok = true;
//         for (let x of list) {
//             if (x.id == item.id) {
//             x.quantity += 1;
//             ok = false;
//             break;
//             }
//         }
//         if(ok){
//             list.push(item); 
//         } 
//     }
//     localStorage.setItem('giohang', JSON.stringify(list));//ghi dl vào trong locastorage
//     location.reload();
//     alert("Đã thêm giỏ hàng thành công");
// }
function Border(id){
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

var list_gh = JSON.parse(localStorage.getItem('giohang'));
var str = "";

$(document).ready(function(){
    // LoadData();
    // loadgiohang();
})
// function LoadData() {
//     // var n = 0;
//     var t = 0;
//     for (x of list_gh) {
//         t += x.price * x.quantity;
//             str +=`<div class="item">
//                 <div class="img col-3">
//                     <img src="`+x.image+`" alt="`+x.name+`">
//                     <p class="title">`+x.name+`</p>
//                     <p class="price">
//                         <strong>`+x.price+` ₫</strong>
//                         <strike>`+x.price_s+` ₫</strike>
//                     </p>
//                     <div class="number">
//                         <label>Số lượng</label>
//                         <div class="control">
//                             <button onclick="Giam(`+ x.id + `)">-</button>
//                             <input type="text" id="q_`+ Number(x.id)+`" onchange="updateQuantity(`+ x.id + `)" value="`+x.quantity+`">
//                             <button onclick="Tang(`+ x.id + `)">+</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="edit">
//                     <a href="#" class="red" onclick="Xoa(`+ x.id + `)">
//                         <span>-</span>
//                     </a>
//                 </div>
//                 <div class="info col-8">
//                     <div class="nd_km"></div>
//                     <div class="chon">
//                         <div class="option">
//                             <strong>Phiên Bản</strong>
//                             <label>
//                                 <img src="https://img.icons8.com/material-rounded/14/008000/checked--v1.png"/>
//                                 <span>`+x.phienban+`</span>
//                             </label>
//                         </div>
//                         <div class="option">
//                             <strong>Màu sắc</strong>
//                             <label>
//                                 <img src="https://img.icons8.com/material-rounded/14/008000/checked--v1.png"/>
//                                 <span>`+x.mau+`</span>
//                             </label>
//                         </div>
//                     </div>
//                 </div>
//             </div>`;
//     }
//     // console.log(str);
//     $("#item-cart").html(str);
//     $(".price-text").text(t);
    
// }
function XoaCart() {
    localStorage.setItem('giohang', null);
    location.reload();
    // LoadData();
}

function updateCart() {
    localStorage.setItem('giohang', JSON.stringify(list_gh));
}
function Tang(id) {
    var index = list_gh.findIndex(x => x.id == id);
    if (index >= 0) {
        list_gh[index].quantity += 1; 
    }
    updateCart();
    location.reload();
}
function Giam(id) {
    var index = list_gh.findIndex(x => x.id == id);
    if (index >= 0 && list_gh[index].quantity >=1) {
        list_gh[index].quantity -= 1; 
    }
    updateCart();
    location.reload();
}
function updateQuantity(id) {
    var quantity = Number($('#q_'+id).val());
    var index = list_gh.findIndex(x => x.id == id);
    if (index >= 0 && list_gh[index].quantity >=1) {
        list_gh[index].quantity = quantity; 
    }
    updateCart();
}
function loadgiohang(){
    var n=0;
    for (x of list_gh){
        n+=x.quantity
    }
    $(document).find('#item').text(n);
}
