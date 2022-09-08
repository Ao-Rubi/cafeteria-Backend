import express from "express";
import morgan from "morgan";
import cors from "cors";
import "./src/database"
import router from "./src/routes/productos.routes";

//instancia de express
const app = express();

//queremos tomar un puerto de la pc
app.set("port", process.env.PORT || 4000)

//Quiero que mi backend escuche el puerto
app.listen(app.get("port"), ()=> {
    console.log("estamos en el puerto " + app.get("port"))
})

//middleware
app.use(morgan("dev")); // da info en la terminal
app.use(cors()); // Permite recibir peticiones remotas

//los dos middlewares sirven para procesar un objeto json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Cargar un acrchivo estatico
app.use(express.static("./public"))

//rutas
app.use("/apicafe", router);