import * as data from './data'
import * as ui from './ui'

const loadRandomJoke = async (): Promise<void> => {
    try {
        ui.displayProgress()
        const quote = await data.fetchRandomJoke()
        ui.displayQuote(quote)
    } catch (error) {
        console.log('error', error)
    } finally {
        ui.displayProgress(false)
    }
}

export const init = () => {
    // Initially load random joke
    loadRandomJoke().then(() => {
        console.log('Initial load done!')
    })

    // Register listener for joke change
    ui.onRandomQuoteClick(() => {
        loadRandomJoke()
    })
}
