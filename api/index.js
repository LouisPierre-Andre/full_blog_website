import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'



dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDb is connected');
    }).catch((err) => {
        console.log(err); 
        console.log("errorrrrrrrrrrrrrrrrrrrrrrr");
    })
        
                 
const app = express();

app.listen(3000, () => {
    console.log('Server is running on pour 3000 !!!')
})
 


app.use('/api/user', userRoutes);    
