
$('#ReferralAmount').keyup(function () {
    this.value = this.value.replace("/[^0-9\.]/g", '');
});



function ClearBorder() {

    if ($('#ReferralAmount').val() != "0" || $('#ReferralAmount').val() != null) {
        $('#ReferralAmount').css('border', 'none');
    }
}
function BindUsers() {
    
    $.ajax({
        type: "POST",
        url: "/UsersDetails/GetAllUsers",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async:false,
        data: '{}',
        success: function (result) {

            $('.loader').css("display", "none");      
            $("#example").dataTable().fnDestroy();

            var json = JSON.parse(result);
            //var Id = json[index].Id;


            var editor = $('#example').DataTable({
                data: json,
                "responsive":true,
                "order": [[0, "desc"]],
                columns: [
                { "data": "Name" },
                { "data": "Type" },
                { "data": "Email" },
                
                {
                    "data": "CreatedDate",
                    "render": function (x) {
                        var date = moment(x).format("YYYY-MM-DD");
                        return date;
                    }
                },
                { "data": "IsActive" },
                { "data": "ReferCreditTotal" },
                { "data": "DueAmount" },
                //{ "data": "Type" },

                {
                    "data": null,
                    "render": function (result, type, row) {


                        return '<a onclick="btnActionModal(' + result.Id + ',\'' + result.Name + '\',' + result.AccountTypeID + ',' + result.DueAmount + ',' + result.IsSubscriptionDone +')"> <i  class="fa fa-tasks" title="open action"></i></a>';

                      //  if (result.AccountTypeID == 2)
                      //  {
                      //      return '<a  onclick="CreateGroupChannel(' + result.Id + ')" ><i class="fa fa-comments-o"></i></a>' +
                      //  //'<a href="/UsersDetails/UpdateUser?Id=' + result.Id + '"><i class="fa fa-edit"></i></a>' +
                      //  '<a href="/Profiles/ContractorProfile?userId='+result.Id+'"><i class="fa fa-edit"></i></a>' +
                      //  '<a href="javascript:;" data-toggle="modal" data-target="#deletemodal" ><i class="fa fa-times" onclick = "DeleteUser(' + result.Id + ')"></i></a>' +
                      //  '<input type="button" data-toggle="modal" data-target="#amountmodal" onClick="ReferralPayment(' + result.Id + ')" value="Amount" />';//row.ClientId
                      //      // +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
                      //  }
                      //  else{
                      //      return '<a href="javascript:;" onclick="CreateGroupChannel(' + result.Id + ')"><i class="fa fa-comments-o"></i></a>' +
                      //  '<a href="/UsersDetails/UpdateUser?Id=' + result.Id + '"><i class="fa fa-edit"></i></a>' +
                      ////'<a href="/Profiles/ContractorProfile?userId=' + result.Id + '"><i class="fa fa-edit"></i></a>' +
                      //  '<a href="javascript:;" data-toggle="modal" data-target="#deletemodal" ><i class="fa fa-times" onclick = "DeleteUser(' + result.Id + ')"></i></a>' +
                      //  '<input type="button" data-toggle="modal" data-target="#amountmodal" onClick="ReferralPayment(' + result.Id + ')" value="Amount" />';//row.ClientId
                      //      // +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
                      //  }

                        
                    }
                },

                ]

            });


            //var editor = $('#example').DataTable({
            //    data: json,
            //    "order": [[0, "desc"]],
            //    columns: [
            //    { "data": "JobTitle" },
            //    { "data": "CategoryName" },
            //    { "data": "JobDescription" },
            //    { "data": "EstimatedBudget" },
            //    {
            //        "data": "EstimatedStartDate",
            //        "render": function (x) {
            //            var date = moment(x).format("YYYY-MM-DD");
            //            return date;
            //        }
            //    },
            //    {
            //        "data": null,
            //        "render": function (result, type, row) {
            //            return '<td class="fa_table"><a href="javascript:;" data-toggle="modal" onclick="GetId(' + result.Id + ')" data-target="#detailmodal"><i class="fa fa-edit"></i></td>';
            //            //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-times"></i></a>' +
            //            //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-check"></i></a>';//row.ClientId
            //            // +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
            //        }
            //    },
            //    ]
            //});

            //var json = JSON.parse(result);
            //$("#UserDetailstbody").html('');
            //var html = "";
            //$(json).each(function (index, value) {
            //    var Id = json[index].Id;
            //    var Name = json[index].Name;
            //    var Type = json[index].Type;
            //    var PhoneNumber = json[index].PhoneNumber;
            //    var Email = json[index].Email;
            //    var City = json[index].City;
            //    var CreatedDate = json[index].CreatedDate;
            //    var ReferralCreditTotal = json[index].ReferralCreditTotal;
            //    var ReferralCreditPending = json[index].ReferralCreditPending;
            //    var IsActive = json[index].IsActive == true ? "Enable" : "Disable";
            //    html += '<tr class="tbody-light">' ;
            //    html +=  '<td scope="row">' + Name + '</td>' ;
            //    html += '<td>' + Type + '</td>';
            //    html +='<td>' + Email + '</td>' ;
            //    html +='<td>' + City + '</td>' ;
            //    html +='<td>' + CreatedDate + '</td>' ;
            //    html +='<td>' + IsActive + '</td>' ;
            //    html +='<td>' + ReferralCreditTotal + '</td>' ;
            //    html +='<td>' + ReferralCreditPending + '</td>' ;
            //    html +='<td>' + Type + '</td>' ;
            //    //html += '<td class="fa_table"><a href="/UsersDetails/UpdateUser?Id=' + Id + '"><i class="fa fa-edit"></i></a><input type="button" data-toggle="modal" data-target="#myModal" onClick="ReferralPayment(' + Id + ')" value="Amount" /></td>';
            //    html +=         '<td class="fa_table">';
            //                     //<i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i>'+
            //    html += '<a href="/UsersDetails/UpdateUser?Id=' + Id + '"><i class="fa fa-edit"></i></a>';
            //                    //data-target="#deletemodal"
            //    //html +=               '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-times" onclick = "GetId(' + Id + ')"></i></a>' ;
            //    html += '<a href="javascript:;" data-toggle="modal" data-target="#amountmodal"><i class="fa fa-check" onClick="ReferralPayment(' + Id + ')"></i></a>';
            //    html += '</td>';
            //    html += '</tr>';
            //    //html += "<tr>";
            //    //html += "<td>" + Name + "</td>";
            //    //html += "<td>" + Type + "</td>";
            //    //html += "<td>" + PhoneNumber + "</td>";
            //    //html += "<td>" + Email + "</td>";
            //    //html += "<td>" + City + "</td>";
            //    //html += "<td>" + ReferralCreditPending + "</td>";
            //    //html += "<td>" + IsActive + "</td>";
            //    //html += "<td><a onClick='PaymentDone(" + Id + ")'>Payment Done</a> || " +
            //    // "<a href='/UsersDetails/UpdateUser?Id=" + Id + "'>Edit</a> || " +
            //    // "<input type='button' data-toggle='modal' data-target='#myModal' onClick='ReferralPayment(" + Id + ")' value='Amount' /></td>"+
            //    //"</tr>";
            //});
            //$("#UserDetailstbody").append(html);
        }
    });
}
function BindKPIs() {
    $.ajax({
        type: "POST",
        url: "/UsersDetails/GetKPIs",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            $("#KPIs").html('');
            var html = "";
            $(json).each(function (index, value) {
                var Id = json[index].Title;
                var Name = json[index].Total;
                html += "<label>" + Id + "</label> <br/>";
                html += "<label>" + Name + "</label> <br/>";
            });

            $("#KPIs").append(html);
            $('#TotalHomeownerCount').text(json[0].Total);
            $('#TotalContractorCount').text(json[1].Total);
            $('#TotalReferrerCount').text(json[2].Total);
        }
    });
}
function BindRevenueRefferalKPIs() {
    $.ajax({
        type: "POST",
        url: "/UsersDetails/GetRevenueReferalEarnKPIs",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
           


            $('#ReferalMonth').text(json[0].ReferalMonth);
            $('#ReferalYear').text(json[0].ReferalYear);
            $('#RevenueMonth').text(json[0].RevenueMonth);
            $('#RevenueYear').text(json[0].RevenueYear);
        }
    });
}
function PaymentDone(Id) {
    $.ajax({
        type: "POST",
        url: "/UsersDetails/PaymentDone",
        contentType: "application/json; charset=utf-8",
        async:false,
        dataType: 'json',
        data: '{id:"' + Id + '"}',
        success: function (result) {
            
            BindUsers();
        }
    });
}


