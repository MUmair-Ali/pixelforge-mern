import mongoose from 'mongoose';

const URI = process.env.URI;

const connectDb = async () => {

    try {
        await mongoose.connect(URI);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error Connecting Database');
        process.exit(0);
    }
}

export default connectDb;