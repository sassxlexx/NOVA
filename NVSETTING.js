//————————————————————————//    
/*
> BASE ORI BY SANZMD X ZXV
> CREATE DATE : 30 JUNI 2024
> VERSION : 0.1 [ BETA ]

*/
//————————————————————————//
const fs = require('fs')
//————————————————————————//

const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./NVLIB/myfunction')

//————————————————————————//

global.d = new Date()
global.calender = d.toLocaleDateString('id')

//————————————————————————//
//SETTING CPANEL
global.apikey = 'ptla_6pKq2Q5hGxajeMBrRdazQLkG1NSpXwIIi1FYZNmkUkQ' //Ganti pake apikey panel lu
global.capikey = 'ptlc_USy1wdkOexq5IIfootLXskwsgoZvDu1oQvgybJ0qlWC' //Ganti Pake Capikey Panel Lu
global.domain = 'https://zetsubo-stardust.zxvision.biz.id'
global.eggsnya = '15' //Ganti Pake Eggs Panel Lu
global.location = '1' //Ganti Pake Location Panel Lu

//————————————————————————//
//SETTING BOT 
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['6287743212449']
global.ownMain = '6287743212449'
global.NamaOwner = 'LeXcZDev' //gausah diganti 
global.sessionName = 'NV-SESSION'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = 'LeXcZBot' //ganti aj klo mau
global.author = 'LeXcZDev' //ganti aj klo mau
global.packname = 'LeXcZBot' //ganti aj klo mau
global.yt = 'https://youtube.com/@LexczXModz' //gausah diganti
global.web = "http://lexcz.byethost8.com"
global.thumb = fs.readFileSync('./NVMEDIA/image/mengkece.jpg')
global.gifin = "https://a.uguu.se/kPTcLNsi.mp4"
//————————————————————————//
//TAMPILAN MENU
global.tTeks = ' ⭔ '
global.tTeks2 = '*_'
global.tTeks3 = '_*'
 
//————————————————————————//

global.country = `62`
global.system = {
gmail: `sanzmd23@gmail.com`,
}

//————————————————————————//
//SETTING RPG
global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '📊',
limit: '🎫',
health: '❤️',
exp: '✨',
atm: '💳',
money: '💰',
bank: '🏦',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🛍️',
mythic: '🎁',
legendary: '🗃️',
superior: '💼',
pet: '🔖',
trash: '🗑',
armor: '🥼',
sword: '⚔️',
pickaxe: '⛏️',
fishingrod: '🎣',
wood: '🪵',
rock: '🪨',
string: '🕸️',
horse: '🐴',
cat: '🐱',
dog: '🐶',
fox: '🦊',
robo: '🤖',
petfood: '🍖',
iron: '⛓️',
gold: '🪙',
emerald: '❇️',
upgrader: '🧰',
bibitanggur: '🌱',
bibitjeruk: '🌿',
bibitapel: '☘️',
bibitmangga: '🍀',
bibitpisang: '🌴',
anggur: '🍇',
jeruk: '🍊',
apel: '🍎',
mangga: '🥭',
pisang: '🍌',
botol: '🍾',
kardus: '📦',
kaleng: '🏮',
plastik: '📜',
gelas: '🧋',
chip: '♋',
umpan: '🪱',
skata: '🧩'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}
}

//————————————————————————//
//SETTING RESPON
global.mess = {
 ingroup: '*[ <!> ONLY ON GROUP ]*',
 admin: '*[ <!> ONLY ADMIN ]*',
 owner: '*[ <!> ONLY OWNER ]*',
 premium: '*[ <!> ONLY PREMIUM ]*',
 seller: '*[ <!> ONLY RESELLER ]*',
 usingsetpp: `*[ <!> ONLY FOR MY OWNER ]*`,
 wait: '*[ </> WAIT PROCESS.... </> ]*',
 success: '*[ <✓> SUCCES ]*',
 bugrespon: `*[ </> WAIT PROCESS.... </> ]*`
}

//————————————————————————//
global.autOwn = '6287743212449'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`FILE DIPERBARUI : ${__filename}`))
delete require.cache[file]
require(file)
})