function btnActionModal(id, name, type, Amount, isSubscriptionDone) {

    $('#actionModal').modal('show');
    $('.UsernameAction').text(name);
    if (type == 2) {
        var editClick = document.getElementById('editClick');
        editClick.href = '/Profiles/ContractorProfile?userId=' + id + '';
    } else {
        var editClick = document.getElementById('editClick');
        editClick.href = '/UsersDetails/UpdateUser?id=' + id + '';
    }
    if (type == 2) {
        if (isSubscriptionDone == true) {
            $('#billingClick').show();
            var billingClick = document.getElementById('billingClick');
            billingClick.href = '/BillingHistory/Index?id=' + id + '';
        } else {
            $('#billingClick').hide();
        }
    } else {
        $('#billingClick').hide();
    }
    var incentiveClick = document.getElementById('incentiveClick');
    incentiveClick.href = '/Incentive/Index?id=' + id + '';

    $('#messageClick').click(function () {
        $('#actionModal').modal('hide');
        CreateGroupChannel(id);
    });
    $('#deleteClick').click(function () {
        $('#actionModal').modal('hide');
        DeleteUser(id);
    });
    if (Amount > 0) {
        $('#amountClick').show();
        $('#amountClick').click(function () {
            $('#actionModal').modal('hide');
            $('#amountmodal').modal('show');
            ReferralPayment(id);
        });
    }
    else {
        $('#amountClick').hide();
    }


}


