import React, { useState, useEffect } from "react"
import axios from "axios"
import "./StudentReport.scss"
import ReactMarkDown from "react-markdown"
import gfm from "remark-gfm";

import { CubeGrid } from "styled-loaders-react";


const StudentReport = ({ match }) => {
  const id = match.params.name
  const name = id.split("-").map((e) => e.replace(e[0], e[0].toUpperCase())).join(" ")
  let filename = `${id} - ${name}.md`
  filename = filename.replace(/ /g, '%20')


  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [markdown, setMarkDown] = useState("")

  useEffect(() => {
    (async function () {
      try {
        const url = `https://raw.githubusercontent.com/winterofcode/Reports-2020/master/${filename}`
        // console.log(url);
        let { data } = await axios({
          method: "get",
          url,
        })
        data = data.replace(/<br \/>/g, '  ');
        setMarkDown(data)
        setLoading(false)
      } catch (error) {

        setError("Can't load report, please try again later.")
        setLoading(false)
      }
    })()
  }, [id, filename])

  return (
      <section className="section-student-report" id="student-report">
      <div className="row">
      <h1 className="section-title">{name}</h1>
      {loading ? <div className="loader-inverse"><CubeGrid color="#204987" /></div> : error ? <div className="error-report"><h1>{error}</h1></div> : (
          <div className="markdown-container">
          <ReactMarkDown allowDangerousHtml={true} plugins={[gfm]} children={markdown} />
          </div>
      )}
      </div>
      </section>
  )
}

export default StudentReport
