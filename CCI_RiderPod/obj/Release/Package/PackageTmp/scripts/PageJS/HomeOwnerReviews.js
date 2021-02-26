function validate_OwnerReviews() {
    var isValid = true;

    if ($('#Title').parsley().validate() !== true) isValid = false;
    if ($('#Description').parsley().validate() !== true) isValid = false;
    if ($('#QualityOfWork').parsley().validate() !== true) isValid = false;
    if ($('#Timeliness').parsley().validate() !== true) isValid = false;
    if ($('#Communication').parsley().validate() !== true) isValid = false;
    if ($('#StayedInBudget').parsley().validate() !== true) isValid = false;
    if ($('#Cleanliness').parsley().validate() !== true) isValid = false;
    if ($('#Courteous').parsley().validate() !== true) isValid = false;





    return isValid;
}

function ClearBorder() {

    if ($("#Title").val() != "") {
        $('#Title').css('border', 'none');

    }

    if ($("#Description").val() != "") {
        $('#Description').css('border', 'none');

    }
    if ($("#QualityOfWork").val() != "") {
        $('#QualityOfWork').css('border', 'none');

    }
    if ($("#Timeliness").val() != "") {
        $('#Timeliness').css('border', 'none');

    }
    if ($("#StayedInBudget").val() != "") {
        $('#StayedInBudget').css('border', 'none');

    }
    if ($("#Communication").val() != "") {
        $('#Communication').css('border', 'none');

    }
    if ($("#Cleanliness").val() != "") {
        $('#Cleanliness').css('border', 'none');

    }
    if ($("#Courteous").val() != "") {
        $('#Courteous').css('border', 'none');

    }

}

