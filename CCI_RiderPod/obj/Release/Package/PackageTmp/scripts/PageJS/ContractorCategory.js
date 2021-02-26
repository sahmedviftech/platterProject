

$("#BtnSave").click(function () {

    var Category = [];
    var CategoryCharges = [];
    $.each($("input[name='Category']:checked"), function () {

        Category.push($(this).val());
        CategoryCharges.push($(this).attr('_value'));
    });
    var CategoryId = $("#ContractorCategory").val();
    // var UserId = window.location.href.split("=")[1].split("&")[0];
    // var ReferralId = window.location.href.split("=")[2].split("&")[0];
    var record = {
        'CategoriesId': Category,
        'CategoryChargesPay': CategoryCharges,
        //'ReferralId': ReferralId,
        //'UserId' : UserId,

    };
    $.ajax({
        type: "POST",
        url: "/Login/SaveContractorCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(record),
        success: function (result) {


            if (result.url) {
                window.location.href = result.url;
            }


        }
    });
})




//function BindNextButton() {
//    $("#NextButton").click(function () {
//        
//        var CategoryCharges = 0;
//        var counts = 0;
//        var TotalCharges = 0;
//        var CatCharges = [];
//        var Category = [];
//        var CategoriesCharges = [];
//        //$.each($("input[name='Category']:checked"), function () {
//        $.each($("#ContractorCategory > div"), function () {            
//            Category.push($(this).attr('value'));
//            //CategoriesCharges.push($(this).attr('_value'));
//            //CatCharges.push($(this).attr('_value'));
//            CatCharges.push($(this).attr('_value'));
//            CategoryCharges = parseInt(CatCharges[counts])
//            TotalCharges = TotalCharges + CategoryCharges;
//            counts = counts + 1;
//        });
//        window.location = "/Login/PaymentContCategory?Amount=" + TotalCharges + "&Category=" + Category + "&CategoriesCharges=" + CatCharges;
//        //$("#txtAmount").text(TotalCharges);
//        //initBrainTree();
//    })
//}

//3/april/2020
//$("#NextButton").click(function () {        
//    var CategoryCharges = 0;
//    var counts = 0;
//    var TotalCharges = 0;
//    var CatCharges = [];
//    var Category = [];
//    var CategoriesCharges = [];
//    var Count = $('#ContractorCategory').children().length;
//    var data = [];
//    var id = [];
//    var AmountCount = 0;
//    for (var i = 1; i <= Count; i++) {
//        if ($('#chkCategory' + i + '').is(":checked")) {
//            //Category.push($('#lblCategory' + i + '').text());
//            Category.push($('#lblCategoryID' + i + '').text());
//            id.push($('#lblCharges' + i + '').text());
//            CatCharges.push($('#lblCharges' + i + '').text());
//            CategoryCharges = CatCharges[AmountCount];
//            TotalCharges = TotalCharges + parseInt(CategoryCharges);
//            AmountCount++;
//            //CategoryCharges = parseInt(CatCharges[i - 1])
//            //TotalCharges = TotalCharges + CategoryCharges;
//        }
//    }
//    window.location = "/Login/PaymentContCategory?Amount=" + TotalCharges + "&Category=" + Category + "&CategoriesCharges=" + CatCharges;
//})

//10 April 2020
//$("#NextButton").click(function () {        
//    var total = TotalAmountValue();
//    var getCategory = SetTotalAmountValue();
//    var getCity = SetTotalAmountValuees()
//    var Category = getCategory.Category;
//    var CatCharges = getCategory.CatCharges;
//    var City = getCity.Category;
//    var CityCharges = getCity.CatCharges;
//    window.location = "/Login/PaymentContCategory?Amount=" + total + "&Category=" + Category + "&CategoriesCharges=" + CatCharges + "&CitesId=" + City + "&CitesChargesPay=" + CityCharges;
//})

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


