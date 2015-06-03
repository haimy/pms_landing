$(function() {
    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

function postContactToGoogle() {

        $.ajax({
            url: "https://docs.google.com/forms/d/1k1k4cV1D6KkuKn43al-7bfmtV4OXKeUhTLKd0UsPWxE/formResponse",
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    alert("성공");
                },
                200: function () {
                   alert("실패");
                }
            }
        });
}