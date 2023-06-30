import { connect } from "mongoose";
import { MONGODBURI } from "./config";


(async () =>{
    try{
        const db = await connect(MONGODBURI);
        console.log("Database connected to", db.connection.name);
    }catch (error){
        console.error(error);
       
    }
    
})();