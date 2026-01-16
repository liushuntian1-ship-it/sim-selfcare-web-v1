import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-white shadow">
          <div className="max-w-5xl mx-auto p-4 font-bold">
            SIM 自助服务平台
          </div>
        </header>

        <main className="max-w-5xl mx-auto p-4">{children}</main>

        <footer className="text-center text-sm text-gray-400 py-6">
          © 2026 SIM Selfcare
        </footer>
      </body>
    </html>
  );
}
