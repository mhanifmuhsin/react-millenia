import React from 'react';
const EditBarang = React.lazy(()=>import('./pages/EditBarang'));
const TambahBarang = React.lazy(()=>import('./pages/TambahBarang'));
const Barang = React.lazy(()=>import('./pages/Barang'));


const routes=[
    { path: '/barang/edit/:brId', Component: EditBarang },
    { path: '/barang/tambah', Component: TambahBarang },
    { path: '/', Component: Barang },
]

export default routes