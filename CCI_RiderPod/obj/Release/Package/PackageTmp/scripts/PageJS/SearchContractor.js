function ShowAlertWithoutLogin() {
    toastr.error(' You must Login or Create NEW Account before messaging a Contractor​.', "WARNING:");
    //toastr.error('“You must create an account or login before messaging a contractor through the site,”', "warning");

}


function CreateGroupChannel(UserId, HomeownerId, CName, HName) {
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





function RedirectToContractor(id) {

    var url = '/Contractor/ContractorDetail?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {
        }
    });
}

//function FavouriteContractor(ID) {
//    var Name = $('#FavouriteContractor_' + ID).attr("_ischecked");    
//    if (Name == '0') {        
//    }
//    else {      
//        $.ajax({
//            type: "POST",
//            url: '/SearchContractor/FavouriteContractor',
//            contentType: "application/json; charset=utf-8",
//            dataType: 'json',
//            data: '{ ContractorId: "' + ID + '" }',
//            success: function (result) {
//                window.location.href = "/SearchContractor/Index";
//                $('.loader').css("display", "none");
//            }
//        });
//    }
//}

//function GetFavouriteContractor(ID) {
//    var url = '/SearchContractor/GetFavouriteContractor?ContractorId=' + ID;
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        success: function (result) {
//            if (result != 0) {               
//                $("#FavouriteContractor_" + ID).css("color", "red");
//                $("#FavouriteContractor_" + ID).attr('_ischecked', '0');
//            }
//            else {
//                $("#FavouriteContractor_" + ID).attr('_ischecked', '1');
//            }
//        }
//    });
//}

//function CountReview(id) {
//    var url = '/SearchContractor/CountReviews?ContractorId=' + id;
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        success: function (result) {
//            if (result != null) {
//                if (result.length > 1) {
//                    $("#ReviewsCount_" + id).text(result + ' Reviews');
//                } else {
//                    $("#ReviewsCount_" + id).text(result + ' Review');
//                }
//            }
//            else {
//                $("#ReviewsCount_" + id).text('0 Review');
//            }
//        }
//    });
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
            $("#CategoriesList1").autocomplete({
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
            $("#CitiesList1").autocomplete({
                source: CityNameList
            });
        }
    });
}



//getting all Contractor Name In Company Text Box
function GetAllCompanyNameNames() {
    $.ajax({
        type: "POST",
        url: "/SearchContractor/GetCompanyName",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            
            var jsonCompanyArray = JSON.parse(result);
            $("#CompanyName1").autocomplete({
                source: jsonCompanyArray
            });
            $("#CompanyName").autocomplete({
                source: jsonCompanyArray
            });
        }
    });

}


$('#ByCompanyName').change(function () {

    if ($(this).prop("checked") == true) {
        $('#ComDIv').css("display", "block");
        $('#CatDIv').css("display", "none");
    }
    else if ($(this).prop("checked") == false) {
        $('#ComDIv').css("display", "none");
        $('#CatDIv').css("display", "block");

    }
});

function ClearBorder() {
    if ($('#CitiesList1').val() != "") {
        $('#CitiesList1').css('border', '0px solid');
    }
    if ($('#CategoriesList1').val() != "") {
        $('#CategoriesList1').css('border', '0px solid');
    }
    if ($('#CompanyName1').val() != "") {
        $('#CompanyName1').css('border', '0px solid');
    }
}

$("#searchform1_s").click(function () {

    // location.reload();
    var CategoriesName = $("#CategoriesList1").val(); //== "e.g. Plumber, Roofer, Handyman" ? "" : $("#CategoriesList").val();
    var CitiesName = $("#CitiesList1").val(); //== "e.g. Toronto, ON" ? "" : $("#CitiesList").val();
    var CompanyName = $("#CompanyName1").val();

    //if (CategoriesName == "" && CitiesName == "") {
    //    $('#CategoriesList1').css('border', '2px solid Red');
    //    $('#CitiesList1').css('border', '2px solid Red');
    //}
    ////else if (CategoriesName == "") {
    ////    $('#CategoriesList').css('border', '2px solid Red');
    ////}
    ////else if (CitiesName == "") {
    ////    $('#CitiesList').css('border', '2px solid Red');
    ////}
    //else if (CompanyName == "") {
    //    $('#CompanyName1').css('border', '2px solid Red');
    //}
    //else {
    window.location.href = '/SearchContractor/Index?CategoryName=' + CategoriesName + '&CitieName=' + CitiesName + '&CompanyName=' + CompanyName;
    //}

});



