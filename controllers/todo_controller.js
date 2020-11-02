// Import bodyparser module

var bodyParser = require('body-parser');
var urlencoderParser = bodyParser.urlencoded({extended:false});
var data = [{
    item:'Finish Project'
},{
    item:'Finish Writing the Novel'
},{
    item:'Edit Videos'
}]

module.exports = (app)=> {
    // Set up our routes
    app.get('/todo',(req,res)=>{
        res.render('todo',{todos:data})
    });
    app.post('/todo',urlencoderParser,(req,res)=>{
        data.push(req.body);
        res.json(data)
    });
    app.delete('/todo/:item',(req,res)=>{
        data = data.filter((todo)=>{
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    })
}