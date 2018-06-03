const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test').then(()=>{
  console.log('connected successfully !!');
}).catch((e)=>{
  console.log(e);
});

var todos=mongoose.model('todos',{
  text : {
    type: String,
    minlength: 6,
    required:true,
    default: "bla bla bla"
  },
  completed : {
    type: Boolean,
    required: true,
    default: false
  }
})


todos.find({}).then((docs)=>{
  console.log(docs);
}).catch((e)=>{
  console.log(e);
})

todos.count({completed:true}).then((x)=>{
  console.log(x);
}).catch((e)=>{
  consoloe.log(e);
})


// var todo1=new todos();
// todo1.text="happy happy";
// todo1.completed=true;
// todo1.save({todo1}).then((docs)=>{
//   console.log(`data ${docs} saved successfully !! do more time pass !!`);
//   console.log(`timestamp is  ${docs._id.getTimestamp()} !!`);
// }).catch((e)=>{
//   console.log(e);
// });


//mongoose.connection.close();
