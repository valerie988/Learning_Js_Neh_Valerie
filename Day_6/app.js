const Ravselector = document.querySelector("#Rav-selector")
const Valselector = document.querySelector("#Val-selector")
const chatHeader = document.querySelector(".chat-header")
const chatMessages = document.querySelector(".chat-messages")
const chatInputForm = document.querySelector(".chat-input-form")
const chatInput = document.querySelector(".chat-input")
const sendButton = document.querySelector(".send-button")
const clearChat = document.querySelector(".Clear-chat-button")

const chatMessageElement = (message) => `
<div class ="message ${message.sender === 'Rav' ? 'blue-bg' : 'gray-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
</div> `

let messageSender = "Rav"
const updateMessageSender = (Name) => {
    messageSender = Name
    console.log(`${messageSender}`);
    chatHeader.textContent = `${messageSender} chatting...`
    console.log(chatHeader)
   
    chatInput.placeholder = `Type here ${messageSender}`

    if(Name === `Rav`){
        Ravselector.classList.add('active-person')
        Valselector.classList.remove( 'active-person')
    }
    if(Name === `Val`){
        Valselector.classList.add('active-person')
        Ravselector.classList.remove('active-person')
    }

}

Ravselector.addEventListener(`click`, () => {
    updateMessageSender(`Rav`)
})
Valselector.addEventListener(`click`, () => {
    updateMessageSender(`Val`)
})


const sendMessage = (e) => {
    e.preventDefault()
    const timestamp = new Date().toLocaleString(`en-US`, {hour: 'numeric', minute: 'numeric', hour12:true})
    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp
    }
    chatMessages.innerHTML += chatMessageElement (message)
}
chatInputForm.addEventListener('submit', sendMessage)