
function validate_ProjectForm() {
    var isValid = true;
    if ($('#CategoryIDAdd').val() == "0" || $('#CategoryIDAdd').val() == null) {
        $('#CategoryIDAdd').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CategoryIDAdd').css('border', 'none');
    }

    //if ($("#fileList").text() == "" || $("#fileList").text() == null) {
    //    $('#filemsg').show();
    //    isValid = false;
    //}
    //else {
    //    $('#filemsg').hide();
    //}

    if ($('#ProvinceIDAdd').val() == "0" || $('#ProvinceIDAdd').val() == null) {
        $('#ProvinceIDAdd').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#ProvinceIDAdd').css('border', 'none');
    }

    if ($('#CityIDAdd').val() == "0" || $('#CityIDAdd').val() == null) {
        $('#CityIDAdd').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CityIDAdd').css('border', 'none');
    }

    if ($("#JobTitle").val() == "") {
        $('#JobTitle').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#JobTitle').css('border', 'none');
    }
    if ($('#JobDescription').val() == "") {
        $('#JobDescription').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#JobDescription').css('border', 'none');
    }
    if ($('#CompanyName').val() == "") {
        $('#CompanyName').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CompanyName').css('border', 'none');
    }
    if ($('#EstimatedStartDate').val() == "") {
        $('#EstimatedStartDate').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#EstimatedStartDate').css('border', 'none');
    }

    if ($('#EstimatedBudget').val() == "") {
        $('#EstimatedBudget').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#EstimatedBudget').css('border', 'none');
    }

    return isValid;
}