//13 April 2020
//var tm2 = 0;
//var ind2 = 1;
//var total2 = [];
//var list2 = [];
//var fm2 = 0;
//var CatId = [];
//var CatVal = [];
//var RettotalValue2 = 0;
//$("#ContractorCategory").on("click", ".inputGroup", function () {       
//    var sid = 0;
//    CatId.length = 0;
//    CatVal.length = 0;
//    if (sid == 1) {
//        //For SecondTime
//        var data = TotalAmountValue();
//        console.log(data);
//        $("#totalamount").text(data.toString());
//    }
//    else {            
//        var TotalFinalAmount = 0;
//        var a, b; var AmountCount = 0;
//        var CategoryCharges = [];
//        var TotalCharges = 0;
//        var si;
//        var clientAllValue = [];
//        if ($(this).find(".check").prop("checked") == false) {
//            if ($(this).find(".check").attr("res") != "" && $(this).find(".check").attr("idd") == "false") {
//                var spid = $(this).find(".check").attr("res");
//                console.log(spid);
//                total2[spid] = 0;
//                //total.splice(spid, 1);
//                for (var i = 0; i < total2.length; i++) {
//                    $(this).find(".check").attr("res", "");
//                }
//            }
//            else {
//                var dd = $(this).find(".check").attr("res", ind2++);
//                $(this).find(".check").attr("idd", "false");
//                tm2 = $(this).find(".check").val();
//                total2[ind2 - 1] = tm2;
//            }
//            for (var i = 1; i < total2.length; i++) {
//                if (total2[i] != 0) {
//                    total2[i] = 2000;
//                    break;
//                    console.log("THIS IS LEAST VALUE" + total2[i]);
//                }
//            }
//            if (total2.length > 1) {
//                clientAllValue[0] = 2000;
//            }
//            var result = total2.filter(function (elem) {
//                return elem !== undefined;
//            });
//            var totalValue2 = 0;
//            for (var i = 0; i < result.length; i++) {
//                totalValue2 += result[i] << 0;
//            }
//            console.log(totalValue2);
//            RettotalValue2 = totalValue2
//            //console.log(RettotalValue2 + RettotalValue);
//            FinalAmpunt = RettotalValue2 + RettotalValue;
//            $("#totalamount").text(FinalAmpunt.toString());
//        }
//    }    
//});
//function GetCatValueAndId() {
//    var cid = 0;
//    var cval = 0;
//    
//    $("#ContractorCategory .inputGroup .check").each(function () {
//        if (this.checked) {
//            cval = this.value;
//            cid = this.id;
//            var c = cid.split(",");
//            CatVal.push(cval);
//            CatId.push(c[1]);
//        }
//        console.log(CatId, CatVal);
//    });
//    return { CatId: CatId, CatVal: CatVal };
//}
//var tm = 0;
//var ind = 1;
//var total = [];
//var list = [];
//var fm = 0;
//var RettotalValue = 0;
//var CityVal = [];
//var CityId = [];
//var FinalAmpunt = 0;   
//$("#ContractorCity").on("click", ".inputGroup", function () {
//    var sid = 0;
//    CityVal.length = 0;
//    CityId.length = 0;
//    //for second time
//    if (sid == 1) {
//        //var t = 0;
//        //$('.check').each(function () {
//        //    if (this.checked) {
//        //       t +=Number(this.value);
//        //    }
//        //});
//        //RettotalValue = t;
//        //console.log(t);
//    }
//    else {            
//        var TotalFinalAmount = 0;
//        var a, b; var AmountCount = 0;
//        var CategoryCharges = [];
//        var TotalCharges = 0;
//        var si;
//        var clientAllValue = [];
//        if ($(this).find(".check").prop("checked") == false) {
//            if ($(this).find(".check").attr("res") != "" && $(this).find(".check").attr("idd") == "false") {
//                var spid = $(this).find(".check").attr("res");
//                console.log(spid);
//                total[spid] = 0;
//                //total.splice(spid, 1);
//                for (var i = 0; i < total.length; i++) {
//                    $(this).find(".check").attr("res", "");
//                }
//            }
//            else {
//                var dd = $(this).find(".check").attr("res", ind++);
//                $(this).find(".check").attr("idd", "false");
//                tm = $(this).find(".check").val();
//                total[ind - 1] = tm;
//            }
//            for (var i = 1; i < total.length; i++) {
//                if (total[i] != 0) {
//                    total[i] = 2000;
//                    break;
//                    console.log("THIS IS LEAST VALUE" + total[i]);
//                }
//            }
//            if (total.length > 1) {
//                clientAllValue[0] = 2000;
//            }
//            var result = total.filter(function (elem) {
//                return elem !== undefined;
//            });
//            var totalValue = 0;
//            for (var i = 0; i < result.length; i++) {
//                totalValue += result[i] << 0;
//            }
//            console.log(totalValue);
//            RettotalValue = totalValue;
//        }
//        console.log(RettotalValue + RettotalValue2);
//        FinalAmpunt = RettotalValue + RettotalValue2;
//        $("#totalamount").text(FinalAmpunt.toString());           
//    }
//});
//function GetCityValueAndID() {
//    var cid = 0;
//    var cval = 0;
//    $('#ContractorCity .inputGroup .check').each(function () {
//        if (this.checked) {
//            cval = this.value;
//            cid = this.id;
//            var c = cid.split(",");
//            CityVal.push(cval);
//            CityId.push(c[1]);
//        }
//    });
//    return { CityId: CityId, CityVal: CityVal };
//}



//3/aprail/2020
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
            //Category.push($('#lblCategory' + i + '').text());
            Category.push($('#lblCategoryID' + i + '').text());
            id.push($('#lblCharges' + i + '').text());
            CatCharges.push($('#lblCharges' + i + '').text());
            CategoryCharges = CatCharges[AmountCount];
            TotalCharges = TotalCharges + parseInt(CategoryCharges);
            AmountCount++;
            //CategoryCharges = parseInt(CatCharges[i - 1])
            //TotalCharges = TotalCharges + CategoryCharges;
        }
    }
    $("#totalamount").text(TotalCharges.toString());
    amountFormate();
}




function SetTotalAmountValue() {

    var CategoryCharges = 0;
    var counts = 0;
    var TotalCharges = 0;

    var CatCharges = [];
    var Category = [];
    var CategoriesCharges = [];
    var amt = $("#totalamount").text();
    var Count = $('#ContractorCategory').children().length;
    var data = [];
    var id = [];
    var AmountCount = 0;

    for (var i = 1; i <= Count; i++) {
        if ($('#chkCategory' + i + '').is(":checked")) {



            //Category.push($('#lblCategory' + i + '').text());
            Category.push($('#lblCategoryID' + i + '').text());
            id.push($('#lblCharges' + i + '').text());
            CatCharges.push($('#lblCharges' + i + '').text());
            CategoryCharges = CatCharges[AmountCount];
            TotalCharges = TotalCharges + parseInt(CategoryCharges);
            AmountCount++;
            //CategoryCharges = parseInt(CatCharges[i - 1])
            //TotalCharges = TotalCharges + CategoryCharges;
        }


    }
    var total = TotalAmountValue();
    $("#totalamount").text(total);
    return { Category: Category, CatCharges: CatCharges };
}

