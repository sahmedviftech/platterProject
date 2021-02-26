
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



//function validate_NextFORM() {
//    var isValid = true;
//    //if ($("#gallery-photo-add").val() == "") {
//    //    $('#gallery-photo-add').css('border', '1px solid Red');
//    //    isValid = false;
//    //}
//    //else {
//    //    $('#gallery-photo-add').css('border', 'none');
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
//    if ($('#PostalCode').val() == "") {
//        $('#PostalCode').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#PostalCode').css('border', 'none');
//    }
//    var email = $("#Email").val();
//    var valid = validateEmail(email);
//    if (!valid) {
//        $("#Email").css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $("#Email").css('border', 'none');
//    }
//    return isValid;
//}



//function validate_ContractorProfileFORM() {
//    var isValid = true;    
//    if ($('#AccountTypeID').val() == "0") {
//        $('#AccountTypeID').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#AccountTypeID').css('border', 'none');
//    }
//    if ($('#NumberOfEmployee').val() == "0") {
//        $('#NumberOfEmployee').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#CityEdit').css('border', 'none');
//    }    
//    if ($('#InBusinessSince').val() == "0") {
//        $('#InBusinessSince').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#InBusinessSince').css('border', 'none');
//    }
//    if ($("#LegalStructure").val() == "") {
//        $('#LegalStructure').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#LegalStructure').css('border', 'none');
//    }
//    if ($("#Licenses").val() == "") {
//        $('#Licenses').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#Licenses').css('border', 'none');
//    }    
//    if ($("#Certificates").val() == "") {
//        $('#Certificates').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#Certificates').css('border', 'none');
//    }
//    if ($("#Awards").val() == "") {
//        $('#Awards').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#Awards').css('border', 'none');
//    }
//    if ($("#CompanyOverview").val() == "") {
//        $('#CompanyOverview').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#CompanyOverview').css('border', 'none');
//    }
//    if ($("#Brands").val() == "") {
//        $('#Brands').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#Brands').css('border', 'none');
//    }
//    if ($("#Styles").val() == "") {
//        $('#Styles').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#Styles').css('border', 'none');
//    }    
//    if ($("#Products").val() == "") {
//        $('#Products').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#Products').css('border', 'none');
//    }    
//    if ($("#Specialties").val() == "") {
//        $('#Specialties').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#Specialties').css('border', 'none');
//    }
//    if ($("#PaymentMethods").val() == "") {
//        $('#PaymentMethods').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#PaymentMethods').css('border', 'none');
//    }    
//    if ($("#Diplomas").val() == "") {
//        $('#Diplomas').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#Diplomas').css('border', 'none');
//    }    
//    if ($("#Warranty").val() == "") {
//        $('#Warranty').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#Warranty').css('border', 'none');
//    }
//    if ($("#CompanyName").val() == "") {
//        $('#CompanyName').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#CompanyName').css('border', 'none');
//    }
//    if ($("#BusinessAddress").val() == "") {
//        $('#BusinessAddress').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#BusinessAddress').css('border', 'none');
//    }
//   //email check
//     var ainputtxt2 = $('#BusinessPhoneNumber').val();
//    var phoneno2 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
//    //if(inputtxt.value.match(phoneno)
//    if (ainputtxt2.match(phoneno2)) {
//        $('#BusinessPhoneNumber').css('border', 'none');
//    }
//    else {
//        $('#BusinessPhoneNumber').css('border', '1px solid Red');
//        isValid = false;
//    }
//    return isValid;
//}


function validate_SaveContractorCategories() {
    var isValid = true;
    if ($('#CategoryAdd').val() == "0") {
        $('#CategoryAdd').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CategoryAdd').css('border', 'none');
    }



    return isValid;
}

function validate_SaveContractorCities() {
    var isValid = true;
    if ($('#CityAdd').val() == "0") {
        $('#CityAdd').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CityAdd').css('border', 'none');
    }



    return isValid;
}

function bindConfrimPasswordChange() {
    $('#password, #confirm_password').on('keyup', function () {
        if ($('#password').val() == $('#confirm_password').val()) {
            $('#message').html('');
        } else
            $('#message').html('Not Matching').css('color', 'black');
    });
}
function UserContractor() {

    $("#CompanyName").parsley();
    $("#BusinessAddress").parsley();
    $("#BusinessPhoneNumber").parsley();
    $("#NumberOfEmployee").parsley();
    $("#InBusinessSince").parsley();
    $("#LegalStructure").parsley();
    $("#PostalCode").parsley();
    $("#Licenses").parsley();
    $("#Certificates").parsley();
    $("#Awards").parsley();
    $("#CommercialServices").parsley();
    $("#IndustrialServices").parsley();
    $("#Financing").parsley();
    $("#EmergencyService").parsley();
    $("#CompanyOverview").parsley();
    $("#Products").parsley();
    $("#Brands").parsley();
    $("#Styles").parsley();
    $("#Specialties").parsley();
    $("#PaymentMethods").parsley();
    $("#LiabilityInsurance").parsley();
    $("#Diplomas").parsley();
    $("#WrittenContract").parsley();
    $("#ProjectMinimum").parsley();
    $("#Warranty").parsley();
}

