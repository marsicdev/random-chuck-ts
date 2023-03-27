import Quote from 'models/Quote'

const DOMSelectors = {
    $quoteElem: 'blockquote',
    $subtitleH3: 'h3',
    $randomBtn: 'button',
} as const

function findRandomButton() {
    return document.querySelector<HTMLButtonElement>(DOMSelectors.$randomBtn)!
}

function findQuoteElement(): HTMLQuoteElement {
    return document.querySelector(DOMSelectors.$quoteElem)!
}

function findSubtitleElement(): HTMLHeadingElement {
    return document.querySelector<HTMLHeadingElement>(DOMSelectors.$subtitleH3)!
}

export const onRandomQuoteClick = (onClick: () => void) => {
    const randomBtn = findRandomButton()

    randomBtn.addEventListener('click', onClick)
}

export const displayQuote = (quote: Quote) => {
    const quoteElem = findQuoteElement()

    quoteElem.textContent = quote.text
}

export const displayProgress = (loading: boolean = true) => {
    const $subtitleElem = findSubtitleElement()
    $subtitleElem.textContent = loading ? 'Joking...' : ''

    const $quoteElem = findQuoteElement()
    $quoteElem.ariaBusy = `${loading}`

    const $randomBtn = findRandomButton()
    $randomBtn.ariaBusy = `${loading}`
    $randomBtn.textContent = loading ? '' : 'Chuck Me'
}
