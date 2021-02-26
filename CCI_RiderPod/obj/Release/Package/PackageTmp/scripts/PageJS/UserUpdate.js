

//function phonenumber(inputtxt) {
//    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
//    //if(inputtxt.value.match(phoneno)
//    if (ainputtxt.match(phoneno)) {
//        return true;
//    }
//    else {      
//        return false;
//    }
//}

//var elementValue = $('#Email').val();
//var validateEmail = function (elementValue) {
//    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//    return emailPattern.test(elementValue);
//}

//function validate_USERFORM() {
//    var isValid = true;
//    //if ($('#AccountTypeID').val() == "0") {
//    //    $('#AccountTypeID').css('border', '1px solid Red');
//    //    isValid = false;
//    //}
//    //else {
//    //    $('#AccountTypeID').css('border', 'none');
//    //}
//    //if ($('#CityEdit').val() == "0") {
//    //    $('#CityEdit').css('border', '1px solid Red');
//    //    isValid = false;
//    //}
//    //else {
//    //    $('#CityEdit').css('border', 'none');
//    //}

//    if ($("#FirstName").val() == "") {
//        $('#FirstName').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#FirstName').css('border', 'none');
//    }
//    if ($('#LastName').val() == "") {
//        $('#LastName').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#LastName').css('border', 'none');
//    }


//    //email check
//    var email = $("#Email").val();
//    var valid = validateEmail(email);
//    if (!valid) {
//        $("#Email").css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $(Email).css('border', 'none');
//    }



//    if ($('#PostalCode').val() == "") {
//        $('#PostalCode').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#PostalCode').css('border', 'none');
//    }


    
//    var ainputtxt = $('#PhoneNumber').val();
//    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
//    //if(inputtxt.value.match(phoneno)
//    if (ainputtxt.match(phoneno)) {
//        $('#PhoneNumber').css('border', 'none');
//    }
//    else {
//        $('#PhoneNumber').css('border', '1px solid Red');
//        isValid = false;
//    }
//    return isValid;
//}

//function ClearBorder() {
//    //if ($('#AccountTypeID').val() != "0") {
//    //    $('#AccountTypeID').css('border', 'none');
//    //}
//    //if ($('#CityEdit').val() != "0") {
//    //    $('#CityEdit').css('border', 'none');
//    //}
//    if ($("#FirstName").val() != "") {
//        $('#FirstName').css('border', 'none');
//    }
//    if ($("#LastName").val() != "") {
//        $('#LastName').css('border', 'none');
//    }
//    if ($('#Email').val() != "") {
//        $('#Email').css('border', 'none');
//    }
//    if ($('#PostalCode').val() != "") {
//        $('#PostalCode').css('border', 'none');
//    }
//    if ($('#PhoneNumber').val() != "") {
//        $('#PhoneNumber').css('border', 'none');
//    }
//}
    $("#btnSave").click(function () {
        
        var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
        var varAccountTypeID = $("#AccountTypeID").val();
        var varFirstName = $("#FirstName").val();
        var varLastName = $("#LastName").val();
        var varPhoneNumber = $("#PhoneNumber").val();
        var varEmail = $("#Email").val();
        var varIsActive = $('#IsActive').is(":checked");
        var varCity = $("#CityEdit").val();
        var varCompanyName = $("#CompanyName").val();
        var varBusinessPhoneNumber = $("#BusinessPhoneNumber").val();
        var varBusinessAddress = $("#BusinessAddress").val();
        var varPostalCode = $("#PostalCode").val();
        var varNumberOfEmployee = $("#NumberOfEmployee").val();
        var varLegalStructure = $("#LegalStructure").val();
        var varInBusinessSince = $("#InBusinessSince").val();

        var record = {
            'Id': Id,
            'AccountTypeID': varAccountTypeID,
            'FirstName': varFirstName,
            'LastName': varLastName,
            'PhoneNumber': varPhoneNumber,
            'Email': varEmail,
            'IsActive': varIsActive,
            'CityId': varCity,
            'CompanyName': varCompanyName,
            'BusinessPhoneNumber': varBusinessPhoneNumber,
            'BusinessAddress': varBusinessAddress,
            'PostalCode': varPostalCode,
            'NumberOfEmployee': varNumberOfEmployee,
            'LegalStructure': varLegalStructure,
            'InBusinessSince': varInBusinessSince
        };

        //var checkValid = validate_USERFORM();
        //if (checkValid == false) {
        //    return false;
        //} else {
            //var e = $("#Registers-Form");
            //e.parsley().validate(), contents = e.serialize(), e.parsley().isValid() &&
            $.ajax({
                type: "POST",
                url: "/UsersDetails/Update",
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify(record),
                success: function (result) {
                   
                    window.location.href = "/UsersDetails/Index";
                }
            });
        //}
    })




function BindGetAllUser() {

    $('.loader').css("display", "none");      
    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    $.ajax({
        type: "POST",
        url: "/UsersDetails/GetUser?id=" + Id,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            
            var json = JSON.parse(result);

            $("#FirstName").val(json.FirstName);
            $("#LastName").val(json.LastName);
            $("#PhoneNumber").val(json.PhoneNumber);
            $("#Email").val(json.Email);
            $("#CompanyName").val(json.CompanyName);
            $("#BusinessPhoneNumber").val(json.BusinessPhoneNumber);
            $("#BusinessAddress").val(json.BusinessAddress);
            $("#PostalCode").val(json.PostalCode);
            $("#NumberOfEmployee").val(json.NumberOfEmployee);
            $("#LegalStructure").val(json.LegalStructure);
            $("#InBusinessSince").val(json.InBusinessSince);

            if(json.AccountTypeID==2){
                $('.ContractorAccRole').css("display", "block");
            }
            //$("#AccountTypeID").val(json.AccountTypeID);
            if (json.IsActive == true) {
                $("#IsActive").prop("checked", true);
            }
            else {
                $("#IsActive").prop("checked", false);
            }
            $("#AccountTypeID option").each(function () {
                if ($(this).text() == $("#AccountTypeID")[0][json.AccountTypeID].innerHTML) {
                    $(this).attr('selected', 'selected');
                }
            });
            $("#CityEdit option").each(function () {
                if ($(this).text() == $("#CityEdit")[0][json.CityId].innerHTML) {
                    $(this).attr('selected', 'selected');
                }
            });
            $("#LegalStructure option").each(function () {
                if ($(this).text() == $("#LegalStructure")[0][json.LegalStructure].innerHTML) {
                    $(this).attr('selected', 'selected');
                }
            });
        }
    });


}
function ContractorProfilePage() {
    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];

    window.location.href = "/Profiles/ContractorProfile?userId=" + Id;

}


function BindGetAllRoles() {
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
            $("#CityEdit").html('');
            $("#CityEdit").append("<option value='0' > Please select</option>");
            var html = "";
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var CityName = json[index].CityName;
                html += "<option value=" + Id + ">" + CityName + "</option>";
            });
            $("#CityEdit").append(html);
        },

        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        }

    });

}

function init(jQuery) {
    var ProId = 0;

    BindGetAllRoles();
    BindGetAllUser();
    bindGetCity();
    
}




$(document).ready(init);