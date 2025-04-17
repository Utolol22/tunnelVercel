import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-rouge-liberation text-blanc-purete hover:bg-rouge-liberation/90",
        primary: "bg-rouge-liberation text-blanc-purete hover:bg-rouge-liberation/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-6 text-base",
        xl: "h-14 rounded-md px-8 text-lg",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
      },
      roundness: {
        default: "rounded-md",
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      fullWidthMobile: {
        true: "w-full sm:w-auto",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
      roundness: "default",
      fullWidthMobile: false,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  badge?: {
    text: string
    color: string
  }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, roundness, fullWidthMobile, badge, children, ...props }, ref) => {
    return (
      <div className="relative inline-block group">
        {badge && (
          <div
            className={`absolute -top-8 left-1/2 transform -translate-x-1/2 ${badge.color} text-noir-profond text-xs font-bold py-1 px-3 rounded-full whitespace-nowrap`}
          >
            {badge.text}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-yellow-400"></div>
          </div>
        )}
        <button
          className={cn(buttonVariants({ variant, size, animation, roundness, fullWidthMobile, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      </div>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
