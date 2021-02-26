







//function GetFavouriteContractor(ID) {
//    var url = '/SearchContractor/GetFavouriteContractor?ContractorId=' + ID;
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        success: function (result) {
//            if (result != 0) {

//                $("#FavouriteContractor_" + ID).css("color", "#0c2233");
//                $("#FavouriteContractor_" + ID).attr('_ischecked', '0');

//            }
//            else {

//                $("#FavouriteContractor_" + ID).attr('_ischecked', '1');
//            }
//        }
//    });
//}

//function FavouriteContractor(ID) {
// var Name = $('#FavouriteContractor_' + ID).attr("_ischecked");
// if (Name == '0') {
// }
// else {
// $.ajax({
// type: "POST",
// url: '/SearchContractor/FavouriteContractor',
// contentType: "application/json; charset=utf-8",
// dataType: 'json',
// data: '{ ContractorId: "' + ID + '" }',
// success: function (result) {
// window.location.href = "/SearchContractor/Index";
// $('.loader').css("display", "none");      
// }
// });
// }
//}
//function FavouriteContractor(ID) {
// var location = window.location.href;
// $.ajax({
// type: "POST",
// url: '/SearchContractor/FavouriteContractor',
// contentType: "application/json; charset=utf-8",
// dataType: 'json',
// data: '{ ContractorId: "' + ID + '" }',
// success: function (result) {
// window.location.href = location;
// $('.loader').css("display", "none");      
// }
// });
//}


////28 April 2020
//function FavouriteContractor(ID) {

//    var Name = $('#FavouriteContractor_' + ID).attr("_ischecked");

//    if (Name == '0') {
//        //toastr.success("You have successfully remove this contrator from your favourite ", "Success");
//        $("#FavouriteContractor_" + ID).css("color", "#ed8517");
//        $("#FavouriteContractor_" + ID).children('i').removeClass('fa-heart');
//        $("#FavouriteContractor_" + ID).children('i').addClass('fa-heart-o');
//        $("#FavouriteContractor_" + ID).attr('_ischecked', '1');
//        DeleteFav(ID);
//    }
//    else {
//        toastr.success("You have successfully added this contrator to your favourite ", "Success");
//        $.ajax({
//            type: "POST",
//            url: '/SearchContractor/FavouriteContractor',
//            contentType: "application/json; charset=utf-8",
//            dataType: 'json',
//            data: '{ ContractorId: "' + ID + '" }',
//            success: function (result) {

//                $("#FavouriteContractor_" + ID).attr('_ischecked', '0');
//                $('.loader').css("display", "none");
//                $("#FavouriteContractor_" + ID).children('i').removeClass('fa-heart-o');
//                $("#FavouriteContractor_" + ID).children('i').addClass('fa-heart');
//                $("#FavouriteContractor_" + ID).css("color", "black");
//                //$("#FavouriteContractor_" + ID).children.css("color", "black");

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
//                $("#FavouriteContractor_" + ID).attr('_ischecked', '0');
//                $("#FavouriteContractor_" + ID).css("color", "#0c2233");
//                $("#FavouriteContractor_" + ID).children('i').removeClass('fa-heart-o');
//                $("#FavouriteContractor_" + ID).children('i').addClass('fa-heart');
//                //$("#FavouriteContractor_ i" + ID).addClaa("color", "#0c2233");
//                //$("#FavouriteContractor_" + ID).attr('_ischecked', '0');
//            }
//            else {
//                $("#FavouriteContractor_" + ID).attr('_ischecked', '1');
//                $("#FavouriteContractor_" + ID).css("color", "#ed8517");
//                $("#FavouriteContractor_" + ID).children('i').addClass('fa-heart-o');
//                $("#FavouriteContractor_" + ID).children('i').removeClass('fa-heart');
//            }
//        }
//    });
//}


function FavouriteContractor(ID) {


    var Name = $('#FavouriteContractor_' + ID).attr("_ischecked");

    if (Name == '0') {
        //toastr.success("You have successfully remove this contrator from your favourite ", "Success");
        $("#FavouriteContractor_" + ID).css("color", "#ed8517");
        $("#FavouriteContractor_" + ID).children('i').removeClass('fa-heart');
        $("#FavouriteContractor_" + ID).children('i').addClass('fa-heart-o');
        $("#FavouriteContractor_" + ID).children().children('i').addClass('fa-heart-o');
        $("#FavouriteContractor_" + ID).children().children('i').removeClass('fa-heart');
        $("#FavouriteContractor_" + ID).attr('_ischecked', '1');
        DeleteFav(ID);
    }
    else {
        toastr.success("Company ADDED to your favourites. ", "Success");
        $.ajax({
            type: "POST",
            url: '/SearchContractor/FavouriteContractor',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: '{ ContractorId: "' + ID + '" }',
            success: function (result) {

                $("#FavouriteContractor_" + ID).attr('_ischecked', '0');
                $('.loader').css("display", "none");
                $("#FavouriteContractor_" + ID).children('i').removeClass('fa-heart-o');
                $("#FavouriteContractor_" + ID).children('i').addClass('fa-heart');
                $("#FavouriteContractor_" + ID).children().children('i').removeClass('fa-heart-o');
                $("#FavouriteContractor_" + ID).children().children('i').addClass('fa-heart');
                //$("#FavouriteContractor_" + ID).css("color", "black");

                //$("#FavouriteContractor_" + ID).children().children('i').css("color", "black");
                //$("#FavouriteContractor_" + ID).children.css("color", "black");

            }
        });
    }
}

function GetFavouriteContractor(ID) {

    var url = '/SearchContractor/GetFavouriteContractor?ContractorId=' + ID;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (result) {

            if (result != 0) {
                $("#FavouriteContractor_" + ID).attr('_ischecked', '0');
                $('#FavouriteContractor_' + ID).css("color", "#ed8517");
                $("#FavouriteContractor_" + ID).children('i').removeClass('fa-heart-o');
                $("#FavouriteContractor_" + ID).children('i').addClass('fa-heart');
                //$("#FavouriteContractor_ i" + ID).addClaa("color", "#0c2233");
                //$("#FavouriteContractor_" + ID).attr('_ischecked', '0');
            }
            else {
                $("#FavouriteContractor_" + ID).attr('_ischecked', '1');
                $('#FavouriteContractor_' + ID).css("color", "#ed8517");
                $("#FavouriteContractor_" + ID).children('i').addClass('fa-heart-o');
                $("#FavouriteContractor_" + ID).children('i').removeClass('fa-heart');
            }
        }
    });
}




