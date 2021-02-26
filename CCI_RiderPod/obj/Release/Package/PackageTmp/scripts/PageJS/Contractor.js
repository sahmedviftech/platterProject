//import { debug } from "console";



function setfields(id) {
    $("#" + id).css("border", "2px solid #c8c8c8");
}

//$("#btnsave1").click(function () {
//    var HomeownerId = 0;
//    var ContractorId = $("#contratorId").val();
//    var CreatedBy = 0;
//    QualityOfWork = $("#input1").val();
//    Timeliness = $("#input2").val();
//    StayedInBudget = $("#input3").val();
//    Communication = $("#input4").val();
//    Cleanliness = $("#input5").val();
//    Courteous = $("#input6").val();
//    var Title = $("#title").val();
//    var Description = $("#Description").val();
//    var record = {
//        'HomeownerId': HomeownerId,
//        'ContractorId': ContractorId,
//        'QualityOfWork': QualityOfWork,
//        'Timeliness': Timeliness,
//        'StayedInBudget': StayedInBudget,
//        'Communication': Communication,
//        'Cleanliness': Cleanliness,
//        'Courteous': Courteous,
//        'CreatedBy': CreatedBy,
//        'Title': Title,
//        'Description': Description,
//    };
//    $.ajax({
//        type: "POST",
//        url: "/Contractor/Save",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: JSON.stringify(record),
//        success: function (result) {
//            if (result) {
//                //added by hamza 8 march
//                //start
//                toastr.success("Review Submit Successfully", "Success");
//            }
//            else {
//                toastr.error("Something went wrong", "Warning");
//                //end
//            }
//        }
//    });
//});


$('#reviewForm').on('submit', function (event) {
    event.preventDefault();
    if ($('#reviewForm').parsley().isValid()) {

        toastr.remove();
        $('#btnsave1').attr('disabled', true);
        var location = window.location;
        var HomeownerId = 0;
        var ContractorId = $("#contratorId").val();
        var CreatedBy = 0;

        QualityOfWork = $("#input1").val();
        Timeliness = $("#input2").val();
        StayedInBudget = $("#input3").val();
        Communication = $("#input4").val();
        Cleanliness = $("#input5").val();
        Courteous = $("#input6").val();
        var Title = $("#title").val();
        //var Description = $("#Description").val();
        var Description = $("#Description").text();

        //if (Title == "") {
        //    $("#title").css("border", "2px solid red");
        //    $('#btnsave1').attr('disabled', false);
        //} else if (Description == "") {
        //    $("#Description").css("border", "2px solid red");
        //    $('#btnsave1').attr('disabled', false);
        //} else {
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
        };
        $.ajax({
            type: "POST",
            url: "/Contractor/Save",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {

                if (result != "Failed") {
                    toastr.success("Success! RED FLAG submitted to Homii team for review.", "Success");
                    $('#write-a-review').modal('hide');
                    window.location.href = location;

                }
                else {
                    toastr.error("Something went wrong", "Warning");
                    $('#btnsave1').attr('disabled', false);
                }
            }
        });
    }
    else {
        $('#btnsave1').attr('disabled', false);
    }
});

//function FavouriteContractor(ID) {
//    var url = '/SearchContractor/FavouriteContractor';
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ ContractorId: "' + ID + '" }',
//        success: function (result) {
//        }
//    });
//}

