"use client"

import { useEffect } from "react"

export default function ScrollToTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [])
  return null
}
