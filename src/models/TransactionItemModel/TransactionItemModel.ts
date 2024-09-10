import { ITransactionItem, ISession } from "types";
import { model, Schema } from "mongoose";

const TransactionItemSchema = new Schema<ITransactionItem>({
    UID: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
});

const TransactionItemModel = model<ITransactionItem>("TransactionItem", TransactionItemSchema);

export default TransactionItemModel;
