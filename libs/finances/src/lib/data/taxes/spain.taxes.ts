import { Tax } from '../../models/tax';

export const DEFAULT_TAXES: Tax[] = [
  {
    id: '0',
    name: 'Trimestral IVA',
    rate: 0.21,
    financialEntityCode: 'ESP',
    createdAt: new Date(),
    updatedAt: new Date(),
    period: {
      start: new Date(2022, 0, 1),
      end: new Date(2022, 3, 31),
      payStart: new Date(2022, 3, 1),
      payEnd: new Date(2022, 3, 31),
    },
  },
  {
    id: '0',
    name: 'Anual IRPF 7%',
    rate: 0.7,
    financialEntityCode: 'ESP',
    createdAt: new Date(),
    updatedAt: new Date(),
    period: {
      start: new Date(2022, 0, 1),
      end: new Date(2022, 12, 31),
      payStart: new Date(2023, 0, 1),
      payEnd: new Date(2023, 6, 31),
    },
  },
];