function ClearBorder() {
    if ($('#CategoryIDAdd').val() != "0") {
        $('#CategoryIDAdd').css('border', 'none');
    }
    if ($('#ProvinceIDAdd').val() != "0") {
        $('#ProvinceIDAdd').css('border', 'none');
    }
    if ($("#CityIDAdd").val() != "0") {
        $('#CityIDAdd').css('border', 'none');
    }

    if ($("#JobTitle").val() != "") {
        $('#JobTitle').css('border', 'none');
    }
    if ($("#JobDescription").val() != "") {
        $('#JobDescription').css('border', 'none');
    }
    if ($("#CompanyName").val() != "") {
        $('#CompanyName').css('border', 'none');
    }
    if ($("#EstimatedStartDate").val() != "") {
        $('#EstimatedStartDate').css('border', 'none');
    }
    if ($("#EstimatedBudget").val() != "") {
        $('#EstimatedBudget').css('border', 'none');
    }
    //if ($("#fileList").text() != "") {
    //    $('#filemsg').hide();

    //}

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

function ParsletDestroy() {
    var isvalid = false;
    if ($('#emailLogin').parsley().isValid()) {

    }
    if ($('#passwordLogin').parsley().isValid()) {

    }

}

CheckUser();
function CheckUser() {
    var res = $("#hddUser").val();
    if (res != "Undefined") {
        $('#emailLogin').attr("data-parsley-required", false);
        $('#passwordLogin').attr("data-parsley-required", false);
        $('#FirstName').attr("data-parsley-required", false);
        $('#LastName').attr("data-parsley-required", false);
        $('#PostalCode').attr("data-parsley-required", false);
        $('#Email').attr("data-parsley-required", false);
        $('#ConfirmEmail').attr("data-parsley-required", false);
        $('#Password').attr("data-parsley-required", false);
        $('#ConfirmPassword').attr("data-parsley-required", false);
    }
}

$("#Login-tab").click(function () {
    signupFucntion = 0;
    $("#btnSave").text("POST MY PROJECT");
    login = "yes";
    signup = "no";
    LoginVal();
})
var signupFucntion = 1;
function LoginVal() {
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
    $("#gridCheck").attr("data-parsley-required", true);
    $("#gridCheck1").attr("data-parsley-required", true);
    $("#gridCheck2").attr("data-parsley-required", true);

    $('#FirstName').val('');
    $('#LastName').val('');
    $('#PostalCode').val('');
    $('#PhoneNumber').val('');
    $('#Email').val('');
    $('#ConfirmEmail').val('');
    $('#Password').val('');
    $('#ConfirmPassword').val('');


}

$("#SignUp-tab").click(function () {
    signupFucntion = 1;
    $("#btnSave").text("CREATE FREE ACCOUNT & POST MY PROJECT");
    login = "no";
    signup = "yes";
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
    $("#gridCheck").attr("data-parsley-required", true);
    $("#gridCheck1").attr("data-parsley-required", true);
    $("#gridCheck2").attr("data-parsley-required", true);
})

function ResetValueEmpty() {
    $("#CategoryIDAdd").prop('selectedIndex', 0);
    $('#JobTitle').val("");
    $('#JobDescription').val("");
    $('#EstimatedStartDate').val("");
    $('#EstimatedBudget').prop('selectedIndex', 0);
    $('#ProvinceIDAdd').prop('selectedIndex', 0);
    $('#CityIDAdd').prop('selectedIndex', 0);
    $('#HomeownerList').prop('selectedIndex', 0);
    $('.remove').parent('.imgrev').remove();
}

function parsleyValidation() {
    $('#JobTitle').parsley();
    $('#CategoryIDAdd').parsley();
    $('#JobDescription').parsley();
    $('#EstimatedStartDate').parsley();
    $('#EstimatedBudget').parsley();
    $('#ProvinceIDAdd').parsley();
    $('#CityIDAdd').parsley();
    $('#emailLogin').parsley();
    $('#passwordLogin').parsley();
    $('#FirstName').parsley();
    $('#LastName').parsley();
    $('#PostalCode').parsley();
    $('#PhoneNumber').parsley();
    $('#Email').parsley();
    $('#ConfirmEmail').parsley();
    $('#Password').parsley();
    $('#ConfirmPassword').parsley();
    $('#emailLogin').parsley();
    $('#passwordLogin').parsley();
    $("#gridCheck").parsley();
    $("#gridCheck1").parsley();
    $("#gridCheck2").parsley();
    // $('#HomeownerList').parsley();
}

function dateClear() {

    if ($("#EstimatedStartDate").val() != "") {
        $('#EstimatedStartDate').parsley().destroy();

    }
}

function LoginFinalValidation() {
    var isvalid = true;

    if ($('#JobTitle').parsley().validate() !== true) isvalid = false;
    if ($('#CategoryIDAdd').parsley().validate() !== true) isvalid = false;
    if ($('#JobDescription').parsley().validate() !== true) isvalid = false;
    if ($('#EstimatedStartDate').parsley().validate() !== true) isvalid = false;
    if ($('#EstimatedBudget').parsley().validate() !== true) isvalid = false;
    if ($('#ProvinceIDAdd').parsley().validate() !== true) isvalid = false;
    if ($('#CityIDAdd').parsley().validate() !== true) isvalid = false;
    //  if ($('#HomeownerList').parsley().validate() !== true) isvalid = false;

    return isvalid;
}

function LoginSubmitFinalValidation() {
    var isvalid = true;

    if ($('#emailLogin').parsley().validate() !== true) isvalid = false;
    if ($('#passwordLogin').parsley().validate() !== true) isvalid = false;
    if ($('#gridCheck').parsley().validate() !== true) isvalid = false;
    if ($('#gridCheck1').parsley().validate() !== true) isvalid = false;
    if ($('#gridCheck2').parsley().validate() !== true) isvalid = false;
    return isvalid;
}

function SingUpSubmitFinalValidation() {
    event.preventDefault();
    var isvalid = true;

    if ($('#FirstName').parsley().validate() !== true) isvalid = false;

    if ($('#LastName').parsley().validate() !== true) isvalid = false;
    if ($('#PostalCode').parsley().validate() !== true) isvalid = false;
    if ($('#Email').parsley().validate() !== true) isvalid = false;
    if ($('#ConfirmEmail').parsley().validate() !== true) isvalid = false;
    if ($('#PhoneNumber').parsley().validate() !== true) isvalid = false;
    if ($('#Password').parsley().validate() !== true) isvalid = false;
    if ($('#ConfirmPassword').parsley().validate() !== true) isvalid = false;
    if ($('#gridCheck').parsley().validate() !== true) isvalid = false;
    if ($('#gridCheck1').parsley().validate() !== true) isvalid = false;
    if ($('#gridCheck2').parsley().validate() !== true) isvalid = false;
    return isvalid;
}

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

var login, signup, file;
$("#btnSave").click(function () {
    var url = grecaptcha.getResponse();
    var result;
    var capres = CaptchaUrlCheck(url);
    //var capres = true;
    // parsleyValidation();


    var res = $("#hddUser").val();
    if (res == "Undefined") {
        if (signupFucntion == 0) {
            var s = true;
        } else {
            var s = SingUpSubmitFinalValidation();
        }
        var l = LoginSubmitFinalValidation();
        var f = LoginFinalValidation();
        if (s == true && f == true && l == true) {
            result = true;
        }
        else {
            //var s = SingUpSubmitFinalValidation();
        }

    }
    else {
        var login = LoginFinalValidation();
        var admin = $("#admin").val();
        if (admin == 4) {
            $('#HomeownerList').parsley();
            if ($('#HomeownerList').parsley().validate() !== true) login = false;
        }

        if (login == true) {
            result = true;
        }
    }
    //if ($('#Project-Form').parsley().isValid()) {
    //var  s=SingUpSubmitFinalValidation();
    //var  l=LoginSubmitFinalValidation();
    //var f=LoginFinalValidation();

    //if (s == true && f == true && l==true) {
    if (result == true && capres == true) {


        var JobTitle = $("#JobTitle").val();
        var CategoryID = $("#CategoryIDAdd").val();
        var JobDescription = $("#JobDescription").val();
        var EstimatedStartDate = $("#EstimatedStartDate").val();
        var EstimatedBudget = $("#EstimatedBudget").val();
        var CityID = $("#CityIDAdd").val();
        var ProvinceID = $("#ProvinceIDAdd").val();
        //var Email = $("#Email").val();
        //var Password = $("#Password").val();
        //var FirstName = $("#FirstName").val();
        var PostalCode = $("#PostalCode").val();
        var PhoneNumber = $("#PhoneNumber").val();
        var EmailSignUp = $("#Email").val();
        var Password = $("#Password").val();
        var FirstNameSignUp = $("#FirstName").val();
        var LastNameSignUp = $("#LastName").val();
        var emailLogin = $("#emailLogin").val();
        var passwordLogin = $("#passwordLogin").val();
        var HomeownerListID = $("#HomeownerList").val();
        HomeownerListID = parseInt(HomeownerListID);
        var AccountRole = $("#AcRACId").val()
        var Path = "";

        file = $("#UpLoadFile").get(0).files;

        var data = new FormData;
        for (i = 0; i < file.length; i++) {
            data.append("FilePath", file[i]);
        }

        data.append("JobTitle", JobTitle);
        data.append("CategoryID", CategoryID);
        data.append("JobDescription", JobDescription);
        data.append("EstimatedStartDate", EstimatedStartDate);
        data.append("EstimatedBudget", EstimatedBudget);
        data.append("CityID", CityID);
        data.append("ProvinceID", ProvinceID);
        data.append("HomeownerListID", HomeownerListID);
        //data.append("Email", Email);
        //data.append("Password", Password);
        //data.append("FirstName", FirstName);
        data.append("EmailSignUp", EmailSignUp);
        data.append("Password", Password);
        data.append("FirstNameSignUp", FirstNameSignUp);
        data.append("LastNameSignUp", LastNameSignUp);
        data.append("PostalCode", PostalCode);
        data.append("PhoneNumber", PhoneNumber);
        data.append("emailLogin", emailLogin);
        data.append("passwordLogin", passwordLogin);
        data.append("url", url);
        //data.append("rId", UsId);
        var url;
        var checkValid = validate_ProjectForm();
        var checkSignUpLoginValid = validate_SignUpandLogin();
        var Userdata = $('#hddUser').val();
        $('.loader').css("display", "flex");
        $.ajax({
            type: "POST",
            url: "/Project/Save",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            //data: JSON.stringify(record),
            contentType: false,
            processData: false,
            data: data,
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
                    if (result == "Login Failed" || result == "Username or password is invalid") {
                        toastr.error("Username or password is invalid", "Warning");
                    }
                    else if (result != null) {
                        if (Userdata == "" || Userdata == "Undefined") {
                            if (ClassSingactive == "tab-pane fade show active" || ClassSingactive == "tab-pane fade active show") {

                                if (result == "Email already Exists") {
                                    toastr.error("Email already Exists", "Warning");
                                } else {
                                    // window.location.href = "/Login/Index";
                                    window.location.href = "/Login/thankyouForRegis";
                                }


                            } else if (ClassSingactive == "tab-pane fade" || ClassSingactive == "tab-pane fade") {

                                if (result == "Email already Exists") {
                                    toastr.error("Email already Exists", "Warning");
                                } else {

                                    $('.loader').css("display", "none");
                                    toastr.success('Your job has been posted.', 'Success');
                                    //toastr.success('Success! Your job has been posted. Click to view your local contractor matches, specializing in the work you need done. OR, sit back and wait for someone to contact you. Thanks for trusting Homii to make your home feel homey.', 'Success');

                                    if ($.isNumeric(result)) {
                                        $('#hidProjectID').val(result);
                                        setTimeout(
                                            function () {
                                                window.location.href = "/Project/HomeOwnerProjectList?UserId=" + result;
                                            }, 3000);
                                    } else {
                                        var a = JSON.parse(result);
                                        var id = a.Message.split('_')[1];
                                        $('#hidProjectID').val(id);
                                        setTimeout(
                                            function () {
                                                window.location.href = "/Project/HomeOwnerProjectList?UserId=" + id;
                                            }, 3000);
                                    }
                                    //$('#successModal').modal('show');

                                    // window.location.href = "/Login/Index";
                                    //window.location.href = "/Project/HomeOwnerProjectList";
                                    //window.location.href = "/Project/HomeOwnerProjectList?UserId=";
                                }


                            }
                            else {
                                $('.loader').css("display", "none");
                                if (result == "Login Failed") {
                                    toastr.error("Username or password is invalid", "Warning");
                                }
                                else {
                                    toastr.success('Your job has been posted.', 'Success');
                                    LoginAfter(emailLogin, passwordLogin);
                                }
                            }
                        }
                        else {
                            $('.loader').css("display", "none");
                            toastr.success('Your job has been posted.', 'Success');
                            $('#hidProjectID').val(result);
                            ResetValueEmpty();
                            //$('#successModal').modal('show');
                            setTimeout(
                                function () {
                                    window.location.href = "/Project/HomeOwnerProjectList?UserId=" + result;
                                }, 3000);

                        }
                    }
                    else {
                        $('.loader').css("display", "none");
                        toastr.error("User Must Be HomeOwner", "Warning");
                    }
                }
            }
        });
    }


});