function SetTotalAmountValuees() {

    var CategoryCharges = 0;
    var counts = 0;
    var TotalCharges = 0;

    var CatCharges = [];
    var Category = [];
    var CategoriesCharges = [];
    var amt = $("#totalamount").text();
    var Count = $('#ContractorCity').children().length;
    var data = [];
    var id = [];
    var AmountCount = 0;

    for (var i = 1; i <= Count; i++) {
        if ($('#chkCity' + i + '').is(":checked")) {



            //Category.push($('#lblCategory' + i + '').text());
            Category.push($('#lblCityID' + i + '').text());
            id.push($('#lblChargescity' + i + '').text());
            CatCharges.push($('#lblChargescity' + i + '').text());
            CategoryCharges = CatCharges[AmountCount];
            TotalCharges = TotalCharges + parseInt(CategoryCharges);
            AmountCount++;
            //CategoryCharges = parseInt(CatCharges[i - 1])
            //TotalCharges = TotalCharges + CategoryCharges;
        }


    }
    var total = TotalAmountValue();
    $("#totalamount").text(total);
    return { Category: Category, CatCharges: CatCharges };
}

//function initBrainTree() {
//    var button = document.querySelector('#submit-button');
//    var amt = $('#txtAmount').val();
//    if (amt == null || amt == 0) {
//        toastr.warning('Please Enter Amount First.', 'Warning');
//    }
//    else {
//        $('#txtAmount').attr('disabled', true);
//        $('#init_amt').attr('disabled', true);
//        // Disable that text box
//        //sandbox_g42y39zw_348pk9cgf3bgyw2b
//        braintree.dropin.create({
//            authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
//            selector: '#dropin-container',
//            paypal: {
//                flow: 'checkout',
//                amount: amt,
//                currency: 'USD'
//            }
//        }, function (err, instance) {
//            $('#submit-button').css('display', 'block');
//            button.addEventListener('click', function () {
//                instance.requestPaymentMethod(function (err, payload) {
//                    if (err) {
//                        toastr.error(err, 'Error');
//                    }
//                    else {
//                        //$("#amtDiv").css('display', 'block')
//                        $("#submit-button").css('display', 'none')
//                        $(".braintree-toggle").css('display', 'none')
//                        //$("#PayAmount").css('display', 'block')
//                        Nonce = payload.nonce;
//                        Mpayload = payload;
//                        // Submit payload.nonce to your server
//                        //console.log(Mpayload);
//                        var Category = [];
//                        var CategoryCharges = [];
//                        $.each($("input[name='Category']:checked"), function () {                            
//                            Category.push($(this).val());
//                            CategoryCharges.push($(this).attr('_value'));
//                        });
//                        var CategoryId = $("#ContractorCategory").val();
//                        //var UserId = window.location.href.split("=")[1].split("&")[0];
//                        //var ReferralId = window.location.href.split("=")[2].split("&")[0];
//                        //if (ReferralId ) {
//                        //}
//                        //var data = new FormData();
//                        //data.append("TransactionID", 0);
//                        //data.append("UserID", parseInt(UserId));
//                        //data.append("PayPalPaymentID", "");
//                        //data.append("Intent", "sale");
//                        //data.append("Status", "approved");
//                        //data.append("Amount", parseInt(amt));
//                        //data.append("PaymentType", Mpayload.type);
//                        //data.append("ReferralId", ReferralId);
//                        //data.append("Nonce", Nonce);
//                        // data.append("UserId", 0);
//                        //data.seralize();                      
//                        var records = {
//                            //"UserID": parseInt(UserId),
//                            "PayPalPaymentID": "",
//                            "Intent": "sale",
//                            "Status": "approved",
//                            "Amount": parseInt(amt),
//                            "PaymentType": Mpayload.type,
//                            //'ReferralId': ReferralId,
//                            "Nonce": Nonce,
//                            'CategoriesId': Category,
//                            'CategoryChargesPay': CategoryCharges
//                            //'UserId': UserId,
//                        };
//                        Payment(records);
//                    }
//                });
//            });
//        });
//    }
//}

function Payment(records) {
    //var ab = 111;
    //var records = {
    //    'TransactionID': ab
    //};

    //var url = "/SignUp/SaveContractorCategory";
    $.ajax({
        url: "/Login/SaveContractorCategory",
        data: records,
        type: "POST",
        // ContentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {
            alert("success");
            //console.log(data);
            //if (data.message == "Succesfull_api") {
            //    toastr.success('Payment save successfully', 'Success');
            //    var delay = 5000;
            //    var url = '/Ticket/Index'
            //    setTimeout(function () { window.location = url; }, delay);
            //}
        }
    });
}

function TotalAmountValue() {

    var total = 0;

    $('.check').each(function () {
        if (this.checked) {
            total += Number(this.value);
        }
    });

    return total;
}

//function GetContractorCategory() {   
//    $.ajax({
//        type: "POST",
//        url: "/SignUp/GetContractorCategory",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {            
//            var json = JSON.parse(result);
//            var html = "";
//            $(json).each(function (index, value) {
//                CateId = json[index].Id;
//                var CategoryName = json[index].CategoryName;
//                var Charges = json[index].Charges;
//                //html += "<option value=" + Id + ">" + Category + "</option>";
//                html += "<div class='col-lg-3 col-md-6 p_5'><div class='bx-selectcategory'> <span class='txt' _value='" + Charges + "' value='" + CateId + "'>" + CategoryName + "<br>$" + Charges + "</span><i class='fa fa-check-circle'></i></div></div>"
//                // html += " <input type='checkbox' name='Category' _value='" + Charges + "' value='" + CateId + "'> " + CategoryName + " <span>(" + Charges + ")</span><br/>"
//            });
//            $("#ContractorCategory").append(html);
//        }
//    });
//}



