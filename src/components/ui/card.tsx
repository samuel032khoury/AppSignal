import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  contentClassName?: string
}

const Card = ({
  className,
  contentClassName,
  children,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-lg bg-gray-50 text-card-foreground",
        className
      )}
      {...props}
    >
      <div className={cn("relative z-10 p-6", contentClassName)}>
        {children}
      </div>
      <div className={"absolute z-0 inset-px rounded-lg bg-white"} />
      <div
        className={
          "absolute z-0 inset-px rounded-lg shadow-sm ring-1 ring-black/5 pointer-events-none"
        }
      />
    </div>
  )
}

export default Card
