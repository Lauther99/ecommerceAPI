/** 
 * @openapi
 * /api/v1/order/createorder:
 *   post:
 *     summary: Creates a new order
 *     tags: [Orders]
 *     requestBody:
 *       description: Required fields to create a new order
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createOrder'
 *     security:
 *       - BearerToken: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/createOrderResponse'
 *       400:
 *         description: When you try to create a new order with an invalid userId
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Missing or invalid fields
 * /api/v1/order/getorders/{userId}:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the user to get all orders from a user
 *     security:
 *       - BearerToken: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getAllOrders'
 *       400:
 *         description: Invalid token or invalid body
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid token
 * /api/v1/order/purchase:
 *   post:
 *     summary: Purchase an order
 *     tags: [Orders]
 *     security:
 *       - BearerToken: []
 *     requestBody:
 *       description: Required fields to purchase an order
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/purchase'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Purchased succesfully
 *       400:
 *         description: Invalid token or invalid body
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid token
*/