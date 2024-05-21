const { Pool } = require('pg');

const pool = new Pool({
    host: 'dpg-cp6e47un7f5s73acoa8g-a',
    user: 'miguetron',
    password: '7yqPGv4PKiWhCH2WLcV5pWK4kwUm87wW',
    database: 'firstapi_x2of',
    port: '5432',
    ssl: {
        rejectUnauthorized: false
        }
});

const updateUser = async (req, res) => {
    id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('update users set name=$1, email=$2 where id=$3)', [name, email, id]);
    console.log(response);
    res.json({
        message: 'User Updated Succesfully',
        body: {
            user: {name, email}
        }
    });
};

const getUsers = async (req, res) => {
    const response = await pool.query('select * from users');
    res.status(200).json(response.rows);
};

const createUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('insert into users (name, email) value ($1, $2)', [name, email]);
    console.log(response);
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {name, email}
        }
    });
};

const getUserById = async (req, res) => {
    id = req.params.id;
    const response = await pool.query('select * from users where id=$1',[id]);
    res.json(response.rows);
};

const deleteUserById = async (req, res) => {
    id = req.params.id;
    const response = await pool.query('delete from users where id=$1',[id]);
    res.json(response.rows);
};

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUserById,
    updateUser
}