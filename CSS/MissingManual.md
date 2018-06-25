# Css: The Missing Manual

## Introduce

### How HTML tags work?

example :  `<a href="http://www.missingmanuals.com">Click here!</a>`

- `<a>` tag creates hyperlink in a webpage.
- the `href` part of this tag is call  an `attribute`
- the `URL`  is the `value`

### The pseudo-elements `::selection`
this CSS3 selector refers to items that visitor has selected on a page, doesn't work in IE8.



## CSS Basics

### Attribute selectors : begin with / end with

`a[href^="http://"]` means select any links begin with `http://`

```js
a[href$=".pdf"] {
    padding-left: 10px;
}
// means any links point to PDF file will has a padding-left of 10.
```



// page 69 to continue...



