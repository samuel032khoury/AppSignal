"use client"

import { ReactNode } from "react"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"
import { Heading } from "./heading"
import { useRouter } from "next/navigation"

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
  const router = useRouter()
  return (
    <section className="flex flex-col flex-1 h-full w-full">
      <div className="p-6 sm:p-8 border-b border-gray-200">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-8">
            {backButtonDisplaying ? (
              <Button
                className={"w-fit bg-white"}
                variant={"outline"}
                onClick={() => router.push("/dashboard")}
              >
                <ArrowLeft className="size-4" />
              </Button>
            ) : null}
            <Heading>{title}</Heading>
          </div>
          {addOnModal ? (
            <div className="max-md:w-full">{addOnModal}</div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6 sm:p-8 overflow-auto">
        {children}
      </div>
    </section>
  )
}
