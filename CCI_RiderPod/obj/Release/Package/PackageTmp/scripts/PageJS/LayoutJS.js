//function SessionLogout() {
//    var RedirectURLV = window.location.href;
//    $.ajax({
//        type: "POST",
//        url: "/Login/Logout?continues=" + RedirectURLV,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        //data: JSON.stringify(record),
//        success: function (result) {
//            window.location.href = "/Login/Index";
//        }
//    });
//}

//function SessionLogout() {
//    var RedirectURL = window.location.href;
//    $.ajax({
//        type: "POST",
//        url: "/Login/Logout",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        //data: JSON.stringify(record),
//        success: function (result) {
//            window.location.href = "/Login/Index";
//        }
//    });
//}

function SessionLogout(id) {
    var RedirectURLV = window.location.href;
    $.ajax({
        type: "POST",
        url: "/Login/Logout?continues=" + RedirectURLV + ">" + id,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        //data: JSON.stringify(record),
        async: false,
        success: function (result) {

            window.location.href = "/Login/Index";
        }
    });
}

//var waitTime = 30 * 60 * 1000;
var waitTime = 151200000;
setTimeout(SessionLogout, waitTime);
//setTimeout(SessionLogout, 60000);

//function setActivePage() {
//    var length = $('.pageURL').length;
//    var CurrentPage = location.pathname;
//    for (var i = 0; i < length; i++) {       
//        $('.recaaiv').parent().eq(i).removeClass("active")
//        var pathname = $('.pageURL')[i].pathname;
//        if (CurrentPage == pathname) {
//            $('.pageURL').parent().eq(i).addClass("active")
//            break;
//        }
//    }
//}

function setActivePage() {
    
    var length = $('.pageURL').length;
    var CurrentPage = location.pathname;
    for (var i = 0; i < length; i++) {
        
        $('.recaaiv').parent().eq(i).removeClass("active")
        var pathname = $('.pageURL')[i].pathname;
        if (CurrentPage == pathname) {
            $('.pageURL').parent().eq(i).addClass("active")
            break;
        } else if (CurrentPage == "/" + pathname.split("/")[1]) {
            $('.pageURL').parent().eq(i).addClass("active")
            break;
        }
    }
}


//function BindGetCountOfNewProject() {
//    var countPro = $("#CountNewList").val();

//    $.ajax({
//        type: "POST",
//        url: "/dashBoard/GetCountOfNewProject",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {

//            var json = JSON.parse(result);
//            //alert(json.CountNewProject);
//            if (countPro != json.CountNewProject) {

//                countPro = json.CountNewProject;
//                $("#CountNewList").html(json.CountNewProject);
//            }
//        }
//    });

//    var countPro = $("#CountNewListReview").val();

//    $.ajax({
//        type: "POST",
//        url: "/dashBoard/GetCountOfNewReview",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {

//            var json = JSON.parse(result);
//            //alert(json.CountNewProject);
//            if (countPro != json.CountNewReview) {
//                countPro = json.CountNewReview;
//                $("#CountNewListReview").html(json.CountNewReview);
//            }
//        }
//    });
//    //setInterval(BindGetCountOfNewProject, 30000);

//}
//    setTimeout(BindGetCountOfNewProject, 30000);
//function BindGetCountOfNewReview() {
//    var countPro = $("#CountNewListReview").val();

//    $.ajax({
//        type: "POST",
//        url: "/dashBoard/GetCountOfNewReview",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {

