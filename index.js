import express from "express";

//instancia de express
const app = express();

//queremos tomar un puerto de la pc
app.set("port", process.env.PORT || 4000)

//Quiero que mi backend escuche el puerto
app.listen(app.get("port"), ()=> {
    console.log("estamos en el puerto " + app.get("port"))
})


console.log("Putaso")