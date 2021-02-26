function validate_ProjectOwnerListForm() {
    var isValid = true;

    if ($("#JobTitle").val() == "") {
        $('#JobTitle').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#JobTitle').css('border', 'none');
    }
    if ($('#JobDescription').val() == "") {
        $('#JobDescription').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#JobDescription').css('border', 'none');
    }
    if ($('#EstimatedStartDate').val() == "") {
        $('#EstimatedStartDate').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#EstimatedStartDate').css('border', 'none');
    }

    if ($('#EstimatedBudget').val() == "") {
        $('#EstimatedBudget').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#EstimatedBudget').css('border', 'none');
    }

    return isValid;
}

function ClearBorder() {

    if ($("#JobTitle").val() != "") {
        $('#JobTitle').css('border', 'none');
    }
    if ($("#JobDescription").val() != "") {
        $('#JobDescription').css('border', 'none');
    }
    if ($("#EstimatedStartDate").val() != "") {
        $('#EstimatedStartDate').css('border', 'none');
    }
    if ($("#EstimatedBudget").val() != "") {
        $('#EstimatedBudget').css('border', 'none');
    }



}

function UpdateData() {

    //   $("#btnUpdate").click(function () {
    var JobTitle = $("#JobTitle").val();
    var CategoryID = $("#CategoryIDAdd").val();
    var JobDescription = $("#JobDescription").val();
    var EstimatedStartDate = $("#EstimatedStartDate").val();
    var EstimatedBudget = $("#EstimatedBudget").val();
    var CityID = $("#CityIDAdd").val();
    var ProvinceID = $("#ProvinceIDAdd").val();

    var record = {
        'Id': ID,
        'JobTitle': JobTitle,
        'CategoryID': CategoryID,
        'JobDescription': JobDescription,
        'EstimatedStartDate': EstimatedStartDate,
        'EstimatedBudget': EstimatedBudget,
        'CityID': CityID,
        'ProvinceID': ProvinceID

    };
    //var checkValid = validate_ProjectOwnerListForm();
    //if (checkValid == false) {
    //    return false;
    //} else {
    $.ajax({
        type: "POST",
        url: "/Project/Update",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(record),
        success: function (result) {
            
            UpdateImage();
            $('#editmodal').modal("hide");
            resetValue();

            GetAllOpenProjects();

        }
    });
    // }
}
//    });
//$("#editmodal").on("click", "#SaveImageData", function () {
//    UpdateData();
//    //UpdateImage();
//    //GetAllOpenProjects();
//});

function UpdateImage() {
    
    var ProjectID = $('#lblProjectID').text();
    var Path = "";
    //var file = $("#imageUploadForm").get(0).files;
    var file = $("#imageUploadForm").get(0).files;
    var data = new FormData();
    var file = $(".imgrev").text("");

    for (i = 0; i < a.length; i++) {
        // a is global variable use for store files array like multi file append
        data.append("FilePath", a[i]);
    }

    data.append("ProjectId", ProjectID);

    $.ajax({
        type: "POST",
        url: "/Project/UpdateAttachements",
        contentType: false,
        processData: false,
        dataType: 'json',
        data: data,
        success: function (result) {
            // GetAllOpenProjects()
            //alert("SuccessFullySave");
            
            GetAllCompleteProjects();
            toastr.success("Your project has been UPDATED.", "Success");
            a.length = 0;
        }
    });

}

//$("#btnUpdateAttachments").click(function () {
$("#editmodal").on("click", "#btnUpdateAttachments", function () {

    var ProjectID = $('#lblProjectID').text();
    var Path = "";
    var file = $("#imageUploadForm").get(0).files;
    
    var data = new FormData();
    for (i = 0; i < file.length; i++) {
        data.append("FilePath", file[i]);
    }
    data.append("ProjectId", ProjectID);

    $.ajax({
        type: "POST",
        url: "/Project/UpdateAttachements",
        contentType: false,
        processData: false,
        dataType: 'json',
        data: data,
        success: function (result) {
            // $('#lblProjectID').text("");
            
            GetAllOpenProjects();
            GetAllCompleteProjects();
            //GetAllOpenProjects()
            //alert("Submit");
        }
    });

});
$("#editmodal").on('hidden.bs.modal', function () {
    $("#JobTitle").parsley().destroy();
    $("#EstimatedStartDate").parsley().destroy();
    $("#JobDescription").parsley().destroy();
    $("#EstimatedBudget").parsley().destroy();
    $('.remove').parent('.imgrev').remove();
    a.length = 0;
});
$("#editmodal").on("click", "#SaveImageData", function () {
    
    ValidationHomeOwner();
    var res = CheckValidationHomeOwner();
    if (res !== false) {
        UpdateData();
        //UpdateImage();
        //GetAllOpenProjects();
    }
    else {
        return false;
    }
});


function ValidationHomeOwner() {
    $("#JobTitle").parsley();
    $("#EstimatedStartDate").parsley();
    $("#JobDescription").parsley();
    $("#EstimatedBudget").parsley();
}

function CheckValidationHomeOwner() {
    event.preventDefault();
    var isvalid = true;
    if ($("#JobTitle").parsley().validate() !== true) isvalid = false;
    if ($("#EstimatedStartDate").parsley().validate() !== true) isvalid = false;
    if ($("#JobDescription").parsley().validate() !== true) isvalid = false;
    if ($("#EstimatedBudget").parsley().validate() !== true) isvalid = false;
    return isvalid;
}

