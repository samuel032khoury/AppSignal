import CreateEventCategoryModal from "@/components/create-event-category-modal"
import { Button } from "@/components/ui/button"
import Card from "@/components/ui/card"
import { client } from "@/lib/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const DashboardEmptyState = () => {
  const queryClient = useQueryClient()

  const { mutate: insertQuickstartCategories, isPending } = useMutation({
    mutationFn: async () => {
      await client.category.insertQuickstartCategories.$post()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-event-categories"] })
    },
  })

  return (
    <Card className="flex flex-1 flex-col items-center justify-center rounded-2xl text-center p-6">
      <div className="flex justify-center w-full">
        <p className="text-6xl -mt-32">🈳</p>
      </div>
      <h1 className="mt-2 text-xl/8 font-medium tracking-tight text-gray-900">
        No Event Categories Yet
      </h1>
      <p className="text-sm/6 text-gray-600 max-w-prose mt-2 mb-8">
        Start tracking events by creating your first category.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <Button
          variant={"outline"}
          className="flex items-center space-x-2 w-full md:w-auto"
          onClick={() => insertQuickstartCategories()}
          disabled={isPending}
        >
          <span className="size-5">🚀</span>
          <span>{isPending ? "Creating..." : "Quickstart"}</span>
        </Button>
        <CreateEventCategoryModal containerClassName="w-full md:w-auto">
          <Button className="flex items-center space-x-2 w-full md:w-auto">
            Add Category
          </Button>
        </CreateEventCategoryModal>
      </div>
    </Card>
  )
}
