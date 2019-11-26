$(document).ready(function () {

    /*Menu*/
    $(".menu").click(function () {
        var menuitems = $(".navigationRight > button").length;
        $(this).toggleClass("open");
        if ($(".navigation").hasClass("open")) {
            
            $(".navigation").toggleClass("open");
            $(".navigation").css("transition", "all 0.2s ease-in 0."+(menuitems*2)+"s ");
            $(".navigation .navigationLeft").css("transition", "all 0."+menuitems+"s ease-in 0s");
            for (var i = 1; i <= menuitems; i++) {
                $(".navigation .navigationRight .navigator:nth-child(" + i + ")").css("transition", "all .1s ease-in 0." + i + "s");
                console.log(i);
            }

        } else {
            $(".navigation").toggleClass("open");
            $(".navigation").css("transition", "all 0.2s ease-in 0s ");
            $(".navigation .navigationLeft").css("transition", "all 0."+menuitems+"s ease-in 0.2s");
            for (var i = 1; i <= menuitems; i++) {
                $(".navigation .navigationRight .navigator:nth-child(" + i + ")").css("transition", "all 0.2s ease-in 0." + (i + 2) + "s");
            }
        }

    })


    $(".mainContainer").load("./page/home.html");

    $(".navigator").click(function (e) {
        var pagelink = $(this).attr('id');
        $(".pagetransition").show();
        $(".navigator").removeClass("active");
        $(this).addClass("active");
        setTimeout(function () {
            $(".mainContainer").load("./page/" + pagelink + ".html");
            window.location.href = "#" + pagelink + '.html';
            $(".navigation").toggleClass("open");
            $(".menu").toggleClass("open");
        }, 1100);
        setTimeout(function () {
            $(".pagetransition").hide();
        }, 2000)

    });


});
