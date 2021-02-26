

//function BindGetAllCategories() {
//    $.ajax({
//        type: "POST",
//        url: "/SearchContractor/GetCategory",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
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
//function BindGetAllCities() {

//    $.ajax({
//        type: "POST",
//        url: "/SearchContractor/GetCities",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {
//            var json = JSON.parse(result);
//            var CityNameList = [];
//            $(json).each(function (index, value) {
//                var CityName = json[index].CityName;
//                CityNameList.push(CityName);
//            });
//            $("#CitiesList").autocomplete({
//                source: CityNameList
//            });
//        }
//    });
//}

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
//            asyn:true,
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



$('#loginForm').on('submit', function (e) {
    // e.preventDefault();

    if ($('#loginForm').parsley().isValid()) {
        return true;
        //var email = $('#email').val();
        //var password = $('#password').val();
        //var gridCheck = $('#gridCheck').val();;

        //$.ajax({
        // type: "Get",
        // url: '/Login/Login',
        // //contentType: "application/json; charset=utf-8",
        // dataType: 'html',
        // data: '{ email: "' + email + '", password:"' + password + '", gridCheck:"' + gridCheck + '" }',
        // success: function (result) {
        // window.location.href = '/Login/Index';
        // }
        //});
    }

});



function init(jQuery) {
    //SearchContByCategoryCities();
    //BindGetAllCategories();
    //BindGetAllCities();
    $('#loginForm').parsley();
  
    //BindGetCountOfNewProject();
    //BindGetCountOfNewReview();
}


$(document).ready(init);
