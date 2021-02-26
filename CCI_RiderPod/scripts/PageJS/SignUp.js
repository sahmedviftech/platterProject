$("#PhoneNumber,#BusinessPhoneNumber").keydown(function () {


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

function CheckHomeOwnerparsleyValidation() {
    event.preventDefault();

    var isvalid = true;
    if ($("#FirstName").parsley().validate() !== true) isvalid = false;
    if ($("#LastName").parsley().validate() !== true) isvalid = false;
    if ($("#PhoneNumber").parsley().validate() !== true) isvalid = false;
    if ($("#Email").parsley().validate() !== true) isvalid = false;
    if ($("#Password").parsley().validate() !== true) isvalid = false;
    if ($("#PostalCode").parsley().validate() !== true) isvalid = false;
    if ($("#ConfirmEmail").parsley().validate() !== true) isvalid = false;
    if ($("#ConfirmPassword").parsley().validate() !== true) isvalid = false;

    if ($("#gridCheck").parsley().validate() !== true) isvalid = false;
    if ($("#gridCheck1").parsley().validate() !== true) isvalid = false;
    if ($("#gridCheck2").parsley().validate() !== true) isvalid = false;
    return isvalid;
}

function HomeOwnerparsleyValidation() {
    $("#FirstName").parsley();
    $("#LastName").parsley();
    $("#PostalCode").parsley();
    $("#ConfirmEmail").parsley();
    $("#ConfirmPassword").parsley();
    $("#PhoneNumber").parsley();
    $("#Email").parsley();
    $("#Password").parsley();
    $("#City").parsley();
    $("#gridCheck").parsley();
    $("#gridCheck1").parsley();
    $("#gridCheck2").parsley();
}

function CheckReferrerparsleyValidation() {
    event.preventDefault();

    var isvalid = true;
    if ($("#FirstName").parsley().validate() !== true) isvalid = false;
    if ($("#LastName").parsley().validate() !== true) isvalid = false;
    if ($("#PhoneNumber").parsley().validate() !== true) isvalid = false;
    if ($("#Email").parsley().validate() !== true) isvalid = false;
    if ($("#Password").parsley().validate() !== true) isvalid = false;
    //if ($("#PostalCode").parsley().validate() !== true) isvalid = false;
    if ($("#ConfirmEmail").parsley().validate() !== true) isvalid = false;
    if ($("#ConfirmPassword").parsley().validate() !== true) isvalid = false;

    if ($("#gridCheck").parsley().validate() !== true) isvalid = false;
    if ($("#gridCheck1").parsley().validate() !== true) isvalid = false;
    //if ($("#gridCheck2").parsley().validate() !== true) isvalid = false;
    return isvalid;
}

function ReferrerparsleyValidation() {
    $("#FirstName").parsley();
    $("#LastName").parsley();
    //$("#PostalCode").parsley();
    $("#ConfirmEmail").parsley();
    $("#ConfirmPassword").parsley();
    $("#PhoneNumber").parsley();
    $("#Email").parsley();
    $("#Password").parsley();
    //$("#City").parsley();
    $("#gridCheck").parsley();
    $("#gridCheck1").parsley();
    //$("#gridCheck2").parsley();
}


$("#btnSavePayment").click(function () {

    var UserId = window.location.href.split("=")[1].split("&")[0]; //window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var Amount = $("#Amount").val();
    var ReferralId = window.location.href.split("=")[2].split("&")[0];
    var record = {
        'UserId': UserId,
        'Amount': Amount,
        'ReferralId': ReferralId

    };

    $.ajax({
        type: "POST",
        url: "/SignUp/SavePayment",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(record),
        success: function (result) {

        }
    });
});

function BindGetAllUsers() {
    $.ajax({
        type: "POST",
        url: "/SignUp/GetAccountTypes",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            var html = "";
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var Role = json[index].Role1;
                html += "<option value=" + Id + ">" + Role + "</option>";
            });
            $("#AccountTypeID").append(html);
        }
    });
}