function GetContractorCity() {

    $.ajax({

        type: "POST",
        url: "/SignUp/GetContractorCity",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            var html = "";
            var i = 1;
            $(json).each(function (index, value) {
                CateId = json[index].Id;
                var CategoryName = json[index].CityName;

                var Charges = json[index].Charges;

                // html += '<div class="col-sm-3"><form class="form"><div class="inputGroup" onclick="SetTotalAmountValuees()"><input id="chkCity' + i + '" name="option2" type="checkbox" class="check" value="' + Charges + '"/><label id="lblChargescity' + i + '" style="display:none;">' + Charges + '</label><label id="lblChargescity' + i + '" style="display:none;">' + CategoryName + '</label><label id="lblCityID' + i + '" style="display:none;">' + CateId + '</label><label for="chkCity' + i + '" class="check" value="' + Charges + '" >' + CategoryName + "<p>" + ' $' + Charges + "</p>" + '</label></div></form></div>';
                html += '<div class="col-sm-3" class="City"><form class="form"><div class="inputGroup" id="' + Charges + '" ><input id="chkCit' + i + ',' + CateId + '" name="option2" type="checkbox" class="check" value="' + Charges + '"/><label id="lblChargescity' + i + '" style="display:none;">' + Charges + '</label><label id="lblChargescity' + i + '" style="display:none;">' + CategoryName + '</label><label id="lblCityID' + i + '" style="display:none;">' + CateId + '</label><label for="chkCit' + i + ',' + CateId + '" class="check" value="' + Charges + '" res="" idd="true">' + CategoryName + "<p>" + ' $' + Charges + "</p>" + '</label></div></form></div>';

                i++;
            });
            $("#ContractorCity").append(html);

        }
    });
}


//3/aprail/2020
//function GetContractorCategory() {    
//    $.ajax({
//        type: "POST",
//        url: "/SignUp/GetContractorCategory",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {            
//            var json = JSON.parse(result);
//            var html = "";
//            var i = 1;
//            $(json).each(function (index, value) {
//                CateId = json[index].Id;
//                var CategoryName = json[index].CategoryName;
//                var Charges = json[index].Charges;
//                //html += "<option value=" + Id + ">" + Category + "</option>";
//                //html += "<div class='col-lg-3 col-md-6 p_5'><div class='bx-selectcategory'> <span class='txt' _value='" + Charges + "' value='" + CateId + "'>" + CategoryName + "<br>$" + Charges + "</span><i class='fa fa-check-circle'></i></div></div>"
//                //html += '<div class="col-sm-3"><form class="form"><div class="inputGroup"><input id="chkCategory' + i + '" name="option2" type="checkbox"/><label id="lblCharges' + i + '" style="display:none;">' + Charges + '</label><label id="lblCategory' + i + '" style="display:none;">' + CategoryName + '</label><label for="chkCategory' + i + '">' + CategoryName + ' $' + Charges + '</label></div></form></div>';
//                // html += " <input type='checkbox' name='Category' _value='" + Charges + "' value='" + CateId + "'> " + CategoryName + " <span>(" + Charges + ")</span><br/>"
//               // html += '<div class="col-sm-3"><form class="form"><div class="inputGroup"><input id="chkCategory' + i + '" name="option2" type="checkbox"/><label id="lblCharges' + i + '" style="display:none;">' + Charges + '</label><label id="lblCategory' + i + '" style="display:none;">' + CategoryName + '</label><label id="lblCategoryID' + i + '" style="display:none;">' + CateId + '</label><label for="chkCategory' + i + '">' + CategoryName + "<p>" + ' $' + Charges + "</p>" + '</label></div></form></div>';
//                html += '<div class="col-sm-3"><form class="form"><div class="inputGroup" onclick="SetTotalAmountValue()"><input id="chkCategory' + i + '" name="option2" type="checkbox"/><label id="lblCharges' + i + '" style="display:none;">' + Charges + '</label><label id="lblCategory' + i + '" style="display:none;">' + CategoryName + '</label><label id="lblCategoryID' + i + '" style="display:none;">' + CateId + '</label><label for="chkCategory' + i + '">' + CategoryName + "<p>" + ' $' + Charges + "</p>" + '</label></div></form></div>';
//                i++;
//            });
//            $("#ContractorCategory").append(html);
//        }
//    });
//}

