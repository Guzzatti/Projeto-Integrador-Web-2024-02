import { useState, useEffect } from 'react';
import { fetchFeiras } from './api.js'; // Certifique-se de que o caminho está correto
import FeiraList from '../app/components/FeiraList'; // Certifique-se de que o caminho está correto

const Home: React.FC = () => {
    const [feirasData, setFeirasData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const feiras = await fetchFeiras();
            setFeirasData(feiras);
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-blue-600">Hub das feiras de Criciúma</h1>
                <p className="mt-4 text-gray-600">Conecte-se com produtores locais e descubra feiras próximas de você!</p>
            </header>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Próximas Feiras</h2>
                <FeiraList feiras={feirasData} />
            </section>
        </div>
    );
};

export default Home;
