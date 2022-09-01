import mongoose from "mongoose";

const url = "mongodb://localhost:27017/cafeteriac2i"

mongoose.connect(url);

const conenction = mongoose.connection;

conenction.once("open", () =>{
    console.log("Conectado a la base de datos")
})