//$("#SearchContractorByCat").click(function () {  
//    var CategoriesName = $("#CategoriesList").val();
//    var CitiesName = $("#CitiesList").val();
//    if (CategoriesName != null && CitiesName != null) {
//        var URL = '/SearchContractor/Index?CategoryName=' + CategoriesName + '&CitieName=' + CitiesName;
//        $.ajax({
//            type: "POST",
//            //url: "/SearchContractor/Index?",
//            url: URL,//"/SearchContractor/Index?CategoryName=" + CategoriesName + "&&CitieName="+CitiesName,
//            contentType: "application/json; charset=utf-8",
//            dataType: 'json',
//            //data: '{}',
//            success: function (result) {
//                var json = JSON.parse(result);
//                var CategoryNameList = [];
//                $(json).each(function (index, value) {
//                    var CategoryName = json[index].CategoryName;                
//                    CategoryNameList.push(CategoryName);
//                });
//                $("#CategoriesList").autocomplete({
//                    source: CategoryNameList
//                });
//            }
//        });
//    }
//});



//function SearchContByCategoryCities() {
//    var URL = '/SearchContractor/Index';
//    $.ajax({
//        type: "POST",
//        //url: "/SearchContractor/Index?",
//        url: URL,//"/SearchContractor/Index?CategoryName=" + CategoriesName + "&&CitieName="+CitiesName,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        //data: '{}',
//        success: function (result) {
//            var json = JSON.parse(result);
//            var CategoryNameList = [];
//            $(json).each(function (index, value) {
//                var CategoryName = json[index].CategoryName;
//                CategoryNameList.push(CategoryName);
//            });
//            $("#CategoriesList").autocomplete({
//                source: CategoryNameList
//            });
//        }
//    });
//}

//$("#SearchContractorByCat").click(function () {
//    var html = null;
//    // location.reload();
//    var CategoriesName = $("#CategoriesList").val();
//    var CitiesName = $("#CitiesList").val();
//    $('#tbodyOpen').html('');
//    $("#sreachbyidcont").html('');
//    html = '<h1> ' + CategoriesName + ' </h1> To <h1> ' + CitiesName + ' </h1> ';
//    $("#sreachbyidcont").append(html);
//    $('.RowDataField').remove();
//    if (CategoriesName != null && CitiesName != null) {
//        var URL = '/SearchContractor/Index?CategoryName=' + CategoriesName + '&CitieName=' + CitiesName;
//        $.ajax({
//            type: "POST",
//            //url: "/SearchContractor/Index?",
//            url: URL,//"/SearchContractor/Index?CategoryName=" + CategoriesName + "&&CitieName="+CitiesName,
//            contentType: "application/json; charset=utf-8",
//            //dataType: 'json',
//            //data: '{}',
//            success: function (result) {                
//                var json = result;
//                $(".mainContainer").append(result);
//                //var html = '<div class="row"><div class="col-lg-8"><div class="favi toronto-block"><div class="d-flex flex-wrap justify-content-between align-items-center"><h1>' + json + ' ' + json + '</h1><input onload="GetFavouriteContractor(result.ID)" hidden />';
//                //var CategoryNameList = [];
//                //$(json).each(function (index, value) {
//                //    var CategoryName = json[index].CategoryName;                    
//                //    CategoryNameList.push(CategoryName);
//                //});
//                //$("#CategoriesList").autocomplete({
//                //    source: CategoryNameList
//                //});
//            }
//        });
//    }
//});

