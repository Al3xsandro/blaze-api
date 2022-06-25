import mongoose, { Document, Schema } from "mongoose";

interface ICrash {
    _id?: string;
    crash_point: string;
    bad_crash: boolean,
    crash_id: string;
}

type ICrashDocument = Document & ICrash;

const crashSchema = new Schema(
    {
        crash_point: {
            type: String,
            required: true,
        },
        bad_crash: {
            type: Boolean,
            required: true,
        },
        crash_id: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    },
);

const crash = mongoose.model<ICrashDocument>('Crash', crashSchema);

export {
    crash,
    ICrashDocument
};