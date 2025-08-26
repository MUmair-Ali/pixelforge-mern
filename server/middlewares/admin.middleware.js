
export const adminMiddleware = (req, res, next) => {

    try {

        const isUserAdmin = req.user.isAdmin;

        if(!isUserAdmin) {
            return res.status(401).json({message: 'Access Denied. User is not Admin'});
        }
        next();

    } catch (error) {
        next(error);
    }
}