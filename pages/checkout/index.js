import { useState } from "react";
import styles from "@/styles/Checkout.module.css";
import PageHeader from "@/components/modules/PageHeader/PageHeader";

const Checkout = ({ product, onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.cardNumber || !formData.expiry || !formData.cvv) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!/^\d{16}$/.test(formData.cardNumber)) {
      setErrorMessage("Card number must be 16 digits.");
      return;
    }

    if (!/^\d{3}$/.test(formData.cvv)) {
      setErrorMessage("CVV must be 3 digits.");
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      alert("Payment Successful! Order sent.");
      setIsProcessing(false);
      onBack();
    }, 2000);
  };

  return (
    <>
    <PageHeader route="shopping cart"/>
    <div className={styles.container}>
      <h2 className={styles.title}>Checkout</h2>

      {/* Order Summary */}
      <div className={styles.card}>
        <h4>Order Summary</h4>
        <ul className={styles.list}>
          <li>
            <span>{product.title}</span>
            <strong>
              $
              {product.off
                ? (product.price - (product.price * product.off) / 100).toFixed(2)
                : product.price.toFixed(2)}
            </strong>
          </li>
        </ul>
        <h3 className={styles.total}>
          Total: $
          {product.off
            ? (product.price - (product.price * product.off) / 100).toFixed(2)
            : product.price.toFixed(2)}
        </h3>
      </div>

      {/* Payment Form */}
      <form onSubmit={handleSubmit} className={styles.card}>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <label className={styles.label}>Name on Card</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <label className={styles.label}>Card Number</label>
        <input
          type="text"
          name="cardNumber"
          maxLength="16"
          value={formData.cardNumber}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>Expiry Date</label>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.col}>
            <label className={styles.label}>CVV</label>
            <input
              type="text"
              name="cvv"
              maxLength="3"
              value={formData.cvv}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        {/* Buttons */}
        <div className={styles.btnGroup}>
          <button type="button" onClick={onBack} className={styles.backBtn}>
            Back to Product
          </button>
          <button type="submit" className={styles.submitBtn} disabled={isProcessing}>
            {isProcessing ? "Processing..." : "Confirm Payment"}
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Checkout;
