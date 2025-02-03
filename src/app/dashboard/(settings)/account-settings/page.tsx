import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import DiscordSettings from "./discord-settings"
import { Dashboard } from "@/components/dashboard"
import { db } from "@/lib/db"

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
    <Dashboard title="Account Settings">
      <DiscordSettings discordId={user.discordId ?? ""} />
    </Dashboard>
  )
}

export default Page
