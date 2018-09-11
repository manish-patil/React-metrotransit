import axios from "axios";

export default function getDirections(route) {
    return (dispatch) => {
        axios.get("http://svc.metrotransit.org/NexTrip/Directions/" + route)
            .then((data) => {
                dispatch({
                    type: "DIRECTIONS_RECEIVED",
                    payload: data
                })
            }).catch((err) => {
                console.log("error: ", err);
            })
    }
};
