    

function GetAllContractorProjects() {
    var html = null;

    var ContractorStatus = "";

    $.ajax({
        type: "POST",
        url: "/ContractorProject/GetContractorProjectList",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ContractorStatus: "' + ContractorStatus + '"}',
        success: function (result) {
            BindAddProjectLastSeen();
            $('.loader').css("display", "none");      
            var json = JSON.parse(result);
            $('#tbodyOpen').html('');
           
            $("#example").dataTable().fnDestroy();
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var JobTitle = json[index].JobTitle;
                var CategoryID = json[index].CategoryID;
                var JobDescription = json[index].JobDescription;
                var EstimatedStartDate = json[index].EstimatedStartDate;
                var EstimatedBudget = json[index].EstimatedBudget;

                var CityID = json[index].CityID;
                var ProvinceID = json[index].ProvinceID;

                var CityName = json[index].CityName;
                var ProvinceName = json[index].ProvinceName;
                var CategoryName = json[index].CategoryName;
                var CreatedDate = json[index].CreatedDate;
                var LastCreatedDate = json[index].LastCreatedDate;
                var HEmail = json[index].HomeownerEmail;
                var HFirstName = json[index].HomeownerFirstName;
                var HLastName = json[index].HomeownerLastName;
                var CEmail = json[index].ContractorEmail;
                var CFirstName = json[index].ContractorFirstName;
                var CLastName = json[index].ContractorLastName;
                var CCompanyName = json[index].ContractorCompanyName;
                var ProUserId = json[index].ProUserId;
                var HName = HFirstName + ' ' + HLastName;
                //var CName = CFirstName + ' ' + CLastName;
                var CName = CCompanyName;

                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
                $("#CEmail").val(CEmail);
                $("#HEmail").val(HEmail);
                $("#CName").val(CName);
                $("#HName").val(HName);
                $("#TotalProjectContract").val(CName);

                if (CreatedDate > LastCreatedDate) {
                    html = '<tr class="New">';
                }
                else {
                    html = '<tr class="Old">';
                }

                html += '<td>' + JobTitle + '</td>' +
                //'<td>' + CategoryName + '</td>' +
                '<td><span data-toggle="tooltip" title="' + JobDescription + '" onmouseover="Showmsgtooltip()" class="datatooltips">' + JobDescription + '</span></td>' +
                '<td>' + EstimatedBudget + '</td>' +
                '<td>' + EstimatedStartDate + '</td>' +
                '<td>' + CityName + '</td>';

                if (CreatedDate > LastCreatedDate) {
                   // html += '<td style="text-align: center;">New</td>';
                }
                else {
                   // html += '<td style="text-align: center;">old</td>';
                }

                html += '<td><a class="clr-oranges CursorPointer" onclick="CreateGroupChannel(' + ProUserId + ')">Message Homeowner</a></td>' +
                    '<td><a class="clr-oranges CursorPointer" onclick="ShowViewPopup(' + Id + ')">Images/Documents</a></td>' +
                 //'<td><a class="clr-oranges CursorPointer" onclick="MyJobs(' + Id + ')">My Job</a></td>' +
                 '<td style="text-align: center;">' +
                    '<a class="clr-oranges CursorPointer" data-toggle="modal" data-target="#Completemodal" onclick = "GetCompletePopup(' + Id + ')"><i class="flaticon2-edit"></i>Working</a></li>' +
                     //onclick = "CompleteJob(' + Id + ')"    data-toggle="modal" data-target="#edit_modal"
                '</td>' +

            '</tr>';
                $('#tbodyOpen').append(html);
            });
            //GetMyJobs();
            //GetContractorComplete();
          
            $("#example").dataTable({
               // "order": [[4, "desc"]]
                "language": {
                    "paginate": {
                        "previous": "Previous page",
                        "next": "Next page"
                    }
                }
            });
            GetContractorComplete();
        }
    });
   
}

//10 April 2020
//function CreateGroupChannel() {
//    var UserId = $("#CEmail").val();
//    var HomeownerId = $("#HEmail").val();
//    var CName = $("#CName").val();
//    var HName = $("#HName").val();
//    //, HomeownerId, CName, HName
//    //var APP_ID = "B2B25309-3243-400F-9E29-0BC89B7F5C56";
//    var APP_ID = "8355AD72-4081-4FF6-90E5-C371ADEB465F";
//    var USER_ID = UserId;
//    //var Tocken_Api = "ebbc16b4c72d469764a617c40d821cea5007dacc";
//    var CHANNEL_URL = "";
//    var sb = new SendBird({ appId: APP_ID });
//    sb.connect(USER_ID, function (user, error) {
//        if (error) {
//            return;
//        }
//    });
//    var contractorName = '' + CName + '';
//    var HomwownerName = '' + HName + '';
//    var userIds = [HomeownerId, UserId];
//    var IS_DISTINCT = true;
//    var NAME = '' + HomwownerName + ' ~ ' + contractorName + '';
//    var COVER_IMAGE_OR_URL = "";
//    var DATA = "" + contractorName + "";
//    var CUSTOM_TYPE = "progress";
//    sb.GroupChannel.createChannelWithUserIds(userIds, IS_DISTINCT, NAME, COVER_IMAGE_OR_URL, DATA, CUSTOM_TYPE, function (groupChannel, error) {
//        if (error) {
//            return;
//        }
//        //joinGroupChannel(URL);
//        window.location.href = "/Chats/Index?userid=" + HomeownerId + "&ChannelUrl=" + groupChannel.url;
//    });
//}


