import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const Barang = () => {
    const [barang, setBarang] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/barang')
            .then(response => response.json())
            .then(data => setBarang(data));

    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/api/barang/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json) // or res.json()
            .then(res => console.log(res))
        setBarang(barang.filter(br => br._id !== id))
    }

    return (

        <div className="container">
            <div className="d-flex flex-row justify-content-between">
                <h3>Data Barang</h3>
                <button type="button" className="btn btn-primary btn-sm mb-2"><a href="/barang/tambah" className="link-white"><FontAwesomeIcon icon={faPlus} /> Add</a></button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Kode</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Satuan</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {barang && barang.map((br,index)=>{
                        return <tr key={index}>
                        <td>{br.code}</td>
                        <td>{br.nama}</td>
                        <td>{br.satuan}</td>
                        <td>{br.harga}</td>
                        <td>
                                <button type="button" className="btn btn-warning btn-sm m-2"><a href={`/barang/edit/${br._id}`}className="link-black"><FontAwesomeIcon icon={faEdit} /></a> Edit</button>
                                <button type="button" className="btn btn-danger btn-sm m-2" onClick={() => handleDelete(br._id)} ><FontAwesomeIcon icon={faTrash} /> Delete</button>
                            </td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Barang