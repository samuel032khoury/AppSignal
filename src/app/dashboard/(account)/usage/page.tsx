import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import UsageSummary from "./usage-summary"
import { db } from "@/lib/db"
import { Dashboard } from "@/components/dashboard"

const Page = async () => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) {
    redirect("/sign-in")
  }

  return (
    <Dashboard title="Account Usage">
      <UsageSummary plan={user.plan} />
    </Dashboard>
  )
}

export default Page
