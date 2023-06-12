import React from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Content1 = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#ffbc0d", height: "30rem", display: "flex",  width: "1350px" }}
      >
        <img
          src="https://nos.jkt-1.neo.id/mcdonalds/assets/img/home/img_home-birthday.jpg"
          alt=""
          style={{ height: "25rem", marginLeft: "5rem", marginTop: "3rem" }}
        />
        <div style={{ display: "block" }}>
          <h1
            style={{
              fontWeight: "bold",
              width: "70%",
              fontFamily:
                "Speedee,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;",
              color: "#333333",
              marginLeft: "5rem",
              marginTop: "10rem",
            }}
          >
            Ciptakan momen bahagia untuk si kecil
          </h1>
          <p
            style={{
              fontFamily:
                "Speedee,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;",
              color: "#00000180",
              marginLeft: "5rem",
            }}
          >
            Semua hal seru hanya ada di Dunia Anak McDonald's
          </p>
          <Button
            variant="danger"
            style={{ backgroundColor: "#DB0007", marginLeft: "5rem" }}
          >
            Pelajari Selengkapnya
          </Button>
        </div>
      </div>

      <div>
        <img
          src="https://nos.jkt-1.neo.id/mcdonalds/assets/img/common/graphic-melt.png"
          alt=""
        />
        <div style={{ display: "flex", marginBottom:'3rem'}}>
          <div style={{marginTop:'5rem', marginLeft:'7rem'}}>
            <h2 style={{width: "40%",
              fontFamily:
                "Speedee,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;",
              color: "#333333", fontWeight:'800'}}>
              Makin Hemat & Praktis dengan Aplikasi McDonald’s Download Sekarang
            </h2>
            <div style={{marginTop:'1rem'}}>
              <a href="https://apps.apple.com/id/app/mcdonalds/id1217507712"><img
                src="https://mcdonalds.co.id/assets/img/common/button_appstore.png"
                alt=""style={{width:'10rem'}}
              /></a>
              <a href="https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp&pli=1"><img
                src="https://mcdonalds.co.id/assets/img/common/button_playstore.png"
                
                alt="" style={{width:'10rem', marginLeft:'1rem'}}
              /></a>
            </div>
            </div>
            <img
              src="https://nos.jkt-1.neo.id/mcdonalds/app-section-footers/February2021/G4irt6FwzMogUyJKVJXS.png"
              alt="" style={{width:"25rem", marginLeft:'-35rem'}}
            />
          
        </div>
      </div>
      <div style={{backgroundColor:"#333333", height:'10rem', display:"flex"}}>
        <h2 style={{color:'white', fontWeight:'bold', padding:'3.5rem', marginLeft:'4rem'}}>Instagram McDonald's Indonesia</h2>
        <Button
        href="https://www.instagram.com/mcdonaldsid/?hl=en"
            variant="danger"
            style={{ backgroundColor: "#DB0007", marginLeft: "15rem", height:"2.5rem", marginTop:'3.5rem' }}
          >
            Ikuti @mcdonaldsid
          </Button>
      </div>

    </div>
  );
};

export default Content1;
