import { Dashboard } from "@/components/dashboard"
import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { DashboardSummary } from "./dashboard-summary"
import CreateEventCategoryModal from "@/components/create-event-category-modal"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { createCheckoutSession } from "@/lib/stripe"
import PaymentSuccessModal from "@/components/payment-success-modal"
interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const Page = async ({ searchParams }: PageProps) => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  const intent = searchParams.intent

  if (!user) {
    redirect(intent ? `/welcome?intent=${intent}` : "/welcome")
  }

  if (intent === "upgrade") {
    if (user.plan === "FREE") {
      const session = await createCheckoutSession({
        userEmail: user.email,
        userId: user.id,
      })

      if (session.url) redirect(session.url)
    } else {
      // TODO: PURCHASE RESTORE, THANK YOU MODAL
    }
  }

  const paymentSuccess = searchParams.success

  return (
    <>
      {paymentSuccess ? <PaymentSuccessModal /> : null}
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
    </>
  )
}

export default Page
