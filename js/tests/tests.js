;(function ($, q, window, undefined) {
	"use strict";

	function makeReady () {
		var qunit = $("#qunit"),
			qFixture = $("#qunit-fixture"),
			body = $("body");

		if (qFixture.length === 0) {
			body.prepend("<div id='qunit-fixture' />");
		}
		if (qunit.length === 0) {
			body.prepend("<div id='qunit' />");
		}
	}

	$(document).ready(function () {
		(function () {
			q.module("Screen Dimensions");
			q.test("Screen Height", function (assert) {
				assert.expect(2);
				assert.ok($.getScreenHeight);
				assert.notStrictEqual($.getScreenHeight, null, "Method should not return null");
			});
			q.test("Screen Width", function (assert) {
				assert.expect(2);
				assert.ok($.getScreenWidth);
				assert.notStrictEqual($.getScreenWidth, null, "Method should not return null");
			});
		}(makeReady()));
	});
}(jQuery, QUnit, window));