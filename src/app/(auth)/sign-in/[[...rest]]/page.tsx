import { SignIn } from "@clerk/nextjs"

const Page = async () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignIn fallbackRedirectUrl={"/dashboard"} />
    </div>
  )
}

export default Page
