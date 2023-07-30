import { useEffect, useState } from "react";
import { YaAuthSuggest } from 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js';
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Key from "./Keyrouting";
import UploadYa from "./UploadYa";


export const Load = (props) => {

   return (
      <div>
         <div>Токен успешно получен, можете загружать файлы на яндекс диск все чотка</div>
      </div>
   )
}




export default function UploadFileTest() {

   const [flagResponse, setFlagResponse] = useState(false);
   const [dates, setDates] = useState([]);
   const [token, setToken] = useState('fdssssssssfs');

   useEffect(() => {

   }, [dates])

   useEffect(() => {
      connect();
   }, [])

   const connect = async () => {
      const data = await getConnect();

   }

   const getConnect = () => {
      window.onload = () => {
         window.YaAuthSuggest.init({
            client_id: '74f4c83a69b94918b559748a5e61dec1',
            response_type: 'token',
            redirect_uri: 'http://localhost:3000/key'
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
            .then(data => { console.log('Сообщение с токеном', data); setDates(data); setFlagResponse(true) })
            .catch(error => console.log('Обработка ошибки', error))
      }
   }



   return (
      <div className="Test">
         <Routes>
            <Route path="/key" element={<Key setToken={setToken} />} />
            <Route path="" element={<UploadYa/>} />
         </Routes>        
      </div>
   )
}

