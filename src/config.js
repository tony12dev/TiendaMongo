import { config } from "dotenv"; 

config();

export const MONGODBURI = process.env.MONGODBURI || "mongodb://127.0.0.1:27017/tiendaweb-mongo"
export const PORT = process.env.PORT || 5000