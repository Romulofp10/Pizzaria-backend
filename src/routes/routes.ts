import { Router, Request, Response } from "express";
import multer from 'multer'
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/DetailUserController";
import { IsAuthenticated } from "../middlewares/isAuthenticated";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoryController } from "../controllers/category/ListCategoryController";
import { CreateProductController } from "../controllers/product/CreateProductController";

import uploadConfig from '../config/multer'
import { ListByCategoryController } from "../controllers/product/ListByCategoryController";
import { CreateOrderController } from "../controllers/order/CreateOrderController";
import { RemoveOrderController } from "../controllers/order/RemoveOrderController";
import { AddItemController } from "../controllers/order/AddItemController";
import { RemoveItemController } from "../controllers/order/RemoveItemController";
import { SendOrderController } from "../controllers/order/SendOrderController";
import { ListOrderController } from "../controllers/order/ListOrderController";
import { DetailsOrderController } from "../controllers/order/DetailsOderController";
import { FinishOrderController } from "../controllers/order/FinishOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.get('/teste', (req: Request, res: Response) => {
    throw new Error('Alguma mensagem do erro')
});

//Router USERS
router.post('/users', new CreateUserController().handle)
router.post('/users/login', new AuthUserController().handle)
router.get('/profile', IsAuthenticated, new DetailUserController().handle)

//Router Category
router.post('/category/create', IsAuthenticated, new CreateCategoryController().handle)
router.get('/category/list', IsAuthenticated, new ListCategoryController().handle)

//Router Product
//router.post('/product/create', IsAuthenticated, upload.single('file'), new CreateProductController().handle)
router.post('/product/create', IsAuthenticated, new CreateProductController().handle)
router.get('/category/product', IsAuthenticated, new ListByCategoryController().handle)

//Router Order
router.post('/order/create', IsAuthenticated, new CreateOrderController().handle)
router.delete('/order/delete', IsAuthenticated, new RemoveOrderController().handle)
router.post('/order/addItem', IsAuthenticated, new AddItemController().handle)
router.delete('/order/removeItem', IsAuthenticated, new RemoveItemController().handle)
router.put('/order/send', IsAuthenticated, new SendOrderController().handle)
router.get('/orders', IsAuthenticated, new ListOrderController().handle)
router.get('/order/details', IsAuthenticated, new DetailsOrderController().handle)
router.put('/order/finish', IsAuthenticated, new FinishOrderController().handle)
export { router }