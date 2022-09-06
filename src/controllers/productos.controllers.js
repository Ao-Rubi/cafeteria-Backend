import Producto from "../models/producto"

export const crearProducto = async (req, res)=>{

    try {
        console.log(req.body)
        //validaciones
        //Crear un objeto para guardar en la base de datos
        const productoNuevo = new Producto({
            nombreProducto: req.body.nombreProducto,
            imagen: req.body.imagen,
            precio: req.body.precio,
            categoria: req.body.categoria
        });

        //guardar efectivamente en la base de datos
        await productoNuevo.save()
        //enviar respuesta al frontend
        res.status(201).json({
            mensaje: "El producto fue creado exitosamente"
        })
        //si algo falla tambien enviar una respuesta

    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "El producto enviado no pudo ser creado"
        })
    }
    
}

export const listarProductos =async (req, res)=>{
    try {
        //Buscar en la base de datos la coleccion de productos
        const listaProductos = await Producto.find();
        //enviar la respuesta
        res.status(200).json(listaProductos);
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar los productos"
        })
    }
}

export const obtenerProducto = async (req, res)=>{
    try {
        //Buscar en la base de datos la coleccion de productos
        const productoBuscado = await Producto.findById(req.params.id);
        //enviar la respuesta
        res.status(200).json(productoBuscado);
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar los productos"
        })
    }
}

export const editarProducto = (req, res)=>{
    res.send("aqui envio un objeto producto para editar")
}

export const borrarProducto = (req, res)=>{
    res.send("Borro un producto con cierta id")
}