//fahad
function ReferralPayment(Id) {
    // $('#actionModal').modal('hide');
    var ReferCreditTotal = 0;
    var ReferCreditPending = 0;
    var DueAmount = 0;
    var id = Id
    $.ajax({
        type: "POST",
        url: "/UsersDetails/GetUserDetailByID",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{id : ' + id + '}',
        success: function (result) {

            var Jsonn = JSON.parse(result)

            ReferCreditTotal = Jsonn.ReferCreditTotal;
            ReferCreditPending = Jsonn.ReferCreditPending;
            DueAmount = Jsonn.DueAmount;

            $("#ReferralAmount").val(0);
            $("#myModal").modal("hide");

            BindUsers();
        }
    });
    $("#ReferralPaymentBtn").off('click').click(function () {

        var UserId = id;

        //ReviewId = $("#RewId").val();
        var TotalAmount = $("#ReferralAmount").val();
        if (parseInt(TotalAmount) < 0) {
            //alert("ReferralAmount cannot be greater than DueAmount ");
            toastr.error("Referral Amount cannot be Negative", "warning")

            return;
        }
        if (parseInt(TotalAmount) > DueAmount) {
            //alert("ReferralAmount cannot be greater than DueAmount ");
            toastr.error("Referral Amount cannot be greater than DueAmount", "warning")

            return;
        }
        var ReviewDate = $("#ReviewDate").val();

        var record = {
            'UserId': UserId,
            'TotalAmount': TotalAmount

        };
        //function validate_AMOUNTFORM() {
        //alert($('#ReferralAmount').val());
        var isValid = true;
        if (TotalAmount == "0" || TotalAmount == null || TotalAmount == "") {
            $('#ReferralAmount').css('border', '1px solid Red');
            isValid = false;
        }

        //}
        //var checkValid = validate_AMOUNTFORM();
        if (isValid == false) {
            return false;
        } else {
            $.ajax({
                type: "POST",
                url: "/UsersDetails/ReferralPayment",
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify(record),
                success: function (result) {
                    $("#amountmodal").modal("hide");
                    $("#ReferralAmount").val(0);
                    toastr.success("Referral Amount Submitted Successfully", "Success")
                    BindUsers();
                }
            });
        }
    });


}

//me
//function ReferralPayment(Id) {    
//    var id = Id
//    $("#ReferralPaymentBtn").off('click').click(function () {
//        var UserId = id;
//        //ReviewId = $("#RewId").val();
//        var TotalAmount = $("#ReferralAmount").val();
//        var ReviewDate = $("#ReviewDate").val();
//        var record = {
//            'UserId': UserId,
//            'TotalAmount': TotalAmount
//        };
//        //function validate_AMOUNTFORM() {
//            //alert($('#ReferralAmount').val());
//            var isValid = true;
//            if ($(TotalAmount) == "0" || TotalAmount == null || TotalAmount == "") {
//                $('#ReferralAmount').css('border', '1px solid Red');
//                isValid = false;
//            }
//        //}
//        //var checkValid = validate_AMOUNTFORM();
//        if (isValid == false) {
//            return false;
//        } else {
//            $.ajax({
//                type: "POST",
//                url: "/UsersDetails/ReferralPayment",
//                contentType: "application/json; charset=utf-8",
//                dataType: 'json',
//                data: JSON.stringify(record),
//                success: function (result) {
//                    $("#ReferralAmount").val(0);
//                    $("#myModal").modal("hide");
//                    BindUsers();
//                }
//            });
//        }
//    });
//}


//function ReferralPayment(Id) {
//    $.ajax({
//        type: "POST",
//        url: "/UsersDetails/ReferralPayment",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{id:"' + Id + '"}',
//        success: function (result) {
//            console.log(result);
//            BindUsers();
//        }
//    });
//}



