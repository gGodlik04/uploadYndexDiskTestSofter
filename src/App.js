import ConnectYaID from "./ConnectYaID";
import { YaAuthSuggest } from 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js';
import './style.css';


export default function App() {
  return (
    <div className="App">
      <ConnectYaID/>
    </div>
  );
}

