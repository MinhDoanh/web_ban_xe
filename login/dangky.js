<script>
    $(document).ready(function() {
        // Xử lý sự kiện khi nhấp vào biểu tượng con mắt
        $(".toggle-password").click
        (function() {
            var input = $($(this).attr("toggle"));
            if (input.attr("type") === "password") {
                input.attr("type", "text");
                $(this).html('<i class="fa fa-eye-slash"></i>');
            } else {
                input.attr("type", "password");
                $(this).html('<i class="fa fa-eye"></i>');
            }
        })
    });
</script>