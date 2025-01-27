"use client"

import LoadingSpinner from "@/components/loading-spinner"
import { client } from "@/lib/client"
import { useQuery } from "@tanstack/react-query"

export const DashboardSummary = () => {
  const { data, isPending: isEventCategoriesLoading } = useQuery({
    queryFn: async () => {
      const res = await client.category.getEventCategories.$get()
      return await res.json()
    },
    queryKey: ["user-event-categories"],
  })
  if (isEventCategoriesLoading) {
    return (
      <div className="flex flex-1 items-center justify-center h-full w-full">
        <LoadingSpinner />
      </div>
    )
  }
  return (
    <ul className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {data?.categories.map((category) => (
        <li
          key={category.id}
          className="relative group z-10 transition-all duration-200 hover:-translate-y-0.5"
        >
          {/* {category} */}
          <div className="absolute z-0 inset-px rounded-lg bg-white" />
          <div className="absolute pointer-events-none z-0 inset-px rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md ring-1 ring-black/5">
            <div className="relative p-6 z-10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="size-12 rounded-full"
                  style={{
                    backgroundColor: category.color
                      ? `#${category.color.toString(16).padStart(6, "0")}`
                      : "#f3f4f6",
                  }}
                />
                {category.name}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
