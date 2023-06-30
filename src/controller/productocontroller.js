import Productos from "../models/Productos";

export const renderProductos = async (req, res) => {
  const productos = await Productos.find().lean();
  res.render("index", { productos: productos });
};

export const createProductos = async (req, res) => {
  try {
    const productos = Productos(req.body);
    await productos.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderUpdateProductos = async (req, res) => {
  try {
    const productos = await Productos.findById(req.params.id).lean();
    res.render("editar", { productos });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProductos = async (req, res) => {
  const { id } = req.params;
  await Productos.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteProductos = async (req, res) => {
  const { id } = req.params;
  await Productos.findByIdAndDelete(id);
  res.redirect("/");
};

export const statusProductos = async (req, res) => {
  const { id } = req.params;
  const productos = await Productos.findById(id);
  //mando a trae mi propiedad opcion que esta en productos.js
  productos.opcion = !productos.opcion;
  await productos.save();
  res.redirect("/");
};