$('.loader').css("display", "flex");
//function GetAllOpenProjects() {
//    var html = null;
//    var HomeOwnerStatus = "Open Job";
//    $.ajax({
//        type: "POST",
//        url: "/Project/GetProject?HomeOwnerStatus=" + HomeOwnerStatus,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{HomeOwnerStatus: "' + HomeOwnerStatus + '"}',
//        success: function (result) {
//            $('.loader').css("display", "none");      
//            var json = JSON.parse(result);
//            $('#tbodyOpen').html('');
//            $("#example").dataTable().fnDestroy();
//            var html = '';
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
//                var HEmail = json[index].Email;
//                var HFirstName = json[index].FirstName;
//                var HLastName = json[index].LastName;
//                var HName = HFirstName + ' ' + HLastName;
//                $("#HEmail").val(HEmail);
//                $("#HName").val(HName);
//                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
//                //html += '<tr>';
//                html = '<tr>' +            
//              '<td>' + JobTitle + '</td>' +
//              '<td>' + CategoryName + '</td>' +
//              '<td><span data-toggle="tooltip" title="' + JobDescription + '" onmouseover="Showmsgtooltip()" class="datatooltips">' + JobDescription + '</span></td>' +
//              '<td>' + EstimatedBudget + '</td>' +
//              '<td>' + EstimatedStartDate + '</td>' +
//              '<td>' + CityName + '</td>' +            
//              '<td><a class="clr-oranges CursorPointer" href="javascript:;" onclick = "BindMatchCityCategory(' + Id + ')">Contractor Matches</a></td>' +
//              '<td><a class="clr-oranges CursorPointer" href="javascript:;" data-toggle="modal" data-target="#Completemodal" onclick = "GetCompletePopup(' + Id + ')">Mark as Complete</a></td>' +
//              '<td><a class="clr-oranges CursorPointer actionbtn" href="javascript:;" onclick = "View(' + Id + ')" data-toggle="modal" data-target="#Viewmodal">View</a>' +
//              '<a class="clr-oranges CursorPointer actionbtn" href="javascript:;" onclick = "Edit(' + Id + ')" data-toggle="modal" data-target="#editmodal">Edit</a></td>' +
//              '<td><a class="clr-oranges CursorPointer actionbtn" href="javascript:;" data-toggle="modal" data-target="#deletemodal" onclick="GetId(' + Id + ')" >Delete</a></td>' +
//              '</tr>';          
//                //html += '<td>' + JobTitle + '</td>';
//                //html += '<td>' + CategoryName + '</td>';
//                //html += '<td><span data-toggle="tooltip" title="' + JobDescription + '" onmouseover="Showmsgtooltip()" class="datatooltips">' + JobDescription + '</span></td>';
//                //html += '<td>' + EstimatedBudget + '</td>';
//                //html += '<td>' + EstimatedStartDate + '</td>';
//                //html += '<td><a class="clr-oranges CursorPointer" href="javascript:;" onclick = "BindMatchCityCategory(' + Id + ')">Contractor Matches</a></td>';
//                //html += '<td>' + CityName + '</td>';
//                //html += '<td><a class="clr-oranges CursorPointer" href="javascript:;" onclick = "View(' + Id + ')" data-toggle="modal" data-target="#Viewmodal">View Matches</a></td>';
//                //html += '<td><a class="clr-oranges CursorPointer" href="javascript:;" onclick = "Edit(' + Id + ')" data-toggle="modal" data-target="#editmodal">Edit</a></td>';
//                //html += '<td><a class="clr-oranges CursorPointer" href="javascript:;" data-toggle="modal" data-target="#deletemodal" onclick="GetId(' + Id + ')" >Delete</a></td>';
//                //html += '<td><a class="clr-oranges CursorPointer" href="javascript:;" data-toggle="modal" data-target="#Completemodal" onclick = "GetCompletePopup(' + Id + ')">Mark as Complete</a></td>';
//                //html += '</tr>';
//                ////$('#tbodyOpen').append(html);
//                $('#tbodyOpen').append(html);
//            });
//            //$('#tbodyOpen').html(html);
//            $("#example").dataTable({
//                //"order": [[4, "desc"]]
//            });
//            GetAllCompleteProjects();
//        }
//    });
//}

