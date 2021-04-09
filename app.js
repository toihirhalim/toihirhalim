console.log("page loaded !");


$(".header").click(function () {

    $header = $(this);
    $content = $header.next();
    $content.slideToggle(500, function () {
        $header.children().first().children().attr("src", function () {
            return $content.is(":visible") ? "images/collapse.png" : "images/expand.png";
        });
    });

});
