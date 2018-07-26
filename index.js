// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const devs = ['333140974865874944'];
var prefix = "-"
const adminprefix = "admin-"

client.on('ready', function(){
    client.user.setStatus("online");
    var ms = 100000 ;
    var setGame = [`-help On ${client.guilds.size} Servers`,`-invite Users ${client.users.size}`,`Emerald Bot ❤ ✯`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);100000

});

client.on('message', function(msg) {
  if(msg.content.startsWith (prefix  + 'server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`Showing Details Of  **${msg.guild.name}*`)
    .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
    .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
    .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
    .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});


 var prefix = "-";
var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**.bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('** الـسيرفر**', `${message.guild.name}`,true)
            .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
            .addField(' **الرسالة** ', args)
            .setThumbnail(message.guild.iconURL)
            .setColor('RANDOM')
            m.send(`${m}`,{embed: bc});
        });
        const AziRo = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)   
        .setTitle('✔️ | جاري ارسال رسالتك ') 
        .addBlankField(true)
        .addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
        .addField('📋| الرسالة ', args)
        .setColor('RANDOM')  
        message.channel.sendEmbed(AziRo);          
    }
    } else {
        return;
    }
});






client.on("message", message => {
 if (message.content === "-inv") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('©Emerald Bot')
      .addField('Emerald Bot', `https://discordapp.com/oauth2/authorize?client_id=469477937104551956&scope=bot&permissions=8`)
  message.author.send({embed});

 }
});


  client.on('message', message => {
    var prefix = "-"
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});

client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});






client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');
    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
});

client.login(process.env.TOKEN);