function bindGetCity() {
    $.ajax({
        type: "POST",
        url: "/SignUp/GetCity",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            $("#City").html('');
            $("#City").append("<option value='0' > Please Select City</option>");
            var html = "";
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var CityName = json[index].CityName;
                html += "<option value=" + Id + ">" + CityName + "</option>";
            });
            $("#City").append(html);

        },

        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        }

    });

}

function BindGetAllCategories() {

    $.ajax({
        type: "POST",
        url: "/SearchContractor/GetCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            var json = JSON.parse(result);
            var CategoryNameList = [];
            $(json).each(function (index, value) {
                var CategoryName = json[index].CategoryName;

                CategoryNameList.push(CategoryName);
            });
            $("#CategoriesList").autocomplete({
                source: CategoryNameList
            });
        }
    });
}

function BindGetAllCities() {

    $.ajax({
        type: "POST",
        url: "/SearchContractor/GetCities",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            var json = JSON.parse(result);
            var CityNameList = [];
            $(json).each(function (index, value) {
                var CityName = json[index].CityName;

                CityNameList.push(CityName);
            });
            $("#CitiesList").autocomplete({
                source: CityNameList
            });
        }
    });
}

function SearchContByCategoryCities() {

    var URL = '/SearchContractor/Index';
    $.ajax({
        type: "POST",
        //url: "/SearchContractor/Index?",
        url: URL,//"/SearchContractor/Index?CategoryName=" + CategoriesName + "&&CitieName="+CitiesName,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        //data: '{}',
        success: function (result) {
            var json = JSON.parse(result);
            var CategoryNameList = [];
            $(json).each(function (index, value) {
                var CategoryName = json[index].CategoryName;

                CategoryNameList.push(CategoryName);
            });
            $("#CategoriesList").autocomplete({
                source: CategoryNameList
            });
        }
    });


}

$("#SearchContractorByCat").click(function () {
    var CategoriesName = $("#CategoriesList").val();
    var CitiesName = $("#CitiesList").val();
    if (CategoriesName != null && CitiesName != null) {
        var URL = '/SearchContractor/Index?CategoryName=' + CategoriesName + '&CitieName=' + CitiesName;
        $.ajax({
            type: "POST",
            //url: "/SearchContractor/Index?",
            url: URL,//"/SearchContractor/Index?CategoryName=" + CategoriesName + "&&CitieName="+CitiesName,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            //data: '{}',
            success: function (result) {
                var json = JSON.parse(result);
                var CategoryNameList = [];
                $(json).each(function (index, value) {
                    var CategoryName = json[index].CategoryName;
                    CategoryNameList.push(CategoryName);
                });
                $("#CategoriesList").autocomplete({
                    source: CategoryNameList
                });
            }
        });
    }
});

//function BlockNumberAndSpecail() {
//    $('#FirstName,#LastName').bind('keyup blur', function () {
//        var node = $(this);
//        node.val(node.val().replace(/[^a-z A-Z]/g, ''));
//    }
//    );
//}

$("#InBusinessSince").datepicker({
    format: "yyyy",
    viewMode: "years",
    minViewMode: "years",
    endDate: "2020"
});

