import {Router} from 'express';
import * as UserController from '../controlers/products_controller';

const router=Router();

router.get('/getAll',UserController.getAll);
router.get('/getById/:id',UserController.getById);
router.post('/create',UserController.create);
// router.get('/',UserController.getAll);
// router.get('/',UserController.getAll);
// router.get('/',UserController.getAll);

export default router