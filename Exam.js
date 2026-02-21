import React from 'react'

function Exam(props) {
  return (
    <>
    <h2>Exam(Child component)</h2>
    <h1>Data is being used from Student component</h1>
    <table>
        <thead>
            <td>{props.subject}</td>
            <td>{props.date}</td>
        </thead>
    </table>

    </>
  )
}
export default Exam