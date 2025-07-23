import express from 'express';
import { config } from 'dotenv';        
import { getUserCon } from './controller/usersCon.js';
import { getEmployeeCon } from './controller/employeeCon.js';
import { getPayslipCon } from './controller/payrollCon.js';
import  cors from 'cors'
 
config()

const app = express();
const PORT = process.env.PORT;
app.use(cors()) //get

app.get('/users', getUserCon)
app.get('/employees', getEmployeeCon)
app.get('/payslip', getPayslipCon)




app.listen(PORT , () => {
    console.log(`http://localhost:${PORT}`);
});