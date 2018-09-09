import axios from "axios";

export default function getProviders() {
    return (dispatch) => {
        axios.get("http://svc.metrotransit.org/NexTrip/Providers", {

        }).then((data) => {
            dispatch({
                type: "GOT_PROVIDERS",
                payload: data
            })
        }).catch((err) => {
            console.log("error: ", err);
        })
    }
}