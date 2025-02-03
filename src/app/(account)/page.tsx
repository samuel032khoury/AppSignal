import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { Dashboard } from "@/components/dashboard"
import UpgradePageContent from "../upgrade/upgrade-page-content"

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
    <Dashboard title="Pro Membership">
      <UpgradePageContent plan={user.plan} />
    </Dashboard>
  )
}

export default Page
