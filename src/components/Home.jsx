import { Carousel } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import "../disk/css/main.css";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="homepage-1">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://nos.jkt-1.neo.id/mcdonalds/home-banners/December2022/0SShqF9MJ5CMMgDodfiN.jpeg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://nos.jkt-1.neo.id/mcdonalds/home-banners/November2022/SORmnDDjHbRj9w2EPpZ7.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="hompeage2">
          <h1 style={{ marginLeft: "35rem", marginTop: "3rem" }}>
            Promo Menarik
          </h1>
          <div
            style={{
              display: "flex",
              padding: "2rem",
              gap: "1rem",
              marginLeft: "5px",
            }}
          >
            <div
              className="card-home"
              style={{ display: "flex", height: "23rem", gap: "1rem" }}
            >
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZk5_HgFF_F5cF_Rl-fTcGq_-u_0kTuuANg&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "16px", fontWeight: "bold" }}>
                    Promo MCD 19-25 Agustus 2021 Beli 3 Ayam & 3 Nasi
                  </Card.Title>
                  <Button
                    variant="primary"
                    style={{ marginLeft: "4rem", width: "5rem" }}
                  >
                    Beli
                  </Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStDIVOZ1d2EtmYtwiMZtQl17af2Imuo3jBg&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "16px", fontWeight: "bold" }}>
                    Promo MCD 19-25 Agustus 2021 Beli 3 Ayam & 3 Nasi
                  </Card.Title>
                  <Button
                    variant="primary"
                    style={{ marginLeft: "4rem", width: "5rem" }}
                  >
                    Beli
                  </Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQynInkKwkF9y7Wrt7QujZveV9ZT0NMogHol3sjPzr0bIaxydOeQsQ3dT4Cdmx49xaE9SCOBH39CNbKOggVzId7-Fau5JDW3PTFq7l2nUQfwtbqkg3Ju-5U2AlUjm6oR2PRV9Tz6imEbyIrhVH_8tdYSyBjHLAkpqn0hRlBXp61e0vHcxM7oemtsxy/s989/McDonalds%20Dark%20Choco%20McFlurry%20&%20Vanilla%20Black%20Waffle%20Cone.jpgzz"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "16px", fontWeight: "bold" }}>
                    Promo MCD 19-25 Agustus 2021 Beli 3 Ayam & 3 Nasi
                  </Card.Title>
                  <Button
                    variant="primary"
                    style={{ marginLeft: "4rem", width: "5rem" }}
                  >
                    Beli
                  </Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://caripromo.id/images/bca/promo-bca-mcdonalds-diskon-2.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "16px", fontWeight: "bold" }}>
                    Promo MCD 19-25 Agustus 2021 Beli 3 Ayam & 3 Nasi
                  </Card.Title>
                  <Button
                    variant="primary"
                    style={{ marginLeft: "4rem", width: "5rem" }}
                  >
                    Beli
                  </Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://pbs.twimg.com/media/EU2hfEBU8AArPbS.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "16px", fontWeight: "bold" }}>
                    Promo MCD 19-25 Agustus 2021 Beli 3 Ayam & 3 Nasi
                  </Card.Title>
                  <Button
                    variant="primary"
                    style={{ marginLeft: "4rem", width: "5rem" }}
                  >
                    Beli
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <Button
            style={{
              backgroundColor: "red",
              marginLeft: "37rem",
              marginBottom: "2rem",
            }}
          >
            Lihat Semua Promo
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