function CheckUserContractor() {
    event.preventDefault();
    var isvalid = true;
    if ($("#FirstName").parsley().validate() !== true) isvalid = false;
    if ($("#LastName").parsley().validate() !== true) isvalid = false;
    if ($("#PostalCode").parsley().validate() !== true) isvalid = false;
    //if ($("#PhoneNumber").parsley().validate() !== true) isvalid = false;
    if ($("#Email").parsley().validate() !== true) isvalid = false;
    if ($("#CompanyName").parsley().validate() !== true) isvalid = false;
    if ($("#BusinessAddress").parsley().validate() !== true) isvalid = false;
    if ($("#BusinessPhoneNumber").parsley().validate() !== true) isvalid = false;
    if ($("#NumberOfEmployee").parsley().validate() !== true) isvalid = false;
    if ($("#InBusinessSince").parsley().validate() !== true) isvalid = false;
    if ($("#LegalStructure").parsley().validate() !== true) isvalid = false;
    if ($("#Licenses").parsley().validate() !== true) isvalid = false;
    if ($("#Certificates").parsley().validate() !== true) isvalid = false;
    if ($("#Awards").parsley().validate() !== true) isvalid = false;
    if ($("#CommercialServices").parsley().validate() !== true) isvalid = false;
    if ($("#IndustrialServices").parsley().validate() !== true) isvalid = false;
    if ($("#Financing").parsley().validate() !== true) isvalid = false;
    if ($("#EmergencyService").parsley().validate() !== true) isvalid = false;
    if ($("#CompanyOverview").parsley().validate() !== true) isvalid = false;
    if ($("#Products").parsley().validate() !== true) isvalid = false;
    if ($("#Brands").parsley().validate() !== true) isvalid = false;
    if ($("#Styles").parsley().validate() !== true) isvalid = false;
    if ($("#Specialties").parsley().validate() !== true) isvalid = false;
    if ($("#PaymentMethods").parsley().validate() !== true) isvalid = false;
    if ($("#LiabilityInsurance").parsley().validate() !== true) isvalid = false;
    if ($("#Diplomas").parsley().validate() !== true) isvalid = false;
    if ($("#WrittenContract").parsley().validate() !== true) isvalid = false;
    if ($("#ProjectMinimum").parsley().validate() !== true) isvalid = false;
    if ($("#Warranty").parsley().validate() !== true) isvalid = false;
    return isvalid;
}

function CheckUserProfileparsleyValidation() {
    event.preventDefault();

    var isvalid = true;
    if ($("#FirstName").parsley().validate() !== true) isvalid = false;
    if ($("#LastName").parsley().validate() !== true) isvalid = false;
    //if ($("#PhoneNumber").parsley().validate() !== true) isvalid = false;
    if ($("#Email").parsley().validate() !== true) isvalid = false;
    if ($("#PostalCode").parsley().validate() !== true) isvalid = false;
    return isvalid;
}
function UserProfileparsleyValidation() {
    $("#FirstName").parsley();
    $("#LastName").parsley();
    $("#PostalCode").parsley();
    $("#PhoneNumber").parsley();
    $("#Email").parsley();

}

