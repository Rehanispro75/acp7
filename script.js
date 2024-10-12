var object1 = {
    sender : "Cr.Ronaldo",
    reciever : "virat kohli",
    message :"Neymar jr or leo.messi",

}
var object2 = JSON.stringify(object1)
var object3 =JSON.parse(object2) 
document.write(object3.sender)