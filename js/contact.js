
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "martins.alison.new@gmail.com",
        Password: "paxcbezsggjeopvz",
        To: 'alison@nautilusinfo.com',
        From: document.getElementbyId("email").value,
        Subject: "Menssagem do site Nautilus Sistemas",
        Body: document.getElementbyId("message").innerHTML,
    }).then(function (message) {
        console.log("mail sent successfully".concat(message.tostring()))
    });
}