//function bindUpdateButton() {
$("#btnSave").click(function () {
    $('#btnSave').attr("disabled", "disabled");
    var cid = $("#checkcontractorid").text();
    var res, h, c;
    var data = false;

    UserProfileparsleyValidation();
    h = CheckUserProfileparsleyValidation();

    if (cid == 2 || cid == "2") {
        UserContractor();
        c = CheckUserContractor();
        if (h == true && c == true) {
            data = true;
        }
        else {
            $('#btnSave').attr("disabled", false);
            data = false
        }
    }
    else {

        if (h == true) {

            data = true;
        }
    }

    if (data == true) {
        var Id = $("#Id").val();
        var AccountTypeID = $("#AccountTypeID").val();
        var FirstName = $("#FirstName").val();
        var LastName = $("#LastName").val();
        var PhoneNumber = $("#PhoneNumber").val();
        var Email = $("#Email").val();
        var Password = $("#password").val();
        var CompanyName = $("#CompanyName").val();
        var BusinessAddress = $("#BusinessAddress").val();
        var BusinessPhoneNumber = $("#BusinessPhoneNumber").val();
        var NumberOfEmployee = $("#NumberOfEmployee").val();
        var InBusinessSince = $("#InBusinessSince").val();
        var LegalStructure = $("#LegalStructure").val();
        var PostalCode = $("#PostalCode").val();

        var Licenses = $("#Licenses").val();
        var Certificates = $("#Certificates").val();
        var Awards = $("#Awards").val();
        var CommercialServices = $("#CommercialServices").val();
        var IndustrialServices = $("#IndustrialServices").val();
        var Financing = $("#Financing").val();
        var EmergencyService = $("#EmergencyService").val();

        var CompanyOverview = $("#CompanyOverview").val();
        var Products = $("#Products").val();
        var Brands = $("#Brands").val();
        var Styles = $("#Styles").val();
        var Specialties = $("#Specialties").val();
        var PaymentMethods = $("#PaymentMethods").val();
        var LiabilityInsurance = $("#LiabilityInsurance").val();
        var Diplomas = $("#Diplomas").val();
        var WrittenContract = $("#WrittenContract").val();
        var ProjectMinimum = $("#ProjectMinimum").val();
        var Warranty = $("#Warranty").val();
        var WebsiteUrl = $("#WebsiteUrl").val();
        var InstagramUrl = $("#InstagramUrl").val();
        var FacebookUrl = $("#FacebookUrl").val();
        var TwitterUrl = $("#TwitterUrl").val();
        var YoutubeUrl = $("#YoutubeUrl").val();

        if ($('#IsActive').is(":checked")) {
            var IsActive = true;
        }
        else {
            var IsActive = false;
        }

        var record = {
            'Id': Id,
            'FirstName': FirstName,
            'LastName': LastName,
            'PhoneNumber': PhoneNumber,
            'PostalCode': PostalCode,
            'Email': Email,
            'Password': Password,
            'CompanyName': CompanyName,
            'BusinessAddress': BusinessAddress,
            'NumberOfEmployee': NumberOfEmployee,
            'InBusinessSince': InBusinessSince,
            'LegalStructure': LegalStructure,
            'BusinessPhoneNumber': BusinessPhoneNumber,
            'Licenses': Licenses,
            'Certificates': Certificates,
            'Awards': Awards,
            'CommercialServices': parseInt(CommercialServices),
            'IndustrialServices': parseInt(IndustrialServices),
            'Financing': parseInt(Financing),
            'EmergencyService': parseInt(EmergencyService),
            'CompanyOverview': CompanyOverview,
            'Products': Products,
            'Brands': Brands,
            'Styles': Styles,
            'Specialties': Specialties,
            'PaymentMethods': PaymentMethods,
            'LiabilityInsurance': parseInt(LiabilityInsurance),
            'Diplomas': Diplomas,
            'WrittenContract': parseInt(WrittenContract),
            'ProjectMinimum': ProjectMinimum,
            'Warranty': Warranty,
            'WebsiteUrl': WebsiteUrl,
            'InstagramUrl': InstagramUrl,
            'FacebookUrl': FacebookUrl,
            'TwitterUrl': TwitterUrl,
            'YoutubeUrl': YoutubeUrl,
            'IsActive': IsActive

        };
        //var checkValid = validate_ContractorProfileFORM();
        //if (checkValid == false) {
        //    return false;
        //} else {
        $.ajax({
            type: "POST",
            url: "/Profiles/Update",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                //alert("Update Profile SuccessFully");
                toastr.success("Profile UPDATED.", "Success");
                $('#btnSave').attr("disabled", false);
                window.location.reload = true;
            }
        });
    } else {
        toastr.error("Please fix error(s) on page", "Error");
    }
});
//}
function reloadValidity(id) {
    $('#' + id).css("border", "none");
}

function bindConfrimPasswordChange() {
    $('#password, #confirm_password').on('keyup', function () {
        if ($('#password').val() == $('#confirm_password').val()) {
            $('#message').html('');
        } else
            $('#message').html('Not Matching').css('color', 'black');
    });
}

function checkPassword(id) {
    if (Password == "") {
        $("#" + id).css("border", "1px solid red");
    }
    else {
        $('#' + id).css("border", "none");
    }
}

function showMOdal() {
    $("#Currentpassword").val("");
    $('#changepswrd').modal('show');
    $("#passUpdate").attr('dsiabled', true);
    $("#pasmsg").hide();
}


$("#passUpdate").on('click', function () {
    toastr.remove();
    var Id = $("#Id").val();
    var Password = $("#password").val();
    var confirm_password = $('#confirm_password').val();
    if (Password == "") {
        $("#password").css("border", "1px solid red");
    }
    else if (confirm_password != Password) {
        toastr.error("Password does not match", "Warning");
        $('#confirm_password').val('');
    }
    else {
        var record = {
            'Id': Id,
            'Password': Password
        };
        $.ajax({
            type: "POST",
            url: "/Profiles/PasswordUpdate",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                if (result) {
                    //toastr.success("Successfully Updated Password", "Success");
                    $('#changepswrd').modal('hide');
                }
            }
        });
    }
});


$("#changepswrd").on('hide.bs.modal', function () {
    //actions you want to perform after modal is closed. 
    $("#Currentpassword").val("");
    $("#passUpdate").attr('disabled', true);
    $("#pasmsg").hide();
});
function hideData(id) {
    $('#' + id).hide()
}

function CheckIsNUllPass(pass) {
    $("#pasmsg").hide();
    if (pass == "" || pass == null) {
        $("#pasmsg").show();
        $("#passUpdate").attr('disabled', true);
        return false;
    }
    return true;
}

