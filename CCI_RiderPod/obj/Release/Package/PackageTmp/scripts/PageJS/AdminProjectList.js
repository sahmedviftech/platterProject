
//function validate_AdminProject() {
//    var isValid = true;
//    if ($('#CategoryIDAdd').val() == "0") {
//        $('#CategoryIDAdd').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#CategoryIDAdd').css('border-color', 'lightgrey');
//    }

//    if ($("#JobTitle").val() == "") {
//        $('#JobTitle').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#JobTitle').css('border-color', 'lightgrey');
//    }

//    if ($("#HomeownerName").val() == "") {
//        $('#HomeownerName').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#HomeownerName').css('border-color', 'lightgrey');
//    }
//    if ($('#EstimatedStartDate').val() == "") {
//        $('#EstimatedStartDate').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#EstimatedStartDate').css('border-color', 'lightgrey');
//    }

//    if ($('#EstimatedBudget').val() == "") {
//        $('#EstimatedBudget').css('border', '1px solid Red');
//        isValid = false;
//    } else {
//        $('#EstimatedBudget').css('border-color', 'lightgrey');
//    }
//    return isValid;
//}

//function ClearBorder() {

//    if ($('#JobTitle').val() != "") {
//        $('#JobTitle').css('border', 'none');
//    }

//    if ($('#CategoryIDAdd').val() != "0") {
//        $('#CategoryIDAdd').css('border', 'none');
//    }


//    if ($("#HomeownerName").val() != "") {
//        $('#HomeownerName').css('border', 'none');


//    }

//    if ($("#EstimatedBudget").val() != "") {
//        $('#EstimatedBudget').css('border', 'none');

//    }


//    if ($('#EstimatedStartDate').val() != "") {
//        $('#EstimatedStartDate').css('border', 'none');
//    }


//}

//$("#btnUpdate").click(function () {


//    var ID = $("#ProjectId").val();
//    var JobTitle = $("#JobTitle").val();
//    var CategoryID = $("#CategoryIDAdd").val();
//    var JobDescription = $("#JobDescription").val();
//    var EstimatedStartDate = $("#EstimatedStartDate").val();
//    var EstimatedBudget = $("#EstimatedBudget").val();
//    //var CityID = $("#CityIDAdd").val();
//    var ProvinceID = $("#ProvinceIDAdd").val();

//    var record = {
//        'Id': ID,
//        'JobTitle': JobTitle,
//        'CategoryID': CategoryID,
//        'JobDescription': JobDescription,
//        'EstimatedStartDate': EstimatedStartDate,
//        'EstimatedBudget': EstimatedBudget,
//        //'CityID': CityID,
//        'ProvinceID': ProvinceID

//    };
//    var checkValid = validate_AdminProject();
//    if (checkValid == false) {
//        return false;
//    }
//    else {
//        $.ajax({
//            type: "POST",
//            url: "/Project/Update",
//            contentType: "application/json; charset=utf-8",
//            dataType: 'json',
//            data: JSON.stringify(record),
//            success: function (result) {
//                // alert("Submit");
//                GetAllOpenProjects();
//            }
//        });
//    }
//});



//$('.loader').css("display", "flex");        

//function GetAllOpenProjects() {
//    var html = null;
//    var HomeOwnerStatus = "Open Job";
//    $.ajax({
//        type: "POST",
//        url: "/Project/GetAllProjects?HomeOwnerStatus=" + HomeOwnerStatus,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{HomeOwnerStatus: "' + HomeOwnerStatus + '"}',
//        success: function (result) {
//            $('.loader').css("display", "none");      
//            $("#example").dataTable().fnDestroy();
//            var json = JSON.parse(result);

//            var editor = $('#example').DataTable({
//                data: json,
//                columns: [
//                { "data": "JobTitle" },
//                { "data": "CategoryName" },
//                {
//                    "data": "JobDescription",

//                    "render": function (result1) {

//                        return '<td class="fa_table" ><span data-toggle="tooltip" onmouseover="Showmsgtooltip()" title="' + result1 + '" class="datatooltips">' + result1 + '</span></td>';
//                        //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-times"></i></a>' +
//                        //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-check"></i></a>';//row.ClientId
//                        // +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
//                    }



//                },
//                { "data": "EstimatedBudget" },
//                {
//                    "data": "EstimatedStartDate",
//                    "render": function (x) {
//                        var date = moment(x).format("YYYY-MM-DD");
//                        return date;
//                    }
//                },
//                {
//                    "data": "Id",
//                    "render": function (result1, type, row) {

//                        //return '<td class="fa_table"><a href="javascript:;" data-toggle="modal" onclick="GetId(' + result1 + ')" data-target="#detailmodal"><i class="fa fa-edit"></i></td>';

//                        return '<td class="fa_table"><a href="javascript:;" data-toggle="modal" onclick="GetId(' + result1 + ')" data-target="#detailmodal"><i class="fa fa-edit"></i>' +
//                                '<a href="javascript:;" data-toggle="modal" data-target="#deletemodal" ><i class="fa fa-times" onclick = "DeleteProjectID(' + result1 + ')"></i></a>' +
//                                '</td>';

//                        //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-times"></i></a>' +
//                        //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-check"></i></a>';//row.ClientId
//                        // +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
//                    }
//                },

//                ]

//            });




//            //var json = JSON.parse(result);
//            //$('#tbodyOpen').html('');
//            //$(json).each(function (index, value) {
//            //    var Id = json[index].Id;
//            //    var JobTitle = json[index].JobTitle;
//            //    var CategoryID = json[index].CategoryID;
//            //    var JobDescription = json[index].JobDescription;
//            //    var EstimatedStartDate = json[index].EstimatedStartDate;
//            //    var EstimatedBudget = json[index].EstimatedBudget;
//            //    var CityID = json[index].CityID;
//            //    var ProvinceID = json[index].ProvinceID;
//            //    var CityName = json[index].CityName;
//            //    var ProvinceName = json[index].ProvinceName;
//            //    var CategoryName = json[index].CategoryName;          //    
//            //    html = '<tr class="tbody-light">' +
//            //                   '<td scope="row">' + JobTitle + '</td>' +
//            //                   '<td>' + CategoryName + '</td>' +
//            //                   '<td>' + JobDescription + '</td>' +
//            //                   '<td>' + EstimatedBudget + '</td>' +
//            //                   '<td>' + EstimatedStartDate + '</td>' +
//            //                   //'<td>' + CityName + '</td>' +
//            //                  // '<td>' + ProvinceName + '</td>' +
//            //                  //'+ json[index] + ',' + json[index] + ',' + json[index] + ',' + json[index] + ',' + json[index] +'
//            //                   //'<td class="fa_table"><i class="fa fa-edit" onclick="GetId()" id="modalbtn" class="trigger-btn" data-toggle="modal"></i></td>' +
//            //                    '<td class="fa_table"><a href="javascript:;" data-toggle="modal" data-target="#detailmodal"><i class="fa fa-edit"></i></td>' +
//            //        '</tr>';
//            //    $('#tbodyOpen').append(html);
//            //});
//        }
//    });
//}



//function UpdateData() {
    
//    //   $("#btnUpdate").click(function () {
//    var JobTitle = $("#JobTitle").val();
//    var CategoryID = $("#CategoryIDAdd").val();
//    var JobDescription = $("#JobDescription").val();
//    var EstimatedStartDate = $("#EstimatedStartDate").val();
//    var EstimatedBudget = $("#EstimatedBudget").val();
//    var CityID = $("#CityIDAdd").val();
//    var ProvinceID = $("#ProvinceIDAdd").val();

//    var record = {
//        'Id': ID,
//        'JobTitle': JobTitle,
//        'CategoryID': CategoryID,
//        'JobDescription': JobDescription,
//        'EstimatedStartDate': EstimatedStartDate,
//        'EstimatedBudget': EstimatedBudget,
//        'CityID': CityID,
//        'ProvinceID': ProvinceID

//    };
//    //var checkValid = validate_AdminProject();
//    //if (checkValid == false) {
//    //    return false;
//    //} else {
//        $.ajax({
//            type: "POST",
//            url: "/Project/Update",
//            contentType: "application/json; charset=utf-8",
//            dataType: 'json',
//            data: JSON.stringify(record),
//            success: function (result) {
//                UpdateImage();
//                GetAllOpenProjects();
//                resetValue();
//            }
//        });
//    }
////}



//$("#fileListFromHome").on("click", ".remove", function () {
//    var id = $(this).attr('id');
//    //alert(id);

//    var msg = confirm("Are you sure?");
//    if (msg == true) {
//        a.splice(id, 1);
//        $(this).parent('.imgrev').remove();
        
//        BindDeleteList();
//    }
//    return false;
//});


//function BindDeleteList() {
//    spliceid = 0;
//    $("#fileListFromHome #uploadImage").html("");
//    var children = "";
//    for (var i = 0; i < a.length; i++) {

//        children += "<li class='imgrev'><p class='remove' id='" + spliceid++ + "'>x</p>" + a[i].name + " </li>";
//        //  b = a.push(file[i]);
//        // children += "<li class='imgrev'><p class='remove' style='color:red'>x</p>" + input.files.item(i) + " </li>";

//    }
//    // children += '</ul>';
//    $("#fileListFromHome #uploadImage").append(children);


//}

////    });


//function CheckAdminparsleyValidation() {
//    event.preventDefault();

//    var isvalid = true;
//    if ($("#JobTitle").parsley().validate() !== true) isvalid = false;
//    if ($("#CategoryIDAdd").parsley().validate() !== true) isvalid = false;
//    if ($("#HomeownerName").parsley().validate() !== true) isvalid = false;
//    if ($("#EstimatedBudget").parsley().validate() !== true) isvalid = false;
//    if ($("#EstimatedStartDate").parsley().validate() !== true) isvalid = false;
//    if ($("#JobDescription").parsley().validate() !== true) isvalid = false;

//    return isvalid;
//}

//function AdminparsleyValidation() {

//    $("#JobTitle").parsley();
//    $("#CategoryIDAdd").parsley();
//    $("#HomeownerName").parsley();
//    $("#EstimatedBudget").parsley();
//    $("#EstimatedStartDate").parsley();
//    $("#JobDescription").parsley();


//}


//function DestroyAdminparsleyValidation() {

//    $("#JobTitle").parsley().destroy();
//    $("#CategoryIDAdd").parsley().destroy();
//    $("#HomeownerName").parsley().destroy();
//    $("#EstimatedBudget").parsley().destroy();
//    $("#EstimatedStartDate").parsley().destroy();
//    $("#JobDescription").parsley().destroy();


//}

//AdminparsleyValidation();

//$("#detailmodal").on("click", "#SaveImageData", function () {
//    var res = CheckAdminparsleyValidation();
//    if (res == true) {
//        UpdateData();
//    }
//    else {
//        return false;
//    }
//    //resetValue();
//    //UpdateImage();
//    //GetAllOpenProjects();
//});
////    UpdateData();
////    //resetValue();
////    //UpdateImage();
////    //GetAllOpenProjects();
////});


//function UpdateImage() {
//    var ProjectID = $('#lblProjectID').text();
//    var Path = "";
//    //get all file object in fileuplaod 
//    var file = $("#imageUploadForm").get(0).files;

//    var data = new FormData();
//    //a global variable which stor file object array or multiple file :eu
//    for (i = 0; i < a.length; i++) {
//        // data.append("FilePath", file[i]);
//        data.append("FilePath", a[i]);
//    }
//    data.append("ProjectId", ProjectID);

//    $.ajax({
//        type: "POST",
//        url: "/Project/UpdateAttachements",
//        contentType: false,
//        processData: false,
//        dataType: 'json',
//        data: data,
//        success: function (result) {
//            // GetAllOpenProjects()
//            //alert("SuccessFullySave");
        
//            toastr.success("Update successfully", "Success");


          
//        }
//    });

//}





//function GetId(Id) {

//    resetValue();
//    AdminparsleyValidation();
//    $("#detailmodal").modal("show");
//    //$("#DeleteId").attr('data-id', id);
//    //$("#DeleteId").click(function () {
//    //    Delete(id);
//    //});

//    Edit(Id);



//}


//$("#btnUpdateAttachments").click(function () {

//    var ProjectID = $('#lblProjectID').text();
//    var Path = "";
//    var file = $("#imageUploadForm").get(0).files;

//    var data = new FormData();
//    for (i = 0; i < file.length; i++) {
//        data.append("FilePath", file[i]);
//    }
//    data.append("ProjectId", ProjectID);

//    $.ajax({
//        type: "POST",
//        url: "/Project/UpdateAttachements",
//        contentType: false,
//        processData: false,
//        dataType: 'json',
//        data: data,
//        success: function (result) {
//            //GetAllOpenProjects()
            