function CreateGroupChannel(ProUserId) { 
        $.ajax({
        type: "POST",
        url: "/ContractorProject/GetUser",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{id:"' + ProUserId + '"}',
        success: function (result) {
            
            var json = JSON.parse(result);
            var UserId = $("#CEmail").val();
            var HomeownerId = json.Email;
            var CName = $("#CName").val();
            var HName = json.FirstName + ' ' + json.LastName;
            //, HomeownerId, CName, HName
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
            var contractorName = '' + CName + '';
            var HomwownerName = '' + HName + '';
            var userIds = [UserId,HomeownerId];
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
                window.location.href = "/Chats/Index?userid=" + UserId + "&ChannelUrl=" + groupChannel.url;
            });


        }
    });




}



//function MyJobs(Id) {
//    var html = null;
//    $.ajax({
//        type: "POST",
//        url: "/ContractorProject/MyJob",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ProjectId: "' + Id + '"}',
//        success: function (result) {
//            var json = JSON.parse(result);
//            $('#tbodyMyJobs').html('');
//            $(json).each(function (index, value) {
//                var Id = json[index].Id;
//                var JobTitle = json[index].JobTitle;
//                var CategoryID = json[index].CategoryID;
//                var JobDescription = json[index].JobDescription;
//                var EstimatedStartDate = json[index].EstimatedStartDate;
//                var EstimatedBudget = json[index].EstimatedBudget;
//                var CityID = json[index].CityID;
//                var ProvinceID = json[index].ProvinceID;
//                var CityName = json[index].CityName;
//                var ProvinceName = json[index].ProvinceName;
//                var CategoryName = json[index].CategoryName;
//                var ConId = json[index].ConId;
//                //EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
//                //$("#image").attr("src", FilePath);
//                //$("#JobTitle").attr(JobTitle);
//                //$("#JobTitle").val(JobTitle);
//                //$("#Category").val(Category);
//                //$("#JobDescription").val(JobDescription);
//                //$("#EstimatedStartDate").val(EstimatedStartDate);
//                //$("#EstimatedBudget").val(EstimatedBudget);
//                //$("#Province").val(Province);
//                //$("#City").val(City);
//                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
//                html = '<tr>' +
//               // '<td>' + Id + '</td>' +
//                 '<td>' + JobTitle + '</td>' +
//                 '<td>' + CategoryName + '</td>' +
//                 '<td>' + JobDescription + '</td>' +
//                 '<td>' + EstimatedBudget + '</td>' +
//                 '<td>' + EstimatedStartDate + '</td>' +
//                '<td>' + CityName + '</td>' +
//                // '<td>' + ProvinceName + '</td>' +
//                //  '<td style="text-align: center;">' +
//                //        '<a onclick = "View(' + Id + ')"  data-toggle="modal" data-target="#edit_modal">View</a> ||' +
//                //        '<a onclick = "CompleteJobs(' + ConId + ')"  data-toggle="modal" data-target="#edit_modal"><i class="flaticon2-edit"></i>Complete</a></li>' +
//                //'</td>' +
//                //'<td><a class="clr-oranges" onclick = "ShowViewPopup(' + Id + ')" data-toggle="modal" data-target="#edit_modal">View</a></td>' +
//                '<td style="text-align: center;">' +
//                    '<a class="clr-oranges CursorPointer" onclick = "CompleteJob(' + ConId + ')"  data-toggle="modal" data-target="#edit_modal"><i class="flaticon2-edit"></i>Complete</a></li>' +
//                '</td>' +
//                 //'<td><a href="javascript:;" data-toggle="modal" data-target="#deletemodal" onclick="GetId(' + Id + ')" >Delete</a></td>' +
//                 '<td><a class="clr-oranges" onclick = "CompleteJobs(' + ConId + ',' + Id + ')" data-toggle="modal" data-target="#edit_modal">Mark as Complete</a></td>' +
//                 '<td><a class="clr-oranges" href="javascript:;">Contractor Matches</a></td>' +
//            '</tr>';
//                $('#tbodyMyJobs').append(html);
//            });           
//        }
//    });
//            GetAllContractorProjects();
//}

function CompleteJob( Id) {
    //function CompleteJob(ConId, Id) {


    var url = '/ContractorProject/CompleteJob';

    $.ajax({
        type: "POST",
        url: url,
        //contentType: "application/json; charset=utf-8",
        //dataType: 'json',
        data: '{"ProjectId: "' + Id + '"  }',
        //url: "/ContractorProject/MyJob",
               contentType: "application/json; charset=utf-8",
               dataType: 'json',
               data: '{ProjectId: "' + Id + '"}',
        success: function (result) {

            //var json = JSON.parse(result);
            //var JobTitle = json.JobTitle;
            //var CategoryID = json.CategoryID;
            //var JobDescription = json.JobDescription
            //var EstimatedStartDate = json.EstimatedStartDate;
            //var EstimatedBudget = json.EstimatedBudget;
            //var Province = json.ProvinceID;
            //var City = json.CityID;
            //$("#JobTitle").val(JobTitle);
            //$("#CategoryIDAdd").val(CategoryID);
            //$("#JobDescription").val(JobDescription);
            //EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
            //$("#EstimatedStartDate").val(EstimatedStartDate);
            //$("#EstimatedBudget").val(EstimatedBudget);
            //$("#ProvinceIDAdd").val(Province);
            //$("#CityIDAdd").val(City);
            $('.loader').css("display", "flex");      
            //GetCountOpenProject();
            //GetCountCompleteProject();
            //GetAllContractorProjects();
            window.location.href = "/ContractorProject/Index";
        }
    });
            
}