//5 June 2020
//$("#btnSave").click(function () {    
//    var result;
//    // parsleyValidation();    
//    var res = $("#hddUser").val();
//    if (res == "Undefined") {
//        if (signupFucntion == 0) {
//            var s = true;
//        } else {
//            var s = SingUpSubmitFinalValidation();
//        }
//        var l = LoginSubmitFinalValidation();
//        var f = LoginFinalValidation();
//        if (s == true && f == true && l == true) {
//            result = true;
//        }
//        else {
//           // var s = SingUpSubmitFinalValidation();
//        }
//    }
//    else {
//        var login = LoginFinalValidation();
//        var admin = $("#admin").val();
//        if (admin == 4) {
//            $('#HomeownerList').parsley();
//            if ($('#HomeownerList').parsley().validate() !== true) login = false;
//        }
//        if (login == true) {
//            result = true;
//        }
//    }
//    //if ($('#Project-Form').parsley().isValid()) {
//    //var  s=SingUpSubmitFinalValidation();
//    //var  l=LoginSubmitFinalValidation();
//    //var f=LoginFinalValidation();
//    //if (s == true && f == true && l==true) {
//    if (result == true) {
//        var JobTitle = $("#JobTitle").val();
//        var CategoryID = $("#CategoryIDAdd").val();
//        var JobDescription = $("#JobDescription").val();
//        var EstimatedStartDate = $("#EstimatedStartDate").val();
//        var EstimatedBudget = $("#EstimatedBudget").val();
//        var CityID = $("#CityIDAdd").val();
//        var ProvinceID = $("#ProvinceIDAdd").val();
//        //var Email = $("#Email").val();
//        //var Password = $("#Password").val();
//        //var FirstName = $("#FirstName").val();
//        var PostalCode = $("#PostalCode").val();
//        var PhoneNumber = $("#PhoneNumber").val();
//        var EmailSignUp = $("#Email").val();
//        var Password = $("#Password").val();
//        var FirstNameSignUp = $("#FirstName").val();
//        var LastNameSignUp = $("#LastName").val();
//        var emailLogin = $("#emailLogin").val();
//        var passwordLogin = $("#passwordLogin").val();
//        var HomeownerListID = $("#HomeownerList").val();
//        HomeownerListID = parseInt(HomeownerListID);
//        var AccountRole = $("#AcRACId").val()
//        var Path = "";
//        var file = $("#UpLoadFile").get(0).files;
//        var data = new FormData;
//        for (i = 0; i < file.length; i++) {
//            data.append("FilePath", file[i]);
//        }
//        data.append("JobTitle", JobTitle);
//        data.append("CategoryID", CategoryID);
//        data.append("JobDescription", JobDescription);
//        data.append("EstimatedStartDate", EstimatedStartDate);
//        data.append("EstimatedBudget", EstimatedBudget);
//        data.append("CityID", CityID);
//        data.append("ProvinceID", ProvinceID);
//        data.append("HomeownerListID", HomeownerListID);
//        //data.append("Email", Email);
//        //data.append("Password", Password);
//        //data.append("FirstName", FirstName);
//        data.append("EmailSignUp", EmailSignUp);
//        data.append("Password", Password);
//        data.append("FirstNameSignUp", FirstNameSignUp);
//        data.append("LastNameSignUp", LastNameSignUp);
//        data.append("PostalCode", PostalCode);
//        data.append("PhoneNumber", PhoneNumber);
//        data.append("emailLogin", emailLogin);
//        data.append("passwordLogin", passwordLogin);
//        //data.append("rId", UsId);
//        var url;
//        var checkValid = validate_ProjectForm();
//        var checkSignUpLoginValid = validate_SignUpandLogin();
//        var Userdata = $('#hddUser').val();
//        $('.loader').css("display", "flex");
//        $.ajax({
//            type: "POST",
//            url: "/Project/Save",
//            contentType: "application/json; charset=utf-8",
//            dataType: 'json',
//            //data: JSON.stringify(record),
//            contentType: false,
//            processData: false,
//            data: data,
//            success: function (result) {                
//                $('.loader').css("display", "none");
//                var ClassSingactive = $('#SignUp').attr('class');
//                var ClassLoginactive = $('#Login').attr('class');
//                var Userdata = $('#hddUser').val();
//                if (result == "Login Failed") {
//                    toastr.error("Username or password is invalid", "Warning");
//                }
//                else if (result != null) {
//                    if (Userdata == "" || Userdata == "Undefined") {
//                        if (ClassSingactive == "tab-pane fade show active" || ClassSingactive == "tab-pane fade active show") {
//                            if (result == "Email already Exists") {
//                                toastr.error("Email already Exists", "Warning");
//                            } else {
//                                // window.location.href = "/Login/Index";
//                                window.location.href = "/Login/thankyouForRegis";
//                            }
//                        } else if (ClassSingactive == "tab-pane fade" || ClassSingactive == "tab-pane fade") {
//                            if (result == "Email already Exists") {
//                                toastr.error("Email already Exists", "Warning");
//                            } else {
//                                $('.loader').css("display", "none");
//                                toastr.success('Success! Your job has been posted. Click to view your local contractor matches, specializing in the work you need done. OR, sit back and wait for someone to contact you. Thanks for trusting Homii to make your home feel homey.', 'Success');
//                                if ($.isNumeric(result)) {
//                                    $('#hidProjectID').val(result);
//                                } else {
//                                    var a = JSON.parse(result);
//                                    var id = a.Message.split('_')[1];
//                                    $('#hidProjectID').val(id);
//                                }
//                                $('#successModal').modal('show');                           
//                                // window.location.href = "/Login/Index";
//                                //window.location.href = "/Project/HomeOwnerProjectList";
//                            }
//                        }
//                        else {
//                            $('.loader').css("display", "none");
//                            if (result == "Login Failed") {
//                                toastr.error("Username or password is invalid", "Warning");
//                            }
//                            else {
//                                toastr.success('Success! Your job has been posted. Click to view your local contractor matches, specializing in the work you need done. OR, sit back and wait for someone to contact you. Thanks for trusting Homii to make your home feel homey.', 'Success');
//                                LoginAfter(emailLogin, passwordLogin);
//                            }
//                        }
//                    }
//                    else {
//                        $('.loader').css("display", "none");
//                        toastr.success('Success! Your job has been posted. Click to view your local contractor matches, specializing in the work you need done. OR, sit back and wait for someone to contact you. Thanks for trusting Homii to make your home feel homey.', 'Success');
//                        $('#hidProjectID').val(result);
//                        ResetValueEmpty();
//                        $('#successModal').modal('show');
//                    }
//                }
//                else {
//                    $('.loader').css("display", "none");
//                    toastr.error("User Must Be HomeOwner", "Warning");
//                }
//            }
//        });
//    }
//});



$("#PhoneNumber").keydown(function () {


    let val = $(this).val();
    if (val.length > 10) {
        $(this).val(str);

    }
    else {
        if (val.length > 3 || val.length > 7) {
            let digits = val.split(/(\d{1,3})/);
            let str = "";
            //for (let group of digits) {
            //    if (/^\d+$/.test(group)) {
            //        str += group + "-";
            //    }
            //}
            //for (let group of digits) {
            $.each(digits, function (index, group) {
                if (/^\d+$/.test(group)) {
                    str += group + "-";
                }
            })

            str = str.substring(0, str.length - 1);
            $(this).val(str);
        }
    }
});


function LoginAfter(email, pass) {

    $.ajax({
        type: "POST",
        url: "/Login/Login",
        contentType: "application/json; charset=utf-8",
        contentType: false,
        processData: false,
        data: "{'email': '" + email + "','password': '" + pass + "'}",
        success: function (result) {
            //window.location.href = "/Project/Index";
            window.location.href = "/Project/HomeOwnerProjectList";
        }
    });
}


$("#btnUpdate").click(function () {


    var JobTitleEdit = $("#JobTitleEdit").val();
    var CategoryIDEdit = $("#CategoryIDEdit").val();
    var JobDescriptionEdit = $("#JobDescriptionEdit").val();
    var EstimatedStartDateEdit = $("#EstimatedStartDateEdit").val();
    var EstimatedBudgetEdit = $("#EstimatedBudgetEdit").val();
    var CityIDEdit = $("#CityIDEdit").val();
    var ProvinceIDEdit = $("#ProvinceIDEdit").val();

    var record = {
        'Id': ID,
        'JobTitle': JobTitleEdit,
        'CategoryID': CategoryIDEdit,
        'JobDescription': JobDescriptionEdit,
        'EstimatedStartDate': EstimatedStartDateEdit,
        'EstimatedBudget': EstimatedBudgetEdit,
        'CityID': CityIDEdit,
        'ProvinceID': ProvinceIDEdit

    };

    $.ajax({
        type: "POST",
        url: "/Cities/Update",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(record),
        success: function (result) {
            alert("Submit");
            GetAllUsers()
        }
    });

});



