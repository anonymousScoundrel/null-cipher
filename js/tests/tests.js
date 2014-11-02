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
				assert.ok(
					$.setScreenHeight,
					"Assert method exists"
				);
				assert.ok(
					$.getScreenHeight,
					"Assert method exists"
				);
				assert.notStrictEqual(
					$.setScreenHeight(),
					null,
					"Assert method should not return null"
				);
				assert.notStrictEqual(
					$.getScreenHeight(),
					null,
					"Assert method should not return null"
				);
				assert.strictEqual(
					$.setScreenHeight(),
					undefined,
					"Assert method should return undefined"
				);
				assert.strictEqual(
					$.getScreenHeight(),
					$(window).height(),
					"Assert method should return window height as integer"
				);
			});
			q.test("Screen Width", function (assert) {
				assert.ok(
					$.setScreenWidth,
					"Assert method exists"
				);
				assert.ok(
					$.getScreenWidth,
					"Assert method exists"
				);
				assert.notStrictEqual(
					$.setScreenWidth(),
					null,
					"Assert method should not return null"
				);
				assert.notStrictEqual(
					$.getScreenWidth(),
					null,
					"Assert method should not return null"
				);
				assert.strictEqual(
					$.setScreenWidth(),
					undefined,
					"Assert method should return undefined"
				);
				assert.strictEqual(
					$.getScreenWidth(),
					$(window).width(),
					"Assert method should return window width as integer"
				);
			});
			q.test("Resize event", function (assert) {
				$(window).off("resize").on("resize", function () {
					assert.strictEqual(
						$.getScreenHeight(),
						$(window).height(),
						"Assert method should return window height as integer after resize event"
					);
					assert.strictEqual(
						$.getScreenWidth(),
						$(window).width(),
						"Assert method should return window width as integer after resize event"
					);
				});
			});
		}(makeReady()));
	});
}(jQuery, QUnit, window));