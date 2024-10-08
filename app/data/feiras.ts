// app/data/feiras.ts

export const feiras = [
  {
    id: '2',
    nome: 'Feira da Praça Nereu Ramos 01',
    local: 'Praça Nereu Ramos, Criciúma',
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
    id: '3',
    nome: 'Feira Inspirar 02',
    locais: [
      {
        local: 'Parque da Prefeitura, Criciúma',
        datas: [
          { data: '2024-08-09', horario: '08:00 - 14:00' },
          { data: '2024-10-13', horario: '08:00 - 14:00' },
          { data: '2024-11-10', horario: '08:00 - 14:00' },
          { data: '2024-12-08', horario: '08:00 - 14:00' },
        ],
      },
      {
        local: 'Parque das Nações, Criciúma',
        datas: [
          { data: '2024-10-20', horario: '08:00 - 14:00' },
          { data: '2024-11-17', horario: '08:00 - 14:00' },
        ],
      },
    ],
    feirantes: [
      { nome: 'Feirante C', produto: 'Pães' },
      { nome: 'Feirante D', produto: 'Laticínios' },
      { nome: 'Feirante E', produto: 'Artesanatos' },
      { nome: 'Feirante F', produto: 'Ervas e Temperos' },
    ],
  },
  {
    id: '4',
    nome: 'Feira Empreender 03',
    local: 'Parque das Nações, Criciúma',
    datas: [
      { data: '2024-09-15', horario: '08:00 - 14:00' },
      { data: '2024-12-15', horario: '08:00 - 14:00' },
    ],
    feirantes: [
      { nome: 'Feirante G', produto: 'Doces Artesanais' },
      { nome: 'Feirante H', produto: 'Bijuterias' },
    ],
  },
  {
    id: '5',
    nome: 'Feira da Praça do Congresso 04',
    local: 'Praça do Congresso, Criciúma',
    datas: [
      { data: '2024-01-20', horario: '08:00 - 14:00' },
      { data: '2024-01-27', horario: '08:00 - 14:00' },
    ],
    feirantes: [
      { nome: 'Feirante I', produto: 'Vinhos' },
      { nome: 'Feirante J', produto: 'Queijos' },
    ],
  },
];
