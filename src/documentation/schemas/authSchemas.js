/** 
 * @openapi
 * components:
 *   securitySchemes:
 *     BearerToken:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: lauther
 *         password:
 *           type: string
 *           example: 1234
 *         email:
 *           type: string
 *           example: lauther2@gmail.com
 *     Login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: lauther2@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     loginResponse:
 *       type: object
 *       properties:
 *         isValid:
 *           type: boolean
 *           example: true
 *         u:
 *           type: object
 *           properties:
 *             id:
 *               type: int
 *               example: 9
 *             username:
 *               type: string
 *               example: lauther2@gmail.com
 *             car:
 *               type: object
 *               properties:
 *                 id:
 *                   type: int
 *                   example: 5
 *                 totalPrice:
 *                   type: int
 *                   example: 0
 *             token:
 *               type: string
 *               example: eyJhbGciOiJUUzUxMiIsInR5cCI6IkpXVCJ1.eyJ1c2VybmFtZSI6Imhhcm9sZCIsImlkIjo5LCJlbWFpbCI6ImxhdXRoZXIyQGdtYWlsLmNvbSIsImlhdCI6MTY3NTM0ODM1NiwiZXhwIjoxNjc1MzYwMzU2fQ.G6srrN7oy91OCbET221WvP8jA-pxHHRnOschtx8umexOfJhY40kqgAXCWPq_iAlozwCM4t9ytZzLsFuC0eDqEw
 */