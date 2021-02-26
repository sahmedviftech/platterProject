function setfields(id) {
    $("#" + id).css("border", "2px solid #c8c8c8");
}

function validate_WriteReViewForm() {
    var isValid = true;
    if ($("#wrtitle").val() == "") {
        $('#wrtitle').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#wrtitle').css('border', 'none');
    }

    if ($("#WRDescription").val() == "") {
        $('#WRDescription').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#WRDescription').css('border', 'none');
    }

    return isValid;
}
function validate_SignUpandLogin() {

    var isValid = true;

    var ClassSingactive = $('#SignUp').attr('class');
    var ClassLoginactive = $('#Login').attr('class');
    var Userdata = $('#hddUser').val();
    if (ClassSingactive == "tab-pane fade show active") {
        if (Userdata == "" || Userdata == "Undefined") {
            if ($("#FirstName").val() == "") {
                $('#FirstName').css('border', '1px solid Red');
                isValid = false;
            }
            else {
                $('#FirstName').css('border', 'none');
            }
            if ($('#Password').val() == "") {
                $('#Password').css('border', '1px solid Red');
                isValid = false;
            }

            if ($("#ConfirmEmail").val() != $("#Email").val()) {
                $('#ConfirmEmail').css('border', '1px solid Red');
                isValid = false;
            }
            if ($("#ConfirmPassword").val() != $("#Password").val()) {
                $('#ConfirmPassword').css('border', '1px solid Red');
                isValid = false;
            }

            if ($('#PostalCode').val() == "") {
                $('#PostalCode').css('border', '1px solid Red');
                isValid = false;
            }
            else {
                $('#PostalCode').css('border', 'none');
            }

            //email SignUp check
            var email = $("#Email").val();
            var valid = validateEmail(email);
            if (!valid) {
                $("#Email").css('border', '1px solid Red');
                isValid = false;

            }
            else {
                $(Email).css('border', 'none');
            }

            return isValid;
        }
        else {
            return isValid;
        }
    }
    else {
        if (Userdata == "" || Userdata == "Undefined") {
            //email Login check
            var emaillogin = $("#emailLogin").val();
            var validlogin = validateEmail(emaillogin);

            if (!validlogin) {
                $("#emailLogin").css('border', '1px solid Red');
                isValid = false;
            }
            if ($('#passwordLogin').val() == "") {
                $('#passwordLogin').css('border', '1px solid Red');
                isValid = false;
            }

            return isValid;
        }
        else {
            return isValid;
        }
    }

}
var validateEmail = function (elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}
function ClearBorder() {

    if ($("#wrtitle").val() != "") {
        $('#wrtitle').css('border', 'none');
    }
    if ($("#WRDescription").val() != "") {
        $('#WRDescription').css('border', 'none');
    }

    if ($("#FirstName").val() != "") {
        $('#FirstName').css('border', 'none');
    }
    if ($("#Password").val() != "") {
        $('#Password').css('border', 'none');
    }
    if ($("#ConfirmEmail").val() != "") {
        $('#ConfirmEmail').css('border', 'none');

    }
    if ($("#ConfirmPassword").val() != "") {
        $('#ConfirmPassword').css('border', 'none');
    }
    if ($("#PostalCode").val() != "") {
        $('#PostalCode').css('border', 'none');
    }
    if ($("#Email").val() != "") {
        $('#Email').css('border', 'none');
    }
    if ($("#emailLogin").val() != "") {
        $('#emailLogin').css('border', 'none');
    }
    if ($("#passwordLogin").val() != "") {
        $('#passwordLogin').css('border', 'none');
    }


}