function CheckCurrentPass() {

    var Password = $("#Currentpassword").val();
    var ceckIsnull = CheckIsNUllPass(Password);
    if (ceckIsnull == false) {

        return false
    }
    else {
        var record = {
            Password: Password
        };
        $.ajax({
            type: "POST",
            url: "/Profiles/CurrentPassMatch",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                if (result == true) {
                    $("#passUpdate").attr('disabled', false);

                }
                else {
                    $("#pasmsg").show();
                    $("#passUpdate").attr('disabled', true);
                    toastr.error("password not match", "Warning");
                }
            }
        });
    }
}

function bindDeleteGalImage(Id) {


    //var Id = $("#Id").val();

    //var record = {
    //    'Id': Id,              
    //};

    $.ajax({
        type: "POST",
        url: "/Profiles/DeleteGalImage?id=" + Id,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        //data: JSON.stringify(record),
        data: '{ Id: "' + Id + '" }',
        success: function (result) {
            // location.reload();
        }
    });

}

$("#profile-img").on("change", function () {
    //readURL(this);

    var userId = $("#Id").val();
    var Path = "";
    var file = $("#profile-img").get(0).files;

    var data = new FormData;
    data.append("ImagesPath", file[0]);
    data.append("UserId", userId);

    $.ajax({
        type: "Post",
        url: "/Profiles/UploadImage",
        data: data,
        contentType: false,
        processData: false,
        success: function (response) {
            //$('#profile-img-tag').attr('src', response.ImagesURL);
            toastr.success("Successfully Upload Image", "Success");
            $('#blah').attr('src', response.ImagesURL);

            // alert(response);
        }
    })

});


//$("#gallery-photo-add").change(function () {        
//        var userId = $("#Id").val();        
//        var file = $("#gallery-photo-add").get(0).files;
//        //readURL1(file);
//        var data = new FormData;
//        for (i = 0; i < file.length; i++) {            
//            if (i < MaxUploadLimit) {
//                if (imgcount < MaxUploadLimit) {
//                    data.append("GalImagePath", file[i]);
//                }
//            }
//        }
//        data.append("UserId", userId);
//        $.ajax({
//            type: "Post",
//            url: "/Profiles/UploadGalleryImage",
//            data: data,
//            contentType: false,
//            processData: false,
//            success: function (response) {
//                if (file.length < MaxUploadLimit) {
//                    alert("only " + MaxUploadLimit + " Images uploaded");
//                }
//                location.reload();
//                //todo
//                //$('#GalleryImgSection').chil
//                //bindDeleteGalImage(Id);
//                /* for (i = 0; i < response.ImagesUrl; i++) {
//                    var imgURL = response.ImagesUrl[i].
//                    $('#ProfileGalImg' + i).attr('src', response.ImagesUrl[i]);
//                }
//                */
//            }
//        })
//    });


$("#gallery-photo-add").change(function () {
    var userId = $("#Id").val();
    var img = $('#GalleryImgSection').find("img");
    var Currentlength = img.length;
    var file = $("#gallery-photo-add").get(0).files;
    //readURL1(file);
    var chkMaxLength = Currentlength + file.length;
    if (chkMaxLength > MaxUploadLimit) {
        //toastr.warning("only " + MaxUploadLimit + " Images uploaded", "Warning");

        if (Currentlength == 6) {
            toastr.warning("You can only upload _ images", "Error");
        } else {
            var CanImage = MaxUploadLimit - Currentlength;
            toastr.warning("You can only " + CanImage + " image upload", "Error");
        }
        $("#gallery-photo-add").val("");
        return;
    } else {
        var data = new FormData;
        for (i = 0; i < file.length; i++) {

            if (i < MaxUploadLimit) {
                if (imgcount < MaxUploadLimit) {
                    data.append("GalImagePath", file[i]);
                }
            }
        }
        data.append("UserId", userId);
        $.ajax({
            type: "Post",
            url: "/Profiles/UploadGalleryImage",
            data: data,
            contentType: false,
            processData: false,
            success: function (response) {


                var WrapperLenght = $('#GalleryImgSection').find("img").length;
                for (var i = WrapperLenght; i > Currentlength; i--) {
                    $('#GalleryImgSection').children().last().remove();
                }

                for (var i = 0; i < response.ImagesURL.length; i++) {
                    $('#GalleryImgSection').append('<img src="' + response.ImagesURL[i] + '" id="profile-img-tag" /><span class="img_nam mr-3"></span></span ><i class="fa fa-trash  btnDeleteImage" id="btnDeleteLastImage" ></i>');
                    //onclick = "bindDeleteGalImage(' + response.ImageIds[i] + ')"
                    $('#GalleryImgSection').append('<input type="hidden" class="hiddenIds" value="' + response.ImageIds[i] + '" />');
                    $('#GalleryImgSection').append('<label class="hiddenImgUrls" style="display:none;">' + response.ImagesURL[i] + '</label>');

                }
                $('.btnDeleteImage').on("click", function (e) {

                    var msg = confirm("Are you sure you want to delete this image?");
                    if (msg == true) {


                        var thisImgId = this.nextSibling.value;
                        var thisImageURl = this.nextSibling.nextSibling.innerText;
                        this.previousSibling.previousSibling.remove();
                        toastr.success("Image Deleted !", "Success");
                        this.previousSibling.remove();
                        this.remove();
                        bindDeleteGalImage(thisImgId);

                    }
                });






                //var WrapperLenght = $('#GalleryImgSection').find("img").length;
                //for (var i = WrapperLenght; i > Currentlength; i--) {
                //    $('#GalleryImgSection').children().last().remove();
                //}
                //for (var i = 0; i < response.ImagesURL.length; i++) {
                //    $('#GalleryImgSection').append('<img src="' + response.ImagesURL[i] + '" id="profile-img-tag" /><span class="img_nam mr-3"></span></span ><i class="fa fa-trash" id="btnDeleteLastImage" onclick="bindDeleteGalImage(' + response.ImageIds[i] + ')"></i>');
                //}
            }
        })
    }
});

