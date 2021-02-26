
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

$("#searchform1_s").click(function () {

    
    //var CategoriesName = $("#CategoriesList1").val(); //CategoryName=' + CategoriesName + '
    //var CitiesName = $("#CitiesList1").val(); 
    var CitiesName = ""; 
    var CompanyName = $("#CompanyName1").val();

    
    window.location.href = '/SearchContractor/Index?CitieName=' + CitiesName + '&CompanyName=' + CompanyName;
   
});

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



           
        }
    });

}

//getting all Cities 
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
            $("#CitiesList1").autocomplete({
                source: CityNameList
            });
        }
    });
}


function init(jQuery) {

    $('.loader').css("display", "none");
   
   
    GetAllContractorNames();
    GetAllCompanyNameNames();
  

}



$(document).ready(init);