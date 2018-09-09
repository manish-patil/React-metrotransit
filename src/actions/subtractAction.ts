import axios from "axios";

export default function subtractAction(currentResult, num) {
    return (dispatch) => {
        axios.post("/subtract", {
            "currentResult": currentResult,
            "numberToSubtract": num
        }).then((response) => {
            dispatch(
                {
                    type: "SUBTRACT",
                    payload: response.data.result
                }
            )
        }).catch((err) => {

        })
    }
}