$(".favi-heart").hover(function () {

    //$(this).css('cursor', 'pointer');
    //$(this).children().css('cursor', 'pointer');
    var isCheck = this.getAttribute('_ischecked');
    if (isCheck == 0) {
        this.setAttribute('title', 'Unfavorite')
    } else {
        this.setAttribute('title', 'Add To Favorite')
    }
});
function DeleteFav(id) {

    toastr.success("Company REMOVED from your favourites", "Success");
    DeleteFavouriteContractor(id);
}

function DeleteFavouriteContractor(Id) {

    Id = Id.toString();
    var ids;
    if (Id.includes("_")) {
        ids = Id.split("_")[1]
        ids = parseInt(ids);
    } else {
        ids = parseInt(Id);
    }


    $.ajax({
        type: "POST",
        url: "/Favorite/DeleteFavouriteContractor?FavoriteID=" + ids,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (result) {



            var urls = window.location.href;

            $("#FavContractorD").children('i').removeClass('fa-heart');
            $("#FavContractorD").children('i').addClass('fa-heart-o');
            $("#FavouriteContractor_" + Id).children('i').removeClass('fa-heart');
            $("#FavouriteContractor_" + Id).children('i').addClass('fa-heart-o');
            if (urls.includes('/Favorite/Index')) {
                window.location.href = "/Favorite/Index";
            }
            else if (urls.includes('Contractor/ContractorDetail')) {

            }
            else {
                // window.location.href = "/SearchContractor/Index?CategoryName=&CitieName=";
            }
        }
    });

}

