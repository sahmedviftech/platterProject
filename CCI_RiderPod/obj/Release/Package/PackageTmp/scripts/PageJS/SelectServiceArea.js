

//3/aprail/2020
//function SetTotalAmountValue() {
    
    //}

////backup 10 Feb 2021
//$("#ContractorCity").click(function () {
//    UnSelectedCitiesSaveInDB();
//        var CategoryCharges = 0;
//        var counts = 0;
//        var TotalCharges = 0;
//        var CatCharges = [];
//        var Category = [];
//        var CategoriesCharges = [];
//        var Count = $('#ContractorCity').children().length;
//        var data = [];
//        var id = [];
//        var AmountCount = 0;
//        var getAmount = parseInt($("#totalamount").text());
//        if (getAmount != 0) {
//            $.ajax({
//                url: "/Login/GetCityTotalAmount",
//                data: '{}',
//                type: "POST",
//                // ContentType: "application/json;charset=utf-8",
//                dataType: "json",
//                async: false,
//                success: function (response) {
//                    TotalCharges = response;
//                }
//            });
//    }
//    var countcheck = 0;
//    //for (var i = 1; i <= Count; i++) {        
//    //    if ($('#chkPendingCity' + i + '').is(":checked")) {
//    //        countcheck++;
//    //    }
//    //        if ($('#chkPendingCity' + i + '').is(":checked")) {
//    //            //Category.push($('#lblCategory' + i + '').text());
//    //            Category.push($('#lblPendingCity' + i + '').text());
//    //            id.push($('#lblPendingCity' + i + '').text());
//    //            CatCharges.push($('#lblChargesCity' + i + '').text());
//    //            CategoryCharges = CatCharges[AmountCount];
//    //            TotalCharges = TotalCharges + parseInt(CategoryCharges);
//    //            AmountCount++;
//    //            //CategoryCharges = parseInt(CatCharges[i - 1])
//    //            //TotalCharges = TotalCharges + CategoryCharges;
//    //        }
//    //}
//    $("#totalamount").text(TotalCharges.toString());
//    amountFormate();
//    });


$("#ContractorCity").click(function () {
    UnSelectedCitiesSaveInDB();
    
});

function UnSelectedCitiesSaveInDB() {
    var Count = $('#ContractorCity').children().length;
    var data = [];
    var id = [];
    var cityName = "";

    for (var i = 1; i <= Count; i++) {
        if ($('#chkPendingCity' + i + '').is(":checked")) {
            id.push($('#lblPendingCity' + i + '').text());
            cityName = $('#chkPendingCity' + i + ' label').text();
            cityName = cityName.split('$')[0];
          
        }
    }

    data = { "CityIds": id };


    var jsonData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: "/Login/SaveContrCity",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{json: ' + jsonData + '}',
        success: function (result) {
            //$("#addmoreCities").html("");
            //location.reload();
            //toastr.success(cityName + " was ADDED to your cart", "success");

            toastr.success("City ADDED", "success");
            alert("test");
            window.location.reload();
            //$('#PendingSelectedCity').html('');
            //BindAllPendingSelectedCities();

            //$('#ContractorCity').html('');
            //BindAllUnSelectedCities();
        }

    });
}


////Latest Code Zain Bhai
//$("#ContractorCity").click(function () {
//    var CategoryCharges = 0;
//    var counts = 0;
//    var TotalCharges = 0;
//    var CatCharges = [];
//    var Category = [];
//    var CategoriesCharges = [];
//    var Count = $('#ContractorCity').children().length;
//    var data = [];
//    var id = [];
//    var AmountCount = 0;

//    var getAmount = parseInt($("#totalamount").text());
//    if (getAmount != 0) {
//        $.ajax({
//            url: "/Login/GetCityTotalAmount",
//            data: '{}',
//            type: "POST",
//            // ContentType: "application/json;charset=utf-8",
//            dataType: "json",
//            async: false,
//            success: function (response) {

//                TotalCharges = response;

//            }
//        });
//    }
//    // var countcheck = 0;
//    var number = [];
//    for (var i = 1; i <= Count; i++) {
//        if ($('#chkPendingCity' + i + '').is(":checked")) {
//            number.push(i);
//        }
//    }

//    //var PendingCitydata;
//    //$.ajax({
//    //    type: "POST",
//    //    url: "/Login/GetAllPendingSelectedCities",
//    //    contentType: "application/json; charset=utf-8",
//    //    dataType: 'json',
//    //    async: false,
//    //    data: '{}',
//    //    success: function (result) {
//    //        var i = 1;
//    //        PendingCitydata = JSON.parse(result);

//    //    }
//    //});

//    if (number.length > 0) {
//        if (pendingcity.length > 0) {
//            for (var j = 0; j < number.length; j++) {
//                Category.push($('#lblPendingCity' + number[j] + '').text());
//                id.push($('#lblPendingCity' + number[j] + '').text());
//                CatCharges.push($('#lblChargesCity' + number[j] + '').text());
//                CategoryCharges = CatCharges[AmountCount];

