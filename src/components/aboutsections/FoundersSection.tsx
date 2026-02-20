import { FounderCard } from "@/components/ui/FounderCard";

// Updated data with only LinkedIn and Instagram
const foundersData = [
  {
    name: "Alex Johnson",
    title: "Co-Founder & Lead Strategist",
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Samantha Lee",
    title: "Co-Founder & Creative Director",
    imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Aaron Johnson",
    title: "Co-Founder & Lead Strategist",
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
    },
  },

];

export function FoundersSection() {
  return (
    <section className="py-20 bg-white ">
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex flex-col items-center justify-center gap-6 mb-8 md:mb-10 p-5 md:p-0 text-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-regular font-heading text-primary tracking-tighter">
              Meet Our{" "}
              <span
                className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
                style={{ backgroundSize: "300% 100%" }}
              >
                Founders
              </span>
            </h2>
          </div>

          <div>
            <p className="text-md sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              We're a diverse group of designers, engineers, and thinkers united by one mission: building technology that makes life simpler, smarter, and more human.
            </p>
          </div>
        </div>

        {/* Founders Grid - now uses 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5 lg:p-0">
          {foundersData.map((founder) => (
            <FounderCard
              key={founder.name}
              name={founder.name}
              title={founder.title}
              imageSrc={founder.imageSrc}
              socialLinks={founder.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
}