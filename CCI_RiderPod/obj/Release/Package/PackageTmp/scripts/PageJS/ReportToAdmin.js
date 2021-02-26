function GetAllReportHomeowner() {
    
    var html = null;
    $.ajax({
        type: "POST",
        url: "/ReportToAdmin/GetAllReportHomeowner",
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
                    { "data": "ContractorName" },
                    { "data": "Subject" },
                    { "data": "Description" },

                    //{
                    //    "data": null,
                    //    "render": function (result, type, row) {
                    //        return '<a href="javascript:;" data-toggle="modal" data-target="#editmodal"><i class="fa fa-edit" onclick = "Edit(' + result.Id + ')"></i></a>' +
                    //            '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-times" onclick = "GetId(' + result.Id + ')"></i></a>'
                    //        //'<a href="javascript:;" data-toggle="modal" data-target="#addmodal"><i class="fa fa-check"></i></a>';
                    //    }
                   // },

                ]
        })

            }


        
    });

}




function GetAllReportContractor() {

    var html = null;
    $.ajax({
        type: "POST",
        url: "/ReportToAdmin/GetAllReportContractor",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        success: function (result) {
            $('.loader').css("display", "none");
            $("#example1").dataTable().fnDestroy();
            var json = JSON.parse(result);
            //var Id = json[index].Id;
            var editor = $('#example1').DataTable({
                data: json,
                "order": [[0, "desc"]],
                columns: [
                    { "data": "HomeOwnerName" },
                    { "data": "Subject" },
                    { "data": "Description" },

                    //{
                    //    "data": null,
                    //    "render": function (result, type, row) {
                    //        return '<a href="javascript:;" data-toggle="modal" data-target="#editmodal"><i class="fa fa-edit" onclick = "Edit(' + result.Id + ')"></i></a>' +
                    //            '<a href="javascript:;" data-toggle="modal" ><i class="fa fa-times" onclick = "GetId(' + result.Id + ')"></i></a>'
                    //        //'<a href="javascript:;" data-toggle="modal" data-target="#addmodal"><i class="fa fa-check"></i></a>';
                    //    }
                    // },

                ]
            })

        }



    });

}





function init(jQuery) {
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
    GetAllReportHomeowner();
    GetAllReportContractor();

}

$(document).ready(init);