function verifyReCaptcha() {
    $('#error').hide();
    $("#captcha").css("border", "none");
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
$('#Registers-Form').on('submit', function (event) {

    event.preventDefault();
    var url = grecaptcha.getResponse();
    var captcha = CaptchaUrlCheck(url);
    //var captcha = true;


    if ($('#Registers-Form').parsley().isValid() && captcha == true) {

        $('.loader').css("display", "flex");
        var varAccountTypeID = 2;
        var varFirstName = $("#FirstName").val();
        var varLastName = $("#LastName").val();
        var varPhoneNumber = $("#PhoneNumber").val();
        var varEmail = $("#Email").val();
        var varPassword = $("#Password").val();
        var varCity = $("#City").val();
        var varCompanyName = $("#CompanyName").val();
        var varBusinessPhoneNumber = $("#BusinessPhoneNumber").val();
        var varBusinessAddress = $("#BusinessAddress").val();
        var varPostalCode = $("#PostalCode").val();
        var varNumberOfEmployee = $("#NumberOfEmployees").val();
        var varLegalStructure = $("#LegalStructure").val();
        var varInBusinessSince = $("#InBusinessSince").val();
        var varInterval = $("#Interval").val();

        var record = {
            'AccountTypeID': varAccountTypeID,
            'FirstName': varFirstName,
            'LastName': varLastName,
            'PhoneNumber': varPhoneNumber,
            'Email': varEmail,
            'Password': varPassword,
            'CityId': varCity,
            'CompanyName': varCompanyName,
            'BusinessPhoneNumber': varBusinessPhoneNumber,
            'BusinessAddress': varBusinessAddress,
            'PostalCode': varPostalCode,
            'NumberOfEmployee': varNumberOfEmployee,
            'LegalStructure': varLegalStructure,
            'InBusinessSince': varInBusinessSince,
            'Interval': varInterval,
            'url': url,
        };

        $.ajax({
            type: "POST",
            url: "/SignUp/Save",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                if (result === "Invalid Recptcha") {
                    $('.loader').css("display", "none");
                    // reset the google reCAPTCHA
                    grecaptcha.reset();
                    // alert("INVALID RECAPTCHA");
                    toastr.error("Invalid Recaptcha", "Warning");
                    setTimeout(
                        function () {
                            window.location.reload();

                        }, 5000);

                    return false;
                }
                else {
                    $('.loader').css("display", "none");
                    if (result.Email != "") {
                        window.location.href = "/Login/thankyouForRegis";
                    }
                    else {
                        toastr.error("Email already exist", "Warning");
                        // reset the google reCAPTCHA
                        grecaptcha.reset();
                    }
                    //alert("A verification Code sent to your email");
                    $("#UserID").val(result.Id);
                    $(".btnPayment").show();

                }
            },
            error: function (result) {
                $('.loader').css("display", "none");
                // reset the google reCAPTCHA
                grecaptcha.reset();
                if (result == false) {

                    //toastr.error("User doesn't create", "Warning");
                    toastr.error("Email already exist", "Warning");
                }
            }
        });
    }

});

$('#btnSaveHomeowner').click(function () {
    var url = grecaptcha.getResponse();
    var captcha = CaptchaUrlCheck(url);

    var res = CheckHomeOwnerparsleyValidation();


    if (res == true && captcha == true) {
        $('.loader').css("display", "flex");
        toastr.remove();
        var varAccountTypeID = 1;
        var varFirstName = $("#FirstName").val();
        var varLastName = $("#LastName").val();
        var varPhoneNumber = $("#PhoneNumber").val();
        var varEmail = $("#Email").val();
        var varPassword = $("#Password").val();
        var varCity = $("#City").val();

        var varPostalCode = $("#PostalCode").val();
        var record = {
            'AccountTypeID': varAccountTypeID,
            'FirstName': varFirstName,
            'LastName': varLastName,
            'PhoneNumber': varPhoneNumber,
            'Email': varEmail,
            'Password': varPassword,
            'CityId': varCity,
            'PostalCode': varPostalCode,
            'url': url,
        };

        $.ajax({
            type: "POST",
            url: "/SignUp/Save",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                if (result === "Invalid Recptcha") {
                    $('.loader').css("display", "none");
                    // reset the google reCAPTCHA
                    grecaptcha.reset();
                    toastr.error("Invalid Recaptcha", "Warning");
                    // alert("INVALID RECAPTCHA");
                    setTimeout(
                        function () {


                            window.location.reload();
                        }, 5000);

                    return false;
                }
                else {
                    $('.loader').css("display", "none");
                    if (result.Email != "") {
                        window.location.href = "/Login/thankyouForRegis";
                    }
                    else {
                        toastr.error("Email already exist", "Warning");
                        // reset the google reCAPTCHA
                        grecaptcha.reset();
                    }

                    //alert("Check your Mailbox")
                    //window.location.href = "/Login/Index";
                }
            },
            error: function () {
                $('.loader').css("display", "none");
                // reset the google reCAPTCHA
                grecaptcha.reset();
                if (result == false) {

                    //toastr.error("User doesn't create", "Warning");
                    toastr.error("Email already exist", "Warning");
                }
            }

        });
        // }

    }
});

