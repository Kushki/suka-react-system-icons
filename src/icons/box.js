import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Box = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M12.89 1.45003L20.89 5.45003C21.2233 5.6156 21.5037 5.87085 21.6998 6.18707C21.8959 6.50329 21.9999 6.86794 22 7.24003V16.77C21.9999 17.1421 21.8959 17.5068 21.6998 17.823C21.5037 18.1392 21.2233 18.3945 20.89 18.56L12.89 22.56C12.6122 22.6991 12.3058 22.7715 11.995 22.7715C11.6843 22.7715 11.3779 22.6991 11.1 22.56L3.10005 18.56C2.76718 18.3923 2.4878 18.1349 2.29344 17.8168C2.09907 17.4988 1.99745 17.1328 2.00005 16.76V7.24003C2.00025 6.86794 2.10424 6.50329 2.30033 6.18707C2.49642 5.87085 2.77684 5.6156 3.11005 5.45003L11.11 1.45003C11.3866 1.3126 11.6912 1.24109 12 1.24109C12.3089 1.24109 12.6135 1.3126 12.89 1.45003V1.45003Z" />
      <path d="M2.31995 6.15997L11.9999 11L21.6799 6.15997" />
      <path d="M12 22.76V11" />
    </svg>
  );
});

Box.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Box.displayName = 'Box';

export default Box;
