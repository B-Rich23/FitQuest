import {Router} from 'express';
import * as Questcontroller from '../controllers/questcontroller';
const router = new Router();

router.route('/quest').get(Questcontroller.getQuests);

router.route('quests/:id').get(Questcontroller.getHighestQuest);

router.route('/quest/:id').get(Questcontroller.getQuest);

router.route('/quest').post(Questcontroller.addQuest);

export default router;