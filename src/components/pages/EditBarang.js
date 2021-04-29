import React,{useEffect,useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Axios from 'axios';

const EditBarang = ()=>{
    const history = useHistory();
    const { brId } = useParams();
    const [barang, setBarang] = useState({
        code:'',
        nama:'',
        satuan:'',
        harga:'',
    })
    console.log(brId);

    useEffect(() => {
        fetch(`http://localhost:3000/api/barang/${brId}`)
            .then(response => response.json())
            .then(data => setBarang(data));
    }, [brId])

    const handleChange = (e, name) => {
        const value = e.target.value
        setBarang({ ...barang, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await
            Axios.put(`http://localhost:3000/api/barang/${brId}`, barang)
        history.push('/');
    }
    return(
        <div className='container'>
        <div>
            <h2>Edit Barang</h2>
        </div>
        <form>
            <div className="form-group">
                <label htmlFor="code">Code</label>
                <input type="text" className="form-control" id="nisdt" aria-describedby="code" value={barang.code}
                onChange={(e) => handleChange(e, 'code')}/>
            </div>

            <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <input type="text" className="form-control" id="nama" aria-describedby="nama" value={barang.nama} 
                onChange={(e) => handleChange(e, 'nama')}/>
            </div>
            <div className="form-group">
                <label htmlFor="satuan">Satuan</label>
                <input type="text" className="form-control" id="satuan" aria-describedby="satuan" value={barang.satuan} 
                onChange={(e) => handleChange(e, 'satuan')}/>
            </div>
            <div className="form-group">
                <label htmlFor="harga">Harga</label>
                <input type="text" className="form-control" id="harga" aria-describedby="harga" value={barang.harga}
                onChange={(e) => handleChange(e, 'harga')} />
            </div>
            
            <button className="btn btn-info m-2" onClick={() => history.push('/')}>Cancel</button>
            <button type="button" className="btn btn-success m-2" onClick={handleSubmit}>Save</button>
        </form>
    </div>
    )
}
export default EditBarang