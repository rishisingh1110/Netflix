import { useNavigate } from "react-router-dom";
import Header from "./Header";
import styles from "../component/Style/payment.module.css";
import { FooterComp } from "../components/FooterComp";

export const Payment = () => {
  const navigate = useNavigate();

  const payment = () => {
    navigate("/paymentform");
  };

  return (
    <div className={styles.paymentbig}>
      <Header />
      <div className={styles.middlebox}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
          className={styles.lockpic}
          alt=""
        />
        <p>STEP 3 OF 3</p>
        <h2>Set up your payment</h2>
        <p>Your membership starts as soon as you set up payment.</p>
        <h4>No commitments. Cancel online anytime.</h4>
      </div>
      <button onClick={() => payment()} className={styles.btnbox}>
        <img src="https://www.linkpicture.com/q/btnpic.png" alt="" className={styles.btnpic} />
      </button>
      <FooterComp />
    </div>
  );
};
