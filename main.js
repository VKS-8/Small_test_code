//remove this comment after publishing to github

//When this variable is removed, it should be easy to locate and remove all instances
// use console.log only for instances that need to stay in the code
let log = console.log  

// Need to add all sections dynamically so this will increment from no element to each added element correctly
let sectionIdNum = '1'; 
// Set id name to 'section#'
let sectionId = `section${sectionIdNum}`;
// Global variable that is reassigned from addSection() to be used by other functions
let newSectionTag = '';  
  log('newSectionTag ' + newSectionTag);
let appendSectionsHere = document.querySelector('#appendSectionsHere');
  log('appendSectionsHere' + appendSectionsHere);


const mainContainer = document.querySelector('#main-container');
  log(mainContainer);

//these (this is an excerpt of the overall code) need to be modified to pull 
//the container to which each element is being added based on idNum; maybe getAttribute()
const sectionOne = document.querySelector('#section1'); 
  log('sectionOne ' + sectionOne);                

const buttonLogSectionIdNum = document.querySelector('#buttonLogSectionIdNum');
  log('Current sectionIdNum value: ' + buttonLogSectionIdNum);

// Probably should create a conditional or switch statement
// to choose the action to take based on the target clicked
// instead of all of these individual button code blocks

const buttonAddSection = document.querySelector('#buttonAddSection');
  log('Section add button ' + buttonAddSection);
const buttonRemoveSection = document.querySelector('#buttonRemoveSection');
  log('Section remove button ' + buttonRemoveSection);

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

  }
    
// Log current section idNum
function currentSectionIdNum() { //set this function up on each of the following elements
    logIdNum('section');  
  buttonLogSectionIdNum.removeEventListener('click', currentSectionIdNum);
  
  buttonLogSectionIdNum.addEventListener('click', currentSectionIdNum);
}

// Add section
function addSection() {
    
  newSectionTag = document.createElement('section');
  
  log('New section has been added ' + mainContainer);
  incrementID('section');
  setClassAttribute('section');

  buttonAddSection.removeEventListener('click', addSection );
  
  buttonAddSection.addEventListener('click', addSection);
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
      log('Section ID after section was removed ' + sectionId);

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
      newDivTag.setAttribute('id', articleId);
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
      newSectionTag.setAttribute('class', 'sections');
        log(newSectionTag.outerHTML);
      break;
    case 'article':
      newArticleTag.setAttribute('class', 'articles');
        log(newArticleTag.outerHTML);
      break;
    case 'div':
      newDivTag.setAttribute('class', 'divs');
        log(newDivTag.outerHTML);
      break;
    case 'p':
      newPTag.setAttribute('class', 'paragraphs');
        log(newPTag.outerHTML);
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
      log(pId);
      break;
    default:
      console.log('That was not an element that I expected. Please try again.');
  }
} 
  
main();
