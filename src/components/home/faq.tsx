'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export const FAQ=()=> {
    return (
        <div className="bg-black py-10  p-4 md:p-8">
            <h2 className="text-[#FF9D42] text-center text-2xl font-semibold mb-8">FAQ</h2>
            <div className="max-w-6xl mx-auto space-y-4 mb-8">
                <div className="bg-white rounded-lg p-6">
                    <h3 className="text-[#FF9D42] text-xl font-semibold mb-2">Token Generator</h3>
                    <p className="text-gray-800">
                        Create an KRC20 Token in less than a minute with the most trusted Smart Contract Generator for Kaichain Network. No login. No setup. No coding required.
                    </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                    <h3 className="text-[#FF9D42] text-xl font-semibold mb-2">The KRC20 Standard</h3>
                    <p className="text-gray-800">
                        KRC20 provides basic functionality to transfer tokens, as well as allow tokens to be approved so they can be spent by another on-chain third party.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-white text-xl">Token Features</AccordionTrigger>
                        <AccordionContent>
                            <Accordion type="single" collapsible className="space-y-4">
                                <AccordionItem value="supply" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What&apos;s the difference between 10k, Fixed, Capped and Unlimited Supply?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg space-y-6">
                                        <div>
                                            <h4 className="font-semibold mb-1">10k</h4>
                                            <p>Token supply will be 10,000. The entire token supply will be generated during deploy and sent to Token Owner wallet. You can&apos;t increase or reduce supply later.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">Fixed Supply</h4>
                                            <p>The entire token supply will be generated during deploy and sent to Token Owner wallet. You can&apos;t increase or reduce supply later.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">Capped Supply</h4>
                                            <p>You can define an initial supply to sent to Token Owner&apos;s wallet. You can increase or reduce supply later by minting or burning tokens (if allowed). You won&apos;t be able to generate more tokens than the defined supply cap.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">Unlimited Supply</h4>
                                            <p>You can define an initial supply to sent to Token Owner&apos;s wallet. You can increase or reduce supply later by minting or burning tokens (if allowed). You will be able to generate unlimited tokens without an upper limit.</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="transfer" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What&apos;s the difference between Unstoppable or Pausable Transfer?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                            
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="access" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What&apos;s the difference between None, Ownable and Role Based Access?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="mint" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        Who can mint or burn tokens?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                    
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="pause" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        Who can pause transfers?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="deflationary" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What is a deflationary token?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                        {/* Content will be visible when expanded */}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="taxable" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What is a taxable token?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                        {/* Content will be visible when expanded */}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="erc1363" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What is ERC1363 Token?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                       
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        
            <div className="max-w-6xl mx-auto">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-white text-xl">Token behavior </AccordionTrigger>
                        <AccordionContent>
                            <Accordion type="single" collapsible className="space-y-4">
                                <AccordionItem value="supply" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What&apos;s the difference between 10k, Fixed, Capped and Unlimited Supply?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg space-y-6">
                                        <div>
                                            <h4 className="font-semibold mb-1">10k</h4>
                                            <p>Token supply will be 10,000. The entire token supply will be generated during deploy and sent to Token Owner wallet. You can&apos;t increase or reduce supply later.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">Fixed Supply</h4>
                                            <p>The entire token supply will be generated during deploy and sent to Token Owner wallet. You can&apos;t increase or reduce supply later.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">Capped Supply</h4>
                                            <p>You can define an initial supply to sent to Token Owner&apos;s wallet. You can increase or reduce supply later by minting or burning tokens (if allowed). You won&apos;t be able to generate more tokens than the defined supply cap.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">Unlimited Supply</h4>
                                            <p>You can define an initial supply to sent to Token Owner&apos;s wallet. You can increase or reduce supply later by minting or burning tokens (if allowed). You will be able to generate unlimited tokens without an upper limit.</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="transfer" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What&apos;s the difference between Unstoppable or Pausable Transfer?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                    
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="access" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What&apos;s the difference between None, Ownable and Role Based Access?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                   
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="mint" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        Who can mint or burn tokens?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                    
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="pause" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        Who can pause transfers?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                    
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="deflationary" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What is a deflationary token?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                 
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="taxable" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What is a taxable token?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                    
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="erc1363" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What is ERC1363 Token?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                    
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="max-w-6xl mx-auto">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-white text-xl">kaichain Blockchain  and Ecosystem
                        </AccordionTrigger>
                        <AccordionContent>
                            <Accordion type="single" collapsible className="space-y-4">
                                <AccordionItem value="supply" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What&apos;s the difference between 10k, Fixed, Capped and Unlimited Supply?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg space-y-6">
                                        <div>
                                            <h4 className="font-semibold mb-1">10k</h4>
                                            <p>Token supply will be 10,000. The entire token supply will be generated during deploy and sent to Token Owner wallet. You can&apos;t increase or reduce supply later.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">Fixed Supply</h4>
                                            <p>The entire token supply will be generated during deploy and sent to Token Owner wallet. You can&apos;t increase or reduce supply later.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">Capped Supply</h4>
                                            <p>You can define an initial supply to sent to Token Owner&apos;s wallet. You can increase or reduce supply later by minting or burning tokens (if allowed). You won&apos;t be able to generate more tokens than the defined supply cap.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">Unlimited Supply</h4>
                                            <p>You can define an initial supply to sent to Token Owner&apos;s wallet. You can increase or reduce supply later by minting or burning tokens (if allowed). You will be able to generate unlimited tokens without an upper limit.</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="transfer" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What&apos;s the difference between Unstoppable or Pausable Transfer?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                        
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="access" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What&apos;s the difference between None, Ownable and Role Based Access?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                   
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="mint" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        Who can mint or burn tokens?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                    
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="pause" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        Who can pause transfers?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                   
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="deflationary" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What is a deflationary token?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                    
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="taxable" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What is a taxable token?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                    
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="erc1363" className="border-none">
                                    <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                        What is ERC1363 Token?
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                   
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="max-w-6xl mx-auto  bg-white mt-10 rounded-lg p-6">
                    <h3 className="text-[#FF9D42] text-xl font-semibold mb-2">DISCLAIMER</h3>
                    <p className="text-gray-800">
                    SmartContracts Tools and its company are free of any liability regarding Tokens built using Token Generator, and the use that is made of them. Tokens built on Token Generator, their projects, their teams, their use of Token (as well as anything related to Token) are in no way connected to SmartContracts Tools or its company.
                    Token source code is provided under MIT License. Source code has been tested with 100% coverage and continuously updated to reduce risk of bugs and to introduce language optimizations. Anyway the purchase of tokens involves a high degree of risk. Before acquiring tokens, it is recommended to carefully weight all the information and risks detailed in Token owner's Conditions.
                    </p>
                </div>
        </div>
    )
}
export default FAQ;