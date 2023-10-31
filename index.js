require("dotenv").config();
const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
// const PORT = 5050
const PORT = process.env.PORT || 5050;
const cors = require('cors')
const taskRouter = require('./Routes/TaskRouter');


//midware

app.use(express.json());
app.use(cors())



//route
app.use("/api/task", taskRouter)




//db connections 
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "task",
        })
        app.listen(PORT, () => {
            console.log((`Server running on port  ${PORT}...`));
        })
    }catch (error) {
        console.log(error);
    }
};
startServer(); 




//error route

app.use((req, res) => {
    res.status(404).json({success: false, msg: "Resource not found"});
});