$("#btNext").click(function () {


    var Path = "";
    var file = $("#UpLoadFile").get(0).files;

    var data = new FormData;
    data.append("FilePath", file[0]);

    $.ajax({
        type: "Post",
        url: "/Project/FileAttach",
        data: data,
        contentType: false,
        processData: false,
        success: function (response) {
            //$.ajax({
            // type: "POST",
            // url: "/Project/FileAttachSave",
            // contentType: "application/json; charset=utf-8",
            // dataType: 'json',
            // data: '{ Filestring:" ' + response + ' "}',
            // success: function (result) {
            //
            // alert(result);
            // }
            //});

            alert(response);
        }
    })

})


//$('.datepicker').on('change', function () {
//    var date = $(this).val();
//    var finaldate = moment(date).format('YYYY/MM/DD');
//    $(this).val(finaldate);
//});

function GetAllUsers() {
    var html = null;
    $.ajax({
        type: "POST",
        url: "/Project/GetProject",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            $('#tbody').html('');
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var JobTitle = json[index].JobTitle;
                var CategoryID = json[index].CategoryName;
                var JobDescription = json[index].JobDescription;
                var EstimatedStartDate = json[index].EstimatedStartDate;
                var EstimatedBudget = json[index].EstimatedBudget;

                var City = json[index].CityName;
                var Province = json[index].ProvinceName;


                html = '<tr>' +
                    // '<td>' + Id + '</td>' +

                    '<td>' + JobTitle + '</td>' +
                    '<td>' + CategoryID + '</td>' +
                    '<td>' + JobDescription + '</td>' +
                    '<td>' + EstimatedBudget + '</td>' +
                    '<td>' + EstimatedStartDate + '</td>' +
                    '<td>' + City + '</td>' +
                    // '<td>' + Province + '</td>' +
                    '<td style="text-align: center;">' +
                    '<ul class="cstm-list-icons">' +
                    '<li><a onclick = "Edit(' + Id + ')" data-toggle="modal" data-target="#edit_modal"><i class="flaticon2-edit"></i>Edit</a></li>' +

                    '</ul>' +
                    '</td>' +
                    '</tr>';
                $('#tbody').append(html);
            });
        }
    });
}

