import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ApolloClientProvider from "@/components/providers/apollo-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const monty = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timeline Portfolio",
  description: "A portfolio that showcases your journey in a timeline format.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monty.className}>
        <ApolloClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
