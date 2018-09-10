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
        describe("DomUtil.getChildById", function () {
            var e;
            beforeEach(function () {
                e = DomUtil.createElementFromMarkup('<div> <div class="first1" id="test1"> <div class="second1"></div> <div class="second2"></div> <div class="second3"></div> </div> <div class="first2"> <div class="second1" id="test2"></div> </div> <div class="first3"> <div class="second1"><div class="third1"></div><div class="third2"></div><div class="third3" id="test3"></div></div> </div></div>');
            })
            it("returns the child element with the provided id", function () {
                var t1 = DomUtil.getChildById(e, "test1");
                var t2 = DomUtil.getChildById(e, "test2");
                var t3 = DomUtil.getChildById(e, "test3");
                expect(t1.className).toEqual("first1");
                expect(t2.className).toEqual("second1");
                expect(t3.className).toEqual("third3");
            });
            it("returns null if there is no child for the provided id", function () {
                var t1 = DomUtil.getChildById(e, "noId");
                expect(t1).toEqual(null);
            });
            it("throws type error if no HTMLElement is passed", function () {
                try {
                    DomUtil.getChildById(undefined, "id");
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
            it("throws type error if no id is passed", function () {
                try {
                    DomUtil.getChildById(e, undefined);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
        describe("DomUtil.getChildByClass", function () {
            var e;
            beforeEach(function () {
                e = DomUtil.createElementFromMarkup('<div> <div class="first1 a b c" id="test1"> <div class="second1"></div> <div class="second2"></div> <div class="second3"></div> </div> <div class="first2"> <div class="second21" id="test2"></div> </div> <div class="first3"> <div class="second1"><div class="third1"></div><div class="third2"></div><div class="third3" id="test3"></div></div> </div></div>');
            })
            it("returns the child element with the provided id", function () {
                var t1 = DomUtil.getChildByClass(e, "first1");
                var t2 = DomUtil.getChildByClass(e, "second21");
                var t3 = DomUtil.getChildByClass(e, "third3");
                expect(t1.id).toEqual("test1");
                expect(t2.id).toEqual("test2");
                expect(t3.id).toEqual("test3");
            });
            it("returns null if there is no child for the provided class", function () {
                var t1 = DomUtil.getChildByClass(e, "noId");
                expect(t1).toEqual(null);
            });
            it("throws type error if no HTMLElement is passed", function () {
                try {
                    DomUtil.getChildById(undefined, "className");
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
            it("throws type error if no className is passed", function () {
                try {
                    DomUtil.getChildById(e, undefined);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
        describe("DomUtil.getAncestorById", function () {
            var e, child;
            beforeEach(function () {
                e = DomUtil.createElementFromMarkup('<div id="master" class="master"> <div class="first1" id="test1"> <div class="second1"></div> <div class="second2"></div> <div class="second3"></div> </div> <div class="first2"> <div class="second1" id="test2"></div> </div> <div id="first3" class="first3"> <div id="second1" class="second1"><div class="third1"></div><div class="third2"></div><div class="third3" id="test3"></div></div> </div></div>');
                child = DomUtil.getChildById(e, "test3");
            })
            it("returns the ancestor element with the provided id", function () {
                var t1 = DomUtil.getAncestorById(child, "second1");
                var t2 = DomUtil.getAncestorById(child, "first3");
                var t3 = DomUtil.getAncestorById(child, "master");
                expect(t1.className).toEqual("second1");
                expect(t2.className).toEqual("first3");
                expect(t3.className).toEqual("master");
            });
            it("returns null if there is no ancestor with the provided id", function () {
                var t1 = DomUtil.getAncestorById(child, "noId");
                expect(t1).toEqual(null);
            });

            it("throws type error if no HTMLElement is passed", function () {
                try {
                    DomUtil.getAncestorById(undefined, "id");
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
            it("throws type error if no id is passed", function () {
                try {
                    DomUtil.getAncestorById(e, undefined);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
        describe("DomUtil.getAncestorByClass", function () {
            var e, child;
            beforeEach(function () {
                e = DomUtil.createElementFromMarkup('<div id="master" class="master"> <div class="first1" id="test1"> <div class="second1"></div> <div class="second2"></div> <div class="second3"></div> </div> <div class="first2"> <div class="second1" id="test2"></div> </div> <div id="first3" class="first3"> <div id="second1" class="second1"><div class="third1"></div><div class="third2"></div><div class="third3" id="test3"></div></div> </div></div>');
                child = DomUtil.getChildById(e, "test3");
            })
            it("returns the ancestor element with the provided class name", function () {
                var t1 = DomUtil.getAncestorByClass(child, "second1");
                var t2 = DomUtil.getAncestorByClass(child, "first3");
                var t3 = DomUtil.getAncestorByClass(child, "master");
                expect(t1.id).toEqual("second1");
                expect(t2.id).toEqual("first3");
                expect(t3.id).toEqual("master");
            });
            it("returns null if there is no ancestor with the provided name", function () {
                var t1 = DomUtil.getAncestorByClass(child, "noclass");
                expect(t1).toEqual(null);
            });

            it("throws type error if no HTMLElement is passed", function () {
                try {
                    DomUtil.getAncestorByClass(undefined, "id");
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
            it("throws type error if no id is passed", function () {
                try {
                    DomUtil.getAncestorByClass(e, undefined);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
    });
});

