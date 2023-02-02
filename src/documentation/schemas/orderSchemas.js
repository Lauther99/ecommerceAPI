/** 
 * @openapi
 * components:
 *   schemas:
 *     createOrder:
 *       type: object
 *       properties:
 *         userId:
 *           type: int
 *           example: 9
 *         carId:
 *           type: int
 *           example: 5
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
 *     createOrderResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: PENDING
 *         id:
 *           type: int
 *           example: 26
 *         User_id:
 *           type: int
 *           example: 9
 *     getAllOrders:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: int
 *             example: 27
 *           status:
 *             type: string
 *             example: PENDING
 *           User_id:
 *             type: int
 *             example: 6
 *           productinorders:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 quantity:
 *                   type: int
 *                   example: 3
 *                 price:
 *                   type: float
 *                   example: 2724
 *                 Product_id:
 *                   type: int
 *                   example: 30
 *     purchase:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: lauth27@gmail.com
 *         orderId:
 *           type: int
 *           example: 27
 *         productinorders:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: int
 *                 example: 3
 *               price:
 *                 type: float
 *                 example: 2724
 *               Product_id:
 *                 type: int
 *                 example: 30
 */