//        }
//    });

//});

//function Edit(id) {
    
//    ID = id;
//    var url = '/Project/EditHomeOwner?id=' + id;

//    //$('.editprofile').html('');
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ id: "' + id + '" }',
//        success: function (result) {
            
//            var json = JSON.parse(result);

//            var wrapper = $('.Images');
//            //$('.btnContainer').html("");
//            $('.Documents').html("");
//            wrapper.html("");
//            $('.no-upproject').html("");

//            $.each(json, function (index, value) {

//                var ProId = value.Id;
//                var JobTitle = value.JobTitle;
//                var CategoryID = value.CategoryID;
//                var JobDescription = value.JobDescription
//                var EstimatedStartDate = value.EstimatedStartDate;
//                var EstimatedBudget = value.EstimatedBudget;
//                var Province = value.ProvinceID;
//                var City = value.CityID;

//                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
//                $("#ProjectId").val(ProId);
//                $("#JobTitle").val(JobTitle);
//                $("#CategoryIDAdd").val(CategoryID);
//                $("#JobDescription").val(JobDescription);
//                $("#EstimatedStartDate").val(EstimatedStartDate);
//                $("#EstimatedBudget").val(EstimatedBudget);
//                $("#ProvinceIDAdd").val(Province);
//                bindGetCity(Province, City);
//                $("#CityIDAdd").val(City);

//                if (value.isActive) {
//                    if (value.FilePath.includes(".png") || value.FilePath.includes(".jpg") || value.FilePath.includes(".JPG")) {
//                        wrapper.append('<div id="' + value.AttachementID + '" class="img_upload_prjct"><a href=' + value.FilePath + ' target="_blank"><img src=' + value.FilePath + ' hight="150" width="150"/></a><a class="ImageContainer">X</a></div>');
//                    }
//                    else {
//                        if (value.FilePath.includes(".pdf")) {
//                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="pdfIcon"></a><button type="button" class="ImageContainer">X</button></div>');
//                        } else if (value.FilePath.includes(".xlsx")) {
//                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="excelIcon"></a><button type="button" class="ImageContainer">X</button></div>');
//                        } else if (value.FilePath.includes(".doc")) {
//                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="wordIcon"></a><button type="button" class="ImageContainer">X</button></div>');
//                        } else if (value.FilePath.includes(".ppt")) {
//                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="pptIcon"></a><button type="button" class="ImageContainer">X</button></div>');
//                        }
//                        //$('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '"><i class="fa fa-file" style="font-size:36px;"></i></a><button type="button" class="ImageContainer">X</button></div>');
//                    }
//                }
//                if (value.FilePath == null || value.FilePath == "") {
//                    $('.no-upproject').append('<div><h3>No project upload</h3></div>');
//                }


//            });

//            $('#lblProjectID').html("");
//            $('#lblProjectID').html('' + id + '');

//            $('.ImageContainer').on("click", function () {
//                var checkstr = confirm("Are you sure?")
//                if (checkstr == false) {
//                    return false;
//                }
//                else {
//                    var id = this.parentElement.id;
//                    //id = parseInt(id);
//                    id = JSON.parse(id)

//                    $.ajax({
//                        type: "POST",
//                        url: "/Project/DeleteAttachment?id=" + id + "",
//                        contentType: "application/json; charset=utf-8",
//                        dataType: 'json',
//                        //data: '{id:"' + id + '"}',
//                        success: function (result) {

//                            //$("#editmodal").hide();
//                            //GetAllOpenProjects()

//                            $('#detailmodal').modal("hide");
//                            //alert("Delete successfully");
//                            toastr.success("Delete successfully", "Success");


//                        }
//                    });
//                }
//            })

//        }

//    });


//}


//function GetCategory() {
//    $.ajax({
//        type: "POST",
//        url: "/Project/GetCategory",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {

//            var json = JSON.parse(result);
//            var html = "";
//            $(json).each(function (index, value) {
//                var Id = json[index].Id;
//                var Category = json[index].CategoryName;
//                html += "<option value=" + Id + ">" + Category + "</option>";
//            });
//            $("#CategoryIDAdd").append(html);

//        }
//    });

//}

//function GetProvince() {
//    $.ajax({

//        type: "POST",
//        url: "/Project/GetProvince",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {
//            var json = JSON.parse(result);
//            var html = "";
//            $(json).each(function (index, value) {
//                ProID = json[index].Id;
//                var ProvinceName = json[index].ProvinceName;

//                html += "<option value=" + ProID + ">" + ProvinceName + "</option>";
//            });
//            $("#ProvinceIDAdd").append(html);

//        }
//    });
//}

//function bindGetCity(ProID, City) {

//    $.ajax({

//        type: "POST",
//        url: "/Project/GetCity",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{values: ' + ProID + '}',
//        success: function (result) {

//            var json = JSON.parse(result);
//            $("#CityIDAdd").html('');
//            $("#CityIDAdd").append("<option value='' > Please select</option>");
//            var html = "";
//            $(json).each(function (index, value) {
//                var Id = json[index].Id;
//                var CityName = json[index].CityName;
//                html += "<option value=" + Id + ">" + CityName + "</option>";
//            });
//            // if ($('#CityIDAdd').val() == null || $('#CityIDAdd').val() == 'Please select') {
//            $('#CityIDAdd').append(html);
//            //}
//            $("#CityIDAdd").val(City);

//        },

//        failure: function (response) {
//            // alert(response.responseText);
//        },
//        error: function (response) {
//            // alert(response.responseText);
//        }

//    });

//}


//function GetCountMonthAndYear() {
//    $.ajax({

//        type: "POST",
//        url: "/AdminProjectList/GetYearAndMonthProCount",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {

//            $('.loader').css("display", "none");      
//            var json = JSON.parse(result);
//            $(json).each(function (index, value) {
//                var WeekRecord = json[index].WeekRecord;
//                var MonthRecord = json[index].MonthRecord;
//                var YearRecord = json[index].YearRecord;
//                $('#TotalProjectWeek').text(WeekRecord);
//                $('#TotalProjectmonth').text(MonthRecord);
//                $('#TotalProjectyear').text(YearRecord);
//            });


//        }
//    });
//}



//function resetValue() {
//    $(".imgrev").text("");
//    a.length = 0;
//    spliceid = 0;
//    $("#imageUploadForm").val("");
//    $("#fileListFromHome ul").html("");
//}

//function Delete(id) {
//    //$("#DeleteId").click(function () {


//    // var Id = $(this).attr('data-id');
//    var url = '/Project/Delete?Id=' + id;


//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ Id: "' + id + '" }',
//        success: function (result) {

//            $("#myModal").modal("hide");
//            GetAllOpenProjects();

//        }
//    });
//    //});
//}
//$("#detailmodal").on("hidden.bs.modal", function () {
//    debugger
//    $(".ul-nav .imgrev").remove();
//    $("#ulList").empty();
//    DestroyAdminparsleyValidation();
//});

//var b = [];
//var a = [];
//var spliceid = 0;
//function ShowFile() {
   
//    // $("#ulList").empty();
//    var fp = $("#imageUploadForm");
//    var lg = fp[0].files.length; // get length
//    var items = fp[0].files;    //$("#imageUploadForm").get(0).files; same both
//    var fragment = "";
//    if (lg > 0) {
//        for (var i = 0; i < lg; i++) {
//            var fileName = items[i].name; // get file name
//            var fileSize = items[i].size; // get file size 
//            var fileType = items[i].type;
//            var filePath = items[i].path;// get file type
//            // append li to UL tag to display File info
//            // fragment += "<li>" + fileName + " " + fileSize + " bytes. Type :" + fileType + "</li>";
//            fragment += "<li class='imgrev'><p class='remove' id='" + spliceid++ + "' style='color:red'>x</p>" + fileName + filePath + " </li>";
//            b = a.push(items[i]);
//        }
//        $("ul").append(fragment);
//       // alert("total Count" + a.length + "Current Count" + b);
//        console.log(a);
//    }


//}

////$("#ulList .imgrev").on("click", ".remove", function () {

////    var checkstr = confirm("Are you sure?")
////    if (checkstr == true) {
////        $(this).parent('.imgrev').remove();
////    }
////    return false;

////});

////$("#filemsgformHome").hide();



////DeletedWork
////function DeleteProjectID(Id) {
////    $("#deletemodal").modal("show");
////    $("#DeleteId").click(function () {
////        DeleteAdminProject(Id);
////    });
////}

//var admidelid = 0;
//function DeleteProjectID(Id) {
//    debugger
//    admidelid = Id;
//    $("#deletemodal").modal("show");
//    //$("#deletemodal").on("click", "#DeleteId", function () {
//    ////deletemodal.on() $("#DeleteId").click(function () {
//    //    DeleteAdminProject(Id);
//    //});
//}


//$("#deletemodal").on("click", "#DeleteId", function () {
//    debugger
//    //deletemodal.on() $("#DeleteId").click(function () {
//    DeleteAdminProject(admidelid);
//    admidelid = 0;
//})

//function DeleteAdminProject(id) {


//    var url = '/AdminProjectList/Delete?id=' + id;
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ id: "' + id + '" }',
//        success: function (result) {
//            $("#deletemodal").modal("hide");
//            GetAllOpenProjects();



//        }
//    });
//}

//function Showmsgtooltip() {
//    //alert("this is tool msg");
//    $('[data-toggle="tooltip"]').tooltip();
//}


//function init(jQuery) {
//    // $('[data-toggle="tooltip"]').tooltip();


//    AdminparsleyValidation();

//    $('input[type="file"]').each(function () {
//        // get label text
//        var label = $(this).parents('.form-group').find('label').text();
//        label = (label) ? label : 'Upload File';

//        // wrap the file input
//        $(this).wrap('<div class="input-file"></div>');
//        // display label
//        $(this).before('<span class="btn"> <i class="fa fa-plus mr-2"></i>' + label + '</span>');
//        // we will display selected file here
//        $(this).before('<span class="file-selected"></span>');

//        // file input change listener 
//        $(this).change(function (e) {
//            // Get this file input value
//            var val = $(this).val();

//            // Let's only show filename.
//            // By default file input value is a fullpath, something like 
//            // C:\fakepath\Nuriootpa1.jpg depending on your browser.
//            var filename = val.replace(/^.*[\\\/]/, '');

//            // Display the filename
//            $(this).siblings('.file-selected').text(filename);
//        });
//    });

//    // Open the file browser when our custom button is clicked.
//    $('.input-file .btn').click(function () {
//        $(this).siblings('input[type="file"]').trigger('click');
//    });
//    GetCountMonthAndYear();
//    var ProID = 0;
//    GetAllOpenProjects();
//    GetCategory();
//    ShowFile();
//    // Showmsgtooltip();
//}


//$(document).ready(init);
























































////function validate_AdminProject() {
////    var isValid = true;
////    if ($('#CategoryIDAdd').val() == "0") {
////        $('#CategoryIDAdd').css('border', '1px solid Red');
////        isValid = false;
////    }
////    else {
////        $('#CategoryIDAdd').css('border-color', 'lightgrey');
////    }

////    if ($("#JobTitle").val() == "") {
////        $('#JobTitle').css('border', '1px solid Red');
////        isValid = false;
////    }
////    else {
////        $('#JobTitle').css('border-color', 'lightgrey');
////    }

////    if ($("#HomeownerName").val() == "") {
////        $('#HomeownerName').css('border', '1px solid Red');
////        isValid = false;
////    }
////    else {
////        $('#HomeownerName').css('border-color', 'lightgrey');
////    }
////    if ($('#EstimatedStartDate').val() == "") {
////        $('#EstimatedStartDate').css('border', '1px solid Red');
////        isValid = false;
////    }
////    else {
////        $('#EstimatedStartDate').css('border-color', 'lightgrey');
////    }

////    if ($('#EstimatedBudget').val() == "") {
////        $('#EstimatedBudget').css('border', '1px solid Red');
////        isValid = false;
////    } else {
////        $('#EstimatedBudget').css('border-color', 'lightgrey');
////    }
////    return isValid;
////}

////function ClearBorder() {

////    if ($('#JobTitle').val() != "") {
////        $('#JobTitle').css('border', 'none');
////    }

////    if ($('#CategoryIDAdd').val() != "0") {
////        $('#CategoryIDAdd').css('border', 'none');
////    }


////    if ($("#HomeownerName").val() != "") {
////        $('#HomeownerName').css('border', 'none');


////    }

////    if ($("#EstimatedBudget").val() != "") {
////        $('#EstimatedBudget').css('border', 'none');

