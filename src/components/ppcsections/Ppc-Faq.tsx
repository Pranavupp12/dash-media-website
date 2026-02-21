
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
    question: "What is Pay Per Click (PPC)?",
    answer: "Pay-per-click (PPC) is a very popular digital advertising model where advertisers pay a specific fee every time their ad is clicked, rather than paying for impressions. This model allows businesses and brands to purchase visitors for their sites. Advertisers bid on keywords or targeting criteria, and ads appear when users search for those terms.",
  },
  {
    question: "Why should I advertise with Pay-Per-Click ads?",
    answer: "Pay-Per-Click (PPC) advertising offers high targeted visibility that drives instant traffic. Therefore, generating leads and sales becomes easier compared to long-term SEO strategies. With total control, brands are only eligible to pay when someone clicks PPC ads, which maximizes return on investment.",
  },
  {
    question: "Do you provide Pay-Per-Click audits?",
    answer: "Yes, our professional provides in-depth, specialized pay-per-click audits to help optimize, reduce inefficient ad spend, and improve the return on investment (ROI) for platforms like Google Ads, Microsoft Ads, and social media.",
  },
  {
    question: "What is included in a Pay-Per-Click audit?",
    answer: "A Pay-Per-Click (PPC) audit is a comprehensive report that is created by analyzing PPC campaign structure, performance, targeting settings, landing page quality, and efficiency across the platforms. With the detailed insights, a brand can eliminate wasted ad spend and maximize ROI.",
  },
  {
    question: "How long does it take Pay-Per-Click to show results?",
    answer: "It usually depends on the specific campaigns and can show results—specifically, ads appearing in search results and receiving clicks—almost immediately (within hours or a few days). However, generating meaningful results can also take up to 3-6 months.",
  },
  {
    question: "How much does a PPC campaign cost?",
    answer: "PPC campaign costs fluctuate based on industry and goals, but small to medium-sized businesses typically spend between $100 and $10,000 per month on ad spend. Average cost-per-click (CPC) is usually $0.11–$0.50, though competitive industries often exceed $2.69 per click.",
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