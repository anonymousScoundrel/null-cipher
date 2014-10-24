;(function ($, window, undefined) {
    "use strict";

    $.log = function (data) {
        if (window.console) {
            console.log(data);
        }
    };

    $(window).load(function () {
		$(document).ready(function () {
			$.log("works");
		});
    });
    
}(jQuery, window));