////    }


////    if ($('#EstimatedStartDate').val() != "") {
////        $('#EstimatedStartDate').css('border', 'none');
////    }


////}

////    $("#btnUpdate").click(function () {
        

////        var ID = $("#ProjectId").val();
////        var JobTitle = $("#JobTitle").val();
////        var CategoryID = $("#CategoryIDAdd").val();
////        var JobDescription = $("#JobDescription").val();
////        var EstimatedStartDate = $("#EstimatedStartDate").val();
////        var EstimatedBudget = $("#EstimatedBudget").val();
////        var CityID = $("#CityIDAdd").val();
////        var ProvinceID = $("#ProvinceIDAdd").val();

////        var record = {
////            'Id': ID,
////            'JobTitle': JobTitle,
////            'CategoryID': CategoryID,
////            'JobDescription': JobDescription,
////            'EstimatedStartDate': EstimatedStartDate,
////            'EstimatedBudget': EstimatedBudget,
////            'CityID': CityID,
////            'ProvinceID': ProvinceID

////        };
////        var checkValid = validate_AdminProject();
////        if (checkValid == false) {
////            return false;
////        }
////        else {
////            $.ajax({
////                type: "POST",
////                url: "/Project/Update",
////                contentType: "application/json; charset=utf-8",
////                dataType: 'json',
////                data: JSON.stringify(record),
////                success: function (result) {
////                    // alert("Submit");
////                    GetAllOpenProjects();
////                }
////            });
////        }
////    });

////    function UpdateData() {
        
////        // $("#btnUpdate").click(function () {
////        var JobTitle = $("#JobTitle").val();
////        var CategoryID = $("#CategoryIDAdd").val();
////        var JobDescription = $("#JobDescription").val();
////        var EstimatedStartDate = $("#EstimatedStartDate").val();
////        var EstimatedBudget = $("#EstimatedBudget").val();
////        var CityID = $("#CityIDAdd").val();
////        var ProvinceID = $("#ProvinceIDAdd").val();

////        var record = {
////            'Id': ID,
////            'JobTitle': JobTitle,
////            'CategoryID': CategoryID,
////            'JobDescription': JobDescription,
////            'EstimatedStartDate': EstimatedStartDate,
////            'EstimatedBudget': EstimatedBudget,
////            'CityID': CityID,
////            'ProvinceID': ProvinceID

////        };
////        var checkValid = validate_AdminProject();
////        if (checkValid == false) {
////            return false;
////        } else {
////            $.ajax({
////                type: "POST",
////                url: "/Project/Update",
////                contentType: "application/json; charset=utf-8",
////                dataType: 'json',
////                data: JSON.stringify(record),
////                success: function (result) {
////                    UpdateImage();
////                    GetAllOpenProjects();
////                    resetValue();
////                }
////            });
////        }
////    }

////    function UpdateImage() {
////        var ProjectID = $('#lblProjectID').text();
////        var Path = "";
////        //get all file object in fileuplaod
////        var file = $("#imageUploadForm").get(0).files;

////        var data = new FormData();
////        //a global variable which stor file object array or multiple file :eu
////        for (i = 0; i < a.length; i++) {
////            // data.append("FilePath", file[i]);
////            data.append("FilePath", a[i]);
////        }
////        data.append("ProjectId", ProjectID);

////        $.ajax({
////            type: "POST",
////            url: "/Project/UpdateAttachements",
////            contentType: false,
////            processData: false,
////            dataType: 'json',
////            data: data,
////            success: function (result) {
////                // GetAllOpenProjects()
////                alert("SuccessFullySave");

////            }
////        });

////    }

////    function resetValue() {
////        $(".imgrev").text("");
////        a.length = 0;
////        spliceid = 0;
////        $("#imageUploadForm").val("");
////        $("#fileListFromHome ul").html("");
////    }



////$('.loader').css("display", "flex");        
////function GetAllOpenProjects() {
////    var html = null;
////    var HomeOwnerStatus = "Open Job";
////    $.ajax({
////        type: "POST",
////        url: "/Project/GetAllProjects?HomeOwnerStatus=" + HomeOwnerStatus,
////        contentType: "application/json; charset=utf-8",
////        dataType: 'json',
////        data: '{HomeOwnerStatus: "' + HomeOwnerStatus + '"}',
////        success: function (result) {
////            $('.loader').css("display", "none");      
////            $("#example").dataTable().fnDestroy();
////            var json = JSON.parse(result);

////            var editor = $('#example').DataTable({
////                data: json,               
////                columns: [
////                { "data": "JobTitle" },
////                { "data": "CategoryName" },
////                {
////                    "data": "JobDescription",

////                    "render": function (result1) {
                        
////                        return '<td class="fa_table" ><span data-toggle="tooltip" onmouseover="Showmsgtooltip()" title="' + result1 + '" class="datatooltips">' + result1 + '</span></td>';
////                        //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-times"></i></a>' +
////                        //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-check"></i></a>';//row.ClientId
////                        // +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
////                    }



////                },
////                { "data": "EstimatedBudget" },
////                {
////                     "data": "EstimatedStartDate",
////                     "render": function (x) {
////                         var date = moment(x).format("YYYY-MM-DD");
////                         return date;
////                     }
////                 },
////                {
////                    "data": "Id",   
////                    "render": function (result1, type, row) {
                        
////                        return '<td class="fa_table"><a href="javascript:;" data-toggle="modal" onclick="GetId(' + result1 + ')" data-target="#detailmodal"><i class="fa fa-edit"></i></td>';
////                        //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-times"></i></a>' +
////                        //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-check"></i></a>';//row.ClientId
////                        // +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
////                    }
////                },

////                ]

////            });




////            //var json = JSON.parse(result);
////            //$('#tbodyOpen').html('');
////            //$(json).each(function (index, value) {
////            //    var Id = json[index].Id;
////            //    var JobTitle = json[index].JobTitle;
////            //    var CategoryID = json[index].CategoryID;
////            //    var JobDescription = json[index].JobDescription;
////            //    var EstimatedStartDate = json[index].EstimatedStartDate;
////            //    var EstimatedBudget = json[index].EstimatedBudget;
////            //    var CityID = json[index].CityID;
////            //    var ProvinceID = json[index].ProvinceID;
////            //    var CityName = json[index].CityName;
////            //    var ProvinceName = json[index].ProvinceName;
////            //    var CategoryName = json[index].CategoryName;          //    
////            //    html = '<tr class="tbody-light">' +
////            //                   '<td scope="row">' + JobTitle + '</td>' +
////            //                   '<td>' + CategoryName + '</td>' +
////            //                   '<td>' + JobDescription + '</td>' +
////            //                   '<td>' + EstimatedBudget + '</td>' +
////            //                   '<td>' + EstimatedStartDate + '</td>' +
////            //                   //'<td>' + CityName + '</td>' +
////            //                  // '<td>' + ProvinceName + '</td>' +
////            //                  //'+ json[index] + ',' + json[index] + ',' + json[index] + ',' + json[index] + ',' + json[index] +'
////            //                   //'<td class="fa_table"><i class="fa fa-edit" onclick="GetId()" id="modalbtn" class="trigger-btn" data-toggle="modal"></i></td>' +
////            //                    '<td class="fa_table"><a href="javascript:;" data-toggle="modal" data-target="#detailmodal"><i class="fa fa-edit"></i></td>' +
////            //        '</tr>';
////            //    $('#tbodyOpen').append(html);
////            //});
////        }
////    });
////}


//////function GetId(Id) {
//////    $("#detailmodal").modal("show");
//////    //$("#DeleteId").attr('data-id', id);
//////    //$("#DeleteId").click(function () {
//////    //    Delete(id);
//////    //});    
//////    Edit(Id);
//////}
////function GetId(Id) {
////    resetValue();
////    $("#detailmodal").modal("show");
////    //$("#DeleteId").attr('data-id', id);
////    //$("#DeleteId").click(function () {
////    // Delete(id);
////    //});

////    Edit(Id);
////    }
////function BindDeleteList() {
////    spliceid = 0;
////    $("#fileListFromHome ul").html("");
////    var children = "";
////    for (var i = 0; i < a.length; i++) {

////        children += "<li class='imgrev'><p class='remove' id='" + spliceid++ + "' style='color:red'>x</p>" + a[i].name + " </li>";
////        // b = a.push(file[i]);
////        // children += "<li class='imgrev'><p class='remove' style='color:red'>x</p>" + input.files.item(i) + " </li>";

////    }
////    // children += '</ul>';
////    $("#fileListFromHome ul").append(children);


////}

////var b = [];
////var a = [];
////var spliceid = 0;
////function ShowFile() {
////    
////    // $("#ulList").empty();
////    var fp = $("#imageUploadForm");
////    var lg = fp[0].files.length; // get length
////    var items = fp[0].files; //$("#imageUploadForm").get(0).files; same both
////    var fragment = "";
////    if (lg > 0) {
////        for (var i = 0; i < lg; i++) {
////            var fileName = items[i].name; // get file name
////            var fileSize = items[i].size; // get file size
////            var fileType = items[i].type;
////            var filePath = items[i].path;// get file type
////            // append li to UL tag to display File info
////            // fragment += "<li>" + fileName + " " + fileSize + " bytes. Type :" + fileType + "</li>";
////            fragment += "<li class='imgrev'><p class='remove' id='" + spliceid++ + "' style='color:red'>x</p>" + fileName + filePath + " </li>";
////            b = a.push(items[i]);
////        }
////        $("ul").append(fragment);
////        alert("total Count" + a.length + "Current Count" + b);
////        console.log(a);
////    }


////}


////$("#detailmodal").on("click", "#SaveImageData", function () {
////    
////    alert("ok");
////    UpdateData();
////    //resetValue();
////    //UpdateImage();
////    //GetAllOpenProjects();
////});



////$("#btnUpdateAttachments").click(function () {
    
////    var ProjectID = $('#lblProjectID').text();
////    var Path = "";
////    var file = $("#imageUploadForm").get(0).files;

////    var data = new FormData();
////    for (i = 0; i < file.length; i++) {
////        data.append("FilePath", file[i]);
////    }
////    data.append("ProjectId", ProjectID);

////    $.ajax({
////        type: "POST",
////        url: "/Project/UpdateAttachements",
////        contentType: false,
////        processData: false,
////        dataType: 'json',
////        data: data,
////        success: function (result) {
////            //GetAllOpenProjects()
////            alert("Submit");
////        }
////    });

////});

//////function Edit(id) {    
//////    ID = id;
//////    var url = '/Project/EditHomeOwner?id=' + id;
//////    //$('.editprofile').html('');
//////    $.ajax({
//////        type: "POST",
//////        url: url,
//////        contentType: "application/json; charset=utf-8",
//////        dataType: 'json',
//////        data: '{ id: "' + id + '" }',
//////        success: function (result) {            
//////            var json = JSON.parse(result);
//////            var wrapper = $('.Images');
//////            $('.btnContainer').html("");
//////            $('.Documents').html("");
//////            wrapper.html("");
//////            $.each(json, function (index, value) {                
//////                var JobTitle = value.JobTitle;
//////                var CategoryID = value.CategoryID;
//////                var JobDescription = value.JobDescription
//////                var EstimatedStartDate = value.EstimatedStartDate;
//////                var EstimatedBudget = value.EstimatedBudget;
//////                var Province = value.ProvinceID;
//////                var City = value.CityID;
//////                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
//////                $("#JobTitle").val(JobTitle);
//////                $("#CategoryIDAdd").val(CategoryID);
//////                $("#JobDescription").val(JobDescription);
//////                $("#EstimatedStartDate").val(EstimatedStartDate);
//////                $("#EstimatedBudget").val(EstimatedBudget);
//////                $("#ProvinceIDAdd").val(Province);
//////                bindGetCity(Province, City);
//////                $("#CityIDAdd").val(City);
//////                if (value.FilePath.includes("png") || value.FilePath.includes("jpg")) {
//////                    wrapper.append('<div id="' + value.AttachementID + '" ><img src=' + value.FilePath + ' hight="150" width="150"/><a class="ImageContainer">X</a></div>');
//////                }
//////                else {
//////                    $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '"><i class="fa fa-file" style="font-size:36px;"></i></a><button type="button" class="ImageContainer">X</button></div>');
//////                }
//////            });
//////            $('.btnContainer').append('<input type="file" multiple id="imageUploadForm" />');
//////            $('.btnContainer').append('<label id="lblProjectID" style="display:none;">' + id + '</label>');
//////            //GetCategory()
//////            //GetProvince()
//////            //var pid = $("#ProvinceID").val();
//////            $('.ImageContainer').on("click", function () {                
//////                var id = this.parentElement.id;
//////                //id = parseInt(id);
//////                id = JSON.parse(id)
//////                $.ajax({
//////                    type: "POST",
//////                    url: "/Project/DeleteAttachment?id=" + id + "",
//////                    contentType: "application/json; charset=utf-8",
//////                    dataType: 'json',
//////                    //data: '{id:"' + id + '"}',
//////                    success: function (result) {                        
//////                        //$("#editmodal").hide();
//////                        //GetAllOpenProjects()
//////                        $('#editmodal').modal("hide")
//////                        alert("Delete successfully");
//////                    }
//////                });
//////            })
//////        }
//////    });
//////}

