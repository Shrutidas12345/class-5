//to show frontend 
// importing pakages
const server=require('express')
const app=server()
const path=require('path')
const port=8009
const mongoose=require('mongoose')
const body=require('body-parser')


//middleware application
// line 13 for upload main contain,line 14 for apply css,line 15 for accessing data from frontend,line 18 for convert data in json
app.set('view engine','ejs')
app.use(server.static(path.join(__dirname,'public')))
app.use(body.urlencoded({ //to decode those datas that is coming ffrom frontend
    extended:true
}))
app.use(body.json())
app.get("/",(req,res)=>{
    res.render('signup')
})

//connect mongoose  taking help of mongoose pakage conection of database
//if error comes then catch
mongoose.connect("mongodb://localhost:27017/ecom").then(()=>console.log("connected")).catch (err=>console.log(err))

//creating the schema TO create collection (Validation declaration)
const userSchema=new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
})
//making collection
const userData=mongoose.model('user',userSchema)
//now we will save collection 
app.post(("/submit"),(req,res)=>{
    const fname=req.body.f1   //storing the variable that is coming from body
    const lname=req.body.f2   //storing the variable that is coming from body
    const email=req.body.f3  //storing the variable that is coming from body
    const password=req.body.f4  //storing the variable that is coming from body
    //send data
    const newUserFormData=new userData({fname,lname,email,password})
    newUserFormData.save().then(()=>console.log("data inserted")).catch(err=>console.log(err))
    res.send("data inserted in the database")
})
app.listen(port,(err)=>{
    if(!err)
        console.log(`${port}server is running`)
}
)