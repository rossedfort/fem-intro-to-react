$ React Notes

## Basics
- `React.createClass()` creates a template for a component
- `React.createElement()` creates an instance based on that template
  - `React.createElement()` === `<MyComponent />`
- The only thing that can modify the state of a component is the component itself
In the return of our .map() in the search component, the ... acts like the ES6 spread operator
- React components can also be written with ES6 classes, however `React.createClass()` does a lot under the hood so we don't have to worry about binding
---
- Good organization of code in React components
  - 1. PropTypes
  - 2. getInitialState()
  - 3. Lifcycle hooks
  - 4. Custom functions
  - 5. render()

## Destructuring
- allows you to make multiple assignments out of one object i.e.
```javascript
const obj = { a: 1, b: 2, c: 3 }
const { a, b, c } = obj
a === 1 // true
b === 2 // true
c === 3 // true
```
## Lifecycle Hooks
- componentWillMount gets called right before anything gets put into the dom
- componentDidMount (ngOnInit) gets called right after anything gets put into the dom
  - the dom is available here, you can do ajax requests, event binding, etc.
- componentWillUnmount (ngOnDestroy) gets called right before the component gets removed from the dom
- shouldComponentUpdate (change detection)

* a `thunk` is a function that represents a value that is determined when that function is called
* you can create dynamic Object keys with brackets i.e

```javascript
let key = 'someKey'
let value = 'someValue'
let obj = {[key]: value}

obj === { someKey: 'someValue' }
```
