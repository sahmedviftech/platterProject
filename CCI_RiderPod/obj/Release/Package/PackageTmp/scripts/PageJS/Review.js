function RedirectToContractor(id) {

   
    id;
    var url = '/Contractor/ContractorDetail?id=' + id;


    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',

        success: function (result) {


        }
    });
}




function setPagination(currentPage, count) {

    $('.loader').css("display", "none");      
    var html = null;
    var PageCount = 1;
    var ItemsCount = 0;
    //$('.custom-pagi').html('');
    //var customePagination = $('.custom-pagi');
    //ItemsCount = $('#itemcount').text();
    //$(customePagination).append('<li class="page-item "><a href="javascript:;" class="page-link" tabindex="-1">Previous</a></li>');

    //var CustomePage = 2;
    //if (ItemsCount <= 1) {
    //    $(customePagination).append('<li class="page-item active"><a href="javascript:;" class="page-link">1</a></li>');

    //    $(customePagination).append('<li class="page-item nxt-pagi"><a href="#" class="page-link">Next Page</a></li>');

    //}
    //else {


    //    PageCount = ItemsCount / 10;
    //    PageCount = parseInt(PageCount);

    //    for (var i = 1; i <= PageCount ; i++) {

    //        $(customePagination).append('<li id="page' + i + '" class="page-item"><a href="javascript:;" class="page-link">' + i + '</a></li>')
    //        $('#page' + currentPage + '').addClass('active');

    //    }
    //    $(customePagination).append('<li class="page-item nxt-pagi"><a href="javascript:;" class="page-link">Next Page</a></li>');
    //}


    //$(document.body).on('click', '.page-item', function (e) {
    //    count = 2;

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
    //    //     setPagination(currentPage, count)
    //    //alert(currentPage);
    //    window.location.href = '/Review/Index?PageIndex=' + currentPage + '';

    //});



    // Load More Function
    $(".testi-block").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 4).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });


    // turn the element to select2 select style
    $('#selectHightLow').select2({
    }).on('change', function (e) {
        var data;//= false;
        data = $("#selectHightLow option:selected").val();

        window.location.href = '/Review/Index?ishighest=' + data;

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
            if (json.LoginStatus == false && json.AccountTypeID == 1) {
                $("#VideomodalPro").modal("show");
                $.ajax({
                    type: "POST",
                    url: "/Project/UpdateLoginStatus",
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    data: '{}',
                    success: function (result) {
                        // alert("Success");
                    }
                });
            }

            //$("#myModal").modal("hide");
        }
    });
}




function init(jQuery) {
    setPagination(1, 2);
    ShowVideoModalLogin();
    $('.datepicker').datepicker({
        uiLibrary: 'bootstrap4'
    });
    //$('body').click(function (e) {
    //    $('.embed-responsive').children('iframe').attr('src', 'http://portal.homii.ca/Content/assets/videos/HOMEOWNER%20FINAL.mp4');
    //});
    // Load More Function
    $(".testi-block").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 4).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
}




$(document).ready(init);