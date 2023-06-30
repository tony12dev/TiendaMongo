import { Router } from "express";
import Productos from "../models/Productos";
import { redirect } from "express/lib/response";
import {
  createProductos,
  deleteProductos,
  renderProductos,
  renderUpdateProductos,
  statusProductos,
  updateProductos,
} from "../controller/productocontroller";

const router = Router();

router.get("/", renderProductos);

router.post("/productos/agregar", createProductos);

router.get("/productos/:id/update", renderUpdateProductos);

router.post("/productos/:id/update", updateProductos);

router.get("/productos/:id/delete", deleteProductos);

router.get("/productos/:id/status", statusProductos);

export default router;
