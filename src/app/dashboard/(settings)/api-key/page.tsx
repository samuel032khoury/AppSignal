import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Dashboard } from "@/components/dashboard"
import { db } from "@/lib/db"
import ApiKeySettings from "./api-key-settings"
import { use } from "react"

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
    <Dashboard title="API Key">
      <ApiKeySettings apiKey={user.apiKey} />
    </Dashboard>
  )
}

export default Page
