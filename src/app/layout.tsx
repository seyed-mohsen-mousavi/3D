import "./globals.css";

import { Shabnam , Hekayat } from "@/utils/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className="scroll-smooth bg-[#f9f9f9]">
      <body
        className={`${Shabnam.variable} ${Hekayat.variable} ${Shabnam.className}  antialiased w-full overflow-x-hidden`}
      >
        <main className="max-w-[1920px] container mx-auto p-5">
          {children}
        </main>
      </body>
    </html>
  );
}