//function CreateGroupChannel(UId) {
//           $.ajax({
//                type: "POST",
//                url: "/UsersDetails/GetUserAdmin",
//                contentType: "application/json; charset=utf-8",
//                dataType: 'json',
//                data: '{id:"' + UId + '"}',
//                success: function (result) {
//                    var json = JSON.parse(result);
//                    var UserName = json.FirstName + ' ' + json.FirstName;
//                    var AdminEmail = json.AdminEmail;
//                    var  UserId= json.Email;
//                    var AdminName = json.AdminFirstName ;
//                        //old //APP_ID = 808C2226-5F1F-4A96-8431-48D2E07DEEE1
//                        //var APP_ID = "B2B25309-3243-400F-9E29-0BC89B7F5C56";
//                        var APP_ID = "8355AD72-4081-4FF6-90E5-C371ADEB465F";
//                        var USER_ID = UserId;
//                        //var Tocken_Api = "ebbc16b4c72d469764a617c40d821cea5007dacc";
//                        var CHANNEL_URL = "";
//                        var sb = new SendBird({ appId: APP_ID });    
//                        sb.connect(USER_ID, function (user, error) {
//                            if (error) {
//                                return;
//                            }
//                        });
//                        var contractorName = '' + CName + '';
//                        var HomwownerName = '' + HName + '';
//                        var userIds = [HomeownerId, UserId];
//                        var IS_DISTINCT = true;
//                        var NAME = '' + HomwownerName + ' ~ ' + contractorName + '';
//                        var COVER_IMAGE_OR_URL = "";
//                        var DATA = "" + contractorName + "";
//                        var CUSTOM_TYPE = "progress";
//                        sb.GroupChannel.createChannelWithUserIds(userIds, IS_DISTINCT, NAME, COVER_IMAGE_OR_URL, DATA, CUSTOM_TYPE, function (groupChannel, error) {
//                            if (error) {
//                                return;
//                            }
//                            //joinGroupChannel(URL);
//                            window.location.href = "/Chats/Index?userid=" + HomeownerId + "&ChannelUrl=" + groupChannel.url;
//                            if (true) {
//                                $('#messaging_channel_list').append(
//                                  '<div class="left-nav-channel left-nav-channel-group left-nav-channel-group--active" ' +
//                                  '     onclick="joinGroupChannel(\'' + URL + '\')"' +
//                                  '     data-channel-url="' + URL + '"' +
//                                  '>' +
//                                  '<div class="left-nav-channel-members">' + contractorName + '</div>' +
//                                  '<div class="left-nav-channel-lastmessage"></div>' +
//                                  '<div class="left-nav-channel-lastmessagetime"></div>' +
//                                  '</div>'
//                                );
//                            }
//                            console.log(groupChannel);
//                        });\
//                }
//            });
//}



function CreateGroupChannel(UId) {
        
    $.ajax({
        type: "POST",
        url: "/UsersDetails/GetUserAdmin",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{id:"' + UId + '"}',
        success: function (result) {
            
            var UserName = "";
            var json = JSON.parse(result);
            var AccountTypeID = json.AccountTypeID;
            if (AccountTypeID==2) {
                UserName = json.CompanyName;
            } else {
                UserName = json.FirstName;
            }
            
            var AdminEmail = json.AdminEmail;
            var UserId = json.Email;
            //var AdminName = json.AdminName;
            var AdminName = "Homii Admin";


            //old //APP_ID = 808C2226-5F1F-4A96-8431-48D2E07DEEE1
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
            var contractorName = '' + UserName + '';
            var HomwownerName = '' + AdminName + '';
            var userIds = [UserId , AdminEmail ];
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
                window.location.href = "/Chats/Index?userid=" + AdminEmail + "&ChannelUrl=" + groupChannel.url;

                if (true) {
                    $('#messaging_channel_list').append(
                    '<div class="left-nav-channel left-nav-channel-group left-nav-channel-group--active" ' +
                    ' onclick="joinGroupChannel(\'' + URL + '\')"' +
                    ' data-channel-url="' + URL + '"' +
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
    });







}


//DeletedWork
function DeleteUser(Id) {
    $("#deletemodal").modal("show");
    $("#DeleteId").click(function () {
        DeleteAdminUser(Id);
    });
}

function DeleteAdminUser(id) {


    var url = '/Profiles/DeleteUser?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {
            $("#deletemodal").modal("hide");
            toastr.success("Delete Successfully", "Success");
            BindKPIs();
            BindUsers();


        }
    });
}

function init(jQuery) {
             
    BindUsers();
    BindKPIs();
    BindRevenueRefferalKPIs();
   

}



$(document).ready(init);

