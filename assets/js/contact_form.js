function submitForm() {
    var e = $("#name").val(),
        t = $("#email").val(),
        a = $("#number").val(),
        n = $("#message").val();
    (s = $("#subject").val()),
        $.ajax({
            type: "POST",
            url: "form-process.php",
            data: "name=" + e + "&email=" + t + "&number=" + a + "&message=" + n + "&subject=" + s,
            success: function (e) {
                "success" == e ? formSuccess() : (formError(), submitMSG(!1, e));
            },
        });
}
function formSuccess() {
    $("#contactForm")[0].reset(), submitMSG(!0, "Thank you for reaching out to us. We'll get back to you soon!");
}
function formError() {
    $("#contactForm")
        .removeClass()
        .addClass("shake animated")
        .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            $(this).removeClass();
        });
}
function submitMSG(e, t) {
    if (e) var a = "h3 text-center tada animated text-success";
    else a = "h3 text-center text-danger";
    $("#msgSubmit").removeClass().addClass(a).text(t);
}
$("#contactForm")
    .validator()
    .on("submit", function (e) {
        e.isDefaultPrevented() ? formError() : (e.preventDefault(), submitForm());
    });