$('#Referrer-Form').on('submit', function () {
    var url = grecaptcha.getResponse();
    var captcha = CaptchaUrlCheck(url);
    // event.preventDefault();
    var res = CheckReferrerparsleyValidation();

    if (res == true && captcha == true) {
        //if ($('#Referrer-Form').parsley().isValid()) {
        //$("#ReferrerbtnSave").click(function () {
        $('.loader').css("display", "flex");
        var varAccountTypeID = 3;
        var varFirstName = $("#FirstName").val();
        var varLastName = $("#LastName").val();
        var varPhoneNumber = $("#PhoneNumber").val();
        var varEmail = $("#Email").val();
        var varPassword = $("#Password").val();
        var varCity = $("#City").val();

        var record = {
            'AccountTypeID': varAccountTypeID,
            'FirstName': varFirstName,
            'LastName': varLastName,
            'PhoneNumber': varPhoneNumber,
            'Email': varEmail,
            'Password': varPassword,
            'url': url,

        };

        $.ajax({
            type: "POST",
            url: "/SignUp/Save",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                if (result === "Invalid Recptcha") {
                    $('.loader').css("display", "none");
                    // reset the google reCAPTCHA
                    grecaptcha.reset();
                    // alert("INVALID RECAPTCHA");
                    toastr.error("Invalid Recaptcha", "Warning");
                    setTimeout(
                        function () {
                            window.location.reload();

                        }, 5000);


                    return false;
                }
                else {
                    $('.loader').css("display", "none");
                    if (result.Email != "") {
                        window.location.href = "/Login/thankyouForRegis";
                    }
                    else {
                        //toastr.error("User doesn't create", "Warning"); 
                        toastr.error("Email already exist", "Warning");

                        // reset the google reCAPTCHA
                        grecaptcha.reset();
                    }
                }
            },
            error: function () {
                $('.loader').css("display", "none");

                // reset the google reCAPTCHA
                grecaptcha.reset();
                if (result != false) {
                    //toastr.success("Check your mailbox", "Success");
                    //window.location.href = "/Login/Index";
                    window.location.href = "/Login/thankyouForRegis";
                }
                else {
                    //toastr.error("User doesn't create", "Warning");
                    toastr.error("Email already exist", "Warning");
                }
            }
        });
        //}
    }

});



////Zain Bhai 
//$('form.inhert input, form.inhert select').click(function () {
//    $('.text-bluebg').addClass('height-section');
//});
//var toolTipData = [{
//    "default": "",
//    "BusinessAddress": "<p><strong>Examples:</strong></p> <li>Basement renovation with bathroom</li> <li>Need a new A/C and furnace</li> <li>Painting 3 rooms</li> <li>New roof</li> <li>Upgrade electrical panel</li> <li>Repair plumbing</li><div style=\"height:12px\"></div>",
//    "CompanyName": "<p>A detailed description will generate more interest from local service professionals</p> <p><strong>Try to include:</strong></p> <li>Sizes (exact or rough estimates)</li> <li>Preferred materials</li> <li>Specific skills required</li> <li>Are you the property owner, tenant, management group or a prospective buyer?</li><div style=\"height:12px\"></div>",
//    "BusinessPhoneNumber": "<p>Please enter your business phone number.</p>",
//    "LastName": "<p>Only your last name is required.</p>",
//    "PostalCode": "<p>Full postal code of the location where work is to take place. This will be used only to locate contractors in your area. Your postal code will not be shared.</p>",
//    "Email": " <p>Your privacy is important to us. Your email address will not be shared. </p> <p>Responses to your project will come directly from TrustedPros. </p> ",
//    "ConfirmEmail": "<p>Please confirm your email address. </p>",
//    "emailLogin": " <p>Your privacy is important to us. Your email address will not be shared. </p> <p>Responses to your project will come directly from TrustedPros. </p> ",
//    "Password": "<p>Please enter your password.</p>",
//    "FirstName": "<p>Only your first name is required.</p>",
//    "PhoneNumber": "<p>Please enter your phone number.</p>",
//    "InBusinessSince": "<p>Please select your InBusinessSince.</p>",
//    "LegalStructure": "<p>Please enter your LegalStructure.</p>",
//    "NumberOfEmployee": "<p>Please enter your Number Of Employee.</p>",
//    "ConfirmPassword": "<p>Please enter your Confirm Password.</p>"

