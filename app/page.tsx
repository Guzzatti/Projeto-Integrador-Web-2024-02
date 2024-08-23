// app/page.tsx
import BannerCarousel from './components/BannerCarousel'; 
import FeiraList from './components/FeiraList'; // Adicionando a importação do FeiraList
import ReviewCard from './components/ReviewCard';
import { feiras } from './data/feiras';

// Exemplo de dados para reviews
const reviews = [
  {
    id: '1',
    name: 'Ana Souza',
    rating: 5,
    comment: 'Ótima experiência! A feira tem uma variedade incrível de produtos locais.',
  },
  {
    id: '2',
    name: 'João Oliveira',
    rating: 4,
    comment: 'Adorei as opções de alimentos frescos. A organização poderia ser melhor.',
  },
  {
    id: '3',
    name: 'Mariana Silva',
    rating: 5,
    comment: 'Excelente! Muito fácil de encontrar o que eu precisava e os produtores são muito simpáticos.',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Hub das feiras de Criciúma</h1>
        <p className="mt-4 text-gray-600">Conecte-se com produtores locais e descubra feiras próximas.</p>
      </header>
      
      {/* Seção do Banner */}
      <section className="mb-8">
        <BannerCarousel
          banners={[
            { id: '1', imageUrl: '/banners/banner1.png', altText: 'Banner 1' },
            { id: '2', imageUrl: '/banners/banner2.png', altText: 'Banner 2' },
            { id: '3', imageUrl: '/banners/banner3.png', altText: 'Banner 3' }
          ]}
        />
      </section>
      
      {/* Seção das Feiras */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Próximas Feiras</h2>
        <FeiraList feiras={feiras} />
      </section>

      {/* Seção de Reviews */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-black text-center">O que estão dizendo</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              rating={review.rating}
              comment={review.comment}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
