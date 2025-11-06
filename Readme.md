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
Event Bubbling is a process where event start from click element and go to the parent element by bubling.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is a process where add Event Listener in the parent and event bubbles to it child so that no need to add multiple Event Listener.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
=> preventDefault():stops default browser action
=>stopPropagaion():stops event bubling to parent element
