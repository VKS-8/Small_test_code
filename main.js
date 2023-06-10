//remove this comment after publishing to github

//When this variable is removed, it should be easy to locate and remove all instances
// use console.log only for instances that need to stay in the code
let log = console.log  

// Need to add all elements dynamically so this will increment from no element to each added element correctly
let sectionIdNum = '1';
let articleIdNum = '1';
let divIdNum = '1';
let paragraphIdNum = '1'; 
// Set id name to 'element#'
let sectionId = `section${sectionIdNum}`;
let articleId = `article${articleIdNum}`;
let divId = `div${divIdNum}`;
let paragraphId = `paragraph${paragraphIdNum}`;

// Global variable that is reassigned from addElement() to be used by other functions
let newSectionTag = '';  
  log('newSectionTag ' + newSectionTag);
let newArticleTag = '';  
  log('newArticleTag ' + newArticleTag);
let newDivTag = '';  
  log('newDivTag ' + newDivTag);
let newParagraphTag = '';  
  log('newParagraphTag ' + newParagraphTag);

const mainContainer = document.querySelector('#main-container');
  log(mainContainer);
let appendSectionsHere = document.querySelector('#appendSectionsHere');
  log('appendSectionsHere' + appendSectionsHere);
let appendArticlesHere = document.querySelector('#appendArticlesHere');
  log('appendArticlesHere' + appendArticlesHere);
let appendDivsHere = document.querySelector('#appendDivsHere');
  log('appendDivsHere' + appendDivsHere);
let appendParagraphsHere = document.querySelector('#appendParagraphsHere');
  log('appendParagraphsHere' + appendParagraphsHere);


//these need to be modified to pull 
//the container to which each element is being added based on idNum; maybe getAttribute()
const sectionOne = document.querySelector('#section1'); 
  log('sectionOne ' + sectionOne);
const articleOne = document.querySelector('#section1'); 
  log('articleOne ' + articleOne);
const divOne = document.querySelector('#div1'); 
  log('divOne ' + divOne);
const paragraphOne = document.querySelector('#paragraph1'); 
  log('paragraphOne ' + paragraphOne);
  
// Reference to the buttons
  // Probably should create a conditional or switch statement
  // to choose the action to take based on the target clicked
  // instead of all of these individual button code blocks

// Log Id buttons
const buttonLogSectionIdNum = document.querySelector('#buttonLogSectionIdNum');
  log('Current sectionIdNum value: ' + buttonLogSectionIdNum);
const buttonLogArticleIdNum = document.querySelector('#buttonLogArticleIdNum');
  log('Current articleIdNum value: ' + buttonLogArticleIdNum);
const buttonLogDivIdNum = document.querySelector('#buttonLogDivIdNum');
  log('Current divIdNum value: ' + buttonLogDivIdNum);
const buttonLogParagraphIdNum = document.querySelector('#buttonLogParagraphIdNum');
  log('Current paragraphIdNum value: ' + buttonLogParagraphIdNum);

// Add element buttons
const buttonAddSection = document.querySelector('#buttonAddSection');
  log('Section add button ' + buttonAddSection);
  const buttonAddArticle = document.querySelector('#buttonAddArticle');
  log('Article add button ' + buttonAddArticle);
  const buttonAddDiv = document.querySelector('#buttonAddDiv');
  log('Div add button ' + buttonAddDiv);
  const buttonAddParagraph = document.querySelector('#buttonAddParagraph');
  log('Paragraph add button ' + buttonAddParagraph);

// Remove element buttons
  const buttonRemoveSection = document.querySelector('#buttonRemoveSection');
  log('Section remove button ' + buttonRemoveSection);
  const buttonRemoveArticle = document.querySelector('#buttonRemoveArticle');
  log('Article remove button ' + buttonRemoveArticle);
  const buttonRemoveDiv = document.querySelector('#buttonRemoveDiv');
  log('Div remove button ' + buttonRemoveDiv);
  const buttonRemoveParagraph = document.querySelector('#buttonRemoveParagraph');
  log('Paragraph remove button ' + buttonRemoveParagraph);


function main() {

  //SECTION
  // Logging the Id number is for testing purposes only and will be removed
  buttonLogSectionIdNum.addEventListener('click', ()=> {
    currentSectionIdNum();
      log(sectionId);
  });

  buttonAddSection.addEventListener('click', () => {
    addSection();
      log(appendSectionsHere);
      appendSectionsHere.append(newSectionTag);
  });

  buttonRemoveSection.addEventListener('click', () => {
    removeSection();
    log(appendSectionsHere);
    appendSectionsHere.remove(newSectionTag);
  });

  //ARTICLE
  // Logging the Id number is for testing purposes only and will be removed
  buttonLogArticleIdNum.addEventListener('click', ()=> {
    currentArticleIdNum();
      log(articleId);
  });

  buttonAddArticle.addEventListener('click', () => {
    addArticle();
      log(appendSectionsHere);
      appendSectionsHere.append(newArticleTag);
  });

  buttonRemoveArticle.addEventListener('click', () => {
    removeSection();
    log(appendArticlesHere);
    appendArticlesHere.remove(newArticleTag);
  });

  //DIV
  // Logging the Id number is for testing purposes only and will be removed
  buttonLogDivIdNum.addEventListener('click', ()=> {
    currentDivIdNum();
      log(divId);
  });

  buttonAddDiv.addEventListener('click', () => {
    addDiv();
      log(appendDivsHere);
      appendDivsHere.append(newDivTag);
  });

  buttonRemoveParagraph.addEventListener('click', () => {
    removeParagraph();
    log(appendParagraphsHere);
    appendParagraphssHere.remove(newParagraphTag);
  });

}
    
