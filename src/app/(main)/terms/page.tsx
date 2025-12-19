export const metadata = {
  title: "Terms and Conditions | Dash Media Solutions",
  description: "Terms and Conditions for using Dash Media Solutions services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 dark:bg-zinc-950 pb-20">
      {/* Header */}
      <div className="pt-30 sm:pt-35 pb-20 text-center px-5 sm:px-0">
        <h1 className="text-4xl lg:text-5xl text-primary font-bold mb-4">Terms and Conditions</h1>
        <p className="text-muted-foreground text-md sm:text-lg">Please read these terms carefully before using our services.</p>
        <p className="text-sm sm:text-md font-bold text-muted-foreground mt-2">Last Updated: December 2025</p>
      </div>

      <div className="container mx-auto  px-5 -mt-10 relative z-10 max-w-5xl">
        {/* Removed Card Wrapper - Content sits directly on page structure */}
        <div className="bg-white rounded-xl p-10"> 
            <article className="max-w-none space-y-12">
                
                <section>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">1. Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed text-md lg:text-lg">
                        Welcome to Dash Media Solutions. By accessing our website and using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">2. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed text-md lg:text-lg">
                        The service and its original content, features, and functionality are and will remain the exclusive property of Dash Media Solutions and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Dash Media Solutions.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">3. User Responsibilities</h2>
                    <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-md lg:text-lg">
                        <li>You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</li>
                        <li>You must not use our website in any way which is unlawful, illegal, fraudulent or harmful.</li>
                        <li>You must not conduct any systematic or automated data collection activities on or in relation to our website without our express written consent.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">4. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed text-md lg:text-lg">
                        In no event shall Dash Media Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">5. Governing Law</h2>
                    <p className="text-muted-foreground leading-relaxed text-md lg:text-lg">
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">6. Changes to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed text-md lg:text-lg">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>
                </section>

                <section className="pt-8 border-t mt-12">
                    <p className="text-muted-foreground text-sm sm:text-md">
                        If you have any questions about these Terms, please contact us at <a href="mailto:contact@dashmedia.com" className="text-primary hover:underline font-medium">contact@dashmedia.com</a>.
                    </p>
                </section>

            </article>
        </div>
      </div>
    </div>
  );
}