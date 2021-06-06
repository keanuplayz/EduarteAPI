/**
 * @api {get} /token Auth Token
 * @apiDescription Allows you to request an authentication token from the API. You *need* a token for *every* request.
 * @apiName auth
 * @apiGroup Auth
 *
 * @apiParam {String} user Your EduArte username.
 * @apiParam {String} passwd Your EduArte password.
 * @apiParam {String} school The school you're generating a token for. Should be the name you enter in the EduArte URL. (`SchoolName.educus.nl`)
 *
 * @apiExample {curl} Example usage:
 *   curl -X POST -H "Content-Type: application/json" \
 *   -d '{"user": "xyz", "passwd": "xyz", "school": "xyz"}' \
 *   http://API_URL/token
 *
 * @apiSuccess {Array} cookieArray Data with your API token.
 *
 * @apiSuccessExample {json} Success Response:
 *   [
 *      "cookieArray": [
 *          "JSESSIONID",
 *          "<token>"
 *      ]
 *   ]
 *
 * @apiError ParamRequiredError Body parameter "<param>" is required for request on POST /token
 */