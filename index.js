// Discord.js bot
const Discord = require('discord.js');
const { Client, Util } = require('discord.js');
const client = new Client();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const request = require('request');
const fs = require("fs");
const moment = require('moment');
const devs = ['333140974865874944'];
var Canvas = require('canvas');
var jimp = require('jimp');
var prefix = "-"
const adminprefix = "admin-"

client.on('ready', function(){
    client.user.setStatus("online");
    var ms = 100000 ;
    var setGame = [`-help On ${client.guilds.size} Servers`,`-inv Users ${client.users.size}`,`Emerald Bot ❤ ✯`];
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
  if(!message.channel.guild) return;
if(message.content.startsWith('-bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Emerald Bot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('السيرفر', message.guild.name)
.addField('المرسل', message.author.username)
.addField('الرسالة', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
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
  if (msg.content === '-inv') {
    msg.reply('Check Your DM :white_check_mark:');
  }
});



client.on('message', msg => {
  if (msg.content === '-support') {
    msg.reply('Check Your DM :white_check_mark:');
  }
});


client.on('message', message => {
    if (message.content === "-help") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setFooter(`♪ZeyadChannel♪.🔝#5717`, 'https://images-ext-2.discordapp.net/external/X9SanEG0s7Dtv3krTgy-kod_fj6JRVJ2AG4JryCiiz0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/375761288518828042/fffa31c797e88cf059dd6db424ff456a.png?width=80&height=80')
  .setColor("#000000")
  .addField("Done | تــــم" , ":envelope: | :sleuth_or_spy::skin-tone-3:Check Your DM :white_check_mark:")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });


client.on("message", message => {
    if (message.content === "-help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setDescription(`**❓❔❗️❕وش مميزات البوت❗️❕❓❔**
        **__1-__:books:🧐 بوت عربي🧐:books:
         __2-__:white_check_mark: :part_alternation_mark:️ استخدامه جدا سهل:part_alternation_mark:️:white_check_mark: 
         __3-__:gear:️صيانه كل يوم:gear:️
         __4-__:money_with_wings: مجاني :money_with_wings:**`)
   message.author.sendEmbed(embed)
   
   }
   });
  

  
   
  
  
  
   client.on("message", message => {
      if (message.content === "-help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF0000")
           .setDescription(`**🕴🏾الاوامر العامة|Public Commands🕴🏾**
  ** __-id__->**معلومات عنك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-server__->**معلومات عن السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-credit__-**تشوف الكريدت حقك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-trans__-** لتحويل الكريدت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-bot__->**معلومات عن البوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-mb__->**حالة اعضاء السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-ping__->**سرعة اتصالك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-avatar__->**صورتك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-say__->**يكرر البوت الكلام الي تقوله
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-sa__->**يجيب صورة السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-bot__->**معلومات خفيفه عن البوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-marry__->** xD لطلب الزواج 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-e__->** لتكتب بأيموجي
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-kiki__->** لتشوف كيكي
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-roll__->**يسوي قرعه من 1 الى 100
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-mcskin <name>__->**تري سكنك في ماين كرافت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-mcstats <ip>__->**احصائيات السيرفرات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-minec__->** اسألة عن ماين كرافت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-punch__->** تعطي خويك كف
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-roles__->** تشوف الرتب
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-mhelp__-> تظهر اوامر الميوزك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-help__->**تظهر لك هذي القائمة
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- `)
     message.author.sendEmbed(embed)
     
     }
     });






client.on("message", message => {
      if (message.content === "-help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF0000")
           .setDescription(`**🕴🏾الاوامر العامة|Public Commands🕴🏾**
  **__-cr-colors__-**MANGE_ROLES لصنع 50 لون يجب يكون معك برمشن 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-del-colors__-**MANGE_ROLESلحذف ال 50 لون يجب يكون معك برمشن
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-colors__-** لعرض الاوان
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-color <number>__-** لأختيار الون
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
   **__-invites__->** لمعرفة كم دعيت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-inv__-** لأضافة البوت الي سيرفرك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-support__-** سيرفر المساعدة
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- `)
 message.author.sendEmbed(embed)
     
     }
     });













  
   client.on("message", message => {
    if (message.content === "-help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#FFFF00")
         .setDescription(`**:video_game:   الالعاب|Games**
  ** __-hack__->**لعبة هكر مزح
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-sra7h__->** لعبة صراحة
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-3kab__->** لعبة عقاب
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-7ob__->** لعبة حب 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-fkk__->** لعبة فكك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ** __-cut__->**لعبة أسئله
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-marim__->**لعبة مريم المخيفه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-wyr__->**لو خيروك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-animal__->**صور حيوانات كيوت ههه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)
   message.author.sendEmbed(embed)
   
   }
   });
  
  
  
   client.on("message", message => {
      if (message.content === "-help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#57FEFF")
           .setDescription(`**⚙️اوامر الادارة|Administrator⚙️**
  ** __-kick__->**طرد
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  "welcome" لخاصية الترحيب يجب ان شاء روم بأسم
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-ban__->**باند
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-mute__->**ميوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-hchannel__->** لأخفاء الشانل
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-schannel__->** لأظهار الشانل
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-unmute__->**فك ميوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-channelmute__->**قفل الشات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-unmutechannel__->**فتح الشات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-role all <rank>__->**لتعطي للجميع رانك
  -=-=-=-=-=-=-=-=-=-=-= -=-=-=-=-=-=-=-=-=- 
  **__-role humans <rank>__->**لتعطي لرانك لليس لديهم رتبة
  -=-=-=-=-=-=-=-=-=-=-= -=-=-=-=-=-=-=-=-=-
  **__-role bots <rank>__-> اتعطي للبوتس رانك
  -=-=-=-=-=-=-=-=-=-=-= -=-=-=-=-=-=-=-=-=-
  **__-addrole__->** لأنشاء رول
  -=-=-=-=-=-=-=-=-=-=-= -=-=-=-=-=-=-=-=-=-
  **__-clear <Number> __->**حذف الشات بعدد
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-bc__->** برود كاست 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)
     message.author.sendEmbed(embed)
     }
     });
  

client.on("message", message => {
      if (message.content === "-help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#57FEFF")
           .setDescription(`**:musical_note:أوامر الميوزك|Music Commandes:musical_note:**
**-play ⇏ لتشغيل أغنية برآبط أو بأسم**
**-skip ⇏ لتجآوز الأغنية الحآلية**
**-pause ⇏ إيقآف الأغنية مؤقتا**
**-resume ⇏ لموآصلة الإغنية بعد إيقآفهآ مؤقتا**
**-volume ⇏ لتغيير درجة الصوت 100 - 0**
**-stop ⇏ لإخرآج البوت من الروم**
**-np ⇏ لمعرفة الأغنية المشغلة حآليا**
**-queue ⇏ لمعرفة قآئمة التشغيل**`)
     message.author.sendEmbed(embed)
     }
     });
  
  
  
  
  
  
     client.on("message", message => {
      if (message.content === "-help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('By ♪ZeyadChannel♪.🔝#5717 ')
           .setDescription(`**__أتمنى يعجبكم البوت يا أغلى ناس ❤️ 💛 💚 💙 💜 🖤__**`)
     message.author.sendEmbed(embed)
     
     }
     });



client.on('message', message => {
    if(message.content.startsWith (prefix  + 'mb')) {
        if(!message.channel.guild) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
        .setFooter(message.author.username, message.author.avatarURL) 
  
      .setDescription(`**:battery: حالة اعضاء السيرفر**
      
  **:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
  **:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
  **:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
  **:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
  
          message.channel.send()
  
  message.channel.sendEmbed(embed)
  }
  });


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})


