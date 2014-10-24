;(function ($, q, window, undefined) {
	"use strict";

	function makeReady () {
		var qunit = $("#qunit"),
			qFixture = $("#qunit-fixture"),
			body = $("body");

		if (qFixture.length === 0) {
			body.prepend("<div id='qunit-fixture' />");
		}
		if (test.length === 0) {
			body.prepend("<div id='qunit' />");
		}
	}

	$(document).ready(function () {
		(function () {
			q.module("Screen Dimensions");
			q.test(function (assert) {
				ok($.getScreenHeight);
				ok($.getScreenWidth);
			});
		}(makeReady()));
	});
}(jQuery, QUnit, window));