import React from 'react'
import successfulStudents from "../Assets/data.json"
import {Link} from "react-router-dom"
import "./StudentReportsPage.scss"
const StudentReportsPage = () => {
    
    return (
        <section className="section-student-reports" id="student-reports">
        <div className="student-reports-container row">
        <h1 className="section-title">Student Reports</h1>

        <div className="report title">
        <p className="report-entity">Name</p>
        <p className="report-entity">Organisation</p>
        </div>
        {
            successfulStudents.feed.entry.map((student) => {
                let studentUrl=student.gsx$name.$t.split(" ").map((e) => e.replace(e[0], e[0].toLowerCase())).join("-")
                console.log(studentUrl);
                return (
                    <Link to={`/2020-student-reports/${studentUrl}`} className="link-student-record" key={student.id.$t.split('/')[9]}>
                    <div className="report">
                    <p className="report-entity student-name">{student.gsx$name.$t}</p>
                    <p className="report-entity student-org">{student.gsx$org.$t}</p>
                    </div>
                    </Link>
                )
            })
        }

        </div>
        </section>
    )
}

export default StudentReportsPage



/**
 
undefined
let x = 'Aaditya Ranjan'
undefined
x = x.split(" ")
(2) ["Aaditya", "Ranjan"]
x.map((e) => e.replace(e[0], e[0].toLowerCase()))
(2) ["aaditya", "ranjan"]
x.join(" ")
"Aaditya Ranjan"
x = x.map((e) => e.replace(e[0], e[0].toLowerCase()))
(2) ["aaditya", "ranjan"]
x.join("-")
"aaditya-ranjan"
 */