import {pool} from '../config/db.js'


const getEmployees = async() => {
    try{
        let [row] = await pool.query( 'SELECT * FROM employees;')
        return row
    } catch (error) {
        return 'err'
    }
}

export {getEmployees}