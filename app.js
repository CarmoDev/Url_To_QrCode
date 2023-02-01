const express = require('express');
const qr = require('qr-image');

const app = express();

app.get('/qr', (req, res) => {
  const { url } = req.query;
  const qr_svg = qr.image(url, { type: 'svg' });
  res.setHeader('Content-Disposition', 'attachment; filename=qr-code.svg');
  res.type('svg');
  qr_svg.pipe(res);
});


app.listen(3000, () => {
  console.log('QR code server listening on port http://localhost:3000/qr?url=');
});
