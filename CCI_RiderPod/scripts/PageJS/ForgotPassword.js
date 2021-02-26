

$('#forgetPassfrom').on('submit', function (e) {
    e.preventDefault();


    if ($('#forgetPassfrom').parsley().isValid()) {
        var varEmail = $("#Email").val();
        var varVerificationCode = $("#VerificationCode").val();
        var varPassword = $("#Password").val();
        var record = {
            'Email': varEmail,
            'VerificationCode': varVerificationCode,
            'Password': varPassword
        };

        $.ajax({
            type: "POST",
            url: "/Login/PasswordReset",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {


                if (result.MessageTitle == "Email Send Your Mail") {
                    $('#DivEmail').css("display", "none");
                    $("#DivVerificationCode").css("display", "block");
                    $('#VerificationCode').attr("data-parsley-required", true);
                    // alert(result.MessageTitle);
                    toastr.success("A verification code has been sent to your email", "Success");
                    setTimeout(
                        function () {


                        }, 2000);

                }
                else if (result.MessageTitle == "Email does not exist") {
                    // alert(result.MessageTitle);

                    toastr.error(result.MessageTitle, "Warning");
                    setTimeout(
                        function () {


                        }, 2000);

                }
                else if (result.MessageTitle == "Verification code has been provided") {
                    setTimeout(
                        function () {
                            $('#DivVerificationCode').css("display", "none");
                            $("#DivPassword").css("display", "block");
                            $("#Password").prop("type", "password");
                            $("#btnSave").text('Save');
                            $('#Password').attr("data-parsley-required", true);

                        }, 1000);

                }
                else if (result.MessageTitle == "Verification code is incorrect") {
                    // alert(result.MessageTitle);

                    toastr.error(result.MessageTitle, "Warning");
                    setTimeout(
                        function () {


                        }, 2000);


                }
                else if (result.MessageTitle == "Password reset successfully") {
                    //alert(result.MessageTitle);                       
                    $('#DivPassword').css("display", "block");
                    $("#DivVerificationCode").css("display", "none");
                    $("#Password").val('');
                    toastr.success(result.MessageTitle, "success");
                    setTimeout(
                        function () {

                            window.location.replace("/Login/Index")
                        }, 2000);



                }
            }
            //success: function (result) {
            //    if (result.MessageTitle == "Email Send Your Mail") {
            //        $('#DivEmail').css("display", "none");
            //        $("#DivVerificationCode").css("display", "block");
            //        $('#VerificationCode').attr("data-parsley-required", true);
            //        // alert(result.MessageTitle);
            //        toastr.success(result.MessageTitle, "Success");
            //    }
            //    else if (result.MessageTitle == "Email Does not Exist !") {
            //        // alert(result.MessageTitle);
            //        toastr.error(result.MessageTitle, "Warning");
            //    }
            //    else if (result.MessageTitle == "Verification Code has been provided") {
            //        $('#DivVerificationCode').css("display", "none");
            //        $("#DivPassword").css("display", "block");
            //        $("#Password").prop("type", "password");
            //        $("#btnSave").text('Save');
            //        $('#Password').attr("data-parsley-required", true);
            //    }
            //    else if (result.MessageTitle == "Verification code is not correct") {
            //        // alert(result.MessageTitle);
            //        toastr.error(result.MessageTitle, "Warning");
            //    }
            //    else if (result.MessageTitle == "Password Reset successfully") {
            //        //alert(result.MessageTitle);                       
            //        $('#DivPassword').css("display", "block");
            //        $("#DivVerificationCode").css("display", "none");
            //        $("#Password").val('');
            //        toastr.success(result.MessageTitle, "success"); 
            //        window.location.replace("/Login/Index")
            //    }
            //}
        });

    }

});



function init(jQuery) {
    $('#forgetPassfrom').parsley();
    var ProID = 0;
}



$(document).ready(init);




































//function validate_PasswordFORM() {
//    var isValid = true;   
//    if ($('#Password').val() == "") {
//        $('#Password').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#Password').css('border', 'none');
//    }
//    return isValid;
//}
//function ClearReferrerBorder() {
//    if ($('#Password').val() != "") {
//        $('#Password').css('border', 'none');
//    }
//}
//$("#Email").change(function () { 
//    var chkEmail = $("#Email").val();
//    function ValidateEmail(chkEmail) {
//        if (/^\w+([\.-]?\w+)*@@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
//            return (true)
//            alert("true");
//        }
//        alert("You have entered an invalid email address!")
//        return (false)
//    }
//});
//    //$("#btnSave").click(function () {        
//    //    var varEmail = $("#Email").val();
//    //    var varVerificationCode = $("#VerificationCode").val();
//    //    var varPassword = $("#Password").val();
//    //    var record = {
//    //        'Email': varEmail,
//    //        'VerificationCode': varVerificationCode,
//    //        'Password': varPassword
//    //    };
//    //    var checkValid = validate_PasswordFORM();
//    //    if (checkValid == false && $("#btnSave").text() != "Reset") {
//    //        return false;
//    //    } else {
//    //        $.ajax({
//    //            type: "POST",
//    //            url: "/Login/PasswordReset",
//    //            contentType: "application/json; charset=utf-8",
//    //            dataType: 'json',
//    //            data: JSON.stringify(record),
//    //            success: function (result) {                    
//    //                if (result.MessageTitle == "Email Send Your Mail") {
//    //                    $('#DivEmail').css("display", "none");
//    //                    $("#DivVerificationCode").css("display", "block");
//    //                    alert(result.MessageTitle);
//    //                }
//    //                else if (result.MessageTitle == "Email Does not Exist !") {
//    //                    alert(result.MessageTitle);
//    //                }
//    //                else if (result.MessageTitle == "Verification Code has been provided") {
//    //                    $('#DivVerificationCode').css("display", "none");
//    //                    $("#DivPassword").css("display", "block");
//    //                    $("#Password").prop("type", "password");
//    //                    $("#btnSave").text('Save');
//    //                }
//    //                else if (result.MessageTitle == "Verification code is not correct") {
//    //                    alert(result.MessageTitle);
//    //                }
//    //                else if (result.MessageTitle == "Password Reset successfully") {
//    //                    alert(result.MessageTitle);
//    //                    $('#DivPassword').css("display", "block");
//    //                    $("#DivVerificationCode").css("display", "none");
//    //                    $("#Password").val('');
//    //                    window.location.replace("/Login/Index")
//    //                }
//    //            }
//    //        });
//    //    }
//    //});
//function init(jQuery) {
//    var ProID = 0;   
//}
//$(document).ready(init);



