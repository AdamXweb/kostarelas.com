(function ($) {

    $('#welcome').hide();

    var now = new Date();
    var hrs = now.getHours();
    var msg = "Hello";

    if (hrs > 0) msg = "It's rather late";
    if (hrs > 5) msg = "Sun is coming up soon";
    if (hrs > 7) msg = "It's rather early!";
    if (hrs > 8) msg = "Morning!";
    if (hrs > 12) msg = "Ready for lunch?";
    if (hrs > 13) msg = "Good Afternoon";
    if (hrs > 17) msg = "Good Evening";
    if (hrs > 22) msg = "Time for bed?";

    $(document).ready(function () {

        // Display - Time sensitive greeting

        $('#welcome').text(msg).fadeTo(100, 1);


    });
})(jQuery);
$("#pro").click(function () {
    $('#projects').toggleClass('flash-active');
});