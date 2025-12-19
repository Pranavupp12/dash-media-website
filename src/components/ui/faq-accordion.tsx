'use client';

import * as React from 'react';
import { HelpCircle, MessageCircle, ChevronDown } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
	React.ComponentRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('', className)}
		{...props}
	/>
));
CustomAccordionItem.displayName = 'CustomAccordionItem';

const CustomAccordionTrigger = React.forwardRef<
	React.ComponentRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'group flex flex-1 items-center justify-between gap-4 rounded-2xl p-4 text-left',
				'bg-[#ffff] border border-gray-200 dark:bg-zinc-800 dark:text-white transition-all hover:bg-gray-50/70 hover:shadow-md',
				'dark:hover:bg-zinc-700/60 focus-visible:outline-none focus-visible:ring-2',
				'dark:data-[state=open]:bg-zinc-700 data-[state=open]:shadow-md',
				className
			)}
			{...props}
		>
			<div className="flex items-center gap-4">
				<HelpCircle className="h-5 w-5 text-primary dark:text-white" />
				<span className="text-md sm:text-lg font-medium dark:text-zinc-50 text-primary tracking-wide">
					{children}
				</span>
			</div>
			<div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary dark:bg-zinc-600/70 transition-transform group-hover:scale-105 group-data-[state=open]:rotate-180">
				<ChevronDown className="h-4 w-4 text-white " />
			</div>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = 'CustomAccordionTrigger';

const CustomAccordionContent = React.forwardRef<
	React.ComponentRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(
			'overflow-hidden dark:text-white',
			'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2',
			className
		)}
		{...props}
	>
		<div className="mt-4 ml-14">
			<div className="flex items-start gap-4 rounded-2xl bg-blue-50 dark:bg-zinc-700 p-4 shadow-md transition-all">
				<span className="flex-1 text-sm sm:text-md leading-relaxed text-gray-600">{children}</span>
				<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary dark:bg-zinc-600 transition-transform hover:scale-105">
					<MessageCircle className="h-5 w-5 text-white " />
				</div>
			</div>
		</div>
	</AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = 'CustomAccordionContent';

export {
	CustomAccordion,
	CustomAccordionItem,
	CustomAccordionTrigger,
	CustomAccordionContent,
};
