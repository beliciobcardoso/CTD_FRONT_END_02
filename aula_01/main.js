let name = 'Belicio Cardoso'
document.querySelector('#corpo').textContent = name;

const numbers = [1, 3, 5, 8, 12, 42, 96, 1024]

for (let i = 0; i < numbers.length; i++) {
    let soma = numbers[0] + numbers[i]
    mostrar(soma)  
}

function mostrar(a) {
     
    const node = document.createElement("li");        
    
    const textnode = document.createTextNode(a);        
   
    node.appendChild(textnode);        
  
    document.querySelector("#count").appendChild(node);
    }


