

export const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'BACKEND Server Error';
    const details = err.details || 'No additional information available';
    return res.status(status).json({ status, message, details });
}