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
        title: "Title 1",
        author: "- Umo",
        paragraphs: ["Do you love books?", "Do you want to share your thoughts and opinions with other readers?", "If yes, then you should start a book blog. A book blog is a website where you can post reviews, recommendations, and discussions about books. You can also join a community of book lovers and interact with them."],
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