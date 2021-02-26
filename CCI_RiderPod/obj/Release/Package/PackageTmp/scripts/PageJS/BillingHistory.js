$('#btnCancelSubscription').click(function () {

    var id = $('#UserID').val();
    var varEmail = $('#Email').val();
    var record = {
        'UserId': id,
        'Email': varEmail,
        
    };
    $.ajax({
        url: "/PllentyPayment/CancelSubscription?UserId=" + id + "&Email=" + varEmail,
        //url: "/PllentyPayment/CancelSubscription",
        type: "POST",
        //data: JSON.stringify(record),
        success: function (response) {
            if (response == "Subscription has been canceled.") {
                toastr.success("Subscription has been cancelled.", "success")
                //$('#btnCancelSubscription').hide();

            } else if (response == "1") {
                toastr.success("Request already sent.", "success")
                //toastr.success(response, "success")
              //  $('#btnCancelSubscription').hide();

            }
            else {
                toastr.success("Subscription has been canceled.", "success")
                //toastr.success(response, "success")
                //  $('#btnCancelSubscription').hide();

            }

        },
        error: function (response) {
            toastr.error(response, "error")
        }
    });


});


function getTransactiondetails() {

    $.ajax({
        url: "/PllentyPayment/GetTransactionDtlJson",
        type: "POST",
        data: '{}',
        success: function (response) {
           

        },
        error: function (response) {
            toastr.error(response, "error")
        }
    });


}




function init(jQuery) {
    //var status = $('#hdSubscriptionStatus').val();
    //debugger
    //if (status == "canceled") {
    //    $('#btnCancelSubscription').hide();
    //}

    //getbillingdetails();
    //getTransactiondetails();
}


function getbillingdetails() {



    $.ajax({
        url: "/BillingHistory/getbillingdetail",
        type: "POST",
        data: '{}',
        success: function (response) {
            debugger
            var a = response.Id;

        },
        error: function (response) {
            toastr.error(response, "error")
        }
    });


}


$(document).ready(init);    