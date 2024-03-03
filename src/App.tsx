import "./App.css";
import QRCode from "react-qr-code";
import { BusinessLinks } from "./pages/BusinessLinks";

function App() {
  console.log(window.location.hash);

  const hasLinks = window.location.hash.includes("#links");
  return (
    <>
      {hasLinks ? (
        <BusinessLinks />
      ) : (
        <div>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={"https://jol1992.github.io/QR_project/#links"}
            viewBox={`0 0 256 256`}
          />
        </div>
      )}
    </>
  );
}

export default App;
