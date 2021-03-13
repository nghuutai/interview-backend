class PureController {
    action(nameFunc) {
        return (req, res, next) => {
            this[nameFunc](req, res).then(item => {
                res.locals.responseData = item;
                next();
            }).catch(next);
        };
    }
}

export default PureController;