client.on("message", message => {
    var prefix = "-";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("-clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});



client.on("message", message => {
	const prefix = "-"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "sa"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Put a number**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});


client.on('message', message => {
    if (message.content.startsWith("-hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```اكتب اسم الشخص الي تبي يتهكر```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 33000)
           });
         }
 })


client.on('message', message => {


if (message.content === prefix + "mutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("Channel Muted ✅ ")
           });
}
  if (message.content === prefix + "unmutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("Channel UnMuted ✅ ")
           });
}
  

});




client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith("-ping")) {
    message.channel.sendMessage(`Pong ! \`${Date.now() - message.createdTimestamp} ms\`:watch:`);
    }
});


client.on('message', message => {
   if (message.content.startsWith("-id")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("🏅 Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('🎤 Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("🆔 ID:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("📅 Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


client.on('ready', () => {
});
const x5bz4 = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
   '*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر  ***'
]
 client.on('message', message => {
 if (message.content.startsWith('-marim')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});

var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png","https://f.top4top.net/p_8816hvic1.png","https://d.top4top.net/p_882020461.png","https://e.top4top.net/p_882s3ftn1.png","https://a.top4top.net/p_882eg9c51.png","https://c.top4top.net/p_882xkcqd1.png","https://f.top4top.net/p_882w7pdi1.png","https://a.top4top.net/p_882gcpmo1.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'wyr')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message => {
  var prefix = "-"
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });



const Slam = [
  'هلا بيك',
  'منور يا ولد',
  'بنورك نفرح',
  'يا هلا ',
]
client.on('message', msg => {
if  (msg.content == 'هلا') {
    const slamat = new Discord.RichEmbed()
    .setDescription(`${Slam[Math.floor(Math.random() * Slam.length)]}`)
    .setThumbnail(msg.author.avatarURL)
    msg.channel.send({embed:  slamat }).catch(e => {msg.reply(`لم أستطع أرسال الأمبيد .. تأكد أن معي الصلاحيات الكافية`)});
  }
});


client.on("message", message => {
      if (message.content === "-support") {
       const embed = new Discord.RichEmbed()
           .setColor("RANDOM")
           .setFooter('©Emerald Bot')  
           .addField('❤سيرفر الدعم الفني', `  https://discord.gg/m6TYNNt  `)
       message.author.send({embed});
     
      }
     });


 client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            } 
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
    });
}
} else if(args[0] == 'humans') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
});
}
}
}
});











