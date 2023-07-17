var i=1;
var N=3;
function Next(){
    if(i<N)
    {
        i+=1;
    } 
    else{
        i=1;   
    }
    document.getElementById("qc").setAttribute("src","../Anh/silde/anh"+i+".jpg");
      
};

function Back(){
    if(i>1)
    {
        i-=1;
    } 
    else{
        i=N;   
    }
    document.getElementById("qc").setAttribute("src","../Anh/silde/anh"+i+".jpg");
      
};

function AutoPlay(){
    setInterval(Next,3000);
};

$(document).ready(function(){
    $('.search').on('click',function(){
        var value=$('#text').val().toLowerCase();
        var data= [];
        var d=0;
        var p=10;
        var content='<h2>Sản phẩm muốn tìm</h2>';
        for(var i=0;i<p;i++){
            $('#'+i).filter(function(){
                if($('#'+i+' .product-name').text().toLowerCase().indexOf(value)>-1){
                    var img= $('#'+i).find('.product-img').attr('src');
                    var name=$('#'+i).find('.product-name').text();
                    var price=$('#'+i).find('.product-price').text();
                    var price_s=$('#'+i).find('.product-price-s').text();
                    var id=i;
                    var order={
                        'id':id,
                        'img':img,
                        'name':name,
                        'price':price,
                        'price_s':price_s,
                    }
                    $(data[d]=order);
                    d++;
                    
                }
            });
        }
        if(data.length>0){
            for(var i=0;i<data.length;i++){
                var cartitem=`
                <div class="col-2 col-m-3 col-s-6">
					<div id="${data[i].id}" class="SP">
                        <a href="wave_alpha-110.html">
                            <img class="product-img" src="${data[i].img}"/>
                            <span class="product-name">${data[i].name}</span><br/>
                            <div><b class="product-price" style="color: red">${data[i].price}</b>&ensp;<s class="product-price-s">${data[i].price_s}</s></div>
                            <div>Tặng 1 đổi 1 trong vòng 3 tháng</div>
                            <i class="fa fa-star checked" style="color:Orange"></i>
                            <i class="fa fa-star checked" style="color:Orange"></i>
                            <i class="fa fa-star checked" style="color:Orange"></i>
                            <i class="fa fa-star checked" style="color:Orange"></i>
                            <i class="fa fa-star checked" style="color:Orange"></i>
                        </a>
                    </div>
                </div>`
                content+=cartitem;
            }
        }
        else{
            content+='<h1>Không tìm thấy sản phẩm</h1>'
        }
        console.log(content);
        $('#show').html(content);
        document.getElementById('tk-show').style.display='block';
        document.getElementById('sanpham').style.display='none';
    });
});

function Sort_price_Increase(att){
    return function(a,b){
        if (a[att] > b[att])
            return 1
        else if (a[att] < b[att])
            return -1
        return 0
    }
}
function Sort_price_Decrease(att){
    return function(a,b){
        if (a[att] > b[att])
            return -1
        else if (a[att] < b[att])
            return 1
        return 0
    }
}

function Sort_price_5(att){
    return function(a){
        if (a[att] < 5000000)
            return 1
    }
}
// function Apply_format_price(str){
//     var new_str = ''
//     var j=0;
//     for (var i=str.length-1;i>=0;i--){
//         j++
//         if (j % 3 == 0 && i != 0){
//             new_str = '.' + str[i] + new_str
//         }
//         else{
//             new_str=str[i] + new_str
//         }
//     }
//     return new_str 
// }

function sx(e){
    $(document).ready(function(){
        $('.'+e).on('click',function(){
            var data=[]
            var d=0;
            var p=10;
            for (var i = 1;i<=p;i++){
                var img = $('#'+i).find('.product-img').attr('src')
                var name = $('#'+i).find('.product-name').text()
                var old_price = $('#'+i).find('.product-price-s').text()
                old_price=old_price.replaceAll('.','')
                old_price=old_price.replace('đ','')
                var new_price = $('#'+i).find('.product-price').text()
                new_price=new_price.replaceAll('.','')
                new_price=new_price.replace('đ','')
                var id=i;
                var product = {
                    'id':id,
                    'img':img,
                    'name':name,
                    'old_price': parseInt(old_price),
                    'new_price': parseInt(new_price)
                }
                $(data[d]=product);
                d++;
            }
            if(e=='gia-thap'){
                console.log(data);
                data.sort(Sort_price_Increase('new_price'));
            }
            if(e=='gia-cao'){
                console.log(data);
                data.sort(Sort_price_Decrease('new_price'));
            }
            if(e=='duoi-5'){
            }
            
            var content='';
            if(data.length>0){
                for (var i = 0;i<data.length;i++){
                    var cartitem = `<div class="col-2 col-m-3 col-s-6">
                                <div id="${data[i].id}" class="SP">
                                    <a href="iphone_12_pro_max.html">
                                        <img class="product-img" src="${data[i].img}"/>
                                        <span class="product-name">${data[i].name}</span><br/>
                                        <div><b class="product-price" style="color: red">${data[i].new_price}</b>&ensp;<s class="product-price-s">${data[i].old_price}</s></div>
                                        <div>Tặng 1 đổi 1 trong vòng 3 tháng</div>
                                        <i class="fa fa-star checked" style="color:Orange"></i>
                                        <i class="fa fa-star checked" style="color:Orange"></i>
                                        <i class="fa fa-star checked" style="color:Orange"></i>
                                        <i class="fa fa-star checked" style="color:Orange"></i>
                                        <i class="fa fa-star checked" style="color:Orange"></i>
                                    </a>
                                </div>
                            </div>`
                            content+=cartitem;
                }    
            }
            console.log(content);
            $('#show').html(content);
            document.getElementById('tk-show').style.display='block';
            document.getElementById('sanpham').style.display='none';
        });
    });
}