function GetAllOpenProjects() {
    var html = null;
    var HomeOwnerStatus = "Open Job";
    $.ajax({
        type: "POST",
        url: "/Project/GetProject?HomeOwnerStatus=" + HomeOwnerStatus,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{HomeOwnerStatus: "' + HomeOwnerStatus + '"}',

        success: function (result) {

           

            var json = JSON.parse(result);
            $('#tbodyOpen').html('');
            $("#example").dataTable().fnDestroy();
            var html = '';
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

                var HEmail = json[index].Email;
                var HFirstName = json[index].FirstName;
                var HLastName = json[index].LastName;
                var HName = HFirstName + ' ' + HLastName;
                $("#HEmail").val(HEmail);
                $("#HName").val(HName);

                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
                //html += '<tr>';
                // html = '<tr>' +

                //'<td>' + JobTitle + '</td>' +
                //'<td>' + CategoryName + '</td>' +
                //'<td><span data-toggle="tooltip" title="' + JobDescription + '" onmouseover="Showmsgtooltip()" class="datatooltips">' + JobDescription + '</span></td>' +
                //'<td>' + EstimatedBudget + '</td>' +
                //'<td>' + EstimatedStartDate + '</td>' +
                //'<td>' + CityName + '</td>' +
                //'<td><a class="clr-oranges CursorPointer" href="javascript:;" onclick = "BindMatchCityCategory(' + Id + ')">Contractor Matches</a></td>' +
                //'<td><a class="clr-oranges CursorPointer" href="javascript:;" data-toggle="modal" data-target="#Completemodal" onclick = "GetCompletePopup(' + Id + ')">Mark as Complete</a></td>' +
                //'<td><a class="clr-oranges CursorPointer actionbtn" href="javascript:;" onclick = "View(' + Id + ')" data-toggle="modal" data-target="#Viewmodal">View</a>' +
                //'<a class="clr-oranges CursorPointer actionbtn" href="javascript:;" onclick = "Edit(' + Id + ')" data-toggle="modal" data-target="#editmodal">Edit</a></td>' +
                //'<td><a class="clr-oranges CursorPointer actionbtn" href="javascript:;" data-toggle="modal" data-target="#deletemodal" onclick="GetId(' + Id + ')" >Delete</a></td>' +

                //'</tr>';
                html += '<tr>';

                html += '<td>' + JobTitle + '</td>';
                html += '<td>' + CategoryName + '</td>';
                html += '<td><span data-toggle="tooltip" title="' + JobDescription + '" onmouseover="Showmsgtooltip()" class="datatooltips">' + JobDescription + '</span></td>';
                html += '<td>' + EstimatedBudget + '</td>';
                html += '<td>' + EstimatedStartDate + '</td>';
                html += '<td>' + CityName + '</td>';
                html += '<td><a class="clr-oranges CursorPointer" href="javascript:;" onclick = "BindMatchCityCategoryMessage(' + Id + ')">Contractor Matches</a></td>';
                html += '<td><a class="clr-oranges CursorPointer" href="javascript:;" data-toggle="modal" data-target="#Completemodal" onclick = "GetCompletePopup(' + Id + ')">Mark as Complete</a></td>';
                //html += '<td><a class="clr-oranges CursorPointer actionbtn" href="javascript:;" onclick = "View(' + Id + ')" data-toggle="modal" data-target="#Viewmodal">View</a>';
                html += '<td><a class="clr-oranges CursorPointer actionbtn" href="javascript:;" onclick = "Edit(' + Id + ')" data-toggle="modal" data-target="#editmodal">Edit</a></td>';
                html += '<td><a class="clr-oranges CursorPointer actionbtn" href="javascript:;" data-toggle="modal" data-target="#deletemodal" onclick="GetId(' + Id + ')" >Delete</a></td>';

                html += '</tr>';




            });
            //$('#tbodyOpen').html(html);

            $('#tbodyOpen').html(html);

            $("#example").dataTable({
                //"order": [[4, "desc"]]
                "language": {
                    "paginate": {
                        "previous": "Previous page",
                        "next": "Next page"
                    }
                }
            });
            $('.loader').css("display", "none");
            GetAllCompleteProjects();
        }
    });
}

//function GetAllCompleteProjects() {
//    var html = null;
//    var HomeOwnerStatus = "Completed Job";
//    $.ajax({
//        type: "POST",
//        url: "/Project/GetProject?HomeOwnerStatus=" + HomeOwnerStatus,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{HomeOwnerStatus: "' + HomeOwnerStatus + '"}',
//        success: function (result) {
//            var json = JSON.parse(result);
//            $('#tbodyComplete').html('');
//            $("#example1").dataTable().fnDestroy();
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
//                var HEmail = json[index].Email;
//                var HFirstName = json[index].FirstName;
//                var HLastName = json[index].LastName;
//                var HName = HFirstName + ' ' + HLastName;
//                $("#HEmail").val(HEmail);
//                $("#HName").val(HName);
//                html = '<tr>' +
//                // '<td>' + Id + '</td>' +
//                '<td>' + JobTitle + '</td>' +
//                '<td>' + CategoryName + '</td>' +
//                //'<td><span data-toggle="tooltip" title="Hooray!" class="datatooltips">' + JobDescription + '</span></td>' +
//                 '<td><span data-toggle="tooltip" title="' + JobDescription + '" onmouseover="Showmsgtooltip()" class="datatooltips">' + JobDescription + '</span></td>' +
//                '<td>' + EstimatedBudget + '</td>' +
//                '<td>' + EstimatedStartDate + '</td>' +
//                '<td>' + CityName + '</td>' +
//                //'<td>' + ProvinceName + '</td>' +
//               // '<td> DONE </td>' +
//               '<td><a class="clr-oranges CursorPointer" href="javascript:;" onclick = "BindMatchCityCategoryMessage(' + Id + ')">Contractor Matches</a></td>' +
//                '<td><a class="clr-oranges CursorPointer actionbtn" href="javascript:;" onclick = "Edit(' + Id + ')" data-toggle="modal" data-target="#editmodal">Edit</a></td>' +
//              '<td><a class="clr-oranges CursorPointer actionbtn" href="javascript:;" data-toggle="modal" data-target="#deletemodal" onclick="GetId(' + Id + ')" >Delete</a></td>' +
//                '</tr>';
//                $('#tbodyComplete').append(html);
//            });
//            $("#example1").dataTable({
//                "order": [[4, "desc"]]
//            });
//        }
//    });
//}

