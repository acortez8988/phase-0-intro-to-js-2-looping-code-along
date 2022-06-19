const name = ["John", "Ari", "Sam"];
const event = 'birthday'


function writeCards(name, event) {
    const newArry =[]
  for (let i = 0; i < name.length; i++) {
    newArry.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }

    return newArry;
}
writeCards(name, event)

function countDown() {
  let num = 10;
  while (num >=0) { 
    console.log(num--);
    
  }
}