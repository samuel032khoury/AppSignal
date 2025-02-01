"use client"

import { EventCategory } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import CategoryEmptyState from "./category-empty-state"

interface CategoryPageContentProps {
  hasEvents: boolean
  category: EventCategory
}

const CategoryPageContent = ({
  hasEvents: initialHasEvents,
  category,
}: CategoryPageContentProps) => {
  const { data: pollingData } = useQuery({
    queryKey: ["category", category.name, "hasEvents"],
    initialData: { hasEvents: initialHasEvents },
  })
  if (!pollingData.hasEvents) {
    return <CategoryEmptyState categoryName={category.name } />
  }
}

export default CategoryPageContent
