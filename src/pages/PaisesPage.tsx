import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { IPais } from '../interfaces/pais.interface';
import { CardPaises } from '../components/CardPaises';

export const PaisesPage = () => {
  // useParams es un hook que nos permite recibir los parámetros. En este caso, recibimos el parámetro continente desde el PaisesRoutes.tsx
  // Recibimos un objeto como este: {continente:"europe"}. Mediante la desestructuración podemos obtenerlo
  const [paises, setPaises] = useState<IPais[]>([]); //useState para gestionar cambios de estado en los países que vienen de la API Rest Countries
  const [status, setStatus] = useState<number>(0); //useState para gestionar cambios de estado en el status (202 o 404) que devuelve la API Rest Countries
  const [errorFetch, setErrorFetch] = useState<boolean>(false); // useState para getionar cambios de estado en el error que puede producir fetch
  const [continente, setContinente] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const getPaises = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchPaises();
  };

  const fetchPaises = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await fetch(`https://restcountries.com/v3.1/region/${continente}`);
      const json: IPais[] = await data.json();
      setStatus(data.status);
      setPaises(json);
      setErrorFetch(false);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setErrorFetch(true);
    }
  };

  const onChangeContinente = (e: ChangeEvent<HTMLInputElement>) => {
    setContinente(e.target.value);
  };

  useEffect(() => {
    if (loading) {
      fetchPaises();
    }
  }, [loading]); // Este es el array de dependencias de useEffect. Si ponemos un array vacío, lo que está dentro de useEffect se ejecuta solo la primera vez que el componente se carga.

  return (
    <>
      <h1>Países de {continente}</h1>
      <hr />
      <form onSubmit={getPaises}>
        <div className="form-group">
          <label htmlFor="continente">Introduce continente</label>
          <input id="continente" type="text" className="form-control" value={continente} onChange={onChangeContinente} />
        </div>
        <button className="btn btn-success" type="submit" disabled={continente.trim() === ''}>
          Obtener países
        </button>
      </form>
      {/* Si loading es true, mostramos un mensaje que se está resolviendo la petición de datos */}
      {loading && (
        <div className="alert alert-info" role="alert">
          Esperando datos...
        </div>
      )}
      {/* Si errorFetch es true, mostramos un mensaje de error al usuario */}
      {errorFetch && (
        <div className="alert alert-danger" role="alert">
          No se ha podido establecer la conexión con el recurso solicitado
        </div>
      )}
      {/* Si el status devuelto es un 200, es que sí se han encontrado los datos */}
      {status === 200 && <CardPaises paises={paises} />}
    </>
  );
};