//function getData(data) {
//    
//    var d = data;
//}
//function GetSearchContractor()
//{
//    
//    var CategoriesName = location.href.split("?")[1].split("&")[0].split("=")[1];
//    var CitiesName = location.href.split("?")[1].split("&")[1].split("=")[1];
//    $.ajax({
//        type: "POST",
//        url: "/SearchContractor/GetSearchContractorIndex?CategoryName=" + CategoriesName + "&CitieName=" + CitiesName,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        success: function (result) {
//            
//"<div class="row RowDataField">"
//           "<div class="col-lg-8">"
//                "<div class="favi toronto-block">"
//                    "<div class="d-flex flex-wrap justify-content-between align-items-center">"
//                        "<h1><a href="/Contractor/ContractorDetail?id="+result.ID+""> +result.FirstName +result.LastName"</a></h1>"
//                                    "<input type="hidden" class="txtContractorID" id="txtContractorID" value="result.ID" />
//                                    "<div class="favi-heart bg-transparent" id="FavouriteContractor_result.ID" _ischecked="1" onclick="FavouriteContractor(result.ID)">
//                                        "<i class="fa fa-heart hrt"></i>
//                                        "Favourite"
//                                    "</div>
//                                <div class="favi-heart CursorPointer bg-transparent" id="FavouriteContractor">
//                                    <i class="fa fa-heart hrt"></i>
//                                    Favourite
//                                </div>                       
//                    </div>
//                    <div class="stars-rofr">
//                        <div class="rateit" data-rateit-mode="font" data-rateit-readonly="true" data-rateit-value="result.Rating" data-rateit-step="1"></div>                   
//                        <p class="str-rate">result.Rating</p><span id="ReviewsCount_result.ID"></span>
//                    </div>
//                    <div class="p-txt">
//                        <h4>result.BusinessAddress | result.Title</h4>
//                        <h4 class="clr-gray">result.CategoryName</h4>
//                    </div>
//                    <div class="p-txt">
//                        <p class="more clr-dark-gray">
//                            <b class="clr-theme">Someone said:</b> result.Description                                                                                                      
//                         </p>
//                    </div>
//                    <div class="mesag-sec">
//                            <p> </p>
//                        <p>result.BusinessPhoneNumber </p>
//                                    <a onclick="CreateGroupChannel('result.Email','@UserPro.Email','result.FirstName result.LastName','@UserPro.FirstName @UserPro.LastName')">Message</a>
//                        <a href="/Contractor/ContractorDetail?id=result.ID"> Review </a>
//                    </div>                 
//                </div>
//            </div>
//            <div class="col-lg-4">
//                <div class="toronto-block-img">
//                    <img src="result.ImagePath" alt="" class="img-res">
//                </div>
//            </div>
//        </div>
//        }
//    });
//}
//$('#FavContractorD').click(function () {
//    var Id = $('#FavidCont').val();
//    DeleteFavouriteContractor(Id);
//});
//function DeleteFav(id) {
//    var ID = $('#' + id).attr("value");
//    DeleteFavouriteContractor(ID);
//}
//function DeleteFavouriteContractor(Id) { 
//    $.ajax({
//        type: "POST",
//        url: "/Favorite/DeleteFavouriteContractor?FavoriteID=" + Id,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        success: function (result) {
//            window.location.href = "/Favorite/Index";
//        }
//    });
//}


////getting all companies Name In Company Text Box
//function GetAllCompanyNames() {
//    $.ajax({
//        type: "POST",
//        url: "/SearchContractor/GetCompanyName",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {
//            
//            var jsonCompanyArray = JSON.parse(result);
//            $("#CompanyName").autocomplete({
//                source: jsonCompanyArray
//            });
//        }
//    });
//}