////function Edit(id) {
////    
////    ID = id;
////    var url = '/Project/EditHomeOwner?id=' + id;

////    //$('.editprofile').html('');
////    $.ajax({
////        type: "POST",
////        url: url,
////        contentType: "application/json; charset=utf-8",
////        dataType: 'json',
////        data: '{ id: "' + id + '" }',
////        success: function (result) {
////            
////            var json = JSON.parse(result);

////            var wrapper = $('.Images');
////            //$('.btnContainer').html("");
////            $('.Documents').html("");
////            wrapper.html("");
////            $('.no-upproject').html("");
////            $.each(json, function (index, value) {
                
////                var ProId = value.Id;
////                var JobTitle = value.JobTitle;
////                var CategoryID = value.CategoryID;
////                var JobDescription = value.JobDescription
////                var EstimatedStartDate = value.EstimatedStartDate;
////                var EstimatedBudget = value.EstimatedBudget;
////                var Province = value.ProvinceID;
////                var City = value.CityID;

////                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
////                $("#ProjectId").val(ProId);
////                $("#JobTitle").val(JobTitle);
////                $("#CategoryIDAdd").val(CategoryID);
////                $("#JobDescription").val(JobDescription);
////                $("#EstimatedStartDate").val(EstimatedStartDate);
////                $("#EstimatedBudget").val(EstimatedBudget);
////                $("#ProvinceIDAdd").val(Province);
////                bindGetCity(Province, City);
////                $("#CityIDAdd").val(City);
                
////                if (value.isActive) {
////                    if (value.FilePath.includes(".png") || value.FilePath.includes(".jpg") || value.FilePath.includes(".JPG")) {
////                        wrapper.append('<div id="' + value.AttachementID + '" class="img_upload_prjct"><a href=' + value.FilePath + ' target="_blank"><img src=' + value.FilePath + ' hight="150" width="150"/></a><a class="ImageContainer">X</a></div>');
////                    }
////                    else {
////                        if (value.FilePath.includes(".pdf")) {
////                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="pdfIcon"></a><button type="button" class="ImageContainer">X</button></div>');
////                        } else if (value.FilePath.includes(".xlsx")) {
////                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="excelIcon"></a><button type="button" class="ImageContainer">X</button></div>');
////                        } else if (value.FilePath.includes(".doc")) {
////                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="wordIcon"></a><button type="button" class="ImageContainer">X</button></div>');
////                        } else if (value.FilePath.includes(".ppt")) {
////                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="pptIcon"></a><button type="button" class="ImageContainer">X</button></div>');
////                        }
////                        //$('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '"><i class="fa fa-file" style="font-size:36px;"></i></a><button type="button" class="ImageContainer">X</button></div>');
////                    }
////                }
////                if (value.FilePath == null || value.FilePath == "") {
////                    $('.no-upproject').append('<div><h3>No project upload</h3></div>');
////                }


////            });
            
////            //$('.btnContainer').append('<input type="file" multiple id="imageUploadForm" />');
////            //$('.btnContainer').append('<label for="file" class="sr-only"> Attach File(S)</label>  <input type="file" id="imageUploadForm" multiple name="filename">');
            
////            $('#lblProjectID').append('' + id + '');

////            //GetCategory()
////            //GetProvince()

////            //var pid = $("#ProvinceID").val();
////            $('.ImageContainer').on("click", function () {
////                
////                var id = this.parentElement.id;
////                //id = parseInt(id);
////                id = JSON.parse(id)

////                $.ajax({
////                    type: "POST",
////                    url: "/Project/DeleteAttachment?id=" + id + "",
////                    contentType: "application/json; charset=utf-8",
////                    dataType: 'json',
////                    //data: '{id:"' + id + '"}',
////                    success: function (result) {
////                        
////                        //$("#editmodal").hide();
////                        //GetAllOpenProjects()

////                        $('#detailmodal').modal("hide");
////                        alert("Delete successfully");
////                    }
////                });
////            })

////        }

////    });


////}

//////function Edit(Id) {    
//////    //ID = Id;
//////    var url = '/Project/Edit?id=' + Id;
//////    $.ajax({
//////        type: "POST",
//////        url: url,
//////        contentType: "application/json; charset=utf-8",
//////        dataType: 'json',
//////        data: '{ id: "' + Id + '" }',
//////        success: function (result) {            
//////            var json = JSON.parse(result);
//////            var Id = json.Id;
//////            var JobTitle = json.JobTitle;
//////            var CategoryID = json.CategoryID;
//////            var JobDescription = json.JobDescription
//////            var EstimatedStartDate = json.EstimatedStartDate;
//////            var EstimatedBudget = json.EstimatedBudget;
//////            var Province = json.ProvinceID;
//////            var City = json.CityID;
//////            //GetCategory()
//////            //GetProvince()
//////            //var pid = $("#ProvinceID").val();
//////            EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");            
//////            $("#ProjectId").val(Id);
//////            $("#JobTitle").val(JobTitle);
//////            $("#CategoryIDAdd").val(CategoryID);
//////            $("#JobDescription").val(JobDescription);
//////            $("#EstimatedStartDate").val(EstimatedStartDate);
//////            $("#EstimatedBudget").val(EstimatedBudget);
//////            $("#ProvinceIDAdd").val(Province);
//////            bindGetCity(Province, City);
//////            $("#CityIDAdd").val(City);
//////        }
//////    });
//////}

//////function Edit(id) {
//////    
//////    ID = id;
//////    var url = '/Project/EditHomeOwner?id=' + id;
//////    //$('.editprofile').html('');
//////    $.ajax({
//////        type: "POST",
//////        url: url,
//////        contentType: "application/json; charset=utf-8",
//////        dataType: 'json',
//////        data: '{ id: "' + id + '" }',
//////        success: function (result) {
//////            
//////            var json = JSON.parse(result);
//////            var wrapper = $('.Images');
//////            $('.btnContainer').html("");
//////            $('.Documents').html("");
//////            wrapper.html("");
//////            $.each(json, function (index, value) {
//////                
//////                var JobTitle = value.JobTitle;
//////                var CategoryID = value.CategoryID;
//////                var JobDescription = value.JobDescription
//////                var EstimatedStartDate = value.EstimatedStartDate;
//////                var EstimatedBudget = value.EstimatedBudget;
//////                var Province = value.ProvinceID;
//////                var City = value.CityID;
//////                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
//////                $("#JobTitle").val(JobTitle);
//////                $("#CategoryIDAdd").val(CategoryID);
//////                $("#JobDescription").val(JobDescription);
//////                $("#EstimatedStartDate").val(EstimatedStartDate);
//////                $("#EstimatedBudget").val(EstimatedBudget);
//////                $("#ProvinceIDAdd").val(Province);
//////                bindGetCity(Province, City);
//////                $("#CityIDAdd").val(City);
//////                if (value.FilePath.includes("png") || value.FilePath.includes("jpg")) {
//////                    wrapper.append('<div id="' + value.AttachementID + '" ><img src=' + value.FilePath + ' hight="150" width="150"/><a class="ImageContainer">X</a></div>');
//////                }
//////                else {
//////                    $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '"><i class="fa fa-file" style="font-size:36px;"></i></a><button type="button" class="ImageContainer">X</button></div>');
//////                }
//////            });
//////            $('.btnContainer').append('<input type="file" multiple id="imageUploadForm" />');
//////            $('.btnContainer').append('<label id="lblProjectID" style="display:none;">' + id + '</label>');
//////            //GetCategory()
//////            //GetProvince()
//////            //var pid = $("#ProvinceID").val();
//////            $('.ImageContainer').on("click", function () {
//////                
//////                var id = this.parentElement.id;
//////                //id = parseInt(id);
//////                id = JSON.parse(id)
//////                $.ajax({
//////                    type: "POST",
//////                    url: "/Project/DeleteAttachment?id=" + id + "",
//////                    contentType: "application/json; charset=utf-8",
//////                    dataType: 'json',
//////                    //data: '{id:"' + id + '"}',
//////                    success: function (result) {
//////                        
//////                        //$("#editmodal").hide();
//////                        //GetAllOpenProjects()
//////                        $('#editmodal').modal("hide")
//////                        alert("Delete successfully");
//////                    }
//////                });
//////            })
//////        }
//////    });
//////}

//////$("#btnUpdateAttachments").click(function () {
//////    
//////    var ProjectID = $('#lblProjectID').text();
//////    var Path = "";
//////    var file = $("#imageUploadForm").get(0).files;
//////    var data = new FormData();
//////    for (i = 0; i < file.length; i++) {
//////        data.append("FilePath", file[i]);
//////    }
//////    data.append("ProjectId", ProjectID);
//////    $.ajax({
//////        type: "POST",
//////        url: "/Project/UpdateAttachements",
//////        contentType: false,
//////        processData: false,
//////        dataType: 'json',
//////        data: data,
//////        success: function (result) {
//////            //GetAllOpenProjects()
//////            alert("Submit");
//////        }
//////    });
//////});

////function GetCategory() {
////    $.ajax({
////        type: "POST",
////        url: "/Project/GetCategory",
////        contentType: "application/json; charset=utf-8",
////        dataType: 'json',
////        data: '{}',
////        success: function (result) {

////            var json = JSON.parse(result);
////            var html = "";
////            $(json).each(function (index, value) {
////                var Id = json[index].Id;
////                var Category = json[index].CategoryName;
////                html += "<option value=" + Id + ">" + Category + "</option>";
////            });
////            $("#CategoryIDAdd").append(html);

////        }
////    });

////}

////function GetProvince() {
////    $.ajax({

////        type: "POST",
////        url: "/Project/GetProvince",
////        contentType: "application/json; charset=utf-8",
////        dataType: 'json',
////        data: '{}',
////        success: function (result) {
////            var json = JSON.parse(result);
////            var html = "";
////            $(json).each(function (index, value) {
////                ProID = json[index].Id;
////                var ProvinceName = json[index].ProvinceName;

////                html += "<option value=" + ProID + ">" + ProvinceName + "</option>";
////            });
////            $("#ProvinceIDAdd").append(html);

////        }
////    });
////}

////function bindGetCity(ProID, City) {
    
////    $.ajax({

////        type: "POST",
////        url: "/Project/GetCity",
////        contentType: "application/json; charset=utf-8",
////        dataType: 'json',
////        data: '{values: ' + ProID + '}',
////        success: function (result) {
            
////            var json = JSON.parse(result);
////            $("#CityIDAdd").html('');
////            $("#CityIDAdd").append("<option value='' > Please select</option>");
////            var html = "";
////            $(json).each(function (index, value) {
////                var Id = json[index].Id;
////                var CityName = json[index].CityName;
////                html += "<option value=" + Id + ">" + CityName + "</option>";
////            });
////            // if ($('#CityIDAdd').val() == null || $('#CityIDAdd').val() == 'Please select') {
////            $('#CityIDAdd').append(html);
////            //}
////            $("#CityIDAdd").val(City);

////        },

////        failure: function (response) {
////            alert(response.responseText);
////        },
////        error: function (response) {
////            alert(response.responseText);
////        }

////    });

////}

////function GetCountMonthAndYear() {
////    $.ajax({

////        type: "POST",
////        url: "/AdminProjectList/GetYearAndMonthProCount",
////        contentType: "application/json; charset=utf-8",
////        dataType: 'json',
////        data: '{}',
////        success: function (result) {

////            $('.loader').css("display", "none");      
////            var json = JSON.parse(result);
////            $(json).each(function (index, value) {
////                var WeekRecord = json[index].WeekRecord;
////                var MonthRecord = json[index].MonthRecord;
////                var YearRecord = json[index].YearRecord;
////                $('#TotalProjectWeek').text(WeekRecord);
////                $('#TotalProjectmonth').text(MonthRecord);
////                $('#TotalProjectyear').text(YearRecord);
////            });
            
            
////        }
////    });
////}

