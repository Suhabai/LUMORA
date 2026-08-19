"use client"

import { useState, useEffect } from "react"

/**
 * useMounted — Returns true only after the component has mounted on the client.
 * Use to guard dynamic rendering that must match between SSR and CSR.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
