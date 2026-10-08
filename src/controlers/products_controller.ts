import {pool} from '../conf/dbConection';

export const getAll = async (req: any,res: any)=>{
    try{
        const [rows] = await pool.query('SELECT * FROM products WHERE active = TRUE')
        
        return res.status(200).json({
            status: true,
            data: rows
        });
    } catch(error: any){
        return res.status(200).json({
            status: false,
            message: 'Error fetching items',
            error: error.message
        });
    }
};