//function GetFavouriteContractor(ID) {    
//    var url = '/SearchContractor/GetFavouriteContractor?ContractorId=' + ID;
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        success: function (result) {            
//            //if (result != null) {
//            //    $("#FavouriteContractor").css("color", "red");
//            //}
//        }
//    });
//}
function SetTotalAmountValue() {
    var CategoryCharges = 0;
    var counts = 0;
    var TotalCharges = 0;
    var CatCharges = [];
    var Category = [];
    var CategoriesCharges = [];

    var Count = $('#ContractorCategory').children().length;
    var data = [];
    var id = [];
    var AmountCount = 0;
    for (var i = 1; i <= Count; i++) {
        if ($('#chkCategory' + i + '').is(":checked")) {
            CatCharges.push($('#lblCharges' + i + '').text());
            CategoryCharges = CatCharges[AmountCount];
            TotalCharges = TotalCharges + parseInt(CategoryCharges);
        }
    }
    $("#totalamount").text(TotalCharges.toString());
}

function CreateGroupChannel(UserId, HomeownerId, CName, HName) {
    //old //APP_ID = 808C2226-5F1F-4A96-8431-48D2E07DEEE1

    //var APP_ID = "B2B25309-3243-400F-9E29-0BC89B7F5C56";
    var APP_ID = "8355AD72-4081-4FF6-90E5-C371ADEB465F";
    var USER_ID = UserId;
    //var Tocken_Api = "ebbc16b4c72d469764a617c40d821cea5007dacc";
    var CHANNEL_URL = "";
    var sb = new SendBird({ appId: APP_ID });

    sb.connect(USER_ID, function (user, error) {
        if (error) {
            return;
        }
    });
    var contractorName = '' + CName + '';
    var HomwownerName = '' + HName + '';
    var userIds = [UserId, HomeownerId];
    var IS_DISTINCT = true;
    var NAME = '' + contractorName + ' ~ ' + HomwownerName + '';
    var COVER_IMAGE_OR_URL = "";
    var DATA = "" + contractorName + "";
    var CUSTOM_TYPE = "progress";

    sb.GroupChannel.createChannelWithUserIds(userIds, IS_DISTINCT, NAME, COVER_IMAGE_OR_URL, DATA, CUSTOM_TYPE, function (groupChannel, error) {
        if (error) {
            return;
        }
        //joinGroupChannel(URL);
        window.location.href = "/Chats/Index?userid=" + HomeownerId + "&ChannelUrl=" + groupChannel.url;

        if (true) {
            $('#messaging_channel_list').append(
                '<div class="left-nav-channel left-nav-channel-group left-nav-channel-group--active" ' +
                '     onclick="joinGroupChannel(\'' + URL + '\')"' +
                '     data-channel-url="' + URL + '"' +
                '>' +
                '<div class="left-nav-channel-members">' + contractorName + '</div>' +
                '<div class="left-nav-channel-lastmessage"></div>' +
                '<div class="left-nav-channel-lastmessagetime"></div>' +
                '</div>'
            );
        }
        console.log(groupChannel);
    });

}

function BindGetAllCategories() {

    $.ajax({
        type: "POST",
        url: "/Contractor/GetCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            $("#example").dataTable().fnDestroy();
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
        url: "/Contractor/GetCities",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            $('.loader').css("display", "none");
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
    //$("#ScoldownCl").click(function () {

    //$('html, body').animate({ scrollTop: 3031 }, "SLOW");
    //$.scrollTo($('#ScrolReview'), 1000);


    //$('html, body').animate({
    //    scrollTop: $('#ScrolReview').offset().top
    //}, 1000, function () {

    //    // Add hash (#) to URL when done scrolling (default click behavior)
    //    window.location.hash = hash;
    //});
    //});
}


function init_InsertReview() {

    $('#conRepForm').parsley();
    $('#review').parsley();
    $('#reportadminForm').parsley();
    var QualityOfWork = 0;
    var Timeliness = 0;
    var StayedInBudget = 0;
    var Communication = 0;
    var Cleanliness = 0;
    var Courteous = 0;

    $("#input1").change(function () {
        QualityOfWork = $("#input1").val();

    });
    $("#input2").change(function () {
        Timeliness = $("#input2").val();

    });
    $("#input3").change(function (vote) {
        StayedInBudget = $("#input3").val();
    });
    $("#input4").change(function () {
        Communication = $("#input4").val();
    });
    $("#input5").change(function () {
        Cleanliness = $("#input5").val();
    });
    $("#input6").change(function () {
        Courteous = $("#input6").val();
    });



}


//function CommentReportSaveButton() {

var ids;
$(".ReportBt").click(function () {
    ids = $(this).attr('data-id');
});
$('#reportadminForm').on('submit', function (event) {
    //$("#ReportBtnSave").click(function () {
    event.preventDefault();
    if ($('#reportadminForm').parsley().isValid()) {
        // $("#ReportBtnSave").click(function () {
        $("#ReportBtnSave").prop('disabled', true);
        var ReviewId = ids;
        var Subject = "";
        var ContactInfo = "";
        var Description = "";
        var CreatedBy = 0;

        //ReviewId = $("#RewId").val();
        Subject = $("#txtSubjectHome").val();
        // ContactInfo =  $("#txtContactHome").val();
        Description = $("#txtDescriptionHome").val();


        var ReviewDate = $("#ReviewDate").val();
        var rew = $("#MyModal").attr('data-id');
        var record = {
            'ReviewId': ReviewId,
            'Subject': Subject,
            'Createdby': CreatedBy,
            'ReviewDate': ReviewDate,
            'ContactInfo': ContactInfo,
            'Description': Description,


        };
        $.ajax({
            type: "POST",
            url: "/Contractor/CommentSave",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                result = JSON.parse(result)
                if (result.MessageTitle == "Sign up has been successful") {
                    $("#txtSubjectHome").val("");
                    $("#txtDescriptionHome").val("");
                    toastr.success("Success! RED FLAG submitted to Homii team for review.", "Success");
                    $("#ReportBtnSave").prop('disabled', false);
                    $('#ReportToAdmin').modal('hide');
                }
                else {
                    $("#txtSubjectHome").val("");
                    $("#txtDescriptionHome").val("");
                    toastr.error("Report not submit", "Error");
                    $("#ReportBtnSave").prop('disabled', false);
                    $('#ReportToAdmin').modal('hide');
                }

            }
        });
    }
});


//}



function doCapture() {

    window.scrollTo(0, 0);
    html2canvas(document.getElementById("tojimage")).then(function (canvas) {
        var image = canvas.toDataURL("image/png", 0.9);
        image = image.replace('data:image/png;base64,', '');
        var id = location.href.split('?id=')[1];
        // location.href = "/contractor/generatecontraterimage?imagedata=" + image;
        $.ajax({
            type: 'POST',
            url: "/Contractor/generatecontraterimage",
            data: '{ "imageData" : "' + image + '","id":"' + id + '" }',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (path) {
                //alert(path);
            }
        });
    });
}


function BindUnSelectedCategories() {

    var id = location.href.split("=")[1];
    $.ajax({
        type: "POST",
        url: "/Contractor/GetUnSelectedCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{id : ' + id + '}',
        success: function (result) {
            var data = JSON.parse(result);
            var Unselectedwrapper = $('.Wrapper2');
            var Selectedwrapper = $('.Wrapper1');
            var i = 1;
            $.each(data, function (index, value) {

                if (value.Status == false) {
                    Unselectedwrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup" style="opacity:0.5;"><input id="chkUnselected' + i + '" name="option2" type="checkbox" checked/><label for="chkUnselected' + i + '">' + value.CategoryName + ' $' + value.Charges + '</label></div></form></div>');
                    i--;
                } else {
                    Selectedwrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><input id="chkSelected' + i + '" name="option2" type="checkbox" checked /><label for="chkSelected' + i + '">' + value.CategoryName + ' $' + value.Charges + '</label></div></form></div>');
                    i--;
                }
                i++;


            })
        }
    });



}
function BindUnSelectedCities() {

    var id = location.href.split("=")[1];
    $.ajax({
        type: "POST",
        url: "/Contractor/GetUnSelectedCities",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{id : ' + id + '}',
        success: function (result) {

            var data = JSON.parse(result);
            var Selectedwrapper = $('.SelectedCitiesWrapper');
            var Unselectedwrapper = $('.UnSelectedCitiesWrapper');
            var i = 1;
            $.each(data, function (index, value) {

                if (value.Status == false) {
                    Unselectedwrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup" style="opacity:0.5;"><input id="chkUnselectedCity' + i + '" name="option2" type="checkbox" checked/><label for="chkUnselectedCity' + i + '">' + value.CityName + ' $' + value.Charges + '</label></div></form></div>');
                    i--;
                } else {
                    Selectedwrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><input id="chkSelected' + i + '" name="option2" type="checkbox" checked /><label for="chkSelected' + i + '">' + value.CityName + ' $' + value.Charges + '</label></div></form></div>');
                    i--;
                }

                i++;

            })
        }
    });



}
function setCategoriestoUnSelected() {

    var Count = $('.Wrapper3').children().length;
    var data = [];
    var id = [];

    for (var i = 1; i <= Count; i++) {
        if ($('#chkPending' + i + '').is(":checked")) {
            //id[i - 1] = $('#lblPending' + i + '').text();
            id.push($('#lblPending' + i + '').text());
        }
    }

    data = { "CategoriesId": id };

    var jsonData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: "/Contractor/SetPendingCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{json: ' + jsonData + '}',
        success: function (result) {
            $("#addmore").html("");
            location.reload();

        }

    });
}
function setCitiestoUnSelected() {

    var Count = $('.PendingCitiesWrapper').children().length;
    var data = [];
    var id = [];

    for (var i = 1; i <= Count; i++) {
        if ($('#chkPendingCity' + i + '').is(":checked")) {
            id.push($('#lblPendingCity' + i + '').text());
            //id[i - 1] = $('#lblPendingCity' + i + '').text();
        }
    }

    data = { "CityIds": id };


    var jsonData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: "/Cities/SetPendingCities",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{json: ' + jsonData + '}',
        success: function (result) {
            $("#addmoreCities").html("");
            location.reload();

        }

    });
}
function BindAllPendingCategory() {

    var id = location.href.split("=")[1];
    $.ajax({
        type: "POST",
        url: "/Contractor/GetAllPendingCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{id : ' + id + '}',
        success: function (result) {
            var i = 1;
            var data = JSON.parse(result);
            var wrapper = $('.Wrapper3');

            $.each(data, function (index, value) {


                wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><label id="lblPending' + i + '" style="display:none;">' + value.Id + '</label><input id="chkPending' + i + '" name="option2" type="checkbox" /><label for="chkPending' + i + '">' + value.CategoryName + ' $' + value.Charges + '</label></div></form></div>');



                i++;
            })
        }
    });



}
function BindAllPendingCities() {
    var id = location.href.split("=")[1];
    $.ajax({
        type: "POST",
        url: "/Contractor/GetAllPendingCities",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{id : ' + id + '}',
        success: function (result) {
            var i = 1;
            var data = JSON.parse(result);
            var wrapper = $('.PendingCitiesWrapper');

            $.each(data, function (index, value) {


                wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><label id="lblPendingCity' + i + '" style="display:none;">' + value.Id + '</label><input id="chkPendingCity' + i + '" name="option2" type="checkbox" /><label for="chkPendingCity' + i + '">' + value.CityName + ' $' + value.Charges + '</label></div></form></div>');



                i++;
            })
        }
    });



}


