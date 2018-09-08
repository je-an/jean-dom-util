## Description

Provides utility functions for DOM elements

## Support
Supports AMD eco system. If there is no loader, DomUtil is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
// Create an element
var element = DomUtil.createElementFromMarkup("<div></div>");
// Append it to DOM for viewport test
document.body.appendChild(element);
// Test if element is part of the viewport
DomUtil.isInViewPort(element) // true
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

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT