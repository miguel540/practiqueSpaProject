// Esta interface determina el tipado de la información que va a recibir el componente. En este caso, recibe un array de países.

import { IPais } from '../interfaces/pais.interface';

// Se decide poner aquí y no en la carpeta interfaces porque su uso va a ser exclusivo para este componente.
interface IComponenteCardPaisesProps {
  paises: IPais[];
}

// El componente recibe los países y los renderiza
export const CardPaises = ({ paises }: IComponenteCardPaisesProps) => {
  return (
    <>
      <div className="row">
        {paises.map((x, i) => (
          // Para renderizar los países utilizamos otro componente
          <div className="col" key={i}>
            <div className="card">
              <img
                className="card-img-top"
                src={x.flags.png}
                alt={'Bandera de' + x.name.common}
                style={{ width: '18rem' }}
              />
              <div className="card-body">
                <h5 className="card-title">{x.name.common}</h5>
                <p className="card-text">Capital: {x.capital && x.capital[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
