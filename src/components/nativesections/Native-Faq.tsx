
'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, PhoneCall , MessagesSquare } from "lucide-react";
import {
  CustomAccordion,
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/ui/faq-accordion";

const faqs = [
  {
    question: "What is native advertising?",
    answer: "Native advertising is a specialized type of advertisement that is created with the intent to seamlessly blend with the posted platform. The advantage of using these is that they provide more organic traffic and a non-disruptive experience to the audience.",
  },
  {
    question: "Which type of native advertising content works the best?",
    answer: "Native advertising seamlessly blends within platforms that feel natural. Therefore, informative articles, sponsored posts, and videos that provide value to the audience are likely to perform well. However, visual content such as images and infographics is also effective occasionally.",
  },
  {
    question: "What is the difference between native ads and traditional banner ads?",
    answer: "Traditional banner ads interrupt content consumption with a unique style. On the other hand, native materials blend with the surroundings. As a result, users perceive them as less disruptive and interact with them more naturally.",
  },
  {
    question: "How can agencies measure native advertising effectiveness?",
    answer: "Agencies measure native advertising effectiveness through various methods, such as key performance indicators (KPIs), including click-through rates, engagement metrics, conversion rates, and brand upliftment.",
  },
  {
    question: "When should a brand go with native advertising?",
    answer: "When brands want to enhance their reputation, foster trust, and benefit the audience. It also works particularly well for companies that want to build lasting relationships with their clients.",
  },
  {
    question: "What are the limitations of native advertising?",
    answer: "Native advertising is limited by platform policies, disclosure requirements, and content relevance. Poor alignment or restricted industries can reduce effectiveness and impact user trust if transparency is not maintained.",
  },
];

export function Faq() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5 md:px-20">
        
        {/* --- Main 2-Column Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Header + Accordion (8 Columns) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Header Section Inside Left Column */}
            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-regular text-primary tracking-tighter leading-none mb-6">
                Have{" "}
                <span className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold" style={{ backgroundSize: "300% 100%" }}>
                  Questions?
                </span>
                <br />
                Get{" "}
                <span className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold" style={{ backgroundSize: "300% 100%" }}>
                  Answers
                </span>
              </h2>
              <p className="text-md sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Can&apos;t find the answer you're looking for? Feel free to reach out to our team for more information.
              </p>
            </div>

            {/* Accordion List */}
            <CustomAccordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-2"
            >
              {faqs.map((faq, index) => (
                <CustomAccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-100 px-0"
                >
                  <CustomAccordionTrigger className="hover:no-underline text-left font-bold text-xl py-6 text-primary">
                    {faq.question}
                  </CustomAccordionTrigger>
                  <CustomAccordionContent className="pb-8 text-lg leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </CustomAccordionContent>
                </CustomAccordionItem>
              ))}
            </CustomAccordion>
          </div>

          {/* RIGHT COLUMN: Sidebar Cards (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Contact Card */}
            <div className="bg-primary rounded-xl p-8 text-center text-white relative overflow-hidden">
               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 border border-white bg-white rounded-full flex items-center justify-center mb-6">
                    <MessagesSquare className="w-10 h-10 text-primary " />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 leading-tight">Have Any Questions?</h3>
                  <p className="text-white/60 mb-6 text-sm leading-relaxed">
                    Connect with our team to find the answers to all of your questions.
                  </p>
                  
                  <Button className="bg-gray-50 hover:bg-gray-100 text-primary font-bold rounded-full w-fit h-12 shadow-lg transition-transform hover:scale-105">
                    Contact Us
                  </Button>
               </div>
            </div>

            {/* Support Card */}
            <div className="bg-gray-50 rounded-xl p-6 flex items-center gap-4 border border-gray-100">
               <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6 text-white" />
               </div>
               <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Your Growth, Our Mission</p>
                  <h4 className="text-lg font-bold text-primary">24/7 Service</h4>
                  <p className="text-xs font-medium text-muted-foreground">+91 99110 60907</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}