import { useFetch } from './hooks/useFetch';
import { useForm } from './hooks/useForm';
import { useEffect } from 'react';
import { AxiosHeaders } from 'axios';
export const App = () => {

    //Inicializar el hook useFetch, no es necesario pasarle el segundo y tercer parametro, si se va a realizar una petición get sin ningun header

    const header = new AxiosHeaders();

    header.set("Content-Type", "application/json");

    const {data, error, loading} = 
    useFetch("https://rickandmortyapi.com/api/character/?page=8", "GET", header);

    const {email, password, isValidateEmail, isValidatePassword,        handleInputChange} = useForm();

    return (
        <div><p>App</p>
            <span className="subtitle">using Rick and Morty API</span>
            <p>Error: {JSON.stringify(error)}</p>
            <p>Loading: {JSON.stringify(loading)}</p>
            {
                (data.length > 0) && data.map( ({ id, image, name }) => (
                  <div key={id}> 
                    <img src={image} alt={image} /> 
                    <p>{name}</p> 
                  </div>
                ))
            }
            <input placeholder='email' name="email" type="text" value={email} onChange={handleInputChange} />
            {!isValidateEmail && <p style={{color: "red"}}>Email no valido</p>}
            <input placeholder='password' name="password" type="password" 
            value={password} onChange={handleInputChange} />
            {!isValidatePassword && <p style={{color: "red"}}>Password no valido</p>}
        </div>
    )
}