// Log current section idNum
function currentSectionIdNum() { //set this function up on each of the following elements
    logIdNum('section');  
  buttonLogSectionIdNum.removeEventListener('click', currentSectionIdNum);
  
  buttonLogSectionIdNum.addEventListener('click', currentSectionIdNum);
}

// Log current article idNum
function currentArticleIdNum() {
  logIdNum('article');  
buttonLogArticleIdNum.removeEventListener('click', currentArticleIdNum);

buttonLogArticleIdNum.addEventListener('click', currentArticleIdNum);
}

// Log current div idNum
function currentDivIdNum() {
  logIdNum('div');  
buttonLogDivIdNum.removeEventListener('click', currentDivIdNum);

buttonLogDivIdNum.addEventListener('click', currentDivIdNum);
}

// Log current paragraph idNum
function currentParagraphIdNum() {
  logIdNum('paragraph');  
buttonLogParagraphIdNum.removeEventListener('click', currentParagraphIdNum);

buttonLogParagraphIdNum.addEventListener('click', currentParagraphIdNum);
}

// Add section
function addSection() {
    
  newSectionTag = document.createElement('section');
  
  log('New section has been added ' + appendSectionsHere);
  incrementID('section');
  setClassAttribute('section');

  buttonAddSection.removeEventListener('click', addSection );
  
  buttonAddSection.addEventListener('click', addSection);
}

// Add article
function addArticle() {
    
  newArticleTag = document.createElement('article');
  
  log(`New article has been added has been added to ${sectionId}`);
  incrementID('article');
  setClassAttribute('article');

  buttonAddArticle.removeEventListener('click', addArticle );
  
  buttonAddArticle.addEventListener('click', addArticle);
}

// Add div
function addDiv() {
    
  newDivTag = document.createElement('div');
  
  log(`New div has been added has been added to ${divId}`);
  incrementID('div');
  setClassAttribute('div');

  buttonAddDiv.removeEventListener('click', addDiv );
  
  buttonAddDiv.addEventListener('click', addDiv);
}

// Add paragraph
function addParagraph() {
    
  newParagraphTag = document.createElement('paragraph');
  
  log(`New paragraph has been added has been added to ${paragraphId}`);
  incrementID('paragraph');
  setClassAttribute('paragraph');

  buttonAddParagraph.removeEventListener('click', addParagraph );
  
  buttonAddParagraph.addEventListener('click', addParagraph);
}

// Remove section
function removeSection() {
  
  if (sectionIdNum <=1) {
      return;
  }

  newSectionTag = appendSectionsHere.querySelector(prompt(`#section${sectionIdNum}`));

  if(newSectionTag) {
    appendSectionsHere.removeChild(newSectionTag);
      log('Section has been removed ' + appendSectionsHere);
    // decrementId('section');
    //log('Section ID after section was removed ' + sectionId);

  }
  
  buttonRemoveSection.removeEventListener('click', removeSection);

  buttonRemoveSection.addEventListener('click', removeSection);
}

//  Increments id global variable for dynamically added content
function incrementID(element) {
  switch(element) {
    case 'section':
      sectionIdNum = ++sectionIdNum;
      sectionId = `section${sectionIdNum}`;
        log(sectionIdNum);
      newSectionTag.setAttribute('id', sectionId);
        log('New section id ' + sectionId);
      break;
    case 'article':
      articleIdNum = ++articleIdNum;
      articleId = `article${articleIdNum}`;
        log(articleIdNum);
      newArticleTag.setAttribute('id', articleId);
        log('New article id ' + articleId);
      break;
    case 'div':
      divIdNum = ++divIdNum;
      divId = `div${divIdNum}`;
        log(divIdNum);
      newDivTag.setAttribute('id', divId);
        log('New div id ' + divId);
      break;
    case 'p':
      pIdNum = ++pIdNum;
      pId = `p${pIdNum}`;
        log(pIdNum);
      newPTag.setAttribute('id', pId);
        log('New p id ' + pId);
      break;
    default:
      console.log('That was not an element that I expected. Please try again.');
  }
}

// Decrements id global variable after dynamically removing content
function decrementId(element) {
  switch (element) {
    case 'section':
      sectionIdNum = --sectionIdNum;
      sectionId = `section${sectionIdNum}`;
        log(sectionIdNum); 
      break;
    case 'article':
      articleIdNum = --articleIdNum;
        log(articleIdNum);
      break;
    case 'div':
      divIdNum = --divIdNum;
        log(divIdNum);
      break;
    case 'p':
      pIdNum = --pIdNum;
        log(pIdNum);
      break;
    default:
      console.log('That was not an element that I expected. Please try again.'); 
  } 
}

// Set class attribute based on element added
function setClassAttribute(element) {
  switch(element) {
    case 'section':
      newSectionTag.setAttribute('class', 'sections allContainers');
      newSectionTag.innerText = `New Section: ${sectionId}`;
        log(newSectionTag.outerHTML);
      break;
    case 'article':
      newArticleTag.setAttribute('class', 'articles allContainers');
        log(newArticleTag.outerHTML);
      break;
    case 'div':
      newDivTag.setAttribute('class', 'divs allContainers');
        log(newDivTag.outerHTML);
      break;
    case 'p':
      newParagraphTag.setAttribute('class', 'paragraphs allContainers');
        log(newParagraphTag.outerHTML);
      break;
    default:
        console.log('That is not an element that I expected. Please try again.');
  }
}

// Used for testing to see what the current element id is
// Will be removed after testing is complete
function logIdNum(element) {
  switch(element) {
    case 'section':
      log(sectionId);
      break;
    case 'article':
      log(articleId);
      break;
    case 'div':
      log(divId);
      break;
    case 'p':
      log(paragraphId);
      break;
    default:
      console.log('That was not an element that I expected. Please try again.');
  }
} 
  
main();
