import { forwardRef } from "react";
import PropTypes from "prop-types";
import MDInputRoot from "./MDInputRoot";

export const MDInput = forwardRef(({ error, success, disabled, ...rest }, ref) => (
  <MDInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

MDInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

MDInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};
