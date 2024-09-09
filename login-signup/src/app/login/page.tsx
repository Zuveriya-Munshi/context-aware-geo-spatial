'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-hot-toast"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from '../styles/login.module.css'
import { FaEnvelope, FaLock } from 'react-icons/fa'

export default function LoginPage() {
  const router = useRouter()
  const [user, setUser] = useState({ email: "", password: "" })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const onLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/login", user)
      console.log("Login success", response.data)
      router.push('/profile')
    } catch (error) {
      console.log("Signup failed")
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login Form</h1>
        <hr />
        <div className={styles.formGroup}>
          
        <div className={styles.inputContainer}>
            <FaEnvelope className={styles.icon} />
            <input
              className={styles.input}
              id='email'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder='Enter your email'
              type="text"
            />
          </div>

          <div className={styles.inputContainer}>
            <FaLock className={styles.icon} />
            <input
              className={styles.input}
              id='password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder='Enter your password'
              type="password"
            />
            </div>

          <button
            onClick={onLogin}
            className={styles.button}
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "Please Fill the Values" : "Login"}
          </button>
        </div>

        <div className={styles.linkContainer}>
          <Link href="/signup" className={styles.signinLink}>Visit Signup page</Link>
        </div>
      </div>
    </div>
  )
}
