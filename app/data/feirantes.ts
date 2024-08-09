export type Produto = {
  id: string;
  nome: string;
  descricao: string;
  fotos: string[];
};

export type Feirante = {
  id: string;
  nome: string;
  fotoPerfil: string;
  produtos: Produto[];
  feiras: string[]; // IDs das feiras
};

export const feirantes: Feirante[] = [
  {
    id: 'feirante-1',
    nome: 'Feirante A',
    fotoPerfil: '/images/feirante-a.jpg', // Coloque uma URL válida
    produtos: [
      {
        id: 'produto-1',
        nome: 'Vegetal A',
        descricao: 'Vegetal fresco e orgânico.',
        fotos: ['/images/produto-a1.jpg', '/images/produto-a2.jpg'],
      },
    ],
    feiras: ['feira-1', 'feira-2'],
  },
  // Adicione mais feirantes conforme necessário
];