function GetAllCompleteProjects() {
    var html = null;
    var HomeOwnerStatus = "Completed Job";
    $.ajax({
        type: "POST",
        url: "/Project/GetProject?HomeOwnerStatus=" + HomeOwnerStatus,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{HomeOwnerStatus: "' + HomeOwnerStatus + '"}',

        success: function (result) {
            
            var json = JSON.parse(result);
            $('#tbodyComplete').html('');
            $("#example1").dataTable().fnDestroy();
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

                var HEmail = json[index].Email;
                var HFirstName = json[index].FirstName;
                var HLastName = json[index].LastName;
                var HName = HFirstName + ' ' + HLastName;
                $("#HEmail").val(HEmail);
                $("#HName").val(HName);


                html += '<tr>';
                html += '<td>' + JobTitle + '</td>';
                html += '<td>' + CategoryName + '</td>';
                html += '<td><span data-toggle="tooltip" title="' + JobDescription + '" onmouseover="Showmsgtooltip()" class="datatooltips">' + JobDescription + '</span></td>';
                html += '<td>' + EstimatedBudget + '</td>';
                html += '<td>' + EstimatedStartDate + '</td>';
                html += '<td>' + CityName + '</td>';
                html += '<td><a class="clr-oranges CursorPointer" href="javascript:;" onclick = "BindMatchCityCategory(' + Id + ')">Contractor Matches</a></td>';
                html += '<td><a class="clr-oranges CursorPointer actionbtn" href="javascript:;" onclick = "Edit(' + Id + ')" data-toggle="modal" data-target="#editmodal">Edit</a></td>';
                html += '<td><a class="clr-oranges CursorPointer actionbtn" href="javascript:;" data-toggle="modal" data-target="#deletemodal" onclick="GetId(' + Id + ')" >Delete</a></td>';

                html += '</tr>';
                $('#tbodyComplete').html(html);
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

function GetCategory() {
    $.ajax({
        type: "POST",
        url: "/Project/GetCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            var json = JSON.parse(result);
            var html = "";
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var Category = json[index].CategoryName;
                html += "<option value=" + Id + ">" + Category + "</option>";
            });
            $("#CategoryIDAdd").append(html);

        }
    });

}

function GetProvince() {
    $.ajax({

        type: "POST",
        url: "/Project/GetProvince",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            var json = JSON.parse(result);
            var html = "";
            $(json).each(function (index, value) {
                ProID = json[index].Id;
                var ProvinceName = json[index].ProvinceName;

                html += "<option value=" + ProID + ">" + ProvinceName + "</option>";
            });
            $("#ProvinceIDAdd").append(html);

        }
    });
}

function bindGetCity(ProID, City) {

    $.ajax({

        type: "POST",
        url: "/Project/GetCity",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{values: ' + ProID + '}',
        success: function (result) {

            var json = JSON.parse(result);
            $("#CityIDAdd").html('');
            $("#CityIDAdd").append("<option value='' > Please select</option>");
            var html = "";
            $(json).each(function (index, value) {
                var Id = json[index].Id;
                var CityName = json[index].CityName;
                html += "<option value=" + Id + ">" + CityName + "</option>";
            });
            // if ($('#CityIDAdd').val() == null || $('#CityIDAdd').val() == 'Please select') {
            $('#CityIDAdd').append(html);
            //}
            $("#CityIDAdd").val(City);

        },

        failure: function (response) {
            //alert(response.responseText);
        },
        error: function (response) {
            //SSS alert(response.responseText);
        }

    });

}