function GetContractorCategory() {

    $.ajax({

        type: "POST",
        url: "/SignUp/GetContractorCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            var html = "";
            var i = 1;
            $(json).each(function (index, value) {
                CateId = json[index].Id;
                var CategoryName = json[index].CategoryName;

                var Charges = json[index].Charges;
                // html += '<div class="col-sm-3"><form class="form"><div class="inputGroup" onclick="SetTotalAmountValue()"><input id="chkCategory' + i + '" name="option2" type="checkbox" class="check" value="' + Charges + '"/><label id="lblCharges' + i + '" style="display:none;">' + Charges + '</label><label id="lblCategory' + i + '" style="display:none;">' + CategoryName + '</label><label id="lblCategoryID' + i + '" style="display:none;">' + CateId + '</label><label for="chkCategory' + i + '" class="check" value="' + Charges + '" >' + CategoryName + "<p>" + ' $' + Charges + "</p>" + '</label></div></form></div>';
                html += '<div class="col-sm-3" class="Category"><form class="form" ><div class="inputGroup" id="' + Charges + '" ><input id="chkCat' + i + ',' + CateId + '" name="option2" type="checkbox" class="check" value="' + Charges + '"/><label id="lblChargescity' + i + '" style="display:none;">' + Charges + '</label><label id="lblChargescity' + i + '" style="display:none;">' + CategoryName + '</label><label id="lblCityID' + i + '" style="display:none;">' + CateId + '</label><label for="chkCat' + i + ',' + CateId + '" class="check" value="' + Charges + '" res="" idd="true">' + CategoryName + "<p>" + ' $' + Charges + "</p>" + '</label></div></form></div>';
                i++;
            });
            $("#ContractorCategory").append(html);

        }
    });
}

function bindGetContractorCategory(CateId) {
    $.ajax({

        type: "POST",
        url: "/SignUp/GetContractorCategoryUsingId?Id=" + CateId,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (result) {

            var json = JSON.parse(result);
            var CategoryCharges = json.Charges

            $("#CategoryCharges").val(CategoryCharges);
        },

        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        }

    });

}






function BindAllSelectedCategory() {

    var id = location.href.split("=")[1];
    $.ajax({
        type: "POST",
        url: "/Login/GetAllSelectedCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        //data: '{id : ' + id + '}',
        data: '{}',
        success: function (result) {
            var i = 1;
            var data = JSON.parse(result);
            var wrapper = $('#SelectedCategory');
            if (data.length > 0) {
                $.each(data, function (index, value) {


                    //wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><label id="lblPending' + i + '" style="display:none;">' + value.Id + '</label><input id="chkPending' + i + '" name="option2" type="checkbox" /><label for="chkPending' + i + '">' + value.CategoryName + ' $' + value.Charges + '</label></div></form></div>');
                    wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><input id="chkSelected' + i + '" name="option2" type="checkbox" checked /><label for="chkSelected' + i + '">' + value.CategoryName + ' $' + value.Charges + '</label></div></form></div>');



                    i++;
                })
            } else {
                wrapper.append('<div class="col-sm-5"><h5>No Selected Record</h5></div>');

            }

        }
    });



}

var pendingCategory;


//function BindAllPendingSelectedCategory() {
//    var id = location.href.split("=")[1];
//    $.ajax({
//        type: "POST",
//        url: "/Login/GetAllPendingSelectedCategory",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        async: false,
//        // data: '{id : ' + id + '}',
//        data: '{}',
//        success: function (result) {
//            var i = 1;
//            pendingCategory = JSON.parse(result);
//            var data = JSON.parse(result);
//            var wrapper = $('#PendingSelectedCategory');
//            if (data.length > 0) {
//                $.each(data, function (index, value) {


//                    //  wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><label id="lblPendingCity' + i + '" style="display:none;">' + value.Id + '</label><input id="chkPendingCity' + i + '" name="option2" type="checkbox" /><label for="chkPendingCity' + i + '">' + value.CityName + ' $' + value.Charges + '</label></div></form></div>');
//                    wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><input id="chkSelected' + i + '" name="option2" type="checkbox" checked /><label for="chkSelected' + i + '">' + value.CategoryName + ' $' + value.Charges + '</label></div></form></div>');


//                    i++;
//                })
//            } else {
//                wrapper.append('<div class="col-sm-5"><h5>No Pending Record</h5></div>');

//            }

//        }
//    });



//}


