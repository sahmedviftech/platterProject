function validate_CitiesFORM() {
    var isValid = true;
    if ($('#ProvinceId').val() == "0") {
        $('#ProvinceId').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#ProvinceId').css('border', 'none');
    }

    if ($("#CityName").val() == "") {
        $('#CityName').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CityName').css('border', 'none');
    }

    return isValid;
}

function ClearBorder() {

    if ($('#ProvinceId').val() != "0") {
        $('#ProvinceId').css('border', 'none');
    }

    if ($("#CityName").val() != "") {
        $('#CityName').css('border', 'none');

    }
}



function validate_CitiesFORMEdit() {
    var isValid = true;
    if ($('#ProvinceIdEdit').val() == "0") {
        $('#ProvinceIdEdit').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#ProvinceIdEdit').css('border', 'none');
    }

    if ($("#CityNameEdit").val() == "") {
        $('#CityNameEdit').css('border', '1px solid Red');
        isValid = false;
    }
    else {
        $('#CityNameEdit').css('border', 'none');
    }

    return isValid;
}

function ClearBorderEdit() {

    if ($('#ProvinceIdEdit').val() != "0") {
        $('#ProvinceIdEdit').css('border', 'none');
    }



    if ($("#CityNameEdit").val() != "") {
        $('#CityNameEdit').css('border', 'none');

    }
}



$('#city-form').on('submit', function (event) {

    event.preventDefault();
    if ($('#city-form').parsley().isValid()) {
        //function bindSaveButton() {
        // $("#btnSave").click(function () {

        var CityName = $("#CityName").val();
        var Province = $("#ProvinceId").val();
        var CityCharges = $("#CityCharges").val();
        var Slugs = $("#SlugsAdd").val();
        var record = {
            'CityName': CityName,
            'ProvinceId': Province,
            'Charges': CityCharges,
            'Slug': Slugs
        };

        $.ajax({
            type: "POST",
            url: "/Cities/Save",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                if (result == "Already Exist") {

                    toastr.error("City Already Exist !", "Waring");
                    BindGetAllCities()
                } else {
                    $('#addmodal').modal('hide');
                    $("#CityName").val('');
                    $("#CityCharges").val('');
                    toastr.success("City ADDED.", "Success");
                    BindGetAllCities()
                }
            }
        });
    }

});


//}

//function bindUpdateButton() {

$('#cityupdate-form').on('submit', function (event) {

    event.preventDefault();
    if ($('#cityupdate-form').parsley().isValid()) {
        //$("#btnUpdate").click(function () {



        var CityName = $("#CityNameEdit").val();
        var Province = $("#ProvinceIdEdit").val();
        var CityCharges = $("#CityChargesEdit").val();
        var Slugs = $("#SlugsEdit").val();
        var record = {
            'Id': ID,
            'CityName': CityName,
            'ProvinceId': Province,
            'Charges': CityCharges,
            'Slug': Slugs
        };
        //var checkValid = validate_CitiesFORMEdit();
        //if (checkValid == false) {
        //    return false;
        //}
        //else {
        $.ajax({
            type: "POST",
            url: "/Cities/Update",
            async: false,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                // alert("Submit");
                $('#editmodal').modal('hide');
                $("#CityNameEdit").val('');
                $("#ProvinceIdEdit").val('');
                $("#CityChargesEdit").val('');
                toastr.success("City UPDATED.", "Success");
                BindGetAllCities();
            }
        });
    }

});


//function bindSaveButton() {
//    $("#btnSave").click(function () {

//        var CityName = $("#CityName").val();
//        var Province = $("#ProvinceId").val();
//        var Slugs = $("#SlugsAdd").val();
//        var record = {
//            'CityName': CityName,
//            'ProvinceId': Province,
//            'Slug':Slugs
//        };
//        var checkValid = validate_CitiesFORM();
//        if (checkValid == false) {
//            return false;
//        }
//        else {
//            $.ajax({
//                type: "POST",
//                url: "/Cities/Save",
//                contentType: "application/json; charset=utf-8",
//                dataType: 'json',
//                data: JSON.stringify(record),
//                success: function (result) {
//                    //$("#example").dataTable().fndestroy();
//                    // alert("Submit");
//                    $("#CityName").val('');
//                    $("#ProvinceId").val('');
//                    BindGetAllCities()
//                }
//            });
//        }
//    })