function Edit(id) {

    ID = id;
    var url = '/Project/EditHomeOwner?id=' + id;

    $('.editprofile').html('');
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {

            var json = JSON.parse(result);

            var wrapper = $('.Images');
            //$('.btnContainer').html("");
            $('.Documents').html("");
            $('.no-upproject').html("");
            wrapper.html("");

            $.each(json, function (index, value) {
                var JobTitle = value.JobTitle;
                var CategoryID = value.CategoryID;
                var JobDescription = value.JobDescription
                var EstimatedStartDate = value.EstimatedStartDate;
                var EstimatedBudget = value.EstimatedBudget;
                var Province = value.ProvinceID;
                var City = value.CityID;

                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
                $("#JobTitle").val(JobTitle);
                $("#CategoryIDAdd").val(CategoryID);
                $("#JobDescription").val(JobDescription);
                $("#EstimatedStartDate").val(EstimatedStartDate);
                $("#EstimatedBudget").val(EstimatedBudget);
                $("#ProvinceIDAdd").val(Province);
                bindGetCity(Province, City);
                $("#CityIDAdd").val(City);
                if (value.isActive) {
                    //value.FilePath.includes("png")
                    if (value.FilePath.split(".")[3] == "png" || value.FilePath.split(".")[3] == "jpg" || value.FilePath.split(".")[3] == "jpeg" || value.FilePath.split(".")[3] == "JPEG" || value.FilePath.split(".")[3] == "PNG" || value.FilePath.split(".")[3] == "JPG") {
                        wrapper.append('<div id="' + value.AttachementID + '" class="img_upload_prjct" ><a href=' + value.FilePath + ' target="_blank"><img src=' + value.FilePath + ' hight="150" width="150"/><a/><a class="ImageContainer">X</a></div>');
                    }
                    else {
                        if (value.FilePath.split(".")[3] ==  "pdf") {
                            $('.Documents').append('<div id="' + value.AttachementID + '"  class=""><a href="' + value.FilePath + '" target="_blank"><span class="pdfIcon"></a><button type="button" class="ImageContainer">X</button></div>');
                        } else if (value.FilePath.split(".")[3] == "xlsx") {
                            $('.Documents').append('<div id="' + value.AttachementID + '"  class=""><a href="' + value.FilePath + '" target="_blank"><span class="excelIcon"></a><button type="button" class="ImageContainer">X</button></div>');
                        } else if (value.FilePath.split(".")[3] == "doc") {
                            $('.Documents').append('<div id="' + value.AttachementID + '"  class=""><a href="' + value.FilePath + '" target="_blank"><span class="wordIcon"></a><button type="button" class="ImageContainer">X</button></div>');
                        } else if (value.FilePath.split(".")[3] == "ppt") {
                            $('.Documents').append('<div id="' + value.AttachementID + '"  class=""><a href="' + value.FilePath + '" target="_blank"><span class="pptIcon"></a><button type="button" class="ImageContainer">X</button></div>');
                        }
                        //$('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '"><i class="fa fa-file" style="font-size:36px;"></i></a><button type="button" class="ImageContainer">X</button></div>');
                    }
                }
                if (value.FilePath == null || value.FilePath == "") {
                    $('.no-upproject').append('<div><h6>No project upload</h6></div>');
                }
            });
            $('#lblProjectID').html("");
            //$('#lblProjectID').append('' + id + '');
            $('#lblProjectID').html('' + id + '');

            $('.ImageContainer').on("click", function () {
                var checkstr = confirm("Are you sure?")
                if (checkstr == false) {
                    return false;
                }
                else {

                    var id = this.parentElement.id;
                    $(this).prev().prev().remove();
                    $(this).prev().remove();
                    $(this).remove();
                    $("#" + id).remove();
                    //id = parseInt(id);
                    id = JSON.parse(id)

                    $.ajax({
                        type: "POST",
                        url: "DeleteAttachment?id=" + id + "",
                        contentType: "application/json; charset=utf-8",
                        dataType: 'json',
                        //data: '{id:"' + id + '"}',
                        success: function (result) {

                            //$("#editmodal").hide();
                            //GetAllOpenProjects()
                            // toastr.error("Click on Terms and Conditions", "Warning");
                            //$('#editmodal').modal("hide");
                            //alert("Delete successfully");
                            toastr.success("Delete successfully", "Success");
                        }
                    });
                }
            })

        }

    });


}
function View(id) {
    $.fancybox.destroy();
    $.fancybox.close();
    ID = id;
    var url = '/Project/View?id=' + id;
    $('.editprofile').html('');
    $('.Noprofile').html('');
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {


            var d = JSON.parse(result)
            var wrapper = $('.img-gallery');
            var modalPopup = $('.editprofilemodal');
            $('.Documents').html("");
            // $('.Documents').append("<h3>Documents</h3>");

            wrapper.html("");
            modalPopup.html("");
            $('.no-upproject').html("");
            //wrapper.append("<h3>Images</h3>")
            //if (result == "[]") {
            // $('.Documents').append('<h3>Document not available</h3>')
            // wrapper.append("<h3>Images not available</h3>")
            //}
            $.each(d, function (index, value) {

                if (value.includes("png") || value.includes("jpg") || value.includes("JPG") || value.includes("PNG")) {
                    $('.ImagesHead').append("<h3>Images</h3>");
                    //wrapper.append('<a href="javascript" class="thumbnail"data-image-id="" data-toggle="modal" data-title="" data-image="' + value + '" data-target="#image-gallery"><img src=' + value + ' class="img-thumbnail" hight="150" width="150" /></a>');
                    //modalPopup.append('<img id="image-gallery-image" class="img-responsive col-md-12" src="' + value + '">');

                    wrapper.append('<a data-fancybox="images" href="' + value + '"><div class="inner"><img src="' + value + '" alt="" class="gallery_img" style="width:150px; margin-left:10px; float:left;" /></div><div class="img-searh"><i class="fa fa-search"></i></div></a>');

                    //wrapper.append('<a data-fancybox="images" href="' + value + '"><img src="' + value + '" alt="" class="gallery_img" /><div class="img-searh"><i class="fa fa-search"></i></div></a>');



                }
                else {
                    if (value.FilePath.split(".")[3] == "pdf") {
                        $('.Documents').append('<div><a href="' + value + '" target="_blank"><span class="pdfIcon"></a></div>');
                    } else if (value.FilePath.split(".")[3] == "xlsx") {
                        $('.Documents').append('<div><a href="' + value + '" target="_blank"><span class="excelIcon"></a></div>');
                    } else if(value.FilePath.split(".")[3] == "doc") {
                        $('.Documents').append('<div><a href="' + value + '" target="_blank"><span class="wordIcon"></a></div>');
                    } else if (value.FilePath.split(".")[3] == "ppt") {
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

function BindCompleteJob(id) {
    ID = id;
    var url = '/Project/CompleteJob?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {
            BindMatchCityCategoryWihtReview(id);
            GetAllOpenProjects();
            GetCountCompleteProject();
            GetCountOpenProject();
        }
    });
}

function Delete(id) {
    
    //$("#DeleteId").click(function () {
    // var Id = $(this).attr('data-id');
    var url = '/Project/Delete?Id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ Id: "' + id + '" }',
        success: function (result) {
            //$("#myModal").modal("hide");
            $("#deletemodal").modal("hide");
            GetCountOpenProject();
            GetCountCompleteProject();
            GetAllOpenProjects();
           // GetAllCompleteProjects();
            toastr.success("Your project has been DELETED.", "Success");
        }
    });
    //});
}

var delID;
function GetId(id) {
    delID = id;
    resetValue();
    $("#deletemodal").modal("show");
    
    $.ajax({
        type: "Post",
        url: "/Project/GetProjectRecord?ProjectId=" + id,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        //data: '{ProjectStatus:' + ProjectStatu + '}',
        success: function (result) {
            var json = JSON.parse(result);
            $('#ProjectTitleDelete').text(json.JobTitle);
        }
    });
    //$("#DeleteId").attr('data-id', id);
}
$("#deletemodal").on("click", "#DeleteId", function () {
    
    //$("#DeleteId").click(function () {
    // Delete(id);
    Delete(delID);
    delID = 0;
});

//function GetCompletePopup(id) {
//    $("#Completemodal").modal("show");
//    //$("#DeleteId").attr('data-id', id);
//    $("#CompleteId").click(function () {
//        BindCompleteJob(id);
//    });
//}

function GetCompletePopup(id) {
    $("#Completemodal").modal("show");
    $.ajax({
        type: "Post",
        url: "/Project/GetProjectRecord?ProjectId=" + id,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        //data: '{ProjectStatus:' + ProjectStatu + '}',
        success: function (result) {
            var json = JSON.parse(result);
            $('#ProjectTitleComplete').text(json.JobTitle);
        }
    });
    //$("#DeleteId").attr('data-id', id);
    $("#CompleteId").click(function () {
        BindCompleteJob(id);
    });
}

function BindMatchCityCategory(id) {

    $(".Matchesmodal").html('');
    $.ajax({
        type: "POST",
        url: "/Project/BindMatchCityCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{id: ' + id + '}',
        async: false,
        success: function (result) {

            var json = JSON.parse(result);
            var html = "";
            $(".Matchesmodal").append(html);

            $("#ContractorMatchesmodal").modal("show");

            if (json.length == 0) {
                html += '<h3 class="text-center">“Sorry, there are no contractors that match for your unique project. Try our SEARCH TOOL to see all the other qualified contractors near you!” </h3>';
            } else {
                $(json).each(function (index, value) {

                    if (value.ImagePath == null) {
                        html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.CompanyName + '</label><label class="first-label" style="display: block;"></label><img src="/Content/assets/img/images.png" style="hight:100px;width:150px;"></div></a><div class="writeareview"><a href="/writeAReview/Index?id=' + value.id + '">Write a Review</a></div></div>';

                    }
                    else {
                        html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.CompanyName + '</label><label class="first-label" style="display: block;"></label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"></div></a><div class="writeareview"><a href="/writeAReview/Index?id=' + value.id + '">Write a Review</a></div></div>';

                    }
                    //html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.FirstName + ' ' + value.LastName + '</label><label class="first-label" style="display: block;"></label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"></div></a></div>';

                    //<div class="col-md-6"></div><label>FullName : </label><label>' + value.FirstName + ' ' + value.LastName + '</label><br/><label>Image Path : </label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"/><br/>';

                });
            }
            $(".Matchesmodal").append(html);


        }
    });

}

function BindMatchCityCategoryWihtReview(id) {

    $(".Matchesmodal").html('');
    $.ajax({
        type: "POST",
        url: "/Project/BindMatchCityCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{id: ' + id + '}',
        async: false,
        success: function (result) {

            var json = JSON.parse(result);
            var html = "";
            $(".Matchesmodal").append(html);

            $("#ContractorMatchesmodal").modal("show");

            if (json.length == 0) {
                html += '<h3 class="text-center">“Sorry, there are no contractors that match for your unique project. Try our SEARCH TOOL to see all the other qualified contractors near you!” </h3>';
            } else {
                $(json).each(function (index, value) {

                    if (value.ImagePath == null) {
                        html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.CompanyName + '</label><label class="first-label" style="display: block;"></label><img src="/Content/assets/img/images.png" style="hight:100px;width:150px;"></div></a><div class="writeareview"><a href="/writeAReview/Index?id=' + value.id + '">Write a Review</a></div></div>';

                    }
                    else {
                        html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.CompanyName + '</label><label class="first-label" style="display: block;"></label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"></div></a><div class="writeareview"><a href="/writeAReview/Index?id=' + value.id + '">Write a Review</a></div></div>';

                    }
                    //html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.FirstName + ' ' + value.LastName + '</label><label class="first-label" style="display: block;"></label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"></div></a></div>';

                    //<div class="col-md-6"></div><label>FullName : </label><label>' + value.FirstName + ' ' + value.LastName + '</label><br/><label>Image Path : </label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"/><br/>';

                });
            }
            $(".Matchesmodal").append(html);


        }
    });

}

function BindMatchCityCategoryMessage(id) {

    $(".Matchesmodal").html('');
    $.ajax({
        type: "POST",
        url: "/Project/BindMatchCityCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{id: ' + id + '}',
        async: false,
        success: function (result) {

            var json = JSON.parse(result);
            var html = "";
            $(".Matchesmodal").append(html);

            $("#ContractorMatchesmodal").modal("show");

            if (json.length == 0) {
                html += '<h3 class="text-center">“Sorry, there are no contractors that match for your unique project. Try our SEARCH TOOL to see all the other qualified contractors near you!” </h3>';
            } else {
                $(json).each(function (index, value) {

                    if (value.ImagePath == null) {
                        html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.CompanyName + '</label><label class="first-label" style="display: block;"></label><img src="/Content/assets/img/images.png" style="hight:100px;width:150px;"></div></a><div class="writeareview"><a class="clr-oranges CursorPointer" onclick="CreateGroupChannel(' + value.id + ')">Message Contractor</a></div></div>';

                    }
                    else {
                        html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.CompanyName + '</label><label class="first-label" style="display: block;"></label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"></div></a><div class="writeareview"><a class="clr-oranges CursorPointer" onclick="CreateGroupChannel(' + value.id + ')">Message Contractor</a></div></div>';

                    }
                    //html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.FirstName + ' ' + value.LastName + '</label><label class="first-label" style="display: block;"></label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"></div></a></div>';

                    //<div class="col-md-6"></div><label>FullName : </label><label>' + value.FirstName + ' ' + value.LastName + '</label><br/><label>Image Path : </label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"/><br/>';

                });
            }
            $(".Matchesmodal").append(html);

        }
    });

}

function CreateGroupChannel(id) {

    $.ajax({
        type: "POST",
        url: "/Project/GetUser",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{id:"' + id + '"}',
        success: function (result) {

            var json = JSON.parse(result);
            var ContractorId = json.Email;
            var HomeownerId = $("#HEmail").val();
            //var CName = json.FirstName + ' ' + json.LastName;
            var CName = json.CompanyName ;
            var HName = $("#HName").val();
            //, HomeownerId, CName, HName
            //var APP_ID = "B2B25309-3243-400F-9E29-0BC89B7F5C56";
            var APP_ID = "8355AD72-4081-4FF6-90E5-C371ADEB465F";
            var USER_ID = ContractorId;
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
            var userIds = [ContractorId, HomeownerId];
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
                window.location.href = "/Chats/Index?userid=" + HomeownerId + "&ChannelUrl=" + groupChannel.url;
            });


        }
    });




}

