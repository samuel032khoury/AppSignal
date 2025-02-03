"use client"

import { client } from "@/lib/client"
import { Plan } from "@prisma/client"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"

const UpgradePageContent = ({ plan }: { plan: Plan }) => {
  const router = useRouter()
  const {} = useMutation({
    mutationFn: async () => {
      const res = await client.payment.createCheckoutSession.$post()
    },
  })
  return <div></div>
}

export default UpgradePageContent