function BindAllPendingSelectedCategory() {
    var id = location.href.split("=")[1];
    $.ajax({
        type: "POST",
        url: "/Login/GetAllPendingSelectedCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        // data: '{id : ' + id + '}',
        data: '{}',
        success: function (result) {
            var i = 1;
            pendingCategory = JSON.parse(result);
            var data = JSON.parse(result);
            var wrapper = $('#PendingSelectedCategory');
            if (data.length > 0) {
                $.each(data, function (index, value) {


                    //  wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup"><label id="lblPendingCity' + i + '" style="display:none;">' + value.Id + '</label><input id="chkPendingCity' + i + '" name="option2" type="checkbox" /><label for="chkPendingCity' + i + '">' + value.CityName + ' $' + value.Charges + '</label></div></form></div>');
                    wrapper.append('<div class="col-sm-3"><form class="form"><div class="inputGroup exmpl"> <input type="hidden" value="' + value.Id + '"><input id="chkSelected' + i + '" name="option2" type="checkbox" checked /><label for="chkSelected' + i + '">' + value.CategoryName + ' $' + value.Charges + '</label></div></form></div>');


                    i++;
                })
                $('.exmpl').on("click", function (e) {
                    var msg = confirm("Are you sure you want to Remove this Category?");
                    var catid = $(this).children()[0].value;
                    //alert(catid);
                    if (msg == true) {
                        //  alert("Hello");
                        $.ajax({
                            type: "Post",
                            url: "/Login/RemovePendingCategory?Catid=" + catid,
                            contentType: "application/json; charset=utf-8",
                            dataType: 'json',
                            // data: '{CityID:' + id + '}',
                            success: function (result) {
                                window.location.reload();
                                //BindAllPendingSelectedCities();
                                //BindAllUnSelectedCities();
                                toastr.success("Category Removed Successfully !", "Success");

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

function BindAllUnSelectedCategory() {
    var id = location.href.split("=")[1];
    $.ajax({
        type: "POST",
        url: "/Login/GetAllUnSelectedCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        // data: '{id : ' + id + '}',
        data: '{}',
        success: function (result) {
            var i = 1;
            var data = JSON.parse(result);
            var wrapper = $('#ContractorCategory');
            if (data.length > 0) {



                $.each(data, function (index, value) {


                    //wrapper.append('<div class="col-sm-3" class="Category"><form class="form"><div class="inputGroup"><label id="lblPendingCategory' + i + '" style="display:none;">' + value.Id + '</label><input id="chkPendingCategory' + i + '" onchange="toggleCheckbox(this)" name="option2" type="checkbox" /><label for="chkPendingCategory' + i + '">' + value.CategoryName + ' $' + value.Charges + '</label><label id="lblChargesCategory' + i + '" style="display:none;">' + value.Charges + '</label></div></form></div>');
                    wrapper.append('<div class="col-sm-3" class="Category"><form class="form"><div class="inputGroup"><label id="lblPendingCategory' + i + '" style="display:none;">' + value.Id + '</label><input id="chkPendingCategory' + i + '"  name="option2" type="checkbox" /><label for="chkPendingCategory' + i + '">' + value.CategoryName + ' $' + value.Charges + '</label><label id="lblChargesCategory' + i + '" style="display:none;">' + value.Charges + '</label></div></form></div>');


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
        toastr.success(cityName + " was ADDED to your cart", "Success");
    }
    else {
        toastr.success(cityName + " was REMOVED from your cart", "Success");
    }

}


//$("#ContractorCategory").click(function () {
//    var CategoryCharges = 0;
//    var counts = 0;
//    var TotalCharges = 0;
//    var CatCharges = [];
//    var Category = [];
//    var CategoriesCharges = [];
//    var Count = $('#ContractorCategory').children().length;
//    var data = [];
//    var id = [];
//    var AmountCount = 0;
//    var getAmount = parseInt($("#totalamount").text());
//    if (getAmount != 0) {
//        $.ajax({
//            url: "/Login/GetCategoryTotalAmount",
//            data: '{}',
//            type: "POST",
//             ContentType: "application/json;charset=utf-8",
//            dataType: "json",
//            async: false,
//            success: function (response) {
//                TotalCharges = response;
//            }
//        });       
//    }
//    for (var i = 1; i <= Count; i++) {
//        if ($('#chkPendingCategory' + i + '').is(":checked")) {
//            Category.push($('#lblCategory' + i + '').text());
//            Category.push($('#lblPendingCategory' + i + '').text());
//            id.push($('#lblPendingCategory' + i + '').text());
//            CatCharges.push($('#lblChargesCategory' + i + '').text());
//            CategoryCharges = CatCharges[AmountCount];
//            TotalCharges = TotalCharges + parseInt(CategoryCharges);
//            AmountCount++;
//            //CategoryCharges = parseInt(CatCharges[i - 1])
//            //TotalCharges = TotalCharges + CategoryCharges;
//        }
//    }
//    $("#totalamount").text(TotalCharges.toString());
//});
////Latest Code Zain Bhai OLD
//$("#ContractorCategory").click(function () {
//    var CategoryCharges = 0;
//    var counts = 0;
//    var TotalCharges = 0;
//    var CatCharges = [];
//    var Category = [];
//    var CategoriesCharges = [];
//    var Count = $('#ContractorCategory').children().length;
//    var data = [];
//    var id = [];
//    var AmountCount = 0;
//    var getAmount = parseInt($("#totalamount").text());
//    if (getAmount != 0) {
//        $.ajax({
//            url: "/Login/GetCityAndCategoryTotalAmount",
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
//    var number = [];
//    for (var i = 1; i <= Count; i++) {
//        if ($('#chkPendingCategory' + i + '').is(":checked")) {
//            //Category.push($('#lblCategory' + i + '').text());
//            number.push(i);
//            //Category.push($('#lblPendingCategory' + i + '').text());
//            //id.push($('#lblPendingCategory' + i + '').text());
//            //CatCharges.push($('#lblChargesCategory' + i + '').text());
//            //CategoryCharges = CatCharges[AmountCount];
//            //TotalCharges = TotalCharges + parseInt(CategoryCharges);
//            //AmountCount++;
//            //CategoryCharges = parseInt(CatCharges[i - 1])
//            //TotalCharges = TotalCharges + CategoryCharges;
//        }
//    }
//    //var PendingCategorydata;
//    //$.ajax({
//    //    type: "POST",
//    //    url: "/Login/GetAllPendingSelectedCategory",
//    //    contentType: "application/json; charset=utf-8",
//    //    dataType: 'json',
//    //    async: false,
//    //    data: '{}',
//    //    success: function (result) {
//    //        var i = 1;
//    //        PendingCategorydata = JSON.parse(result);
//    //    }
//    //});
//    if (number.length > 0) {
//        if (pendingCategory.length > 0) {
//            for (var j = 0; j < number.length; j++) {
//                Category.push($('#lblPendingCategory' + number[j] + '').text());
//                id.push($('#lblPendingCategory' + number[j] + '').text());
//                CatCharges.push($('#lblChargesCategory' + number[j] + '').text());
//                CategoryCharges = CatCharges[AmountCount];
//                TotalCharges = TotalCharges + parseInt(CategoryCharges);
//                AmountCount++;
//            }
//        } else {
//            for (var j = 1; j < number.length; j++) {
//                Category.push($('#lblPendingCategory' + number[j] + '').text());
//                id.push($('#lblPendingCategory' + number[j] + '').text());
//                CatCharges.push($('#lblChargesCategory' + number[j] + '').text());
//                CategoryCharges = CatCharges[AmountCount];
//                TotalCharges = TotalCharges + parseInt(CategoryCharges);
//                AmountCount++;
//            }
//        }
//    }
//    $("#totalamount").text(TotalCharges.toString());
//});


////New Code ZAin
////backup 10 Feb 2021
//$("#ContractorCategory").click(function () {
//    var CategoryCharges = 0;
//    var counts = 0;
//    var TotalCharges = 0;
//    var CatCharges = [];
//    var Category = [];
//    var CategoriesCharges = [];
//    var Count = $('#ContractorCategory').children().length;
//    // var subsCount = $('#SelectedCategory').children().length;
//    // var subsCount1 = subsCount + 1;
//    var subsCount;
//    var data = [];
//    var id = [];
//    var AmountCount = 0;
//    var getAmount = parseInt($("#totalamount").text());
//    if (getAmount != 0) {
//        $.ajax({
//            url: "/Login/GetCityAndCategoryTotalAmount",
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
//    var number = [];
//    for (var i = 1; i <= Count; i++) {
//        if ($('#chkPendingCategory' + i + '').is(":checked")) {
//            //Category.push($('#lblCategory' + i + '').text());
//            number.push(i);
//            //Category.push($('#lblPendingCategory' + i + '').text());
//            //id.push($('#lblPendingCategory' + i + '').text());
//            //CatCharges.push($('#lblChargesCategory' + i + '').text());
//            //CategoryCharges = CatCharges[AmountCount];
//            //TotalCharges = TotalCharges + parseInt(CategoryCharges);
//            //AmountCount++;
//            //CategoryCharges = parseInt(CatCharges[i - 1])
//            //TotalCharges = TotalCharges + CategoryCharges;
//        }
//    }

//    //var PendingCategorydata;
//    //$.ajax({
//    //    type: "POST",
//    //    url: "/Login/GetAllPendingSelectedCategory",
//    //    contentType: "application/json; charset=utf-8",
//    //    dataType: 'json',
//    //    async: false,
//    //    data: '{}',
//    //    success: function (result) {
//    //        var i = 1;
//    //        PendingCategorydata = JSON.parse(result);

//    //    }
//    //});


//    $.ajax({
//        type: "POST",
//        url: "/Login/GetAllSelectedCategory",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        async: false,
//        //data: '{id : ' + id + '}',
//        data: '{}',
//        success: function (result) {

//            var data = JSON.parse(result);

//            if (data.length > 0) {
//                subsCount = data.length;
//            }

//        }
//    });

//    if (number.length >= 0) {
//        if (pendingCategory.length > 0 || subsCount > 0) {
//            for (var j = 0; j < number.length; j++) {
//                Category.push($('#lblPendingCategory' + number[j] + '').text());
//                id.push($('#lblPendingCategory' + number[j] + '').text());
//                CatCharges.push($('#lblChargesCategory' + number[j] + '').text());
//                CategoryCharges = CatCharges[AmountCount];
//                TotalCharges = TotalCharges + parseInt(CategoryCharges);
//                AmountCount++;
//            }
//        } else {
//            for (var j = 1; j < number.length; j++) {
//                Category.push($('#lblPendingCategory' + number[j] + '').text());
//                id.push($('#lblPendingCategory' + number[j] + '').text());
//                CatCharges.push($('#lblChargesCategory' + number[j] + '').text());
//                CategoryCharges = CatCharges[AmountCount];
//                TotalCharges = TotalCharges + parseInt(CategoryCharges);
//                AmountCount++;
//            }
//        }

//    }


//    $("#totalamount").text(TotalCharges.toString());
//    amountFormate();
//});


$("#ContractorCategory").click(function () {
    UnSelectedCategoriesSaveInDB();
});


function UnSelectedCategoriesSaveInDB() {
    var Count = $('#ContractorCategory').children().length;
    var data = [];
    var id = [];
    var categoryName = "";
    for (var i = 1; i <= Count; i++) {
        if ($('#chkPendingCategory' + i + '').is(":checked")) {
            id.push($('#lblPendingCategory' + i + '').text());
            //id[i - 1] = $('#lblPendingCity' + i + '').text();
            categoryName = $('#chkPendingCategory' + i + ' label').text();
            categoryName = categoryName.split('$')[0];
            
        }
    }
    data = { "CategoriesId": id };
    var jsonData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: "/Login/SaveContrCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data: '{json: ' + jsonData + '}',
        success: function (result) {
          
            //toastr.success(categoryName + " was ADDED to your cart", "success");
            toastr.success("Category ADDED", "success");
            alert("test");
            window.location.reload();
            //$('#PendingSelectedCategory').html('');
            //BindAllPendingSelectedCategory();

            //$('#ContractorCategory').html('');
            //BindAllUnSelectedCategory();
            

        }

    });
    
}








function GetCategoryTotalAmount() {

    $.ajax({
        url: "/Login/GetCityAndCategoryTotalAmount",
        data: '{}',
        type: "POST",
        // ContentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {

            $("#totalamount").text(response.toString());
            amountFormate();
        }
    });
}


$("#SaveContrCategory").click(function () {

    $('#SaveContrCategory').attr("disabled", "disabled");

    var amt = $("#totalamount").text();
    var totalAmount = parseInt(amt);
    if (totalAmount == 0 || totalAmount == "0") {
        // alert("please select amount");
        toastr.warning('please select amount', 'Warning');
        setTimeout(
            function () {

                $('#SaveContrCategory').attr("disabled", false);
            }, 2000);

        return false;
    }
    else {

        var newUser = location.href.split("=")[1];
        if (newUser == 1) {
            if (totalAmount < 1) {
                toastr.warning('Your amount should be greater than 1000', 'Warning');
                $('#SaveContrCategory').attr("disabled", false);
            } else {
                var Count = $('#ContractorCategory').children().length;
                var data = [];
                var id = [];

                for (var i = 1; i <= Count; i++) {
                    if ($('#chkPendingCategory' + i + '').is(":checked")) {
                        id.push($('#lblPendingCategory' + i + '').text());
                        //id[i - 1] = $('#lblPendingCity' + i + '').text();
                    }
                }

                data = { "CategoriesId": id };


                var jsonData = JSON.stringify(data);
                $.ajax({
                    type: "POST",
                    url: "/Login/SaveContrCategory",
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    async: false,
                    data: '{json: ' + jsonData + '}',
                    success: function (result) {
                        //$("#addmoreCities").html("");
                        //location.reload();
                        //window.location = "/Login/PaymentContCategory?Amount=" + total + "&Category=" + Category + "&CategoriesCharges=" + CatCharges + "&CitesId=" + City + "&CitesChargesPay=" + CityCharges;
                        //window.location = "/Login/PaymentContCategory";
                        window.location = "/PllentyPayment/Index";
                    }
                });
            }
        }
        else {
            var Count = $('#ContractorCategory').children().length;
            var data = [];
            var id = [];
            for (var i = 1; i <= Count; i++) {
                if ($('#chkPendingCategory' + i + '').is(":checked")) {
                    id.push($('#lblPendingCategory' + i + '').text());
                    //id[i - 1] = $('#lblPendingCity' + i + '').text();
                }
            }
            data = { "CategoriesId": id };
            var jsonData = JSON.stringify(data);
            $.ajax({
                type: "POST",
                url: "/Login/SaveContrCategory",
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                async: false,
                data: '{json: ' + jsonData + '}',
                success: function (result) {
                    //$("#addmoreCities").html("");
                    //location.reload();
                    //window.location = "/Login/PaymentContCategory?Amount=" + total + "&Category=" + Category + "&CategoriesCharges=" + CatCharges + "&CitesId=" + City + "&CitesChargesPay=" + CityCharges;
                    //window.location = "/Login/PaymentContCategory";
                    window.location = "/PllentyPayment/Index";

                }

            });
        }
    }

    //else {
    //    if (amt < "3,000") {
    //        toastr.warning('please select amount', 'Warning');
    //        $('#submit-button').attr("disabled", false);
    //    } else {
    //        var Count = $('#ContractorCategory').children().length;
    //        var data = [];
    //        var id = [];
    //        for (var i = 1; i <= Count; i++) {
    //            if ($('#chkPendingCategory' + i + '').is(":checked")) {
    //                id.push($('#lblPendingCategory' + i + '').text());
    //                //id[i - 1] = $('#lblPendingCity' + i + '').text();
    //            }
    //        }
    //        data = { "CategoriesId": id };
    //        var jsonData = JSON.stringify(data);
    //        $.ajax({
    //            type: "POST",
    //            url: "/Login/SaveContrCategory",
    //            contentType: "application/json; charset=utf-8",
    //            dataType: 'json',
    //            async: false,
    //            data: '{json: ' + jsonData + '}',
    //            success: function (result) {
    //                //$("#addmoreCities").html("");
    //                //location.reload();
    //                //window.location = "/Login/PaymentContCategory?Amount=" + total + "&Category=" + Category + "&CategoriesCharges=" + CatCharges + "&CitesId=" + City + "&CitesChargesPay=" + CityCharges;
    //                window.location = "/Login/PaymentContCategory";
    //            }
    //        });
    //    }
    //}

});



function amountFormate() {

    $("#totalamount").text(function (index, value) {
        return value
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            ;
    });


}


//function openCity(cityName, elmnt) {
//    var i, tabcontent, tablinks;
//    tabcontent = document.getElementsByClassName("tabcontent");
//    for (i = 0; i < tabcontent.length; i++) {
//        tabcontent[i].style.display = "none";
//    }
//    tablinks = document.getElementsByClassName("tablink");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].style.backgroundColor = "";
//    }
//    document.getElementById(cityName).style.display = "block";
//    elmnt.style.backgroundColor = color;
//}//// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();
//$(".bx-selectcategory").click(function () {
//    
//    $(this).addClass("active").siblings('.bx-selectcategory').removeClass("active");
//});

function init(jQuery) {

    $('.loader').css("display", "none");

    var Nonce = "";
    var Mpayload;

    var CateId = 0;



    GetCategoryTotalAmount();
    BindAllUnSelectedCategory();
    BindAllPendingSelectedCategory();
    BindAllSelectedCategory();
    SetTotalAmountValue();
    //GetContractorCity();
    //GetContractorCategory();

    //$(".bx-selectcategory").click(function () {
    //    
    //    $(this).addClass("active").siblings('.bx-selectcategory').removeClass("active");
    //});
    //$("#ContractorCategory").change(function () {
    //    ;
    //    CateId = $("#ContractorCategory").val();
    //    bindGetContractorCategory(CateId);
    //});

}


//$(".bx-selectcategory").click(function () {
//    $(this).addClass("active").siblings('.bx-selectcategory').removeClass("active");
//});



$(document).ready(init);