function CountReview(id) {

    var url = '/SearchContractor/CountReviews?ContractorId=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (result) {

            if (result != null) {
                if (result.length > 1) {
                    $("#ReviewsCount_" + id).text(result + ' Reviews');
                } else {
                    $("#ReviewsCount_" + id).text(result + ' Review');
                }
            }
            else {
                $("#ReviewsCount_" + id).text('0 Review');
            }
        }
    });
}





function init(jQuery) {

    $('.loader').css("display", "none");



    $('.txtContractorID').each(function () {

        GetFavouriteContractor(parseInt(this.value));
        CountReview(parseInt(this.value));


    });
    //BindGetAllCategories();
    //BindGetAllCities();

    $('.CountReview').each(function () {

        CountReview($(this).val());
    });

    // sorting
    $('#selectHightLow').select2({
    }).on('change', function (e) {
        var data;//= false;
        data = $("#selectHightLow option:selected").val();
        window.location.href = '/Favorite/Index?orderby=' + data;
        $("#selectHightLow").val(data);
    });
}

$(document).ready(init);








































//function GetFavouriteContractor(ID) {
//    var url = '/SearchContractor/GetFavouriteContractor?ContractorId=' + ID;
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        success: function (result) {
//            if (result != 0) {

//                $("#FavouriteContractor_" + ID).css("color", "#0c2233");
//                $("#FavouriteContractor_" + ID).attr('_ischecked', '0');

//            }
//            else {

//                $("#FavouriteContractor_" + ID).attr('_ischecked', '1');
//            }
//        }
//    });
//}



//function FavouriteContractor(ID) {

//    var Name = $('#FavouriteContractor_' + ID).attr("_ischecked");
//    if (Name == '0') {
//        //toastr.success("You have successfully remove this contrator from your favourite ", "Success");
//        $("#FavouriteContractor_" + ID).css("color", "#ed8517");
//        $("#FavouriteContractor_" + ID).attr('_ischecked', '1');
//        DeleteFav(ID);
//    }
//    else {
//        $.ajax({
//            type: "POST",
//            url: '/SearchContractor/FavouriteContractor',
//            contentType: "application/json; charset=utf-8",
//            dataType: 'json',
//            data: '{ ContractorId: "' + ID + '" }',
//            success: function (result) {
//                toastr.success("You have successfully added this contrator to your favourite ", "Success");
//                $("#FavouriteContractor_" + ID).attr('_ischecked', '0');
//                $('.loader').css("display", "none");      

//                window.location.href = "/SearchContractor/Index?CategoryName=&CitieName=";

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
//                $("#FavouriteContractor_" + ID).attr('_ischecked', '0');
//                $("#FavouriteContractor_" + ID).css("color", "#0c2233");
//                //$("#FavouriteContractor_ i" + ID).addClaa("color", "#0c2233");
//                //$("#FavouriteContractor_" + ID).attr('_ischecked', '0');
//            }
//            else {
//                //$("#FavouriteContractor_" + ID).attr('_ischecked', '1');
//            }
//        }
//    });
//}
//function DeleteFav(id) {

//    //var ID = $('#' + id).attr("value");
//    toastr.success("You have successfully remove this contrator from your favourite ", "Success");
//    DeleteFavouriteContractor(id);
//}
//function DeleteFavouriteContractor(Id) {
//    
//    Id = Id.toString();
//    var ids;
//    if (Id.includes("_")) {
//        ids = Id.split("_")[1]
//        ids = parseInt(ids);
//    } else {
//        ids = parseInt(Id);
//    }


//    $.ajax({
//        type: "POST",
//        url: "/Favorite/DeleteFavouriteContractor?FavoriteID=" + ids,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        success: function (result) {
//            
//            Location.href = "Index";

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





//function init(jQuery) {

//    $('.loader').css("display", "none");      

//    $('.txtContractorID').each(function () {
//        GetFavouriteContractor($(this).val());
//        CountReview($(this).val());
//    });


//    //BindGetAllCategories();
//    //BindGetAllCities();

//    $('.CountReview').each(function () {

//        CountReview($(this).val());
//    });

//    // sorting
//    $('#selectHightLow').select2({
//    }).on('change', function (e) {
//        var data;//= false;
//        data = $("#selectHightLow option:selected").val();
//        window.location.href = '/Favorite/Index?orderby=' + data;
//        $("#selectHightLow").val(data);
//    });
//}

//$(document).ready(init);



































////20 April 2020

//function GetFavouriteContractor(ID) {
//    var url = '/SearchContractor/GetFavouriteContractor?ContractorId=' + ID;
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        success: function (result) {
//            if (result != 0) {

//                $("#FavouriteContractor_" + ID).css("color", "#0c2233");
//                $("#FavouriteContractor_" + ID).attr('_ischecked', '0');

//            }
//            else {

//                $("#FavouriteContractor_" + ID).attr('_ischecked', '1');
//            }
//        }
//    });
//}



//function FavouriteContractor(ID) {

//    var Name = $('#FavouriteContractor_' + ID).attr("_ischecked");
//    if (Name == '0') {
//        //toastr.success("You have successfully remove this contrator from your favourite ", "Success");
//        $("#FavouriteContractor_" + ID).css("color", "#ed8517");
//        $("#FavouriteContractor_" + ID).attr('_ischecked', '1');
//        DeleteFav(ID);
//    }
//    else {
//        $.ajax({
//            type: "POST",
//            url: '/SearchContractor/FavouriteContractor',
//            contentType: "application/json; charset=utf-8",
//            dataType: 'json',
//            data: '{ ContractorId: "' + ID + '" }',
//            success: function (result) {
//                toastr.success("You have successfully added this contrator to your favourite ", "Success");
//                $("#FavouriteContractor_" + ID).attr('_ischecked', '0');
//                $('.loader').css("display", "none");      

//                window.location.href = "/SearchContractor/Index?CategoryName=&CitieName=";

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
//                $("#FavouriteContractor_" + ID).attr('_ischecked', '0');
//                $("#FavouriteContractor_" + ID).css("color", "#0c2233");
//                //$("#FavouriteContractor_ i" + ID).addClaa("color", "#0c2233");
//                //$("#FavouriteContractor_" + ID).attr('_ischecked', '0');
//            }
//            else {
//                //$("#FavouriteContractor_" + ID).attr('_ischecked', '1');
//            }
//        }
//    });
//}
//function DeleteFav(id) {

//    //var ID = $('#' + id).attr("value");
//    toastr.success("You have successfully remove this contrator from your favourite ", "Success");
//    DeleteFavouriteContractor(id);
//}
//function DeleteFavouriteContractor(Id) {
//    Id = Id.toString();
//    var ids;
//    if (Id.includes("_")) {
//        ids = Id.split("_")[1]
//        ids = parseInt(ids);
//    } else {
//        ids = parseInt(Id);
//    }


//    $.ajax({
//        type: "POST",
//        url: "/Favorite/DeleteFavouriteContractor?FavoriteID=" + ids,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        success: function (result) {
//            var urls = window.location.href;
//            if (urls.Contains('/Favorite/Index'))
//            {
//                 window.location.href = "/Favorite/Index";
//            }
//            else
//            {
//                window.location.href = "/SearchContractor/Index?CategoryName=&CitieName=";
//            }
//        }
//    });
//    //$.ajax({
//    // type: "POST",
//    // url: "/Favorite/DeleteFavouriteContractor?FavoriteID=" + Id,
//    // contentType: "application/json; charset=utf-8",
//    // dataType: 'json',
//    // success: function (result) {
//    // window.location.href = "/Favorite/Index";
//    // }
//    //});
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





//function init(jQuery) {

//    $('.loader').css("display", "none");      

//    $('.txtContractorID').each(function () {
//        GetFavouriteContractor($(this).val());
//        CountReview($(this).val());
//    });


//    //BindGetAllCategories();
//    //BindGetAllCities();

//    $('.CountReview').each(function () {

//        CountReview($(this).val());
//    });

//    // sorting
//    $('#selectHightLow').select2({
//    }).on('change', function (e) {
//        var data;//= false;
//        data = $("#selectHightLow option:selected").val();
//        window.location.href = '/Favorite/Index?orderby=' + data;
//        $("#selectHightLow").val(data);
//    });
//}

//$(document).ready(init);











































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
////function FavouriteContractor(ID) {
////    var Name = $('#FavouriteContractor_' + ID).attr("_ischecked");
////    if (Name == '0') {
////    }
////    else {
////        $.ajax({
////            type: "POST",
////            url: '/SearchContractor/FavouriteContractor',
////            contentType: "application/json; charset=utf-8",
////            dataType: 'json',
////            data: '{ ContractorId: "' + ID + '" }',
////            success: function (result) {
////                window.location.href = "/SearchContractor/Index";
////                $('.loader').css("display", "none");      
////            }
////        });
////    }
////}
////function FavouriteContractor(ID) {
////    var location = window.location.href;
////    $.ajax({
////        type: "POST",
////        url: '/SearchContractor/FavouriteContractor',
////        contentType: "application/json; charset=utf-8",
////        dataType: 'json',
////        data: '{ ContractorId: "' + ID + '" }',
////        success: function (result) {
////            window.location.href = location;
////            $('.loader').css("display", "none");      
////        }
////    });
////}
//function FavouriteContractor(ID) {
//    
//    var Name = $('#FavouriteContractor_' + ID).attr("_ischecked");
//    if (Name == '0') {
//        $("#FavouriteContractor_" + ID).css("color", "#ed8517");
//        $("#FavouriteContractor_" + ID).attr('_ischecked', '1');
//        DeleteFav(ID);
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
//                //$("#FavouriteContractor_" + ID).attr('_ischecked', '0');
//            }
//            else {
//                //$("#FavouriteContractor_" + ID).attr('_ischecked', '1');
//            }
//        }
//    });
//}
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
//function init(jQuery) {

//    $('.loader').css("display", "none");      

//    $('.txtContractorID').each(function () {
//        GetFavouriteContractor($(this).val());
//        CountReview($(this).val());
//    });


//    //BindGetAllCategories();
//    //BindGetAllCities();

//    $('.CountReview').each(function () {

//        CountReview($(this).val());
//    });

//    // sorting
//    $('#selectHightLow').select2({
//    }).on('change', function (e) {
//        var data;//= false;
//        data = $("#selectHightLow option:selected").val();
//        window.location.href = '/Favorite/Index?orderby=' + data;
//        $("#selectHightLow").val(data);
//    });
//}
//$(document).ready(init);



















//function GetFavouriteContractor() {
//    
//    $.ajax({
//        type: "POST",
//        url: '/SearchContractor/GetFavouriteContractor',
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {
//            
//            var json = JSON.parse(result);
//            $("#UserDetailstbody").html('');
//            var html = "";
//            $(json).each(function (index, value) {
//                var Id = json[index].Id;
//                var Name = json[index].Name;
//                var Type = json[index].Type;
//                var PhoneNumber = json[index].PhoneNumber;
//                var Email = json[index].Email;
//                var City = json[index].City;
//                var ReferralCreditPending = json[index].ReferralCreditPending;
//                var IsActive = json[index].IsActive == true ? "Enable" : "Disable";
//                html += "<tr>";
//                html += "<td>" + Name + "</td>";
//                html += "<td>" + Type + "</td>";
//                html += "<td>" + PhoneNumber + "</td>";
//                html += "<td>" + Email + "</td>";
//                html += "<td>" + City + "</td>";
//                html += "<td>" + ReferralCreditPending + "</td>";
//                html += "<td>" + IsActive + "</td>";
//                html += "<td><a onClick='PaymentDone(" + Id + ")'>Payment Done</a></td>";
//                html += "<td><a href='/UsersDetails/UpdateUser?Id=" + Id + "'>Edit</a></td>";
//                html += "<td><input type='button' data-toggle='modal' data-target='#myModal' onClick='ReferralPayment(" + Id + ")' value='Amount' /></a></td>";
//                html += "</tr>";
//            });
//            $("#UserDetailstbody").append(html);
//        }
//    });
//}
//function init(jQuery) {
//    GetFavouriteContractor();
//}

//$(document).ready(init);