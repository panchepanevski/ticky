import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 16px;
          margin: 0;
          color: ${theme.colors.primary};
          background-color: ${theme.colors.background};
          font-family: 'Ubuntu', sans-serif;
        }
      `}
    />
  );
}

export default GlobalStyles;
