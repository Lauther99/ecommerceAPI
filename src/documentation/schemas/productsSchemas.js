/** 
 * @openapi
 * components:
 *   schemas:
 *     getAllProducts:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: int
 *             example: 20
 *           name:
 *             type: string
 *             example: teclado gambyte 8
 *           price:
 *             type: float
 *             example: 723.5
 *           available_qty:
 *             type: int
 *             example: 85
 *           status:
 *             type: int
 *             example: 1
 *           product_image:
 *             type: string
 *             example: url_path
 *           User:
 *             type: object
 *             properties:
 *               id:
 *                 type: int
 *                 example: 6
 *               username:
 *                 type: string
 *                 example: lauther
 *               email:
 *                 type: string
 *                 example: lautherharold2@gmail.com
 *     createProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: mouse razer 80
 *         price:
 *           type: float
 *           example: 2723.5
 *         available_qty:
 *           type: int
 *           example: 50
 *         status:
 *           type: string
 *           example: AVAILABLE/OUT
 *         User_id:
 *           type: int
 *           example: 6
 *     createProductResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 29
 *         name:
 *           type: string
 *           example: mouse razer 80
 *         price:
 *           type: float
 *           example: 2723.5
 *         available_qty:
 *           type: int
 *           example: 50
 *         status:
 *           type: string
 *           example: AVAILABLE/OUT
 *         User_id:
 *           type: int
 *           example: 6
 *     uploadImage:
 *       type: object
 *       properties:
 *         productId:
 *           type: int
 *           example: 29
 *         imgPath:
 *           type: string
 *           example: https://picsum.photos/id/237/200/300
 */