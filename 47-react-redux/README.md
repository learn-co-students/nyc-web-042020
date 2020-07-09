# Predux Setup
-  `npm install redux` && `npm install react-redux`
- In your `index.js`:
    * `import {createStore} from 'redux'`
    * `import {Provider} from 'react-redux'`

```javascript
    let initialState = {
    }

    // The return value of our reducer becomes our global state
    const genericReducer = (state = initialState, action) => {
    switch(action.type){
        default: 
            return state
     }
    }
```