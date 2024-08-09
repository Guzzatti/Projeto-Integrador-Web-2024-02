import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Feiras de Comércio Justo',
  description: 'Sistema para conectar produtores rurais com consumidores.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/feirantes/cadastro">Cadastrar Feirante</Link></li>
              {/* Adicione outros links conforme necessário */}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 Feiras de Comércio Justo</p>
        </footer>
      </body>
    </html>
  );
}
