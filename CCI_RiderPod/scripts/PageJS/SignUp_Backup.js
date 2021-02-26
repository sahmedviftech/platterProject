function phonenumber(inputtxt) {
   // var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //if(inputtxt.value.match(phoneno)
    if (ainputtxt.match(phoneno)) {
        return true;
    }
    else {
        alert("message");
        return false;
    }
}

var elementValue = $('#Email').val();
var validateEmail = function (elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}

function validate_SignUpRegistrationFORM() {
    var isValid = true;
   
    if ($("#FirstName").val() == "") {
        $('#FirstName').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#FirstName').css('border', 'none');
    }
    if ($('#LastName').val() == "") {
        $('#LastName').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#LastName').css('border', 'none');
    }
    if ($('#Password').val() == "") {
        $('#Password').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#Password').css('border', 'none');
    }
    

    //email check
    var email = $("#Email").val();
    var valid = validateEmail(email);

    if (!valid) {
        $("#Email").css('border', '1px solid Red');

        isValid = false;

    }
    else {

        $(Email).css('border', 'none');

    }



    if ($('#PostalCode').val() == "") {
        $('#PostalCode').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#PostalCode').css('border', 'none');
    }


    
    var ainputtxt = $('#PhoneNumber').val();
    //var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //if(inputtxt.value.match(phoneno)
    if (ainputtxt.match(phoneno)) {
        $('#PhoneNumber').css('border', 'none');
       
    }
    else {
        $('#PhoneNumber').css('border', '1px solid Red');
        isValid = false;
    }

    return isValid;
}

function ClearBorder() {

   
    if ($("#FirstName").val() != "") {
        $('#FirstName').css('border', 'none');


    }

    if ($("#LastName").val() != "") {
        $('#LastName').css('border', 'none');

    }

    if ($('#Email').val() != "") {
        $('#Email').css('border', 'none');
    }

    if ($('#PostalCode').val() != "") {
        $('#PostalCode').css('border', 'none');
    }

    if ($('#PhoneNumber').val() != "") {
        $('#PhoneNumber').css('border', 'none');
    }

    if ($('#Password').val() != "") {
        $('#Password').css('border', 'none');
    }

}


function ClearBorderSignUpContractor() {

    if ($('#LegalStructure').val() != "0") {
        $('#LegalStructure').css('border', 'none');
    }

    if ($('#City').val() != "0") {
        $('#City').css('border', 'none');
    }

 

    if ($("#CompanyName").val() != "") {
        $('#CompanyName').css('border', 'none');
    }
    if ($('#PhoneNumber').val() != "") {
        $('#PhoneNumber').css('border', 'none');
    }

    if ($("#BusinessPhoneNumber").val() != "") {
        $('#BusinessPhoneNumber').css('border', 'none');

    }

    if ($('#BusinessAddress').val() != "") {
        $('#BusinessAddress').css('border', 'none');
    }

    if ($('#PostalCode').val() != "") {
        $('#PostalCode').css('border', 'none');
    }

   
     if ($("#FirstName").val() != "") {
        $('#FirstName').css('border', 'none');
    }

    if ($("#LastName").val() != "") {
        $('#LastName').css('border', 'none');
    }

    if ($('#NumberOfEmployees').val() != "") {
        $('#NumberOfEmployees').css('border', 'none');
    }

    if ($('#InBusinessSince').val() != "") {
        $('#InBusinessSince').css('border', 'none');
    }

    if ($('#InBusinessSince').val() != "") {
        $('#InBusinessSince').css('border', 'none');
    }


    if ($('#Email').val() != "") {
        $('#Email').css('border', 'none');
    }

    if ($('#Password').val() != "") {
        $('#Password').css('border', 'none');
    }

}


function validate_SignUpContractorFORM() {
    var isValid = true;
    
    if ($('#City').val() == "0" || $('#City').val() == null) {
        $('#City').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#City').css('border', 'none');
    }
    

    if ($('#LegalStructure').val() == "0" || $('#LegalStructure').val() == null) {
        $('#LegalStructure').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#LegalStructure').css('border', 'none');
    }


    if ($("#CompanyName").val() == "") {
        $('#CompanyName').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CompanyName').css('border', 'none');
    }


    var ainputtxt = $('#BusinessPhoneNumber').val();
    //var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //if(inputtxt.value.match(phoneno)
    if (ainputtxt.match(phoneno)) {
        $('#BusinessPhoneNumber').css('border', 'none');
        isValid = true;
    }
    else {
        $('#BusinessPhoneNumber').css('border', '1px solid Red');
        isValid = false;
    }

    var ainputtxt2 = $('#PhoneNumber').val();
    //var phoneno2 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var phoneno2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //if(inputtxt.value.match(phoneno)
    if (ainputtxt2.match(phoneno2)) {
        $('#PhoneNumber').css('border', 'none');
        isValid = true;
    }
    else {
        $('#PhoneNumber').css('border', '1px solid Red');
        isValid = false;
    }


    if ($("#BusinessAddress").val() == "") {
        $('#BusinessAddress').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#BusinessAddress').css('border', 'none');
    }

    if ($("#NumberOfEmployees").val() == "") {
        $('#NumberOfEmployees').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#NumberOfEmployees').css('border', 'none');
    }

    
    
    if ($("#InBusinessSince").val() == 0) {
        $('#InBusinessSince').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#InBusinessSince').css('border', 'none');
    }

    //email check
    var email = $("#Email").val();
    var valid = validateEmail(email);

    if (!valid) {
        $("#Email").css('border', '1px solid Red');

        isValid = false;

    }
    else {

        $(Email).css('border', 'none');

    }

    if ($('#Password').val() == "") {
        $('#Password').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#Password').css('border', 'none');
    }

    if ($('#PostalCode').val() == "") {
        $('#PostalCode').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#PostalCode').css('border', 'none');
    }

    if ($("#LastName").val() == "") {
        $('#LastName').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#LastName').css('border', 'none');
    }

    if ($("#FirstName").val() == "") {
        $('#FirstName').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#FirstName').css('border', 'none');
    }


    return isValid;
}


