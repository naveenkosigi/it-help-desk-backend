const schema=require('mongoose').Schema;
const autoIncrement=require('mongoose-auto-increment');
const connection=require('mongoose').createConnection('mongodb://localhost/ithelpdesk');
const idValdiator=require('mongoose-id-validator');


autoIncrement.initialize(connection);


const requestSchema=new schema({
    subject:{
        type:String,
        maxlength:70,
        required:true
    },
    description:{
        type:String
    },
    status:{
        type:schema.Types.ObjectId,
        ref:'status'
    },
    priority:{
        type:schema.Types.ObjectId,
        ref:'priority'
    },
    requester:{
        type:schema.Types.ObjectId,
        ref:'requester',
        required:true
    },
    technician:{
        type:schema.Types.ObjectId,
        ref:'technician'
    },
    notes:[
        {
            type:schema.Types.ObjectId,
            ref:'note'
        }
    ]
},{timestamps:true});

requestSchema.plugin(autoIncrement.plugin,{
    model:'request',
    field:'displayId',
    startAt:1,
    incrementBy:1
});

requestSchema.plugin(idValdiator);


// requestSchema.pre('validate',function(next){
//     console.log("validate fired");
//     next();
// });


module.exports=connection.model('request',requestSchema);