//$("#editmodal").on("hidden.bs.modal", function () {
//
function resetValue() {
    $(".imgrev").text("");
    a.length = 0;
    spliceid = 0;
    $("#imageUploadForm").val("");
    $("#fileListFromHome ul").html("");
}
//});

function GetCountCompleteProject() {
    var ProjectStatu = "Completed Job";
    $.ajax({

        type: "GET",
        url: "/Project/GetOpenProAndComProCount?ProjectStatus=" + ProjectStatu,
        //url: "/Project/GetOpenProAndComProCount",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        //data: '{ProjectStatus:' + ProjectStatu + '}',
        success: function (result) {

            $('.loader').css("display", "none");
            var json = JSON.parse(result);
            $('#CompleteProjectCount').text(json);
            //$(json).each(function (index, value) {
            //    var CompleteProjectCount = json[index].MonthRecord;

            //    $('#CompleteProjectCount').text(CompleteProjectCount);
            //});


        }
    });
}

function GetCountOpenProject() {
    var ProjectStatu = "Open Job";
    $.ajax({
        type: "Get",
        url: "/Project/GetOpenProAndComProCount?ProjectStatus=" + ProjectStatu,
        //url: "/Project/GetOpenProAndComProCount" ,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        //data: '{ ProjectStatus: ' + ProjectStatu + '}',

        success: function (result) {

            $('.loader').css("display", "none");
            var json = JSON.parse(result);
            $('#OpenProjectCount').text(json);
            //$(json).each(function (index, value) {
            //    var OpenProjectCount = json[index].MonthRecord;

            //    $('#OpenProjectCount').text(OpenProjectCount);
            //});


        }
    });
}

