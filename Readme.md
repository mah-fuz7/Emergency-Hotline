1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

=>getElementById: when you select the element in js using id
=>getElementByClassName:when you select the multiple element in js using class name
=>querySelector:select the element using css selector and it only select the first element
=>querySelectorAll: select the multiple element using css selector


2. How do you **create and insert a new element into the DOM**?

const newDiv=document.createElement("div");
newDiv.innerHtml="<h1>"Hellow World"</h1>
const mainDiv=document.getElementById("main-div");
mainDiv.append(newDiv)

3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?
