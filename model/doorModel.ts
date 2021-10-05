export default class DoorModel{
    #doorNumber: number
    #hasGift: boolean
    #isSelect: boolean
    #isOpen: boolean

    constructor(
            doorNumber: number, 
            hasGift: boolean = false, 
            isSelect: boolean = false, 
            isOpen: boolean = false
        ){
        this.#doorNumber = doorNumber
        this.#hasGift = hasGift
        this.#isSelect = isSelect
        this.#isOpen = isOpen
    }

    get doorNumber(){
        return this.#doorNumber
    }

    get hasGift(){
        return this.#hasGift
    }

    get isSelect(){
        return this.#isSelect
    }

    get isOpen(){
        return this.#isOpen
    }

    unselect(){
        const selected = false
        return new DoorModel(this.#doorNumber, this.#hasGift, selected, this.#isOpen)
    }

    toggleSelection(){
        const selected = !this.#isSelect
        return new DoorModel(this.#doorNumber, this.#hasGift, selected, this.#isOpen)
    }

    open(){
        const opened = true
        return new DoorModel(this.#doorNumber, this.#hasGift, this.#isSelect, opened)
    }
}