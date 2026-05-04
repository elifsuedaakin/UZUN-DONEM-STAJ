import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)} //titreme efekti 
      {...props} //dışardan gelen her şeyi bu div e geçiriyoruz 
    />
  )
}

export { Skeleton }
