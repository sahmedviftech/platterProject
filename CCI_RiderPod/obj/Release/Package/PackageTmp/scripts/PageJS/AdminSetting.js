function BindGetAllSetting() {

    var html = null;
    $.ajax({
        type: "POST",
        url: "/AdminSetting/GetAllSetting",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            $('.loader').css("display", "none");
            $("#example").dataTable().fnDestroy();
            var json = JSON.parse(result);
            //var Id = json[index].Id;
            var editor = $('#example').DataTable({
                data: json,
                "order": [[0, "desc"]],
                columns: [
                    //  { "data": "Id" },
                    { "data": "Key" },
                    { "data": "Value" },
                    //   { "data": "Slug" },
                    {
                        "data": null,
                        "render": function (result, type, row) {

                            return '<a href="javascript:;" data-toggle="modal" data-target="#editmodal"><i class="fa fa-edit" onclick = "Edit(' + result.Id + ')"></i></a>' +

                                '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-times" onclick = "GetId(' + result.Id + ')"></i></a>'
                            //'<a href="javascript:;" data-toggle="modal" data-target="#addmodal"><i class="fa fa-check"></i></a>';


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


        }
    });

}
function AddSetting() {
    // $("#SettingID").val("");
    $("#SettingKeyAdd").val("");
    $("#SettingValueAdd").val("");
    $("#Addmodal").modal("show");
}
//get data By id


function Edit(id) {
    $("#btnSave").hide();
    $("#btnUpdate").show();
    $("#editmodal").modal("show");
    ID = id;
    var url = '/AdminSetting/Edit?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {

            var json = JSON.parse(result);
            var id = json.Id;
            var key = json.Key;
            var Value = json.Value;
            $("#SettingID").val(id);
            $("#SettingKey").val(key);
            $("#SettingValue").val(Value);
        }

    });

}


//update data function 
$('#SettingUpdateForm').on('submit', function (event) {
    event.preventDefault();
    if ($('#SettingUpdateForm').parsley().isValid()) {
        var Id = $("#SettingID").val();
        var Key = $("#SettingKey").val();
        var Value = $("#SettingValue").val();
        var record = {
            'Id': Id,
            'Key': Key,
            'Value': Value

        };
        $.ajax({
            type: "POST",
            url: "/AdminSetting/Save",
            async: false,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                $("#editmodal").modal("hide");
                $("#SettingID").val("");
                $("#SettingKey").val("");
                $("#SettingValue").val("");
                toastr.success("Setting UPDATED.", "Success");
                BindGetAllSetting();
            }
        });
    }
});


//save data 
$('#SettingADDForm').on('submit', function (event) {
    event.preventDefault();
    if ($('#SettingADDForm').parsley().isValid()) {

        var Key = $("#SettingKeyAdd").val();
        var Value = $("#SettingValueAdd").val();
        var record = {
            'Key': Key,
            'Value': Value

        };
        $.ajax({
            type: "POST",
            url: "/AdminSetting/Save",
            async: false,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                if (result == "Setting Exist") {
                    $("#Addmodal").modal("hide");
                    //  $("#SettingID").val("");
                    $("#SettingKeyAdd").val("");
                    $("#SettingValueAdd").val("");
                    toastr.error("Setting Already Exist!", "Warning")
                    BindGetAllSetting();
                } else {
                    $("#Addmodal").modal("hide");
                    //  $("#SettingID").val("");
                    $("#SettingKeyAdd").val("");
                    $("#SettingValueAdd").val("");
                    toastr.success("Setting ADDED.", "Success");
                    BindGetAllSetting();
                }

            }
        });
    }
});


function GetId(Id) {

    $("#deletemodal").modal("show");
    //$("#DeleteId").attr('data-id', id);
    $("#DeleteId").click(function () {
        Delete(Id);
    });
}


function Delete(id) {
    var url = '/AdminSetting/Delete?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {
            $("#deletemodal").modal("hide");
            toastr.success("Setting DELETED.", "Success");
            BindGetAllSetting();
        }
    });
}

$("#Addmodal").on('hidden.bs.modal', function () {
    $('#SettingADDForm').parsley().destroy();
});
$("#editmodal").on('hidden.bs.modal', function () {
    $('#SettingUpdateForm').parsley().destroy();
});

function init(jQuery) {
    //var ProId = 0;
    //var ProvinceName = "";
    //var proIDNAme = "#ProvinceId";
    $('#SettingADDForm').parsley();
    $('#SettingUpdateForm').parsley();
    BindGetAllSetting();
    //BindGetProvinceRec(proIDNAme);

}

$(document).ready(init);

