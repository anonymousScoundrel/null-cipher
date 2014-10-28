;(function ($, window, undefined) {
    "use strict";

    var x = null,
        y = null;

    $.log = function (data) {
        if (window.console) {
            console.log(data);
        }
    };

    $.getScreenHeight = function () {
        return y;
    };

    $.getScreenWidth = function () {
        return x;
    };

    $(window).load(function () {
		$(document).ready(function () {

		});
    });
    
}(jQuery, window));