import CardCM from "../components/CardCM";
import { useEffect, useState } from "react";
import axios from "axios";

const app2 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/contacto/lista",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {data[0] &&
        data.map((item) => (
          <div key={item.centroMedicoID}>
            <CardCM nombre={item.nombreDelCentro} />
          </div>
        ))}
    </>
  );
};
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/centromedico/lista",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {data[0] &&
        data.map((item) => (
          <div key={item.centroMedicoID}>
            <CardCM
              nombre={item.nombreDelCentro}
              comuna={item.comunaCentro}
              direccion={item.direccionesCentros}
              horASemana={item.horarioAperturaSemana}
              horCSemana={item.horarioCierreSemana}
              horASabado={item.horarioAperturaSabado}
              horCSabado={item.horarioCierreSabado}
              horADomingo={item.horarioAperturaDomingo}
              horCDomingo={item.horarioCierreDomingo}
              telefonos={item.telefonoCentros}
              dominio={item.dominioWeb}
              red={item.redSocialId}
              email={item.contactoEmail}
              clasificacion={item.clasificacionTipoCentro}
              urgencia={item.urgencia}
            />
          </div>
        ))}
      
    </>
  );
}
export default Home;