$('.btnDeleteImage').on("click", function (e) {
    var msg = confirm("Are you sure you want to delete this image?");
    if (msg == true) {
        var thisImgId = this.nextSibling.nextSibling.value;
        var thisImageURl = this.nextSibling.nextSibling.nextElementSibling.innerText;
        this.previousSibling.previousSibling.previousSibling.remove();
        this.previousSibling.previousSibling.remove();
        toastr.success("Image Deleted !", "Success");
        this.previousSibling.remove();
        this.remove();
        bindDeleteGalImage(thisImgId);
    }

})

function BindAddReviewsLastSeen() {

    $.ajax({
        type: "POST",
        url: "/Profiles/AddReviewsLastSeen",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

        }
    });

}

$('#profile-tab').on('click', function () {
    var CServ = $('#CommercialServices_hf').val();
    var IServ = $('#IndustrialServices_hf').val();
    var Finc = $('#Financing_hf').val();
    var EmgIn = $('#EmergencyService_hf').val();
    var Liab = $('#LiabilityInsurance_hf').val();
    var WCrctr = $('#WrittenContract_hf').val();
    var ProjMin = $('#ProjectMinimum_hf').val();

    $('#ProjectMinimum').val(ProjMin);
    $('#CommercialServices').val(CServ);
    $('#IndustrialServices').val(IServ);
    $('#Financing').val(Finc);
    $('#EmergencyService').val(EmgIn);
    $('#LiabilityInsurance').val(Liab);
    $('#WrittenContract').val(WCrctr);
});

function BindGetCategoryLByUserId() {


    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);
    $.ajax({
        type: "POST",
        url: "/Profiles/GetCategoryLByUserId?UserID=" + userId,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            $("#AdminAddCateg").html('');
            //$("#example").dataTable().fnDestroy();
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var CategoryName = json[index].CategoryName;
                var CategoryCharges = json[index].Charges;
                var Isactive = json[index].Status;
                var ContractorCatId = json[index].ContracCated;



                html = '<tr class="tbody-light">' +
                    '<td scope="row">' + Id + '</td>' +
                    '<td>' + CategoryName + '</td>' +
                    '<td>' + CategoryCharges + '</td>';

                if (Isactive == true) {
                    html += '<td>approved</td>';
                    html += '<td class="fa_table">' +
                        //<i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i>'+  data-target="#ApprovedmodalCategories"     onclick = "Edit(' + ContractorCatId + ')"
                        '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-edit" onclick="ShowContractorCategoryPendmodal(' + Id + ')"></i></a>' +

                        '</td>';
                } else {
                    html += '<td>Pending</td>';
                    html += '<td class="fa_table">' +
                        //<i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i>'+       data-target="#PendingmodalCategories"        onclick = "Edit(' + ContractorCatId + ')"              
                        '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-edit" onclick="ShowContractorCategoryAppmodal(' + Id + ')"></i></a>' +

                        '</td>';
                }

                html += '</tr>';
                $('#AdminAddCateg').append(html);
            });
            //$("#example").dataTable({
            //   // "order": [[4, "desc"]]
            //});


            //var json = JSON.parse(result);          
            //$("#InBusinessSince").val(json.InBusinessSince);               
            //$("#LegalStructure option").each(function () {
            //    if ($(this).text() == $("#LegalStructure")[0][json.LegalStructure].innerHTML) {
            //        $(this).attr('selected', 'selected');
            //    }
            //});
        }
    });


}