//getting all Contractor Name In Company Text Box
//getting all Contractor Name In Company Text Box
function GetAllContractorNames() {
    $.ajax({
        type: "POST",
        url: "/SearchContractor/GetContractorName",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {


            var json = JSON.parse(result);
            var FullNameList = [];
            $(json).each(function (index, value) {
                var Name = json[index].FirstName + ' ' + json[index].LastName;

                FullNameList.push(Name);
            });
            $("#ContractorName").autocomplete({
                source: FullNameList
            });



            //var jsonCompanyArray = JSON.parse(result);
            //var name=jsonCompanyArray.FirstName+' '+jsonCompanyArray.LastName
            //$("#ContractorName").autocomplete({
            //    source: name
            //});
        }
    });

}


//Getting Filter data On Contractor
$("#GetContractor").click(function () {
    var data = $('#ContractorName').val();
    if (data == "") {
        $('#ContractorName').css('border', '1px solid Red');
    }
    else {
        // alert(data);
        window.location.href = '/SearchContractor/Index?ContractorName=' + data;
    }


});



////14 April 2020
////Getting Filter data On Contractor
//$("#GetCompanyContractor").click(function () {
//    var data = $('#CompanyName').val();
//    // alert(data);
//    window.location.href = '/SearchContractor/Index?CompanyName=' + data;
//});
////Getting Filter data On Contractor
//$("#SearchContractorByCityInner").click(function () {
//    var data = $('#CitiesListInner').val();
//    // alert(data);
//    window.location.href = '/SearchContractor/Index?CitieName=' + data;
//});


//Getting Filter data On Contractor
$("#GetCompanyContractor").click(function () {
    var data = $('#CompanyName').val();
    if (data == "") {
        $('#CompanyName').css('border', '1px solid Red');
    }
    else {
        // alert(data);
        window.location.href = '/SearchContractor/Index?CompanyName=' + data;
    }

});

//Getting Filter data On Contractor
$("#SearchContractorByCityInner").click(function () {
    var data = $('#CitiesListInner').val();
    if (data == "") {
        $('#CitiesListInner').css('border', '1px solid Red');
    }
    else {
        // alert(data);
        window.location.href = '/SearchContractor/Index?CitieName=' + data;
    }

});
function ClearBorder() {
    if ($('#CitiesListInner').val() != "") {
        $('#CitiesListInner').css('border', '1px solid');
    }
    if ($('#CompanyName').val() != "") {
        $('#CompanyName').css('border', '1px solid');
    }
    if ($('#CitiesList1').val() != "") {
        $('#CitiesList1').css('border', '0px solid');
    }
    if ($('#CategoriesList1').val() != "") {
        $('#CategoriesList1').css('border', '0px solid');
    }
    if ($('#CompanyName1').val() != "") {
        $('#CompanyName1').css('border', '0px solid');
    }
}
$('#searchHighlow').select2({
}).on('change', function (e) {
    var data;//= false;
    data = $("#searchHighlow option:selected").val();
    
    //window.location.href = '/SearchContractor/Index?orderby=' + data;
    var CatgoryName = $("#CatgoryName").val();
    var CityName = $("#CityName").val();
    var ContractorName = $("#ContractorName").val();
    var CompanyName = $("#CompanyNameview").val();

    window.location.href = '/SearchContractor/Index?CategoryName=' + CatgoryName + '&CitieName=' + CityName + '&ContractorName=' + ContractorName + '&CompanyName=' + CompanyName + '&orderby=' + data;

});



function init(jQuery) {

    $('.loader').css("display", "none");
    // $('#table_id').DataTable();
    //GetFavouriteContractor(ID);

    //$('.txtContractorID').each(function () {
    //    GetFavouriteContractor($(this).val());
    //    CountReview($(this).val());
    //});
    //GetSearchContractor();
    //SearchContByCategoryCities();
    BindGetAllCategories();
    BindGetAllCities();
    GetAllContractorNames();
    GetAllCompanyNameNames();
    //SearchContByCategoryCities();
    //$('.CountReview').each(function () {

    //    CountReview($(this).val());
    //});
    //$('.txtContractorID').each(function () {
    //    GetFavouriteContractor($(this).val());
    //    CountReview($(this).val());
    //});

}



$(document).ready(init);