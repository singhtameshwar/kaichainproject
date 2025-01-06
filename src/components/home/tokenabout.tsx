import { Button } from "@/components/ui/button"

export const TOKENABOUT=()=> {
  return (
    <div className="min-h-[50vh] flex items-center border border-black border-t-[#F5A623] justify-center bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-2xl font-serif mb-6">
        Need a custom development?
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
        Open to getting in touch with awesome people and projects.
        </p>
        <Button 
          className="border border-[#F5A623] text-[#F5A623]  bg-black font-medium px-8 py-4 h-auto text-lg"
        >
          LET US KNOW
        </Button>
      </div>
    </div>
  )
}
export default TOKENABOUT;