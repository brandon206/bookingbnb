export const is404 = function(err) {
    return err.response && err.response.status && err.response.status === 404;
};