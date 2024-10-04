// src/FeirasComponent.js
import { useState, useEffect } from 'react';
import { fetchFeiras } from './api';

const FeirasComponent = () => {
    const [feirasData, setFeirasData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const feiras = await fetchFeiras();
            setFeirasData(feiras);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Feiras</h1>
            <ul>
                {feirasData.map((feira, index) => (
                    <li key={index}>{feira.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default FeirasComponent;