function GetCategory() {
    $.ajax({
        type: "POST",
        url: "/Project/GetCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            var html = "";
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var Category = json[index].CategoryName;
                html += "<option value=" + Id + ">" + Category + "</option>";
            });
            $("#CategoryIDAdd").append(html);

        }
    });

}

function GetProvince() {

    $.ajax({
        type: "POST",
        url: "/Project/GetProvince",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            var json = JSON.parse(result);
            var html = "";
            $(json).each(function (index, value) {
                ProID = json[index].Id;
                var ProvinceName = json[index].ProvinceName;

                html += "<option value=" + ProID + ">" + ProvinceName + "</option>";
            });
            $("#ProvinceIDAdd").append(html);

        }
    });
}

function bindGetCity(ProID) {
    $.ajax({

        type: "POST",
        url: "/Project/GetCity",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{values: ' + ProID + '}',
        success: function (result) {

            var json = JSON.parse(result);
            $("#CityIDAdd").html('');
            $("#CityIDAdd").append("<option value='0' >Select City</option>");
            var html = "";
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var CityName = json[index].CityName;
                html += "<option value=" + Id + ">" + CityName + "</option>";
            });
            $("#CityIDAdd").append(html);
        },

        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        }

    });

}




function Edit(id) {
    ID = id;
    var url = '/Project/Edit?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {
            var json = JSON.parse(result);
            var JobTitle = json.JobTitle;
            var CategoryID = json.CategoryID;
            var JobDescription = json.JobDescription
            var EstimatedStartDate = json.EstimatedStartDate;
            var EstimatedBudget = json.EstimatedBudget;
            var Province = json.ProvinceID;
            var City = json.CityID;
            //GetCategory()
            //GetProvince()
            //var pid = $("#ProvinceID").val();
            bindGetCity(Province);
            $("#JobTitle").val(JobTitle);
            $("#CategoryIDAdd").val(CategoryID);
            $("#JobDescription").val(JobDescription);
            $("#EstimatedStartDate").val(EstimatedStartDate);
            $("#EstimatedBudget").val(EstimatedBudget);
            $("#ProvinceIDAdd").val(Province);
            $("#CityIDAdd").val(City);
        }
    });
}


