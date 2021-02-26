







function initstripe() {
    debugger
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
            url: "/Login/GetTotalAmountAfterExpire",
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

                    //if (500 == amt) {
                    var stripe = Stripe('pk_test_51DoHjWCtCkKEW7oKqgSzP9uokg6HMUSAQFv4ExElgmUIwbpMLBCuCF6egErYYRERJ48qkz2wthijy48AFQlguqp100nUgjn9ha');

                    // Create an instance of Elements
                    var elements = stripe.elements();

                    // Custom styling can be passed to options when creating an Element.
                    // (Note that this demo uses a wider set of styles than the guide below.)
                    var style = {
                        base: {
                            color: '#32325d',
                            lineHeight: '18px',
                            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                            fontSmoothing: 'antialiased',
                            fontSize: '16px',
                            '::placeholder': {
                                color: '#aab7c4'
                            }
                        },
                        invalid: {
                            color: '#fa755a',
                            iconColor: '#fa755a'
                        }
                    };

                    // Create an instance of the card Element
                    var card = elements.create('card', { style: style });

                    // Add an instance of the card Element into the `card-element` <div>
                    card.mount('#card-element');
                    card.addEventListener('change', function (event) {
                        var displayError = document.getElementById('card-errors');
                        if (event.error) {
                            $("#submit-button").css('display', 'none')


                            displayError.textContent = event.error.message;
                        } else {
                            $("#submit-button").css('display', 'block')


                            displayError.textContent = '';
                        }
                    });
                    $('#submit-button').css('display', 'block');
                    button.addEventListener('click', function () {
                        $('#submit-button').attr("disabled", "disabled");



                        stripe.createToken(card).then(function (result) {
                            if (result.error) {
                                // Inform the user if there was an error
                                var errorElement = document.getElementById('card-errors');
                                errorElement.textContent = result.error.message;
                            } else {
                                debugger




                                var records = {
                                    //"UserID": parseInt(UserId),
                                    "PayPalPaymentID": "",
                                    "Intent": "sale",
                                    "Status": "approved",
                                    "Amount": parseInt(response),
                                    "PaymentType": "",
                                    //'ReferralId': ReferralId,
                                    "Nonce": result.token.id,

                                };
                                Payment(records);
                                // Send the token to your server
                                //debugger
                                //$.ajax({
                                //	url: '/subscription/submitform?id=' + result.token.id + '',
                                //	data: null
                                //}).done(function () {
                                //});
                            }
                        });
                        //instance.requestPaymentMethod(function (err, payload) {


                    });

                }
                else {
                    toastr.warning('Your Amount Not Match', 'Warning');
                }
            }
        });




    }

}

function Payment(records) {

    $.ajax({
        url: "/Login/PaymentMethodExpire",
        data: records,
        type: "POST",
        // ContentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.MessageTitle == "Payment has been successful") {
                toastr.success('Payment save successfully', 'Success');
                window.location = "/ContractorProject/Index";
            }
            else if (response.MessageTitle == "Amount Not Match") {
                toastr.warning('Your Amount Not Match', 'Warning');
                window.location = "/Login/PaymentExpiryProcess";
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


function GetTotalAmountAfterExpire() {
    debugger
    $.ajax({
        url: "/Login/GetTotalAmountAfterExpire",
        data: '{}',
        type: "POST",
        // ContentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {

            $('#txtAmount').text(response);
            initstripe();
        }
    });
}



function init(jQuery) {
    GetTotalAmountAfterExpire();

    $('.loader').css("display", "none");


}


$(document).ready(init);
