import { useState, useEffect} from "react";

export default function UploadYa(props) {

    const [selectedFile, setSelectedFile] = useState(null);
    const [jsonUpload, setJsonUpload] = useState(null);

    const url = 'https://cloud-api.yandex.net:443/v1/disk/resources/upload?path=';

    const getUrlUpload = async (file) => {
        const headers = new Headers({
            'Authorization': 'OAuth ' + props.dates.access_token,
            'Content-Type': 'application/json'
        });

        const init = {
            method: 'GET',
            headers: headers
        };

        const src = url + file.name + '&overwrite=true';

        try {

            const res = await fetch(src, init);
            const json = await res.json();
            setJsonUpload(json);
            await handleUpload(file, json);

          } catch (e) {
          
            console.log(e);
          
          }
    }

    useEffect(() => {
        if (selectedFile) {
            for (let i = 0; i<selectedFile.length; i++)
            {
                getUrlUpload(selectedFile[i]);  
            }
        }
    }, [selectedFile])




    const handleUpload = async (file, json) => {

        
        const formData = new FormData();
        formData.append('file', file);

        const init = {
            method: 'PUT',
            body: formData
        };

        try {

            const res = await fetch(json.href , init);

          } catch (err) {
          
            console.log(err);
          
          }

    }

    const handleChange = (event) => {
            if (event.target.files.length > 100) {
                alert("Only 100 files accepted.");
                event.preventDefault();
            }
            else if(!!!props.dates.access_token){
                alert("authorize begin");
                event.preventDefault()
            }
                else {
                    setSelectedFile(event.target.files);
                }
            
        
    }



    return (
        <div>
            <div className="header">Загрузка файлов на ваш яндекс диск</div>
            <div className="main">
                <div className="content">
                <input
                    type="file"
                    onChange={handleChange}
                    multiple
                />
                <button className="buttonLoad" onClick={handleUpload}>Загрузить</button>
                <div className="description">Перед тем как загружать файлы, дождитесь загрузки Яндекс-виджета и авторизуйтесь. <hr></hr>
                Загрузка файлов производится в режиме multiple.
                </div>
                </div>
            </div>
        </div>
    )
}