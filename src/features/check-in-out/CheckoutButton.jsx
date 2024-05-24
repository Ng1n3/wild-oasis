import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";
import PropTypes from "prop-types";

function CheckoutButton({ bookingId }) {
  const { checkout, ischeckingOut } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={ischeckingOut}
    >
      Check out
    </Button>
  );
}

CheckoutButton.propTypes = {
  bookingId: PropTypes.number,
};

export default CheckoutButton;
