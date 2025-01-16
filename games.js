const games = [
  {
    title: "Minecraft",
    category: "Survival",
    image: "images/oyunlar/minecraft.jpg",
    videoUrl: "https://www.youtube.com/embed/MmB9b5njVbA",
    description: "Minecraft, yaratıcı bir sandbox oyunudur.",
    releaseDate: "18 Kasım 2011",
    developer: "Mojang Studios",
    platform: "PC, PlayStation, Xbox, Nintendo Switch, Mobil",
    buyLink: "https://www.minecraft.net/"
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    category: "Aksiyon, Macera",
    image: "images/oyunlar/zelda.jpg",
    videoUrl: "https://www.youtube.com/embed/zw47_q9wbBE",
    description: "Açık dünya keşfi ve bulmacalarla dolu bir macera.",
    releaseDate: "3 Mart 2017",
    developer: "Nintendo",
    platform: "Nintendo Switch, Wii U",
    buyLink: "https://www.zelda.com/breath-of-the-wild/"
  },
  {
    title: "Dark Souls",
    category: "RPG, Aksiyon",
    image: "images/oyunlar/darksouls.jpg",
    videoUrl: "https://www.youtube.com/embed/4m1g1g1g1g1g",
    description: "Zorlu dövüş mekanikleri ve derin hikaye ile tanınan bir RPG.",
    releaseDate: "22 Eylül 2011",
    developer: "FromSoftware",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.bandainamcoent.com/games/dark-souls"
  },
  {
    title: "Half-Life 2",
    category: "FPS, Aksiyon",
    image: "images/oyunlar/halflife2.jpg",
    videoUrl: "https://www.youtube.com/embed/8Z1g1g1g1g1g",
    description: "Gordon Freeman'ın hikayesini devam ettiren ikonik bir FPS.",
    releaseDate: "16 Kasım 2004",
    developer: "Valve",
    platform: "PC, Xbox, PlayStation",
    buyLink: "https://www.half-life.com/"
  },
  {
    title: "The Witcher 3: Wild Hunt",
    category: "RPG, Aksiyon",
    image: "images/oyunlar/witcher3.jpg",
    videoUrl: "https://www.youtube.com/embed/ehjJ614QfeM",
    description: "Geralt of Rivia'nın destansı hikayesi.",
    releaseDate: "19 Mayıs 2015",
    developer: "CD Projekt Red",
    platform: "PC, PlayStation, Xbox, Nintendo Switch",
    buyLink: "https://www.gog.com/"
  },
  {
    title: "Grand Theft Auto V",
    category: "Aksiyon, Macera",
    image: "images/oyunlar/gta.jpg",
    videoUrl: "https://www.youtube.com/embed/QkkoHAzjnUs",
    description: "Bu oyun açık dünya aksiyon macera türünde bir oyundur.",
    releaseDate: "17 Eylül 2013",
    developer: "Rockstar North",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://store.rockstargames.com/"
  },
  {
    title: "Halo: Combat Evolved",
    category: "FPS, Aksiyon",
    image: "images/oyunlar/halo.jpg",
    videoUrl: "https://www.youtube.com/embed/0g1g1g1g1g1g",
    description: "Halo evreninin başlangıcını anlatan ikonik bir FPS.",
    releaseDate: "15 Kasım 2001",
    developer: "Bungie",
    platform: "Xbox, PC",
    buyLink: "https://www.halowaypoint.com/"
  },
  {
    title: "Portal 2",
    category: "Bulmaca, Aksiyon",
    image: "images/oyunlar/portal2.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Zihin bükücü bulmacalarla dolu bir macera.",
    releaseDate: "18 Nisan 2011",
    developer: "Valve",
    platform : "PC, PlayStation, Xbox",
    buyLink: "https://www.thinkwithportals.com/"
  },
  {
    title: "BioShock",
    category: "FPS, Aksiyon, RPG",
    image: "images/oyunlar/bioshock.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Sosyal ve politik temalarla dolu bir FPS deneyimi.",
    releaseDate: "21 Ağustos 2007",
    developer: "Irrational Games",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.bioshock.com/"
  },
  {
    title: "Bloodborne",
    category: "RPG, Aksiyon",
    image: "images/oyunlar/bloodborne.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Karanlık bir dünyada geçen zorlu bir RPG.",
    releaseDate: "24 Mart 2015",
    developer: "FromSoftware",
    platform: "PlayStation",
    buyLink: "https://www.playstation.com/en-us/games/bloodborne/"
  },
  {
    title: "The Elder Scrolls V: Skyrim",
    category: "RPG, Aksiyon",
    image: "images/oyunlar/skyrim.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Açık dünya RPG deneyimi ile efsanevi bir macera.",
    releaseDate: "11 Kasım 2011",
    developer: "Bethesda Game Studios",
    platform: "PC, PlayStation, Xbox, Nintendo Switch",
    buyLink: "https://elderscrolls.bethesda.net/en/skyrim"
  },
  {
    title: "Metal Gear Solid V: The Phantom Pain",
    category: "Aksiyon, Stealth",
    image: "images/oyunlar/mgs5.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Açık dünya stealth oyunu ile derin bir hikaye.",
    releaseDate: "1 Eylül 2015",
    developer: "Kojima Productions",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.konami.com/games/mgs5/"
  },
  {
    title: "Super Mario Odyssey",
    category: "Platform, Macera",
    image: "images/oyunlar/mario_odyssey.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Mario'nun yeni macerası, keşif ve bulmacalarla dolu.",
    releaseDate: "27 Ekim 2017",
    developer: "Nintendo",
    platform: "Nintendo Switch",
    buyLink: "https://www.nintendo.com/games/detail/super-mario-odyssey-switch/"
  },
  {
    title: "Resident Evil 4",
    category: "Aksiyon, Korku",
    image: "images/oyunlar/resident_evil_4.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Korku ve aksiyon dolu bir hayatta kalma oyunu.",
    releaseDate: "11 Ocak 2005",
    developer: "Capcom",
    platform: "PC, PlayStation, Xbox, Nintendo Switch",
    buyLink: "https://www.residentevil.com/re4/"
  },
  {
    title: "Uncharted 2: Among Thieves",
    category: "Aksiyon, Macera",
    image: "images/oyunlar/uncharted2.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Nathan Drake'in heyecan dolu maceras ası.",
    releaseDate: "13 Ekim 2009",
    developer: "Naughty Dog",
    platform: "PlayStation 3",
    buyLink: "https://www.playstation.com/en-us/games/uncharted-2-among-thieves/"
  },
  {
    title: "The Sims",
    category: "Simülasyon",
    image: "images/oyunlar/thesims.jpg",
    videoUrl: "https://www.youtube.com/embed/GJENRAB4ykA",
    description: "Hayat simülasyonu oyunu, kendi karakterlerinizi yaratın ve yönetin.",
    releaseDate: "4 Şubat 2000",
    developer: "Maxis",
    platform: "PC, Mac, Konsol",
    buyLink: "https://www.ea.com/games/the-sims"
  },
  {
    title: "Red Dead Redemption 2",
    category: "Aksiyon, Macera",
    image: "images/oyunlar/rdr2.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Vahşi Batı'da geçen epik bir hikaye.",
    releaseDate: "26 Ekim 2018",
    developer: "Rockstar Games",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.rockstargames.com/reddeadredemption2/"
  },
  {
    title: "Grand Theft Auto IV",
    category: "Aksiyon, Macera",
    image: "images/oyunlar/gta4.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Liberty City'de geçen bir suç hikayesi.",
    releaseDate: "29 Nisan 2008",
    developer: "Rockstar North",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.rockstargames.com/games/V/"
  },
  {
    title: "Fortnite",
    category: "Battle Royale, Aksiyon",
    image: "images/oyunlar/fortnite.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Battle Royale türünde popüler bir çok oyunculu oyun.",
    releaseDate: "25 Temmuz 2017",
    developer: "Epic Games",
    platform: "PC, PlayStation, Xbox, Nintendo Switch, Mobil",
    buyLink: "https://www.epicgames.com/fortnite/"
  },
  {
    title: "Mass Effect 2",
    category: "RPG, Aksiyon",
    image: "images/oyunlar/masseffect2.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Uzayda geçen epik bir RPG deneyimi.",
    releaseDate: "26 Ocak 2010",
    developer: "BioWare",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.ea.com/games/mass-effect/mass-effect-2"
  },
  {
    title: "Mario Kart 8",
    category: "Yarış, Aksiyon",
    image: "images/oyunlar/mariokart8.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Mario evreninde geçen eğlenceli bir yarış oyunu.",
    releaseDate: "30 Mayıs 2014",
    developer: "Nintendo",
    platform: "Nintendo Switch, Wii U",
    buyLink: "https://www.nintendo.com/games/detail/mario-kart-8-deluxe-switch/"
  },
  {
    title: "The Legend of Zelda: Majora’s Mask",
    category: "Aksiyon, Macera",
    image: "images/oyunlar/majorasmask.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Zelda serisinin karanlık bir hikayesi.",
    releaseDate: "27 Nisan 2000",
    developer: "Nintendo",
    platform: "Nintendo 64, Nintendo 3DS",
    buyLink: "https://www.zelda.com/majoras-mask/"
  },
  {
    title: "The Last of Us",
    category: "Aksiyon, Macera",
    image: "images/oyunlar/thelastofus.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Kıyamet sonrası bir dünyada hayatta kalma mücadelesi.",
    releaseDate: "14 Haziran 2013",
    developer: "Naughty Dog",
    platform: "PlayStation, PC",
    buyLink: "https://www.thelastofus.playstation.com/"
  },
  {
    title: "League of Legends",
    category: "RPG",
    image: "images/oyunlar/lol.jpg",
    videoUrl: "https://www.youtube.com/embed/32bqVu8e64k",
    description: "League of Legends, oyuncuların stratejik takım savaşlarında şampiyonlarını seçerek rakip üssünü yok etmeye çalıştığı, dünyanın en popüler oyunlarından biridir.",
    releaseDate: "27 Ekim 2009",
    developer: "Riot Games",
    platform: "PC, macOS",
    buyLink: "https://www.leagueoflegends.com"
  },
  {
    title: "Left 4 Dead",
    category: "FPS, Aksiyon",
    image: "images/oyunlar/left4dead.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Zombi kıyameti sırasında hayatta kalma mücadelesi.",
    releaseDate: "17 Kasım 2008",
    developer: "Valve",
    platform: "PC, Xbox 360",
    buyLink: "https://www.l4d.com/"
  },
  {
    title: "Guitar Hero",
    category: "Müzik, Aksiyon",
    image: "images/oyunlar/guitarhero.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Müzik ritmine göre tuşlara basarak şarkı çalma oyunu.",
    releaseDate: "6 Kasım 2005",
    developer: "Harmonix",
    platform: "PlayStation, Xbox, Wii",
    buyLink: "https://www.guitarhero.com/"
  },
  {
    title: "Wii Sports",
    category: "Spor, Simülasyon",
    image: "images/oyunlar/wiisports.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Wii konsolu için spor oyunları koleksiyonu.",
    releaseDate: "19 Kasım 2006",
    developer: "Nintendo",
    platform: "Wii",
    buyLink: "https://www.nintendo.com/games/detail/wii-sports-wii/"
  },
  {
    title: "Deus Ex",
    category: "RPG, Aksiyon",
    image: "images/oyunlar/deusex.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Gelecekte geçen bir RPG ve aksiyon oyunu.",
    releaseDate: "22 Haziran 2000",
    developer: "Ion Storm",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.deusex.com/"
  },
  {
    title: "Shadow of the Colossus",
    category: "Aksiyon, Macera",
    image: "images/oyunlar/shadowofthecolossus.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Devasa yaratıkları yenerek kaybolmuş bir aşkı geri kazanma hikayesi.",
    releaseDate: "18 Ekim 2005",
    developer: "Team Ico",
    platform: "PlayStation 2, PlayStation 3, PlayStation 4",
    buyLink: "https://www.playstation.com/en-us/games/shadow-of-the-colossus/"
  },
  {
    title: "God of War",
    category: "Aksiyon, Macera",
    image: "images/oyunlar/godofwar.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Yunan mitolojisinde geçen bir intikam hikayesi.",
    releaseDate: "20 Nisan 2018",
    developer: "Santa Monica Studio",
    platform: "PlayStation 4",
    buyLink: "https://www.playstation.com/en -us/games/god-of-war/"
  },
  {
    title: "Call of Duty 4: Modern Warfare",
    category: "FPS, Aksiyon",
    image: "images/oyunlar/cod4.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Modern savaş temalı ikonik bir FPS oyunu.",
    releaseDate: "5 Kasım 2007",
    developer: "Infinity Ward",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.callofduty.com/call-of-duty-4"
  },
  {
    title: "Battlefield 1942",
    category: "FPS, Aksiyon",
    image: "images/oyunlar/battlefield1942.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "İkinci Dünya Savaşı'nda geçen çok oyunculu bir FPS.",
    releaseDate: "10 Eylül 2002",
    developer: "DICE",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.ea.com/games/battlefield/battlefield-1942"
  },
  {
    title: "Batman: Arkham Asylum",
    category: "Aksiyon, Macera",
    image: "images/oyunlar/batmanarkham.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Batman'in düşmanlarıyla yüzleştiği bir macera.",
    releaseDate: "25 Ağustos 2009",
    developer: "Rocksteady Studios",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.batmanarkham.com/"
  },
  {
    title: "Assassin’s Creed 2",
    category: "Aksiyon, Macera",
    image: "images/oyunlar/assassinscreed2.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Rönesans İtalya'sında geçen bir suikastçi hikayesi.",
    releaseDate: "17 Kasım 2009",
    developer: "Ubisoft",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.ubisoft.com/en-us/game/assassins-creed/assassins-creed-2"
  },
  {
    title: "Silent Hill 2",
    category: "Korku, Aksiyon",
    image: "images/oyunlar/silenthill2.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Psikolojik korku unsurlarıyla dolu bir deneyim.",
    releaseDate: "24 Eylül 2001",
    developer: "Konami",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.konami.com/games/silenthill/"
  },
  {
    title: "Tony Hawk’s Pro Skater 2",
    category: "Spor, Aksiyon",
    image: "images/oyunlar/tonyhawk.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g 1g1g1g1g1g",
    description: "Kaykay becerilerinizi geliştirebileceğiniz bir spor oyunu.",
    releaseDate: "20 Eylül 2000",
    developer: "Neversoft",
    platform: "PC, PlayStation, Xbox, Nintendo 64",
    buyLink: "https://www.tonyhawkgames.com/"
  },
  {
    title: "Gears of War 2",
    category: "Aksiyon, FPS",
    image: "images/oyunlar/gears2.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Küresel bir savaşta hayatta kalma mücadelesi.",
    releaseDate: "7 Kasım 2008",
    developer: "Epic Games",
    platform: "Xbox 360, PC",
    buyLink: "https://www.gearsofwar.com/"
  },
  {
    title: "Overwatch",
    category: "FPS, Aksiyon",
    image: "images/oyunlar/overwatch.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Takım tabanlı çok oyunculu bir FPS oyunu.",
    releaseDate: "24 Mayıs 2016",
    developer: "Blizzard Entertainment",
    platform: "PC, PlayStation, Xbox, Nintendo Switch",
    buyLink: "https://playoverwatch.com/"
  },
  {
    title: "Burnout 3: Takedown",
    category: "Yarış, Aksiyon",
    image: "images/oyunlar/burnout3.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Yarış ve çarpışma dolu bir yarış oyunu.",
    releaseDate: "8 Eylül 2004",
    developer: "Criterion Games",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.ea.com/games/burnout/burnout-3-takedown"
  },
  {
    title: "Rocket League",
    category: "Spor, Aksiyon",
    image: "images/oyunlar/rocketleague.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Futbol ve araçların birleştiği eğlenceli bir spor oyunu.",
    releaseDate: "7 Temmuz 2015",
    developer: "Psyonix",
    platform: "PC, PlayStation, Xbox, Nintendo Switch",
    buyLink: "https://www.rocketleague.com/"
  },
  {
    title: "Forza Horizon",
    category: "Yarış, Aksiyon",
    image: "images/oyunlar/forzahorizon.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Açık dünya yarış deneyimi sunan bir oyun.",
    releaseDate: "23 Ekim 2012",
    developer: "Playground Games",
    platform: "Xbox, PC",
    buyLink: "https://www.forzamotorsport.net/"
  },
  {
    title: "Papers, Please",
    category: "Simülasyon, Bulmaca, Eğlence",
    image: "images/oyunlar/papersplease.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Sınır kontrol memuru olarak etik kararlar vermeniz gereken bir oyun.",
    releaseDate: "8 Ağustos 2013",
    developer: "Lucas Pope",
    platform: "PC, PlayStation, iOS",
    buyLink: "http://papersplea.se/"
  },
  {
    title: "Limbo",
    category: "Platform, Bulmaca",
    image: "images/oyunlar/limbo.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Karanlık bir dünyada kaybolmuş bir çocuğun hikayesi.",
    releaseDate: "21 Temmuz 2010",
    developer: "Playdead",
    platform: "PC, PlayStation, Xbox, Nintendo Switch",
    buyLink: "https://playdead.com/games/limbo/"
  },
  {
    title: "Dead Space",
    category: "Korku, Aksiyon",
    image: "images/oyunlar/deadspace.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Uzayda geçen korku dolu bir hayatta kalma oyunu.",
    releaseDate: "14 Ekim 2008",
    developer: "EA Redwood Shores",
    platform: "PC, PlayStation, Xbox",
    buyLink: "https://www.ea.com/games/dead-space/dead-space"
  },
  {
    title: "Katamari Damacy",
    category: "Bulmaca, Aksiyon",
    image: "images/oyunlar/katamari.jpg",
    videoUrl: "https://www.youtube.com/embed/8g1g1g1g1g1g",
    description: "Eşyaları toplayarak büyüyen bir topu kontrol ettiğiniz eğlenceli bir oyun.",
    releaseDate: "22 Şubat 2004",
    developer: "Namco",
    platform: "PlayStation, Xbox, Nintendo Switch",
    buyLink: "https://www.bandainamcoent.com/games/katamari-damacy"
  }
];

