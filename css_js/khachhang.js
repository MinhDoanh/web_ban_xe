function xacnhan(){
    var hoten=document.getElementById("ho-ten").value;
    var sdt=document.getElementById("sdt").value;
    var dia_chi=document.getElementById("dia-chi").value;
    var email=document.getElementById("email").value;
    var ghi_chu=document.getElementById("ghi-chu").value;
    var magg=document.getElementById("ma-giam-gia").value;
    if(hoten =="" || sdt =="" || email == "" || dia_chi== ""){
        alert("Bạn cần điền đầy đủ các trường thông tin có dấu * !");
        return false;
    }
    else if(isNaN(sdt) || sdt.length!=10){//isNaN = không pải số
        alert("Số điện thoại không đúng!");
        return false;
    }
    else{
        alert("Đặt hàng thành công !")
        XoaCart();
        window.location.href = window.location.origin + '/html/index.html';
    }
    
}
function XoaCart() {
    localStorage.setItem('giohang', null);
    location.reload();
}