//14 April 2020
//$("#btnwritereview").click(function () {
//    toastr.remove();
//   // $('#btnwritereview').attr('disabled', true);
//    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
//    var location = window.location;
//    var HomeownerId = 0;
//    var ContractorId = Id;//$("#contratorId").val();
//    var CreatedBy = 0;
//    QualityOfWork = $("#input1").rateit('value');
//    Timeliness = $("#input2").rateit('value');
//    StayedInBudget = $("#input3").rateit('value');
//    Communication = $("#input4").rateit('value');
//    Cleanliness = $("#input5").rateit('value');
//    Courteous = $("#input6").rateit('value');
//    var Title = $("#wrtitle").val();
//    //var Description = $("#Description").val();
//    var Description = $("#WRDescription").val();
//    if (Title == "") {
//        $("#wrtitle").css("border", "2px solid red");
//        $('#btnwritereview').attr('disabled', false);
//    } else if (Description == "") {
//        $("#WRDescription").css("border", "2px solid red");
//        $('#btnwritereview').attr('disabled', false);
//    } else {
//        var record = {
//            'HomeownerId': HomeownerId,
//            'ContractorId': ContractorId,
//            'QualityOfWork': QualityOfWork,
//            'Timeliness': Timeliness,
//            'StayedInBudget': StayedInBudget,
//            'Communication': Communication,
//            'Cleanliness': Cleanliness,
//            'Courteous': Courteous,
//            'CreatedBy': CreatedBy,
//            'Title': Title,
//            'Description': Description,
//        };
//        $.ajax({
//            type: "POST",
//            url: "/WriteAReview/WriteAReviewSave",
//            contentType: "application/json; charset=utf-8",
//            dataType: 'json',
//            data: JSON.stringify(record),
//            success: function (result) {
//                if (result != "Failed") {
//                    toastr.success("Review Submit Successfully", "Success");
//                    window.location.href = location;
//                }
//                else {
//                    toastr.error("Something went wrong", "Warning");
//                    $('#btnwritereview').attr('disabled', false);
//                }
//            }
//        });
//    }
//});



//$("#btnwritereview").click(function () {

//    toastr.remove();
//    //$('#btnwritereview').attr('disabled', true);
//    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
//    var location = window.location;
//    var HomeownerId = 0;
//    var ContractorId = Id;//$("#contratorId").val();
//    var CreatedBy = 0;

//    QualityOfWork = $("#input1").rateit('value');
//    Timeliness = $("#input2").rateit('value');
//    StayedInBudget = $("#input3").rateit('value');
//    Communication = $("#input4").rateit('value');
//    Cleanliness = $("#input5").rateit('value');
//    Courteous = $("#input6").rateit('value');
//    var Title = $("#wrtitle").val();
//    //var Description = $("#Description").val();
//    var Description = $("#WRDescription").val();

//    // For SignUP
//    var FirstNameSignUp = $("#FirstName").val();
//    var PostalCode = $("#PostalCode").val();
//    var EmailSignUp = $("#Email").val();
//    var Password = $("#Password").val();
//    //For Login
//    var emailLogin = $("#emailLogin").val();
//    var passwordLogin = $("#passwordLogin").val();


//    var checkValid = validate_WriteReViewForm();
//    var checkSignUpLoginValid = validate_SignUpandLogin();
//    var Userdata = $('#hddUser').val();

//    if (checkValid == false || checkSignUpLoginValid == false) {
//        return false;
//        $('#btnwritereview').attr('disabled', false);
//    }
//    else {
//        var record = {
//            'HomeownerId': HomeownerId,
//            'ContractorId': ContractorId,
//            'QualityOfWork': QualityOfWork,
//            'Timeliness': Timeliness,
//            'StayedInBudget': StayedInBudget,
//            'Communication': Communication,
//            'Cleanliness': Cleanliness,
//            'Courteous': Courteous,
//            'CreatedBy': CreatedBy,
//            'Title': Title,
//            'Description': Description,
//            'FirstNameSignUp': FirstNameSignUp,
//            'PostalCode': PostalCode,
//            'EmailSignUp': EmailSignUp,
//            'Password': Password,
//            'emailLogin': emailLogin,
//            'passwordLogin': passwordLogin
//        };
//        $.ajax({
//            type: "POST",
//            url: "/WriteAReview/WriteAReviewSave",
//            contentType: "application/json; charset=utf-8",
//            dataType: 'json',
//            data: JSON.stringify(record),
//            success: function (result) {
//                var ClassSingactive = $('#SignUp').attr('class');
//                var ClassLoginactive = $('#Login').attr('class');
//                var Userdata = $('#hddUser').val();
//                if (result != "Failed") {

