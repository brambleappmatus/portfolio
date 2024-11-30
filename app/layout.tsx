import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Sidebar } from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Professional Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Sidebar />
            <main className="lg:pl-64 min-h-screen">
              <div className="container mx-auto p-6">
                {children}
              </div>
            </main>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}