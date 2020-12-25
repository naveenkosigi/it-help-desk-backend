const schema=require('mongoose').Schema;
const autoIncrement=require('mongoose-auto-increment');
const connection=require('mongoose').createConnection('mongodb://localhost/ithelpdesk');

autoIncrement.initialize(connection);


const requestSchema=new schema({
    subject:{
        type:String,
        maxlength:70
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
        ref:'requester'
    },
    technician:{
        type:schema.Types.ObjectId,
        ref:'technician'
    }
},{timestamps:true});

requestSchema.plugin(autoIncrement.plugin,{
    model:'request',
    field:'displayId',
    startAt:1,
    incrementBy:1
});

module.exports=connection.model('request',requestSchema);