function GetCompletePopup(id) {

    $("#Completemodal").modal("show");
    //$("#DeleteId").attr('data-id', id);
    $("#CompleteId").click(function () {
        CompleteJob(id);

    });

}





//function GetMyJobs() {    
//    var html = null;
//    var ContractorStatus = "Open Job";
//    $.ajax({
//        type: "POST",
//        url: "/ContractorProject/GetMyJobAndCompleted",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ContractStatus: "' + ContractorStatus + '"}',
//        success: function (result) {
//            
//            var json = JSON.parse(result);
//            $('#tbodyMyJobs').html('');
//            $(json).each(function (index, value) {
//                var Id = json[index].ProId;
//                var JobTitle = json[index].JobTitle;
//                var CategoryID = json[index].CategoryID;
//                var JobDescription = json[index].JobDescription;
//                var EstimatedStartDate = json[index].EstimatedStartDate;
//                var EstimatedBudget = json[index].EstimatedBudget;
//                var CityID = json[index].CityID;
//                var ProvinceID = json[index].ProvinceID;
//                var CityName = json[index].CityName;
//                var ProvinceName = json[index].ProvinceName;
//                var CategoryName = json[index].CategoryName;
//                var ConId = json[index].ConId;
//                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
//                html = '<tr>' +
//               // '<td>' + Id + '</td>' +
//                 '<td>' + JobTitle + '</td>' +
//                 '<td>' + CategoryName + '</td>' +
//                 '<td>' + JobDescription + '</td>' +
//                 '<td>' + EstimatedBudget + '</td>' +
//                 '<td>' + EstimatedStartDate + '</td>' +
//                '<td>' + CityName + '</td>' +
//                 //'<td>' + ProvinceName + '</td>' +
//                // '<td style="text-align: center;">' +
//                //    '<a href="" onclick="GetId(' + Id + ')" id="modalbtn" class="trigger-btn" data-toggle="modal">Delete</a>' +
//                //'</td>' +
//                '<td style="text-align: center;">' +
//                 '<a class="clr-oranges CursorPointer" onclick = "ShowViewPopup(' + Id + ')"><i class="flaticon2-edit" ></i>View</a></li>' +
//                 '</td>' +
//                 '<td style="text-align: center;">' +
//                    '<a class="clr-oranges CursorPointer" onclick = "CompleteJob(' + ConId + ')"  data-toggle="modal" data-target="#edit_modal"><i class="flaticon2-edit"></i>Complete</a></li>' +
//                '</td>' +
//            '</tr>';
//                $('#tbodyMyJobs').append(html);
//            });
//        }
//    });
//}


function GetContractorComplete() {
    var html = null;

    var ContractorStatus = "Completed Job";
    $.ajax({
        type: "POST",
        url: "/ContractorProject/GetMyJobAndCompleted",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ContractStatus: "' + ContractorStatus + '"}',
        success: function (result) {

            var json = JSON.parse(result);
            $('#tbodyComplete').html('');
            $("#example1").dataTable().fnDestroy();
            $(json).each(function (index, value) {
                var Id = json[index].ProjectId;
                var JobTitle = json[index].JobTitle;
                var CategoryID = json[index].CategoryID;
                var JobDescription = json[index].JobDescription;
                var EstimatedStartDate = json[index].EstimatedStartDate;
                var EstimatedBudget = json[index].EstimatedBudget;
                var ProUserId = json[index].ProUserId;
                var CityID = json[index].CityID;
                var ProvinceID = json[index].ProvinceID;

                var CityName = json[index].CityName;
                var ProvinceName = json[index].ProvinceName;
                var CategoryName = json[index].CategoryName;

                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
                html = '<tr>' +
               // '<td>' + Id + '</td>' +

                 '<td>' + JobTitle + '</td>' +
                 //'<td>' + CategoryName + '</td>' +
                 //'<td><span data-toggle="tooltip" title="Hooray!" class="datatooltips">' + JobDescription + '</span></td>' +
                  '<td><span data-toggle="tooltip" title="' + JobDescription + '" onmouseover="Showmsgtooltip()" class="datatooltips">' + JobDescription + '</span></td>' +
                 '<td>' + EstimatedBudget + '</td>' +
                 '<td>' + EstimatedStartDate + '</td>' +
                '<td>' + CityName + '</td>' +
                    '<td><a class="clr-oranges CursorPointer" onclick="ShowViewPopup(' + Id + ')">Images/Documents</a></td>' +

                  //'<td> DONE </td>' +
                  '<td><a class="clr-oranges CursorPointer" onclick="CreateGroupChannel(' + ProUserId + ')">Message Homeowner</a></td>' +
            '</tr>';
                $('#tbodyComplete').append(html);
            });
            $("#example1").dataTable({
                "order": [[4, "desc"]],
                "language": {
                    "paginate": {
                        "previous": "Previous page",
                        "next": "Next page"
                    }
                }
            });
        }
    });
}


