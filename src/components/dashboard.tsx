import { ReactNode } from "react"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"
import { Heading } from "./heading"

interface DashboardPageProps {
  title: string
  children?: ReactNode
  backButtonDisplaying?: boolean
  addOnModal?: ReactNode
}

export const Dashboard = ({
  title,
  children,
  backButtonDisplaying,
  addOnModal,
}: DashboardPageProps) => {
  return (
    <section className="flex flex-col flex-1 h-full w-full">
      <div className="p-6 sm:p-8 flex justify-between border-b border-gray-200">
        <div className="flex sm:flex-row sm:items-center gap-y-2 gap-x-8">
          {backButtonDisplaying ? (
            <Button className={"w-fit bg-white"} variant={"outline"}>
              <ArrowLeft className="size-4" />
            </Button>
          ) : null}
          <Heading>{title}</Heading>
          {addOnModal ? <div>{addOnModal}</div> : null}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6 sm:p-8 overflow-auto">
        {children}
      </div>
    </section>
  )
}
