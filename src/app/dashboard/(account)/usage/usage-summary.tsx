"use client"

import Card from "@/components/ui/card"
import { client } from "@/lib/client"
import { Plan } from "@prisma/client"
import { useMutation, useQuery } from "@tanstack/react-query"
import { format } from "date-fns"
import { BarChart } from "lucide-react"
import { useRouter } from "next/navigation"

const UsageSummary = ({ plan }: { plan: Plan }) => {
  const router = useRouter()
  const { mutate: createCheckoutSession } = useMutation({
    mutationFn: async () => {
      const res = await client.payment.createCheckoutSession.$post()
      return await res.json()
    },
    onSuccess: ({ url }) => {
      if (url) router.push(url)
    },
  })

  const { data: usageData, isPending } = useQuery({
    queryKey: ["usage"],
    queryFn: async () => {
      const res = await client.project.getUsage.$get()
      return await res.json()
    },
  })

  return (
    <div className="max-w-3xl flex flex-col gap-8">
      <div>
        <h1 className="mt-2 text-xl/8 font-medium tracking-tight text-gray-900">
          {plan === "PREMIUM" ? "Plan: Premium" : "Plan: Free"}
        </h1>
        <p className="text-sm/6 text-gray-600 max-w-prose">
          {plan === "PREMIUM" ? (
            "Thank you for supporting AppSignal. Find your increased usage limits below."
          ) : (
            <>
              Get access to more events, categories and premium support with a{" "}
              <span
                onClick={() => createCheckoutSession()}
                className="inline cursor-pointer text-brand-600"
              >
                premium plan.
              </span>
            </>
          )}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-2 border-brand-700">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="text-sm/6 font-medium">Total Events Posted</p>
            <BarChart className="size-4 text-muted-foreground" />
          </div>

          <div>
            <p className="text-2xl font-bold">
              {isPending ? (
                <>
                  <span className="animate-pulse rounded-sm w-8 h-6 bg-gray-200 inline-block" />{" "}
                  of{" "}
                  <span className="animate-pulse rounded-sm w-10 h-6 bg-gray-200 inline-block" />
                </>
              ) : (
                <>
                  {usageData?.eventsUsed || 0} of{" "}
                  {usageData?.eventsLimit?.toLocaleString() || 0}
                </>
              )}
            </p>
            <p className="text-xs/5 text-muted-foreground">
              Events posted in this period
            </p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="text-sm/6 font-medium">Active Event Categories</p>
            <BarChart className="size-4 text-muted-foreground" />
          </div>

          <div>
            <p className="text-2xl font-bold">
              {isPending ? (
                <>
                  <span className="animate-pulse rounded-sm w-8 h-6 bg-gray-200 inline-block" />{" "}
                  of{" "}
                  <span className="animate-pulse rounded-sm w-10 h-6 bg-gray-200 inline-block" />
                </>
              ) : (
                <>
                  {usageData?.categoriesUsed || 0} of{" "}
                  {usageData?.categoriesLimit?.toLocaleString() || 0}
                </>
              )}
            </p>
            <p className="text-xs/5 text-muted-foreground">
              Active categories created
            </p>
          </div>
        </Card>
      </div>

      <p className="text-sm text-gray-500 text-pretty">
        Usage will reset on{" "}
        {usageData?.resetDate ? (
          format(usageData.resetDate, "MMM d, yyyy")
        ) : (
          <span className="animate-pulse rounded-sm -mb-px w-16 h-4 bg-gray-200 inline-block" />
        )}{" "}
        {plan !== "PREMIUM" ? (
          <span
            onClick={() => createCheckoutSession()}
            className="inline cursor-pointer text-brand-600"
          >
            or upgrade now to increase your limit &rarr;
          </span>
        ) : null}
      </p>
    </div>
  )
}

export default UsageSummary