function ShowViewPopup(Id) {
    
    
    $("#JobTitle").val('');
    $("#Category").val('');
    $("#JobDescription").val('');
    $("#EstimatedStartDate").val('');
    $("#EstimatedBudget").val('');
    $("#Province").val('');
    $("#City").val('');
    $("#editmodal").modal("show");
    View(Id);

}

//function View(Id) {
//    ID = Id;
//    var url = '/ContractorProject/GetProjectWithId?Id=' + Id;
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ Id: "' + Id + '" }',
//        asyn: false,
//        success: function (result) {
//            var JobTitle = result.JobTitle;
//            var Category = result.CategoryName;
//            var JobDescription = result.JobDescription
//            var EstimatedStartDate = result.EstimatedStartDate;
//            var EstimatedBudget = result.EstimatedBudget;
//            var Province = result.ProvinceName;
//            var City = result.CityName;
//            var FilePath = result.FilePath;
//            EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
//            $("#image").attr("src", FilePath);
//            $("#JobTitle").attr(JobTitle);
//            $("#JobTitle").val(JobTitle);
//            $("#Category").val(Category);
//            $("#JobDescription").val(JobDescription);
//            $("#EstimatedStartDate").val(EstimatedStartDate);
//            $("#EstimatedBudget").val(EstimatedBudget);
//            $("#Province").val(Province);
//            $("#City").val(City);
//        }
//    });
//}

function View(Id) {
    ID = Id;
    var url = '/ContractorProject/GetProjectWithId?Id=' + Id;
    $('.Documents').html('');
    $('.ImageContainer').html('');
    $('.DocumentContainer').html('');
    $('.no-upproject').html("");
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ Id: "' + Id + '" }',
        asyn: false,
        ////22April2020 Fahad
        //success: function (result) {
        //    
        //    $('.ImageContainer').html("");
        //    var JobTitle = result.JobTitle;
        //    var Category = result.CategoryName;
        //    var JobDescription = result.JobDescription
        //    var EstimatedStartDate = result.EstimatedStartDate;
        //    var EstimatedBudget = result.EstimatedBudget;
        //    var Province = result.ProvinceName;
        //    var City = result.CityName;
        //    var FilePath = result.FilePath;
        //    var IsActive = result.IsActive;
        //    EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
        //    //$("#image").attr("src", FilePath);
        //    //$('.ImageContainer').append('<h3>Images</h3>');
        //    //$('.DocumentContainer').append('<h3>Documents</h3>');
        //    if (IsActive) {
        //        if (FilePath == "" || FilePath == null || FilePath == undefined) {
        //            $('.ImageContainer').append('<div><h3>Images not available</h3></div>');
        //        }
        //        if (FilePath.includes("png") || FilePath.includes("jpg")) {
        //            $('.ImageContainer').append('<div class="img_upload_prjct" ><a href=' + FilePath + ' target="_blank"><img src="' + FilePath + '" hight="150" width="150"/></a></div>')
        //        } else {
        //            // $('.DocumentContainer').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '"><i class="fa fa-file" style="font-size:36px;"></i></a><button type="button" class="ImageContainer">X</button></div>');
        //            if (FilePath.includes(".pdf")) {
        //                $('.Documents').append('<div><a href="' + FilePath + '" target="_blank"><span class="pdfIcon"></a></div>');
        //            } else if (FilePath.includes(".xlsx")) {
        //                $('.Documents').append('<div><a href="' + FilePath + '" target="_blank"><span class="excelIcon"></a></div>');
        //            } else if (FilePath.includes(".doc")) {
        //                $('.Documents').append('<div><a href="' + FilePath + '"  target="_blank"><span class="wordIcon"></a></div>');
        //            } else if (FilePath.includes(".ppt")) {
        //                $('.Documents').append('<div><a href="' + FilePath + '"  target="_blank"><span class="pptIcon"></a></div>');
        //            }
        //            else if (FilePath == "" || FilePath == null || FilePath == undefined) {
        //                $('.Documents').append('<div><h3>Document not available</h3></div>');
        //            }
        //        }
        //    }
        //    if (FilePath== null || FilePath == "") {
        //        $('.no-upproject').append('<div><h3>No project upload</h3></div>');
        //    }
        //    $("#JobTitle").attr(JobTitle);
        //    $("#JobTitle").val(JobTitle);
        //    $("#Category").val(Category);
        //    $("#JobDescription").val(JobDescription);
        //    $("#EstimatedStartDate").val(EstimatedStartDate);
        //    $("#EstimatedBudget").val(EstimatedBudget);
        //    $("#Province").val(Province);
        //    $("#City").val(City);
        //}
        success: function (result) {
            
            var d = JSON.parse(result)
            var wrapper = $('.img-gallery');
            var modalPopup = $('.editprofilemodal');
            $('.Documents').html("");

            wrapper.html("");
            modalPopup.html("");
            $('.no-upproject').html("");

            $.each(d, function (index, value) {

                if (value.split(".")[3] == "png" || value.split(".")[3] == "jpg" || value.split(".")[3] == "JPG" || value.split(".")[3] == "PNG") {
                    $('.ImagesHead').append("<h3>Images</h3>");
                    wrapper.append('<a data-fancybox="images" href="' + value + '"><img src="' + value + '" alt="" onclick="Modalclose()" class="gallery_img" style="width:150px; margin-left:10px; float:left;" /><div class="img-searh"><i class="fa fa-search"></i></div></a>');
                }
                else {
                    if (value.split(".")[3] == "pdf") {
                        $('.Documents').append('<div><a href="' + value + '" target="_blank"><span class="pdfIcon"></a></div>');
                    } else if(value.split(".")[3] == "xlsx") {
                        $('.Documents').append('<div><a href="' + value + '" target="_blank"><span class="excelIcon"></a></div>');
                    } else if (value.split(".")[3] == "doc") {
                        $('.Documents').append('<div><a href="' + value + '" target="_blank"><span class="wordIcon"></a></div>');
                    } else if (value.split(".")[3] == "ppt") {
                        $('.Documents').append('<div><a href="' + value + '" target="_blank"><span class="pptIcon"></a></div>');
                    }

                    //$('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '"><i class="fa fa-file" style="font-size:36px;"></i></a><button type="button" class="ImageContainer">X</button></div>');
                }


            })

            if (d == null || d == "") {
                $('#imageGallery').css("display", "none");
                $('.no-upproject').append('<div><h3>No project upload</h3></div>');
            }
            $('[data-fancybox="images"]').fancybox({
                afterLoad: function (instance, current) {
                    var pixelRatio = window.devicePixelRatio || 1;

                    if (pixelRatio > 1.5) {
                        current.width = current.width / pixelRatio;
                        current.height = current.height / pixelRatio;
                    }
                }
            });
        }

    });
    $('.img-gallery').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
}
function Modalclose() {
    $("#editmodal").modal("hide");
}
function BindAddProjectLastSeen() {

    $.ajax({
        type: "POST",
        url: "/ContractorProject/AddProjectLastSeen",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

        }
    });

}

