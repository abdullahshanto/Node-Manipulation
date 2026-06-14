const homeHandler = (requestProperties, callback) => {
    callback(200, {
        message: 'Welcome to the Rest API',
    });
};

export default homeHandler;
