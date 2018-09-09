import { Provider } from "../../node_modules/@types/react-redux";

export default function routeReducer(state = { providers: [], routes: [] }, action) {
    if (action.type == "GOT_PROVIDERS") {
        let providers = [];
        action.payload.data.map((provider) => {
            providers.push({
                value: provider.Value,
                label: provider.Text
            })
        })

        return { ...state, providers: providers };
    } if (action.type == "GOT_ROUTES") {
        let routes = [];
        action.payload.data.map((route) => {
            routes.push({
                value: route.Route,
                label: route.Description,
                providerId: route.ProviderID
            })
        })

        return { ...state, routes: routes };
    } else {
        return state;
    }
}