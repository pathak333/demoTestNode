module.exports = () => (req, res, next) => {

    /**
     * success response
     * @param {string} message - The first parameter String is a message 
     * @param {object} data - The second Parameter is object data which we want to send to client side .
     * @return {object} return Response Object to client side with data Payload
     */
    res.success = (message, data) => {
        return res.status(200).json({ success: true, message, data: data || {} });
    };

    /**
     * created response
     * @param {string} message - The first parameter String is a message 
     * @param {object} data - The second Parameter is object data which we want to send to client side .
     * @return {object} return Response Object to client side with data Payload
     */
    res.created = (message, data) => {
        return res.status(201).json({ success: true, message, data: data || {} });
    };

    /**
   * error response
   * @param {number} code - The First parameter indicate status code which we want to send/emit
   * @param {string} message - The second parameter String is a message 
   * @param {object} data - The third Parameter is object data which we want to send to client side .
   * @return {object} return Response Object to client side with data Payload
   */
    res.error = (code, message, data) => {
        res.status(code).send({ success: false, message, data: data || {} });
    };
    // proceed forward
    next();

}