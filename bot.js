
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "$"

client.login(process.env.BOT_TOKEN);//لا تحط التوكن حقك هنا


client.on('ready',  () => {

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 

  console.log('by DG');

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

  console.log('is online')

client.user.setStatus("dnd");

});




client.on('ready', function(){
    var ms = 10000 ;
    var setGame = ['System ',' |DG ' ];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j
        client.user.setGame(setGame[i],`https://www.twitch.tv/حب بلا حدود`);
    }, ms);

})


client.on('message', message => {

    var args = message.content.split(/[ ]+/)

    if(message.content.includes('discord.gg')){

        message.delete()

      message.channel.sendMessage("", {embed: {

        title: "لا تنشر",

        color: 0x06DF00,

        description: "يمنع النشر في هذا السيرفر",

        footer: {

          text: "By DG-System"

        }

      }}).then(msg => {msg.delete(3000)});

                          }



     

});

	client.on('message', message =>{

    let args = message.content.split(' ');

    let prefix = '$'; //تقدر تغير البرفكس

    

    if(args[0] === `${prefix}avatar`){

        let mentions = message.mentions.members.first()

        if(!mentions) {

          let sicon = message.author.avatarURL

          let embed = new Discord.RichEmbed()

          .setImage(message.author.avatarURL)

          .setColor("ff0000") 

          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);

          message.channel.send({embed})

        } else {

          let sicon = mentions.user.avatarURL

          let embed = new Discord.RichEmbed()

          .setColor("ff0000")

          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)

          .setImage(sicon)

          message.channel.send({embed})

        }

    };

});

client.on('message', message => {

    if(!message.channel.guild) return;

if (message.content.startsWith('$ping')) {

if(!message.channel.guild) return;

var msg = `${Date.now() - message.createdTimestamp}`

var api = `${Math.round(client.ping)}`

if (message.author.bot) return;

let embed = new Discord.RichEmbed()

.setAuthor(message.author.username,message.author.avatarURL)

.setColor('RANDOM')

.addField('**Time Taken:**',msg + " ms 📶 ")

.addField('**WebSocket:**',api + " ms 📶 ")

message.channel.send({embed:embed});

}

});

////ميوت للتشانل

client.on('message', message => {

var prefix = "$";

       if(message.content === prefix + "mutechannel") {

                           if(!message.channel.guild) return message.reply('** This command only for servers**');



   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');

              message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: false



              }).then(() => {

                  message.reply("**__تم تقفيل الشات__ ✅ **")

              });

                }

//FIRE BOT

    if(message.content === prefix + "unmutechannel") {

                        if(!message.channel.guild) return message.reply('** This command only for servers**');



   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');

              message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: true



              }).then(() => {

                  message.reply("**__تم فتح الشات__✅**")

              });

    }

       

});


client.on('guildMemberAdd', Sal => { //By Salto7#4595

    var embed = new Discord.RichEmbed()

    .setAuthor(Sal.user.username, Sal.user.avatarURL)

    .setThumbnail(Sal.user.avatarURL)

    .setImage('https://cdn.discordapp.com/attachments/492862340484694027/493771573740830740/welcome1.png') //هنا حط الصوره الي تبيها

    .setTitle('عضو جديد!')

    .setDescription('مرحبا بك بالسيرفر')

    .addField('``ايدي العضو``:',"" +  Sal.user.id, true)

    .addField('``تاق العضو``', Sal.user.discriminator, true)

    .addField('``تم الانشاء في``', Sal.user.createdAt, true)

    .addField(' 👤  انت رقم',`**[ ${Sal.guild.memberCount} ]**`,true)

    .setColor('RANDOM')

    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)

    var channel =Sal.guild.channels.find('name', ' (general)') // هنا حط اسم الروم الي تبيه يكتب فيه

    if (!channel) return;

    channel.send({embed : embed});

    });



client.on('guildMemberAdd', member => {

    let channel = member.guild.channels.find('name', '𝐖𝐄𝐋𝐂𝐎𝐌𝐄');

    let memberavatar = member.user.avatarURL

      if (!channel) return; 

    let embed = new Discord.RichEmbed()

        .setColor('RANDOM')

        .setThumbnail(memberavatar)

        .addField(':running_shirt_with_sash: | name :  ',`${member}`)

        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)

        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )

                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)

               

                  .addField("Name:",`<@` + `${member.id}` + `>`, true)

                      

                                     .addField(' الـسيرفر', `${member.guild.name}`,true)

                                       

     .setFooter("**SERVER NAME **")

        .setTimestamp()

    

      channel.sendEmbed(embed);

    });
    
    const devs = ["336374035141230592"]

 

const adminprefix = "$";//Narox

