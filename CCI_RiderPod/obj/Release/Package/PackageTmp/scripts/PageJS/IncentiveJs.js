function GetUser() {
    //Get UserId form query parameter
    //pass into url
    var id = location.href.split('=')[1];
    $.ajax({
        type: "POST",
        url: "/Incentive/GetUserDetail?id=" + id,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (result) {


            var json = JSON.parse(result);
            var Id = json.Id;
            var FirstName = json.FirstName;
            var LastName = json.LastName;
            var Email = json.Email;
            var ReferralCreditTotal = json.ReferralCreditTotal
            var ReferralCreditPending = json.ReferralCreditPending
            var TotalEarnedAmount = json.TotalAmount;
            var AmountDue = json.AmountDue;
            var IncentiveCode = json.IncentiveCode;

            if (TotalEarnedAmount == null) {
                TotalEarnedAmount = 0;
            }
            if (AmountDue == null) {
                AmountDue = 0;
            }

            $("#IncentiveCode").text(IncentiveCode);
            $("#EmailId").text(Email);
            $("#TotalEarnedAmount").text("$" + TotalEarnedAmount);
            $("#AmountDue").text("$" + AmountDue);
            $("#ReferCode").val("https://portal.homii.ca/Referrer/Index?uniquereferralcode=" + IncentiveCode)


            get(IncentiveCode);
        }
    });

}

function GetReferDetail() {
    var id = location.href.split('=')[1];
    $.ajax({
        type: "POST",
        url: "/Incentive/GetReferDetail?id=" + id,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (result) {

            $('.loader').css("display", "none");


            var json = JSON.parse(result);
            $('#Referredtbody').html('');
            $(json).each(function (index, value) {

                var Id = json[index].Id;
                var FirstName = json[index].FirstName;
                var LastName = json[index].LastName;
                var companyname = json[index].COMPANYNAME;

                var Email = json[index].Email;
                var TotalEarnedAmount = json[index].ReferralCreditTotal
                var AmountDue = json[index].ReferralCreditPending
                var IncentiveCode = json[index].IncentiveCode;

                var CreateDate = json[index].CreateDate;
                CreateDate = CreateDate.split("T")[0];
                var ReferAmount = json[index].Amount;
                var ProcessDate = json[index].ProcessDate;
                var LastCreatedDate = json[index].LastCreatedDate;

                CreateDate = moment(CreateDate).format("YYYY-MM-DD");
                html = '<tr>' +
                    // '<td>' + Id + '</td>' +

                    '<td>' + companyname + '</td>' +
                    '<td>' + CreateDate + '</td>' +
                    '<td>' + ReferAmount + '</td>';
                if (ProcessDate > LastCreatedDate) {
                    html += '<td style="text-align: center;" class="red hidecol">New</td>';

                }
                else {
                    html += '<td style="text-align: center;" class="hidecol">old</td>';

                }
                html += '</tr>';
                $('#Referredtbody').append(html);
                HighlightRow();
                //if (ProcessDate > LastCreatedDate) {
                //    html += '<td style="text-align: center;">New</td>';
                //}
                //else {
                //    html += '<td style="text-align: center;">old</td>';
                //}
                //html += '</tr>';
                //$('#Referredtbody').append(html);
            });
            BindAddReferralLastSeen()
        }
    });

}
function HighlightRow() {
    $(".hidecol").hide();
    $(".red").parent('tr').css('background-color', '#ed8517');
    $(".red").parent('tr').addClass("cstm-tr-red");
    $(".red").children('td').css('color', 'white');
    $("#Referredtbody").css('color', 'white');
}
function GetReferPaymentDetail() {
    var id = location.href.split('=')[1];
    $.ajax({
        type: "POST",
        url: "/Incentive/GetReferPaymentDetail?id=" + id,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (result) {

            $('.loader').css("display", "none");


            var json = JSON.parse(result);
            //if (result.l) {

            //}
            //  $("#example1").dataTable().fnDestroy();
            $('#ReferredPayementDuetbody').html('');
            $(json).each(function (index, value) {
                //var Id = json[index].Id;
                //if (result.l) {

                //}
                var TotalEarnedAmount = json[index].TotalAmount;
                var CreateDate = json[index].CreatedDate;
                CreateDate = CreateDate.split("T")[0];
                CreateDate = moment(CreateDate).format("YYYY-MM-DD");
                html = '<tr>' +
                    '<td>' + CreateDate + '</td>' +
                    '<td>' + '$' + TotalEarnedAmount + '</td>';
                html += '</tr>';
                $('#ReferredPayementDuetbody').append(html);
            });

            //$("#example1").dataTable({
            //    //"order": [[4, "desc"]]
            //});
        }
    });

}


$("#RedeemNow").click(function () {



    $.ajax({
        type: "POST",
        url: "/Incentive/RedeemNow",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (result) {
            //console.log(result);
            //alert("Redeem Now has been successful");
            // alert('“Homiitesting.codecreators.io says Redeem Now has been successful.” HOWEVER, we would like this terminology to read something like, “Congrats on redeeming your Homii Incentive(s)! Someone from our team will contact you via email (on file) within 2-3 business days”');
            toastr.success("Congrats on EARNING with Homii. We'll contact you via email within 2 - 3 business days.", "");
        }
    });
})




function BindAddReferralLastSeen() {

    $.ajax({
        type: "POST",
        url: "/Incentive/AddReferralLastSeen",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

        }
    });

}

function get(IncentiveCode) {


    $("#shareIconsCountInside").jsSocials({

        // url: "http://localhost:39003/Referrer/Index?Code=" + IncentiveCode,
        url: "https://portal.homii.ca/Referrer/Index?Code=" + IncentiveCode,
        text: "Join Homii",
        showLabel: false,
        showCount: "inside",
        // countUrl: "url",
        shares: ["twitter", "facebook", "linkedin"]
    });
}

function CopyCode() {
    var copyText = document.getElementById("ReferCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");


}


function ShowVideoModalLogin() {

    $.ajax({
        type: "POST",
        url: "/Project/GetLoginStatus",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            var json = JSON.parse(result);
            if (json.LoginStatus == false && json.AccountTypeID == 3) {
                $("#VideomodalInc").modal("show");
                $.ajax({
                    type: "POST",
                    url: "/Project/UpdateLoginStatus",
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    data: '{}',
                    success: function (result) {
                        // alert("Success");
                    }
                });
            }

            //$("#VideomodalProCont").modal("hide");
        }
    });
}



function init(jQuery) {
    ShowVideoModalLogin();
    GetUser();
    GetReferDetail();
    HighlightRow();
    //$('body').click(function (e) {
    //    $('.embed-responsive').children('iframe').attr('src', 'http://portal.homii.ca/Content/assets/videos/REFERRER%20FINAL.mp4');
    //}); 
    //  GetReferPaymentDetail();
}


$(document).ready(init);