//                    if (Userdata == "" || Userdata == "Undefined") {
//                        if (ClassSingactive == "tab-pane fade show active") {
//                            window.location.href = "/Login/Index";
//                        }
//                        else {
//                            if (result == "Login Failed") {
//                                toastr.error("Username or password is invalid", "Warning");
//                                $('#btnwritereview').attr('disabled', false);
//                                // window.location.href = "/WriteAReview/Index?id="+ContractorId;
//                            }
//                            else {
//                                //toastr.success("Review Submit Successfully", "Success");
//                                toastr.success("Congrats! Your Review has successfully been posted", "Success");
//                                setTimeout(myFunction, 1000);
//                                LoginAfter(emailLogin, passwordLogin);
//                            }

//                        }
//                    }
//                    else {
//                        //toastr.success("Review Submit Successfully", "Success");
//                        //window.location.href = location;
//                        toastr.success("Congrats! Your Review has successfully been posted", "Success");
//                        setTimeout(myFunction, 3000);
//                    }

//                }
//                else {
//                    toastr.error("Something went wrong", "Warning");
//                    $('#btnwritereview').attr('disabled', false);
//                }
//            }
//        });
//    }
//});



function GetRating() {
    var isValid = true;
    //var QualityOfWork = 0;
    //var Timeliness = 0;
    //var StayedInBudget = 0;
    //var Communication = 0;
    //var Cleanliness = 0;
    //var Courteous = 0;


    if ($("#input1").rateit('value') == 0) {
        isValid = false;
        $("#Div1").css("color", "red");
    }
    else {
        //isValid = true;
        $("#Div1").css("color", "#0c2233");
    }

    if ($("#input2").rateit('value') == 0) {
        isValid = false;
        $("#Div2").css("color", "red");
    }
    else {
        // isValid = true;
        $("#Div2").css("color", "#0c2233");
    }



    if ($("#input3").rateit('value') == 0) {
        isValid = false;
        $("#Div3").css("color", "red");
    }
    else {
        //isValid = true;
        $("#Div3").css("color", "#0c2233");
    }



    if ($("#input4").rateit('value') == 0) {
        isValid = false;
        $("#Div4").css("color", "red");
    }
    else {
        // isValid = true;
        $("#Div4").css("color", "#0c2233");
    }


    if ($("#input5").rateit('value') == 0) {
        isValid = false;
        $("#Div5").css("color", "red");
    }
    else {
        // isValid = true;
        $("#Div5").css("color", "#0c2233");
    }
    if ($("#input6").rateit('value') == 0) {
        isValid = false;
        $("#Div6").css("color", "red");
    }
    else {
        //isValid = true;
        $("#Div6").css("color", "#0c2233");
    }
    return isValid;


}
$("#input1").click(function () {
    var QualityOfWork = $("#input1").rateit('value');
    //lert(QualityOfWork);
    if (QualityOfWork > 0) {
        $("#Div1").css("color", "#0c2233");
    }
    else {
        $("#Div1").css("color", "red");
    }
});
$("#input2").click(function () {
    var QualityOfWork = $("#input2").rateit('value');
    //lert(QualityOfWork);
    if (QualityOfWork > 0) {
        $("#Div2").css("color", "#0c2233");
    }
    else {
        $("#Div2").css("color", "red");
    }
});
$("#input3").click(function () {
    var QualityOfWork = $("#input3").rateit('value');
    //lert(QualityOfWork);
    if (QualityOfWork > 0) {
        $("#Div3").css("color", "#0c2233");
    }
    else {
        $("#Div3").css("color", "red");
    }
});
$("#input4").click(function () {
    var QualityOfWork = $("#input4").rateit('value');
    //lert(QualityOfWork);
    if (QualityOfWork > 0) {
        $("#Div4").css("color", "#0c2233");
    }
    else {
        $("#Div4").css("color", "red");
    }
});
$("#input5").click(function () {
    var QualityOfWork = $("#input5").rateit('value');
    //lert(QualityOfWork);
    if (QualityOfWork > 0) {
        $("#Div5").css("color", "#0c2233");
    }
    else {
        $("#Div5").css("color", "red");
    }
});
$("#input6").click(function () {
    var QualityOfWork = $("#input6").rateit('value');
    //lert(QualityOfWork);
    if (QualityOfWork > 0) {
        $("#Div6").css("color", "#0c2233");
    }
    else {
        $("#Div6").css("color", "red");
    }
});



