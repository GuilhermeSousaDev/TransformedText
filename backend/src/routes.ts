import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Word } from './entities/Word';

const router = Router();

router.get('/words', async (req, res) => {
    const wordRepository = getRepository(Word);

    const words = await wordRepository.find();

    return res.json(words);
});

router.post('/words', async (req, res) => {
    const { wordTitle } = req.body;

    const wordRepository = getRepository(Word);

    const word = wordRepository.create({ word: wordTitle });

    await wordRepository.save(word);

    return res.json(word);
});

export default router;