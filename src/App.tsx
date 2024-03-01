import "./App.css";
import QRCode from "react-qr-code";

function App() {
  return (
    <div>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={"https://github.com/jol1992"}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}

export default App;
