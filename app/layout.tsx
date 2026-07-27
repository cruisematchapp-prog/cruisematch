import "./globals.css";

export const metadata = {
  title: "CruiseMatch",
  description: "Trova gli amici della tua prossima crociera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="min-h-screen text-white antialiased">

        <div className="fixed inset-0 -z-20">
          <img
           src="/images/ocean.jpg"
            className="w-full h-full object-cover"
            alt="Ocean"
          />
        </div>

       <div className="fixed inset-0 -z-10 bg-black/5"></div>
        {children}

      </body>
    </html>
  );
}