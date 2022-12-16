import "./style.css"
import React from 'react'
import { useState, useEffect } from "react"
import Form from "./components/Form"

export default function App() {
    const [form] = useState(null)
    const luhnAlgo = string => {
        let arr = (string)
            .split('')
            .reverse()
            .map(x => parseInt(x));
        for (let i = 1; i < arr.length; i += 2) {
            let sum = arr[i] * 2
            if (sum > 9) {
                sum -= 9
            }
            arr[i] = sum
        }
        let sumOfArr = arr.reduce((acc, val, i) => {
            return acc += val
        }, 0)
        return sumOfArr % 10 === 0
    }


    return (
        <div className="App">
            <Form validateCc = {luhnAlgo}/>
        </div>
    )
}