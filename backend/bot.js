import { Telegraf } from 'telegraf';
const bot = new Telegraf('1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ');

bot.start((ctx) => {
  ctx.reply('Welcome to TapMe! Start tapping to earn coins!');
  // Register the user in Supabase here...
});

bot.launch();
