// Need to work on it while Esca in production is sleeping
module.exports = {
  name: "guildMemberRemove",
  execute(member) {
    // test server
    if (member.guild.id == "539794635283890186") {
      console.log(member.user.username + " quitte le serveur de test");

      // sus server
    } else if (member.guild.id == "772194344929067019") {
      client.channels.cache
        .get("772194344929067023")
        .send(
          `${member.user.username} has been ejected. It was an imposter.\n<:fine:785276116558151690> **CHEH** <:fine:785276116558151690>`
        );
      console.log(`member in SUS quit. name was : ${member.user.username}`);
    } else if (member.guild.id == "772194344929067019"){
      client.channels.cache
        .get("864251716207116320")
        .send(
          `${member.user.username} ne fait plus partie du Discord. Adieu.`
        );
      console.log(`member in OKLM quit. name was : ${member.user.username}`);
    }
  },
};