//$("#btnSaveContractReport").click(function () {
$('#conRepForm').on('submit', function (event) {
    //$("#btnSaveContractReport").click(function () {
    event.preventDefault();
    if ($('#conRepForm').parsley().isValid()) {
        $("#btnSaveContractReport").prop('disabled', true);
        var record = {
            'ContractorId': $("#txtContractorID").val(),
            'Subject': $("#txtSubject").val(),
            //'ContactInfo': $("#txtContact").val(),
            'Description': $("#txtDescription").val(),
        };
        $.ajax({
            type: "POST",
            url: "/Contractor/SaveContractorReport",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                //    if (result.MessageTitle == "Sign up has been successful") {
                $("#txtSubject").val("");
                $("#txtDescription").val("");
                toastr.success("RED FLAG submitted to Homii team for review.", "Success");
                $("#btnSaveContractReport").prop('disabled', false);
                $('#ContractorReport').modal('hide');
                //}
                //else {
                //    $("#txtSubject").val("");
                //    $("#txtDescription").val("");
                //    toastr.error("Report not submit", "Error");
                //    $('#ContractorReport').modal('hide');
                //}

                //$('#write-a-review').modal('hide');
                //window.location.href = location;


            }
        });
    }

});
$("#btnContractorReport").click(function () {
    $('#ContractorReport').modal('show');


});



