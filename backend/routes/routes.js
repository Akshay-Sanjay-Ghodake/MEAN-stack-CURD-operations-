const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Employee = require('../models/employee.js');

//Get, Post, Put, Delete
//Base path: http://localhost:3000/employees



//GET Api
router.get('/', (req, res)=> {
    Employee.find((err, doc)=> {
        if(err){
            console.log('Error in GET Data : ')
        }else{
            res.send(doc);
        }
    }) 
});


//GET singal employee Api
router.get('/:id', (req, res)=> {
    if(ObjectId.isValid(req.params.id)){
        Employee.findById(req.params.id,(err, doc) =>{
            if(err){
                console.log('Error in empID Data : '+err)
            }else{
                res.send(doc);
            }
        });

    }else{
        return res.status(400).send('No Record Found with ID : '+req.params.id);
    }
});

//Put singal employee Api
router.put('/:id', (req, res)=> {
    if(ObjectId.isValid(req.params.id)){
        let emp = {
            name : req.body.name,
            position: req.body.position,
            dept: req.body.dept
           };

        Employee.findByIdAndUpdate(req.params.id, {$set :emp}, {new:true}, (err, doc) =>{
            if(err){
                console.log('Error in Update Data : '+err)
            }else{
                res.send(doc);
            }
        });

    }else{
        return res.status(400).send('No Record Found with ID : '+req.params.id);
    }
});


//Delete singal employee Api
router.delete('/:id', (req, res)=> {
    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id,(err, doc) =>{
            if(err){
                console.log('Error in Delete Data : '+err)
            }else{
                res.send(doc);
            }
        });

    }else{
        return res.status(400).send('No Record Found with ID : '+req.params.id);
    }
});



//Post Api
router.post('/', (req, res)=> {
   let emp = new Employee({
    name : req.body.name,
    position: req.body.position,
    dept: req.body.dept
   });
   emp.save((err, doc)=> {
       if(err){
           console.log('Error in Post Data : ')
       }else{
           res.send(doc);
       }
   }) 
});

module.exports = router;
