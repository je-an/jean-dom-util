// jscs:disable
// jshint ignore:start
define([
    "DomUtil"
], function (DomUtil) {
    describe('DomUtil.spec.js', function () {
        var instance;
        describe("DomUtil.createElementFromMarkup", function () {
            it("creates a DOM element from html markup", function () {
                var e = DomUtil.createElementFromMarkup("<div></div>");
                expect(e instanceof HTMLElement).toBe(true);
            });
            it("throws type error if no markup is passed", function () {
                try {
                    DomUtil.createElementFromMarkup();
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
        describe("DomUtil.isInViewPort", function () {
            it("returns true if element is in viewport", function () {
                var e = DomUtil.createElementFromMarkup("<div></div>");
                document.body.appendChild(e);

                expect(DomUtil.isInViewPort(e)).toBe(true);
            });
            it("returns false if element is not in viewport", function () {
                var e = DomUtil.createElementFromMarkup("<div></div>");
                expect(DomUtil.isInViewPort(e)).toBe(false);
            });
            it("throws type error if no HTMLElement is passed", function () {
                try {
                    DomUtil.isInViewPort();
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
    });
});

