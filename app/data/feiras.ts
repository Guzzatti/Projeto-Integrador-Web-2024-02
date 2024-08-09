// app/data/feiras.ts

export const feiras = [
  {
    id: 'feira-1',
    nome: 'Feira de Janeiro - Local A',
    local: 'Rua Exemplo, 123, Criciúma',
    datas: [
      { data: '2024-01-05', horario: '08:00 - 14:00' },
      { data: '2024-01-12', horario: '08:00 - 14:00' },
    ],
    feirantes: [
      { nome: 'Feirante A', produto: 'Vegetais' },
      { nome: 'Feirante B', produto: 'Frutas' },
    ],
  },
  {
    id: 'feira-2',
    nome: 'Feira de Fevereiro - Local B',
    local: 'Avenida Exemplo, 456, Criciúma',
    datas: [
      { data: '2024-02-03', horario: '08:00 - 14:00' },
      { data: '2024-02-10', horario: '08:00 - 14:00' },
    ],
    feirantes: [
      { nome: 'Feirante C', produto: 'Pães' },
      { nome: 'Feirante D', produto: 'Laticínios' },
    ],
  },
];
