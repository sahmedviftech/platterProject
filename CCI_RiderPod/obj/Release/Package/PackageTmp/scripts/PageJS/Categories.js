function validate_CategoriesFORM() {
    var isValid = true;

    if ($("#CategoryName").val() == "") {
        $('#CategoryName').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CategoryName').css('border', 'none');
    }
    if ($("#CategoryCharges").val() == "") {
        $('#CategoryCharges').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CategoryCharges').css('border', 'none');
    }

    return isValid;
}

function ClearBorder() {

    if ($("#CategoryName").val() != "") {
        $('#CategoryName').css('border', 'none');

    }
    if ($("#CategoryCharges").val() != "") {
        $('#CategoryCharges').css('border', 'none');

    }
}



function validate_CategoriesFORMEdit() {
    var isValid = true;

    if ($("#CategoryNameEdit").val() == "") {
        $('#CategoryNameEdit').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CategoryNameEdit').css('border', 'none');
    }

    if ($("#CategoryChargesEdit").val() == "") {
        $('#CategoryChargesEdit').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CategoryChargesEdit').css('border', 'none');
    }
    return isValid;
}

function ClearBorderEdit() {

    if ($("#CategoryNameEdit").val() != "") {
        $('#CategoryNameEdit').css('border', 'none');

    }
    if ($("#CategoryChargesEdit").val() != "") {
        $('#CategoryChargesEdit').css('border', 'none');

    }

}


$('#cat-form').on('submit', function (event) {

    event.preventDefault();
    if ($('#cat-form').parsley().isValid()) {
        var CategoryName = $("#CategoryName").val();
        var CategoryCharges = $("#CategoryCharges").val();
        var Slugs = $("#SlugsAdd").val();
        var record = {
            'CategoryName': CategoryName,
            'Charges': CategoryCharges,
            'Slug': Slugs
        };


        $.ajax({
            type: "POST",
            url: "/Categories/Save",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {

                if (result == "Already Exist") {
                    toastr.error("Category Already Exist !", "Waring");
                    BindGetAllUsers()
                }
                else {
                    $("#addmodal").modal("hide");
                    $("#CategoryName").val('');
                    $("#CategoryCharges").val('');
                    toastr.success("Category ADDED.", "Success");
                    BindGetAllUsers()
                }
            }
        });
    }
})


//}

//function bindUpdateButton() {

//  $("#btnUpdate").click(function () {
$('#catup-form').on('submit', function (event) {
    event.preventDefault();
    if ($('#catup-form').parsley().isValid()) {


        var CategoryName = $("#CategoryNameEdit").val();
        var CategoryCharges = $("#CategoryChargesEdit").val();
        var Slugs = $("#SlugsEdit").val();
        var record = {
            'Id': ID,
            'CategoryName': CategoryName,
            'Charges': CategoryCharges,
            'Slug': Slugs
        };

        $.ajax({
            type: "POST",
            url: "/Categories/Update",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                //alert("Submit");
                $("#editmodal").modal("hide");
                $("#CategoryNameEdit").val('');
                $("#CategoryChargesEdit").val('');
                toastr.success("Category UPDATED.", "Success");
                BindGetAllUsers()
            }
        });
    }
})



//function bindSaveButton() {
//    $("#btnSave").click(function () {        
//        var CategoryName = $("#CategoryName").val();
//        var CategoryCharges = $("#CategoryCharges").val();
//        var Slugs = $("#SlugsAdd").val();
//        var record = {
//            'CategoryName': CategoryName,
//            'Charges': CategoryCharges,
//             'Slug':Slugs
//        };
//        var checkValid = validate_CategoriesFORM();
//        if (checkValid == false) {
//            return false;     
//        } else {            
//            $.ajax({
//                type: "POST",
//                url: "/Categories/Save",
//                contentType: "application/json; charset=utf-8",
//                dataType: 'json',
//                data: JSON.stringify(record),
//                success: function (result) {
//                    //alert("Submit");
//                    $("#CategoryName").val('');
//                    $("#CategoryCharges").val('');
//                    BindGetAllUsers()
//                }
//            });
//        }
//    })
////}
////function bindUpdateButton() {
//    $("#btnUpdate").click(function () {    
//        var CategoryName = $("#CategoryNameEdit").val();
//        var CategoryCharges = $("#CategoryChargesEdit").val();
//        var Slugs = $("#SlugsEdit").val();
//        var record = {
//            'Id': ID,
//            'CategoryName': CategoryName,
//            'Charges': CategoryCharges,
//             'Slug':Slugs
//        };
//        var checkValid = validate_CategoriesFORMEdit();
//        if (checkValid == false) {
//            return false;
//        } else {
//            $.ajax({
//                type: "POST",
//                url: "/Categories/Update",
//                contentType: "application/json; charset=utf-8",
//                dataType: 'json',
//                data: JSON.stringify(record),
//                success: function (result) {
//                    //alert("Submit");
//                    $("#CategoryNameEdit").val('');
//                    $("#CategoryChargesEdit").val('');
//                    BindGetAllUsers()
//                }
//            });
//        }
//    });
//}

