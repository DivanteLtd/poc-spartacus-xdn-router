const port = parseInt(process.env.port, 10) || 3000;
const { createServer } = require("http");
const router = require("./routes")();

createServer((req, res) => {
  router.run(req, res);
}).listen(port, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