function CountOfNewProject() {
    var countPro = $("#CountNewProjectList").val();

    $.ajax({
        type: "POST",
        url: "/dashBoard/GetCountOfNewProject",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            //alert(json.CountNewProject);
            if (countPro != json.CountNewProject) {
                countPro = json.CountNewProject;
                $("#CountNewProjectList").html(json.CountNewProject);
            }
        }
    });
    setInterval(CountOfNewProject, 100000);
}

function GetCountCompleteProject() {
    var ProjectStatus = "Completed Job";
    $.ajax({

        type: "GET",
        url: "/ContractorProject/GetCompleteProConCount?ProjectStatus=" + ProjectStatus,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        //data: '{ProjectStatus: ' + ProjectStatus + '}',
        success: function (result) {

            $('.loader').css("display", "none");      
            var json = JSON.parse(result);
            $('#CompleteProjectContract').text(json);
            //$(json).each(function (index, value) {
            //    var CompleteProjectCount = json[index].MonthRecord;

            //    $('#CompleteProjectContract').text(CompleteProjectCount);
            //});


        }
    });
}

function GetCountOpenProject() {
    
    $.ajax({

        type: "GET",
        url: "/ContractorProject/GetContractorProjectCount",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        //data: '{ProjectStatus: ' + ProjectStatus + '}',
        success: function (result) {

            $('.loader').css("display", "none");      
            var json = JSON.parse(result);
            $('#TotalProjectContract').text(json);
            //$(json).each(function (index, value) {
            //    var CompleteProjectCount = json[index].MonthRecord;

            //    $('#CompleteProjectContract').text(CompleteProjectCount);
            //});


        }
    });
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
            if (json.LoginStatus == false && json.AccountTypeID == 2) {
                $("#VideomodalProCont").modal("show");
                $.ajax({
                    type: "POST",
                    url: "/Project/UpdateLoginStatus",
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    data: '{}',
                    success: function (result) {
                        //alert("Success");
                    }
                });
            }

            //$("#VideomodalProCont").modal("hide");
        }
    });
}

function Showmsgtooltip() {
    //alert("this is tool msg");
    $('[data-toggle="tooltip"]').tooltip();
}




function initPro(jQuery) {
    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
    });
    $('[data-toggle="tooltip"]').tooltip();
    $(".hide-tab").click(function () {
        $(".hide-tab").addClass("pro-active");
        $(".show-tab").removeClass("pro-active");
        $(".tbl-hide").show();
        $(".tbl-show").hide();
    });
    $(".show-tab").click(function () {
        $(".show-tab").addClass("pro-active");
        $(".hide-tab").removeClass("pro-active");
        $(".tbl-hide").hide();
        $(".tbl-show").show();
    });
    $('.loader').css("display", "flex");
    var emailcont = $("#Cemail").val();
    $("#CEmail").val(emailcont);
    ShowVideoModalLogin();
    GetCountOpenProject();
    GetCountCompleteProject();
    GetAllContractorProjects();
    
    //CountOfNewProject();
    //$('body').click(function (e) {
    //    $('.embed-responsive').children('iframe').attr('src', 'http://portal.homii.ca/Content/assets/videos/CONTRACTOR%20FINAL.mp4');
    //}); 
    //GetMyJobs();
    //GetContractorComplete();
}

