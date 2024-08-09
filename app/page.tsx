// app/page.tsx
import FeiraList from './components/FeiraList'; // Certifique-se de que o caminho está correto
import { feiras } from './data/feiras';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Feiras de Comércio Justo em Criciúma</h1>
        <p className="mt-4 text-gray-600">Conecte-se com produtores locais e descubra feiras próximas.</p>
      </header>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Próximas Feiras</h2>
        <FeiraList feiras={feiras} />
      </section>
    </div>
  );
}
