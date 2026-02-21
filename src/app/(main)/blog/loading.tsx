import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Skeleton - Using Gray instead of Blue */}
      <section className="bg-gray-50 pt-34 pb-20 border-b border-gray-100">
        <div className="container mx-auto px-5 sm:px-20 text-center">
          <Skeleton className="h-16 w-3/4 mx-auto mb-5 bg-gray-200" />
          <Skeleton className="h-5 w-1/4 mx-auto bg-gray-200" />
        </div>
      </section>

      <section className="pt-10 pb-20">
        <div className="container mx-auto px-5 sm:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8">
              {/* Search Bar Skeleton */}
              <Skeleton className="h-12 w-full rounded-full mb-16 bg-gray-100" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-[16/9] w-full rounded-3xl bg-gray-100" />
                    <Skeleton className="h-4 w-24 bg-gray-100" />
                    <Skeleton className="h-8 w-full bg-gray-100" />
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full bg-gray-100" />
                      <Skeleton className="h-4 w-32 bg-gray-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <Skeleton className="h-64 w-full rounded-3xl bg-gray-50" />
              <Skeleton className="h-96 w-full rounded-3xl bg-gray-50" />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}