$(document).ready(initPro);












































//me

////function openCity(cityName, elmnt) {
////    var i, tabcontent, tablinks;
////    tabcontent = document.getElementsByClassName("tabcontent");
////    for (i = 0; i < tabcontent.length; i++) {
////        tabcontent[i].style.display = "none";
////    }
////    tablinks = document.getElementsByClassName("tablink");
////    for (i = 0; i < tablinks.length; i++) {
////        tablinks[i].style.backgroundColor = "";
////    }
////    document.getElementById(cityName).style.display = "block";
////    elmnt.style.backgroundColor = color;
////}
////// Get the element with id="defaultOpen" and click on it
////document.getElementById("defaultOpen").click();


//function GetAllContractorProjects() {
//    var html = null;   
//    var ContractorStatus = "";  
//    $.ajax({
//        type: "POST",
//        url: "/ContractorProject/GetContractorProjectList",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ContractorStatus: "' + ContractorStatus + '"}',
//        success: function (result) {
//            $('.loader').css("display", "none");      
//            var json = JSON.parse(result);
//            $('#tbodyOpen').html('');
//            
//            $(json).each(function (index, value) {
//                var Id = json[index].Id;
//                var JobTitle = json[index].JobTitle;
//                var CategoryID = json[index].CategoryID;
//                var JobDescription = json[index].JobDescription;
//                var EstimatedStartDate = json[index].EstimatedStartDate;
//                var EstimatedBudget = json[index].EstimatedBudget;
//                var CityID = json[index].CityID;
//                var ProvinceID = json[index].ProvinceID;
//                var CityName = json[index].CityName;
//                var ProvinceName = json[index].ProvinceName;
//                var CategoryName = json[index].CategoryName;
//                var CreatedDate = json[index].CreatedDate;
//                var LastCreatedDate = json[index].LastCreatedDate;
//                var HEmail = json[index].HomeownerEmail;
//                var HFirstName = json[index].HomeownerFirstName;
//                var HLastName = json[index].HomeownerLastName;
//                var CEmail = json[index].ContractorEmail;
//                var CFirstName = json[index].ContractorFirstName;
//                var CLastName = json[index].ContractorLastName;
//                var HName = HFirstName + ' ' + HLastName;
//                var CName = CFirstName + ' ' + CLastName;
//                $("#CEmail").val(CEmail);
//                $("#HEmail").val(HEmail);
//                $("#CName").val(CName);
//                $("#HName").val(HName);
//                if (CreatedDate > LastCreatedDate) {
//                    html = '<tr class="New">';
//                }
//                else {
//                    html = '<tr class="Old">';
//                }
//                html += '<td>' + JobTitle + '</td>' +
//                '<td>' + CategoryName + '</td>' +
//                '<td>' + JobDescription + '</td>' +
//                '<td>' + EstimatedBudget + '</td>' +
//                '<td>' + EstimatedStartDate + '</td>' +
//                '<td>' + CityName + '</td>';               
//                if (CreatedDate > LastCreatedDate) {
//                    html += '<td style="text-align: center;">New</td>';
//                }
//                else {
//                    html += '<td style="text-align: center;">old</td>';
//                }               
//                html += '<td><a class="clr-oranges CursorPointer" onclick="CreateGroupChannel()">Chat</a></td>' +
//                '<td><a class="clr-oranges CursorPointer" onclick="ShowViewPopup(' + Id + ')">View</a></td>' +
//                 '<td><a class="clr-oranges CursorPointer" onclick="MyJobs(' + Id + ')">My Job</a></td>' +
//            '</tr>';
//                $('#tbodyOpen').append(html);
//            });
//            GetMyJobs();
//            GetContractorComplete();
//        }
//    });
//}



//function CreateGroupChannel() {    
//    var UserId = $("#CEmail").val();
//    var HomeownerId = $("#HEmail").val();
//    var CName = $("#CName").val();
//    var HName = $("#HName").val();
//    //, HomeownerId, CName, HName
//    var APP_ID = "B2B25309-3243-400F-9E29-0BC89B7F5C56";
//    var USER_ID = UserId;
//    //var Tocken_Api = "ebbc16b4c72d469764a617c40d821cea5007dacc";
//    var CHANNEL_URL = "";
//    var sb = new SendBird({ appId: APP_ID });
//    sb.connect(USER_ID, function (user, error) {
//        if (error) {
//            return;
//        }
//    });
//    var contractorName = '' + CName + '';
//    var HomwownerName = '' + HName + '';
//    var userIds = [HomeownerId, UserId];
//    var IS_DISTINCT = true;
//    var NAME = '' + HomwownerName + ' ~ ' + contractorName + '';
//    var COVER_IMAGE_OR_URL = "";
//    var DATA = "" + contractorName + "";
//    var CUSTOM_TYPE = "progress";
//    sb.GroupChannel.createChannelWithUserIds(userIds, IS_DISTINCT, NAME, COVER_IMAGE_OR_URL, DATA, CUSTOM_TYPE, function (groupChannel, error) {
//        if (error) {
//            return;
//        }
//        //joinGroupChannel(URL);
//        window.location.href = "/Chats/Index?userid=" + HomeownerId + "&ChannelUrl=" + groupChannel.url;
//    });
//}



