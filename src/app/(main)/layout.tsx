import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ModalProvider } from "@/components/providers/ModalProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
    <div className="relative flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
    </ModalProvider>
  );
}