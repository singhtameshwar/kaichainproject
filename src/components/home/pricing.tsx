"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, Info } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface TokenRequirement {
    name: string
    amount: string
    properties: {
        name: string
        value: boolean
        badge?: "Fixed" | "None" | "Unstoppable"
    }[]
}

const tokens: TokenRequirement[] = [
    {
        name: "SimpleKRC20",
        amount: "0.03",
        properties: [
            { name: "KRC20 Compliant", value: true },
            { name: "Verified Source Code", value: true },
            { name: "Customizable Decimals", value: false },
            { name: "Remove Copyright", value: false },
            { name: "Supply Type", value: true, badge: "Fixed" },
            { name: "Access Type", value: true, badge: "None" },
            { name: "Transfer Type", value: true, badge: "Unstoppable" },
            { name: "Burnable", value: false },
            { name: "Mintable", value: false },
            { name: "Deflationary", value: false },
            { name: "Taxable", value: false },
            { name: "ERC1363", value: false },
            { name: "Token Recover", value: false },
        ],
    },
    {
        name: "StandardKRC20",
        amount: "0.07",
        properties: [
            { name: "KRC20 Compliant", value: true },
            { name: "Verified Source Code", value: true },
            { name: "Customizable Decimals", value: true },
            { name: "Remove Copyright", value: true },
            { name: "Supply Type", value: true, badge: "Fixed" },
            { name: "Access Type", value: true, badge: "None" },
            { name: "Transfer Type", value: true, badge: "Unstoppable" },
            { name: "Burnable", value: false },
            { name: "Mintable", value: false },
            { name: "Deflationary", value: false },
            { name: "Taxable", value: false },
            { name: "ERC1363", value: false },
            { name: "Token Recover", value: false },
        ],
    },
    {
        name: "BurnableKRC20",
        amount: "0.095",
        properties: [
            { name: "KRC20 Compliant", value: true },
            { name: "Verified Source Code", value: true },
            { name: "Customizable Decimals", value: true },
            { name: "Remove Copyright", value: true },
            { name: "Supply Type", value: true, badge: "Fixed" },
            { name: "Access Type", value: true, badge: "None" },
            { name: "Transfer Type", value: true, badge: "Unstoppable" },
            { name: "Burnable", value: true },
            { name: "Mintable", value: false },
            { name: "Deflationary", value: false },
            { name: "Taxable", value: false },
            { name: "ERC1363", value: false },
            { name: "Token Recover", value: false },
        ],
    },
    {
        name: "BurnableKRC20",
        amount: "0.095",
        properties: [
            { name: "KRC20 Compliant", value: true },
            { name: "Verified Source Code", value: true },
            { name: "Customizable Decimals", value: true },
            { name: "Remove Copyright", value: true },
            { name: "Supply Type", value: true, badge: "Fixed" },
            { name: "Access Type", value: true, badge: "None" },
            { name: "Transfer Type", value: true, badge: "Unstoppable" },
            { name: "Burnable", value: true },
            { name: "Mintable", value: false },
            { name: "Deflationary", value: false },
            { name: "Taxable", value: false },
            { name: "ERC1363", value: false },
            { name: "Token Recover", value: false },
        ],
    },
    {
        name: "BurnableKRC20",
        amount: "0.095",
        properties: [
            { name: "KRC20 Compliant", value: true },
            { name: "Verified Source Code", value: true },
            { name: "Customizable Decimals", value: true },
            { name: "Remove Copyright", value: true },
            { name: "Supply Type", value: true, badge: "Fixed" },
            { name: "Access Type", value: true, badge: "None" },
            { name: "Transfer Type", value: true, badge: "Unstoppable" },
            { name: "Burnable", value: true },
            { name: "Mintable", value: false },
            { name: "Deflationary", value: false },
            { name: "Taxable", value: false },
            { name: "ERC1363", value: false },
            { name: "Token Recover", value: false },
        ],
    }, {
        name: "BurnableKRC20",
        amount: "0.095",
        properties: [
            { name: "KRC20 Compliant", value: true },
            { name: "Verified Source Code", value: true },
            { name: "Customizable Decimals", value: true },
            { name: "Remove Copyright", value: true },
            { name: "Supply Type", value: true, badge: "Fixed" },
            { name: "Access Type", value: true, badge: "None" },
            { name: "Transfer Type", value: true, badge: "Unstoppable" },
            { name: "Burnable", value: true },
            { name: "Mintable", value: false },
            { name: "Deflationary", value: false },
            { name: "Taxable", value: false },
            { name: "ERC1363", value: false },
            { name: "Token Recover", value: false },
        ],
    },
    {
        name: "BurnableKRC20",
        amount: "0.095",
        properties: [
            { name: "KRC20 Compliant", value: true },
            { name: "Verified Source Code", value: true },
            { name: "Customizable Decimals", value: true },
            { name: "Remove Copyright", value: true },
            { name: "Supply Type", value: true, badge: "Fixed" },
            { name: "Access Type", value: true, badge: "None" },
            { name: "Transfer Type", value: true, badge: "Unstoppable" },
            { name: "Burnable", value: true },
            { name: "Mintable", value: false },
            { name: "Deflationary", value: false },
            { name: "Taxable", value: false },
            { name: "ERC1363", value: false },
            { name: "Token Recover", value: false },
        ],
    },
    {
        name: "BurnableKRC20",
        amount: "0.095",
        properties: [
            { name: "KRC20 Compliant", value: true },
            { name: "Verified Source Code", value: true },
            { name: "Customizable Decimals", value: true },
            { name: "Remove Copyright", value: true },
            { name: "Supply Type", value: true, badge: "Fixed" },
            { name: "Access Type", value: true, badge: "None" },
            { name: "Transfer Type", value: true, badge: "Unstoppable" },
            { name: "Burnable", value: true },
            { name: "Mintable", value: false },
            { name: "Deflationary", value: false },
            { name: "Taxable", value: false },
            { name: "ERC1363", value: false },
            { name: "Token Recover", value: false },
        ],
    },
    {
        name: "BurnableKRC20",
        amount: "0.095",
        properties: [
            { name: "KRC20 Compliant", value: true },
            { name: "Verified Source Code", value: true },
            { name: "Customizable Decimals", value: true },
            { name: "Remove Copyright", value: true },
            { name: "Supply Type", value: true, badge: "Fixed" },
            { name: "Access Type", value: true, badge: "None" },
            { name: "Transfer Type", value: true, badge: "Unstoppable" },
            { name: "Burnable", value: true },
            { name: "Mintable", value: false },
            { name: "Deflationary", value: false },
            { name: "Taxable", value: false },
            { name: "ERC1363", value: false },
            { name: "Token Recover", value: false },
        ],
    },
    {
        name: "BurnableKRC20",
        amount: "0.095",
        properties: [
            { name: "KRC20 Compliant", value: true },
            { name: "Verified Source Code", value: true },
            { name: "Customizable Decimals", value: true },
            { name: "Remove Copyright", value: true },
            { name: "Supply Type", value: true, badge: "Fixed" },
            { name: "Access Type", value: true, badge: "None" },
            { name: "Transfer Type", value: true, badge: "Unstoppable" },
            { name: "Burnable", value: true },
            { name: "Mintable", value: false },
            { name: "Deflationary", value: false },
            { name: "Taxable", value: false },
            { name: "ERC1363", value: false },
            { name: "Token Recover", value: false },
        ],
    },
    {
        name: "BurnableKRC20",
        amount: "0.095",
        properties: [
            { name: "KRC20 Compliant", value: true },
            { name: "Verified Source Code", value: true },
            { name: "Customizable Decimals", value: true },
            { name: "Remove Copyright", value: true },
            { name: "Supply Type", value: true, badge: "Fixed" },
            { name: "Access Type", value: true, badge: "None" },
            { name: "Transfer Type", value: true, badge: "Unstoppable" },
            { name: "Burnable", value: true },
            { name: "Mintable", value: false },
            { name: "Deflationary", value: false },
            { name: "Taxable", value: false },
            { name: "ERC1363", value: false },
            { name: "Token Recover", value: false },
        ],
    },
    {
        name: "BurnableKRC20",
        amount: "0.095",
        properties: [
            { name: "KRC20 Compliant", value: true },
            { name: "Verified Source Code", value: true },
            { name: "Customizable Decimals", value: true },
            { name: "Remove Copyright", value: true },
            { name: "Supply Type", value: true, badge: "Fixed" },
            { name: "Access Type", value: true, badge: "None" },
            { name: "Transfer Type", value: true, badge: "Unstoppable" },
            { name: "Burnable", value: true },
            { name: "Mintable", value: false },
            { name: "Deflationary", value: false },
            { name: "Taxable", value: false },
            { name: "ERC1363", value: false },
            { name: "Token Recover", value: false },
        ],
    },
]

