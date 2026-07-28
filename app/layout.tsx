import "./globals.css";
import Script from "next/script";
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
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4459738177420708"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
        <div className="fixed inset-0 -z-20">
          <img
           src="/images/ocean.jpg"
            className="w-full h-full object-cover"
            alt="Ocean"
          />
        </div>

       <div className="fixed inset-0 -z-10 bg-black/5"></div>

{children}

<footer className="mt-20 py-8 text-center text-white/80 text-sm">

  <div className="flex justify-center gap-6 mb-3">

    <a href="/privacy" className="hover:text-cyan-300">
      Privacy Policy
    </a>

    <a href="/terms" className="hover:text-cyan-300">
      Termini e condizioni
    </a>

    <a href="/contact" className="hover:text-cyan-300">
      Contatti
    </a>

  </div>

  <p>
    © 2026 CruiseMatch. Tutti i diritti riservati.
  </p>

</footer>

      </body>
    </html>
  );
}