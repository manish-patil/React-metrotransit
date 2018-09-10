import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import MetroTransitReducer from "./reducers/MetroTransitReducer";

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(MetroTransitReducer, middleware);


// http://svc.metrotransit.org/