//                TotalCharges = TotalCharges + parseInt(CategoryCharges);
//                AmountCount++;
//            }
//        } else {
//            for (var j = 1; j < number.length; j++) {
//                Category.push($('#lblPendingCity' + number[j] + '').text());
//                id.push($('#lblPendingCity' + number[j] + '').text());
//                CatCharges.push($('#lblChargesCity' + number[j] + '').text());
//                CategoryCharges = CatCharges[AmountCount];

//                TotalCharges = TotalCharges + parseInt(CategoryCharges);
//                AmountCount++;
//            }
//        }

//    }

//    $("#totalamount").text(TotalCharges.toString());
//});




function GetCityTotalAmount() {

    $.ajax({
        url: "/Login/GetCityTotalAmount",
        data: '{}',
        type: "POST",
        // ContentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {

           // $('#txtAmount').text(response);
            $("#totalamount").text(response.toString());
            amountFormate();
        }
    });
}



function amountFormate() {
   
    $("#totalamount").text(function (index, value) {
        return value
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            ;
    });


}



function BindAllSelectedCities() {
    var id = location.href.split("=")[1];
    $.ajax({
        type: "POST",
        url: "/Login/GetAllSelectedCities",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        // data: '{id : ' + id + '}',
        data: '{}',
        success: function (result) {
            var i = 1;
            var data = JSON.parse(result);
            var wrapper = $('#SelectedCity');
            if (data.length > 0) {
                $.each(data, function (index, value) {


                    //  wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><label id="lblPendingCity' + i + '" style="display:none;">' + value.Id + '</label><input id="chkPendingCity' + i + '" name="option2" type="checkbox" /><label for="chkPendingCity' + i + '">' + value.CityName + ' $' + value.Charges + '</label></div></form></div>');
                    wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><input id="chkSelected' + i + '" name="option2" type="checkbox" checked /><label for="chkSelected' + i + '">' + value.CityName + ' $' + value.Charges + '</label></div></form></div>');


                    i++;
                })
            } else {
                wrapper.append('<div class="col-sm-5"><h5>No Selected Record</h5></div>');

            }
           
        }
    });



}

var pendingcity;

//function BindAllPendingSelectedCities() {
//    var id = location.href.split("=")[1];
//    $.ajax({
//        type: "POST",
//        url: "/Login/GetAllPendingSelectedCities",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        async: false,
//        // data: '{id : ' + id + '}',
//        data: '{}',
//        success: function (result) {
//            var i = 1;
//            var data = JSON.parse(result);
//            pendingcity = JSON.parse(result);
//            var wrapper = $('#PendingSelectedCity');
//            if (data.length > 0) {
//                $.each(data, function (index, value) {


//                    //  wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><label id="lblPendingCity' + i + '" style="display:none;">' + value.Id + '</label><input id="chkPendingCity' + i + '" name="option2" type="checkbox" /><label for="chkPendingCity' + i + '">' + value.CityName + ' $' + value.Charges + '</label></div></form></div>');
//                    wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><input id="chkSelected' + i + '" name="option2" type="checkbox" checked/><label for="chkSelected' + i + '">' + value.CityName + ' $' + value.Charges + '</label></div></form></div>');


//                    i++;
//                })
//            } else {
//                wrapper.append('<div class="col-sm-5"><h5>No Pending Record</h5></div>');

//            }

//        }
//    });



//}

function BindAllPendingSelectedCities() {
    var id = location.href.split("=")[1];
    $.ajax({
        type: "POST",
        url: "/Login/GetAllPendingSelectedCities",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        // data: '{id : ' + id + '}',
        data: '{}',
        success: function (result) {
            var i = 1;
            var data = JSON.parse(result);
            pendingcity = JSON.parse(result);
            var wrapper = $('#PendingSelectedCity');
            if (data.length > 0) {
                $.each(data, function (index, value) {


                    //  wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><label id="lblPendingCity' + i + '" style="display:none;">' + value.Id + '</label><input id="chkPendingCity' + i + '" name="option2" type="checkbox" /><label for="chkPendingCity' + i + '">' + value.CityName + ' $' + value.Charges + '</label></div></form></div>');
                    wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup exmpl"><input type="hidden" value="' + value.Id + '"> <input id="chkSelected' + i + '" name="option2" type="checkbox"/><label for="chkSelected' + i + '">' + value.CityName + ' $' + value.Charges + '</label></div></form></div>');


                    i++;


                })

                $('.exmpl').on("click", function (e) {
                    var msg = confirm("Are you sure you want to Remove this City?");
                    var cityid = $(this).children()[0].value;
                    if (msg == true) {
                        $.ajax({
                            type: "Post",
                            url: "/Login/RemovePendingCity?CityID=" + cityid,
                            contentType: "application/json; charset=utf-8",
                            dataType: 'json',
                            // data: '{CityID:' + id + '}',
                            success: function (result) {

                                window.location.reload();
                                //BindAllPendingSelectedCities();
                                //BindAllUnSelectedCities();
                                toastr.success("City Removed Successfully !", "Success");

                            }


                        });
                    }

                })
            } else {
                wrapper.append('<div class="col-sm-5"><h5>No Pending Record</h5></div>');

            }

        }
    });



}