client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لأسكاته ( لأعطائة ميوت ) كتابي**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "غير محدد";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('تم اغطائك ميوت بسيرفر')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
  }
});





let points = {}

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'fkk')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fkk/fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
لمعرفة نقطاك الرجاء كتابة -نقاطي**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let userData = points[message.author.id];
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
            console.log('[Typing] Error: No one type the word.');
          })
        })
    })
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    let userData = points[message.author.id];
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setColor('#000000')
    .setDescription(`نقاطك: \`${userData.points}\``)
    message.channel.sendEmbed(embed)
  }

  
});




var prefix = "-"
client.on('message', message => {
    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#cf1111",
                    permissions: []
     })
	}
});
client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "2",
                    color: "#df5d11",
                    permissions: []
     })
	}
});
client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "3",
                    color: "#dfab11",
                    permissions: []
     })
	}
});
	client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "4",
                    color: "#dfde11",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "5",
                    color: "#a8df11",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "6",
                    color: "#64c40c",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "7",
                    color: "#38c30c",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "8",
                    color: "#0cc33f",
                    permissions: []
     })
	}});	
client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "9",
                    color: "#0cc36c",
                    permissions: []
     })
}});	
client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "10",
                    color: "#0cc394",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "11",
                    color: "#0cc3ad",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "12",
                    color: "#0cb1c3",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "13",
                    color: "#0c9ec3",
                    permissions: []
     })
}});
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "14",
                    color: "#0c8ac3",
                    permissions: []
     })
}});
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "15",
                    color: "#0c6cc3",
                    permissions: []
     })
	}});
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "16",
                    color: "#0c49c3",
                    permissions: []
     })
}});
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "17",
                    color: "#0c2bc3",
                    permissions: []
     })
}});
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "18",
                    color: "#150cc3",
                    permissions: []
     })
}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "19",
                    color: "#880cc3",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "20",
                    color: "#b50cc3",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "21",
                    color: "#c30cb8",
                    permissions: []
     })
	}});	

client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "22",
                    color: "#c30c90",
                    permissions: []
     })
}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "23",
                    color: "#c30c63",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "24",
                    color: "#c30c4a",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "25",
                    color: "#c30c31",
                    permissions: []
     })
	}});	

	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "26",
                    color: "#ff0000",
                    permissions: []
     })
	}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "27",
                    color: "#ff4200",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "28",
                    color: "#ff6c00",
                    permissions: []
     })
		}});	
	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "29",
                    color: "#ff8f00",
                    permissions: []
     })
}});	
	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "30",
                    color: "#ffd400",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "31",
                    color: "#e4ff00",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "32",
                    color: "#adff00",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "33",
                    color: "#60ff00",
                    permissions: []
     })
}});	
	