//$("#ScoldownCl").click(function () {
//    $('html, body').animate({ scrollTop: 3031 }, "SLOW");
//});



function BindReviewsLastSeen() {

    $.ajax({
        type: "POST",
        url: "/Contractor/AddReviewsLastSeen",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

        }
    });

}


function init(jQuery) {
    doCapture();
    var a = location.href.split('res')[1];
    var url = a.split("=")[1];
    if (url == "1") {
        $('html, body').animate({
            scrollTop: $('#ScrolReview').offset().top
        }, 1000, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    }



}

$(document).ready(function (init) {

    // star rating init
    $(".rateYo").each(function (e) {

        var ChngRatevaluesEn = { 1: 'bad', 2: 'poor', 3: 'ok', 4: 'good', 5: 'super' };
        var ChngRatevaluesAr = { 1: 'bad-Ar', 2: 'poor-Ar', 3: 'ok-Ar', 4: 'good-Ar', 5: 'super-Ar' };
        var language = "english";
        var rating = $(this).attr("data-rating");
        $(this).rateYo({
            onSet: function (rating) {
                if (language === "arabic") {
                    $(this).next().val(ChngRatevaluesAr[rating]);
                } else {
                    $(this).next().val(ChngRatevaluesEn[rating]);
                }
                $("#" + $(this).attr("id")).val(rating);
                ratingFunc(rating, $(this).next().next().val());
            },
            rating: rating,
            starWidth: "20px",
            numStars: 5,
            fullStar: true,
            normalFill: "#A0A0A0",
            spacing: "5px",
            precision: 2,
            // rtl: true,
            // readOnly: true,
        });
    });



    function ratingFunc(rating, bookid, lang) {
        ;
        if (lang != null) {
            language = lang;
        };

        // alert("selected star Rate is " + rating + " And Book id is " + bookid);
        //database call goes here!!!
    }

    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();

    $(".tab-slider--nav li").click(function () {
        $(".tab-slider--body").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
        if ($(this).attr("rel") == "tab2") {
            $('.tab-slider--tabs').addClass('slide');
        } else {
            $('.tab-slider--tabs').removeClass('slide');
        }
        $(".tab-slider--nav li").removeClass("active");
        $(this).addClass("active");
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    $('[data-fancybox="images"]').fancybox({
        afterLoad: function (instance, current) {
            var pixelRatio = window.devicePixelRatio || 1;

            if (pixelRatio > 1.5) {
                current.width = current.width / pixelRatio;
                current.height = current.height / pixelRatio;
            }
        }
    });
    $(".see-more").click(function () {

        $(this).text($(this).text() == 'SHOW LESS' ? 'SEE MORE' : 'SHOW LESS');

    });

    // See More Function
    $(".see-more").click(function () {
        $(".hide").each(function () {
            $(this).slideToggle();
        });
    });

    // Load More Function
    $(".testi-block").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 3).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });




    var RewID = 0;
    var user





    // CommentReportSaveButton();
    init_InsertReview();
    BindGetAllCategories();
    BindGetAllCities();
    //BindSelectedCategories();
    BindUnSelectedCategories();
    BindAllPendingCategory();
    //BindSelectedCities();
    BindUnSelectedCities();
    BindAllPendingCities();
    BindReviewsLastSeen();
});


$(document).ready(init);



//function getUserReviews(Id) {
//    var html = null;
//    
//    $.ajax({
//        type: "POST",
//        url: "/Contractor/GetReviewContractor",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ id: "' + Id + '"}',
//        success: function (result) {
//        }
//    });
//}

