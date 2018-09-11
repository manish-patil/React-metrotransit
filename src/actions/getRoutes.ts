import axios from "axios";

export default function getRoutes() {
    return (dispatch) => {
        axios.get("http://svc.metrotransit.org/NexTrip/Routes")
            .then((data) => {
                dispatch({
                    type: "ROUTES_RECEIVED",
                    payload: data
                })
            }).catch((err) => {
                console.log("error: ", err);
            })
    }
}