client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "34",
                    color: "#14ff00",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "35",
                    color: "#00ff40",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "36",
                    color: "#00ff8c",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "37",
                    color: "#00ffc4",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "38",
                    color: "#00e7ff",
                    permissions: []
     })
}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "39",
                    color: "#009aff",
                    permissions: []
     })
}});	
	
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "40",
                    color: "#0055ff",
                    permissions: []
     })
}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "41",
                    color: "#0001ff",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "42",
                    color: "#6700ff",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "43",
                    color: "#ad00ff",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "44",
                    color: "#dd00ff",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "45",
                    color: "#ff00fe",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "46",
                    color: "#ff00cd",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "47",
                    color: "#ff0096",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "48",
                    color: "#ff0057",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "49",
                    color: "#ff002d",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "50",
                    color: "#050505",
                    permissions: []
     })
				
	           message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('GREEN').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``جاري العمل على الالوان |✅``')
	 });
				
	}});










	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '1');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '2');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '3');
		
		role.delete()
		}
	
	});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '4');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '5');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '6');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '7');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '8');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '9');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '10');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '11');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '12');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '13');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '14');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '15');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '16');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '17');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '18');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '19');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '20');
		
		role.delete()
		}
	
	});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '21');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '22');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '23');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '24');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '25');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '26');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '27');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '28');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '29');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '30');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '31');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '32');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '33');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '34');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '35');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '36');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '37');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '38');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '39');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '40');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '41');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '42');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '43');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '44');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '45');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '46');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '47');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '48');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '49');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '50');
		
		role.delete()
		
			message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('RED').setAuthor(`-{message.author.username}'`, message.author.avatarURL).setDescription('``جاري حذف على الالوان |✅``')});
	}
	});




var x1 = "-color 1"
var x2 = "-color 2"
var x3 = "-color 3"
var x4 = "-color 4"
var x5 = "-color 5"
var x6 = "-color 6"
var x7 = "-color 7"
var x8 = "-color 8"
var x9 = "-color 9"
var x10 = "-color 10"
var x11 = "-color 11"
var x12 = "-color 12"
var x13 = "-color 13"
var x14 = "-color 14"
var x15 = "-color 15"
var x16 = "-color 16"
var x17 = "-color 17"
var x18 = "-color 18"
var x19 = "-color 19"
var x20 = "-color 20"
var x21 = "-color 21"
var x22 = "-color 22"
var x23 = "-color 23"
var x24 = "-color 24"
var x25 = "-color 25"
var x26 = "-color 26"
var x27 = "-color 27"
var x28 = "-color 28"
var x29 = "-color 29"
var x30 = "-color 30"
var x31 = "-color 31"
var x32 = "-color 32"
var x33 = "-color 33"
var x34 = "-color 34"
var x35 = "-color 35"
var x36 = "-color 36"
var x37 = "-color 37"
var x38 = "-color 38"
var x39 = "-color 39"
var x40 = "-color 40"
var x41 = "-color 41"
var x42 = "-color 42"
var x43 = "-color 43"
var x44 = "-color 44"
var x45 = "-color 45"
var x46 = "-color 46"
var x47 = "-color 47"
var x48 = "-color 48"
var x49 = "-color 49"
var x50 = "-color 50"
client.on('message', message => {
	if (message.content === x1) {
	    if(!message.channel.guild) return;
		message.member.addRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));
message.member.removeRole(message.guild.roles.find("name", "86"));
message.member.removeRole(message.guild.roles.find("name", "87"));
message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

if (message.content === x2) {
    if(!message.channel.guild) return;
	message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.addRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x3) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.addRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x4) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.addRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x5) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.addRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x6) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.addRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x7) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.addRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x8) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.addRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x9) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.addRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x10) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.addRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	
	if (message.content === x11) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.addRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x12) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
message.member.addRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x13) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
message.member.addRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x14) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
message.member.addRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x15) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
message.member.addRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x16) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
message.member.addRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x17) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
message.member.addRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x18) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
message.member.addRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
		if (message.content === x19) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
