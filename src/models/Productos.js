import { Schema , model } from "mongoose";

const productoEsquema = new Schema(
    {
        nombre:{
            type: String,
            require: true,
            unique: true,
            trim: true,

        },
        descripcion:{
            type: String,
            requiere: true,
        },
        precio:{
            type: String,
            requiere: true,
        },
        opcion: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true,
        versionKey: false

    }
);

export default model("Productos", productoEsquema);
