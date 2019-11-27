/*Load home page*/
$(".mainContainer").load("./page/home.html");

$(document).ready(function () {
    /*Check local storage for theme*/
    var themeset = localStorage.getItem("theme");
    $("body").addClass(themeset);

    /*Menu*/
    $(".menu").click(function () {
        var menuitems = $(".navigationRight > button").length;
        $(this).toggleClass("open");
        if ($(".navigation").hasClass("open")) {

            $(".navigation").toggleClass("open");
            $(".navigation").css("transition", "all 0.2s ease-in 0." + (menuitems * 2) + "s ");
            $(".navigation .navigationLeft").css("transition", "all 0." + menuitems + "s ease-in 0s");
            for (var i = 1; i <= menuitems; i++) {
                $(".navigation .navigationRight .navigator:nth-child(" + i + ")").css("transition", "all .1s ease-in 0." + i + "s");
            }

        } else {
            $(".navigation").toggleClass("open");
            $(".navigation").css("transition", "all 0.2s ease-in 0s ");
            $(".navigation .navigationLeft").css("transition", "all 0." + menuitems + "s ease-in 0.2s");
            for (var i = 1; i <= menuitems; i++) {
                $(".navigation .navigationRight .navigator:nth-child(" + i + ")").css("transition", "all 0.2s ease-in 0." + (i + 2) + "s");
            }
        }

    })

    /*pagenavigation*/
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

    /*Themetoggle*/
    $(".themeToggler").click(function () {
        $(this).css("box-shadow", "0px 0px 0 150vh #000, 0 0 0vw 150vw #000");

        setTimeout(function () {
            $(".themeToggler").css("box-shadow", "0px 0px 0 0vh #000");
            $("body").toggleClass("dark");
            if ($("body").hasClass("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", " ");
            }
        }, 500)





    })
    
});
