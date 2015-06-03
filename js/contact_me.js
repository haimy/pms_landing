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
            data: { "entry_320945709": $('#entry_320945709').val(), "entry_277936889": $('#entry_277936889').val(), "entry_210081351": $('#entry_210081351').val(), "entry_1078280141": $('#entry_1078280141').val() },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>성공했습니다.</strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                200: function () {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>실패하였습니다.");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                }
            }
        });
}