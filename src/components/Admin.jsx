import { useEffect, useState } from "react";
function Admin() {
  const [data, setData] = useState([]);
  const [nama, setNama] = useState("");
  const [pesanan, setPesanan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [harga, setHarga] = useState("");
  const [title, setTitle] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [stock, setStock] = useState("");
  const [gambar, setGambar] = useState("");
  const [total, setTotal] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [indexToUpdate, setIndex] = useState(null);

  // const [indexToUpdate, setIndex] = useState(null);

  const fetchData = async () => {
    const database = await fetch("http://localhost:3000/admin");
    const result = await database.json();
    setData([...result]);
  };

  const resetForm = () => {
    setNama("");
    setPesanan("");
    setJumlah("");
    setTotal("");
    setTitle("");
  };

  const updateData = (index) => {
    const newEdit = data;
    setIndex(index);
    setNama(newEdit[index].nama);
    setPesanan(newEdit[index].pesanan);
    setJumlah(newEdit[index].jumlah);
    setTitle(newEdit[index].title);
    setHarga(newEdit[index].harga);
  };

  const onDeleteButton = async (index) => {
    await fetch(`http://localhost:3000/admin/${index}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    setData(data.filter((data) => data.index !== index));
    fetchData();
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const newData = data[indexToUpdate];
    // console.log('gamasuk');
    const update = await fetch(`http://localhost:3000/admin/${newData.id}`, {
      method: "PUT",
      body: JSON.stringify({
        nama: nama,
        pesanan: pesanan,
        jumlah: jumlah,
        title: title,
        total: total,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const postUpdate = await update.json();
    console.log("harusnya masuk sih", postUpdate);

    setIndex(null);
    fetchData();
    resetForm();
  };

  const onCreate = async (e) => {
    e.preventDefault();

    fetch(" http://localhost:3000/detail", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        harga: harga,
        deskripsi: deskripsi,
        stock: stock,
        gambar: gambar,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    alert("Data Berhasil di tambah");
    resetForm();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        className="admin-page"
        style={{ marginLeft: "18rem", marginTop: "2rem" }}
      >
        <button
          onClick={() => setShowForm(showForm ? false : true)}
          style={{
            marginBottom: "15px",
            color: "pink",
            backgroundColor: "grey",
            borderRadius: "10px",
            marginLeft: "14rem",
          }}
        >
          {showForm ? "Cancel" : "UpdateForm"}
        </button>
        <button
          onClick={() => setShowCreate(showCreate ? false : true)}
          style={{
            marginBottom: "15px",
            color: "pink",
            backgroundColor: "grey",
            borderRadius: "10px",
            marginLeft: "2rem",
          }}
        >
          {showCreate ? "Cancel" : "Create"}
        </button>
        <div
          className="container-tabel"
          style={{
            width: "100%",
            gap: "30rem",
          }}
        >
          <table>
            <thead className="table-admin">
              <tr style={{ backgroundColor: "pink", gap: "30rem" }}>
                <th>id</th>
                <th>Nama </th>
                <th>Jumlah</th>
                <th>Catatan </th>
                <th>Product Name</th>
                <th>Total Harga</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((x, index) => (
                <tr key={index}>
                  <td>{x.id}</td>
                  <td>{x.nama}</td>
                  <td>{x.jumlah}</td>
                  <td>{x.pesanan}</td>
                  <td>{x.title}</td>
                  <td>{x.total}</td>
                  <td>
                    <button
                      onClick={() => onDeleteButton(x.id)}
                      style={{
                        backgroundColor: "purple",
                        color: "whitesmoke",
                        marginRight: "7px",
                        borderRadius: "10px",
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => updateData(index)}
                      style={{
                        backgroundColor: "lightblue",
                        borderRadius: "10px",
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showForm ? (
          <div className="mt-10">
            <form onSubmit={onSubmitForm} style={{marginLeft:"15rem", backgroundColor: "yellow", width:"15rem", borderRadius:"5px"}} >
              <div className="mb-1" style={{marginLeft:'1rem'}}>
                <label htmlFor="" style={{ color: "red", fontWeight: "bold", marginTop:"1rem"}}>
                  Nama
                </label>
                <br />
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="mb-1" style={{marginLeft:'1rem'}}>
                <label htmlFor="" style={{ color: "red", fontWeight: "bold" }}>
                  Pesanan
                </label>{" "}
                <br />
                <input
                  type="text"
                  value={pesanan}
                  onChange={(e) => setPesanan(e.target.value)}
                  style={{ borderRadius: "5px" }}
                />
              </div>

              <div className="mb-1" style={{marginLeft:'1rem'}}>
                <label htmlFor="" style={{ color: "red", fontWeight: "bold" }}>
                  Jumlah
                </label>{" "}
                <br />
                <input
                  type="number"
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                  style={{
                    borderRadius: "5px",
                    borderBlockColor: "black",
                  }}
                />
              </div>

              <div className="mb-1" style={{marginLeft:'1rem'}}>
                <label htmlFor="" style={{ color: "red", fontWeight: "bold" }}>
                  Product Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    borderRadius: "5px",
                    borderBlockColor: "black",
                  }}
                />
              </div>

              <div className="mb-1" style={{marginLeft:'1rem'}}>
                <label htmlFor="" style={{ color: "red", fontWeight: "bold" }}>
                  Harga
                </label>{" "}
                <br />
                <input
                  type="text"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  style={{
                    borderRadius: "5px",
                    borderBlockColor: "black",
                  }}
                />
              </div>

              <div className="mb-1" style={{marginLeft:'1rem'}}>
                <button
                  type="submit"
                  style={{
                    marginTop: "10px",
                    backgroundColor: "red",
                    color: "yellow", borderRadius:"10px"
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <></>
        )}
        {showCreate ? (
          <div className="mt-10">
            <form onSubmit={onCreate} style={{marginLeft:"15rem",marginTop:"1rem", backgroundColor: "yellow", width:"15rem", borderRadius:"5px"}}>
              <div className="mb-1" style={{marginLeft:'1rem'}}>
                <label htmlFor="" style={{ color: "red", fontWeight: "bold", marginTop:"1rem" }}>
                  Product
                </label>
                <br />
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="mb-1" style={{marginLeft:'1rem'}}>
                <label htmlFor="" style={{ color: "red", fontWeight: "bold" }}>
                  Description
                </label>{" "}
                <br />
                <input
                  type="text"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  style={{ borderRadius: "5px" }}
                />
              </div>

              <div className="mb-1" style={{marginLeft:'1rem'}}>
                <label htmlFor="" style={{ color: "red", fontWeight: "bold" }}>
                  Price
                </label>{" "}
                <br />
                <input
                  type="text"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                  style={{
                    borderRadius: "5px",
                    borderBlockColor: "black",
                  }}
                />
              </div>

              <div className="mb-1" style={{marginLeft:'1rem'}}>
                <label htmlFor="" style={{ color: "red", fontWeight: "bold" }}>
                  stock
                </label>{" "}
                <br />
                <input
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  style={{
                    borderRadius: "5px",
                    borderBlockColor: "black",
                  }}
                />
              </div>

              <div className="mb-1" style={{marginLeft:'1rem'}}>
                <label htmlFor="" style={{ color: "red", fontWeight: "bold" }}>
                  Visual
                </label>{" "}
                <br />
                <input
                  type="text"
                  value={gambar}
                  onChange={(e) => setGambar(e.target.value)}
                  style={{
                    borderRadius: "5px",
                    borderBlockColor: "black",
                  }}
                />
              </div>

              <div className="mb-1" style={{marginLeft:'1rem'}}>
                <button
                  type="submit"
                  style={{
                    marginTop: "10px",
                    backgroundColor: "red",
                    color: "yellow",  borderRadius:"10px"
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
export default Admin;
