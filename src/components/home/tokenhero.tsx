import { Button } from "@/components/ui/button"

export const TOKENHERO=()=> {
  return (
    <div className="min-h-[50vh] flex items-center border border-black border-t-[#F5A623] justify-center bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-2xl font-serif mb-6">
          Ready to deploy your KRC20 Token?
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Try building your KRC20 Token in less than a minute. You can try on Test Network before to go live.
        </p>
        <Button 
          className="bg-[#F5A623] hover:bg-[#E69612] text-white font-medium px-8 py-4 h-auto text-lg"
        >
          CREATE KRC20 TOKEN
        </Button>
      </div>
    </div>
  )
}
export default TOKENHERO;