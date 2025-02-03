"use client"

import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import { client } from "@/lib/client"
import { useUser } from "@clerk/nextjs"
import { useMutation } from "@tanstack/react-query"
import { CheckIcon, X } from "lucide-react"
import { useRouter } from "next/navigation"

const Page = () => {
  const { user } = useUser()
  const router = useRouter()

  const FREE_INCLUDED_FEATURES = [
    "100 real-time events per month",
    "3 event categories",
  ]
  const FREE_EXCLUDED_FEATURES = [
    "Advanced analytics and insights",
    "Priority support",
  ]
  const PREMIUM_INCLUDED_FEATURES = [
    "10,000 real-time events per month",
    "10 event categories",
    "Advanced analytics and insights",
    "Priority support",
  ]

  const { mutate: createCheckoutSession } = useMutation({
    mutationFn: async () => {
      const res = await client.payment.createCheckoutSession.$post()
      return await res.json()
    },
    onSuccess: ({ url }) => {
      if (url) router.push(url)
    },
  })

  const handleStartFree = () => {
    if (user) {
      router.push("/dashboard")
    } else {
      router.push("/sign-in")
    }
  }

  const handleStartPremium = () => {
    if (user) {
      createCheckoutSession()
    } else {
      router.push("/sign-in?intent=upgrade")
    }
  }

  return (
    <div className="bg-brand-25 py-24 sm:py-32">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <Heading>See Our Plans</Heading>
          <p className="mt-6 text-base/7 text-gray-600 text-center text-pretty">
            Get started with our{" "}
            <span className="font-semibold">free plan</span> and experience the
            core features at no cost. Need more? Upgrade anytime with a{" "}
            <span className="font-semibold">one-time premium payment</span>—no
            subscriptions, no hidden fees!
          </p>
        </div>

        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 xl:mx-0 xl:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-heading font-semibold tracking-tight text-gray-700 drop-shadow-sm">
              Free
            </h3>

            <p className="mt-6 text-base/7 text-gray-600">
              Explore essential features with zero commitment.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-brand-600">
                What&apos;s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {FREE_INCLUDED_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <CheckIcon className="h-6 w-5 flex-none text-brand-700" />
                  {feature}
                </li>
              ))}
              {FREE_EXCLUDED_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3 text-gray-400">
                  <X className="h-6 w-5 flex-none text-brand-700" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 xl:w-full xl:max-w-md xl:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs py-8">
                <p className="text-base font-semibold text-gray-600">
                  Start Using Now
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $0.00
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>

                <Button onClick={handleStartFree} className="mt-6 px-20">
                  Start Free
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 xl:mx-0 xl:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent text-3xl font-heading font-semibold tracking-tight drop-shadow-sm">
              Premium
            </h3>

            <p className="mt-6 text-base/7 text-gray-600">
              Invest once in AppSignal and transform how you monitor your SaaS
              forever. Get instant alerts, track critical metrics and never miss
              a beat in your business growth.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-brand-600">
                What&apos;s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {PREMIUM_INCLUDED_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <CheckIcon className="h-6 w-5 flex-none text-brand-700" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 xl:w-full xl:max-w-md xl:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs py-8">
                <p className="text-base font-semibold text-gray-600">
                  Pay Once, Own Forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $39.99
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>

                <Button onClick={handleStartPremium} className="mt-6 px-20">
                  Get Premium Plan
                </Button>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Secure payment. Start monitoring in minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Page
