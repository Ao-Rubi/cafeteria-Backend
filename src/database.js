import mongoose from "mongoose";

// const url = "mongodb://localhost:27017/cafeteriac2i"  // Base de dato local
const url = "mongodb+srv://Ao-Rubi:PHw1oZrxL4mHy8ry@cluster0.x3upctr.mongodb.net/cafec2i" //Base de dato en la nube


mongoose.connect(url);

const conenction = mongoose.connection;

conenction.once("open", () =>{
    console.log("Conectado a la base de datos")
})