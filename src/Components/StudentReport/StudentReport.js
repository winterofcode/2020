
import "./StudentReport.scss"

import React, {useState, useEffect} from 'react'
import axios from "axios"
//e444647b81c4927b30efccbbe6d33a4fac4577ff
const StudentReport = ({props}) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        (async function() {
            try {
                const headers = {
                    "Authorization": `Token e444647b81c4927b30efccbbe6d33a4fac4577ff`
                }
                const url = ``
    
            }catch(error){
                setError("Can't load report, please try again later.")
                setLoading(false)
            }
        })();
    }, [])


    return (
        <div>
            
        </div>
    )
}

export default StudentReport
