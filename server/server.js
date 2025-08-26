import 'dotenv/config';
import express from 'express';
import {router as authRouter} from './routers/auth.route.js';
import {router as contactRouter} from './routers/contact.route.js';
import {router as serviceRouter} from './routers/service.route.js';
import {router as adminRouter} from './routers/admin.route.js';
import connectDb  from './utilities/db.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import cors from "cors";

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods:["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"],
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/form', contactRouter);
app.use('/api/data', serviceRouter);
app.use('/api/admin', adminRouter);
app.use(errorMiddleware);

const PORT = process.env.PORT;

connectDb().then( () => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});