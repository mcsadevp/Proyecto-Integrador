import Carousel from "react-bootstrap/Carousel";
import Hosp from "../assets/xy.jpg";
import Hosp1 from "../assets/HospitaltTecnology.png";
import Hosp2 from "../assets/hosp.png";

const carouselelements = [
  {
    image: Hosp,
    text: "Este es un hospital muy lindo",
    alt: "Hospital uno",
    title: "Hopital",
  },
  {
    image: Hosp1,
    text: "Este es un hospital muy lindo",
    alt: "Hospital dos",
    title: "Hosital",
  },
  {
    image: Hosp2,
    text: "Este es un hospital muy lindo",
    alt: "Hospital tres",
    title: "Hospital",
  },
];

const carouselelements2 = [
  {
    image: Hosp,
    text: "Este es un hospital muy lindo",
    alt: "Hospital uno",
    title: "Hopital",
  },
  {
    image: Hosp1,
    text: "Este es un hospital muy lindo",
    alt: "Hospital dos",
    title: "Hosital",
  },
  {
    image: Hosp2,
    text: "Este es un hospital muy lindo",
    alt: "Hospital tres",
    title: "Hospital",
  },
];
const carouselelements3 = [
  {
    image: Hosp,
    text: "",
    alt: "b",
    title: "",
  },
  {
    image: Hosp1,
    text: "",
    alt: "a",
    title: "",
  },
  {
    image: Hosp2,
    text: "",
    alt: "",
    title: "",
  },
];

console.log(carouselelements);
function Carrousel() {
  return (
    <>
      <div className="CarouselFull">
        <div className="Carousel">
          <Carousel data-bs-theme="dark">
            {carouselelements3.map((item, index) => (
              <Carousel.Item key={index}>
                <img className="carouselimg" src={item.image} alt={item.alt} />

                <Carousel.Caption>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="Carouseleft">
          <Carousel data-bs-theme="dark">
            {carouselelements3.map((item, index) => (
              <Carousel.Item key={index}>
                <img className="carouselimg" src={item.image} alt={item.alt} />

                <Carousel.Caption>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="Carouselrigth">
          <Carousel data-bs-theme="dark">
            {carouselelements3.map((item, index) => (
              <Carousel.Item key={index}>
                <img className="carouselimg" src={item.image} alt={item.alt} />

                <Carousel.Caption>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Carrousel;
