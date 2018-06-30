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



### Adjacent sibling selector

` h2 + p` means select the `p` tag directly after the `h2` tag



### general sibling combinatory selector

`h2 ~ p` means __all__  `P` tags are siblings of the `h2` tag



### The target selector

`:target` need a element with a ID attribute that becomes the target, then you can make some style when clicking the a tag has the attribute `href="#ID"`

example: https://jsbin.com/?html,css,js,output



## The :not() selector

```js
p:not(.classy) {
    color: red;
}
```

means select all p tags that don't have the classy class.



​	

## page 103....