$("#fileListFromHome").on("click", ".remove", function () {
    var id = $(this).attr('id');
    //alert(id);

    var msg = confirm("Are you sure?");
    if (msg == true) {
        a.splice(id, 1);
        $(this).parent('.imgrev').remove();
        console.log(a);
        BindDeleteList();
    }
    return false;
});


//var file = $("#imageUploadForm").get(0).files;
//var data = new FormData();
//var file = $(".imgrev").text("");
//
//for (i = 0; i < file.length; i++) {
//    data.append("FilePath", file[i]);
//}


$("#filemsgformHome").hide();
var b = [];
var a = [];
var spliceid = 0;
updateList = function () {
    var file = $("#imageUploadForm").get(0).files;
    $("#filemsgformHome").hide();
    var input = document.getElementById('imageUploadForm');
    var output = document.getElementById('fileListFromHome');
    var children = "";
    //children += '<ul>';
    var imagesCount = $('.imgrev').length;
    var img_upload_prjct = $('.img_upload_prjct').length;
    var currentImages = input.files.length;
    var limit = currentImages + imagesCount + img_upload_prjct;


    if (limit <= 10) {
        for (var i = 0; i < file.length; i++) {

            children += "<li class='imgrev'><p class='remove' id='" + spliceid++ + "' style='color:red'>x</p>" + input.files.item(i).name + " </li>";
            b = a.push(file[i]);
            // children += "<li class='imgrev'><p class='remove' style='color:red'>x</p>" + input.files.item(i) + " </li>";

        }
        // children += '</ul>';
        $("#fileListFromHome ul").append(children);
    } else {

        toastr.error("You have selected more than 10 images", "Warning");

    }












    


}

function BindDeleteList() {
    spliceid = 0;
    $("#fileListFromHome ul").html("");
    var children = "";
    for (var i = 0; i < a.length; i++) {

        children += "<li class='imgrev'><p class='remove' id='" + spliceid++ + "' style='color:red'>x</p>" + a[i].name + " </li>";
        //  b = a.push(file[i]);
        // children += "<li class='imgrev'><p class='remove' style='color:red'>x</p>" + input.files.item(i) + " </li>";

    }
    // children += '</ul>';
    $("#fileListFromHome ul").append(children);


}


function Showmsgtooltip() {
    //alert("this is tool msg");
    $('[data-toggle="tooltip"]').tooltip();
}


//// build key actions
//$(document).keydown(function (e) {
//    switch (e.which) {
//        case 37: // left
//            if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
//                $('#show-previous-image')
//                  .click();
//            }
//            break;
//        case 39: // right
//            if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
//                $('#show-next-image')
//                  .click();
//            }
//            break;
//        default:
//            return; // exit this handler for other keys
//    }
//    e.preventDefault(); // prevent the default action (scroll / move caret)
//});

