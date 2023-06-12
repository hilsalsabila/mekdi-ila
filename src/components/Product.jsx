import { useEffect, useState } from "react";


<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossOrigin="anonymous"
></link>;

function Product() {
  const [nama, setNama] = useState("");
  const [pesanan, setPesanan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [PrductClick, setProductClick] = useState(null);
  const [database, setDatabase] = useState([]);

  const fetchDataBase = async () => {
    try {
      const response = await fetch("http://localhost:3000/detail");
      const result = await response.json();
      setDatabase([...result]);
      console.log(result, "ini ilacan");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataBase();
  }, []);

  const resetForm = () => {
    setPesanan("");
    setJumlah("");
    setNama("");
  };
  const onOrder = (item) => {
    setShowForm(showForm ? false : true);
    setProductClick(item);
  };
  //   const randomizeData = (stock) => {
  //     let newData = stock.slice();
  //     for (
  //       let i = Math.round(Math.random() * 10);
  //       i < newData.length;
  //       i += Math.round(Math.random() * 10)
  //     ) {
  //       updateStock(newData[i]);
  //     }
  //     return newData;
  //   };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(PrductClick.stock);

    fetch("http://localhost:3000/admin", {
      method: "POST",
      body: JSON.stringify({
        nama: nama,
        pesanan: pesanan,
        jumlah: jumlah,
        title: PrductClick.title,
        harga: PrductClick.harga,
        total: PrductClick.harga * jumlah,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const newStock = PrductClick.stock - jumlah;
    console.log(jumlah, "ini adaa");
    fetch(`http://localhost:3000/detail/${PrductClick.id}`, {
      method: "PUT",
      body: JSON.stringify({
        stock: newStock,
        title: PrductClick.title,
        deskripsi: PrductClick.deskripsi,
        harga: PrductClick.harga,
        gambar: PrductClick.gambar,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    alert("Sabar yah, pesanan mu sedang dibuat dengan sepenuh hati");
    resetForm();
    fetchDataBase();
  };

  return (
    <>
      <div
        className="card-product"
        style={{ width: "18rem", display: "flex", gap: 10, marginLeft:"24rem", marginTop:"2rem" }}
      >
        {database.map((item, index) => (
          <div
            key={index}
            style={{
              marginTop: "2rem",
              border: " 2px solid whitesmoke",
              borderRadius: "10px",
            }}
          >
            <img
              src={item.gambar}
              className="card-img-top"
              alt="..."
              style={{
                borderRadius: "5px",
                borderColor: "red solid",
                height: "200px",
                width: "220px",
              }}
            />
            <div className="card-body" style={{ padding: "5px" }}>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.deskripsi}</p>
              <p className="card-text" style={{ fontWeight: "bold" }}>
                Rp.{item.harga}
              </p>
              <p className="card-text" style={{ fontWeight: "bold" }}>
                {item.stock}
              </p>
            </div>
            <div>
              <button
                onClick={() => onOrder(item)}
                style={{ backgroundColor: "yellow", color: "red", borderRadius:'10px' }}
              >
                {showForm ? "Cancel" : "+Keranjang"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm ? (
        <div className="mt-10" style={{width:'15rem', marginLeft:"40rem"}}>
          <form
            onSubmit={onSubmitForm}
            style={{
              marginTop: "2rem",
              border: " 2px solid whitesmoke",
              borderRadius: "10px",
              backgroundColor: "yellow",

            }}
          >
            <div className="mb-1" style={{marginLeft:'1rem'}}>
              <label htmlFor="">Nama</label> <br />
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="mb-1" style={{marginLeft:'1rem'}}>
              <label htmlFor="">Pesanan</label> <br />
              <input
                type="text"
                value={pesanan}
                onChange={(e) => setPesanan(e.target.value)}
              />
            </div>

            <div className="mb-1" style={{marginLeft:'1rem'}}>
              <label htmlFor="">Jumlah</label> <br />
              <input
                type="number"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
              />
            </div>

            <div className="mb-1" style={{marginLeft:'1rem'}}>
              <button
                type="submit"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  marginTop: "10px",
                  marginBottom: "10px",
                  borderRadius:'5px'
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
    </>
  );
}

export default Product;