function BindGetCityLByUserId() {


    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);
    $.ajax({
        type: "POST",
        url: "/Profiles/GetCitiesLByUserId?UserID=" + userId,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{}',
        success: function (result) {
            //$("#AdminAddCit").empty();
            var json = JSON.parse(result);
            $("#AdminAddCit").html('');
            //$("#example1").dataTable().fnDestroy();
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var CityName = json[index].CityName;
                var CityCharges = json[index].Charges;
                var Isactive = json[index].Status;
                var ContractorCitId = json[index].ContracCityId;

                html = '<tr class="tbody-light">' +
                    '<td scope="row">' + Id + '</td>' +
                    '<td>' + CityName + '</td>' +
                    '<td>' + CityCharges + '</td>';

                if (Isactive == true) {
                    html += '<td>approved</td>';
                    html += '<td class="fa_table">' +
                        //<i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i>'+         onclick = "Edit(' + ContractorCitId + ')"
                        //'<a href="javascript:;" data-toggle="modal" data-target="#ApprovedmodalCities"><i class="fa fa-edit" onclick="GetId(' + Id + ')" ></i></a>' +
                        '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-edit" onclick="ShowContractorCityPendmodal(' + Id + ')"></i></a>' +

                        '</td>';
                } else {
                    html += '<td>Pending</td>';
                    html += '<td class="fa_table">' +
                        //<i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i>'+          onclick = "Edit(' + ContractorCitId + ')"
                        //'<a href="javascript:;" data-toggle="modal" data-target="#PendingmodalCities"><i class="fa fa-edit" onclick="GetId(' + Id + ')"></i></a>' +
                        '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-edit" onclick="ShowContractorCityAppmodal(' + Id + ')"></i></a>' +

                        '</td>';
                }
                //'<td>' + Isactive + '</td>' +
                //'<td class="fa_table">'+
                ////<i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i>'+
                //       '<a href="javascript:;" data-toggle="modal" data-target="#PendingmodalCities"><i class="fa fa-edit" onclick = "Edit(' + ContractorCitId + ')"></i></a>' +

                //'</td>' +
                html += '</tr>';
                $('#AdminAddCit').append(html);
            });
            //$("#example1").dataTable({
            //    //"order": [[4, "desc"]]
            //});
            //$("#InBusinessSince").val(json.InBusinessSince);

            //$("#LegalStructure option").each(function () {
            //    if ($(this).text() == $("#LegalStructure")[0][json.LegalStructure].innerHTML) {
            //        $(this).attr('selected', 'selected');
            //    }
            //});
        }
    });


}


function bindGetCity() {
    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);
    $.ajax({

        type: "POST",
        url: "/Profiles/GetCity?UserId=" + userId,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        //data: '{UserId: ' + UserId + '}',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            //$("#CityAdd").html('');
            //$("#CityAdd").append("<option value='0' >Select City</option>");
            var html = "";
            $("#CityAdd").html('');
            $("#CityAdd").append("<option value='0' >Select City</option>");
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var CityName = json[index].CityName;
                var Charges = json[index].Charges;
                html += "<option value=" + Id + ">" + CityName + "(" + Charges + ") </option>";
            });
            $("#CityAdd").append(html);
        },

        failure: function (response) {
            //alert(response.responseText);
        },
        error: function (response) {
            //alert(response.responseText);
        }

    });

}


function GetCategory() {
    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);
    $.ajax({
        type: "POST",
        url: "/Profiles/GetCategory?UserId=" + userId,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        // data: '{UserId: ' + UserId + '}',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            var html = "";
            $("#CategoryAdd").html('');
            $("#CategoryAdd").append("<option value='0' >Select Category</option>");
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var Category = json[index].CategoryName;
                var Charges = json[index].Charges;
                html += "<option value=" + Id + ">" + Category + "(" + Charges + ") </option>";
            });
            $("#CategoryAdd").append(html);

        }
    });

}


$("#btnSaveCategories").click(function () {

    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);


    var CategoryId = $("#CategoryAdd").val();
    $("#btnSaveCategories").prop('disabled', true);
    var record = {
        'CategoryId': CategoryId,
        'UserId': userId
    };
    var checkValid = validate_SaveContractorCategories();
    if (checkValid == false) {
        return false;
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Profiles/SaveContratorCategories",
            async: false,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                if (result.MessageTitle = "Record has been successful") {
                    toastr.success("Add Successfully", "Success");
                    $("#btnSaveCategories").prop('disabled', false);
                }

                BindGetCategoryLByUserId()
                GetCategory();
            }
        });
    }
});



$("#btnSaveCities").click(function () {

    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);


    var CityId = $("#CityAdd").val();
    $("#btnSaveCities").prop('disabled', true);
    var record = {
        'Id': CityId,
        'UserId': userId
    };
    var checkValid = validate_SaveContractorCities();
    if (checkValid == false) {
        return false;
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Profiles/SaveContratorCities",
            async: false,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                if (result.MessageTitle = "Record has been successful") {
                    toastr.success("Add Successfully", "Success");
                    $("#btnSaveCities").prop('disabled', false);
                }
                $("#CityNameEdit").val('');
                $("#ProvinceIdEdit").val('');
                BindGetCityLByUserId();

                bindGetCity();
            }
        });
    }
});





