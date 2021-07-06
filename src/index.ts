// Required External Modules
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import { itemsRouter } from './items/items.router';

dotenv.config();
 
 //App Variables
 if(!process.env.PORT){
     process.exit(1);
 }

 const PORT: number = parseInt(process.env.port as string, 10)
 
 const app = express();
 
 //App Configuration
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu/items", itemsRouter);

//Server Activation
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