function ShowVideoModalLogin() {

    $.ajax({
        type: "POST",
        url: "/Project/GetLoginStatus",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            var json = JSON.parse(result);
            if (json.LoginStatus == false && json.AccountTypeID == 1) {
                $("#VideomodalPro").modal("show");
                $.ajax({
                    type: "POST",
                    url: "/Project/UpdateLoginStatus",
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    data: '{}',
                    success: function (result) {
                       
                    }
                });
            }

           
        }
    });
}


function BindMatchCityCategoryAfterCreatePro(id) {

    $(".Matchesmodal").html('');
    $.ajax({
        type: "POST",
        url: "/Project/BindMatchCityCategory",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{id: ' + id + '}',
        async: false,
        success: function (result) {

            var json = JSON.parse(result);
            var html = "";
            $(".Matchesmodal").append(html);

            $("#ContractorMatchesmodal").modal("show");

            if (json.length == 0) {
                html += '<h3 class="text-center"> Well this is awkward....There were no contractors matched for your specific.  <a href="/searchContractor/ContractorInCities" class="cstm_hvr_anchr">Click here</a> to search all contractors. </h3>';
            } else {
                $(json).each(function (index, value) {

                    if (value.ImagePath == null) {
                        html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.CompanyName + '</label><label class="first-label" style="display: block;"></label><img src="/Content/assets/img/images.png" style="hight:100px;width:150px;"></div></a></div>';
                        //<div class="writeareview"><a href="/writeAReview/Index?id=' + value.id + '">Write a Review</a></div>
                    }
                    else {
                        html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.CompanyName + '</label><label class="first-label" style="display: block;"></label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"></div></a></div>';
                        //<div class="writeareview"><a href="/writeAReview/Index?id=' + value.id + '">Write a Review</a></div>
                    }
                    //html += '<div class="col-md-6" style=""><div class="cstm-areas-c"><a href="/Contractor/ContractorDetail?id=' + value.id + '"><label class="first-label"></label><label class="first-label" style="font-size: 14px;padding-left: 10px;">' + value.FirstName + ' ' + value.LastName + '</label><label class="first-label" style="display: block;"></label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"></div></a></div>';

                    //<div class="col-md-6"></div><label>FullName : </label><label>' + value.FirstName + ' ' + value.LastName + '</label><br/><label>Image Path : </label><img src="' + value.ImagePath + '" style="hight:100px;width:150px;"/><br/>';

                });
            }
            $(".Matchesmodal").append(html);


        }
    });

}
$('#btnViewContractorMatches').click(function () {


    var ProjectID = $('#hidProjectID').val();
    ProjectID = parseInt(ProjectID)
    BindMatchCityCategoryAfterCreatePro(ProjectID);
    $('#successModal').modal('hide');


});
//$('.succsessModal').click(function () {
//    window.location.href = "/Project/HomeOwnerProjectList";
//});
function ShowContractorMatchesAfterCreatePro() {

    var proid = location.href.split("=")[1];
    if (proid != null) {
        $('#hidProjectID').val(proid);
        $('#successModal').modal('show');
    }
    
}


function init(jQuery) {

    $('.loader').css("display", "flex");   
    ShowContractorMatchesAfterCreatePro();
    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
    });
    ShowVideoModalLogin();
    GetCountCompleteProject();
    GetCountOpenProject();
    GetAllOpenProjects();
    GetCategory();
    GetProvince();
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

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-fancybox="images"]').fancybox({
        afterLoad: function (instance, current) {
            var pixelRatio = window.devicePixelRatio || 1;

            if (pixelRatio > 1.5) {
                current.width = current.width / pixelRatio;
                current.height = current.height / pixelRatio;
            }
        }
    });
    //$('body').click(function (e) {
    //    $('.embed-responsive').children('iframe').attr('src', 'http://portal.homii.ca/Content/assets/videos/HOMEOWNER%20FINAL.mp4');
    //});

    var ProID = 0;
    $('input[type="file"]').each(function () {
        // get label text
        var label = $(this).parents('.form-group').find('label').text();
        label = (label) ? label : 'Upload File';

        // wrap the file input
        $(this).wrap('<div class="input-file"></div>');
        // display label
        $(this).before('<span class="btn"> <i class="fa fa-plus mr-2"></i>' + label + '</span>');
        // we will display selected file here
        $(this).before('<span class="file-selected"></span>');

        // file input change listener 
        $(this).change(function (e) {
            // Get this file input value
            var val = $(this).val();

            // Let's only show filename.
            // By default file input value is a fullpath, something like 
            // C:\fakepath\Nuriootpa1.jpg depending on your browser.
            var filename = val.replace(/^.*[\\\/]/, '');

            // Display the filename
            $(this).siblings('.file-selected').text(filename);
        });
    });

    // Open the file browser when our custom button is clicked.
    $('.input-file .btn').click(function () {
        $(this).siblings('input[type="file"]').trigger('click');
    });
    $("#ProvinceIDAdd").change(function () {

        ProID = $("#ProvinceIDAdd").val();
        $('#CityIDAdd').html('');
        var City = "Please select";
        bindGetCity(ProID, City)
    });


    jQuery('.owl-fileformat').owlCarousel({
        items: 4,
        margin: 0,
        loop: true,
        autoplay: true,
        nav: true,
        paginationSpeed: 300,
        rewindSpeed: 400
    });

    




}

$(document).ready(init);














































































































































































































































































































