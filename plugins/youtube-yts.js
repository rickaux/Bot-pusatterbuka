import yts from 'yt-search';
let handler = async (m, { text }) => {
  if (!text) throw 'Cari apa?'
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n*—————————————————*\n')
  m.reply(teks)
}
handler.help = ['ytsearch'].map(v => v + ' <query>')
handler.tags = ['tools', 'internet', 'downloader']
handler.command = /^yts(earch)?$/i
handler.register = false
handler.limit = true

export default handler