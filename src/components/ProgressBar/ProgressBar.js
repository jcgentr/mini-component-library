/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--width": "370px",
    "--borderRadius": "4px",
  },
  medium: {
    "--height": "12px",
    "--width": "370px",
    "--borderRadius": "4px",
  },
  large: {
    "--height": "24px",
    "--width": "370px",
    "--borderRadius": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const sizeStyles = SIZES[size];

  return (
    <div>
      <VisuallyHidden>
        <label for="loadinglabel">Loading:</label>
      </VisuallyHidden>
      <StyledProgress
        id="loadinglabel"
        max="100"
        value={value}
        style={sizeStyles}
      ></StyledProgress>
    </div>
  );
};

const StyledProgress = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  width: var(--width);
  height: var(--height);

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--borderRadius);
    box-shadow: 0px 2px 4px 0px rgba(128, 128, 128, 0.35) inset;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 4px 0px 0px 4px;
  }

  &::-moz-progress-bar {
    background-color: ${COLORS.primary};
    border-radius: var(--borderRadius);
    box-shadow: 0px 2px 4px 0px rgba(128, 128, 128, 0.35) inset;
  }
`;

export default ProgressBar;
