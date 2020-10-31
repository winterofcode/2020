import React, { useState, useRef, useEffect } from 'react'

const Accordion = props => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toogleActive = () => {
    setActive(!active)
  }

  const titleStyle = {
    fontWeight: 600,
    fontSize: '14px',
    width: "90%",
  }

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toogleActive}>
        <p style={titleStyle}>{props.title}</p>
        <span className={active ? 'accordion-icon rotate': 'accordion-icon'}>
        <svg className="accordion__icon" width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#777" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
        </span>
      </button>

      <div
        ref={contentRef}
        className="accordion-content"
      >
        {props.children}
      </div>
    </div>
  )
}

export default Accordion