CheckUser();
function CheckUser() {
    var res = $("#hddUser").val();
    if (res != "Undefined") {
        $('#emailLogin').attr("data-parsley-required", false);
        $('#passwordLogin').attr("data-parsley-required", false);
        $('#FirstName').attr("data-parsley-required", false);
        $('#LastName').attr("data-parsley-required", false);
        $('#PostalCode').attr("data-parsley-required", false);
        $('#PhoneNumber').attr("data-parsley-required", false);
        $('#Email').attr("data-parsley-required", false);
        $('#ConfirmEmail').attr("data-parsley-required", false);
        $('#Password').attr("data-parsley-required", false);
        $('#ConfirmPassword').attr("data-parsley-required", false);
        $('#gridCheckTerms').attr("data-parsley-required", true);
        $('#gridCheck1').attr("data-parsley-required", true);
    }
}

$("#Login-tab").click(function () {
    //$("#Termdiv").css("display", "None");
    $("#btnwritereview").text("SUBMIT REVIEW");
    $('#emailLogin').attr("data-parsley-required", true);
    $('#passwordLogin').attr("data-parsley-required", true);
    $('#FirstName').attr("data-parsley-required", false);
    $('#LastName').attr("data-parsley-required", false);
    $('#PostalCode').attr("data-parsley-required", false);
    $('#PhoneNumber').attr("data-parsley-required", false);
    $('#Email').attr("data-parsley-required", false);
    $('#ConfirmEmail').attr("data-parsley-required", false);
    $('#Password').attr("data-parsley-required", false);
    $('#ConfirmPassword').attr("data-parsley-required", false);
    $('#gridCheckTerms').attr("data-parsley-required", true);
    $('#gridCheck1').attr("data-parsley-required", true);
    $('#WRrems').css("display", "none");

})
$("#SignUp-tab").click(function () {
    //$("#Termdiv").css("display", "block");
    $("#btnwritereview").text("CREATE FREE ACCOUNT & SUBMIT REVIEW");
    $('#emailLogin').attr("data-parsley-required", false);
    $('#passwordLogin').attr("data-parsley-required", false);
    $('#FirstName').attr("data-parsley-required", true);
    $('#LastName').attr("data-parsley-required", true);
    $('#PostalCode').attr("data-parsley-required", true);
    $('#PhoneNumber').attr("data-parsley-required", true);
    $('#Email').attr("data-parsley-required", true);
    $('#ConfirmEmail').attr("data-parsley-required", true);
    $('#Password').attr("data-parsley-required", true);
    $('#ConfirmPassword').attr("data-parsley-required", true);
    $('#gridCheckTerms').attr("data-parsley-required", true);
    $('#gridCheck1').attr("data-parsley-required", true);
    $('#WRrems').removeAttr('style');
})


function CaptchaUrlCheck(url) {
    var resurl = false;
    if (url == "") {
        $("#captcha").css("border", "2px");
        $("#captcha").css("border-color", "red");
        $("#captcha").css("border-style", "solid");
        $('#error').show();
        resurl = false;
    }
    else {
        $("#captcha").css("border", "none");
        $('#error').hide();
        resurl = true;

    }

    return resurl;
}
function verifyReCaptcha() {
    $('#error').hide();
    $("#captcha").css("border", "none");
}


