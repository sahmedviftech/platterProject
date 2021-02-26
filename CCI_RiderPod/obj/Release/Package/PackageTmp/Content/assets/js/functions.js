// JavaScript Document
$(document).ready(function(argument) {
	// Dropdown Function
	$('.select2').select2();	

	// Read More Function
    var showChar = 195;  
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Read less";
    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            // var html = c + '<p class="moreellipses"></p><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });    


});
$(document).ready(function() { 

    // Datepicker Function
    //$('.datepicker').each(function() {
    //$(this).datepicker({
    //    uiLibrary: 'bootstrap4'
    //});
    $("#shareIcons").jsSocials({

        url: "https://portal.homii.ca/",
        //text: "Google Search Page",
        showLabel: false,
        showCount: "inside",
        countUrl: "url",
        shares: ["twitter", "facebook", "linkedin"]
    });
    var dateToday = new Date();
    $('.datepicker').each(function () {
        $(this).datepicker({
            uiLibrary: 'bootstrap4',
            minDate: dateToday
        });
        var configFontAwesome = {
     custom: {
         families: ['fontawesome'],
         urls: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css']
         },
         fontactive: function () {
             $('.rateit').rateit();
         }
     };
    WebFont.load(configFontAwesome);

}); 
});     
