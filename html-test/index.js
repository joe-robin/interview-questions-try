const parent = document.querySelector('#parent')
const child1 = document.querySelector('#child1')
const child2 = document.createElement('div')

child2.setAttribute('id', 'child2')
child2.innerText = 'Child 2'
parent.appendChild(child2)

document.removeChild(child1) // No effect since the document dosent have the child1 as direct child
