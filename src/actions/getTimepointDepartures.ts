import axios from "axios";
import { disconnect } from "cluster";
import { start } from "repl";

export default function getTimepointDepartures(route, direction, stop) {
    return (dispatch) => {
        axios.get("http://svc.metrotransit.org/NexTrip/" + route + "/" + direction + "/" + stop)
            .then((data) => {
                dispatch({
                    type: "TIMEPOINT_DEPARTURES_RECEIVED",
                    payload: data
                })
            })
            .catch((err) => {
                console.log("error : ", err)
            })
    }
} 