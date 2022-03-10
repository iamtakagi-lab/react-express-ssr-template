import React from "react";
import { renderToString } from "react-dom/server";

export const App: React.FC<{}> = () => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <title>react-express-ssr-template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="./style.css" />
      <script src="./script.js" defer></script>
    </head>
    <body></body>
  </html>
);

export const renderApp = () => renderToString(<App />);
