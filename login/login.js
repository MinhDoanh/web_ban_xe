// function show(item){
//     var login=[item];
//     var inputusername= document.getElementById('username').value;
//     var inputpassword= document.getElementById('password').value;
//     var ok=true;
//     for(let x of login){
//         if(x.tk!=inputusername || x.mk!=inputpassword){
//             ok=false;
//         }
//     }
//     console.log('tk:'+inputusername+'mk'+inputpassword);
//     if(ok){
//         return true;
//     }
//     else{
//         alert("Tài khoản hoặc mật khẩu không chính sác!");
//         return false;
//     }
// }

<script>
	$(document).ready(function() {
		// Xử lý sự kiện đăng nhập
		$("#submit_login").click(function(event) {
			event.preventDefault(); // Ngăn chặn gửi dữ liệu mặc định của form
			
			// Lấy giá trị tài khoản và mật khẩu từ input
			var username = $("#username").val();
			var password = $("#password").val();
			
			// Kiểm tra xem có nhập đầy đủ thông tin hay không
			if (username !== '' && password !== '') {
				// Gửi dữ liệu đăng nhập đến máy chủ để xác thực
				
				// Ví dụ: Sử dụng Ajax để gửi dữ liệu đăng nhập
				$.ajax({
					url: "path_to_authentication_script",
					type: "POST",
					data: {
						username: username,
						password: password
					},
					success: function(response) {
						// Xử lý kết quả xác thực
						if (response === 'success') {
							// Đăng nhập thành công, chuyển hướng tới trang chính
							window.location.href = "../html/index.html";
						} else {
							// Đăng nhập không thành công, hiển thị thông báo lỗi
							alert("Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.");
						}
					},
					error: function() {
						// Xử lý khi có lỗi xảy ra
						alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
					}
				});
			} else {
				// Hiển thị thông báo lỗi nếu chưa nhập đủ thông tin
				alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu.");
			}
		})
	});
</script>