////}

////function bindUpdateButton() {


//    $("#btnUpdate").click(function () {



//        var CityName = $("#CityNameEdit").val();
//        var Province = $("#ProvinceIdEdit").val();
//        var Slugs = $("#SlugsEdit").val();
//        var record = {
//            'Id': ID,
//            'CityName': CityName,
//            'ProvinceId': Province,
//             'Slug':Slugs
//        };
//        var checkValid = validate_CitiesFORMEdit();
//        if (checkValid == false) {
//            return false;
//        }
//        else {
//            $.ajax({
//                type: "POST",
//                url: "/Cities/Update",
//                async: false,
//                contentType: "application/json; charset=utf-8",
//                dataType: 'json',
//                data: JSON.stringify(record),
//                success: function (result) {
//                    // alert("Submit");
//                    $("#CityNameEdit").val('');
//                    $("#ProvinceIdEdit").val('');
//                    BindGetAllCities();
//                }
//            });
//        }
//    });


//}
$('.loader').css("display", "flex");
function BindGetAllCities() {

    var html = null;
    $.ajax({
        type: "POST",
        url: "/Cities/GetCity",
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
                    { "data": "CityName" },
                    { "data": "Charges" },
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











            //var json = JSON.parse(result);
            //$('#tbody').html('');
            //$(json).each(function (index, value) {
            //    var Id = json[index].Id;
            //    var CityName = json[index].CityName;
            //    var ProvinceId = json[index].ProvinceId;
            //    

            //    html = '<tr class="tbody-light">' +
            //               '<td scope="row">' + Id + '</td>' +
            //               '<td>' + CityName + '</td>' +
            //               '<td>' + ProvinceId + '</td>' +
            //              // '<td class="fa_table"><i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i></td>' +
            //              '<td class="fa_table">' +
            //             //<i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i>'+
            //                    '<a href="javascript:;" data-toggle="modal" data-target="#editmodal"><i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i></a>' +
            //                    //data-target="#deletemodal"
            //                    '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-times" onclick = "GetId(' + Id + ')"></i></a>' +
            //                    '<a href="javascript:;" data-toggle="modal" data-target="#addmodal"><i class="fa fa-check"></i></a>' +


            //             '</td>' +
            //    '</tr>';

            //    $('#tbody').append(html);
            //});
        }
    });


}
function Edit(id) {

    ID = id;
    var url = '/Cities/Edit?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {

            var json = JSON.parse(result);
            var CityName = json.CityName;
            var id = json.ProvinceId

            proIDNAme = "#ProvinceIdEdit";
            BindGetProvinceRec(proIDNAme);


            $("#CityNameEdit").val(CityName);
            $("#ProvinceIdEdit").val(id);



        }

    });

}

function BindGetProvinceRec(proIDNAme) {
    $(proIDNAme).html('');
    $.ajax({
        type: "POST",
        url: "/Cities/GetProvince",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        // data: '{  id: "' + ProId + '" }',
        data: '{  }',
        success: function (result) {

            var json = JSON.parse(result);
            var html = "";
            $(json).each(function (index, value) {

                var Id = json[index].Id;
                ProvinceName = json[index].ProvinceName;
                html += "<option value=" + Id + ">" + ProvinceName + "</option>";
            });
            $(proIDNAme).append(html);

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


    var url = '/Cities/Delete?id=' + id;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{ id: "' + id + '" }',
        success: function (result) {
            $("#deletemodal").modal("hide");
            toastr.success("City DELETED.", "Success");
            BindGetAllCities();



        }
    });
}
$("#addmodal").on('hidden.bs.modal', function () {
    $('#city-form').parsley().destroy();
});
$("#editmodal").on('hidden.bs.modal', function () {
    $('#cityupdate-form').parsley().destroy();
});

function init(jQuery) {
    $('#cityupdate-form').parsley();
    $('#city-form').parsley();
    var ProId = 0;
    var ProvinceName = "";
    var proIDNAme = "#ProvinceId";

    BindGetAllCities();
    BindGetProvinceRec(proIDNAme);

}



$(document).ready(init);







