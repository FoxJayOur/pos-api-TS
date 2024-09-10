import { Database } from "services";
import { Router, Request, Response } from "express";
import { ItemsModel } from "models";

const router = Router();

router.post('/', async (req, res, next) => {
    const itemExist = await Database.getDocumentByQuery({name: req.body.name}, ItemsModel)
    if(itemExist) {
        console.log("Order already exists")
    }
    else {
        const lot = new ItemsModel(req.body)
        const savedLOT = await Database.createDocument(lot, ItemsModel)
        
        res.send({savedLOT})
    }
});
router.delete('/', async (req, res, next) =>  {
    try {
        const deleteItem = await Database.deleteDocument({name: req.body.name}, ItemsModel);
        console.log(deleteItem)
        res.send({deleteItem})
    } catch (error){
        next(error)
        res.send("Item not found")
    }
})
router.get('/', async (req, res, next) =>  {
    try {
        const lot = await Database.getDocumentByQuery({name: req.body.name}, ItemsModel);
        console.log(lot)
        res.send({lot})
    } catch (error){
        next(error);
        res.send("Item not found")
    }
})
router.get('/all', async (req, res, next) =>  {
    try {
        const lot = await Database.getAllDocuments(ItemsModel);
        console.log(lot)
        res.send({lot})
    } catch (error){
        next(error);
        res.send("Item not found")
    }
})
export { router as ListOfItemsRouter };