$('.loader').css("display", "flex");
//function BindGetHomeOwnerReviewsList(currentPage, count) {
function BindGetHomeOwnerReviewsList() {
    var html = null;
    var PageCount = 1;
    var ItemsCount = 0;
    $('.custom-pagi').html('');
    var customePagination = $('.custom-pagi');

    //currentPage = JSON.parse(currentPage);
    //count = JSON.parse(count);
    $.ajax({
        type: "POST",
        url: "/HomeOwnerReviews/GetHomeOwnerReviewsList",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{}',
        //data: '{PageIndex: ' + currentPage + ', PageCount: ' + count + '}',
        success: function (result) {
            $('.loader').css("display", "none");
            //$(customePagination).append('<li class="page-item "><a href="javascript:;" class="page-link" tabindex="-1">Previous</a></li>');

            //var json = JSON.parse(result);
            ////var Id = json[index].Id;
            //var editor = $('#example').DataTable({
            //    data: json,
            //    columns: [
            //    { "data": "HomeOwnerName" },
            //    { "data": "ContractorName" },
            //   // { "data": "Rating" },
            //    {
            //        "data": null,
            //        "render": function (result, type, row) {
            //            
            //            return '<td class="fa_table"> <div id="input1" class="rateit" data-rateit-value="' + result.Rating + '" data-rateit-step="1"></div> '+result.Rating+'</td>';
            //            '<td class="fa_table"><a onclick = "Edit(' + result.ReviewId + ')"  data-toggle="modal" data-target="#editmodal"><span>Edit <i class="fa fa-edit"></i></a></span></td>';
            //            //'<td class="fa_table"><a onclick = "Edit(' + ReviewId + ')"  data-toggle="modal" data-target="#editmodal"><span>Edit <i class="fa fa-edit"></i></a></span></td>';
            //            // +'<a onclick=OpenChat(' + row.ClientId + ');><i class="icn icon-trash"></i></a>';
            //        }
            //    },
            //    ]
            //});
            //var Id = json[index].Id;
            //var CityName = json[index].CityName;
            //var ProvinceId = json[index].ProvinceId;
            //ItemsCount = json[index].Items;
            //
            //html = '<tr class="tbody-light">' +
            //'<td scope="row">' + Id + '</td>' +
            //'<td>' + CityName + '</td>' +
            //'<td>' + ProvinceId + '</td>' +
            //// '<td class="fa_table"><i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i></td>' +
            //'<td class="fa_table">' +
            ////<i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i><i class="fa fa-times"></i><i class="fa fa-check"></i>'+
            //'<a href="javascript:;" data-toggle="modal" data-target="#editmodal"><i class="fa fa-edit" onclick = "Edit(' + Id + ')"></i></a>' +
            ////data-target="#deletemodal"
            //'<a href="javascript:;" data-toggle="modal" ><i class="fa fa-times" onclick = "GetId(' + Id + ')"></i></a>' +
            //'<a href="javascript:;" data-toggle="modal" data-target="#addmodal"><i class="fa fa-check"></i></a>' +
            //'</td>' +
            //'</tr>';

            $("#example").dataTable().fnDestroy();
            var json = JSON.parse(result);
            $('#tbody').html('');
            $(json).each(function (index, value) {
                var ReviewId = json[index].ReviewId;
                var HomeOwnerName = json[index].HomeOwnerName;
                var ContractorName = json[index].ContractorName;
                var QualityOfWork = json[index].QualityOfWork;
                var Timeliness = json[index].Timeliness;
                var StayedInBudget = json[index].StayedInBudget;
                var Communication = json[index].Communication;
                var Cleanliness = json[index].Cleanliness;
                var Courteous = json[index].Courteous;
                var Title = json[index].Title
                var Description = json[index].Description;
                var Rating = json[index].Rating;
                var ItemsCount = json[index].ItemsCount;

                html = '<tr class="tbody-light">' +
                    '<td scope="row">' + HomeOwnerName + '</td>' +
                    '<td>' + ContractorName + '</td>' +
                    '<td> <div id="input1" class="rateit" data-rateit-value="' + Rating + '"  data-rateit-mode="font" data-rateit-readonly="true" data-rateit-step="1"></div> ' + Rating + '' +
                    //'<span class="jstars" data-value="' + Rating + '" data-total-stars="5" data-color="#84ad2b" data-empty-color="#d3dfb7" data-size="20px"></span>'+
                    //'<span class="str-rate">' + Rating + '</span>'+
                    '</td>' +
                    '<td class="fa_table"><a onclick = "Edit(' + ReviewId + ')"  data-toggle="modal" data-target="#editmodal"><i class="fa fa-edit"></i></a></td>' + //Edit
                    '</tr>';


                $('#tbody').append(html);
            });
            $("#example").dataTable({
                "language": {
                    "paginate": {
                        "previous": "Previous page",
                        "next": "Next page"
                    }
                }
            });

            //var CustomePage = 2;
            //if (ItemsCount <= 25)
            //{
            //    $(customePagination).append('<li class="page-item active"><a href="javascript:;" class="page-link">1</a></li>');                
            //    $(customePagination).append('<li class="page-item nxt-pagi"><a href="#" class="page-link">Next Page</a></li>');
            //} else
            //{
            //    PageCount = ItemsCount / 25;
            //    PageCount = parseInt(PageCount);
            //    for (var i = 1; i <= PageCount + 1; i++)
            //    {
            //        $(customePagination).append('<li id="page' + i + '" class="page-item"><a href="javascript:;" class="page-link">' + i + '</a></li>')
            //        $('#page' + currentPage + '').addClass('active');
            //    }
            //    $(customePagination).append('<li class="page-item nxt-pagi"><a href="javascript:;" class="page-link">Next Page</a></li>');
            //}
            //$('.page-item').on('click', function () {                
            //    count = 25;//$('#example').children()[1].childElementCount;
            //    //$('.page-item li.active').removeClass('active');
            //    //$(this).addClass('active')
            //    if ($(this).text() == "Next Page") {
            //        if (PageCount == 1) {
            //            return
            //        }
            //        currentPage = $(this).text() == "Next Page" ? parseInt($('.active').text()) + 1 > PageCount + 1 ? PageCount + 1 : parseInt($('.active').text()) + 1 : $(this).text();
            //        if (parseInt($('.active').text()) == currentPage) {
            //            return
            //        }
            //    } else if ($(this).text() == "Previous") {
            //        currentPage = $(this).text() == "Previous" ? parseInt($('.active').text()) == 1 ? parseInt($('.active').text()) : parseInt($('.active').text()) - 1 : $(this).text();
            //        if (parseInt($('.active').text()) == currentPage) {
            //            return
            //        }
            //    } else {
            //        currentPage = parseInt($(this).text());
            //    }
            //    //BindGetAllCities(currentPage, count);
            //   BindGetHomeOwnerReviewsList(currentPage, count)
            //})


        }
    });
}


