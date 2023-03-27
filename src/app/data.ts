import axios from 'axios'
import { CHUCK_API } from '../config/constants'

import Quote from '../models/Quote'
import { ChuckResponse } from '../types'

export const fetchRandomQuote = async (): Promise<Quote> => {
    const { data } = await axios.get<ChuckResponse>(CHUCK_API)

    return new Quote(data)
}
