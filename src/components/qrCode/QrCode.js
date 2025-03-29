import { React } from "react";
import "../qrCode/QrCode.scss";
import qrCode from "../../images/qr-code.svg";

const QrCode = ({ closeQrCode }) => {
  return (
      <div className="qrcode">
        <div className="qrcode__container">
          <h1>Scan QR Code</h1>

          <img src={qrCode} alt="QR Code"></img>

        <button
          className="qrcode__container__button"
          onClick={() => closeQrCode(false)}
        >
            Close QR Code
          </button>
        </div>
      </div>
  );
};

export default QrCode;
