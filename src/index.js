const server = require("./server");
const cors = require("cors");

server.use(cors());

server.listen(process.env.PORT || 3333);
