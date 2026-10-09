import {Router} from 'express';
import * as UserController from '../controlers/products_controller';

const router=Router();

router.get('/getAll',UserController.getAll);
router.get('/getById/:id',UserController.getById);
router.post('/create',UserController.create);
router.put('/update/:id',UserController.update);
router.delete('/delete/:id',UserController.remove);
router.patch('/change-price/:id',UserController.changePrice);

export default router