//}];
//function toolTipC(obj) {
//    if ($(window).width() > 769) {
//        var pos = $(obj).position();
//        // var width = $(".text-bluebg").width() + "px";
//        $(".text-bluebg").css({ "top": pos.top - 20, "position": "absolute" });
//        $(".text-bluebg").html(toolTipData[0][obj.name]);
//    }
//}


//$(document).on("click", ".question-pop", function (event) {

//    event.stopPropagation();
//    var that = $(this).parent().find(".form-control");
//    var cn_name = ($(that).attr("name"))
//    //var classAttr = $(that).attr("data-class");
//    $('.text-bluebg').hide();
//    $('.tooltip-body').hide();
//    //$('.'+classAttr).show();
//    $(".small-tooltip").remove();

//    if ($(window).width() < 769) {
//        var content = toolTipData[0][cn_name];//$("."+classAttr).html();
//        if (undefined != content) {
//            var htmlInfo = "<div class='small-tooltip'><div class='inner-tooltip'>" + content + "</div></div>";
//            $('body').append(htmlInfo);

//            $(".small-tooltip").height("100%");
//            var windowHeight = $(window).height();
//            var elemHeight = $(".inner-tooltip").height();
//            var scrTop = $(window).scrollTop();
//            var topM = scrTop + (windowHeight - elemHeight) / 2 + "px";
//            $(".inner-tooltip").css("top", topM);
//            //$(".inner-tooltip").delay("2000",function(){
//            //$(".inner-tooltip").css("position","fixed");
//            //    $(".inner-tooltip").css("top","45%");
//            //});

//        }
//    }
//});

//$(document).on("touchstart click ", "body", function () {
//    $(".small-tooltip").css("height", 0);
//    $(".inner-tooltip").css("top", "-1000px");
//});









function init(jQuery) {
    HomeOwnerparsleyValidation();
    ReferrerparsleyValidation();
    $("#gridCheck").parsley();
    $("#gridCheck1").parsley();
    $("#gridCheck2").parsley();
    $('#error').css('display', 'none');
    $('#error').hide();
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()

    });
    //$('.yearpicker').yearpicker({
    //}).on('change', function () {
    //    $('.yearpicker').hide();
    //});
    $('#InBusinessSince').on('changeDate', function (ev) {
        $(this).datepicker('hide');
    });

    $('#Referrer-Form').parsley();
    $('#Registers-Form').parsley();
    $('#HomeOwnerSignUpForm').parsley();
    $(".btnPayment").hide();
    $(".yearpicker").val("In Business Since");
    // $(".yearpicker").val('');
    //$(".datepicker").datepicker({ dateFormat: 'yy' });
    // $('.yearpicker').yearpicker();
    //showYear();
    //BlockNumberAndSpecail();
    $('.loader').css("display", "none");
    BindGetAllUsers();
    bindGetCity();
    //BindGetAllCategories();
    //BindGetAllCities();
    //SearchContByCategoryCities();
}



$(document).ready(init);



