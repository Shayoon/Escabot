const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear_candid")
    .setDescription("Nettoie la catégorie candidature"),
  async execute(interaction) {
    member = interaction.member
    response=""
    if(member.permissions.has("ADMINISTRATOR")){
      candid = interaction.guild.channels.cache.get("954560752012898345");
      avis = interaction.guild.channels.cache.get("955253592393121792");
      candid
        .bulkDelete(100)
        .then((messages) => console.log(`Bulk deleted ${messages.size} messages`))
        .catch(console.error);

      avis
        .bulkDelete(100)
        .then((messages) => console.log(`Bulk deleted ${messages.size} messages`))
        .catch(console.error);
      
      candid.send("https://cdn.discordapp.com/attachments/963768641097199666/963768656741941278/unknown.png")
      response = "Les salons sont tout propres patron !"
    }
    else{
      response = "Tu n'as pas le droit de faire ça petite gouape. Que je ne t'y reprenne pas."
    }

    await interaction.reply({
      content: response,
      ephemeral: true,
    });
  },
};
