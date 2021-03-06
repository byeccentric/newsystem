import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { createLogger }  from "redux-logger"

import reducers from "./reducers"

const store =  createStore(
    reducers,
    applyMiddleware(thunk, createLogger())
)

export default store