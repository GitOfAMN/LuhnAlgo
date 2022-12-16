import { useState } from "react"

export default function Form(props) {
    const [ccNumber, setCcNumber] = useState()
    const [valid, setValid] = useState(false)
    const handleChange = (evt) => {
        setCcNumber(evt.target.value)
    }


    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                setValid(props.validateCc(ccNumber))
            }}
            >
                <input type="text" onChange={handleChange} value={ccNumber} />
                <input type="submit" value="submit" />
                </form>
                {valid ? <h1>Valid</h1> : <h1>Invalid</h1>}
        </div>
    );

}