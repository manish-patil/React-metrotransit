import { Provider } from "../../node_modules/@types/react-redux";
import { debug } from "util";

let defaultState = {
    providers: [],
    routes: [],
    directions: []
}

export default function MetroTransitReducer(state = defaultState, action) {
    if (action.type === "PROVIDERS_RECEIVED") {
        let providers = [];
        action.payload.data.map((provider) => {
            providers.push({
                value: provider.Value,
                label: provider.Text
            })
        })

        return { ...state, providers: providers };
    } else if (action.type === "ROUTES_RECEIVED") {
        let routes = [];
        action.payload.data.map((route) => {
            routes.push({
                value: route.Route,
                label: route.Description,
                providerId: route.ProviderID
            })
        })

        return { ...state, routes: routes };
    } else if (action.type === "DIRECTIONS_RECEIVED") {
        let directions = [];
        action.payload.data.map((direction) => {
            directions.push({
                value: direction.Value,
                label: direction.Text
            })
        })

        return { ...state, directions: directions };
    } else {
        return state;
    }
}