//function BindGetAllCities(currentPage, count) {
//     
//    var html = null;
//    $.ajax({
//        type: "POST",
//        url: "/Cities/GetCity",
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        data: '{PageIndex: ' + currentPage + ', PageCount: ' + count + '}',
//        success: function (result) {
//            
//            $(customePagination).append('<li class="page-item "><a href="javascript:;" class="page-link" tabindex="-1">Previous</a></li>');      
//        }
//    });
//}






$("#Updatebtn").click(function () {


    var ReviewId = $("#ReviewId").val();
    //var HomeownerId =       $("#HomeownerId").val();
    //var ContractorId =      $("#ContractorId").val();
    var QualityOfWork = $("#QualityOfWork").val();
    var Timeliness = $("#Timeliness").val();
    var StayedInBudget = $("#StayedInBudget").val();
    var Communication = $("#Communication").val();
    var Cleanliness = $("#Cleanliness").val();
    var Courteous = $("#Courteous").val();
    var Title = $("#Title").val();
    var Description = $("#Description").val();

    var record = {
        'ReviewId': ReviewId,
        //'HomeownerId'   : HomeownerId,
        //'ContractorId': ContractorId,
        'QualityOfWork': QualityOfWork,
        'Timeliness': Timeliness,
        'StayedInBudget': StayedInBudget,
        'Communication': Communication,
        'Cleanliness': Cleanliness,
        'Courteous': Courteous,
        'Title': Title,
        'Description': Description,

    };
    var checkValid = validate_OwnerReviews();
    if (checkValid == false) {
        return false;
    }
    else {
        $.ajax({
            type: "POST",
            url: "/HomeOwnerReviews/Update",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            success: function (result) {
                //alert("Submit");
                var json = JSON.parse(result);
                toastr.success("Review UPDATED", "Success");

                //BindGetHomeOwnerReviewsList(1,25);
                $("#editmodal").modal("hide");

                BindGetHomeOwnerReviewsList();
            }
        });
    }
});





function Edit(ReviewId) {


    var url = '/HomeOwnerReviews/Edit?ReviewId=' + ReviewId;
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (result) {

            var json = JSON.parse(result);

            var ReviewId = json.ReviewId;
            var HomeOwnerId = json.HomeownerId;
            var HomeOwnerName = json.HomeOwnerName;
            var ContractorId = json.ContractorId;
            var ContractorName = json.ContractorName;
            var QualityOfWork = json.QualityOfWork;
            var Timeliness = json.Timeliness;
            var StayedInBudget = json.StayedInBudget;
            var Communication = json.Communication;
            var Cleanliness = json.Cleanliness;
            var Courteous = json.Courteous;
            var Title = json.Title;
            var Description = json.Description;

            $("#ReviewId").val(ReviewId);
            $("#HomeOwnerName").val(HomeOwnerName);
            $("#ContractorName").val(ContractorName);
            $("#QualityOfWork").val(QualityOfWork);
            $("#Timeliness").val(Timeliness);
            $("#StayedInBudget").val(StayedInBudget);
            $("#Communication").val(Communication);
            $("#Cleanliness").val(Cleanliness);
            $("#Courteous").val(Courteous);

            //$("#reviewrating").val(Courteous);
            $("#Title").val(Title);
            $("#Description").val(Description);

        }

    });

}


function init(jQuery) {
    //BindGetHomeOwnerReviewsList(1, 25);
    BindGetHomeOwnerReviewsList();



}


$(document).ready(init);