function ApprovedRejectedCategory(id) {
    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);
    var url = '/Profiles/SaveRejectedAppAndPenCategories';


    var status = false;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{ Id: "' + id + '",IsDeleted: "' + status + '" ,UserId: "' + userId + '" }',
        success: function (result) {


            $("#PendingmodalCategories").modal("hide");
            //window.location.reload() = true;
            BindGetCategoryLByUserId();
        }
    });
    // });
}
function ApprovedCategory(id) {
    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);
    var url = '/Profiles/SaveAppAndPenCategories';

    var status = true;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{ Id: "' + id + '",Status: "' + status + '" ,UserId: "' + userId + '" }',
        success: function (result) {
            // $("#example > tbody:last").children().remove();

            $("#PendingmodalCategories").modal("hide");
            //  window.location.reload() = true;
            BindGetCategoryLByUserId();
        }
    });
    //   });
}
function ShowContractorCategoryAppmodal(id, a) {


    //if(a==1){
    $("#PendingmodalCategories").modal("show");

    //$("#DeleteId").attr('data-id', id);
    $("#btnSaveApprovedCate").on('click').click(function () {
        $("#example tr:gt(0)").remove();

        ApprovedCategory(id);
    });
    $("#btnSaveAppRejectedCate").off('click').click(function () {
        $("#example tr:gt(0)").remove();

        ApprovedRejectedCategory(id);
    });
    //}
    //else{
    //    $("#PendingmodalCategories").modal("show");
    //    //$("#DeleteId").attr('data-id', id);
    //    $("#btnSavePendingCate").click(function () {
    //        PendingCategory(id);
    //    });
    //    $("#btnSaveAppRejectedCate").click(function () {
    //        PendingRejectedCategory(id);
    //    });

    //}



}


function PendingRejectedCategory(id) {
    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);
    var url = '/Profiles/SaveRejectedAppAndPenCategories';


    var status = false;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{ Id: "' + id + '",IsDeleted: "' + status + '" ,UserId: "' + userId + '" }',
        success: function (result) {


            $("#ApprovedmodalCategories").modal("hide");
            //window.location.reload() = true;
            BindGetCategoryLByUserId();

        }
    });
    //});
}
function PendingCategory(id) {
    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);
    var url = '/Profiles/SaveAppAndPenCategories';

    var status = false;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{ Id: "' + id + '",Status: "' + status + '" ,UserId: "' + userId + '" }',
        success: function (result) {

            $("#ApprovedmodalCategories").modal("hide");
            //window.location.reload() = true;
            BindGetCategoryLByUserId();
        }
    });
    //});
}
function ShowContractorCategoryPendmodal(id, a) {


    //if(a==1){


    $("#ApprovedmodalCategories").modal("show");

    $("#btnSavePendingCate").off('click').click(function () {
        $("#example tr:gt(0)").remove();
        PendingCategory(id);
    });
    $("#btnSavePenRejectedCate").off('click').click(function () {
        $("#example tr:gt(0)").remove();
        PendingRejectedCategory(id);
    });




}

function ApprovedRejectedCity(id) {
    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);
    var url = '/Profiles/SaveRejectedAppAndPenCities';


    var status = false;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{ Id: "' + id + '",IsDeleted: "' + status + '",UserId: "' + userId + '"  }',
        success: function (result) {


            $("#PendingmodalCities").modal("hide");
            //window.location.reload() = true;
            BindGetCityLByUserId();
        }
    });
    // });
}
function ApprovedCity(id) {
    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);
    var url = '/Profiles/SaveAppAndPenCities';

    var status = true;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: 'json',
        data: '{ Id: "' + id + '",Status: "' + status + '",UserId: "' + userId + '"  }',
        success: function (result) {


            $("#PendingmodalCities").modal("hide");
            //window.location.reload() = true;
            BindGetCityLByUserId();
        }
    });
    //   });
}
function ShowContractorCityAppmodal(id, a) {


    //if(a==1){
    $("#PendingmodalCities").modal("show");

    //$("#DeleteId").attr('data-id', id);
    $("#btnSaveApprovedCity").off('click').click(function () {
        $("#example1 tr:gt(0)").remove();
        ApprovedCity(id);
    });
    $("#btnSaveAppRejectedCity").off('click').click(function () {
        $("#example1 tr:gt(0)").remove();
        ApprovedRejectedCity(id);
    });
    //}
    //else{
    //    $("#PendingmodalCategories").modal("show");
    //    //$("#DeleteId").attr('data-id', id);
    //    $("#btnSavePendingCate").click(function () {
    //        PendingCategory(id);
    //    });
    //    $("#btnSaveAppRejectedCate").click(function () {
    //        PendingRejectedCategory(id);
    //    });

    //}



}


