import React, { useState, useRef } from 'react'

function Form (props) {
  const inputNameRef = useRef()
  const inputAgeRef = useRef()
  const [statusName, setStatusName] = useState('')
  const [statusAge, setStatusAge] = useState('')
  function handleSubmit (e) {
    e.preventDefault()
    if (inputNameRef.current.value.length === 0) {
      setStatusName('Type your name please')
      return
    }
    if (inputAgeRef.current.value.length === 0) {
      setStatusAge('Type your age please')
      return
    }
    setStatusName('')
    setStatusAge('')
    props.handleSubmit(inputNameRef.current.value, inputAgeRef.current.value)
    document.getElementById('form').reset()
  }
  return (
    <div className='form-container'>
      <form
        id='form'
        className='form'
        onSubmit={handleSubmit}
      >
        <label>
          Name:
          <input
            placeholder={statusName}
            ref={inputNameRef}
            type='text'
            name='name'
          />
        </label>
        <label>
          Age:
          <input
            placeholder={statusAge}
            ref={inputAgeRef}
            type='number'
            name='age'
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}
export default Form
