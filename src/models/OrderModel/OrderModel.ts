import { IOrder, ISession } from "types";
import { model, Schema } from "mongoose";

const OrderSchema = new Schema<IOrder>({
    order: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    items: [
        {
        item: String,
        productTypes: [
            {
            productType: String,
            },
            {
            price: Number,
            }
        ],
        }
    ],
    cashierName: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Date,
        immutablee: true,
        default: () => Date.now()
    },
});

const OrderModel = model<IOrder>("Order", OrderSchema);

export default OrderModel;
