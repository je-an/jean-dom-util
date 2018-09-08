define(["TypeCheck", "Failure"], function (TypeCheck, Failure) {
    /**
     * Provides utility functions for DOM elements 
     * @alias DomUtil 
     */
    return {
        /**
        * @throws {TypeError} - if html is not a string
        * @param {String} html - the html markup 
        * @returns {HTMLElement} - the created DOM element
        */
        createElementFromMarkup: function (html) {
            if (!TypeCheck.isString(html)) {
                Failure.throwTypeError("html is not a string");
            }
            var div = document.createElement('div');
            div.innerHTML = html.trim();
            return div.firstChild;
        },
        /**
         * @param {HTMLElement} element - the element which shall be checked
         * @returns {Boolean} - True if element is within the viewport, false otherwise
         */
        isInViewPort: function (element) {
            if (!TypeCheck.isInstanceOf(element, HTMLElement)) {
                Failure.throwTypeError("element is not an instance of HTMLElement");
            }
            var bounds = element.getBoundingClientRect();
            return ((bounds.top + bounds.height) > 0) && bounds.top < window.innerHeight;
        }
    };
});