;(function ($, window, undefined) {
    "use strict";

    var x = null,
        y = null;

    $.log = function (data) {
        if (window.console) {
            console.log(data);
        }
    };

    $.setScreenHeight = function () {
        y = $(window).height();
    };

    $.getScreenHeight = function () {
        return y;
    };

    $.setScreenWidth = function () {
        x = $(window).width();
    };

    $.getScreenWidth = function () {
        return x;
    };

    $(window).load(function () {
		$(document).ready(function () {

		});
    });
    
}(jQuery, window));