client.on('message', message => {

    var argresult = message.content.split(` `).slice(1).join(' ');

      if (!devs.includes(message.author.id)) return;

     

  if (message.content.startsWith(adminprefix + 'pt')) {

    client.user.setGame(argresult);

      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)

  } else

    if (message.content === (adminprefix + "Percie")) {

    message.guild.leave();        

  } else  

  if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق

  client.user.setActivity(argresult, {type:'WATCHING'});

      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)

  } else

  if (message.content.startsWith(adminprefix + 'setprefix')) {//لتغير البريفكس

  client.user.setPrefix(argresult).then

      message.channel.send(`**Prefix Changed :white_check_mark: ${argresult}** `)

  } else

  if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع

  client.user.setActivity(argresult , {type:'LISTENING'});

      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)

  } else     //Narox

    if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت

  client.user.setUsername(argresult).then

      message.channel.sendMessage(`**${argresult}** : Done `)

  return message.reply("**Name Changed :white_check_mark:**");

  } else

    if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت

  client.user.setAvatar(argresult);

    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);

        } else    

  if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت

    client.user.setGame(argresult, "https://www.twitch.tv/idk");

      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)

  }

    if(message.content === adminprefix + "restart") {// لعمل ريسترت للبوت

      if (!devs.includes(message.author.id)) return;

          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);

        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

        console.log(`⚠️ Bot restarting... ⚠️`);

        console.log("===============================================\n\n");

        client.destroy();

        child_process.fork(__dirname + "/bot.js");

        console.log(`Bot Successfully Restarted`);

    }

 

  });



  client.on('message', message => {

            if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

if (message.content.startsWith('send')){

 if (message.author.id !== 'ايديك') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')

 if(!message.author.id === 'ايديك') return;

message.channel.sendMessage('جار ارسال الرسالة |✅')

client.users.forEach(m =>{

m.sendMessage(args)

})

}

});

client.on('message', msg => {

  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) return;

  let command = msg.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);

 

    if(command === "clear") {

        const emoji = client.emojis.find("name", "wastebasket")

    let textxt = args.slice(0).join("");

    if(msg.member.hasPermission("MANAGE_MESSAGES")) {

    if (textxt == "") {

        msg.delete().then

    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));

} else {

    msg.delete().then

    msg.delete().then

    msg.channel.bulkDelete(textxt);

        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));

        }    

    }

}

});



client.on('message', function(message) {

    if (!message.member.hasPermissions(['ADMINISTRATOR'])){

            let command = message.content.split(" ")[0];

        if(message.content.includes('discord.gg')){

        message.reply (' ')

           if(!message.channel.guild) return message.reply('** This command only for servers**');

     message.member.addRole(message.guild.roles.find('name', 'Muted')); 

    const embed500 = new Discord.RichEmbed()

      .setTitle(":x: | تمت معاقبتك")

            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)

      .addField(`by`,`ALPHACODES`)

            .setColor("c91616")

            .setThumbnail(`${message.author.avatarURL}`)

            .setAuthor(message.author.username, message.author.avatarURL) 

        .setFooter(`${message.guild.name} Server`)

     message.channel.send(embed500) 

    

        

    }

    }

})




client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



  let args = message.content.split(" ").slice(1);





  if (command === "say") { /// اكتب البرفيكس ثم الامر

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }





});

client.on("message", message => {

  let men = message.mentions.users.first();

  if(message.content.startsWith( "%vkick")) {

    try {

    if(!men) {

      message.channel.send("**الرجاء اخيار شخص لطرده !**");

      return;

    }

    if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");

    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")

    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");

       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")



    message.guild.createChannel("AgentX VKick", "voice").then(c => {

      message.guild.member(men).setVoiceChannel(c.id)

    setTimeout(() => {

      c.delete()

    }, 100)

    });

    message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)

} catch (e) {

  message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");

}

  }

});

const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const Galal = member.guild.channels.find("name", "𝐈𝐍𝐕𝐈𝐓𝐄𝐒");
     Galal.send(`<@${member.user.id}> joined by <@${inviter.id}>`);
   //  Galal.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});

client.on("message", (message) => {

   if (message.content.startsWith("$new")) {     

        const reason = message.content.split(" ").slice(1).join(" ");     

        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);

        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    

        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {

            let role = message.guild.roles.find("name", "Support Team");

            let role2 = message.guild.roles.find("name", "@everyone");

            c.overwritePermissions(role, {

                SEND_MESSAGES: true,

                READ_MESSAGES: true

            });    

            c.overwritePermissions(role2, {

                SEND_MESSAGES: false,

                READ_MESSAGES: false

            });

            c.overwritePermissions(message.author, {

                SEND_MESSAGES: true,

                READ_MESSAGES: true

            });

            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);

            const embed = new Discord.RichEmbed()

                .setColor(0xCF40FA)

                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)

                .setTimestamp();

            c.send({

                embed: embed

            });

        }).catch(console.error);

    }

 

 

  if (message.content.startsWith("$close")) {

        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

 

        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`$confirm\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)

            .then((m) => {

                message.channel.awaitMessages(response => response.content === '$confirm', {

                        max: 1,

                        time: 10000,

                        errors: ['time'],

                    })   

                    .then((collected) => {

                        message.channel.delete();

                    })    

                    .catch(() => {

                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {

                            m2.delete();

                        }, 3000);

                    });

            });

    }

 

});



	
 
antispam(client, {
  warnBuffer: 3, //الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على تحذير.
  maxBuffer: 5, // الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على ميوت.
  interval: 1000, // مقدار الوقت قبل حصول باند
  warningMessage: "stop spamming.", // رسالة تحذير اذا سوا سبام!
  roleMessage: "Muted!!", // الرسالة الي تجي اذا شخص اخذ ميوت
  roleName: "Muted", // اسم رتبة الميوت
  maxDuplicatesWarning: 7, // عدد الرسايل الي قبل التحذيرات
  maxDuplicatesBan: 10, // عدد الرسايل الي يقدر المستخدم يرسلها قبل الميوت
  time: 10, // عدد الوقت الي يجلس لين تسحب رتبة الميوت من الشخص الحسبة برمجية وليست كتابية 
});
