function validate_ProvinceFORM() {
    var isValid = true;

    if ($("#ProvinceName").val() == "") {
        $('#ProvinceName').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#ProvinceName').css('border', 'none');
    }

    return isValid;
}

function ClearBorder() {

    if ($("#ProvinceName").val() != "") {
        $('#ProvinceName').css('border', 'none');

    }
}



function validate_ProvinceFORMEdit() {
    var isValid = true;

    if ($("#ProvinceNameEdit").val() == "") {
        $('#ProvinceNameEdit').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#ProvinceNameEdit').css('border', 'none');
    }

    return isValid;
}

function ClearBorderEdit() {
    if ($("#ProvinceNameEdit").val() != "") {
        $('#ProvinceNameEdit').css('border', 'none');

    }
}


//$("#btnSave").click(function () {
$('#addpro-form').on('submit', function (event) {
    event.preventDefault();
    if ($('#addpro-form').parsley().isValid()) {
        var ProvinceName = $("#ProvinceName").val();

        var record = {
            'ProvinceName': ProvinceName
        };

        $.ajax({
            type: "POST",
            url: "/Province/Save",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                if (result == "Already Exist") {
                    // $("#ProvinceName").val('');
                    // $("#addmodal").modal("hide");
                    toastr.error("Province Already Exist !", "Waring");
                    BindGetAllUsers()
                }
                else {
                    $("#ProvinceName").val('');
                    $("#addmodal").modal("hide");
                    toastr.success("Province ADDED.", "Success");
                    BindGetAllUsers()
                }
            }
        });
    }
})




// $("#btnUpdate").click(function () {
$('#uppro-form').on('submit', function (event) {
    event.preventDefault();
    if ($('#uppro-form').parsley().isValid()) {


        var ProvinceName = $("#ProvinceNameEdit").val();

        var record = {
            'Id': ID,
            'ProvinceName': ProvinceName


        };

        $.ajax({
            type: "POST",
            url: "/Province/Update",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                //alert("Submit");

                $("#ProvinceNameEdit").val('');
                $("#editmodal").modal("hide");
                toastr.success("Province UPDATED.", "Success");
                BindGetAllUsers()
            }
        })
    }

})


//$("#btnSave").click(function () {        
//    var ProvinceName = $("#ProvinceName").val();
//    var record = {
//        'ProvinceName': ProvinceName
//    };
//    var checkValid = validate_ProvinceFORM();
//    if (checkValid == false) {
//        return false;
//    } else {
//        $.ajax({
//            type: "POST",
//            url: "/Province/Save",
//            contentType: "application/json; charset=utf-8",
//            dataType: 'json',
//            data: JSON.stringify(record),
//            success: function (result) {
//                //alert("Submit");
//                $("#ProvinceName").val('');
//                BindGetAllUsers()
//            }
//        });
//    }
//})




//$("#btnUpdate").click(function () {        
//    var ProvinceName = $("#ProvinceNameEdit").val();
//    var record = {
//        'Id': ID,
//        'ProvinceName': ProvinceName
//    };
//    var checkValid = validate_ProvinceFORMEdit();
//    if (checkValid == false) {
//        return false;
//    } else {
//        $.ajax({
//            type: "POST",
//            url: "/Province/Update",
//            contentType: "application/json; charset=utf-8",
//            dataType: 'json',
//            data: JSON.stringify(record),
//            success: function (result) {
//                //alert("Submit");
//                $("#ProvinceNameEdit").val('');
//                BindGetAllUsers()
//            }
//        });
//    }
//});



$('.loader').css("display", "flex");
function BindGetAllUsers() {

    var html = null;
    $.ajax({
        type: "POST",
        url: "/Province/GetProvince",
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
                    { "data": "Id" },
                    { "data": "ProvinceName" },
                    {
                        "data": null,
                        "render": function (result, type, row) {

                            return '<a href="javascript:;" data-toggle="modal" data-target="#editmodal"><i class="fa fa-edit" onclick = "Edit(' + result.Id + ')"></i></a>' +

                                '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-times" onclick = "GetId(' + result.Id + ')"></i></a>'
                            // '<a href="javascript:;" data-toggle="modal" data-target="#addmodal"><i class="fa fa-check"></i></a>';




                            //'<a href="/Ticket/Detail/' + result.Id + '"><i class="fa fa-edit"></i></a>' +
                            //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-times"></i></a>' +
                            //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-check"></i></a>';//row.ClientId
                            //// +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
                        }
                    },

                ]

            });



            //var json = JSON.parse(result);
            //$('#tbody').html('');
            //$(json).each(function (index, value) {
            //    var Id = json[index].Id;
            //    var ProvinceName = json[index].ProvinceName;

            //    
            //    html = '<tr class="tbody-light">' +
            //             '<td scope="row">' + Id + '</td>' +
            //             '<td>' + ProvinceName + '</td>' +

            //             //'<td class="fa_table"><i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i></td>' +
            //             '<td class="fa_table">' +
            //             //<i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i>'+
            //                    '<a href="javascript:;" data-toggle="modal" data-target="#editmodal"><i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i></a>' +
            //                    //data-target="#deletemodal"
            //                    '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-times" onclick = "GetId(' + Id + ')"></i></a>' +
            //                    '<a href="javascript:;" data-toggle="modal" data-target="#addmodal"><i class="fa fa-check"></i></a>' +


            //             '</td>' +
            //  '</tr>';

            //    $('#tbody').append(html);
            //});
        }
    });

}

function Edit(id) {

    ID = id;
    var url = '/Province/Edit?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {

            var json = JSON.parse(result);
            var ProvinceName = json.ProvinceName;


            BindGetAllUsers();


            $("#ProvinceNameEdit").val(ProvinceName);




        }
    });
}


function GetId(Id) {

    $("#deletemodal").modal("show");
    //$("#DeleteId").attr('data-id', id);
    $("#DeleteId").click(function () {
        Delete(Id);
    });



}


function Delete(id) {


    var url = '/Province/Delete?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {
            $("#deletemodal").modal("hide");
            if (result == "Cannot Delete") {
                toastr.error("Province has cities it can not be deleted.", "Warning");
                BindGetAllUsers();
            }
            else {
                toastr.success("Province DELETED.", "Success");
                BindGetAllUsers();
            }



        }
    });
}


$("#addmodal").on('hidden.bs.modal', function () {
    $('#addpro-form').parsley().destroy();
});
$("#editmodal").on('hidden.bs.modal', function () {
    $('#uppro-form').parsley().destroy();
});
function init(jQuery) {
    $('#addpro-form').parsley();
    $('#uppro-form').parsley();


    var ProId = 0;
    BindGetAllUsers();


}




$(document).ready(init);