$('#WriteaReviewFrom').on('submit', function (e) {
    e.preventDefault();

    $('.loader').css("display", "flex");
    var url = grecaptcha.getResponse();
    var capres = CaptchaUrlCheck(url);

    var ClassSingactive = $('#SignUp').attr('class');
    var ClassLoginactive = $('#Login').attr('class');
    if (ClassLoginactive == "tab-pane fade active show") {
        $('#emailLogin').attr("data-parsley-required", true);
        $('#passwordLogin').attr("data-parsley-required", true);
        $('#FirstName').attr("data-parsley-required", false);
        $('#LastName').attr("data-parsley-required", false);
        $('#PostalCode').attr("data-parsley-required", false);
        $('#PhoneNumber').attr("data-parsley-required", false);
        $('#Email').attr("data-parsley-required", false);
        $('#ConfirmEmail').attr("data-parsley-required", false);
        $('#Password').attr("data-parsley-required", false);
        $('#ConfirmPassword').attr("data-parsley-required", false);
        $('#gridCheckTerms').attr("data-parsley-required", true);
        $('#gridCheck1').attr("data-parsley-required", true);
        $('#FirstName').val('');
        $('#PostalCode').val('');
        $('#PhoneNumber').val('');
        $('#Email').val('');
        $('#ConfirmEmail').val('');
        $('#Password').val('');
        $('#ConfirmPassword').val('');
    }
    else if (ClassSingactive == "tab-pane fade show active" || ClassSingactive == "tab-pane fade active show") {
        $('#emailLogin').attr("data-parsley-required", false);
        $('#passwordLogin').attr("data-parsley-required", false);
        $('#FirstName').attr("data-parsley-required", true);
        $('#LastName').attr("data-parsley-required", true);
        $('#PostalCode').attr("data-parsley-required", true);
        $('#PhoneNumber').attr("data-parsley-required", true);
        $('#Email').attr("data-parsley-required", true);
        $('#ConfirmEmail').attr("data-parsley-required", true);
        $('#Password').attr("data-parsley-required", true);
        $('#ConfirmPassword').attr("data-parsley-required", true);
        $('#gridCheckTerms').attr("data-parsley-required", true);
        $('#gridCheck1').attr("data-parsley-required", true);
    }


    var checkrating = GetRating();

    if ($('#WriteaReviewFrom').parsley().isValid() && checkrating == true && capres == true) {
        toastr.remove();
        var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
        var location = window.location;
        var HomeownerId = 0;
        var ContractorId = Id;//$("#contratorId").val();
        var CreatedBy = 0;

        QualityOfWork = $("#input1").rateit('value');
        Timeliness = $("#input3").rateit('value');
        StayedInBudget = $("#input2").rateit('value');
        Communication = $("#input5").rateit('value');
        Cleanliness = $("#input4").rateit('value');
        Courteous = $("#input6").rateit('value');
        var Title = $("#wrtitle").val();
        //var Description = $("#Description").val();
        var Description = $("#WRDescription").val();

        // For SignUP
        var FirstNameSignUp = $("#FirstName").val();
        var LastNameSignUp = $("#LastName").val();
        var PostalCode = $("#PostalCode").val();
        var PhoneNumber = $("#PhoneNumber").val();
        var EmailSignUp = $("#Email").val();
        var Password = $("#Password").val();
        //For Login
        var emailLogin = $("#emailLogin").val();
        var passwordLogin = $("#passwordLogin").val();


        // var checkValid = validate_WriteReViewForm();
        // var checkSignUpLoginValid = validate_SignUpandLogin();
        var Userdata = $('#hddUser').val();

        //if (checkValid == false || checkSignUpLoginValid == false) {
        //    return false;
        //    $('#btnwritereview').attr('disabled', false);
        //}
        //else {
        var record = {
            'HomeownerId': HomeownerId,
            'ContractorId': ContractorId,
            'QualityOfWork': QualityOfWork,
            'Timeliness': Timeliness,
            'StayedInBudget': StayedInBudget,
            'Communication': Communication,
            'Cleanliness': Cleanliness,
            'Courteous': Courteous,
            'CreatedBy': CreatedBy,
            'Title': Title,
            'Description': Description,
            'FirstNameSignUp': FirstNameSignUp,
            'LastNameSignUp': LastNameSignUp,
            'PostalCode': PostalCode,
            'PhoneNumber': PhoneNumber,
            'EmailSignUp': EmailSignUp,
            'Password': Password,
            'emailLogin': emailLogin,
            'passwordLogin': passwordLogin,
            'url': url
        };
        $.ajax({
            type: "POST",
            url: "/WriteAReview/WriteAReviewSave",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                if (result === "Invalid Recptcha") {
                    //  alert("INVALID RECAPTCHA");
                    $('.loader').css("display", "none");
                    toastr.error("Invalid Recaptcha", "Warning");
                    setTimeout(
                        function () {

                            window.location.reload();
                        }, 5000);

                    return false;
                }
                else {
                    $('.loader').css("display", "none");

                    var ClassSingactive = $('#SignUp').attr('class');
                    var ClassLoginactive = $('#Login').attr('class');
                    var Userdata = $('#hddUser').val();
                    if (result != "Failed") {

                        if (Userdata == "" || Userdata == "Undefined") {
                            if (ClassSingactive == "tab-pane fade show active" || ClassSingactive == "tab-pane fade active show") {
                                if (result == "Email already Exists") {
                                    toastr.error("Email already exists", "Warning");
                                } else {
                                    // window.location.href = "/Login/Index";
                                    window.location.href = "/Login/thankyouForRegis";
                                }
                            }
                            else {
                                if (result == "Login Failed" || result == "Username or password is invalid") {
                                    toastr.error("Username or password is invalid", "Warning");
                                    $('#btnwritereview').attr('disabled', false);
                                    // window.location.href = "/WriteAReview/Index?id="+ContractorId;
                                }
                                else {
                                    //toastr.success("Review Submit Successfully", "Success");
                                    toastr.success("Your review has been POSTED.", "Success");
                                    setTimeout(myFunction, 1000);
                                    LoginAfter(emailLogin, passwordLogin);
                                }

                            }
                        }
                        else {
                            //toastr.success("Review Submit Successfully", "Success");
                            //window.location.href = location;
                            toastr.success("Your review has been POSTED.", "Success");
                            setTimeout(myFunction, 3000);
                        }

                    }
                    else {
                        toastr.error("Something went wrong", "Warning");
                        $('#btnwritereview').attr('disabled', false);
                    }
                }

            }
        });
        //  }
    }
    else {
        $('.loader').css("display", "none");
    }
});


