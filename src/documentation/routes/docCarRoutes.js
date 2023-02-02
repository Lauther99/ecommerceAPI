/** 
 * @openapi
 * /api/v1/car/addproduct:
 *   post:
 *     summary: Add product in car
 *     tags: [Car]
 *     requestBody:
 *       description: Required fields to add product in car
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addProductInCar'
 *     security:
 *       - BearerToken: []
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
 *                   example: Added succesfully
 *       400:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Server error
 * /api/v1/car/showproducts/{userId}:
 *   get:
 *     summary: Get all products in car
 *     tags: [Car]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the user to get products in car from a user
 *     security:
 *       - BearerToken: []
 *     responses:
 *       200:
 *         description: OK, if answer is "null" then the userId provided does not exist
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getProductsInCar'
 *       400:
 *         description: Invalid token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid token
*/