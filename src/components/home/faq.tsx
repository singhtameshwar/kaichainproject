'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faq-data";

export const FAQ = () => {
    return (
        <div className="bg-black py-10 p-4 md:p-8">
            <h2 className="text-[#FF9D42] text-center text-2xl font-semibold mb-8">FAQ</h2>
            <div className="max-w-6xl mx-auto space-y-4 mb-8">
                {faqData?.intro?.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-6">
                        <h3 className="text-[#FF9D42] text-xl font-semibold mb-2">
                            {item.title || "No Title Available"}
                        </h3>
                        <p className="text-gray-800">
                            {item.content || "No Content Available"}
                        </p>
                    </div>
                ))}
            </div>
            <div className="max-w-6xl mx-auto">
                <Accordion type="single" collapsible>
                    {faqData?.sections?.map((section, sectionIndex) => (
                        <AccordionItem key={sectionIndex} value={`section-${sectionIndex}`}>
                            <AccordionTrigger className="text-white text-xl">
                                {section.title || "No Section Title"}
                            </AccordionTrigger>
                            <AccordionContent>
                                <Accordion type="single" collapsible>
                                    {section?.items?.map((item, itemIndex) => (
                                        <AccordionItem
                                            key={item.id}
                                            value={`item-${sectionIndex}-${itemIndex}`}
                                        >
                                            <AccordionTrigger className="bg-[#FF9D42] hover:bg-[#FF9D42] hover:brightness-95 text-white p-4 rounded-lg">
                                                {item.question || "No Question"}
                                            </AccordionTrigger>
                                            <AccordionContent className="bg-[#FF9D42] mt-[2px] text-white p-4 rounded-b-lg">
                                                {item?.answer?.map((answerItem, idx) => (
                                                    <p key={idx}>{answerItem.content || "No Answer Content"}</p>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className="max-w-6xl mx-auto bg-white mt-10 rounded-lg p-6">
                <h3 className="text-[#FF9D42] text-xl font-semibold mb-2">
                    {faqData?.disclaimer?.title || "No Disclaimer Title"}
                </h3>
                <p className="text-gray-800">
                    {faqData?.disclaimer?.content || "No Disclaimer Content"}
                </p>
            </div>
        </div>
    );
};

export default FAQ;
