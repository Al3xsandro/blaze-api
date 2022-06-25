import { connect } from "mongoose";

export default async (): Promise<void> => {
    try {
        await connect(`${process.env.MONGO_URL}`, {
            dbName: 'crashdata'
        })
    } catch (err) {
        console.log(err);
    }
}