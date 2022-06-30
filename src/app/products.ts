export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 899,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 799,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone (sem descrição)',
    price: 299,
    description: '',
  },
  {
    id: 4,
    name: 'Teste de produto',
    price: 540,
    description: 'Este produto foi inserido posteriormente',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
