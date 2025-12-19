require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
const connectDB=require('./config/db');
const projects=require('./routes/projects');
const path=require('path');

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGODB_URI);
app.use(cors({origin:"*", credentials:true}));
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.use('/api/projects',projects);
app.get('/',(req,res)=>res.send('Portfolio API running'));
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });