import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ price }) => {
  const [isButtonVisible, setButtonVisible] = useState(false);

  const handlePayNowClick = () => {
    if (price <= 0) {
      alert("Invalid payment amount!");
      return;
    }
    setButtonVisible(true);
  };

  return (
    <div>
      <button
        onClick={handlePayNowClick}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#0070BA",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Pay Now
      </button>

      {isButtonVisible && (
        <div style={{ marginTop: "20px" }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: price.toFixed(2), // Dynamically set price
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                alert(
                  `Transaction completed by ${details.payer.name.given_name}`
                );
                setButtonVisible(false); // Hide PayPal buttons after successful payment
              });
            }}
            onError={(err) => {
              console.error("PayPal Checkout Error:", err);
              alert("An error occurred. Please try again.");
              setButtonVisible(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PayPalButton;
