const directory = document.querySelector('.directory');
const reader = document.querySelector('.reader');
let directoryItems = [];
let contentList = document.createElement('ul');

let titleList = [];

let readerTitle = document.createElement('h1');
let readerAuthor = document.createElement('h4');
let readerParagraphs = [];
let readerItems = [];


let selectedStory = 0;



stories = [
    {
        title: "Sample Story 1",
        author: "ChatGPT",
        paragraphs: ["The day started out normal enough. I woke up, brushed my teeth, and got ready for work. I work as a software engineer at Microsoft, and I love my job. I usually take the bus to the office, but today I decided to walk. It was a nice day, and I thought some fresh air would do me good.",
            "I was wrong.",
            "As I was walking, I noticed a strange noise coming from the sky. It sounded like a jet engine, but louder and more erratic. I looked up and saw a huge metal object flying towards me. It was shaped like a giant donut, with a hole in the middle. It had red and blue lights flashing on its surface, and it was spinning wildly.",
            "I panicked and ran for cover, but it was too late. The object crashed into the ground, creating a massive explosion. I was thrown back by the blast, and hit my head on a lamppost. Everything went black.",
            "When I woke up, I was in a hospital bed. A nurse was standing over me, checking my vitals. She smiled when she saw me open my eyes.",
            `"Hello, Mr. Smith," she said. "You're lucky to be alive. You were in a coma for two weeks."`,
            `"Two weeks?" I repeated, groggily. "What happened?"`,
            `She explained that the object that hit me was an alien spacecraft. It had been detected by NASA a few days before, but they had no idea what it was or where it came from. They tried to communicate with it, but got no response. They assumed it was hostile, and sent fighter jets to intercept it.`,
            `But they were too late. The spacecraft had entered the atmosphere and crashed into the city. It caused a lot of damage and casualties, but luckily, no one died.`,
            `Except for the aliens.`,
            `The nurse said that the authorities had recovered four bodies from the wreckage. They were humanoid, but with green skin, pointy ears, and antennae. They had no clothes or weapons, only some strange devices on their wrists.`,
            `"They were probably explorers," she said. "Maybe they came to study our planet."`,
            `"Or maybe they came to invade us," I said.`,
            `She shook her head. "No, I don't think so. They seemed peaceful. And besides, why would they crash their ship on purpose?"`,
            `"Maybe it was an accident," I said.`,
            `"Maybe," she said.`,
            `She told me that the government had taken the ship and the bodies to a secret facility for further analysis. They had also imposed a media blackout on the incident, to prevent panic and chaos.`,
            `"They don't want people to know about this," she said.`,
            `"Then how do you know?" I asked.`,
            `She leaned closer to me and whispered in my ear.`,
            `"Because I'm one of them."`,
            `She smiled and revealed her pointy ears and antennae.`,
            `I screamed.`
        ]
    },
    {
        title: "Sample Story 2",
        author: "ChatGPT",
        paragraphs: [`I was bored at home, so I decided to play a game on my computer. I opened the Epic Games Launcher and browsed through the available games. I saw one that caught my eye: **The Last of Us Part II**. It was a post-apocalyptic survival horror game, and it looked amazing. I clicked on it and downloaded it.`,
            `The game started with a cinematic intro, showing the main characters, Ellie and Joel, living in a community of survivors in Wyoming. They had escaped from a deadly fungal infection that turned people into zombies, called the Infected. They had also faced many dangers from other human factions, such as the Fireflies, a rebel group that wanted to use Ellie's immunity to the infection to create a cure.`,
            `The intro was interrupted by a pop-up window. It said:`,
            `**Welcome to The Last of Us Part II!**`,
            `**This game is an immersive and realistic experience that adapts to your choices and actions.**`,
            `**The game will use your webcam and microphone to capture your facial expressions and voice, and use them to create your own character in the game.**`,
            `**The game will also access your personal data, such as your name, age, location, contacts, social media accounts, browsing history, and more, to customize the game world and the story according to your preferences and personality.**`,
            `**The game will also monitor your heart rate, blood pressure, brain activity, and other biometric data, to adjust the game difficulty and intensity based on your emotional state and physical condition.**`,
            `**The game will also connect you with other players around the world who are playing the game at the same time as you, and allow you to interact with them in real time.**`,
            `**The game will also record your gameplay and upload it to the cloud, where it will be analyzed by our advanced artificial intelligence system, to improve the game quality and performance.**`,
            `**By clicking OK, you agree to all of the above terms and conditions.**`,
            `**Are you ready to play The Last of Us Part II?**`,
            `I was stunned by the pop-up window. It sounded too good to be true. How could a game do all of that? Was it safe? Was it legal? Was it ethical?`,
            `I hesitated for a moment, but then I thought: what the hell, it's just a game.`,
            `I clicked OK.`
        ]
    }
];

stories.forEach((story) => {
    titleList.push(story.title);    
});

for (i = 0; i < titleList.length; i++) {
    directoryItems.push(document.createElement('a'));
    directoryItems[i].classList.add('directory-title');
    directoryItems[i].href = '#';
    contentList.appendChild(directoryItems[i]);
    directoryItems[i].textContent = titleList[i];
}

directory.appendChild(contentList);

directoryItems.forEach((title) => {
    title.addEventListener('click', () => selectStory(title));
})


function selectStory(title) {
    selectedStory = directoryItems.indexOf(title);
    console.log(selectedStory);
    displayStory();
}

function displayStory() {
    readerParagraphs.forEach((paragraph) => {
        reader.removeChild(paragraph);
    })
    readerParagraphs = [];
    readerTitle.textContent = stories[selectedStory].title;
    reader.appendChild(readerTitle);
    for (i = 0; i < stories[selectedStory].paragraphs.length; i++) {
        readerParagraphs.push(document.createElement('p'));
        readerParagraphs[i].textContent = stories[selectedStory].paragraphs[i];
        reader.appendChild(readerParagraphs[i]);
    }    
    // reader.appendChild(readerParagraphs);
    
    readerAuthor.textContent = stories[selectedStory].author;
    reader.appendChild(readerAuthor);
}

displayStory();