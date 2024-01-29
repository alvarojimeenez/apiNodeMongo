const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

require('dotenv').config();
const teamRoutes = require("./routes/team");
const footballPlayerRoutes = require("./routes/footballPlayer")
const origenRoutes = require("./routes/origen")
const userRoutes = require("./routes/user")

// Configurar la conexión de mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function main() {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("Database connected");
  }
main().catch((err) => console.log(err));

app.use(express.json());
app.use('/teams',teamRoutes);
app.use('/footballPlayer', footballPlayerRoutes);
app.use('/origenTeam', origenRoutes);
app.use('/user', userRoutes);

app.listen(process.env.PORT, () => {
    console.log("El servidor se ha iniciado en el puerto "+process.env.PORT)
})