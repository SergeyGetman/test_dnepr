const { query, response } = require('express');
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '12345',
});

client.connect();

module.exports = {
    async getAll() { // read
        return (await client.query('select * from superheros').then(r => r.rows))
            .map((elem, index) => { elem['images'] = `/images/${elem.nick_name}.jpg`; return elem });
    },

    async addHero(fields) { // read
        const { nick_name, real_name, origin_description, superpowers, catch_phrase } = fields;
        return await client.query(`INSERT INTO superheros VALUES($1, $2, $3, $4, $5)`, [nick_name, real_name, origin_description, superpowers, catch_phrase]).catch(e => ({ error: e.message }));
    }
}