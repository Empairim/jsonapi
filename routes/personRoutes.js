import { router } from "express";

import * as personController from "../controllers/personController.js";

const router = express.Router();

//ROUTES FOR PERSON data

router.get("/people", personController.getPeople);
router.post("/people", personController.createPerson);
router.put("/people/:id", personController.updatePerson);
router.delete("/people/:id", personController.deletePerson);

export default router;
