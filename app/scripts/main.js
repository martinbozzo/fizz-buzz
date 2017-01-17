$(function() {
    var utils = window.Utils,
        config = window.Configuration;

    utils.initCounting(config);

    $('.btn-submit').click(function() {
        var newConfig = {
            initNum: $('#initNum').val(),
            div1: $('#div1').val(),
            div2: $('#div2').val(),
            timeout: $('#timeout').val()
        };

        utils.resetCounting(newConfig);
    });

    $('.btn-stop').click(function() {
        utils.stopCounting();
    });

    $('.settings-icon').click(function() {
        utils.toggleSettings();
    });
});
