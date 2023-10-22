const mongoose = require("mongoose");

const dbConnect = (app) => {
  mongoose
    .connect(
      `mongodb+srv://juanbgalvan19:${process.env.MONGO_DB_PASS}@jyc.t5foftq.mongodb.net/
    `
    )
    .then((res) => {
      const PORT = process.env.PORT;

      app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
      });

      console.log("Conexion exitosa a la BBDD");
    })
    .catch((err) => console.log(err));
};

module.exports = dbConnect;
