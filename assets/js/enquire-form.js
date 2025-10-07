function submitForm1() {
    var e = $("#name1").val(),
        t = $("#email1").val(),
        a = $("#number1").val();       
    (s = $("#location").val()),
        $.ajax({
            type: "POST",
            url: "form-process-popup.php",
            data: "name1=" + e + "&email1=" + t + "&number1=" + a + "&location=" + s,
            success: function (e) {
                "success" == e ? formSuccess1() : (formError1(), submitMSG1(!1, e));
				window.location = "http://bit.ly/a2gheeFlipkart";
            },
        });
}
function formSuccess1() {
    $("#contactFormpopup")[0].reset(), submitMSG1(!0, "Thank you for reaching out to us. We'll get back to you soon!");
}
function formError1() {
    $("#contactFormpopup")
        .removeClass()
        .addClass("shake animated")
        .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            $(this).removeClass();
        });
}
function submitMSG1(e, t) {
    if (e) var a = "h3 text-center tada animated text-success";
    else a = "h3 text-center text-danger";
    $("#msgSubmit1").removeClass().addClass(a).text(t);
}
$("#contactFormpopup")
    .validator()
    .on("submit", function (e) {
        e.isDefaultPrevented() ? formError1() : (e.preventDefault(), submitForm1());
    });