//////function GetId(jsonindex) {
//////    $("#detailmodal").modal("show");
//////    //$("#DeleteId").attr('data-id', id);
//////    //$("#DeleteId").click(function () {
//////    //    Delete(id);
//////    //});
//////    $("#HName").text();
//////    $("#CName").text();
//////    $("#CEmail").text();
//////}

////function Delete(id) {
////    //$("#DeleteId").click(function () {
    

////    // var Id = $(this).attr('data-id');
////    var url = '/Project/Delete?Id=' + id;


////    $.ajax({
////        type: "POST",
////        url: url,
////        contentType: "application/json; charset=utf-8",
////        dataType: 'json',
////        data: '{ Id: "' + id + '" }',
////        success: function (result) {
            
////            $("#myModal").modal("hide");
////            GetAllOpenProjects();

////        }
////    });
////    //});
////}

////function Showmsgtooltip() {
////    //alert("this is tool msg");
////    $('[data-toggle="tooltip"]').tooltip();
////}

////$("#fileListFromHome").on("click", ".remove", function () {

////    var checkstr = confirm("Are you sure?")
////    if (checkstr == true) {
////        $(this).parent('.imgrev').remove();
////    }
////    return false;

////});

//////$("#filemsgformHome").hide();
//////$("#fileListFromHome").on("click", ".remove", function () {
//////    $(this).parent('.imgrev').remove();
//////});

////$("#filemsgformHome").hide();
////updateList = function () {
////    $("#filemsgformHome").hide();
////    var input = document.getElementById('imageUploadFormAdmin');
////    var output = document.getElementById('fileListFromHome');
////    var children = "";
////    children += '<ul>';
////    for (var i = 0; i < input.files.length; ++i) {

////        children += "<li class='imgrev'><p class='remove' style='color:red'>x</p>" + input.files.item(i).name + " </li>";

////    }
////    children += '</ul>';
////    $("#fileListFromHome").append(children);
////    //output.innerHTML = '<ul>' + children + '</ul>';

////    //var children = "";
////    //for (var i = 0; i < input.files.length; ++i) {
////    //    children += '<li>' + input.files.item(i).name + '</li>';
////    //}
////    //output.innerHTML = '<ul>' + children + '</ul>';
////}

////function init(jQuery) {
////   // $('[data-toggle="tooltip"]').tooltip();

////    //var b = [];
////    //var a = [];
////    //var spliceid = 0;
////    ShowFile();

////    $('input[type="file"]').each(function () {
////        // get label text
////        var label = $(this).parents('.form-group').find('label').text();
////        label = (label) ? label : 'Upload File';

////        // wrap the file input
////        $(this).wrap('<div class="input-file"></div>');
////        // display label
////        $(this).before('<span class="btn"> <i class="fa fa-plus mr-2"></i>' + label + '</span>');
////        // we will display selected file here
////        $(this).before('<span class="file-selected"></span>');

////        // file input change listener 
////        $(this).change(function (e) {
////            // Get this file input value
////            var val = $(this).val();

////            // Let's only show filename.
////            // By default file input value is a fullpath, something like 
////            // C:\fakepath\Nuriootpa1.jpg depending on your browser.
////            var filename = val.replace(/^.*[\\\/]/, '');

////            // Display the filename
////            $(this).siblings('.file-selected').text(filename);
////        });
////    });

////    // Open the file browser when our custom button is clicked.
////    $('.input-file .btn').click(function () {
////        $(this).siblings('input[type="file"]').trigger('click');
////    });
////    GetCountMonthAndYear();
////    var ProID = 0;
////    GetAllOpenProjects();
////    GetCategory();
////   // Showmsgtooltip();
////}

////$(document).ready(init);



function validate_AdminProject() {
    var isValid = true;
    if ($('#CategoryIDAdd').val() == "0") {
        $('#CategoryIDAdd').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CategoryIDAdd').css('border-color', 'lightgrey');
    }

    if ($("#JobTitle").val() == "") {
        $('#JobTitle').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#JobTitle').css('border-color', 'lightgrey');
    }

    if ($("#HomeownerName").val() == "") {
        $('#HomeownerName').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#HomeownerName').css('border-color', 'lightgrey');
    }
    if ($('#EstimatedStartDate').val() == "") {
        $('#EstimatedStartDate').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#EstimatedStartDate').css('border-color', 'lightgrey');
    }

    if ($('#EstimatedBudget').val() == "") {
        $('#EstimatedBudget').css('border', '1px solid Red');
        isValid = false;
    } else {
        $('#EstimatedBudget').css('border-color', 'lightgrey');
    }
    return isValid;
}

function ClearBorder() {

    if ($('#JobTitle').val() != "") {
        $('#JobTitle').css('border', 'none');
    }

    if ($('#CategoryIDAdd').val() != "0") {
        $('#CategoryIDAdd').css('border', 'none');
    }


    if ($("#HomeownerName").val() != "") {
        $('#HomeownerName').css('border', 'none');


    }

    if ($("#EstimatedBudget").val() != "") {
        $('#EstimatedBudget').css('border', 'none');

    }


    if ($('#EstimatedStartDate').val() != "") {
        $('#EstimatedStartDate').css('border', 'none');
    }


}

$("#btnUpdate").click(function () {


    var ID = $("#ProjectId").val();
    var JobTitle = $("#JobTitle").val();
    var CategoryID = $("#CategoryIDAdd").val();
    var JobDescription = $("#JobDescription").val();
    var EstimatedStartDate = $("#EstimatedStartDate").val();
    var EstimatedBudget = $("#EstimatedBudget").val();
    //var CityID = $("#CityIDAdd").val();
    var ProvinceID = $("#ProvinceIDAdd").val();

    var record = {
        'Id': ID,
        'JobTitle': JobTitle,
        'CategoryID': CategoryID,
        'JobDescription': JobDescription,
        'EstimatedStartDate': EstimatedStartDate,
        'EstimatedBudget': EstimatedBudget,
        //'CityID': CityID,
        'ProvinceID': ProvinceID

    };
    var checkValid = validate_AdminProject();
    if (checkValid == false) {
        return false;
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Project/Update",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                // alert("Submit");
                GetAllOpenProjects();
            }
        });
    }
});



$('.loader').css("display", "flex");

function GetAllOpenProjects() {
    var html = null;
    var HomeOwnerStatus = "Open Job";
    $.ajax({
        type: "POST",
        url: "/Project/GetAllProjects?HomeOwnerStatus=" + HomeOwnerStatus,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{HomeOwnerStatus: "' + HomeOwnerStatus + '"}',
        success: function (result) {
            $('.loader').css("display", "none");
            $("#example").dataTable().fnDestroy();
            var json = JSON.parse(result);

            var editor = $('#example').DataTable({
                data: json,
                columns: [
                    { "data": "JobTitle" },
                    { "data": "CategoryName" },
                    {
                        "data": "JobDescription",

                        "render": function (result1) {

                            return '<td class="fa_table" ><span data-toggle="tooltip" onmouseover="Showmsgtooltip()" title="' + result1 + '" class="datatooltips">' + result1 + '</span></td>';
                            //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-times"></i></a>' +
                            //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-check"></i></a>';//row.ClientId
                            // +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
                        }



                    },
                    { "data": "EstimatedBudget" },
                    {
                        "data": "EstimatedStartDate",
                        "render": function (x) {
                            var date = moment(x).format("YYYY-MM-DD");
                            return date;
                        }
                    },
                    {
                        "data": "Id",
                        "render": function (result1, type, row) {

                            //return '<td class="fa_table"><a href="javascript:;" data-toggle="modal" onclick="GetId(' + result1 + ')" data-target="#detailmodal"><i class="fa fa-edit"></i></td>';

                            return '<td class="fa_table"><a href="javascript:;" data-toggle="modal" onclick="GetId(' + result1 + ')" data-target="#detailmodal"><i class="fa fa-edit"></i>' +
                                '<a href="javascript:;" data-toggle="modal" data-target="#deletemodal" ><i class="fa fa-times" onclick = "DeleteProjectID(' + result1 + ')"></i></a>' +
                                '</td>';

                            //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-times"></i></a>' +
                            //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-check"></i></a>';//row.ClientId
                            // +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
                        }
                    },

                ],
                "language": {
                    "paginate": {
                        "previous": "Previous page",
                        "next": "Next page"
                    }
                }

            });




            //var json = JSON.parse(result);
            //$('#tbodyOpen').html('');
            //$(json).each(function (index, value) {
            //    var Id = json[index].Id;
            //    var JobTitle = json[index].JobTitle;
            //    var CategoryID = json[index].CategoryID;
            //    var JobDescription = json[index].JobDescription;
            //    var EstimatedStartDate = json[index].EstimatedStartDate;
            //    var EstimatedBudget = json[index].EstimatedBudget;
            //    var CityID = json[index].CityID;
            //    var ProvinceID = json[index].ProvinceID;
            //    var CityName = json[index].CityName;
            //    var ProvinceName = json[index].ProvinceName;
            //    var CategoryName = json[index].CategoryName;          //    
            //    html = '<tr class="tbody-light">' +
            //                   '<td scope="row">' + JobTitle + '</td>' +
            //                   '<td>' + CategoryName + '</td>' +
            //                   '<td>' + JobDescription + '</td>' +
            //                   '<td>' + EstimatedBudget + '</td>' +
            //                   '<td>' + EstimatedStartDate + '</td>' +
            //                   //'<td>' + CityName + '</td>' +
            //                  // '<td>' + ProvinceName + '</td>' +
            //                  //'+ json[index] + ',' + json[index] + ',' + json[index] + ',' + json[index] + ',' + json[index] +'
            //                   //'<td class="fa_table"><i class="fa fa-edit" onclick="GetId()" id="modalbtn" class="trigger-btn" data-toggle="modal"></i></td>' +
            //                    '<td class="fa_table"><a href="javascript:;" data-toggle="modal" data-target="#detailmodal"><i class="fa fa-edit"></i></td>' +
            //        '</tr>';
            //    $('#tbodyOpen').append(html);
            //});
        }
    });
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
    //var checkValid = validate_AdminProject();
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
            $("#detailmodal").modal('hide');
            GetAllOpenProjects();
            resetValue();
        }
    });
}
//}



$("#fileListFromHome").on("click", ".remove", function () {
    var id = $(this).attr('id');
    //alert(id);

    var msg = confirm("Are you sure?");
    if (msg == true) {
        a.splice(id, 1);
        $(this).parent('.imgrev').remove();

        BindDeleteList();
    }
    return false;
});


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

//    });

function CheckAdminparsleyValidation() {
    event.preventDefault();

    var isvalid = true;
    if ($("#JobTitle").parsley().validate() !== true) isvalid = false;
    if ($("#CategoryIDAdd").parsley().validate() !== true) isvalid = false;
    if ($("#HomeownerName").parsley().validate() !== true) isvalid = false;
    if ($("#EstimatedBudget").parsley().validate() !== true) isvalid = false;
    if ($("#EstimatedStartDate").parsley().validate() !== true) isvalid = false;
    if ($("#JobDescription").parsley().validate() !== true) isvalid = false;

    return isvalid;
}

function AdminparsleyValidation() {

    $("#JobTitle").parsley();
    $("#CategoryIDAdd").parsley();
    $("#HomeownerName").parsley();
    $("#EstimatedBudget").parsley();
    $("#EstimatedStartDate").parsley();
    $("#JobDescription").parsley();


}


function DestroyAdminparsleyValidation() {

    $("#JobTitle").parsley().destroy();
    $("#CategoryIDAdd").parsley().destroy();
    $("#HomeownerName").parsley().destroy();
    $("#EstimatedBudget").parsley().destroy();
    $("#EstimatedStartDate").parsley().destroy();
    $("#JobDescription").parsley().destroy();


}

AdminparsleyValidation();
$("#detailmodal").on("click", "#SaveImageData", function () {

    var res = CheckAdminparsleyValidation();
    if (res == true) {
        UpdateData();
    }
    else {
        return false;
    }
    //resetValue();
    //UpdateImage();
    //GetAllOpenProjects();
});


function UpdateImage() {
    var ProjectID = $('#lblProjectID').text();
    var Path = "";
    //get all file object in fileuplaod 
    var file = $("#imageUploadForm").get(0).files;

    var data = new FormData();
    //a global variable which stor file object array or multiple file :eu
    for (i = 0; i < a.length; i++) {
        // data.append("FilePath", file[i]);
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

            toastr.success("Project UPDATED.", "Success");



        }
    });

}





function GetId(Id) {

    resetValue();
    AdminparsleyValidation();
    $("#detailmodal").modal("show");
    //$("#DeleteId").attr('data-id', id);
    //$("#DeleteId").click(function () {
    //    Delete(id);
    //});

    Edit(Id);



}


