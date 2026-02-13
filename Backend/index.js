const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { use } = require('react');

app.use(bodyParser.json())

const port = 8000;

let users = [];
let counter = 1;
/**
Get /users - ดึงข้อมูลผุ้ใช้ทั้้งหมด
POST /users - เพื่มผู้ใช้ใหม่
GET /users/:id - ดึงข้อมูลผุ้ใช้งาน
PUT /users/:id - เเก้ไขข้อมูลใช่ตาม ID
DELETE /users/:id - ลบผุ้ใช้ตาม ID ที่บันทึก
 */

app.get('/users', (req, res)=>{
    res.json(users);
});

app.post('/user', (req, res)=>{
    let user = req.body;
    user.id = counter
    counter +=1;
    users.push(user);
    res.json({
    message: 'User added successfully',
    user: user
    });
});

app.patch('/user/:id', (req, res)=>{
    let id =  req.params.id;
    let updateUser = req.body;

    // หา user ที่จาก id ที่ส่งมา
    let selectindex = users.findIndex(user => user.id == id);
    
    //update ข้อมูล user
    if(updateUser.firstname){
        users[selectindex].firstname = updateUser.firstname;
    }
    if(updateUser.lastname){
        users[selectindex].lastname = updateUser.lastname;
    }

    res.json({
        message: 'User update successfully!',
        data:{
            user: updateUser,
            indexUpdate: selectindex
        }
    })
    //ส่งตัว users ที่ update แล้วกลับไป
});

app.delete('/users/:id', (req, res)=>{
    let id = req.params.id;

    // หา index จาก id ที่ต้องการลบ
    let selectIndex = users.findIndex(user => user.id == id);

    users.splice(selectIndex, 1)
    //ลบ user ออกจาก users
    res.json({
        message: 'User deleted successfully!',
        indexDelete: selectIndex
    });
});

 app.listen(port, ()=>{
console.log(`Sever is running on http://localhost:${port}`)
});

