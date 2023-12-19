import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import Link from 'next/link'
import { randomUUID } from 'crypto'
import styles from './register.module.css'

export default function RegisterPage() {
  // server actions! full access to everything we need on the server
  async function registerUser(data: FormData) {
    'use server'

    const password = await hash(data.get('password') as string, 12)

    const user = await prisma.user.create({
      data: {
        name: data.get('name') as string,
        email: data.get('email') as string,
        password,
      },
    })

    // const token = await prisma.activateToken.create({
    //   data: {
    //     userId: user.id,
    //     token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
    //   },
    // })
  }

  async function verifyEmail(data: FormData) {
    'use server'

    const token = await prisma.verificationToken.create({
      data: {
        identifier: 'email',
        expires: new Date(Date.now() + 30 * 60000),
        token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
      },
    })

    // send the email
  }

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_formWrapper}>
        <h1>Sign Up</h1>
        <form className={styles.signup_form} action={verifyEmail}>
          {/* <input className="input" name="name" placeholder="Name" /> */}
          <label htmlFor="email">Email</label>
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Enter your email address.."
          />
          {/* <input
            className="input"
            name="password"
            type="password"
            placeholder="Password"
          /> */}
          <button className="button" type="submit">
            Verify your email
          </button>
        </form>
        <div className={styles.signin}>
          Have an account? <Link href={'/api/auth/signin'}>Sign in</Link>
        </div>
      </div>
    </div>
  )
}
