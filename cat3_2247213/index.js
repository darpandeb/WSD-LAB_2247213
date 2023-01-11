var express = require('express');
var app = express();
const mysql = require('./connection').con;
port = 8000;
app.set("view engine","hbs");
app.set("views","./views");

app.get('/', function(req, res){
    res.render('index');
});
app.get('/add', function(req, res) {
    res.render('add');
});
app.get('/search', function(req, res) {
    res.render('search');
});
app.get('/searchbydept', function(req, res) {
    res.render('searchbydept');
});
app.get('/searchbysal', function(req, res) {
    res.render('searchbysalary');
});
app.get('/update', function(req, res) {
    res.render('update');
});
app.get('/delete', function(req, res) {

    res.render('delete');
});
// view
app.get('/view', function(req, res) {
    qry = 'select * from spring'
    mysql.query(qry, function(err, results) {
        if(results.length>0)
        {
            res.render('view', {data:results});
        }
        else
        {
            res.render('view', {mesg:true});
        }
    })
    
});
//add
app.get('/adduser', function(req, res) {
    console.log(req.query);
    const { id , name , desg, dept, salary, loc} = req.query;

    let qry = "select * from spring where emp_id=? "
    mysql.query(qry, [id], function(err,results)
    {
        if (err) throw err;
             if (results.length > 0)
             {
                 res.render('add', { mesg2 : true});
             }
             else
             {
                 let qry2 = 'insert into spring  values (?,?,?,?,?,?)';
                mysql.query(qry2, [id , name , desg, dept, salary, loc], function(err,results)
                 {
                     if (err) throw err;
                     if (results.affectedRows>0)
                     {
                         res.render('add', {mesg:true});
                     }
                 });
             }
    });
});
//delete
app.get('/deleteuser', function(req, res)
{
      const {id} = req.query;
      qry = 'delete from spring where emp_id = ?';
      mysql.query(qry,[id] ,function(err,results){
        if (err) throw err;
        //res.send(results)

        if(results.affectedRows>0)
        {
            res.render('delete', {message:true});
        }
        else{
            res.render('delete', {message1:true});
        }
      })
});

//seacrh
app.get('/searchuser', function(req, res)
{
    const {id} = req.query;
    qry = 'select * from spring where emp_id =?'
    mysql.query(qry, [id], function(err, results)
    {
      if (err) throw err;
      if (results.length>0)
      {
         res.render('search', {mesg:true});
      }
      else{
        res.render('search', {mesg1:true});
      }
    });

});
//update
app.get('/updateuser', function(req, res)
{
    const {id} = req.query;
    
    qry = 'select * from spring where emp_id =?'
    mysql.query(qry, [id], function(err, results)
    {
      if (err) throw err;
      if (results.length>0)
      {
         res.render('update', {mesg:true, data:results});
      }
      else{
        res.render('update', {mesg1:true});
      }
    });
});

app.get('/updateduser', function(req, res)
{
    console.log(req.query);
    const { id , name , desg, dept, salary, loc} = req.query;
    qry = 'update spring set emp_id=?,emp_name =?,emp_designation =?, emp_dept =?, emp_salary=?, emp_loc=? where emp_id =?'
    mysql.query(qry,[ id, name , desg, dept, salary, loc, id], function(err,results)
    {
        //res.send(results);
        if(results.affectedRows>0)
         {
             res.render('update', {message:true});
        }
    })
});
//searchby dept

app.get('/searchbydept1', function(req, res)
{
    const {dept} = req.query;

    qry = 'select * from spring where emp_dept =?'
    mysql.query(qry, [dept], function(err, results)
    {
      if (err) throw err;
      if (results.length>0)
      {
         res.render('searchbydept', {mesg:true, data:results});
      }
      else{
        res.render('searchbydept', {mesg1:true});
      }
    });
});
//seacrh by salary

app.get('/searchbysal1', function(req, res)
{
    const {salary} = req.query;
    console.log(salary);
    qry = 'select * from spring where emp_salary >= ?'
    mysql.query(qry, [salary], function(err, results)
    {
      if (err) throw err;
      if (results.length>0)
      {
         res.render('searchbysalary', {mesg:true, data:results});
      }
      else{
        res.render('searchbysalary', {mesg1:true});
      }
    });
});
app.listen(port, (err)=>
{
     if(err) throw err;
     console.log(`listening at port number ${port}`)
});