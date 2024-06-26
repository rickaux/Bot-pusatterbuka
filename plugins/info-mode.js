let handler = async (m, { conn, command }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)

    let tio = `
Mode: ${global.opts['self'] ? 'Self' : 'publik'}\nAktif: ${uptimex}\nPengguna: ${Object.keys(global.db.data.users).length}\nPengguna Terbanned: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}\nFitur Sering Digunakan: ${Object.entries(db.data.stats).length}\n\nJika bot tidak ada balasan maka bot sedang maintenance.
    `.trim()
conn.sendMessage(m.chat, {
text: tio,
contextInfo: {
externalAdReply: {
title: "",
body: 'Assisten YuLa💕 By Maximus',
thumbnailUrl: "https://telegra.ph/file/3130db5629b33918b2f90.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['mode']
handler.tags = ['info']
handler.command = /^(mode|runtime)$/i 
handler.limit = false

export default handler

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik";
}