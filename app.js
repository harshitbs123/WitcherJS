let btnup = document.querySelector(".up");
let btndown = document.querySelector(".down");

let imgslider = document.querySelector(".imagesss");

let position = 0;
const maxPosition = 3000;

btndown.addEventListener("click", nextSlide);

btnup.addEventListener("click", prevSlide);

function nextSlide() {
  if (position < 3000) {
    position += 500;
  } else {
    position = 0;
  }

  imgslider.style.transform = `translateY(-${position}px)`;
}
function prevSlide() {
  if (position > 0) {
    position -= 500;
  } else {
    position = 3000;
  }
  imgslider.style.transform = `translateY(-${position}px)`;
}

let autoSlide;

function auto() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 2000);
}

auto();

btnup.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

btnup.addEventListener("mouseleave", () => {
  auto();
});
btndown.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

btndown.addEventListener("mouseleave", () => {
  auto();
});

//darkmode

let sliderscreen = document.querySelector(".sliderscreen");
let darkbtn = document.querySelector(".darkbtn");

function dark() {
  sliderscreen.classList.toggle("bg-zinc-800");
  sliderscreen.classList.toggle("bg-zinc-200");
  sliderscreen.classList.toggle("text-white");
  sliderscreen.classList.toggle("text-black");
}

darkbtn.addEventListener("click", dark);

//map

let box = document.querySelector(".box");
let place = document.querySelector("#locationName");
let desc = document.querySelector("#locationDesc");
let story = document.querySelector("#locationStory");
let mapImg = document.querySelector("#locationImg");
let velen = document.querySelector(".velen");
let novigrad = document.querySelector(".novigrad");
let skellige = document.querySelector(".skellige");
let whiteorchard = document.querySelector(".whiteorchard");
let royal = document.querySelector(".royal");
let toussaint = document.querySelector(".toussaint");

