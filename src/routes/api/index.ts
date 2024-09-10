import { Router } from "express";
import { LoginRouter } from "./login";
import { CheckTokenRouter } from "./check-token";
import { AccountsRouter } from "./accounts";
import {ListOfItemsRouter} from "./items";

const router = Router();

// sub routes
router.use("/login", LoginRouter);
router.use("/check-token", CheckTokenRouter);
router.use("/accounts", AccountsRouter);
router.use("/items", ListOfItemsRouter)

export { router as ApiRouter };