function Edit(id) {

    ID = id;
    var url = '/Categories/Edit?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {

            var json = JSON.parse(result);
            var CategoryName = json.CategoryName;
            var CategoryCharges = json.Charges;
            var Slug = json.Slug;
            $("#CategoryNameEdit").val(CategoryName);
            $("#CategoryChargesEdit").val(CategoryCharges);
            $("#SlugsEdit").val(Slug);


        }
    });
}
$('.loader').css("display", "flex");
function BindGetAllUsers() {
    var html = null;
    $.ajax({
        type: "POST",
        url: "/Categories/GetCategory",
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
                    { "data": "CategoryName" },
                    { "data": "Charges" },
                    //  { "data": "Slug" },
                    {
                        "data": null,
                        "render": function (result, type, row) {

                            return '<a href="javascript:;" data-toggle="modal" data-target="#editmodal"><i class="fa fa-edit" onclick = "Edit(' + result.Id + ')"></i></a>' +

                                '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-times" onclick = "GetId(' + result.Id + ')"></i></a>'
                            //'<a href="javascript:;" data-toggle="modal" data-target="#addmodal"><i class="fa fa-check"></i></a>';


                            //'<a href="/Ticket/Detail/' + result.Id + '"><i class="fa fa-edit"></i></a>' +
                            //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-times"></i></a>' +
                            //'<a onclick=DeleteData(' + result.Id + ');><i class="fa fa-check"></i></a>';//row.ClientId
                            //// +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
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
            //$('#tbody').html('');
            //$(json).each(function (index, value) {
            //    var Id = json[index].Id;
            //    var CategoryName = json[index].CategoryName;
            //    var CategoryCharges = json[index].Charges;
            //    
            //    html = '<tr class="tbody-light">' +
            //                 '<td scope="row">' + Id + '</td>' +
            //                 '<td>' + CategoryName + '</td>' +
            //                 '<td>' + CategoryCharges + '</td>' +
            //                 '<td class="fa_table">'+
            //                 //<i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i>'+
            //                        '<a href="javascript:;" data-toggle="modal" data-target="#editmodal"><i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i></a>' +
            //                        //data-target="#deletemodal"
            //                        '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-times" onclick = "GetId(' + Id + ')"></i></a>' +
            //                        '<a href="javascript:;" data-toggle="modal" data-target="#addmodal"><i class="fa fa-check"></i></a>' +
            //                 '</td>' +
            //      '</tr>';
            //    $('#tbody').append(html);
            //});

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


    var url = '/Categories/Delete?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {
            $("#deletemodal").modal("hide");
            toastr.success("Category DELETED.", "Success");
            BindGetAllUsers();



        }
    });
}





$("#addmodal").on('hidden.bs.modal', function () {
    $('#cat-form').parsley().destroy();
});
$("#editmodal").on('hidden.bs.modal', function () {
    $('#catup-form').parsley().destroy();
});

function init(jQuery) {

    $('#catup-form').parsley();
    $('#cat-form').parsley();
    var ProId = 0;
    BindGetAllUsers();



}

//$(document).ready(function (init) {



//});



$(document).ready(init);








//function Edit(id) {
//    
//    ID = id;
//    var url = '/Categories/Edit?id=' + id;
//    $.ajax({
//        type: "POST",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{ id: "' + id + '" }',
//        success: function (result) {
//            
//            var json = JSON.parse(result);
//            var CategoryName = json.CategoryName;
//            $("#CategoryNameEdit").val(CategoryName);
//        }
//    });
//}


