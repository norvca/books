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


push to page 71...