function shuffle(array){
    const _array = array.slice(0)
    for(let i:number = 0; i < array.length - 1; i++){
      let randomIndex = Math.floor(Math.random() * (i + 1))
      let temp = _array[i]
      _array[i] = _array[randomIndex]
      _array[randomIndex] = temp
    }

    return _array
}

export default function initializDeck() {
    let id:number = 0
    const cards: Array<string> = ['1', '2', '3', '4','5','6'].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, [])

    return shuffle(cards)
}

