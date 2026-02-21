
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
    question: "What is Search Engine Marketing (SEM)?",
    answer: "Search Engine Marketing (SEM) is a crucial component of digital marketing that focuses on increasing a website’s visibility in search engine results pages (SERPs) through various strategies such as paid advertising (PPC) and sometimes SEO.",
  },
  {
    question: "What are the advantages of investing in SEM?",
    answer: "Investing in SEM offers numerous advantages, including immediate visibility, targeted reach, measurable results, and more. However, it is often used to generate faster leads and sales because it’s more efficient than SEO.",
  },
  {
    question: "How long do SEM campaigns take to see results?",
    answer: "SEM (Search Engine Marketing) campaigns can deliver instant visibility through paid ads, while achieving consistently high ROI through optimization and data-driven improvements typically takes 3–12 months, depending on campaign goals and strategy.",
  },
  {
    question: "How to measure SEM campaigns' success?",
    answer: "Measuring the success of SEM campaigns involves tracking key performance indicators (KPIs) like click-through rate (CTR), conversion rate (CVR), cost per acquisition (CPA), and more components to evaluate ROI. Success is determined by meeting specific campaign goals such as lead generation or search engine ranking.",
  },
  {
    question: "How does SEM differ from SEO?",
    answer: "SEM (Search Engine Marketing) and SEO (Search Engine Optimization) differ in cost, speed, and overall approach. While SEO focuses on earning or organic ranking over time, SEM utilizes paid strategies, such as PPC (pay-per-click) ads and more, to provide immediate results.",
  },
  {
    question: "What budget is required to run effective SEM campaigns?",
    answer: "The cost of SEM (Search Engine Marketing) is usually determined by the client's requirements. Their specific goals, type of ad campaigns, and other factors define the service cost. However, Dash Media Solutions aims to provide profound marketing solutions at a very competitive price range. Contact us today to find the right package for your marketing services.",
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