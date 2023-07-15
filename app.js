const express = require("express");
const qr = require("qr-image");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/qr", (req, res) => {
  const { url, format } = req.query;
  const qr_img = qr.image(url, { type: format, margin: 1 });
  res.setHeader("Content-Disposition", `attachment; filename=qr-code.${format}`);
  res.type(format);
  qr_img.pipe(res);
});

app.listen(3000, () => {
  console.log("QR code server listening on port http://localhost:3000/qr");
});
