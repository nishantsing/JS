### DOM (Document Object Model)

#### Analyze the DOM
- console.log(document.body) - html structure
- console.dir(document.body) - object
- document.images | links | forms

- HTMLCollection -> not array so we cannot use forEach loop but since it has an iterator in prototype we can use for or for of loop or using indexes as well.

Note: Never use indexes to change something dynamic


#### Traversing DOM Elements

- const someELe = document.getElementById('someId') -> element
-  document.getElementsByClassName('someClass') -> HTMLCollection
- document.getElementsByTagName("element") -> HTMLCollection
- document.querySelector('<css selector>') | <css selector> [.someClass, #someID, element, .someClass:nth-child(2), [role="button"]] -> element
- document.querySelectorAll('<css selector>') -> NodeList

- NodeList -> We can use forEach on this unlike HTMLCollection

- someELe.innerHTML | textContent | innerText
- someEle.style.<property> | color | fontSize | backgroundColor | paddingBottom


#### Traversing DOM Hierarchy


grandparent -> parent -> child1
                      -> child2

- js way
const parent = document.querySelector("<parent>" )
const children =  parent.children -> HTMLCollection

children.parentElement -> element

children to grandparent
children.closest("<css selector>") -> element

siblings
chlid1.nextElementSibling -> elemnet
child2.previousElementSibling -> element


- css selectors
child1 + child2 -> immediate sibling
child1 ~ child2 -> sibling but not immediate
parent > child -> direct child of specified parent
ancestor descendant -> selects all descendants of specified ancestor

- psuedo selector
element:first-child
element:last-child
element:nth-child(n) -> li:nth-child(2n) selects every second <li> element
element:only-child
element:first-of-type 
element:last-of-type 
element:nth-of-type(n)
element:only-of-type


#### Manipulate the DOM

- const element = document.createElement('<element>')
- element.className = 'red'
- element.classList.add("red")
- element.setAttribute('id', 'red')
- element.remove()
- <container>.insertBefore(element, <beforeElement>) -> before specified element in the container
- <container>.appendChild(element); -> at end
- <container>.append(element | "Hello World") 
- <container>.append(element, "Hello", '<p>hello</p>', document.createElement("span"))
- <container>.prepend(element)

- append can insert Text nodes as well or multiple childrens and returns the element inserted as well while appendChild can only insert dom elements
 

#### Listening DOM Events
.addEventListener("click", (e)=>{

}) | "dbclick" | "mousedown" | "mouseup" | "mouseenter" | "mouseleave" | "mouseover" | "mouseout" | "keydown" | "keyup" | "keypress" | "focus" | "blur" | "cut" | "paste" | "input" | drag | dragend | dragenter | dragleave | dragover | dragstart

- mouseenter triggers only once when the cursor enter the parent but mouseover triggers ever time the mouse moves inside the parent

- form -> "submit" 
- form.reset()
e.preventDefault()
e.currentTarget
e.target.<fieldName>.value
e.target.amount.value | <input name="amount" id="amt" type="text" onclick="someFn()">


#### Improvements
- validate inputs
- storage (local storage)
- storage (mongodb)

#### Mid Improvements
- Convert this to mobile app using react native

#### Advance Improvements
- connecting to upi app to track your transactions automatically