import {Router} from 'express';
import productsRouters from './products.routes';

const  router = Router();

router.use('/products',productsRouters)

export default router;