import * as data from './data'
import * as ui from './ui'

const loadRandomJoke = async () => {
    try {
        ui.displayProgress(true)
        const quote = await data.fetchRandomQuote()
        ui.displayQuote(quote)
    } catch (error) {
        console.log('error', error)
    } finally {
        ui.displayProgress(false)
    }
}

export const init = () => {
    // Initially load random joke
    loadRandomJoke()

    // Register listener for joke change
    ui.onRandomQuoteClick(() => {
        loadRandomJoke()
    })
}
