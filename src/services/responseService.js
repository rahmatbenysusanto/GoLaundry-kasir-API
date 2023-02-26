function responseWithData(res, status, message, data, httpResponse) {
    return res.status(httpResponse).json({
        status: status,
        message: message,
        data: data
    });
}

function responseNotData(res, status, message, httpResponse) {
    return res.status(httpResponse).json({
        status: status,
        message: message
    });
}

export { responseWithData, responseNotData };