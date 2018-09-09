import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// import addSubtractReducer from "./reducers/addSutractReducer";
import routeReducer from "./reducers/routeReducer";

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(routeReducer, middleware);


// http://svc.metrotransit.org/