function myFunction() {
    window.location.href = "/Review/Index";
}



function LoginAfter(email, pass) {

    $.ajax({
        type: "POST",
        url: "/Login/Login",
        contentType: "application/json; charset=utf-8",
        contentType: false,
        processData: false,
        data: "{'email': '" + email + "','password': '" + pass + "'}",
        success: function (result) {
            window.location.href = "/Review/Index";
        }
    });
}



$("#PhoneNumber").keydown(function () {

    //let str = "";
    let val = $(this).val();
    if (val.length > 10) {
        $(this).val(str);

    }
    else {
        if (val.length > 3 || val.length > 7) {
            let digits = val.split(/(\d{1,3})/);
            let str = "";
            for (let group of digits) {
                if (/^\d+$/.test(group)) {
                    str += group + "-";
                }
            }


            str = str.substring(0, str.length - 1);
            $(this).val(str);
        }
    }
});







//function LoginAfter(email, pass) {

//    $.ajax({
//        type: "POST",
//        url: "/Login/Login",
//        contentType: "application/json; charset=utf-8",
//        contentType: false,
//        processData: false,
//        data: "{'email': '" + email + "','password': '" + pass + "'}",
//        success: function (result) {
//            window.location.href = "/Project/Index";
//        }
//    });
//}


function init_InsertWriteAReview() {
    var QualityOfWork = 0;
    var Timeliness = 0;
    var StayedInBudget = 0;
    var Communication = 0;
    var Cleanliness = 0;
    var Courteous = 0;
    $("#input1").change(function () {
        QualityOfWork = $("#input1").val();
        alert(QualityOfWork);
    });
    $("#input2").change(function () {
        Timeliness = $("#input2").val();
        alert(Timeliness);
    });
    $("#input3").change(function (vote) {
        StayedInBudget = $("#input3").val();
        alert(StayedInBudget);
    });
    $("#input4").change(function () {
        Communication = $("#input4").val();
        alert(Communication);
    });
    $("#input5").change(function () {
        Cleanliness = $("#input5").val();
        alert(Cleanliness);
    });
    $("#input6").change(function () {
        Courteous = $("#input6").val();
        alert(Courteous);
    });
}