message.member.addRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x20) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
message.member.addRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x21) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
message.member.addRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x22) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
message.member.addRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x23) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
message.member.addRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x24) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
message.member.addRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x25) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
message.member.addRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x26) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
message.member.addRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x27) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
message.member.addRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x28) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
message.member.addRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x29) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
message.member.addRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x30) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
message.member.addRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x31) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
message.member.addRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x32) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
message.member.addRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x33) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.addRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x34) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.addRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x35) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.addRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x36) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.addRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x37) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.addRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x38) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.addRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x39) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.addRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x40) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.addRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x41) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.addRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x42) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.addRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x43) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.addRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x44) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.addRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x45) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.addRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x46) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.addRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x47) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.addRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x48) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.addRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x49) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.addRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x50) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.addRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
  if (message.content === '-colors') {
      if (!message.channel.guild) return;
    message.channel.sendFile('https://cdn.discordapp.com/attachments/471320172716752916/471855805776265238/colors.png');
  }
	
});




function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Emerald Bot`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[-]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | ♪ZeyadChannel♪.🔝#5717')
    })
}
});

















client.on("message", (message) => {
    if (message.content.startsWith("-kick")) {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply(':warning: ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " مع السلامه :wave: ");
        }).catch(() => {
            message.channel.send("Error -_-");
        });
    }
});






client.on('message',  (message) => {
            if(message.content.startsWith('-punch')) {
      let user = message.mentions.users.first();
      if (!user) {
        /**
         * The command was ran with invalid parameters.
         * @fires commandUsage
         */
        return message.emit('commandUsage', message, this.help);      }
    
      let punches = [
        'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
        'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
        'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
        'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
        'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif'
      ];
    
      message.channel.send({
        embed: {
          description: `${message.author.username} عطاك كففف ${user.username}! :punch:`,
          image: {
            url: punches[Math.floor(Math.random() * punches.length)]
          }
        }
      }).catch(e => {
        client.log.error(e);
      })
            }  
    });
	  

 const codes = {
        ' ': '   ',
        '0': '0⃣',
        '1': '1⃣',
        '2': '2⃣',
        '3': '3⃣',
        '4': '4⃣',
        '5': '5⃣',
        '6': '6⃣',
        '7': '7⃣',
        '8': '8⃣',
        '9': '9⃣',
        '!': '❕',
        '?': '❔',
        '#': '#⃣',
        '*': '*⃣'
      };
      
      'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
        codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
      });
      
      
      client.on('message' , async message => {
        if(message.content.startsWith(prefix + "e")) {
                let args = message.content.split(" ").slice(1);
        if (args.length < 1) {
          message.channel.send('You must provide some text to emojify!');
      }
      
      message.channel.send(
          args.join(' ')
              .split('')
              .map(c => codes[c] || c)
              .join('')
      );
      };
      });


client.on('message', message => {
  var prefix = "-"
            if (message.content.startsWith(prefix + 'addrole')) {
                         if(!message.channel.guild) return message.reply('**Commands in the server**');
                    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('⚠ **You do not have permissions**');
                    let args = message.content.split(" ").slice(1);
                        message.guild.createRole({
                            name : args.join(' '),
                            permissions : [1]
                        }).then(function(role){
                    return message.reply('✅ **Added a Role**');
                            message.addRole(role)
                        })
            
            }
            });





var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


const Sra7a = [
  'صراحه  |  صوتك حلوة؟',
  'صراحه  |  التقيت الناس مع وجوهين؟',
  'صراحه  |  شيء وكنت تحقق اللسان؟',
  'صراحه  |  أنا شخص ضعيف عندما؟',
  'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
  'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
  'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
  'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
  'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
  'صراحه  |  أشجع شيء حلو في حياتك؟',
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
  'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
  'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
  'صراحه  |  نظرة و يفسد الصداقة؟',
  'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
  'صراحه  |  شخص معك بالحلوه والمُره؟',
  'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
  'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
  'صراحه  |  وش تتمنى الناس تعرف عليك؟',
  'صراحه  |  ابيع المجرة عشان؟',
  'صراحه  |  أحيانا احس ان الناس ، كمل؟',
  'صراحه  |  مع مين ودك تنام اليوم؟',
  'صراحه  |  صدفة العمر الحلوة هي اني؟',
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  'صراحه  |  صفة تحبها في نفسك؟',
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  'صراحه  |  تصلي صلواتك الخمس كلها؟',
  'صراحه  |  ‏تجامل أحد على راحتك؟',
  'صراحه  |  اشجع شيء سويتة بحياتك؟',
  'صراحه  |  وش ناوي تسوي اليوم؟',
  'صراحه  |  وش شعورك لما تشوف المطر؟',
  'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
  'صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  اي الدول تتمنى ان تزورها؟',
  'صراحه  |  متى اخر مره بكيت؟',
  'صراحه  |  تقيم حظك ؟ من عشره؟',
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
  'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
  'صراحه  |  كلمة تود سماعها كل يوم؟',
  'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
  'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
  'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
  'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
  '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
  'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
  '‏صراحه | هل تحب عائلتك ام تكرههم؟',
  '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
  '‏صراحه  |  هل خجلت من نفسك من قبل؟',
  '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
  '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
  '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
 '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
  '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
  '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
  'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
  '‏صراحه  |  ما هو عمرك الحقيقي؟',
  '‏صراحه  |  ما اكثر شي ندمن عليه؟',
'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
client.on('message', message => {
if (message.content.startsWith('-sra7h')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("لعبة صراحة ..")
.setColor('RANDOM')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}
});





const Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

]


client.on('message', message => {
 if (message.content.startsWith("-3kab")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('Emerald Bot' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});






const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


 client.on('message', message => {
   if (message.content.startsWith("-7ob")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبة حب' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});



 client.on('message', message => {
      if(message.content.startsWith ("-marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تطلب ايد وحدة**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' 😳 **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author} 
 العرض لمدة 15 ثانية  
 اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
        
  }
});




client.on("guildMemberAdd", member => {
      const welcomer =  member.guild.channels.find('name', 'welcome');
      //*let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) 
    moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['./img/w1.png',
      './img/w2.png',
      './img/w3.png',
      './img/w4.png',
      './img/w5.png',
      './img/w6.png',
      './img/w7.png',
      './img/w8.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);
                              
                                                      //wl
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(member.user.username, 200, 154);
                              
                              //NAMEً
                              ctx.font = '20px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
      ctx.fillText(`You Are Num  ${member.guild.memberCount} !! `
                              , 200, 190);
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
    
      });


let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")) {


  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310
    message.channel.send(`**${message.author.username} you collect your \`310\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : الملبغ**  \n \`${x[x3]}\` ** : اكتب الرقم التالي حتي تتم عملية التحويل **`).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
        
		




}

      });




