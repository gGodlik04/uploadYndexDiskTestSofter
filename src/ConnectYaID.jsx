import { useEffect, useState } from "react";
import { YaAuthSuggest } from 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js';
import { Route, Routes } from "react-router-dom";
import Key from "./Keyrouting";
import UploadYa from "./UploadYa";


export default function ConnectYaID() {

   const [dates, setDates] = useState([]);


   useEffect(() => {
      connect();
   }, [])
 

   const connect = async () => {
      const data = await getConnect();
   }

   const getConnect = () => {
      window.onload = () => {
         window.YaAuthSuggest.init({
            client_id: '74f4c83a69b94918b559748a5e61dec1', // client id 
            response_type: 'token',
            redirect_uri: 'http://localhost:3000/key' // redirect url
         },
            'http://localhost:3000/key', {
            view: 'button',
            parentId: 'container',
            buttonView: 'main',
            buttonTheme: 'light',
            buttonSize: 'm',
            buttonBorderRadius: 15
         }
         )
            .then(({
               handler
            }) => handler())
            .then(data => { console.log('Сообщение с токеном', data); setDates(data);})
            .catch(error => console.log('Обработка ошибки', error))
      }
   }



   return (
      <div className="container">
         <Routes>
            <Route path="/key" element={<Key />} />
            <Route path="" element={<UploadYa dates={dates}/>} />
         </Routes>        
      </div>
   )
}

