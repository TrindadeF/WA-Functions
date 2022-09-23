const { create, Client } = require('@open-wa/wa-automate');
const ToSticker = require('./functions/ToSticker');
const StickerToImg = require('./functions/StickerToImg');

// comands
async function start(client = Client){
client.onAnyMessage(async (message) => {
    if (message.text.includes('!imagem')) 
        await StickerToImg(message, client);

    if (message.text.includes('!figurinha')) 
        await ToSticker(message, client);
})
}

// to start application 
create().then((client)=>{start(client)})
