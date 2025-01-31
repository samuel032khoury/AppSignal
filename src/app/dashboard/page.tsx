import { Dashboard } from "@/components/dashboard"
import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { DashboardSummary } from "./dashboard-summary"
import CreateEventCategoryModal from "@/components/create-event-category-modal"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

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
    <Dashboard
      title={"Dashboard"}
      backButtonDisplaying={false}
      addOnModal={
        <CreateEventCategoryModal>
          <Button className="max-md:w-full">
            <PlusIcon className="size-4 mr-2" />
            Add Category
          </Button>
        </CreateEventCategoryModal>
      }
    >
      <DashboardSummary />
    </Dashboard>
  )
}

export default Page
