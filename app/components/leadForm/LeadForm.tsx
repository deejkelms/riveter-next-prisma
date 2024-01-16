'use client'

import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import styles from './leadForm.module.css'

type FormSubmissionStatus = 'pending' | 'success' | 'error'

export default function LeadForm() {
  const [submissionStatus, setSubmissionStatus] =
    useState<FormSubmissionStatus>('pending')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmissionStatus('pending')
    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxC7uBAx8DCNZpGPkTDMiHGGZmra0D8K3sZO1GhhJFoXAIM49f_szhqBCsKCh-TGpgo/exec',
        {
          method: 'POST',
          body: formData,
        }
      )

      await response.json()

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
    <div className={styles.leadForm}>
      {submissionStatus === 'success' && (
        <div className={styles.successMessage}>
          <p className={styles.headingText}>
            We’ve added your email to the mailing list.{' '}
            <CheckCircleIcon
              sx={{
                color: '#3CCA30',
                width: 'unset !important',
                margin: '4px',
              }}
            />
          </p>
          <p>
            Look out for an email announcing our website launch where you can
            then sign up, create a profile, and learn more about how we are
            connecting small businesses to top talent!
          </p>
        </div>
      )}

      {submissionStatus === 'error' && (
        <div style={{ padding: '24px', border: '2px solid red' }}>
          <p>There was an error submitting the form. Please try again later.</p>
        </div>
      )}
      {submissionStatus === 'pending' && (
        <>
          <h1>Coming Soon</h1>
          <p className={styles.subtitle}>
            Enter your email to receive updates and to be notified when the
            website is launched!
          </p>
          <form
            className="form-control"
            id="lead-form"
            method="POST"
            onSubmit={handleSubmit}
          >
            {/* <label htmlFor="name">Name</label>
            <input type="text" id="name" name="Name" placeholder="First name" /> */}
            <label htmlFor="email">Email</label>
            <input
              className="input"
              name="Email"
              type="email"
              required
              placeholder="Enter your email address.."
            />
            <button
              disabled={submissionStatus !== 'pending'}
              className="button"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </>
      )}
    </div>
  )
}
