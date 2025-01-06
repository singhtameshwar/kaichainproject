import { RabbitIcon as Fox, FileSearch, Rocket } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const HOWITWORKS=()=> {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How it works</h2>
        <p className="text-lg text-black  mb-2">
          Create KRC20 Token in less than a minute.
        </p>
        <p className="text-lg text-black">
          Easily deploy Smart Contract for a Standard KRC20 Token.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="p-6">
          <CardContent className="flex flex-col items-center text-center pt-6">
            <div className="w-12 h-12 mb-6 text-black">
              <Fox className="w-full h-full" />
            </div>
            <h3 className="text-xl font-bold mb-4">Install MetaMask</h3>
            <p className="text-muted-foreground">
              You need to have installed with an amount of KEC to pay for contract deployment.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardContent className="flex flex-col items-center text-center pt-6">
            <div className="w-12 h-12 mb-6">
              <FileSearch className="w-full h-full" />
            </div>
            <h3 className="text-xl font-bold mb-4">Enter Details</h3>
            <p className="text-muted-foreground">
              Enter your preferred Token name and symbol. Choose your supply and Token type.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardContent className="flex flex-col items-center text-center pt-6">
            <div className="w-12 h-12 mb-6">
              <Rocket className="w-full h-full" />
            </div>
            <h3 className="text-xl font-bold mb-4">Deploy your Token</h3>
            <p className="text-muted-foreground">
              Confirm your transaction using MetaMask. Once deployed your Token is ready to use.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button 
          variant="outline" 
          className="text-[#FF9800] border-[#FF9800]  hover:bg-primary hover:text-primary-foreground"
        >
          GET STARTED
        </Button>
      </div>
    </section>
  )
}
export default HOWITWORKS;

