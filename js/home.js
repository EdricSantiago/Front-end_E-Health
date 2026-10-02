$(function () {
    var jam = new Date().getHours();
    var sapaan = "Selamat Malam";
    if (jam >= 5 && jam < 11) sapaan = "Selamat Pagi";
    else if (jam >= 11 && jam < 15) sapaan = "Selamat Siang";
    else if (jam >= 15 && jam < 18) sapaan = "Selamat Sore";
    $("#hd-greeting").text(sapaan);

    var slide = 0;
    var $slide = $(".hd-banner-slide");
    var $dot = $(".hd-dot");

    function tampilkan(i) {
        $slide.removeClass("active");
        $dot.removeClass("active");
        $slide.eq(i).addClass("active");
        $dot.eq(i).addClass("active");
        slide = i;
    }

    var timer = setInterval(function () {
        tampilkan((slide + 1) % $slide.length);
    }, 4000);

    $dot.on("click", function () {
        clearInterval(timer);
        tampilkan($(this).index());
    });

    $("#search-input").on("keyup", function () {
        var kata = $(this).val().toLowerCase();
        $(".hd-svc, .hd-doc-card, .hd-article").each(function () {
            var cocok = $(this).text().toLowerCase().indexOf(kata) > -1;
            $(this).toggle(cocok);
        });
    });
});