$("#btnUpdateAttachments").click(function () {

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
            //GetAllOpenProjects()

        }
    });

});

function Edit(id) {

    ID = id;
    var url = '/Project/EditHomeOwner?id=' + id;

    //$('.editprofile').html('');
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
            wrapper.html("");
            $('.no-upproject').html("");

            $.each(json, function (index, value) {

                var ProId = value.Id;
                var JobTitle = value.JobTitle;
                var CategoryID = value.CategoryID;
                var JobDescription = value.JobDescription
                var EstimatedStartDate = value.EstimatedStartDate;
                var EstimatedBudget = value.EstimatedBudget;
                var Province = value.ProvinceID;
                var City = value.CityID;
                var HName = value.Name;
                $("#HomeownerName").val(HName);
                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
                $("#ProjectId").val(ProId);
                $("#JobTitle").val(JobTitle);
                $("#CategoryIDAdd").val(CategoryID);
                $("#JobDescription").val(JobDescription);
                $("#EstimatedStartDate").val(EstimatedStartDate);
                $("#EstimatedBudget").val(EstimatedBudget);
                $("#ProvinceIDAdd").val(Province);
                bindGetCity(Province, City);
                $("#CityIDAdd").val(City);

                if (value.isActive) {
                    if (value.FilePath.includes(".png") || value.FilePath.includes(".PNG") || value.FilePath.includes(".jpeg") || value.FilePath.includes(".JPEG") || value.FilePath.includes(".jpg") || value.FilePath.includes(".JPG")) {
                        wrapper.append('<div id="' + value.AttachementID + '" class="img_upload_prjct"><a href=' + value.FilePath + ' target="_blank"><img src=' + value.FilePath + ' hight="150" width="150"/></a><a class="ImageContainer">X</a></div>');
                    }
                    else {
                        if (value.FilePath.includes(".pdf")) {
                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="pdfIcon"></a><button type="button" class="ImageContainer">X</button></div>');
                        } else if (value.FilePath.includes(".xlsx")) {
                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="excelIcon"></a><button type="button" class="ImageContainer">X</button></div>');
                        } else if (value.FilePath.includes(".doc")) {
                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="wordIcon"></a><button type="button" class="ImageContainer">X</button></div>');
                        } else if (value.FilePath.includes(".ppt")) {
                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="pptIcon"></a><button type="button" class="ImageContainer">X</button></div>');
                        }
                        //$('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '"><i class="fa fa-file" style="font-size:36px;"></i></a><button type="button" class="ImageContainer">X</button></div>');
                    }
                }
                if (value.FilePath == null || value.FilePath == "") {
                    $('.no-upproject').append('<div><h3>No project upload</h3></div>');
                }


            });

            $('#lblProjectID').html("");
            $('#lblProjectID').html('' + id + '');

            $('.ImageContainer').on("click", function () {

                var id = this.parentElement.id;
                //id = parseInt(id);
                id = JSON.parse(id)
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
                    toastr.success("Delete successfully", "Success");
                    $.ajax({
                        type: "POST",
                        url: "/Project/DeleteAttachment?id=" + id + "",
                        contentType: "application/json; charset=utf-8",
                        dataType: 'json',
                        //data: '{id:"' + id + '"}',
                        success: function (result) {

                            //$("#editmodal").hide();
                            //GetAllOpenProjects()

                            //$('#detailmodal').modal("hide");
                            //alert("Delete successfully");
                            //toastr.success("Delete successfully", "Success");


                        }
                    });
                }
            })


            //$('.ImageContainer').on("click", function () {
            //    var checkstr = confirm("Are you sure?")
            //    if (checkstr == false) {
            //        return false;
            //    }
            //    else {
            //        var id = this.parentElement.id;
            //        //id = parseInt(id);
            //        id = JSON.parse(id)
            //        $.ajax({
            //            type: "POST",
            //            url: "/Project/DeleteAttachment?id=" + id + "",
            //            contentType: "application/json; charset=utf-8",
            //            dataType: 'json',
            //            //data: '{id:"' + id + '"}',
            //            success: function (result) {
            //                //$("#editmodal").hide();
            //                //GetAllOpenProjects()
            //                //$('#detailmodal').modal("hide");
            //                //alert("Delete successfully");
            //                toastr.success("Delete successfully", "Success");
            //            }
            //        });
            //    }
            //})            //$('.ImageContainer').on("click", function () {
            //    var checkstr = confirm("Are you sure?")
            //    if (checkstr == false) {
            //        return false;
            //    }
            //    else {
            //        var id = this.parentElement.id;
            //        //id = parseInt(id);
            //        id = JSON.parse(id)
            //        $.ajax({
            //            type: "POST",
            //            url: "/Project/DeleteAttachment?id=" + id + "",
            //            contentType: "application/json; charset=utf-8",
            //            dataType: 'json',
            //            //data: '{id:"' + id + '"}',
            //            success: function (result) {
                        //                //$("#editmodal").hide();
            //                //GetAllOpenProjects()
            //                //$('#detailmodal').modal("hide");
            //                //alert("Delete successfully");
            //                toastr.success("Delete successfully", "Success");
            //            }
            //        });
            //    }
            //})

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
            // alert(response.responseText);
        },
        error: function (response) {
            // alert(response.responseText);
        }

    });

}


function GetCountMonthAndYear() {
    $.ajax({

        type: "POST",
        url: "/AdminProjectList/GetYearAndMonthProCount",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {

            $('.loader').css("display", "none");
            var json = JSON.parse(result);
            $(json).each(function (index, value) {
                var WeekRecord = json[index].WeekRecord;
                var MonthRecord = json[index].MonthRecord;
                var YearRecord = json[index].YearRecord;
                $('#TotalProjectWeek').text(WeekRecord);
                $('#TotalProjectmonth').text(MonthRecord);
                $('#TotalProjectyear').text(YearRecord);
            });


        }
    });
}
function resetValue() {
    $(".imgrev").text("");
    a.length = 0;
    spliceid = 0;
    $("#imageUploadForm").val("");
    $("#fileListFromHome ul").html("");
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

            $("#myModal").modal("hide");
            toastr.success("Project DELETED.", "Success");
            GetAllOpenProjects();

        }
    });
    //});
}
$("#detailmodal").on("hidden.bs.modal", function () {

    $(".ul-nav .imgrev").remove();
    $("#ulList").empty();
    //DestroyAdminparsleyValidation();
});

var b = [];
var a = [];
var spliceid = 0;
function ShowFile() {

    // $("#ulList").empty();
    var fp = $("#imageUploadForm");
    var lg = fp[0].files.length; // get length
    var items = fp[0].files;    //$("#imageUploadForm").get(0).files; same both
    var fragment = "";
    if (lg > 0) {
        for (var i = 0; i < lg; i++) {
            var fileName = items[i].name; // get file name
            var fileSize = items[i].size; // get file size 
            var fileType = items[i].type;
            var filePath = items[i].path;// get file type
            // append li to UL tag to display File info
            // fragment += "<li>" + fileName + " " + fileSize + " bytes. Type :" + fileType + "</li>";
            fragment += "<li class='imgrev'><p class='remove' id='" + spliceid++ + "' style='color:red'>x</p>" + fileName + filePath + " </li>";
            b = a.push(items[i]);
        }
        $("#uploadImage").append(fragment);
        // alert("total Count" + a.length + "Current Count" + b);
        console.log(a);
    }


}

//$("#ulList .imgrev").on("click", ".remove", function () {
//    var checkstr = confirm("Are you sure?")
//    if (checkstr == true) {
//        $(this).parent('.imgrev').remove();
//    }
//    return false;
//});

//$("#filemsgformHome").hide();



//DeletedWork
var admidelid = 0;
function DeleteProjectID(Id) {
    
    admidelid = Id;
    $("#deletemodal").modal("show");
    //$("#deletemodal").on("click", "#DeleteId", function () {
    ////deletemodal.on() $("#DeleteId").click(function () {
    //    DeleteAdminProject(Id);
    //});
}


$("#deletemodal").on("click", "#DeleteId", function () {
    
    //deletemodal.on() $("#DeleteId").click(function () {
    DeleteAdminProject(admidelid);
    admidelid = 0;
})

function DeleteAdminProject(id) {


    var url = '/AdminProjectList/Delete?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {
            toastr.success("Project DELETED.", "Success");
            $("#deletemodal").modal("hide");
            GetAllOpenProjects();
            GetCountMonthAndYear();


        }
    });
}

function Showmsgtooltip() {
    //alert("this is tool msg");
    $('[data-toggle="tooltip"]').tooltip();
}


function init(jQuery) {
    // $('[data-toggle="tooltip"]').tooltip();

    AdminparsleyValidation();


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
    GetCountMonthAndYear();
    var ProID = 0;
    GetAllOpenProjects();
    GetCategory();
    ShowFile();
    // Showmsgtooltip();
}


$(document).ready(init);
























































//function validate_AdminProject() {
//    var isValid = true;
//    if ($('#CategoryIDAdd').val() == "0") {
//        $('#CategoryIDAdd').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#CategoryIDAdd').css('border-color', 'lightgrey');
//    }

//    if ($("#JobTitle").val() == "") {
//        $('#JobTitle').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#JobTitle').css('border-color', 'lightgrey');
//    }

//    if ($("#HomeownerName").val() == "") {
//        $('#HomeownerName').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#HomeownerName').css('border-color', 'lightgrey');
//    }
//    if ($('#EstimatedStartDate').val() == "") {
//        $('#EstimatedStartDate').css('border', '1px solid Red');
//        isValid = false;
//    }
//    else {
//        $('#EstimatedStartDate').css('border-color', 'lightgrey');
//    }

//    if ($('#EstimatedBudget').val() == "") {
//        $('#EstimatedBudget').css('border', '1px solid Red');
//        isValid = false;
//    } else {
//        $('#EstimatedBudget').css('border-color', 'lightgrey');
//    }
//    return isValid;
//}

//function ClearBorder() {

//    if ($('#JobTitle').val() != "") {
//        $('#JobTitle').css('border', 'none');
//    }

//    if ($('#CategoryIDAdd').val() != "0") {
//        $('#CategoryIDAdd').css('border', 'none');
//    }


//    if ($("#HomeownerName").val() != "") {
//        $('#HomeownerName').css('border', 'none');


//    }

//    if ($("#EstimatedBudget").val() != "") {
//        $('#EstimatedBudget').css('border', 'none');

//    }


//    if ($('#EstimatedStartDate').val() != "") {
//        $('#EstimatedStartDate').css('border', 'none');
//    }


//}

//    $("#btnUpdate").click(function () {


//        var ID = $("#ProjectId").val();
//        var JobTitle = $("#JobTitle").val();
//        var CategoryID = $("#CategoryIDAdd").val();
//        var JobDescription = $("#JobDescription").val();
//        var EstimatedStartDate = $("#EstimatedStartDate").val();
//        var EstimatedBudget = $("#EstimatedBudget").val();
//        var CityID = $("#CityIDAdd").val();
//        var ProvinceID = $("#ProvinceIDAdd").val();

//        var record = {
//            'Id': ID,
//            'JobTitle': JobTitle,
//            'CategoryID': CategoryID,
//            'JobDescription': JobDescription,
//            'EstimatedStartDate': EstimatedStartDate,
//            'EstimatedBudget': EstimatedBudget,
//            'CityID': CityID,
//            'ProvinceID': ProvinceID

//        };
//        var checkValid = validate_AdminProject();
//        if (checkValid == false) {
//            return false;
//        }
//        else {
//            $.ajax({
//                type: "POST",
//                url: "/Project/Update",
//                contentType: "application/json; charset=utf-8",
//                dataType: 'json',
//                data: JSON.stringify(record),
//                success: function (result) {
//                    // alert("Submit");
//                    GetAllOpenProjects();
//                }
//            });
//        }
//    });

//    function UpdateData() {

//        // $("#btnUpdate").click(function () {
//        var JobTitle = $("#JobTitle").val();
//        var CategoryID = $("#CategoryIDAdd").val();
//        var JobDescription = $("#JobDescription").val();
//        var EstimatedStartDate = $("#EstimatedStartDate").val();
//        var EstimatedBudget = $("#EstimatedBudget").val();
//        var CityID = $("#CityIDAdd").val();
//        var ProvinceID = $("#ProvinceIDAdd").val();

//        var record = {
//            'Id': ID,
//            'JobTitle': JobTitle,
//            'CategoryID': CategoryID,
//            'JobDescription': JobDescription,
//            'EstimatedStartDate': EstimatedStartDate,
//            'EstimatedBudget': EstimatedBudget,
//            'CityID': CityID,
//            'ProvinceID': ProvinceID

