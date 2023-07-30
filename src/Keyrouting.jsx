import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, ReactRouterDom } from "react-router-dom";


export default function Key(props) {

    
    const paramValue = window.location.href

    const [token, setToken] = useState('');

    const parseHref = () => {
        let symbolEquals = paramValue.indexOf("=")+1;       // if yandex-api redirect dosen't work 
        let symbolAmpersand = paramValue.indexOf("&");      // parse href and set from props state
        setToken(paramValue.slice(symbolEquals, symbolAmpersand));
    }

    useEffect (() => {
        parseHref();
        console.log(token)
    })



    return (
        <div >
            {
                window.onload = function () {
                    window.YaSendSuggestToken("http://localhost:3000", {
                        "kek": true
                    })
                    props.setToken(parseHref);
                }
            }
        </div>
    )
}


