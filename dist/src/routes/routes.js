"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("../controllers/user/CreateUserController");
const AuthUserController_1 = require("../controllers/user/AuthUserController");
const DetailUserController_1 = require("../controllers/user/DetailUserController");
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
const CreateCategoryController_1 = require("../controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("../controllers/category/ListCategoryController");
const CreateProductController_1 = require("../controllers/product/CreateProductController");
const multer_2 = __importDefault(require("../config/multer"));
const ListByCategoryController_1 = require("../controllers/product/ListByCategoryController");
const CreateOrderController_1 = require("../controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("../controllers/order/RemoveOrderController");
const AddItemController_1 = require("../controllers/order/AddItemController");
const RemoveItemController_1 = require("../controllers/order/RemoveItemController");
const SendOrderController_1 = require("../controllers/order/SendOrderController");
const ListOrderController_1 = require("../controllers/order/ListOrderController");
const DetailsOderController_1 = require("../controllers/order/DetailsOderController");
const FinishOrderController_1 = require("../controllers/order/FinishOrderController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
router.get('/teste', (req, res) => {
    throw new Error('Alguma mensagem do erro');
});
//Router USERS
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/users/login', new AuthUserController_1.AuthUserController().handle);
router.get('/profile', isAuthenticated_1.IsAuthenticated, new DetailUserController_1.DetailUserController().handle);
//Router Category
router.post('/category/create', isAuthenticated_1.IsAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/category/list', isAuthenticated_1.IsAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
//Router Product
//router.post('/product/create', IsAuthenticated, upload.single('file'), new CreateProductController().handle)
router.post('/product/create', isAuthenticated_1.IsAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.get('/category/product', isAuthenticated_1.IsAuthenticated, new ListByCategoryController_1.ListByCategoryController().handle);
//Router Order
router.post('/order/create', isAuthenticated_1.IsAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.delete('/order/delete', isAuthenticated_1.IsAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
router.post('/order/addItem', isAuthenticated_1.IsAuthenticated, new AddItemController_1.AddItemController().handle);
router.delete('/order/removeItem', isAuthenticated_1.IsAuthenticated, new RemoveItemController_1.RemoveItemController().handle);
router.put('/order/send', isAuthenticated_1.IsAuthenticated, new SendOrderController_1.SendOrderController().handle);
router.get('/orders', isAuthenticated_1.IsAuthenticated, new ListOrderController_1.ListOrderController().handle);
router.get('/order/details', isAuthenticated_1.IsAuthenticated, new DetailsOderController_1.DetailsOrderController().handle);
router.put('/order/finish', isAuthenticated_1.IsAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
