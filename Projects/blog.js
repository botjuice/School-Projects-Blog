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
        title: "Girl in the park",
        author: "- Yoosuf Hannan",
        paragraphs: ["In a park. I see a girl, not yet four years old, crawling with determination on the grass towards a swing, when she reaches it she sits down on it. Then she stretches her arms out and starts to cry. A young woman hurriedly rushes over to her and comforts her with a warming hug, then she pushes the swing back and forth. It was the girls' mother. Not far from the four-year-old and her mother, three young siblings are running. The youngest of them, a boy, falls, and his two sisters abruptly stop and take care of his grazed knee. I look down to my right, where the grass, in my eyes, seems infinitely longer than it should be. The grass near me should be bent low by a person sitting on it, a person from my family. But I have no relatives; I have no one to care for me."]
    },
    {
        title: "First and Last Time Nearly Swearing",
        author: " - Yoosuf Hannan",
        paragraphs: [`Fuu-lippin' hell" said Kiranam quite nervously now. His dad was right next to him, and the only place on this earth that he was not allowed to swear was in front of him. Kiranams bike had a puncture and together with his dad they were dragging it home, and  were just one more corner away from reaching.`,
        `They were in a rural area, out in the country. The clouds above them were not light grey, they were not dark grey, they were black as black can be. Just layers and layers of clouds piled up ontop of each other forming the most thick and black clouds he had ever seen. It was not about to rain, it was not about to pour, it was about to storm. There were turbo speed winds blowing right against them, the back of his shirt was blowing so far backwards that it almost felt like he was wearing a cape instead. The trees around them were straining at the weirdest angles, looking like they were going to snap at any given moment. To walk forward he needed to do the equivalent of running, and to stand still he needed to do the equivalent of walking forward. If he actually stood still he would get sent flying backwards. To make matters worse, they were on a sidewalk going up a very steep hill. But, home was only one more corner away!`,
        `Kiranam looked over his bike to his dad that was grasping the handlebar on the other side, wondering if he'd heard him nearly swear over the howling winds. His dad was a fairly old man, he had a very long white beard (that was currently being voilently blown back into his neck) and he was also very hard of hearing. Which due to some faulty logic, he compensated for by speaking ferociously loud. It look liked his mouth was moving, almost as though he was speaking - in fact, no, he was more than just speaking, he was shouting! (so that's extra ferociously loud) and Kiranam still could not hear him at all over the loud winds. He saw his dad shout even more aggressively, which he could only guess was an attempt to be even louder, then his dad turned to him and looked at him dead on, his eyes widening - very very wide, and he seemed to shout so loud that you could see his neck veins popping.`,
        `His dad reached out to him, grabbing his arm, and he just felt the beggining of a violent tug before he got blasted away by a rogue out of control motorbike shooting round the corner and down the hill with the rider missing. The crash sent Kiranam flying up into the air,  and the powerful winds did the honours of blasting him backwards down the steep hill, he bounced and crashed along the cement walkway and the tarmac road picking up speed, momentum, and height with each one. Those watching could probably hear the crunching of bones, and see the ripping of his clothes. Till finally he had one last crash into a short stone wall blowing a human sized hole straight through it, and his body came to rest laying amongst the pile of scattered bricks. The last words he ever uttered was "Fuu-lippin' hell".`
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