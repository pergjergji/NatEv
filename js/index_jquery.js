$(document).ready(function (e) {

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true
    });

    $('#rightSideHot').click(function (e) {
        $('#rightSideHot').hide();
        $('#rightSideCurrent').hide();
        $('#cbp-spmenu-s2').addClass('cbp-spmenu-open');
        $("#tabDy").removeClass("activeTab");
        $("#tabNi").addClass("activeTab");
        $("#fire").addClass("activeFire");
        $("#fire").removeClass("passiveFire");
        $("#circle").removeClass("activeCircle");
        $("#circle").addClass("passiveCircle");
        $("#tab2").hide();
        $("#tab1").show(100);
    });

    $('#rightSideCurrent').click(function (e) {
        $('#rightSideHot').hide();
        $('#rightSideCurrent').hide();
        $('#cbp-spmenu-s2').addClass('cbp-spmenu-open');
        $("#tabNi").removeClass("activeTab");
        $("#tabDy").addClass("activeTab");
        $("#fire").removeClass("activeFire");
        $("#fire").addClass("passiveFire");
        $("#circle").addClass("activeCircle");
        $("#circle").removeClass("passiveCircle");
        $("#tab2").show(100);
        $("#tab1").hide();
    });

    $(document).on("mousemove", function (event) {
        if (event.pageX / $(window).width() * 100 < 82) {
            $('#cbp-spmenu-s2').removeClass('cbp-spmenu-open');
            $('#rightSideHot').show(100);
            $('#rightSideCurrent').show(100);
        }
    });

    $("#tabNi").click(function () {
        $("#tabDy").removeClass("activeTab");
        $("#tabNi").addClass("activeTab");
        $("#fire").addClass("activeFire");
        $("#fire").removeClass("passiveFire");
        $("#circle").removeClass("activeCircle");
        $("#circle").addClass("passiveCircle");
        $("#tab2").hide();
        $("#tab1").show(100);
    });

    $("#tabDy").click(function () {
        $("#tabNi").removeClass("activeTab");
        $("#tabDy").addClass("activeTab");
        $("#fire").removeClass("activeFire");
        $("#fire").addClass("passiveFire");
        $("#circle").addClass("activeCircle");
        $("#circle").removeClass("passiveCircle");
        $("#tab2").show(100);
        $("#tab1").hide();
    });


    $("body").click(function (e) {
        if (e.target.id == "#blacken" || $(e.target).parents("#blacken").size()) {
            alert('tits');
        } else {
            $('#blacken').css('display', 'none');
        }
        if (e.target.id == "#nasaBlacken" || $(e.target).parents("#nasaBlacken").size()) {} else {
            $('#nasaBlacken').css('display', 'none');
        }

    });


    $('.button').click(function (e) {
        alert('SignUp or LogIn clicked file index_jquery.js');

    });

    //$('#ZGJEDH BUTON').click(function (e) {
    //         $('#blacken').css('display', 'block');
    //    return false; 
    //           
    //});

    $('.we-pp-wrapper').hover(function (e) {
        $('#blacken').css('display', 'block');

        alert('titas');
        return false;
    });

    $('#discoverButton').click(function (e) {
        $('#nasaBlacken').css('display', 'block');
        return false;
        alert('titas');
    });


});