function BindAllUnSelectedCities() {//z
    //var id = location.href.split("=")[1];
    $.ajax({
        type: "POST",
        url: "/Login/GetAllUnSelectedCities",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        // data: '{id : ' + id + '}',
        data: '{}',
        success: function (result) {
            var i = 1;
            var data = JSON.parse(result);
            var wrapper = $('#ContractorCity');
            if (data.length > 0) {
                $.each(data, function (index, value) {


                    //wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><label id="lblPendingCity' + i + '" style="display:none;">' + value.Id + '</label><input id="chkPendingCity' + i + '" onchange="toggleCheckbox(this)" name="option2" type="checkbox" /><label for="chkPendingCity' + i + '">' + value.CityName + ' $' + value.Charges + '</label><label id="lblChargesCity' + i + '" style="display:none;">' + value.Charges + '</label></div></form></div>');
                    wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><label id="lblPendingCity' + i + '" style="display:none;">' + value.Id + '</label><input id="chkPendingCity' + i + '"  name="option2" type="checkbox" /><label for="chkPendingCity' + i + '">' + value.CityName + ' $' + value.Charges + '</label><label id="lblChargesCity' + i + '" style="display:none;">' + value.Charges + '</label></div></form></div>');
                    

                    i++;
                })
            } else {
                wrapper.append('<div class="col-sm-5"><h5>No Selected Record</h5></div>');

            }

        }
    });



}

function toggleCheckbox(element) {

    var cityName = element.nextElementSibling.innerText.split('$')[0];
    if (element.checked) {
        toastr.success(cityName + " was ADDED to your cart", "success");
    }
    else {
        toastr.success(cityName + " was REMOVE from your cart", "success");
    }

}

$("#SaveContrCity").click(function () {
    var newUser = 0;
    var chkNewUser = $('.color-orange').text();
    if (chkNewUser == "Next Step : Tell us more about your business") {
        newUser = 1;
    }

    $('#SaveContrCity').attr("disabled", "disabled");
    var Count = $('#ContractorCity').children().length;
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
        url: "/Login/SaveContrCity",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{json: ' + jsonData + '}',
        success: function (result) {
            //$("#addmoreCities").html("");
            //location.reload();
            window.location.href = '/Login/ContractorCategory?NewUser=' + newUser + '';
        }

    });
});


//function SetTotalAmountValuees() {
//    var CategoryCharges = 0;
//    var counts = 0;
//    var TotalCharges = 0;
//    var CatCharges = [];
//    var Category = [];
//    var CategoriesCharges = [];
//    var amt = $("#totalamount").text();
//    var Count = $('#ContractorCity').children().length;
//    var data = [];
//    var id = [];
//    var AmountCount = 0;
//    for (var i = 1; i <= Count; i++) {
//        if ($('#chkCit' + i + '').is(":checked")) {
//            Category.push($('#lblCityID' + i + '').text());
//            id.push($('#lblChargesCity' + i + '').text());
//            CatCharges.push($('#lblUnSelectCityId' + i + '').text());
//            CategoryCharges = CatCharges[AmountCount];
//            TotalCharges = TotalCharges + parseInt(CategoryCharges);
//            AmountCount++;         
//        }
//    }
//    var total = TotalAmountValue();
//    $("#totalamount").text(total);
//    return { Category: Category, CatCharges, CatCharges };
//}


$("#NextButton").click(function () {

    var total = FinalAmpunt;
    var GetCityRecord = GetCityValueAndID();
    var GetCatRecord = GetCatValueAndId();
    var City = GetCityRecord.CityId;
    var CityCharges = GetCityRecord.CityVal;
    var Category = GetCatRecord.CatId;
    var CatCharges = GetCatRecord.CatVal;

    //var total = TotalAmountValue();
    //var getCategory = SetTotalAmountValue();
    //var getCity = SetTotalAmountValuees()
    //var Category = getCategory.Category;
    //var CatCharges = getCategory.CatCharges;
    //var City = getCity.Category;
    //var CityCharges = getCity.CatCharges;
    if (total > 0) {
        window.location = "/Login/PaymentContCategory?Amount=" + total + "&Category=" + Category + "&CategoriesCharges=" + CatCharges + "&CitesId=" + City + "&CitesChargesPay=" + CityCharges;
    }

})




function TotalAmountValue() {

    var total = 0;

    $('.check').each(function () {
        if (this.checked) {
            total += Number(this.value);
        }
    });

    return total;
}


function init(jQuery) {
    $('.loader').css("display", "none");      
    GetCityTotalAmount();
    //SetTotalAmountValue();
    BindAllSelectedCities();
    BindAllPendingSelectedCities();
    BindAllUnSelectedCities();
}





$(document).ready(init);