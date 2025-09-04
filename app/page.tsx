"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the default language route (Vietnamese)
    router.replace('/vi')
  }, [router])

  return null
} 