client.on('message', message => {

  if (message.content.startsWith( prefix + "sug")) {
  if (!message.channel.guild) return;
      message.channel.send(`تم حفظ اقتراحك الرجاء انتظار الرد من قبل الاداره`)
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("471396001291173890").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });



client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith('-mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("** يجب كتابة ايدي السيرفر . **");
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("📜 اسم السيرفر",`${args}`,true)
        .addField("🌐 بورت السيرفر",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`Emerald Bot.`)
                .setTimestamp()
    message.channel.send(embed)      
}})
  



client.on("message", message => {
    var prefix = "-"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });

const minecraft = [  'ما معنى تطويرة؛ silk touch ؟',  'من هوة اللذي قد انهى سلسلة سيرفر مايت كرافت؟',  'ماهو الوحش اللذي يرسبن في معبد البحر؟',  'من افضل يوتيوبر ينزل شروحات)ردستونية؛عامة',  'ماذا يفعل لك الهيروبراين؟',  'ماهو الشئ اللذي يمكن مكاثرة الفلجر فيه؟',  'من هو اندر ثاني شئ في ماين كرافت',  'ماهو الامر اللذي يعطينا كوماند بلوك؟',  'كم من الوقت يستغرق اليوم العادي في ماين كرافت؟',  'هل لليردستون اهمية كبيرة في ماين كرافت؟',  'اندر اور',  'مطور ماين كرافت السابق',  'اصغر موب في ماين كرافت',  'كيف تصنع البوق',  'في اي ارتفاع تلقى الدايموند',  'موب مستحيل تضربة بالبو (السهم)',  'كم نحتاج من Glowstone Dust لكي نصنع بلكة كاملة منه',  'كم نحتاج حبة ايرون لصنع سكة الحديد (Track)',  'كم عدد قلوب البقرة',  'ن ماذا يخاف الكريبر',  'يشتهر الاندرمان ب…..?',  'كم عدد قلوب الايرون قولم',  'كم ضربة تضرب الدجاجة و تموت',  'كم بلوكة تحتاج بوابة النذر',  'كم بلوكة تحتاج بوابة الاند',  'كم تحتاج الفرن ايروون عشان تصنعها',  'كيف تصنع كرافتنق تيبل',  'كم ياخذ وقت النبات عشان يكبر',  'كم قلوب ستيفي',  'كم قلوب الاندر مان',  'هل الاندر مان يضرب',  'هل الزومبي غبي ؟ و في اي تحديث ؟',  'ماهو الافضل للتسخين الافا او فحم ؟',  'ماهو شئ الذي اقوى من الاوبسيدين ؟',]
client.on('message', message => {

 
if (message.content.startsWith(prefix + 'minec')) {

  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("لعبة ماين كرافت ..")
.setColor('RANDOM')
.setDescription(`${minecraft[Math.floor(Math.random() * minecraft.length)]}`)
.setImage("https://i.imgur.com/RyOXHmZ.png")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}

});




