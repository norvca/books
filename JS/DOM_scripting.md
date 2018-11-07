# DOM Scripting

## nodeType
1. Element nodes have a nodeType of 1
2. Text nodes have a nodeType of 3

## nodeValue
```html
  <p id="text">inner text</p>
  <script>
    console.log(text.nodeValue)   // null
  </script>
```
The nodeValue of the P element itself is empty.
The text within the paragraph is a different node, it's the first node of the paragrapgh, so...
```html
  <p id="text">inner text</p>
  <script>
    console.log(text.firstChild.nodeValue)   // "inner Text"
  </script>
```

## element.insertAdjacentHTML(position, text)

position: 

​	'beforebegin': before the element it self

​	"afterbegin": inside the element, before it's first child

​	"beforeend": inside the element, after it's last child

​	"afterend": after the element it self

text:

​	`text` is the string to be parsed as HTML and insert the DOM tree.

```js
// <p id="one">one</p>
var p1 =  document.querySlector('#one');
p1.insertAdjacentHTML('afterend', '<p>two</p>');

// result: <p id="one">one</p><p>two</p>
```

push to page 94...