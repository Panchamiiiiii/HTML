import React from 'react'
import Exam from './Exam'
function Student() {
  return (
    <>
    <h1>Student(Parent)</h1>
    <Exam subject="Biology" and date="8th January"/>
    <Exam subject="Biology" and date="8th January"/><Exam subject="Biology" and date="8th January"/>

    </>
  )
}
export default Student