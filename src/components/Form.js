import React from 'react'

export default function Form(props) {
  const {
    values,
    setValues,
    reset,
    submitHandlers: { postQuote, putQuote },
  } = props

  const onCancel = evt => {
    evt.preventDefault()
    reset()
  }

  const onSubmit = evt => {
    evt.preventDefault()
    values.id
      ? putQuote(values)
      : postQuote({ text: values.text, author: values.author })
  }

  const onChange = evt => {
    // pull these out of the event to avoid the `persist()`
    const { name, value } = evt.target
    setValues({ ...values, [name]: value })
  }

  const isDisabled = () => {
    return !values.text.trim() || !values.author.trim()
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>{values.id ? 'Edit' : 'Add New'} Quote</h3>
      <input
        name='text'
        type='text'
        value={values.text}
        onChange={onChange}
        placeholder='enter text'
      />
      <input
        placeholder='enter author'
        name='author' type='text'
        value={values.author}
        onChange={onChange}
      />
      <button onClick={onCancel}>cancel</button>
      <button onClick={onSubmit} disabled={isDisabled()}>
        Submit {values.id ? 'Changes' : 'Quote'}
      </button>
    </form>
  )
}
