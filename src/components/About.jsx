import React from "react";
import { Carousel } from "react-bootstrap";

const About = () => {
  const Navbar = () => (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ width: "auto" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ display: "flex" }}>
          <img
            src="https://seeklogo.com/images/M/mcdonald-s-logo-0D95A820B2-seeklogo.com.png"
            alt=""
            style={{ width: "50px", height: "40px" }}
          />
          <p
            style={{
              fontSize: "20px",
              marginLeft: "1rem",
              marginTop: "5px",
              color: "grey",
              fontFamily:
                "Speedee,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;",
            }}
          >
            About Us
          </p>
        </a>
      </div>
    </nav>
  );
  return (
    <>
      <div>
        <Navbar />
        <div
          className="content-visi"
          style={{ display: "flex", marginLeft: "7rem", marginTop: "3rem" }}
        >
          <img
            src="https://nos.jkt-1.neo.id/mcdonalds/assets/img/bg/img_visi.jpg"
            alt=""
            style={{ width: "30rem" }}
          />
          <div
            className="text-visi"
            style={{
              width: "35%",
              marginLeft: "5rem",
              marginTop: "2rem",
              fontFamily:
                "Speedee,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;",
            }}
          >
            <h1 style={{ fontWeight: "bold", color: "black" }}>Visi</h1>
            <p style={{ color: "grey" }}>
              Visi McDonald’s adalah menjadi restoran cepat saji dengan
              pelayanan terbaik di dunia. Untuk mencapai visi ini, McDonald’s
              selalu menjamin mutu produk-produknya, memberikan pelayanan yang
              memuaskan, menawarkan kebersihan dan keamanan produk pangan serta
              nilai-nilai tambah lainnya. Senyum konsumen adalah hal penting
              untuk McDonald's.
            </p>
          </div>
        </div>

        <div
          className="content-misi"
          style={{
            display: "flex",
            marginLeft: "2rem",
            marginTop: "5rem",
            marginBottom: "3rem",
          }}
        >
          <div
            className="text-misi"
            style={{
              width: "35%",
              marginLeft: "5rem",
              marginTop: "1.5rem",

              fontFamily:
                "Speedee,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;",
              marginRight: "7rem",
            }}
          >
            <h1 style={{ fontWeight: "bold", color: "black" }}>Misi</h1>
            <p style={{ color: "grey" }}>
              • Menjadi perusahaan terbaik bagi semua karyawan kami di setiap
              komunitas di seluruh dunia.
              <br />
              • Menghadirkan pelayanan dengan sistem operasional yang unggul
              bagi setiap konsumen kami di setiap restoran cabang McDonald’s.
              <br />• Terus mengalami perkembangan ke arah yang menguntungkan
              sebagai sebuah brand, serta terus mengembangkan sistem operasional
              McDonald’s ke arah yang lebih baik lagi lewat inovasi dan
              teknologi.
            </p>
          </div>
          <img
            src="https://nos.jkt-1.neo.id/mcdonalds/assets/img/bg/img-misi.jpg"
            alt=""
            style={{ width: "30rem" }}
          />
        </div>
      </div>

      <div
        className="about-sejarah"
        style={{
          marginTop: "5rem",
          width: "45%",
          marginLeft: "20rem",
          marginBottom: "5rem",
          fontFamily:
            "Speedee,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;",
        }}
      >
        <h1 style={{ color: "black", fontWeight: "bold" }}>Sejarah</h1>
        <p style={{ color: "grey" }}>
          McDonald’s merupakan restoran fast food terbesar di dunia yang diawali
          pada tahun 1955 di California, Amerika Serikat. Dengan produk unggulan
          berupa Burger bernama Bigmac, McDonald’s hingga saat ini telah
          memiliki ribuan restoran yang tersebar di lebih dari 100 negara, salah
          satunya Indonesia. McDonald’s pertama kali masuk ke Indonesia pada
          tahun 1991 dengan membuka restoran pertamanya di Sarinah, Thamrin.
        </p>
        <a
          href=""
          style={{
            color: "red",
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily:
              "Speedee,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;",
          }}
        >
          Lihat Selengkapnya{" "}
        </a>
      </div>

      <div className="about-1">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="slide 1.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="slide 2.png"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default About;
