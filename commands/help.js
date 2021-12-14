const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Display help message'),
	async execute(interaction) {
        const cmd_list = new MessageEmbed()
        //header
        .setColor('#800000')
        .setTitle("Liste des commandes")
        .setThumbnail('https://images.emojiterra.com/google/android-pie/512px/2699.png')

        //content
        .addFields(
            { name: 'help', value: "Affiche l'aide. Mais comme le dev est un turbo flemmard, elle est pas encore au point." },
            { name: 'cat', value: "Envoie un chat tout mignon pour egayer ta journée." },
            { name: 'Sinon tu peux me tag pour me parler', value: "Je répondrai dans la mesure du possible." },
        )
h
        //footer
        .setFooter('pd')
		await interaction.reply({ embeds: [cmd_list] });
	},
};