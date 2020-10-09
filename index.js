const express=require('express');
const app =express();
const mongoose= require('mongoose');

app.use(express.json());

//MongoDb Bağlantı
mongoose.connect('mongodb://localhost/TeknikServisDb',{useUnifiedTopology:true, useNewUrlParser:true})
.then(() => console.log("Database Connected"))
.catch(hata => console.log("Could Not Connect To Database"));

//routerlar
const userRouter = require('./routers/usersRouter');
const generalDefinitionsRouter = require('./routers/generalDefinitionsRouter');
const customerRouter = require('./routers/customerRouter');
const deviceRouter=require('./routers/deviceRouter');

//sayfa yönlendirme
app.use('/api/user', userRouter);
app.use('/api/generalDefinitions',generalDefinitionsRouter);
app.use('/api/customer',customerRouter);
app.use('/api/device',deviceRouter);

app.listen(3000, () =>{
    console.log("3000 portundan server başlatıldı.");
});