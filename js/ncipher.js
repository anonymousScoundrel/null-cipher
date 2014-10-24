;(function ($, window, undefined) {
    "use strict";

    $.log = function (data) {
        if (window.console) {
            console.log(data);
        }
    };

    $(document).ready(function () {
        $.log("works");
    });
    
}(jQuery, window));