export const Html = ({ body }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Simple Calculator</title>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script src="client.js"></script>
    </body>
  </html>
`
