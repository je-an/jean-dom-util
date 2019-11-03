## Description

Provides utility functions for DOM elements

## Support
Supports AMD eco system. If there is no loader, DomUtil is registered as a browser variable.

## Warning
Do not use it in Internet Explorer 11 or lower

## Code Example
- Use it as browser variable
```js
// Create an element
var element = DomUtil.createElementFromMarkup(
        "<div class='master'>" + 
            "<div id='first'>" +
                "<div id='second'>" +
                    "<div class='third'></div>" +
                "</div>" +
            "</div>" +
        "</div>"
);
// Append it to DOM for viewport test
document.body.appendChild(element);
// Test if element is part of the viewport
DomUtil.isInViewPort(element) // true
// Get element with id "second"
var e = DomUtil.getChildById(element, "second");
// Get element with class "third"
var c = DomUtil.getChildByClass(element, "third");
// Get ancestor with id "first"
var a = DomUtil.getAncestorById(c, "first");
// Get ancestor with class "master"
var m = DomUtil.getAncestorByClass(c, "master");
```
- Use it with require.js
```js
require(["path/to/DomUtil"], function(DomUtil){
    // Work with DomUtil
});
```

## Installation

`npm install jean-dom-util --save --legacy-bundling`

## API Reference

### DomUtil.createElementFromMarkup(html) 

**Parameters**
- **html**: `String` - the html markup

**Returns**
- `HTMLElement` - the created DOM element

### DomUtil.isInViewPort(element) 

**Parameters**
- **element**: `HTMLElement` - the element which shall be check 

**Returns**
- `Boolean` - true if element is within the viewport, false otherwise

### DomUtil.getChildById(element, id) 

**Parameters**
- **element**: `HTMLElement` - the element which childs shall be searched
- **id**: `String` - the id of the child which shall be found 

**Returns**
- `HTMLElement|null` - the matched element or null if no element is found for the provided id 

### DomUtil.getChildByClass(element, className) 

**Parameters**
- **element**: `HTMLElement` - the element which childs shall be searched 
- **className**: `String` - the class name of the child which shall be found

**Returns**
- `HTMLElement|null` - the matched element or null if no element is found for the provided class name

### DomUtil.getAncestorById(element, id) 

**Parameters**
- **element**: `HTMLElement` - the element which ancestors shall be searched
- **id**: `String` - the id of the ancestor which shall be found

**Returns**
- `HTMLElement|null` - the matched element or null if no element is found for the provided id 

### DomUtil.getAncestorByClass(element, className) 

**Parameters**
- **element**: `HTMLElement` -  the element which ancestors shall be searched
- **className**: `String` - the class name of the ancestor which shall be found

**Returns**
- `HTMLElement|null` - the matched element or null if no element is found for the provided class name

### DomUtil.getElementCoordinates(element) 

**Parameters**
- **element**: `HTMLElement` -  the element for which the coordinates are needed

**Returns**
- `Object` - { top: Number, right: Number, bottom: Number, left: Number }

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT