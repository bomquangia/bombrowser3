const myNotification = new Notification("Title", {
    body: 'Notification from the Renderer process of Vu'
})

myNotification.onclick = () => {
    console.log('Notification clicked')
}