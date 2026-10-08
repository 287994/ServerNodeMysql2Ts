import {Router} from 'express';
import * as UserController from '../controlers/products_controller';

const router=Router();

router.get('/',UserController.getAll);

export default router