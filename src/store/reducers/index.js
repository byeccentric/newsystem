import { combineReducers } from "redux"

import ftps from './ftps'
import session from './session'

export default combineReducers({
    ftps,
    session
})