export const TOKENCROUSEL = () => {
    const plugin = React.useRef(
        Autoplay({
            delay: 900,

        })
    );
    return (

        <div className="w-full bg-black flex items-center justify-center p-4">
            <div className="w-full text-bold mx-auto">
                <h1 className="text-orange-500 text-4xl font-bold text-center mb-8">
                Pricing
                </h1>
                <h2 className="text-orange-500 text-xl text-center">
                Choose between 12 different Token types.
                </h2>
                <h2 className="text-orange-500 text-center mb-8">
                    What are your Token requirements?
                </h2>
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {tokens.map((token, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="bg-white rounded-lg p-6">
                                    <div className="text-center mb-6">
                                        <h3 className="text-lg font-medium mb-4">{token.name}</h3>
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="text-4xl font-light text-orange-500">
                                                {token.amount}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-sm">KEC</span>
                                                <Info className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        {token.properties.map((prop, propIndex) => (
                                            <div
                                                key={propIndex}
                                                className="flex items-center justify-between"
                                            >
                                                <span className="text-sm">{prop.name}</span>
                                                <div className="flex items-center gap-2">
                                                    {prop.badge && (
                                                        <span
                                                            className={`text-xs px-2 py-0.5 rounded ${prop.badge === "Fixed"
                                                                ? "bg-orange-100 text-orange-500"
                                                                : prop.badge === "None"
                                                                    ? "bg-gray-100 text-gray-500"
                                                                    : "bg-green-100 text-green-500"
                                                                }`}
                                                        >
                                                            {prop.badge}
                                                        </span>
                                                    )}
                                                    {prop.value ? (
                                                        <Check className="w-4 h-4 text-green-500" />
                                                    ) : (
                                                        <X className="w-4 h-4 text-red-500" />
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="w-full mt-6 bg-black text-white hover:bg-black/90">
                                        CREATE
                                    </Button>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden" />
                    <CarouselNext className="hidden" />
                </Carousel>
                <div className="flex justify-center gap-2 mt-8">
                    {tokens.map((_, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 rounded-full bg-gray-500 opacity-50"
                        />
                    ))}
                </div>
                <div className="pt-5">
                <h2 className="text-orange-500 text-xl text-center">
                GAS fee will be added to final amount
                </h2>
                </div>
            </div>
        </div>
    )
}
export default TOKENCROUSEL;