import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"

const Navbar = async () => {
  const user = await currentUser()
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold text-lg/7">
            App<span className="text-brand-700">Signal</span>
          </Link>
          <div>
            {user ? (
              <div className="h-full flex items-center space-x-4">
                <SignOutButton>
                  <Button size="sm" variant={"ghost"}>
                    Sign Out
                  </Button>
                </SignOutButton>

                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center md:gap-2 px-3",
                  })}
                >
                  Dashboard <ArrowRight className="size-4" />
                </Link>
              </div>
            ) : (
              <div className="h-full flex items-center space-x-2 md:space-x-4">
                <Link
                  href={"/pricing"}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href={"/sign-in"}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign In
                </Link>
                <div className="h-8 w-px bg-gray-200" />
                <Link
                  href={"/sign-up"}
                  className={buttonVariants({
                    size: "sm",
                    className:
                      "flex items-center min-w-20 gap-[0.3rem] md:gap-1.5 px-3",
                  })}
                >
                  <span>Sign Up</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
