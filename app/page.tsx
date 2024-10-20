'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';  // Importa o componente de carrossel
import BannerCarousel from './components/BannerCarousel';
import FeiraList from './components/FeiraList';
import { fetchFeiras } from './api';

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
    {
        id: '4',
        name: 'Carlos Pereira',
        rating: 3,
        comment: 'Achei interessante, mas poderia ter mais opções de frutas.',
    },
    {
        id: '5',
        name: 'Fernanda Costa',
        rating: 4,
        comment: 'Gostei bastante, especialmente da área de artesanato.',
    }
];

export default function Home() {
    const [feirasData, setFeirasData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const feiras = await fetchFeiras();
            setFeirasData(feiras);
        };

        fetchData();
    }, []);

    // Configuração do carrossel para exibir vários cards ao mesmo tempo
    const settings = {
        dots: true,
        infinite: true,  // Faz com que o carrossel seja contínuo
        speed: 500,
        slidesToShow: 3,  // Exibe 3 cards de uma vez
        slidesToScroll: 1,  // Rola um card de cada vez
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,  // Mantém as setas para navegação manual
        responsive: [
            {
                breakpoint: 1024,  // Para telas menores (ex: tablets)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,  // Para telas muito pequenas (ex: smartphones)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-blue-600">Hub das feiras de Criciúma</h1>
                <p className="mt-4 text-gray-600">Conecte-se com produtores locais e descubra feiras próximas de você!</p>
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
                <FeiraList feiras={feirasData} />
            </section>

            {/* Seção de Reviews com Carrossel contínuo */}
            <section className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-black text-center">O que estão dizendo</h2>
                
                {/* Carrossel de Avaliações */}
                <Slider {...settings}>
                    {reviews.map((review) => (
                        <div key={review.id} className="text-center p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                            <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
                            <p className="text-gray-700 italic">"{review.comment}"</p>
                        </div>
                    ))}
                </Slider>
            </section>

            {/* Seção de Login/Registro */}
            <section className="text-center mt-8">
                <h2 className="text-2xl font-semibold mb-4">Acesse sua conta</h2>
                <div className="space-y-4">
                    <Link href="/login" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Login
                    </Link>
                    <br />
                    <Link href="/register" className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                        Registrar-se
                    </Link>
                </div>
            </section>
        </div>
    );
}
