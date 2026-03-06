const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { use, memo } = require('react');
const mysql = require('mysql2/promise')
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())



const port = 8000;
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    })
    console.log('Connected to MySQL database');
}

app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
});

app.post('/users', async (req, res) => {
    try {
        let user = req.body;
        const results = await conn.query('INSERT INTO users SET ?', user);
        res.json({
            message: 'User added successfully',
            data: results[0]
        })
    } catch (error) {
        console.error('Error inserting user', error);
        res.status(500).json({ message: 'Error adding user' });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id);
        if (results[0].length === 0) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.json(results[0][0]);
    } catch (error) {
        console.error('Error fetching user:'.error);
        let statussCode = error.statussCode || 500;
        res.status(statussCode).json({
            message: error.message || 'Error fetching user'
        })
    }
});

app.put('/users/:id',async(req, res)=>{
    try {
        let id = req.params.id;
        let updateUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updateUser, id])
        res.json({
            message: 'User deleted successfully',
            data: results[0]
            });
    } catch (error) {
        console.error('Error updated user:', error)
        res.status(500).json({ message: 'Error updated user' });
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('DELETE FROM users WHERE id=?', id)
        res.json({
            message: 'User deleted successfully',
            data: results[0]
        })
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user' });
    }
});

app.listen(port, async () => {
    await initMySQL();
    console.log(`Sever is running on http://localhost:${port}`)
});