//function MyJobs(Id) {
//    var html = null;
//    $.ajax({
//        type: "POST",
//        url: "/ContractorProject/MyJob",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ProjectId: "' + Id + '"}',
//        success: function (result) {
//            var json = JSON.parse(result);
//            $('#tbodyMyJobs').html('');
//            $(json).each(function (index, value) {
//                var Id = json[index].Id;
//                var JobTitle = json[index].JobTitle;
//                var CategoryID = json[index].CategoryID;
//                var JobDescription = json[index].JobDescription;
//                var EstimatedStartDate = json[index].EstimatedStartDate;
//                var EstimatedBudget = json[index].EstimatedBudget;
//                var CityID = json[index].CityID;
//                var ProvinceID = json[index].ProvinceID;
//                var CityName = json[index].CityName;
//                var ProvinceName = json[index].ProvinceName;
//                var CategoryName = json[index].CategoryName;
//                var ConId = json[index].ConId;
//                html = '<tr>' +
//               // '<td>' + Id + '</td>' +
//                 '<td>' + JobTitle + '</td>' +
//                 '<td>' + CategoryName + '</td>' +
//                 '<td>' + JobDescription + '</td>' +
//                 '<td>' + EstimatedBudget + '</td>' +
//                 '<td>' + EstimatedStartDate + '</td>' +
//                '<td>' + CityName + '</td>' +
//                // '<td>' + ProvinceName + '</td>' +
//                //  '<td style="text-align: center;">' +
//                //        '<a onclick = "View(' + Id + ')"  data-toggle="modal" data-target="#edit_modal">View</a> ||' +
//                //        '<a onclick = "CompleteJobs(' + ConId + ')"  data-toggle="modal" data-target="#edit_modal"><i class="flaticon2-edit"></i>Complete</a></li>' +
//                //'</td>' +
//                '<td><a class="clr-oranges" onclick = "View(' + Id + ')" data-toggle="modal" data-target="#edit_modal">View</a></td>' +
//                 //'<td><a href="javascript:;" data-toggle="modal" data-target="#deletemodal" onclick="GetId(' + Id + ')" >Delete</a></td>' +
//                 '<td><a class="clr-oranges" onclick = "CompleteJobs(' + ConId + ',' + Id + ')" data-toggle="modal" data-target="#edit_modal">Mark as Complete</a></td>' +
//                 '<td><a class="clr-oranges" href="javascript:;">Contractor Matches</a></td>' +
//            '</tr>';
//                $('#tbodyMyJobs').append(html);
//            });
//            GetAllContractorProjects();
//            GetMyJobs();
//            GetContractorComplete();
//        }
//    });
//}

//function CompleteJob(ConId, Id) {
//    var url = '/ContractorProject/CompleteJob';
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ ConStatusId: "' + ConId + '",ProjectId: "' + Id + '"  }',
//        success: function (result) {            
//            var json = JSON.parse(result);
//            var JobTitle = json.JobTitle;
//            var CategoryID = json.CategoryID;
//            var JobDescription = json.JobDescription
//            var EstimatedStartDate = json.EstimatedStartDate;
//            var EstimatedBudget = json.EstimatedBudget;
//            var Province = json.ProvinceID;
//            var City = json.CityID;
//            $("#JobTitle").val(JobTitle);
//            $("#CategoryIDAdd").val(CategoryID);
//            $("#JobDescription").val(JobDescription);
//            $("#EstimatedStartDate").val(EstimatedStartDate);
//            $("#EstimatedBudget").val(EstimatedBudget);
//            $("#ProvinceIDAdd").val(Province);
//            $("#CityIDAdd").val(City);
//            GetAllContractorProjects();
//            GetMyJobs();
//            GetContractorComplete();
//        }
//    });
//}

//function GetMyJobs() {
//    
//    var html = null;
//    var ContractorStatus = "Open Job";
//    $.ajax({
//        type: "POST",
//        url: "/ContractorProject/GetMyJobAndCompleted",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ContractStatus: "' + ContractorStatus + '"}',
//        success: function (result) {
//            
//            var json = JSON.parse(result);
//            $('#tbodyMyJobs').html('');
//            $(json).each(function (index, value) {
//                var Id = json[index].Id;
//                var JobTitle = json[index].JobTitle;
//                var CategoryID = json[index].CategoryID;
//                var JobDescription = json[index].JobDescription;
//                var EstimatedStartDate = json[index].EstimatedStartDate;
//                var EstimatedBudget = json[index].EstimatedBudget;
//                var CityID = json[index].CityID;
//                var ProvinceID = json[index].ProvinceID;
//                var CityName = json[index].CityName;
//                var ProvinceName = json[index].ProvinceName;
//                var CategoryName = json[index].CategoryName;
//                var ConId = json[index].ConId;
//                html = '<tr>' +
//               // '<td>' + Id + '</td>' +
//                 '<td>' + JobTitle + '</td>' +
//                 '<td>' + CategoryName + '</td>' +
//                 '<td>' + JobDescription + '</td>' +
//                 '<td>' + EstimatedBudget + '</td>' +
//                 '<td>' + EstimatedStartDate + '</td>' +
//                '<td>' + CityName + '</td>' +
//                 //'<td>' + ProvinceName + '</td>' +
//                // '<td style="text-align: center;">' +
//                //    '<a href="" onclick="GetId(' + Id + ')" id="modalbtn" class="trigger-btn" data-toggle="modal">Delete</a>' +
//                //'</td>' +
//                '<td style="text-align: center;">' +
//                 '<a class="clr-oranges CursorPointer" onclick = "View(' + Id + ')"><i class="flaticon2-edit" ></i>View</a></li>' +
//                 '</td>' +
//                 '<td style="text-align: center;">' +
//                    '<a class="clr-oranges CursorPointer" onclick = "CompleteJob(' + ConId + ')"  data-toggle="modal" data-target="#edit_modal"><i class="flaticon2-edit"></i>Complete</a></li>' +
//                '</td>' +
//            '</tr>';
//                $('#tbodyMyJobs').append(html);
//            });           
//        }
//    });
//}

