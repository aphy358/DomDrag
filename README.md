# DomDrag简介

这个小插件实现Dom元素的拖拽。

---

## Dependencies

普通的JQuery包即可.  

- [jQuery v2.1.3 (>= 1.9.0)](http://jquery.com/)

## Getting Started


### Usage

首先是引入样式文件和js文件.

```html
<!-- Required Javascript -->
<script src="jquery.js"></script>
<script src="MyDragA.js"></script>
<script src="MyDragB.js"></script>
```

本例分别给出两种不同的拖拽方式MyDragA.js的方式是基于HTML5的，它需要在DOM元素上指定draggable属性，如下：

```html
<button draggable="true" id="draga">drag me(A)</button>
```

而MyDragB.js是传统的控制拖拽方式，只需如下格式DOM元素：

```html
<button id="dragb">drag me(B)</button>
```

基本用法如下.

```javascript
$(document).ready(function () {
    $('#draga').mydraga();
	$('#dragb').mydragb();
});
```

两种拖拽方式的用户体验还是有差别的，可以自己分别拖拽试试。

