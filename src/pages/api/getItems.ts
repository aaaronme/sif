import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const schema = z.object({
    some_param: z.string(),
});

export type Items = typeof items;

const items = {
    usd: { symbol: '$', crypto: false, ticker: 'USD', name: 'US Dollar' },
    eur: { symbol: '€', crypto: false, ticker: 'EUR', name: 'Euro' },
    gbp: { symbol: '£', crypto: false, ticker: 'GBP', name: 'Pound' },
    chf: { symbol: '₣', crypto: false, ticker: 'CHF', name: 'Swiss franc', last: true },
    eth: { crypto: true, ticker: 'ETH', name: 'Ethereum' },
    btc: { crypto: true, ticker: 'BTC', name: 'Bitcoin' },
    matic: { crypto: true, ticker: 'MATIC', name: 'MATIC Polygon' },
    sun: { crypto: true, ticker: 'SUN', name: 'Sun Labs Token' },
    comp: { crypto: true, ticker: 'COMP', name: 'Compound' },
    dai: { crypto: true, ticker: 'DAI', name: 'Dai' },
    link: { crypto: true, ticker: 'LINK', name: 'Chainlink' },
    uni: { crypto: true, ticker: 'UNI', name: 'Uniswap' },
    usdt: { crypto: true, ticker: 'USDC', name: 'USDC' }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { some_param } = schema.parse(req.query);

        res.status(200).json({
            items
        });
    } catch (error) {
        console.error('error', error);
        res.status(200).json({ error: error });
    }
}
