

//$("#BtnSave").click(function () {        
//    var Category = [];
//    var CategoryCharges = [];
//    $.each($("input[name='Category']:checked"), function () {            
//        Category.push($(this).val());
//        CategoryCharges.push($(this).attr('_value'));
//    });
//    var CategoryId = $("#ContractorCategory").val();
//    // var UserId = window.location.href.split("=")[1].split("&")[0];
//    // var ReferralId = window.location.href.split("=")[2].split("&")[0];
//    var record = {
//        'CategoriesId': Category,
//        'CategoryChargesPay': CategoryCharges,
//        //'ReferralId': ReferralId,
//        //'UserId' : UserId,
//    };
//    $.ajax({
//        type: "POST",
//        url: "/Login/SaveContractorCategory",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: JSON.stringify(record),
//        success: function (result) {                
//            if (result.url) {
//                window.location.href = result.url;
//            }
//        }
//    });
//})

//import { debug } from "console";


$("#BtnSave").click(function () {

    var Category = [];
    var CategoryCharges = [];
    var Cities = [];
    var CitiesCharges = [];
    $.each($("input[name='Category']:checked"), function () {

        Category.push($(this).val());
        CategoryCharges.push($(this).attr('_value'));



    });

    $.each($("input[name='Category']:checked"), function () {

        Cities.push($(this).val());
        CitiesCharges.push($(this).attr('_value'));


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



////16 April 2020 initBrainTree
//    function initBrainTree() {
//        var button = document.querySelector('#submit-button');
//        var amt = $('#txtAmount').text();
//        // var amt = window.location.href.split("=")[1].split("&")[0];
//        // $('#txtAmount').text(amt);
//        if (amt == null || amt == 0) {
//            toastr.warning('Please Enter Amount First.', 'Warning');
//        }
//        else {
//            $('#txtAmount').attr('disabled', true);
//            $('#init_amt').attr('disabled', true);
//            // Disable that text box
//            //sandbox_g42y39zw_348pk9cgf3bgyw2b
//            braintree.dropin.create({
//                authorization: 'sandbox_5r4g2bb2_23h4zhk2xgvqn76t',
//                selector: '#dropin-container',
//                paypal: {
//                    flow: 'checkout',
//                    amount: amt,
//                    currency: 'USD'
//                }
//            }, function (err, instance) {
//                $('#submit-button').css('display', 'block');
//                button.addEventListener('click', function () {
//                    instance.requestPaymentMethod(function (err, payload) {
//                        if (err) {
//                            toastr.error(err, 'Error');
//                        }
//                        else {
//                            //$("#amtDiv").css('display', 'block')
//                            $("#submit-button").css('display', 'none')
//                            $(".braintree-toggle").css('display', 'none')
//                            //$("#PayAmount").css('display', 'block')
//                            Nonce = payload.nonce;
//                            Mpayload = payload;
//                            // Submit payload.nonce to your server
//                            //console.log(Mpayload);
//                            //var Category = [];
//                            //var CategoryCharges = [];
//                            //$.each($("input[name='Category']:checked"), function () {
//                            //    
//                            //    Category.push($(this).val());
//                            //    CategoryCharges.push($(this).attr('_value'));
//                            //});
//                            ////15 April 2020
//                            //var CategoryId = $("#ContractorCategory").val();
//                            ////var Amount = window.location.href.split("=")[1].split("&")[0];
//                            //var Categ = window.location.href.split("=")[2].split("&")[0];
//                            //var CategoryChar = window.location.href.split("=")[3].split("&")[0];
//                            //var Category = Categ.split(",");
//                            //var CategoryCharges = CategoryChar.split(",");
//                            //var CityId = $("#ContractorCategory").val();
//                            //var TotalCity = window.location.href.split("=")[4].split("&")[0];
//                            //var CityChar = window.location.href.split("=")[5].split("&")[0];
//                            //var City = TotalCity.split(",");
//                            //var CityCharges = CityChar.split(",");
//                            //if (ReferralId ) {
//                            //}
//                            //var data = new FormData();
//                            //data.append("TransactionID", 0);
//                            //data.append("UserID", parseInt(UserId));
//                            //data.append("PayPalPaymentID", "");
//                            //data.append("Intent", "sale");
//                            //data.append("Status", "approved");
//                            //data.append("Amount", parseInt(amt));
//                            //data.append("PaymentType", Mpayload.type);
//                            //data.append("ReferralId", ReferralId);
//                            //data.append("Nonce", Nonce);
//                            // data.append("UserId", 0);
//                            //data.seralize();
//                            var records = {
//                                //"UserID": parseInt(UserId),
//                                "PayPalPaymentID": "",
//                                "Intent": "sale",
//                                "Status": "approved",
//                                "Amount": parseInt(amt),
//                                "PaymentType": Mpayload.type,
//                                //'ReferralId': ReferralId,
//                                "Nonce": Nonce,
//                                //'CategoriesId': Category,
//                                //'CategoryChargesPay': CategoryCharges,
//                                //'CitiesId': City,
//                                //'CityChargesPay': CityCharges
//                                //'UserId': UserId,model.CitiesId
//                            };
//                            Payment(records);
//                        }
//                    });
//                });
//            });
//        }
//    }






function initBrainTree() {

    var button = document.querySelector('#submit-button');
    var amt = $('#txtAmount').text();
    // var amt = window.location.href.split("=")[1].split("&")[0];
    // $('#txtAmount').text(amt);
    if (amt == null || amt == 0) {
        toastr.warning('Please Enter Amount First.', 'Warning');
    }
    else {
        $('#txtAmount').attr('disabled', true);
        $('#init_amt').attr('disabled', true);
        // Disable that text box
        //sandbox_g42y39zw_348pk9cgf3bgyw2b

        $.ajax({
            url: "/Login/GetCityAndCategoryTotalAmount",
            data: '{}',
            type: "POST",
            // ContentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (response) {
                $(response).text(function (index, value) {
                    return value
                        .replace(/\D/g, "")
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        ;
                });
                debugger
                if (response == amt) {
                    //var myFn = function (event) {
                    //    // event.type shows which event was the trigger
                    //    // event.detail.status
                    //    // event.detail.message
                    //    alert("success test " + event.type);
                    //    alert("success test " + event.detail.status);
                    //    alert("success test " + event.detail.message);
                    //    if (event.detail.status == "Approved")
                    //    {
                    //        var records = {
                    //                    //"UserID": parseInt(UserId),
                    //                    "PayPalPaymentID": "",
                    //                    "Intent": "sale",
                    //                    "Status": "approved",
                    //                    "Amount": parseInt(amt),
                    //                    "PaymentType": "",
                    //                    //'ReferralId': ReferralId,
                    //                    "Nonce": result.token.id,
                    //                };
                    //                Payment(records);      
                    //    }
                    //    else
                    //    {

                    //    }

                    //    console.debug(event.type, { ...event.detail });
                    //};

                    //var stripe = Stripe('pk_test_51HG4zhBz4YjUmHDtvMjuO4HHKt3dxxzfQE6ac6mNJLC1K9V5vTYIL2yeXQ3o3ZQdfi1m8MRW46SHxQa7PVpG2vSL00BWwhd8eo');
                    //// Create an instance of Elements
                    //var elements = stripe.elements();
                    //// Custom styling can be passed to options when creating an Element.
                    //// (Note that this demo uses a wider set of styles than the guide below.)
                    //var style = {
                    //    base: {
                    //        color: '#32325d',
                    //        lineHeight: '18px',
                    //        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    //        fontSmoothing: 'antialiased',
                    //        fontSize: '16px',
                    //        '::placeholder': {
                    //            color: '#aab7c4'
                    //        }
                    //    },
                    //    invalid: {
                    //        color: '#fa755a',
                    //        iconColor: '#fa755a'
                    //    }
                    //};
                    //// Create an instance of the card Element
                    //var card = elements.create('card', { style: style });
                    //// Add an instance of the card Element into the `card-element` <div>
                    //card.mount('#card-element');
                    //card.addEventListener('change', function (event) {
                    //    var displayError = document.getElementById('card-errors');
                    //    if (event.error) {
                    //        $("#submit-button").css('display', 'none')
                    //        displayError.textContent = event.error.message;
                    //    } else {
                    //        $("#submit-button").css('display', 'block')
                    //        displayError.textContent = '';
                    //    }
                    //});
                    //$('#submit-button').css('display', 'block');
                    //button.addEventListener('click', function () {
                    //    $('#submit-button').attr("disabled", "disabled");
                    //    if ($("#gridCheck2").parsley().validate() !== true) {
                    //        $('#submit-button').attr("disabled", false);
                    //        return false;
                    //    }
                    //    else {
                    //        stripe.createToken(card).then(function (result) {
                    //            if (result.error) {
                    //                // Inform the user if there was an error
                    //                var errorElement = document.getElementById('card-errors');
                    //                errorElement.textContent = result.error.message;
                    //            } else {
                    //                debugger
                    //                var records = {
                    //                    //"UserID": parseInt(UserId),
                    //                    "PayPalPaymentID": "",
                    //                    "Intent": "sale",
                    //                    "Status": "approved",
                    //                    "Amount": parseInt(amt),
                    //                    "PaymentType": "",
                    //                    //'ReferralId': ReferralId,
                    //                    "Nonce": result.token.id,
                    //                };
                    //                Payment(records);                                   
                    //            }
                    //        }); 
                    //    }
                    //});

                }
                else {
                    toastr.warning('Your Amount Not Match', 'Warning');
                }
            }
        });




    }
}

function Payment(records) {
    //var ab = 111;
    //var records = {
    //    'TransactionID': ab
    //};

    //var url = "/SignUp/SaveContractorCategory";
    $.ajax({
        url: "/Login/PaymentMethod",
        data: records,
        type: "POST",
        // ContentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.MessageTitle == "Payment has been successful") {
                toastr.success("You're almost finished completing your profile.", "Success");
                setTimeout(function () {

                    window.location = "/ContractorProject/Index";
                }, 5000);

            }
            else if (response.MessageTitle == "Amount Not Match") {
                toastr.warning('Your Amount Not Match', 'Warning');
                window.location = "/Login/PaymentContCategory";
            }
            else if (response.MessageTitle == "Your subscription has been cancelled") {
                toastr.warning('Your subscription has been cancelled, you can not be payment of your service area and service', 'Warning');

                window.location = "/ContractorProject/Index";
            }
            else if (response.MessageTitle == "Gateway Subscription has been Invalid") {
                toastr.error("Your total amount should be more than 3000", 'Error');
            }
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


function GetCityAndCategoryTotalAmount() {

    $.ajax({
        url: "/Login/GetCityAndCategoryTotalAmount",
        data: '{}',
        type: "POST",
        // ContentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {

            $('#txtAmount').text(response);

            // initBrainTree();
            amountFormate();
        }
    });
}

function amountFormate() {

    $("#txtAmount").text(function (index, value) {
        return value
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            ;
    });


}



var myFn = function (event) {
    // event.type shows which event was the trigger
    // event.detail.status
    // event.detail.message


    var button = document.querySelector('#submit-button');
    var amt = $('#txtAmount').text();

    if (amt == null || amt == 0) {
        toastr.warning('Please Enter Amount First.', 'Warning');

        $('#submit-button').attr('disabled', false);
    }
    else {
        $('#txtAmount').attr('disabled', true);
        $('#init_amt').attr('disabled', true);
        //
        // Disable that text box
        //sandbox_g42y39zw_348pk9cgf3bgyw2b

        $.ajax({
            url: "/Login/GetCityAndCategoryTotalAmount",
            data: '{}',
            type: "POST",
            // ContentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (response) {
                $(response).text(function (index, value) {
                    return value
                        .replace(/\D/g, "")
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        ;
                });

                //if (response == amt) {
                if (event.detail.status == "Approved") {
                    var records = {
                        //"UserID": parseInt(UserId),
                        "CustomerId": event.detail.customerId,
                        //"Intent": "sale",
                        //"Amounts": parseFloat(response),
                        "Amounts": parseInt(response),
                        "Amount": parseInt(response),
                        'CardId': event.detail.cardId,
                        "Status": event.detail.status,
                        //"PaymentType": "",
                        //"Nonce": result.token.id,
                    };
                    toastr.success("Wait please", "Success");

                    PllentyPayment(records);
                }
                else {
                    $('#submit-button').attr('disabled', false);

                }

                console.debug(event.type, { ...event.detail });




                //}
                //else {
                //    toastr.warning('Your Amount Not Match', 'Warning');
                //}
            }
        });




    }

    //alert("success test " + event.type);
    //alert("success test " + event.detail.status);
    //alert("success test " + event.detail.message);
    //if (event.detail.status == "Approved") {
    //    var records = {
    //        //"UserID": parseInt(UserId),
    //        "PayPalPaymentID": "",
    //        "Intent": "sale",
    //        "Status": "approved",
    //        "Amount": parseInt(amt),
    //        "PaymentType": "",
    //        //'ReferralId': ReferralId,
    //        "Nonce": result.token.id,
    //    };
    //    Payment(records);
    //}
    //else {
    //}

};



function PllentyPayment(records) {
    var datas = records;
    $.ajax({
        //url: "/PllentyPayment/PaymentMethodJson",
        ////data: records,
        //data: JSON.stringify(records),
        //type: "POST",
        // ContentType: "application/json;charset=utf-8",
        //dataType: "json",
        url: "/PllentyPayment/PaymentMethodJson?CardId=" + datas.CardId + "&CustomerId=" + datas.CustomerId + "&Status=" + datas.Status + "&Amount=" + datas.Amount,
        //async: true,
        //contentType: "application/json; charset=utf-8",
        //data: JSON.stringify(data),
        //data: '{ CardId:' + datas.CardId + ' , CustomerId:' + datas.CustomerId + ' , Status:' + datas.Status + ', Amount:' + datas.Amount+'}',
        ////data: records,
        type: "POST",
        dataType: 'json',
        success: function (response) {
            var result = JSON.parse(response);
            //alert(result.IsSuccessStatusCode);
            //toastr.success("You're almost finished completing your profile.", "Success");
            //setTimeout(function () {

            //    window.location = "/ContractorProject/Index";
            //}, 5000);
            if (result.IsSuccessStatusCode == true) {
                toastr.success("You're almost finished completing your profile.", "Success");
                setTimeout(function () {

                    window.location = "/ContractorProject/Index";
                }, 5000);

            } else if (result.IsSuccessStatusCode == false) {
                toastr.error("Error! Transaction Fail.", "Error");
                setTimeout(function () {

                    window.location = "/PllentyPayment/Index";
                }, 5000);

            } else if (result.MessageTitle == "Payment has been successful") {
                toastr.success("You're almost finished completing your profile.", "Success");
                setTimeout(function () {

                    window.location = "/ContractorProject/Index";
                }, 5000);

            }
            else if (result.MessageTitle == "Amount Not Match") {
                toastr.warning('Your Amount Not Match', 'Warning');
                window.location = "/Login/PaymentContCategory";
            }
            else if (result.MessageTitle == "Your subscription has been cancelled") {
                toastr.warning('Your subscription has been cancelled, you can not be payment of your service area and service', 'Warning');

                window.location = "/ContractorProject/Index";
            }
            else if (result.MessageTitle == "Gateway Subscription has been Invalid") {
                toastr.error("Your total amount should be more than 3000", 'Error');
            }
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



$("#submit-button").click(function () {
    $('#submit-button').attr('disabled', true);
    //$(".testimonials.cstm-card-info pllenty-card-add-form form.v-form.pllenty-card-form button.v-btn.v-btn--contained.v-btn--disabled.theme--light.v-size--default").trigger("click");
    $('button.v-btn.v-btn--contained.theme--light.v-size--default.primary').trigger("click");
    $('#submit-button').attr('disabled', false);

});




//$("#gridCheck2").parsley();
function init(jQuery) {
    //$("#gridCheck2").parsley().destroy();
    GetCityAndCategoryTotalAmount();
    $('.loader').css("display", "none");

    $("#submit-button").css('display', 'block');
    var Nonce = "";
    var Mpayload;

    var CateId = 0;

    //initBrainTree();
    //GetContractorCategory();
    //BindNextButton();

    var mySuccessFn = function (event) {
        console.debug('[mySuccessFn]', event, this);
        alert("success test");
    };



    document.addEventListener('ready', myFn);
    document.addEventListener('error', myFn);
    document.addEventListener('success', myFn);


}


$(document).ready(init);
