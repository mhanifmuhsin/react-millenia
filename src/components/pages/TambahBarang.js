import React,{useState} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const TambahBarang =()=>{
    const history = useHistory()
    const [barang,setBarang] = useState({
        code:'',
        nama:'',
        satuan:'',
        harga:'',
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        await
            Axios.post('http://localhost:3000/api/barang/', barang)
        history.push('/');
    }
    const handleChange = (e, name) => {
        const value = e.target.value
        setBarang({ ...barang, [name]: value })
    }
    return(
        <div className='container'>
        <div>
            <h2>Tambah Barang</h2>
        </div>
        <form>
            <div className="form-group">
                <label htmlFor="code">Code</label>
                <input type="text" className="form-control" id="nisdt" aria-describedby="code" placeholder="Enter Code" 
                onChange={(e) => handleChange(e, 'code')}/>
            </div>

            <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <input type="text" className="form-control" id="nama" aria-describedby="nama" placeholder="Enter nama" 
                onChange={(e) => handleChange(e, 'nama')}/>
            </div>
            <div className="form-group">
                <label htmlFor="satuan">Satuan</label>
                <input type="text" className="form-control" id="satuan" aria-describedby="satuan" placeholder="Enter satuan" 
                onChange={(e) => handleChange(e, 'satuan')}/>
            </div>
            <div className="form-group">
                <label htmlFor="harga">Harga</label>
                <input type="text" className="form-control" id="harga" aria-describedby="harga" placeholder="Enter harga"
                onChange={(e) => handleChange(e, 'harga')} />
            </div>
            
            <button className="btn btn-info m-2" onClick={() => history.push('/')}>Cancel</button>
            <button type="button" className="btn btn-success m-2" onClick={handleSubmit}>Save</button>
        </form>
    </div>
    )
}

export default TambahBarang