velen.addEventListener("mouseenter", () => {
  box.style.left = "24%";
  box.style.top = "14%";
  box.classList.remove("w-[50vh]");
  box.classList.add("w-[50vh]");
  mapImg.src = "assets/velen.png";
  place.innerText = "VELEN - NO MAN'S LAND";
  story.innerText =
    "The story surrounding Velen begins when Geralt arrives there in search of Ciri. His investigation leads him to the Bloody Baron, a local warlord who may possess information about her whereabouts. What starts as a simple search soon unfolds into a deeply personal and emotional tale involving the Baron's missing family, the mysterious Crones of Crookback Bog, and the dark magic that haunts the region. Through difficult choices and morally complex situations, Geralt uncovers the truth about Ciri's journey through Velen while becoming involved in one of the most acclaimed storylines in the entire game.";
  desc.innerText =
    "Velen, often called No Man's Land, is a vast and war-ravaged region in The Witcher 3: Wild Hunt. Once a peaceful countryside, it has been devastated by the ongoing war, leaving behind burned villages, abandoned farms, muddy roads, and dangerous swamps. The land is filled with refugees, bandits, and monsters that prey on the weak, creating a bleak atmosphere that reflects the suffering of its people. Despite its harsh appearance, Velen is rich in history, hidden secrets, and some of the most memorable locations in the game.";
});
novigrad.addEventListener("mouseenter", () => {
  box.style.left = "24%";
  box.style.top = "3%";
  box.classList.remove("w-[50vh]");
  box.classList.add("w-[50vh]");
  mapImg.src = "assets/novigrad.png";
  place.innerText = "NOVIGRAD";
  story.innerText =
    "The story surrounding Novigrad begins when Geralt follows Ciri's trail into the largest city in the Northern Kingdoms. His search reunites him with old friends such as Triss Merigold, Dandelion, and Zoltan, while exposing him to the city's dangerous underworld and political intrigue. As Geralt investigates Ciri's movements, he becomes entangled in conflicts involving criminal gangs, witch hunters, and powerful secret organizations. Through a series of complex alliances and risky decisions, he uncovers crucial clues about Ciri's journey while helping shape the fate of some of the city's most influential figures.";
  desc.innerText =
    "Novigrad is the largest and most prosperous city in The Witcher 3: Wild Hunt, standing as a beacon of wealth, trade, and culture amid a world torn apart by war. Its bustling streets are crowded with merchants, sailors, nobles, beggars, and criminals, creating a vibrant atmosphere unlike anywhere else in the Northern Kingdoms. Beneath its grand architecture and thriving marketplaces lies a city plagued by corruption, religious persecution, and dangerous power struggles. Despite its apparent prosperity, Novigrad is filled with secrets, hidden factions, and some of the most captivating stories and characters in the game.";
});
skellige.addEventListener("mouseenter", () => {
  box.style.left = "9.5%";
  box.style.top = "26%";
  box.classList.remove("w-[50vh]");
  box.classList.add("w-[50vh]");
  mapImg.src = "assets/skellige.png";
  place.innerText = "THE SKELLIGE ISLES";
  story.innerText =
    "The story surrounding Skellige begins when Geralt sails to the remote islands in pursuit of new leads about Ciri's whereabouts. There, he discovers that Ciri's arrival left a lasting impact on the local clans and royal families. As he retraces her steps, Geralt becomes involved in a fierce struggle for the Skellige throne following the death of the king. Between ancient legends, clan rivalries, and dangerous expeditions across the islands, he gradually uncovers the truth about Ciri's time in Skellige while influencing the future leadership of the archipelago";
  desc.innerText =
    "Skellige is a rugged archipelago of windswept islands in The Witcher 3: Wild Hunt, renowned for its fierce warriors, ancient traditions, and breathtaking natural beauty. Towering mountains, rocky coastlines, and stormy seas define the landscape, creating an environment as harsh as it is magnificent. The islands are home to proud clans whose lives revolve around honor, seafaring, and battle, preserving customs that have endured for generations. Despite its untamed appearance, Skellige is rich in history, mythology, and some of the most memorable adventures found throughout the game.";
});
whiteorchard.addEventListener("mouseenter", () => {
  box.style.left = "68%";
  box.style.top = "10%";
  box.classList.remove("w-[50vh]");
  box.classList.add("w-[50vh]");
  place.innerText = "WHITE ORCHARD";
  mapImg.src = "assets/white.png";
  story.innerText =
    "The story surrounding White Orchard begins as Geralt and Yennefer search for information about Ciri after years of separation. While gathering leads, Geralt takes on contracts that introduce him to the struggles faced by ordinary people living in a land scarred by war. His investigation eventually brings him face to face with the Griffin terrorizing the region, a hunt that serves as the first major challenge of his journey. Though brief compared to other regions, White Orchard establishes the themes of choice, consequence, and humanity that define the rest of the adventure.";
  desc.innerText =
    "White Orchard is a quiet rural region in The Witcher 3: Wild Hunt that serves as Geralt's first destination at the beginning of his journey. Rolling fields, small villages, and peaceful farmland give the area a welcoming appearance, yet signs of war and hardship can still be found beneath the surface. The region introduces players to the everyday lives of ordinary people struggling to survive in a changing world. Despite its modest size, White Orchard is filled with hidden stories, local legends, and valuable lessons that set the tone for the adventures ahead.";
});
royal.addEventListener("mouseenter", () => {
  box.style.left = "31.5%";
  box.style.top = "30%";
  box.classList.remove("w-[50vh]");
  box.classList.add("w-[50vh]");
  place.innerText = "ROYAL PALACE IN VIZIMA";
  mapImg.src = "assets/vizima.png";
  story.innerText =
    "The story surrounding Vizima begins when Geralt is summoned by Emperor Emhyr var Emreis after finally locating Yennefer. Within the occupied capital of Temeria, the Emperor reveals that Ciri has returned and tasks Geralt with finding her before the forces of the Wild Hunt can reach her. This meeting sets the entire main quest into motion, providing Geralt with his first substantial leads regarding Ciri's recent movements. Although much of the action takes place elsewhere, Vizima serves as the political heart of the story where alliances are formed and the stakes of Geralt's mission become clear.";
  desc.innerText =
    "Vizima is the historic capital of Temeria in The Witcher 3: Wild Hunt, standing as a symbol of a kingdom that has suffered greatly from war and political upheaval. Once a thriving royal city, it now exists under Nilfgaardian occupation, with its grand halls and fortified walls serving new rulers. The city's elegant architecture and royal heritage contrast sharply with the uncertainty surrounding its future. Despite its limited explorable area in the game, Vizima remains an important political center where major decisions are made and crucial alliances are forged.";
});
toussaint.addEventListener("mouseenter", () => {
  box.style.left = "72%";
  box.style.top = "14%";
  box.classList.remove("w-[50vh]");
  box.classList.add("w-[50vh]");
  place.innerText = "THE DUCHY OF TOUSSAINT";
  mapImg.src = "assets/toussaint.png";
  story.innerText =
    "The story surrounding Toussaint begins when Geralt accepts a contract from Anna Henrietta, the Duchess of Toussaint, to investigate a series of brutal murders threatening the peaceful duchy. His search leads him to Dettlaff van der Eretein, a powerful higher vampire believed to be responsible for the killings, while the enigmatic elder vampire Regis aids Geralt throughout the investigation. As the mystery deepens, Geralt discovers that the events are closely tied to Syanna, Anna Henrietta's estranged sister, whose tragic past and desire for revenge have set the entire conflict in motion. Through difficult choices and emotional revelations involving Dettlaff, Syanna, Anna Henrietta, and Regis, Geralt becomes entangled in a tale of loyalty, betrayal, forgiveness, and redemption that ultimately determines the fate of Toussaint itself.";
  desc.innerText =
    "Toussaint is a vibrant and picturesque duchy introduced in the Blood and Wine expansion of The Witcher 3: Wild Hunt, celebrated for its beauty, prosperity, and romantic ideals. Sunlit vineyards, colorful towns, and magnificent castles create an atmosphere that feels vastly different from the war-torn regions of the Northern Kingdoms. Beneath its cheerful appearance, however, lies a realm filled with intrigue, hidden dangers, and ancient mysteries waiting to be uncovered. Despite its fairy-tale charm, Toussaint offers some of the richest storytelling, unforgettable characters, and most visually stunning locations in the entire game.";
});
function resetBox() {
  box.style.left = "15%";
  box.style.top = "13%";
  box.classList.remove("w-[50vh]");
  box.classList.add("w-[35vh]");

  mapImg.src = "assets/map.JPG";
  place.innerText = "The Continent";
  desc.innerText = "";
  story.innerText = "";
}
velen.addEventListener("mouseleave", resetBox);
novigrad.addEventListener("mouseleave", resetBox);
skellige.addEventListener("mouseleave", resetBox);
whiteorchard.addEventListener("mouseleave", resetBox);
royal.addEventListener("mouseleave", resetBox);
toussaint.addEventListener("mouseleave", resetBox);