//            var json = JSON.parse(result);
//            //alert(json.CountNewProject);
//            if (countPro != json.CountNewReview) {
//                countPro = json.CountNewReview;
//                $("#CountNewListReview").html(json.CountNewReview);
//            }
//        }
//    });
//    //setInterval(BindGetCountOfNewProject, 30000);
//    //setTimeout(BindGetCountOfNewReview, 30000);
//}

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
            $("#CitiesListInner").autocomplete({
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


function ClearBorder() {
    if ($('#CategoriesList').val() != "") {
        $('#CategoriesList').css('border', '0px solid');
    }
    if ($('#CitiesList').val() != "") {
        $('#CitiesList').css('border', '0px solid');
    }
}

$("#SearchContractorByCat").click(function () {
    var html = null;
    // location.reload();
    var CategoriesName = $("#CategoriesList").val(); //== "e.g. Plumber, Roofer, Handyman" ? "" : $("#CategoriesList").val();
    var CitiesName = $("#CitiesList").val(); //== "e.g. Toronto, ON" ? "" : $("#CitiesList").val();

    if (CategoriesName == "" && CitiesName == "") {
        $('#CategoriesList').css('border', '2px solid Red');
        $('#CitiesList').css('border', '2px solid Red');
    }
    else if (CategoriesName == "") {
        $('#CategoriesList').css('border', '2px solid Red');
    }
    else if (CitiesName == "") {
        $('#CitiesList').css('border', '2px solid Red');
    }
    else {
        window.location.href = '/SearchContractor/Index?CategoryName=' + CategoriesName + '&CitieName=' + CitiesName;
    }
    // $('.RowDataField').remove();
    //if (CategoriesName != null && CitiesName != null) {
        //var URL = '/SearchContractor/Index?CategoryName=' + CategoriesName + '&CitieName=' + CitiesName;
        //$.ajax({
        //    type: "POST",
        //    //url: "/SearchContractor/Index?",
        //    url: URL,//"/SearchContractor/Index?CategoryName=" + CategoriesName + "&&CitieName="+CitiesName,
        //    contentType: "application/json; charset=utf-8",
        //    //dataType: 'json',
        //    //data: '{}',
        //    success: function (result) {
        //        
        //        var json = result;
        //        $("#sreachbyidcont").html('');
        //        html = '<h1> ' + CategoriesName + ' </h1> To <h1> ' + CitiesName + ' </h1> ';
        //        $("#sreachbyidcont").append(html);
        //        $(".mainContainer").append(result);
        //        //var html = '<div class="row"><div class="col-lg-8"><div class="favi toronto-block"><div class="d-flex flex-wrap justify-content-between align-items-center"><h1>' + json + ' ' + json + '</h1><input onload="GetFavouriteContractor(@item.ID)" hidden />';
        //        //var CategoryNameList = [];
        //        //$(json).each(function (index, value) {
        //        //    var CategoryName = json[index].CategoryName;
            //        //    CategoryNameList.push(CategoryName);
        //        //});
        //        //$("#CategoriesList").autocomplete({
        //        //    source: CategoryNameList
        //        //});
        //    }
        //});
    //}
});

function MsgNotification() {

    $.ajax({
        type: "POST",
        url: "/Login/GetLoginUserEmail",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            if (result != null) {
                var url = "https://api-8355AD72-4081-4FF6-90E5-C371ADEB465F.sendbird.com/v3/users/" + result + "/unread_message_count";
                // alert(url);
                $.ajax({
                    url: url,
                    headers: {
                        'Content-Type': 'application/json, charset=utf8',
                        'Api-Token': '741b6cdd02f0811d3da25d8133a7ab58a9a80230'
                    },
                    method: 'GET',
                    dataType: 'json',
                    success: function (resultcount) {
                        // var json = JSON.parse(resultcount);
                        if (resultcount.unread_count != 0) {
                          
                            $("#CountNewMsgNoti").css("display", "inline-block");
                            $("#CountNewMsgNoti").html(resultcount.unread_count);
                        } else {
                            $("#CountNewMsgNoti").css("display", "none");
                        }
                        
                    }
                });
            }

        }
    });
}
setTimeout(MsgNotification, 60000);

function Notification() {
    var countPro = $("#CountNewList").val();
    var countReviews = $("#CountNewListReview").val();
    var countReferrals = $("#CountNewListReferral").val();
    $.ajax({
        type: "POST",
        url: "/dashBoard/GetAllNotification",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            //alert(json.CountNewProject);
            if (countPro != json.CountNewProject) {
                countPro = json.CountNewProject;
                $("#CountNewList").css("display", "inline-block");
                $("#CountNewList").html(json.CountNewProject);
            } else {
                $("#CountNewList").css("display", "none");
            }
            if (countReviews != json.CountNewReview) {
                countReviews = json.CountNewReview;
                $("#CountNewListReview").css("display", "inline-block");
                $("#CountNewListReview").html(json.CountNewReview);
            }
            else {
                $("#CountNewListReview").css("display", "none");
            }
            if (countReferrals != json.CountNewReferral) {
                countReferrals = json.CountNewReferral;
                $("#CountNewListReferral").css("display", "inline-block");
                $("#CountNewListReferral").html(json.CountNewReferral);
            } else {
                $("#CountNewListReferral").css("display", "none");
            }

        }
    });
}
setInterval(Notification, 30000);




function init(jQuery) {
    $('.loader').css("display", "none");
    $(".inner-res-btn i").click(function () {
        $("div#collapsibleNavbar").slideToggle();
    });
    //$(window).scroll(function () {
    //    var sticky = $('body'),
    //        scroll = $(window).scrollTop();

    //    if (scroll >= 100) sticky.addClass('fixed');
    //    else sticky.removeClass('fixed');
    //});
    $(window).scroll(function () {
        var height = $('.top').outerHeight();

        if ($(this).scrollTop() > height) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }

    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $("body").addClass("darkHeader");
        } else {
            $("body").removeClass("darkHeader");
        }
    });
    setActivePage();
    SearchContByCategoryCities();
    BindGetAllCategories();
    BindGetAllCities();
    Notification();
    MsgNotification();
    //ShowVideoModalLogin();
    //BindGetCountOfNewProject();
    //BindGetCountOfNewReview();
    $('body').on('hidden.bs.modal', '.modal', function () {
        $('video').trigger('pause');
    });
}
$(document).ready(init);