const cuttweet = [
     'كت تويت ‏- تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت ‏- أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت ‏- الحرية لـ ... ؟',
     'كت تويت ‏- قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏- كلمة للصُداع؟',
     'كت تويت ‏- ما الشيء الذي يُفارقك؟',
     'كت تويت ‏- ما الشيء الذي يُفارقك؟',
     'كت تويت ‏- موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏- أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت| بعد ١٠ سنين ايش بتكون ؟',

     'كت تويت ‏- مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت| عمرك شلت مصيبة عن شخص برغبتك ؟',
'كت تويت ‏- أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت|ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت|وش يفسد الصداقة؟',
     '‏كت تويت|شخص لاترفض له طلبا ؟',
     '‏كت تويت|كم مره خسرت شخص تحبه؟.',
     '‏كت تويت|كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت|كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت|هل تُخفي نجاحك أو كت كت تويت | هل تخفي نجاحك أو أشيائك الجميلة خوفاً من العين والحسد؟',
     '‏كت تويت|جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت|أقوى كذبة مشت عليك ؟',
     '‏كت تويت|تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت|هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت|أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت|‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت|وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت|مطلبك الوحيد الحين ؟',
     '‏كت تويت|- هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
  if (message.content === `-cut`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});




 






client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)

	if (command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`âœ… Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the search results ranging from 1-10.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No or invalid value entered, cancelling video selection.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('ًں†ک I could not obtain any search results.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
	} else if (command === 'stop') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === 'volume') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`I set the volume to: **${args[1]}**`);
	} else if (command === 'np') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`ًںژ¶ Now playing: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('âڈ¸ Paused the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('â–¶ Resumed the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`âœ… **${song.title}** has been added to the queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`ًںژ¶ Start playing: **${song.title}**`);
}
client.on("message", message => {
 if (message.content === `${prefix}mhelp`) {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
${prefix}play ⇏ لتشغيل أغنية برآبط أو بأسم
${prefix}skip ⇏ لتجآوز الأغنية الحآلية
${prefix}pause ⇏ إيقآف الأغنية مؤقتا
${prefix}resume ⇏ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
${prefix}volume ⇏ لتغيير درجة الصوت 100 - 0
${prefix}stop ⇏ لإخرآج البوت من الروم
${prefix}np ⇏ لمعرفة الأغنية المشغلة حآليا
${prefix}queue ⇏ لمعرفة قآئمة التشغيل

 `)
   message.channel.sendEmbed(embed)
    
   }
   }); 







 client.on('message', async message => {
  if(message.content.startsWith(prefix + "allbc")) {
    let i = client.users.size;
    if(message.author.id !== '476185102922285066') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});








 client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply(" **يجب تحديد شخص** KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**يجب تحديد شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
  






 client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
  














client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "-";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});





client.on("message", message => {
	var prefix = "-";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});






client.on('ready', () => {
	console.log('I am ready!'); 
  });

client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});


client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
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