function PendingRejectedCity(id) {
    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);
    var url = '/Profiles/SaveRejectedAppAndPenCities';


    var status = false;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: 'json',
        data: '{ Id: "' + id + '",IsDeleted: "' + status + '" ,UserId: "' + userId + '" }',
        success: function (result) {


            $("#ApprovedmodalCities").modal("hide");
            //window.location.reload() = true;
            BindGetCityLByUserId();
        }
    });
    //});
}
function PendingCity(id) {
    var Id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
    var userId = parseInt(Id);
    var url = '/Profiles/SaveAppAndPenCities';

    var status = false;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{ Id: "' + id + '",Status: "' + status + '",UserId: "' + userId + '" }',
        success: function (result) {

            $("#ApprovedmodalCities").modal("hide");
            BindGetCityLByUserId();
            //window.location.reload() = true;
        }
    });
    //});
}
function ShowContractorCityPendmodal(id, a) {


    //if(a==1){


    $("#ApprovedmodalCities").modal("show");

    $("#btnSavePendingCity").off('click').click(function () {
        $("#example1 tr:gt(0)").remove();
        PendingCity(id);
    });
    $("#btnSavePenRejectedCity").off('click').click(function () {
        $("#example1 tr:gt(0)").remove();
        PendingRejectedCity(id);
    });




}

function SetSelectValue() {
    var csval = $("#CommercialServices_hf").val();
    $("#CommercialServices").val(csval).change();

    var isval = $("#IndustrialServices_hf").val();
    $("#IndustrialServices").val(isval).change()

    var fval = $("#Financing_hf").val();
    $("#Financing").val(fval).change()

    var esval = $("#EmergencyService_hf").val();
    $("#EmergencyService").val(esval).change()

    var lival = $("#LiabilityInsurance_hf").val();
    $("#LiabilityInsurance").val(lival).change()

    var wcval = $("#WrittenContract_hf").val();
    $("#WrittenContract").val(wcval).change()

    var pmval = $("#ProjectMinimum_hf").val();
    $("#ProjectMinimum").val(pmval).change()

}


function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
}



$('#next-btn').click(function (e) {
    // var checkValid = validate_NextFORM();        
    //if (checkValid == true) {
    e.preventDefault();
    $('#myTab a[href="#profile"]').tab('show');
    //}
    //else {
    //}
});





function init(jQuery) {

    SetSelectValue();
    var cid = $("#checkcontractorid").text();
    if (cid == 2 || cid == "2") {
        UserContractor();
    }

    UserProfileparsleyValidation();
    $("#passUpdate").attr('disabled', true);
    //$("#pasmsg").hide();
    $('.loader').css("display", "none");
    bindConfrimPasswordChange();
    //$(".check").attr('disabled','true')
    $(".cstm_upload_img").click(function () {
        $("#gallery-photo-add").click();
    });

    var id = 0;
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()

    });
    BindGetCategoryLByUserId();
    BindGetCityLByUserId();
    GetCategory();
    bindGetCity();
    // bindPasswordUpdate();
    //bindDeleteGalImage(Id);
    //BindAddReviewsLastSeen();
    //$('input[type="file"]').each(function () {
    //    // get label text
    //    var label = $(this).parents('.form-group').find('label').text();
    //    label = (label) ? label : 'Upload image/click';

    //    // wrap the file input
    //    $(this).wrap('<div class="input-file"></div>');
    //    // display label
    //    $(this).before('<span class="btn"> <i class="fa fa-plus mr-2"></i>' + label + '</span>');
    //    // we will display selected file here
    //    $(this).before('<span class="file-selected"></span>');

    //    // file input change listener 
    //    $(this).change(function (e) {
    //        // Get this file input value
    //        var val = $(this).val();

    //        // Let's only show filename.
    //        // By default file input value is a fullpath, something like 
    //        // C:\fakepath\Nuriootpa1.jpg depending on your browser.
    //        var filename = val.replace(/^.*[\\\/]/, '');

    //        // Display the filename
    //        //$(this).siblings('.file-selected').text(filename);
    //    });
    //});

    //// Open the file browser when our custom button is clicked.
    //$('.input-file .btn').click(function () {
    //    $(this).siblings('input[type="file"]').trigger('click');
    //});



    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(function () {
        // Multiple images preview in browser
        $('.yearpicker').yearpicker();
        var imagesPreview = function (input, placeToInsertImagePreview) {

            if (input.files) {
                var filesAmount = input.files.length;

                for (i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();

                    reader.onload = function (event) {
                        $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                    }

                    reader.readAsDataURL(input.files[i]);
                }
            }

        };

        $('#gallery-photo-add').on('change', function () {
            imagesPreview(this, 'div.gallery');
        });
    });



}

$(document).ready(init);





//function readURL(input) {
//    if (input.files && input.files[0]) {
//        var reader = new FileReader();
//        reader.onload = function (e) {
//            
//            $('#profile-img-tag').attr('src', e.target.result);
//        }
//        reader.readAsDataURL(input.files[0]);
//    }
//}

//function readURL1(input) {
//    
//    if (input.files) {
//        for (i = 0; i < input.files.length; i++) {
//            var reader = new FileReader();
//            reader.onload = function (e) {
//                $('#ProfileGalImg' + i).attr('src', input.files[i]);
//            }
//            reader.readAsDataURL(input.files[0]);
//        }
//    }
//}









