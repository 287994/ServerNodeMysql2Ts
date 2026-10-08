import {pool} from '../conf/dbConection';

export const getAll=async(req:any, res:any)=>{
    try{
        const [rows]:any=await pool.query('SELECT * FROM products WHERE active = TRUE')
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


export const getById = async(req:any,res:any) =>{
    const {id}=req.params;
    const numId=Number(id);
    if(!Number.isInteger(numId)||numId<=0){
        return res.status(200).json({
            status: false,
            message: "Error, invalid number"
        });
    }
    try{
        const [rows]:any = await pool.query('SELECT * FROM products WHERE id = ? AND active = TRUE',[numId]);
        if(rows.length===0){
            return res.status(200).json({
                status: false,
                message: "invalid ID"
            });
        }
        return res.status(200).json({
            status: true,
            data: rows
        });
    }
    catch(error:any){
        return error.start(200).json({
            status: false,
            message: "Error fetching items"
        })
    }
};


export const create =async(req: any, res: any) =>{
    const {name, price, stock, description, brand, img}=req.body;

    if (!name||price===undefined||stock===undefined||!description||!description||!img){
        return res.status(200).json({
            status: false,
            message: 'Error, missing parameter'
        });
    }

    const numPrice=Number(price);
    if(isNaN(numPrice)||numPrice<=0){
        return res.status(200).json({
            status: false,
            message: 'price must be more than 0'
        });
    }

    try{
        const [result]:any=await pool.query('INSERT INTO products (name, price, stock, description, brand, img) VALUES (?, ?, ?, ?, ?, ?)',[name, numPrice, stock, description, brand,img]);
        return res.status(200).json({
            status: true,
            message: 'New product added to table',
            data:{
                id: result.insertId,
                name,
                price: numPrice,
                stock,
                description,
                brand,
                img,
                active: true
            }
        });
    } 
    catch(error:any){
        return res.status(200).json({
            status: false,
            message: 'Error creating new product',
            error: error.message
        });
    }
};


// export const getById = async(req:any,res:any) =>{
//     const {id}=req.params;
//     const numId=Number(id);
//     if(!Number.isInteger(numId)||numId<=0){
//         return res.status(200).json({
//             status: false,
//             message: "Error, invalid number"
//         });
//     }
//     try{
//         const [rows]:any=await pool.query('SELECT * FROM products WHERE id = ? AND active = TRUE',[numId]);
//         if(rows.length===0){
//             return res.status(200).json({
//                 status: false,
//                 message: "invalid ID"
//             });
//         }
//         return res.status(200).json({
//             status: true,
//             data: rows
//         });
//     }
//     catch(error:any){
//         return error.start(200).json({
//             status: false,
//             message: "Error fetching items"
//         })
//     }
// };


// export const getById = async(req:any,res:any) =>{
//     const {id}=req.params;
//     const numId=Number(id);
//     if(!Number.isInteger(numId)||numId<=0){
//         return res.status(200).json({
//             status: false,
//             message: "Error, invalid number"
//         });
//     }
//     try{
//         const [rows]:any=await pool.query('SELECT * FROM products WHERE id = ? AND active = TRUE',[numId]);
//         if(rows.length===0){
//             return res.status(200).json({
//                 status: false,
//                 message: "invalid ID"
//             });
//         }
//         return res.status(200).json({
//             status: true,
//             data: rows
//         });
//     }
//     catch(error:any){
//         return error.start(200).json({
//             status: false,
//             message: "Error fetching items"
//         })
//     }
// };