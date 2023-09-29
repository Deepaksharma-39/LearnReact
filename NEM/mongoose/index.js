const mongoose= require("mongoose");

const connections=mongoose.connect("mongodb://127.0.0.1:27017/trial1");

   

    const StudentSchema=new mongoose.Schema({
        name:{type:String, required:true},
        student_id:{type:String, required:true},
        age:{type:Number, required:true},
        class:{type:String, required:true}
    });

    const StudentModel=mongoose.model("student",StudentSchema);

   

module.exports={
    connections,
    StudentModel
}