//function GetContractorComplete() {
//    var html = null;
//    var ContractorStatus = "Completed Job";
//    $.ajax({
//        type: "POST",
//        url: "/ContractorProject/GetMyJobAndCompleted",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ContractStatus: "' + ContractorStatus + '"}',
//        success: function (result) {
//            var json = JSON.parse(result);
//            $('#tbodyComplete').html('');
//            $(json).each(function (index, value) {
//                var Id = json[index].Id;
//                var JobTitle = json[index].JobTitle;
//                var CategoryID = json[index].CategoryID;
//                var JobDescription = json[index].JobDescription;
//                var EstimatedStartDate = json[index].EstimatedStartDate;
//                var EstimatedBudget = json[index].EstimatedBudget;
//                var CityID = json[index].CityID;
//                var ProvinceID = json[index].ProvinceID;
//                var CityName = json[index].CityName;
//                var ProvinceName = json[index].ProvinceName;
//                var CategoryName = json[index].CategoryName;
//                html = '<tr>' +
//               // '<td>' + Id + '</td>' +
//                 '<td>' + JobTitle + '</td>' +
//                 '<td>' + CategoryName + '</td>' +
//                 '<td>' + JobDescription + '</td>' +
//                 '<td>' + EstimatedBudget + '</td>' +
//                 '<td>' + EstimatedStartDate + '</td>' +
//                '<td>' + CityName + '</td>' +                
//                  '<td> DONE </td>' +
//            '</tr>';
//                $('#tbodyComplete').append(html);
//            });
//        }
//    });
//}

//function ShowViewPopup(id) {
//    $("#editmodal").modal("show");
//        View(id);
//}

//function View(id) {
//    ID = id;
//    var url = '/ContractorProject/GetProjectWithId?Id=' + id;
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ Id: "' + id + '" }',
//        asyn:false,
//        success: function (result) {
//            var JobTitle = result.JobTitle;
//            var Category = result.CategoryName;
//            var JobDescription = result.JobDescription
//            var EstimatedStartDate = result.EstimatedStartDate;
//            var EstimatedBudget = result.EstimatedBudget;
//            var Province = result.ProvinceName;
//            var City = result.CityName;
//            var FilePath = result.FilePath;
//            $("#image").attr("src", FilePath);
//            $("#JobTitle").attr(JobTitle);
//            $("#JobTitle").val(JobTitle);
//            $("#Category").val(Category);
//            $("#JobDescription").val(JobDescription);
//            $("#EstimatedStartDate").val(EstimatedStartDate);
//            $("#EstimatedBudget").val(EstimatedBudget);
//            $("#Province").val(Province);
//            $("#City").val(City);
//        }
//    });
//}



//function BindAddProjectLastSeen() {
//    $.ajax({
//        type: "POST",
//        url: "/ContractorProject/AddProjectLastSeen",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {
//        }
//    });
//}
//function CountOfNewProject() {
//    var countPro = $("#CountNewProjectList").val();    
//    $.ajax({
//        type: "POST",
//        url: "/dashBoard/GetCountOfNewProject",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {            
//            var json = JSON.parse(result);
//            //alert(json.CountNewProject);
//            if (countPro != json.CountNewProject) {
//                countPro = json.CountNewProject;
//                $("#CountNewProjectList").html(json.CountNewProject);
//            }
//        }
//    });
//    setInterval(CountOfNewProject, 100000);
//}


//function init(jQuery) {
//    $(".hide-tab").click(function () {
//        $(".hide-tab").addClass("pro-active");
//        $(".show-tab").removeClass("pro-active");
//        $(".tbl-hide").show();
//        $(".tbl-show").hide();
//    });
//    $(".show-tab").click(function () {
//        $(".show-tab").addClass("pro-active");
//        $(".hide-tab").removeClass("pro-active");
//        $(".tbl-hide").hide();
//        $(".tbl-show").show();
//    });
//    GetAllContractorProjects();
//    BindAddProjectLastSeen();
//    CountOfNewProject();
//    //GetMyJobs();
//    //GetContractorComplete();   
//}
//$(document).ready(init);