function validate_SignUpReferrerFORM() {
    var isValid = true;

    if ($("#FirstName").val() == "") {
        $('#FirstName').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#FirstName').css('border', 'none');
    }
    if ($('#LastName').val() == "") {
        $('#LastName').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#LastName').css('border', 'none');
    }
    if ($('#Password').val() == "") {
        $('#Password').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#Password').css('border', 'none');
    }


    //email check
    var email = $("#Email").val();
    var valid = validateEmail(email);

    if (!valid) {
        $("#Email").css('border', '1px solid Red');

        isValid = false;

    }
    else {

        $(Email).css('border', 'none');

    }

 var ainputtxt = $('#PhoneNumber').val();
    //var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
 var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //if(inputtxt.value.match(phoneno)
    if (ainputtxt.match(phoneno)) {
        $('#PhoneNumber').css('border', 'none');
        isValid = true;
    }
    else {
        $('#PhoneNumber').css('border', '1px solid Red');
        isValid = false;
    }

    return isValid;
}

function ClearReferrerBorder() {


    if ($("#FirstName").val() != "") {
        $('#FirstName').css('border', 'none');


    }

    if ($("#LastName").val() != "") {
        $('#LastName').css('border', 'none');

    }

    if ($('#Email').val() != "") {
        $('#Email').css('border', 'none');
    }

  

    if ($('#PhoneNumber').val() != "") {
        $('#PhoneNumber').css('border', 'none');
    }

    if ($('#Password').val() != "") {
        $('#Password').css('border', 'none');
    }

}


    $("#btnSave").click(function () {
        
       
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
        var varNumberOfEmployee = $("#NumberOfEmployee").val();
        var varLegalStructure = $("#LegalStructure").val();
        var varInBusinessSince = $("#InBusinessSince").val();

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
            'InBusinessSince': varInBusinessSince
        };

        //var e = $("#Registers-Form");
        //e.parsley().validate(), contents = e.serialize(), e.parsley().isValid() &&
        var checkValid = validate_SignUpContractorFORM();
        if (checkValid == false) {
            return false;
        } else {
            $.ajax({
                type: "POST",
                url: "/SignUp/Save",
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify(record),
                success: function (result) {

                    alert("A verification Code sent to your email");
                    $("#UserID").val(result.Id);
                    $(".btnPayment").show();
                    if (result.url) {
                        window.location.href = result.url;
                    }
                }
            });
        }
    })




    $("#btnSaveHomeowner").click(function () {
        

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
            'PostalCode': varPostalCode

        };
        
        //var e = $("#Registers-Form");
        //e.parsley().validate(), contents = e.serialize(), e.parsley().isValid() &&
        var checkValid = validate_SignUpRegistrationFORM();
        
        if (checkValid == false) {
            return false;
        } else {
            $.ajax({
                type: "POST",
                url: "/SignUp/Save",
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify(record),
                success: function (result) {
                    
                    alert("Check your Mailbox")
                    window.location.href = "/Login/Index";
                }
            });
        }
    })



    $("#btnSavePayment").click(function () {
        
        var UserId = window.location.href.split("=")[1].split("&")[0]; //window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
        var Amount = $("#Amount").val();
        var ReferralId = window.location.href.split("=")[2].split("&")[0];
        var record = {
            'UserId': UserId,
            'Amount': Amount,
            'ReferralId': ReferralId

        };
        //var e = $("#Registers-Form");
        //e.parsley().validate(), contents = e.serialize(), e.parsley().isValid() &&
        $.ajax({
            type: "POST",
            url: "/SignUp/SavePayment",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {

            }
        });
    })



    $("#ReferrerbtnSave").click(function () {
        

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

        };
        var checkValid = validate_SignUpRegistrationFORM();
        if (checkValid == false) {
            return false;
        } else {

            $.ajax({
                type: "POST",
                url: "/SignUp/Save",
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify(record),
                success: function (result) {
                    window.location.href = "/Login/Index";

                }
            });
        }
    })



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
            $("#City").append("<option value='' > Please select City</option>");
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







function init(jQuery) {
    $(".btnPayment").hide();


    $('.loader').css("display", "none");      
    BindGetAllUsers();
    bindGetCity();
    BindGetAllCategories();
    BindGetAllCities();
    SearchContByCategoryCities();
}



$(document).ready(init);