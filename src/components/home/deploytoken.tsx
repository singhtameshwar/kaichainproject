import { Button } from "@/components/ui/button"

export const TOKEN=()=> {
  return (
    <div className="min-h-[50vh] flex items-center  justify-center  text-black">
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-2xl font-serif mb-6">
        Ready to deploy your KRC20 Token?
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
        Ready to deploy your KRC20 Token?
        </p>
        <Button 
          className="border border-[#F5A623] text-[#F5A623] bg-white font-medium px-8 py-4 h-auto text-lg"
        >
          CREATE KRC20 TOKEN
        </Button>
      </div>
    </div>
  )
}
export default TOKEN;