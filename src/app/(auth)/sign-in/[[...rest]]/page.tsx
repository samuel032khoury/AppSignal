"use client"

import { SignIn } from "@clerk/nextjs"
import { useSearchParams } from "next/navigation"

const Page = () => {
  const searchParams = useSearchParams()
  const intent = searchParams.get("intent")

  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignIn
        signUpFallbackRedirectUrl={
          intent ? `/welcome?intent=${intent}` : "/welcome"
        }
        signUpForceRedirectUrl={
          intent ? `/welcome?intent=${intent}` : "/welcome"
        }
        fallback={intent ? `/dashboard?intent=${intent}` : "/dashboard"}
        forceRedirectUrl={intent ? `/dashboard?intent=${intent}` : "/dashboard"}
      />
    </div>
  )
}

export default Page