function GetUserList() {

    $.ajax({

        type: "POST",
        url: "/Project/GetUserList",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            var json = JSON.parse(result);
            var html = "";
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var FirstName = json[index].FirstName;
                var LastName = json[index].LastName;

                html += "<option value=" + Id + ">" + FirstName + ' ' + LastName + "</option>";
            });
            $("#HomeownerList").append(html);

        }
    });
}


//$("#fileList").on("click", ".remove", function () {
//    $(this).parent('.imgrev').remove();
//});
var imageCount = 0;
$("#fileList").on("click", ".remove", function () {

    var checkstr = confirm("Are you sure?")
    if (checkstr == true) {
        $(this).parent('.imgrev').remove();
        if (imageCount == 0) {
            imageCount = file.length - 1;
        } else {
            imageCount = imageCount - 1;
        }




    }
    return false;
});





function ShowVideoModalLogin() {

    $.ajax({
        type: "POST",
        url: "/Project/GetLoginStatus",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            var json = JSON.parse(result);
            if (json.LoginStatus == false && json.AccountTypeID == 1) {
                $("#VideomodalPro").modal("show");
                $.ajax({
                    type: "POST",
                    url: "/Project/UpdateLoginStatus",
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    data: '{}',
                    success: function (result) {
                        // alert("Success");
                    }
                });
            }

            //$("#myModal").modal("hide");
        }
    });
}




function BindMatchCityCategory(id) {

    $(".Matchesmodal").html('');
    $.ajax({
        type: "POST",
        url: "/Project/BindMatchCityCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{id: ' + id + '}',
        async: false,
        success: function (result) {

            var json = JSON.parse(result);
            var html = "";
            $(".Matchesmodal").append(html);

            $("#ContractorMatchesmodal").modal("show");

            if (json.length == 0) {
                html += '<h3 class="text-center"> Well this is awkward....There were no contractors matched for your specific.  <a href="/searchContractor/ContractorInCities" class="cstm_hvr_anchr">Click here</a> to search all contractors. </h3>';
            } else {
                $(json).each(function (index, value) {

                    if (value.ImagePath == null) {
                        html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.CompanyName + '</label><label class="first-label" style="display: block;"></label><img src="/Content/assets/img/images.png" style="hight:100px;width:150px;"></div></a></div>';
                        //<div class="writeareview"><a href="/writeAReview/Index?id=' + value.id + '">Write a Review</a></div>
                    }
                    else {
                        html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.CompanyName + '</label><label class="first-label" style="display: block;"></label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"></div></a></div>';
                        //<div class="writeareview"><a href="/writeAReview/Index?id=' + value.id + '">Write a Review</a></div>
                    }
                    //html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.FirstName + ' ' + value.LastName + '</label><label class="first-label" style="display: block;"></label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"></div></a></div>';

                    //<div class="col-md-6"></div><label>FullName : </label><label>' + value.FirstName + ' ' + value.LastName + '</label><br/><label>Image Path : </label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"/><br/>';

                });
            }
            $(".Matchesmodal").append(html);


        }
    });

}
$('#btnViewContractorMatches').click(function () {


    var ProjectID = $('#hidProjectID').val();
    ProjectID = parseInt(ProjectID)
    BindMatchCityCategory(ProjectID);
    $('#successModal').modal('hide');

    $("#JobTitle").val("");
    $("#CategoryIDAdd").val("");
    $("#JobDescription").val("");
    $('#EstimatedBudget').val("");
    $('#EstimatedStartDate').val("");
    $("#CityIDAdd").val("");
    $("#ProvinceIDAdd").val("");
});
$('.succsessModal').click(function () {

    window.location.href = "/Project/HomeOwnerProjectList";

});




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
    "ConfirmPassword": "<p>Please enter your confirm password.</p>"
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




