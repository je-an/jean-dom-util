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
            var bounds = element.getBoundingClientRect(), isInViewPort = ((bounds.top + bounds.height) > 0) && bounds.top < window.innerHeight;
            return isInViewPort;
        },
        /**
         * gets the child for the matched id
         * @param {HTMLElement} element - the element which childs shall be searched
         * @param {String} id - the id of the child which shall be found
         * @returns {HTMLElement|null} - the matched element or null if no element is found for the
         *                               provided id 
         */
        getChildById: function (element, id) {
            if (!TypeCheck.isInstanceOf(element, HTMLElement)) {
                Failure.throwTypeError("element is no instance of HTMLElement");
            }
            if (!TypeCheck.isString(id)) {
                Failure.throwTypeError("id is not a string");
            }
            var i, childs = element.children, length = childs.length, child, result = null;
            for (i = 0; i < length; i++) {
                child = childs[i];
                if (child.id === id) {
                    return child;
                }
            }
            for (i = 0; i < length; i++) {
                result = this.getChildById(childs[i], id);
                if (TypeCheck.isDefined(result)) {
                    return result;
                }
            }
            return null;
        },
        /**
         * Gets the first child for the matched class
         * @param {HTMLElement} element - the element which childs shall be searched
         * @param {String} className - the class name of the child which shall be found
         * @returns {HTMLElement|null} - the matched element or null if not element is found
         *                               for the provided class name
         */
        getChildByClass: function (element, className) {
            if (!TypeCheck.isInstanceOf(element, HTMLElement)) {
                Failure.throwTypeError("element is no instance of HTMLElement");
            }
            if (!TypeCheck.isString(className)) {
                Failure.throwTypeError("className is not a string");
            }
            var i, childs = element.children, length = childs.length, child, result = null;
            for (i = 0; i < length; i++) {
                child = childs[i];
                if (child.classList.contains(className)) {
                    return child;
                }
            }
            for (i = 0; i < length; i++) {
                result = this.getChildByClass(childs[i], className);
                if (TypeCheck.isDefined(result)) {
                    return result;
                }
            }
            return null;
        },
        /**
         * Gets the first ancestor for the matched id
         * @param {HTMLElement} element - the element which ancestors shall be searched
         * @param {String} id - the id of the ancestor which shall be found
         * @returns {HTMLElement|null} - the matched element or null if no element is found for the
         *                               provided id 
         */
        getAncestorById: function (element, id) {
            if (!TypeCheck.isInstanceOf(element, HTMLElement)) {
                Failure.throwTypeError("element is no instance of HTMLElement");
            }
            if (!TypeCheck.isString(id)) {
                Failure.throwTypeError("id is not a string");
            }
            if (!TypeCheck.isDefined(element.parentElement)) {
                return null;
            }
            if (element.parentElement.id === id) {
                return element.parentElement;
            } else {
                return this.getAncestorById(element.parentElement, id);
            }
        },
        /**
         * Gets the first ancestor for the matched class
         * @param {HTMLElement} element - the element which ancestors shall be searched
         * @param {String} className - the class name of the ancestor which shall be found
         * @returns {HTMLElement|null} - the matched element or null if not element is found
         *                               for the provided class name
         */
        getAncestorByClass: function (element, className) {
            if (!TypeCheck.isInstanceOf(element, HTMLElement)) {
                Failure.throwTypeError("element is no instance of HTMLElement");
            }
            if (!TypeCheck.isString(className)) {
                Failure.throwTypeError("className is not a string");
            }
            if (!TypeCheck.isDefined(element.parentElement)) {
                return null;
            }
            if (element.parentElement.classList.contains(className)) {
                return element.parentElement;
            } else {
                return this.getAncestorByClass(element.parentElement, className);
            }
        }
    };
});