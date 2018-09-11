import axios from "axios";

export default function getStops(route, direction) {
    return (dispatch) => {
        axios.get("http://svc.metrotransit.org/NexTrip/Stops/" + route + "/" + direction)
            .then((data) => {
                dispatch({
                    type: "STOPS_RECEIVED",
                    payload: data
                })
            }).catch((err) => {
                console.log("error: ", err);
            })
    }
}