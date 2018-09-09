import axios from "axios";

export default function addAction(currentResult, num) {
    return (dispatch) => {
        axios.post("/add", {
            "currentResult": currentResult,
            "numberToAdd": num
        }).then((response) => {
            dispatch(
                {
                    type: "ADD",
                    payload: response.data.result
                }
            )
        }).catch((error) => {

        })
    }
}