//        };
//        var checkValid = validate_AdminProject();
//        if (checkValid == false) {
//            return false;
//        } else {
//            $.ajax({
//                type: "POST",
//                url: "/Project/Update",
//                contentType: "application/json; charset=utf-8",
//                dataType: 'json',
//                data: JSON.stringify(record),
//                success: function (result) {
//                    UpdateImage();
//                    GetAllOpenProjects();
//                    resetValue();
//                }
//            });
//        }
//    }

//    function UpdateImage() {
//        var ProjectID = $('#lblProjectID').text();
//        var Path = "";
//        //get all file object in fileuplaod
//        var file = $("#imageUploadForm").get(0).files;

//        var data = new FormData();
//        //a global variable which stor file object array or multiple file :eu
//        for (i = 0; i < a.length; i++) {
//            // data.append("FilePath", file[i]);
//            data.append("FilePath", a[i]);
//        }
//        data.append("ProjectId", ProjectID);

//        $.ajax({
//            type: "POST",
//            url: "/Project/UpdateAttachements",
//            contentType: false,
//            processData: false,
//            dataType: 'json',
//            data: data,
//            success: function (result) {
//                // GetAllOpenProjects()
//                alert("SuccessFullySave");

//            }
//        });

//    }

//    function resetValue() {
//        $(".imgrev").text("");
//        a.length = 0;
//        spliceid = 0;
//        $("#imageUploadForm").val("");
//        $("#fileListFromHome ul").html("");
//    }



//$('.loader').css("display", "flex");        
//function GetAllOpenProjects() {
//    var html = null;
//    var HomeOwnerStatus = "Open Job";
//    $.ajax({
//        type: "POST",
//        url: "/Project/GetAllProjects?HomeOwnerStatus=" + HomeOwnerStatus,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{HomeOwnerStatus: "' + HomeOwnerStatus + '"}',
//        success: function (result) {
//            $('.loader').css("display", "none");      
//            $("#example").dataTable().fnDestroy();
//            var json = JSON.parse(result);

//            var editor = $('#example').DataTable({
//                data: json,               
//                columns: [
//                { "data": "JobTitle" },
//                { "data": "CategoryName" },
//                {
//                    "data": "JobDescription",

//                    "render": function (result1) {

//                        return '<td class="fa_table" ><span data-toggle="tooltip" onmouseover="Showmsgtooltip()" title="' + result1 + '" class="datatooltips">' + result1 + '</span></td>';
//                        //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-times"></i></a>' +
//                        //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-check"></i></a>';//row.ClientId
//                        // +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
//                    }



//                },
//                { "data": "EstimatedBudget" },
//                {
//                     "data": "EstimatedStartDate",
//                     "render": function (x) {
//                         var date = moment(x).format("YYYY-MM-DD");
//                         return date;
//                     }
//                 },
//                {
//                    "data": "Id",   
//                    "render": function (result1, type, row) {

//                        return '<td class="fa_table"><a href="javascript:;" data-toggle="modal" onclick="GetId(' + result1 + ')" data-target="#detailmodal"><i class="fa fa-edit"></i></td>';
//                        //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-times"></i></a>' +
//                        //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-check"></i></a>';//row.ClientId
//                        // +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
//                    }
//                },

//                ]

//            });




//            //var json = JSON.parse(result);
//            //$('#tbodyOpen').html('');
//            //$(json).each(function (index, value) {
//            //    var Id = json[index].Id;
//            //    var JobTitle = json[index].JobTitle;
//            //    var CategoryID = json[index].CategoryID;
//            //    var JobDescription = json[index].JobDescription;
//            //    var EstimatedStartDate = json[index].EstimatedStartDate;
//            //    var EstimatedBudget = json[index].EstimatedBudget;
//            //    var CityID = json[index].CityID;
//            //    var ProvinceID = json[index].ProvinceID;
//            //    var CityName = json[index].CityName;
//            //    var ProvinceName = json[index].ProvinceName;
//            //    var CategoryName = json[index].CategoryName;          //    
//            //    html = '<tr class="tbody-light">' +
//            //                   '<td scope="row">' + JobTitle + '</td>' +
//            //                   '<td>' + CategoryName + '</td>' +
//            //                   '<td>' + JobDescription + '</td>' +
//            //                   '<td>' + EstimatedBudget + '</td>' +
//            //                   '<td>' + EstimatedStartDate + '</td>' +
//            //                   //'<td>' + CityName + '</td>' +
//            //                  // '<td>' + ProvinceName + '</td>' +
//            //                  //'+ json[index] + ',' + json[index] + ',' + json[index] + ',' + json[index] + ',' + json[index] +'
//            //                   //'<td class="fa_table"><i class="fa fa-edit" onclick="GetId()" id="modalbtn" class="trigger-btn" data-toggle="modal"></i></td>' +
//            //                    '<td class="fa_table"><a href="javascript:;" data-toggle="modal" data-target="#detailmodal"><i class="fa fa-edit"></i></td>' +
//            //        '</tr>';
//            //    $('#tbodyOpen').append(html);
//            //});
//        }
//    });
//}


////function GetId(Id) {
////    $("#detailmodal").modal("show");
////    //$("#DeleteId").attr('data-id', id);
////    //$("#DeleteId").click(function () {
////    //    Delete(id);
////    //});    
////    Edit(Id);
////}
//function GetId(Id) {
//    resetValue();
//    $("#detailmodal").modal("show");
//    //$("#DeleteId").attr('data-id', id);
//    //$("#DeleteId").click(function () {
//    // Delete(id);
//    //});

//    Edit(Id);
//    }
//function BindDeleteList() {
//    spliceid = 0;
//    $("#fileListFromHome ul").html("");
//    var children = "";
//    for (var i = 0; i < a.length; i++) {

//        children += "<li class='imgrev'><p class='remove' id='" + spliceid++ + "' style='color:red'>x</p>" + a[i].name + " </li>";
//        // b = a.push(file[i]);
//        // children += "<li class='imgrev'><p class='remove' style='color:red'>x</p>" + input.files.item(i) + " </li>";

//    }
//    // children += '</ul>';
//    $("#fileListFromHome ul").append(children);


//}

//var b = [];
//var a = [];
//var spliceid = 0;
//function ShowFile() {
//    
//    // $("#ulList").empty();
//    var fp = $("#imageUploadForm");
//    var lg = fp[0].files.length; // get length
//    var items = fp[0].files; //$("#imageUploadForm").get(0).files; same both
//    var fragment = "";
//    if (lg > 0) {
//        for (var i = 0; i < lg; i++) {
//            var fileName = items[i].name; // get file name
//            var fileSize = items[i].size; // get file size
//            var fileType = items[i].type;
//            var filePath = items[i].path;// get file type
//            // append li to UL tag to display File info
//            // fragment += "<li>" + fileName + " " + fileSize + " bytes. Type :" + fileType + "</li>";
//            fragment += "<li class='imgrev'><p class='remove' id='" + spliceid++ + "' style='color:red'>x</p>" + fileName + filePath + " </li>";
//            b = a.push(items[i]);
//        }
//        $("ul").append(fragment);
//        alert("total Count" + a.length + "Current Count" + b);
//        console.log(a);
//    }


//}


//$("#detailmodal").on("click", "#SaveImageData", function () {
//    
//    alert("ok");
//    UpdateData();
//    //resetValue();
//    //UpdateImage();
//    //GetAllOpenProjects();
//});



//$("#btnUpdateAttachments").click(function () {

//    var ProjectID = $('#lblProjectID').text();
//    var Path = "";
//    var file = $("#imageUploadForm").get(0).files;

//    var data = new FormData();
//    for (i = 0; i < file.length; i++) {
//        data.append("FilePath", file[i]);
//    }
//    data.append("ProjectId", ProjectID);

//    $.ajax({
//        type: "POST",
//        url: "/Project/UpdateAttachements",
//        contentType: false,
//        processData: false,
//        dataType: 'json',
//        data: data,
//        success: function (result) {
//            //GetAllOpenProjects()
//            alert("Submit");
//        }
//    });

//});

////function Edit(id) {    
////    ID = id;
////    var url = '/Project/EditHomeOwner?id=' + id;
////    //$('.editprofile').html('');
////    $.ajax({
////        type: "POST",
////        url: url,
////        contentType: "application/json; charset=utf-8",
////        dataType: 'json',
////        data: '{ id: "' + id + '" }',
////        success: function (result) {            
////            var json = JSON.parse(result);
////            var wrapper = $('.Images');
////            $('.btnContainer').html("");
////            $('.Documents').html("");
////            wrapper.html("");
////            $.each(json, function (index, value) {                
////                var JobTitle = value.JobTitle;
////                var CategoryID = value.CategoryID;
////                var JobDescription = value.JobDescription
////                var EstimatedStartDate = value.EstimatedStartDate;
////                var EstimatedBudget = value.EstimatedBudget;
////                var Province = value.ProvinceID;
////                var City = value.CityID;
////                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
////                $("#JobTitle").val(JobTitle);
////                $("#CategoryIDAdd").val(CategoryID);
////                $("#JobDescription").val(JobDescription);
////                $("#EstimatedStartDate").val(EstimatedStartDate);
////                $("#EstimatedBudget").val(EstimatedBudget);
////                $("#ProvinceIDAdd").val(Province);
////                bindGetCity(Province, City);
////                $("#CityIDAdd").val(City);
////                if (value.FilePath.includes("png") || value.FilePath.includes("jpg")) {
////                    wrapper.append('<div id="' + value.AttachementID + '" ><img src=' + value.FilePath + ' hight="150" width="150"/><a class="ImageContainer">X</a></div>');
////                }
////                else {
////                    $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '"><i class="fa fa-file" style="font-size:36px;"></i></a><button type="button" class="ImageContainer">X</button></div>');
////                }
////            });
////            $('.btnContainer').append('<input type="file" multiple id="imageUploadForm" />');
////            $('.btnContainer').append('<label id="lblProjectID" style="display:none;">' + id + '</label>');
////            //GetCategory()
////            //GetProvince()
////            //var pid = $("#ProvinceID").val();
////            $('.ImageContainer').on("click", function () {                
////                var id = this.parentElement.id;
////                //id = parseInt(id);
////                id = JSON.parse(id)
////                $.ajax({
////                    type: "POST",
////                    url: "/Project/DeleteAttachment?id=" + id + "",
////                    contentType: "application/json; charset=utf-8",
////                    dataType: 'json',
////                    //data: '{id:"' + id + '"}',
////                    success: function (result) {                        
////                        //$("#editmodal").hide();
////                        //GetAllOpenProjects()
////                        $('#editmodal').modal("hide")
////                        alert("Delete successfully");
////                    }
////                });
////            })
////        }
////    });
////}

//function Edit(id) {
//    
//    ID = id;
//    var url = '/Project/EditHomeOwner?id=' + id;

//    //$('.editprofile').html('');
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ id: "' + id + '" }',
//        success: function (result) {
//            
//            var json = JSON.parse(result);

//            var wrapper = $('.Images');
//            //$('.btnContainer').html("");
//            $('.Documents').html("");
//            wrapper.html("");
//            $('.no-upproject').html("");
//            $.each(json, function (index, value) {

//                var ProId = value.Id;
//                var JobTitle = value.JobTitle;
//                var CategoryID = value.CategoryID;
//                var JobDescription = value.JobDescription
//                var EstimatedStartDate = value.EstimatedStartDate;
//                var EstimatedBudget = value.EstimatedBudget;
//                var Province = value.ProvinceID;
//                var City = value.CityID;

//                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
//                $("#ProjectId").val(ProId);
//                $("#JobTitle").val(JobTitle);
//                $("#CategoryIDAdd").val(CategoryID);
//                $("#JobDescription").val(JobDescription);
//                $("#EstimatedStartDate").val(EstimatedStartDate);
//                $("#EstimatedBudget").val(EstimatedBudget);
//                $("#ProvinceIDAdd").val(Province);
//                bindGetCity(Province, City);
//                $("#CityIDAdd").val(City);