//Zain Bhai 
var toolTipData = [{
    "default": "",
    "wrtitle": "<p><strong>Examples:</strong></p> <li>Basement renovation with bathroom</li> <li>Need a new A/C and furnace</li> <li>Painting 3 rooms</li> <li>New roof</li> <li>Upgrade electrical panel</li> <li>Repair plumbing</li><div style=\"height:12px\"></div>",
    "WRDescription": "<p>A detailed description will generate more interest from local service professionals</p> <p><strong>Try to include:</strong></p> <li>Sizes (exact or rough estimates)</li> <li>Preferred materials</li> <li>Specific skills required</li> <li>Are you the property owner, tenant, management group or a prospective buyer?</li><div style=\"height:12px\"></div>",
    "FirstName": "<p>Only your first name is required.</p>",
    "LastName": "<p>Only your last name is required.</p>",
    "PostalCode": "<p>Full postal code of the location where work is to take place. This will be used only to locate contractors in your area. Your postal code will not be shared.</p>",
    "Email": " <p>Your privacy is important to us. Your email address will not be shared. </p> <p>Responses to your project will come directly from TrustedPros. </p> ",
    "ConfirmEmail": "<p>Please confirm your email address. </p>",
    "emailLogin": " <p>Your privacy is important to us. Your email address will not be shared. </p> <p>Responses to your project will come directly from TrustedPros. </p> ",
    "passwordLogin": "<p>Please enter your password.</p>",
    "Password": "<p>Please enter your password.</p>",
    "ConfirmPassword": "<p>Please enter your Confirm Password.</p>"
}];
function toolTipC(obj) {
    if ($(window).width() > 769) {
        var pos = $(obj).position();
        // var width = $(".text-bluebg").width() + "px";
        $(".text-bluebg").css({ "top": pos.top - 20, "position": "absolute" });
        $(".text-bluebg").html(toolTipData[0][obj.name]);
    }
}


$(document).on("click", ".question-pop", function (event) {

    event.stopPropagation();
    var that = $(this).parent().find(".form-control");
    var cn_name = ($(that).attr("name"))
    //var classAttr = $(that).attr("data-class");
    $('.text-bluebg').hide();
    $('.tooltip-body').hide();
    //$('.'+classAttr).show();
    $(".small-tooltip").remove();

    if ($(window).width() < 769) {
        var content = toolTipData[0][cn_name];//$("."+classAttr).html();
        if (undefined != content) {
            var htmlInfo = "<div class='small-tooltip'><div class='inner-tooltip'>" + content + "</div></div>";
            $('body').append(htmlInfo);

            $(".small-tooltip").height("100%");
            var windowHeight = $(window).height();
            var elemHeight = $(".inner-tooltip").height();
            var scrTop = $(window).scrollTop();
            var topM = scrTop + (windowHeight - elemHeight) / 2 + "px";
            $(".inner-tooltip").css("top", topM);
            //$(".inner-tooltip").delay("2000",function(){
            //$(".inner-tooltip").css("position","fixed");
            //    $(".inner-tooltip").css("top","45%");
            //});

        }
    }
});

$(document).on("touchstart click ", "body", function () {
    $(".small-tooltip").css("height", 0);
    $(".inner-tooltip").css("top", "-1000px");
});




function init(jQuery) {
    $('#WriteaReviewFrom').parsley();
    var elementValue = $('#Email').val();
    $('#error').css('display', 'none');
    $('#error').hide();
    //  init_InsertWriteAReview();
    //$("#input3").bind('click', function (event, value) {
    //    //$(this).attr('data-rateit-value', value);
    //    alert( $('#input3').rateit('value'));
    //});
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()

    });


}
$(document).ready(init);