import { addMonths, startOfMonth } from "date-fns"
import { router } from "../__internals/router"
import { FREE_QUOTA, PREMIUM_QUOTA } from "@/config"
import { db } from "@/lib/db"
import { privateProcedure } from "../procedures"

export const projectRouter = router({
  getUsage: privateProcedure.query(async ({ c, ctx }) => {
    const { user } = ctx

    const currentPeriod = startOfMonth(new Date())

    const quota = await db.quota.findFirst({
      where: {
        userId: user.id,
        year: currentPeriod.getFullYear(),
        month: currentPeriod.getMonth() + 1,
      },
    })

    const eventCount = quota?.count ?? 0

    const categoryCount = await db.eventCategory.count({
      where: { userId: user.id },
    })

    const limits = user.plan === "PREMIUM" ? PREMIUM_QUOTA : FREE_QUOTA

    const resetDate = addMonths(currentPeriod, 1)

    return c.superjson({
      categoriesUsed: categoryCount,
      categoriesLimit: limits.maxEventCategories,
      eventsUsed: eventCount,
      eventsLimit: limits.maxEventsPerMonth,
      resetDate,
    })
  }),
})