function displayGames(filteredGames) {
  const gameGrid = document.getElementById("gameGrid");
  gameGrid.innerHTML = "";
  filteredGames.forEach(game => {
    const gameCard = document.createElement("div");
    gameCard.className = "game-card";
    gameCard.onclick = () => openModal(game);

    gameCard.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <p>${game.title}</p>
    `;
    gameGrid.appendChild(gameCard);
  });
}

function filterGames(category) {
  if (category === "Hepsi") {
    displayGames(games);
  } else {
    const filteredGames = games.filter(game => game.category.includes(category));
    displayGames(filteredGames);
  }
}

function openModal(game) {
  document.getElementById("modalTitle").textContent = game.title;
  document.getElementById("modalVideo").src = game.videoUrl;
  document.getElementById("modalDescription").textContent = game.description;

  const modalDetails = `
    <table>
      <tr><td>Çıkış Tarihi:</td><td>${game.releaseDate}</td></tr>
      <tr><td>Geliştirici:</td><td>${game.developer}</td></tr>
      <tr><td>Platform:</td><td>${game.platform}</td></tr>
    </table>
  `;
  document.getElementById("modalDescription").insertAdjacentHTML("beforeend", modalDetails);

  document.getElementById("buyLink").href = game.buyLink;
  document.getElementById("gameModal").style.display = "flex";

  document.body.classList.add("no-scroll");
}

function closeModal() {
  document.getElementById("modalVideo").src = "";
  document.getElementById("gameModal").style.display = "none";

  document.body.classList.remove("no-scroll");
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  displayGames(games);
});
