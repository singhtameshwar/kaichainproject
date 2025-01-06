import { Button } from "@/components/ui/button"
import Link from "next/link";

export const TOKEN=()=> {
  return (
    <div className="min-h-[50vh] flex items-center  justify-center  text-black">
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-2xl font-serif mb-6">
        Ready to deploy your KRC20 Token?
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
        Try building your KRC20 Token in less than a minute. You can try on Test Network before to go live.
        </p>
        <Button 
          className="border border-[#F5A623] text-[#F5A623] bg-white font-medium px-8 py-4 h-auto text-lg"
        >
      <Link href="/create-token">Create KRC20 Token</Link>
        </Button>
      </div>
    </div>
  )
}
export default TOKEN;