//$("#UpLoadFile").on("change", function () {
//    if ($("#UpLoadFile")[0].files.length > 10) {
//        toastr.error("You have selected more than 10 images", "Warning");
//    } 
//});





function init(jQuery) {
    $('#error').css('display', 'none');
    $('#error').hide();
    $('.userloginside').parents('body').addClass('login-projects');
    //var scroltext = $('.sctext').height();

    //$(window).scroll(function () {

    //    var scroll = $(window).scrollTop();

    //    if (scroll >= 570 && scroll < scroltext) {
    //        $("#sidebar").addClass("fixed-n");

    //    }
    //    else if (scroll >= scroltext) {
    //        $("#sidebar").removeClass("fixed-n");
    //    }
    //    else {
    //        $("#sidebar").removeClass("fixed-n");
    //    }
    //});
    //$("#Login-tab").click(function () {
    //var scroltexts = $('.heights').height();
    //    $("#sidebar").addClass("upload-imgs");        
    //    $(".upload-imgs").height(scroltexts);
    //});
    //$("#SignUp-tab").click(function () {
    //    $("#sidebar").removeClass("upload-imgs");
    //});
    $(function () {
        $('.datepkrs').datetimepicker({ pickTime: false });
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()

    });
    parsleyValidation();
    $('#emailLogin').attr("data-parsley-required", false);
    $('#passwordLogin').attr("data-parsley-required", false);
    $('#FirstName').attr("data-parsley-required", true);
    $('#PostalCode').attr("data-parsley-required", true);
    $('#Email').attr("data-parsley-required", true);
    $('#ConfirmEmail').attr("data-parsley-required", true);
    $('#Password').attr("data-parsley-required", true);
    $('#ConfirmPassword').attr("data-parsley-required", true);

    //SingUpSubmitFinalValidation();
    //LoginSubmitFinalValidation();
    //LoginFinalValidation();
    //$('#Project-Form').parsley();
    var elementValue = $('#Email').val();
    var ProID = 0;
    dateClear();
    ShowVideoModalLogin();
    GetAllUsers();
    GetCategory();
    GetProvince();
    GetUserList();
    //$('body').click(function (e) {
    //    $('.embed-responsive').children('iframe').attr('src', 'http://portal.homii.ca/Content/assets/videos/HOMEOWNER%20FINAL.mp4');
    //});
    $("#filemsg").hide();
    updateList = function () {
        var res = 0;
        $("#filemsg").hide();
        var input = document.getElementById('UpLoadFile');
        var output = document.getElementById('fileList');
        res = res + input.files.length
        var children = "";
        children += '<ul>';
        var imagesCount = $('.imgrev').length;
        var currentImages = input.files.length;
        var limit = currentImages + imagesCount;

        if (limit <= 10) {
            for (var i = 0; i < input.files.length; ++i) {

                children += "<li class='imgrev'><p class='remove' style='color:red'>x</p>" + input.files.item(i).name + " </li>";

            }
            children += '</ul>';
            $("#fileList").append(children);
        } else {

            toastr.error("You have selected more than 10 images", "Warning");

        }


    }

    $("#ProvinceIDAdd").change(function () {

        ProID = $("#ProvinceIDAdd").val();
        if (ProID != 0) {
            bindGetCity(ProID);
        } else {
            $("#CityIDAdd").html('');
            $("#CityIDAdd").append("<option value='0' >Select City</option>");
        }

    });
    //$('.datepicker').datepicker({
    //    uiLibrary: 'bootstrap4'
    //});
    $('.datepicker').datepicker({
    }).on('change', function () {
        $('.datepicker').hide();
    });



    $('input[type="file"]').each(function () {
        // get label text
        var label = $(this).parents('.form-group').find('label').text();
        label = (label) ? label : 'Upload File';

        // wrap the file input
        $(this).wrap('<div class="input-file"></div>');
        // display label
        $(this).before('<span class="btn"> <i class="fa fa-plus mr-2"></i>' + label + '</span>');
        // we will display selected file here
        $(this).before('<span class="file-selected"></span>');

        // file input change listener 
        $(this).change(function (e) {
            // Get this file input value
            var val = $(this).val();

            // Let's only show filename.
            // By default file input value is a fullpath, something like 
            // C:\fakepath\Nuriootpa1.jpg depending on your browser.
            var filename = val.replace(/^.*[\\\/]/, '');

            // Display the filename
            $(this).siblings('.file-selected').text(filename);
        });
    });

    // Open the file browser when our custom button is clicked.
    $('.input-file .btn').click(function () {
        $(this).siblings('input[type="file"]').trigger('click');
    });
    // $(".valign-middle").children().children().addClass("for-hides");
}






$(document).ready(init);




