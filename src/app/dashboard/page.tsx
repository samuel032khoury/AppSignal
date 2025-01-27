import { Dashboard } from "@/components/dashboard"
import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { DashboardSummary } from "./dashboard-summary"

const Page = async () => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }
  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) {
    redirect("/welcome")
  }

  return (
    <Dashboard title={"Dashboard"} backButtonDisplaying={true}>
      <DashboardSummary />
    </Dashboard>
  )
}

export default Page
