Avaliações 4 e 5
======

Avaliação 4
------

A primeira das duas atividades que complementam a nota requer que criemos uma função simples que liste as compras do usuário, revelando dados tanto do comprador quanto do produto, assim como fiz ao criar essa função:

```typescript
SomaTotal(): void {
let soma = 0
for(let count = 0; count < this.items.length; count++){
let quantia =  this.items[count].getquantidade() * this.items[count].getvalor()
soma += quantia
}

console.log("A QUANTIA EM DINHEIRO TOTAL DA SUA COMPRA: R$ " + soma)
}
```

O que isso tudo nos trás? O resultado apresentado ao rodarmos o código:

![imagem 1](https://github.com/iuripprata/iuri-prata-p7info-poo/blob/main/atividade-avaliação/avaliação-4-5/avaliação-4.PNG)


---

Avaliação 5
------

Na segunda atividade deveríamos criar uma função que imprimisse uma listagem dos produtos, suas quantidades, valores unitários e valores totais, além de dados do comprador num formato mais parecido com uma nota fiscal que vemos normalmente. Esse foi o código criado:

```typescript
imprimirNotaFiscal(): void {
    var data = new Date();
    console.log("--------------------------------------------------------------------------------------------------------------------")
    console.log("NOTA FISCAL                                                                                                   ", data)
    console.log("Cliente:",this.cliente.getcodigo(), "      Nome:",this.cliente.getnome() )
    console.log("CPF:",this.cliente.getcnpjcpf())
    console.log("--------------------------------------------------------------------------------------------------------------------")
    console.log("ITENS")
    console.log("--------------------------------------------------------------------------------------------------------------------")
    console.log("Seq    Descrição                                                               QTD       Valor Unit         Preço   ")
    console.log("------------------------------------------------------------------------      -----     -------------     ----------")
    for(let count = 0; count < this.items.length; count++){
        let precoTotal =  this.items[count].getquantidade() * this.items[count].produto.getvalorUnitario()
        this.valorNota += precoTotal
        console.log("%i       %s                                                       %f            %f              %f  ",
        this.items[count].getsequencial(), this.items[count].produto.getdescricao(), this.items[count].getquantidade(), this.items[count].produto.getvalorUnitario(), precoTotal)
    }
    console.log("")
}
```

O resultado você pode conferir no print a seguir:

![imagem 2](https://github.com/iuripprata/iuri-prata-p7info-poo/blob/main/atividade-avaliação/avaliação-4-5/avaliação-5.PNG)