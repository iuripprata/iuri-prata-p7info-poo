//Criando a classe
class Queue{
    Pessoas: string[] = []
    maxQueue = 5
    fim = 0
    nprimeiro = 0
    nItems = 0

    // Metódo que verifica se a Fila está vazia
    isEmpty(): number{
        if(this.nItems == 0){
            return 1
        }else{
            return 0
        }
    }
    // Metódo que verifica se a Fila está cheia
    isFull(): number{
        if(this.fim == this.maxQueue){
            return 1
        }else{
            return 0
        }
    }

    // Metódo para inserir elementos na Fila
    addQueue(nome: string): void{
        if(this.isFull() == 1){
            console.log('Fila está cheia!')
        }else{
            this.Pessoas[this.fim] = nome
            console.log(nome+' entrou na fila')
            this.fim++
            this.nItems++
        }
    }
    // Metódo para remover elementos da Fila
    removeQueue():string | void {
        if(this.isEmpty() == 1){
            console.log('A fila está vazia!')
        }else{
            let temp = this.Pessoas[this.nprimeiro]
            console.log(this.Pessoas[this.nprimeiro]+' saiu da fila')
            this.nprimeiro++
            this.nItems--
            return temp
        }
    }
    // Metódo para mostrar a Fila
    viewQueue(): void{
        if(this.isEmpty() == 1){
            console.log('Fila não tem ninguém!')
        }else{
            let np = this.nprimeiro
            for(let i=0; i < this.nItems; i++){
                console.log(this.Pessoas[np]+' está na fila')
                np++
            }
        }
    }
}
// Criando um objeto do tipo Queue
let fila: Queue = new Queue()

// Adicionando pessoas na fila
fila.addQueue('Iuri')
fila.addQueue('Wilian')
fila.addQueue('Sabrina')
fila.addQueue('Yasmim')
console.log('-------------------------')
// Excluir pessoas da fila
fila.removeQueue()
fila.removeQueue()
fila.removeQueue()
console.log('-------------------------')
// Inserir mais uma pessoa na fila
fila.addQueue('Marine')
console.log('-------------------------')
// Mostrar a fila
fila.viewQueue()
console.log('-------------------------')
// Excluir o resto da fila
fila.removeQueue()
fila.removeQueue()
console.log('-------------------------')
// Mostrar a fila (Vazia)
fila.viewQueue()