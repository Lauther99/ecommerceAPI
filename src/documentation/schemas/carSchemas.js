/** 
 * @openapi
 * components:
 *   schemas:
 *     addProductInCar:
 *       type: object
 *       properties:
 *         carId:
 *           type: int
 *           example: 5
 *         productId:
 *           type: int
 *           example: 30
 *         quantity:
 *           type: int
 *           example: 4
 *         price:
 *           type: float
 *           example: 2723.5
 *     getProductsInCar:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 5
 *         totalPrice:
 *           type: int
 *           example: 10894
 *         productincarts:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               Product_id:
 *                 type: int
 *                 example: 30
 *               price:
 *                 type: float
 *                 example: 2723.5
 *               quantity:
 *                 type: int
 *                 example: 4
 */