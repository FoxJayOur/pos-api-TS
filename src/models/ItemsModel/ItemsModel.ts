import { IItems, ISession } from "types";
import { model, Schema } from "mongoose";

const ItemsSchema = new Schema<IItems>({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    barcodeID: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const ItemsModel = model<IItems>("Items", ItemsSchema);

export default ItemsModel;
