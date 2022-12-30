var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
      headless: true,
    },
    safe: false,
  });
  
module.exports = //funcion para iniciar
{
    name: 'imagen',  //nombre del comando
    aliases: ['i', 'imn', 'images'],
    description: 'test command', //descripcion
    async execute(client, message, args, Discord)
    {
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Por favor ingresar un texto valido');

        const image_result = await google.scrape(image_query, 3);
        message.channel.send(image_result[0].url);
    }

}