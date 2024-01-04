'use client'

import React, { FormEvent, useState } from 'react'
import styles from './leadForm.module.css'

type FormSubmissionStatus = 'initial' | 'loading' | 'success' | 'error'

export default function LeadForm() {
  const [submissionStatus, setSubmissionStatus] =
    useState<FormSubmissionStatus>('initial')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmissionStatus('loading')

    const form = e.target

    // TODO: Fix these typscript warnings
    // @ts-ignore
    const data = new FormData(form)
    // @ts-ignore
    const action = form.action

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: data,
      })

      if (response.ok) {
        setSubmissionStatus('success')
      } else {
        setSubmissionStatus('error')
        console.error('Error submitting form:', response.statusText)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div>
      {submissionStatus === 'success' && (
        <div style={{ padding: '24px' }}>
          <p>Form submitted successfully!</p>
          {/* You can render a new component or perform additional actions here */}
        </div>
      )}

      {submissionStatus === 'error' && (
        <div style={{ padding: '24px', border: '2px solid red' }}>
          <p>There was an error submitting the form. Please try again later.</p>
        </div>
      )}
      <form
        className={styles.lead_form}
        id="my-form"
        method="POST"
        action={process.env.APPS_SCRIPT_URL}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="Name" placeholder="First name" />
        <label htmlFor="email">Email</label>
        <input
          className="input"
          name="Email"
          type="email"
          required
          placeholder="Enter your email address.."
        />
        <button
          disabled={submissionStatus !== 'loading'}
          className="button"
          type="submit"
        >
          Join waitlist
        </button>
      </form>
    </div>
  )
}
