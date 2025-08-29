1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById("id"): This will find the element by the ID. ID is unique.
getElementsByClassName("class"): This will find all elements that have the class.
querySelector("selector"): This will find the first element that matches a CSS selector.

2. How do you create and insert a new element into the DOM?

First, we need to document.createElement("div or p or anything").
Then set its text or attributes.
Finally, add it to the page with like appendChild or insertBefore.

3. What is Event Bubbling and how does it work?
When I click something, the event starts from the clicked element and then it goes up through its parent elements one bye one.

4. What is Event Delegation in JavaScript? Why is it useful?
We can put a click listener on the parent element instead of all the child elements. Then we can check which child was clicked.

It’s useful because: Less code and new elements added later still work without extra setup.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault(): Stops the default action like page reloading on form submit.
stopPropagation(): Stops the event from bubbling up to parent elements.
