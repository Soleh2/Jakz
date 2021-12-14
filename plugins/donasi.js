let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Gopay/Dana [081252848955]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282114499086
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
