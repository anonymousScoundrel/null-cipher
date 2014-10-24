;(function ($, q, window, undefined) {
	"use strict";

	function makeReady () {
		var test = $("#qunit");

		if (test.length === 0) {
			$("body").prepend("<div id='qunit' />");
		}
	}

	$(document).ready(function () {
		(function () {
			q.module("Init");
		}(makeReady()));
	});
}(jQuery, QUnit, window));