//                if (value.isActive) {
//                    if (value.FilePath.includes(".png") || value.FilePath.includes(".jpg") || value.FilePath.includes(".JPG")) {
//                        wrapper.append('<div id="' + value.AttachementID + '" class="img_upload_prjct"><a href=' + value.FilePath + ' target="_blank"><img src=' + value.FilePath + ' hight="150" width="150"/></a><a class="ImageContainer">X</a></div>');
//                    }
//                    else {
//                        if (value.FilePath.includes(".pdf")) {
//                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="pdfIcon"></a><button type="button" class="ImageContainer">X</button></div>');
//                        } else if (value.FilePath.includes(".xlsx")) {
//                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="excelIcon"></a><button type="button" class="ImageContainer">X</button></div>');
//                        } else if (value.FilePath.includes(".doc")) {
//                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="wordIcon"></a><button type="button" class="ImageContainer">X</button></div>');
//                        } else if (value.FilePath.includes(".ppt")) {
//                            $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '" target="_blank"><span class="pptIcon"></a><button type="button" class="ImageContainer">X</button></div>');
//                        }
//                        //$('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '"><i class="fa fa-file" style="font-size:36px;"></i></a><button type="button" class="ImageContainer">X</button></div>');
//                    }
//                }
//                if (value.FilePath == null || value.FilePath == "") {
//                    $('.no-upproject').append('<div><h3>No project upload</h3></div>');
//                }


//            });

//            //$('.btnContainer').append('<input type="file" multiple id="imageUploadForm" />');
//            //$('.btnContainer').append('<label for="file" class="sr-only"> Attach File(S)</label>  <input type="file" id="imageUploadForm" multiple name="filename">');

//            $('#lblProjectID').append('' + id + '');

//            //GetCategory()
//            //GetProvince()

//            //var pid = $("#ProvinceID").val();
//            $('.ImageContainer').on("click", function () {
//                
//                var id = this.parentElement.id;
//                //id = parseInt(id);
//                id = JSON.parse(id)

//                $.ajax({
//                    type: "POST",
//                    url: "/Project/DeleteAttachment?id=" + id + "",
//                    contentType: "application/json; charset=utf-8",
//                    dataType: 'json',
//                    //data: '{id:"' + id + '"}',
//                    success: function (result) {
//                        
//                        //$("#editmodal").hide();
//                        //GetAllOpenProjects()

//                        $('#detailmodal').modal("hide");
//                        alert("Delete successfully");
//                    }
//                });
//            })

//        }

//    });


//}

////function Edit(Id) {    
////    //ID = Id;
////    var url = '/Project/Edit?id=' + Id;
////    $.ajax({
////        type: "POST",
////        url: url,
////        contentType: "application/json; charset=utf-8",
////        dataType: 'json',
////        data: '{ id: "' + Id + '" }',
////        success: function (result) {            
////            var json = JSON.parse(result);
////            var Id = json.Id;
////            var JobTitle = json.JobTitle;
////            var CategoryID = json.CategoryID;
////            var JobDescription = json.JobDescription
////            var EstimatedStartDate = json.EstimatedStartDate;
////            var EstimatedBudget = json.EstimatedBudget;
////            var Province = json.ProvinceID;
////            var City = json.CityID;
////            //GetCategory()
////            //GetProvince()
////            //var pid = $("#ProvinceID").val();
////            EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");            
////            $("#ProjectId").val(Id);
////            $("#JobTitle").val(JobTitle);
////            $("#CategoryIDAdd").val(CategoryID);
////            $("#JobDescription").val(JobDescription);
////            $("#EstimatedStartDate").val(EstimatedStartDate);
////            $("#EstimatedBudget").val(EstimatedBudget);
////            $("#ProvinceIDAdd").val(Province);
////            bindGetCity(Province, City);
////            $("#CityIDAdd").val(City);
////        }
////    });
////}

////function Edit(id) {
////    
////    ID = id;
////    var url = '/Project/EditHomeOwner?id=' + id;
////    //$('.editprofile').html('');
////    $.ajax({
////        type: "POST",
////        url: url,
////        contentType: "application/json; charset=utf-8",
////        dataType: 'json',
////        data: '{ id: "' + id + '" }',
////        success: function (result) {
////            
////            var json = JSON.parse(result);
////            var wrapper = $('.Images');
////            $('.btnContainer').html("");
////            $('.Documents').html("");
////            wrapper.html("");
////            $.each(json, function (index, value) {
////                
////                var JobTitle = value.JobTitle;
////                var CategoryID = value.CategoryID;
////                var JobDescription = value.JobDescription
////                var EstimatedStartDate = value.EstimatedStartDate;
////                var EstimatedBudget = value.EstimatedBudget;
////                var Province = value.ProvinceID;
////                var City = value.CityID;
////                EstimatedStartDate = moment(EstimatedStartDate).format("YYYY-MM-DD");
////                $("#JobTitle").val(JobTitle);
////                $("#CategoryIDAdd").val(CategoryID);
////                $("#JobDescription").val(JobDescription);
////                $("#EstimatedStartDate").val(EstimatedStartDate);
////                $("#EstimatedBudget").val(EstimatedBudget);
////                $("#ProvinceIDAdd").val(Province);
////                bindGetCity(Province, City);
////                $("#CityIDAdd").val(City);
////                if (value.FilePath.includes("png") || value.FilePath.includes("jpg")) {
////                    wrapper.append('<div id="' + value.AttachementID + '" ><img src=' + value.FilePath + ' hight="150" width="150"/><a class="ImageContainer">X</a></div>');
////                }
////                else {
////                    $('.Documents').append('<div id="' + value.AttachementID + '" ><a href="' + value.FilePath + '"><i class="fa fa-file" style="font-size:36px;"></i></a><button type="button" class="ImageContainer">X</button></div>');
////                }
////            });
////            $('.btnContainer').append('<input type="file" multiple id="imageUploadForm" />');
////            $('.btnContainer').append('<label id="lblProjectID" style="display:none;">' + id + '</label>');
////            //GetCategory()
////            //GetProvince()
////            //var pid = $("#ProvinceID").val();
////            $('.ImageContainer').on("click", function () {
////                
////                var id = this.parentElement.id;
////                //id = parseInt(id);
////                id = JSON.parse(id)
////                $.ajax({
////                    type: "POST",
////                    url: "/Project/DeleteAttachment?id=" + id + "",
////                    contentType: "application/json; charset=utf-8",
////                    dataType: 'json',
////                    //data: '{id:"' + id + '"}',
////                    success: function (result) {
////                        
////                        //$("#editmodal").hide();
////                        //GetAllOpenProjects()
////                        $('#editmodal').modal("hide")
////                        alert("Delete successfully");
////                    }
////                });
////            })
////        }
////    });
////}

////$("#btnUpdateAttachments").click(function () {
////    
////    var ProjectID = $('#lblProjectID').text();
////    var Path = "";
////    var file = $("#imageUploadForm").get(0).files;
////    var data = new FormData();
////    for (i = 0; i < file.length; i++) {
////        data.append("FilePath", file[i]);
////    }
////    data.append("ProjectId", ProjectID);
////    $.ajax({
////        type: "POST",
////        url: "/Project/UpdateAttachements",
////        contentType: false,
////        processData: false,
////        dataType: 'json',
////        data: data,
////        success: function (result) {
////            //GetAllOpenProjects()
////            alert("Submit");
////        }
////    });
////});

//function GetCategory() {
//    $.ajax({
//        type: "POST",
//        url: "/Project/GetCategory",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {

//            var json = JSON.parse(result);
//            var html = "";
//            $(json).each(function (index, value) {
//                var Id = json[index].Id;
//                var Category = json[index].CategoryName;
//                html += "<option value=" + Id + ">" + Category + "</option>";
//            });
//            $("#CategoryIDAdd").append(html);

//        }
//    });

//}

//function GetProvince() {
//    $.ajax({

//        type: "POST",
//        url: "/Project/GetProvince",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {
//            var json = JSON.parse(result);
//            var html = "";
//            $(json).each(function (index, value) {
//                ProID = json[index].Id;
//                var ProvinceName = json[index].ProvinceName;

//                html += "<option value=" + ProID + ">" + ProvinceName + "</option>";
//            });
//            $("#ProvinceIDAdd").append(html);

//        }
//    });
//}

//function bindGetCity(ProID, City) {

//    $.ajax({

//        type: "POST",
//        url: "/Project/GetCity",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{values: ' + ProID + '}',
//        success: function (result) {

//            var json = JSON.parse(result);
//            $("#CityIDAdd").html('');
//            $("#CityIDAdd").append("<option value='' > Please select</option>");
//            var html = "";
//            $(json).each(function (index, value) {
//                var Id = json[index].Id;
//                var CityName = json[index].CityName;
//                html += "<option value=" + Id + ">" + CityName + "</option>";
//            });
//            // if ($('#CityIDAdd').val() == null || $('#CityIDAdd').val() == 'Please select') {
//            $('#CityIDAdd').append(html);
//            //}
//            $("#CityIDAdd").val(City);

//        },

//        failure: function (response) {
//            alert(response.responseText);
//        },
//        error: function (response) {
//            alert(response.responseText);
//        }

//    });

//}

//function GetCountMonthAndYear() {
//    $.ajax({

//        type: "POST",
//        url: "/AdminProjectList/GetYearAndMonthProCount",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{}',
//        success: function (result) {

//            $('.loader').css("display", "none");      
//            var json = JSON.parse(result);
//            $(json).each(function (index, value) {
//                var WeekRecord = json[index].WeekRecord;
//                var MonthRecord = json[index].MonthRecord;
//                var YearRecord = json[index].YearRecord;
//                $('#TotalProjectWeek').text(WeekRecord);
//                $('#TotalProjectmonth').text(MonthRecord);
//                $('#TotalProjectyear').text(YearRecord);
//            });


//        }
//    });
//}

////function GetId(jsonindex) {
////    $("#detailmodal").modal("show");
////    //$("#DeleteId").attr('data-id', id);
////    //$("#DeleteId").click(function () {
////    //    Delete(id);
////    //});
////    $("#HName").text();
////    $("#CName").text();
////    $("#CEmail").text();
////}

//function Delete(id) {
//    //$("#DeleteId").click(function () {


//    // var Id = $(this).attr('data-id');
//    var url = '/Project/Delete?Id=' + id;


//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ Id: "' + id + '" }',
//        success: function (result) {

//            $("#myModal").modal("hide");
//            GetAllOpenProjects();

//        }
//    });
//    //});
//}

//function Showmsgtooltip() {
//    //alert("this is tool msg");
//    $('[data-toggle="tooltip"]').tooltip();
//}

//$("#fileListFromHome").on("click", ".remove", function () {

//    var checkstr = confirm("Are you sure?")
//    if (checkstr == true) {
//        $(this).parent('.imgrev').remove();
//    }
//    return false;

//});

////$("#filemsgformHome").hide();
////$("#fileListFromHome").on("click", ".remove", function () {
////    $(this).parent('.imgrev').remove();
////});

//$("#filemsgformHome").hide();
//updateList = function () {
//    $("#filemsgformHome").hide();
//    var input = document.getElementById('imageUploadFormAdmin');
//    var output = document.getElementById('fileListFromHome');
//    var children = "";
//    children += '<ul>';
//    for (var i = 0; i < input.files.length; ++i) {

//        children += "<li class='imgrev'><p class='remove' style='color:red'>x</p>" + input.files.item(i).name + " </li>";

//    }
//    children += '</ul>';
//    $("#fileListFromHome").append(children);
//    //output.innerHTML = '<ul>' + children + '</ul>';

//    //var children = "";
//    //for (var i = 0; i < input.files.length; ++i) {
//    //    children += '<li>' + input.files.item(i).name + '</li>';
//    //}
//    //output.innerHTML = '<ul>' + children + '</ul>';
//}

//function init(jQuery) {
//   // $('[data-toggle="tooltip"]').tooltip();

//    //var b = [];
//    //var a = [];
//    //var spliceid = 0;
//    ShowFile();

//    $('input[type="file"]').each(function () {
//        // get label text
//        var label = $(this).parents('.form-group').find('label').text();
//        label = (label) ? label : 'Upload File';

//        // wrap the file input
//        $(this).wrap('<div class="input-file"></div>');
//        // display label
//        $(this).before('<span class="btn"> <i class="fa fa-plus mr-2"></i>' + label + '</span>');
//        // we will display selected file here
//        $(this).before('<span class="file-selected"></span>');

//        // file input change listener 
//        $(this).change(function (e) {
//            // Get this file input value
//            var val = $(this).val();

//            // Let's only show filename.
//            // By default file input value is a fullpath, something like 
//            // C:\fakepath\Nuriootpa1.jpg depending on your browser.
//            var filename = val.replace(/^.*[\\\/]/, '');

//            // Display the filename
//            $(this).siblings('.file-selected').text(filename);
//        });
//    });

//    // Open the file browser when our custom button is clicked.
//    $('.input-file .btn').click(function () {
//        $(this).siblings('input[type="file"]').trigger('click');
//    });
//    GetCountMonthAndYear();
//    var ProID = 0;
//    GetAllOpenProjects();
//    GetCategory();
//   // Showmsgtooltip();
//}

//$(document).ready(init);






