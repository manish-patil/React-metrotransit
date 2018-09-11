import axios from "axios";
import { disconnect } from "cluster";

// TODO: Need the Stop IDs
export default function getDepartures(stop) {
    return (dispatch) => {
        axios.get("http://svc.metrotransit.org/NexTrip/11167")
            .then((data) => {
                dispatch({
                    type: "DEPARTURES_RECEIVED",
                    payload: data
                })
            })
            .catch((err) => {
                console.log("error : ", err)
            })
    }
} 