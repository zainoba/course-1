 exports.loginuser=( (req , res) =>{
    const username=req.body.username;
    const password=req.body.password;
  
    if(username==""|| password==""){
        return res.json({
            msg :' الرجاء ادخال جميع البيانات ',
            state:0
        })
    }
    if(username=="zezo"&&password=="12345")
    res.json({
        msg :'اهلا و سهلا',
        state:1
    })
    res.json({
        msg :'البيانات خطاء',
        state:0
    })
 })


    exports.singupuser=(req,res) => {

        const username=req.body.username;
        const password=req.body.password;
        const email=req.body.email;
        const phone=req.body.phone;

        if(!username|| !password||!email||
        !phone){
            return res.json({
                msg :' الرجاء ادخال جميع البيانات ',
                state:0
            })}
        if(username===""|| password===""||email===""||
        phone===""){
            return res.json({
                msg :' الرجاء ادخال جميع البيانات ',
                state:0
            })}
        
        req.mydata=req.body;
        res.json({
            msg :' تم التسجيل ',
            state:1 })
        }