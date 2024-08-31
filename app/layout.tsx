// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { AuthProvider } from './hooks/useAuth'; // Import do AuthProvider

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>
          <header className="bg-blue-600 text-white p-4">
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/">Home</Link></li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
        </AuthProvider>
        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          <p>&copy; 2024 Feiras de Comércio Justo</p>
        </footer>
      </body>
    </html>
  );
}
