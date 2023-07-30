
export default function UploadYa() {

    const handleChange = (event) => {
        console.log('ya');
     }
   
    const handleUpload = (event) => {
        console.log('ya');
    }

    return (
        <div>
            <div className="header">Загрузка файлов на ваш яндекс диск</div>
            <input
                type="file"
                onChange={handleChange} />
                <button className="buttonLoad" onClick={handleUpload}>Загрузить</button>
        </div>
    )
}