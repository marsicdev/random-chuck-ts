import { ChuckResponse } from '../types'

class Quote {
    readonly id: any
    readonly text: any
    readonly icon: any

    constructor(data: ChuckResponse) {
        this.id = data.id
        this.text = data.value
        // Notice remapping here, since we don't want to use
        // _ in our code base we are remapping `icon_url`
        // to out property `icon`. We can archive the same
        // using getters
        this.icon = data.icon_url
    }
}
export default Quote
