const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';
const container = document.querySelector('#container');

const Quote = function (aQuoteText, aCharacter, anImg) {
   this.quoteText = aQuoteText;
   this.character = aCharacter;
   this.img = anImg;
}

const newQuoteStructure = (text, char, img) => {
   const textEle = document.createElement('h1');
   const charEle = document.createElement('img');
   const authorEle = document.createElement('h2');
   const quoteCont = document.createElement('section');

   quoteCont.id = 'quote-container';
   textEle.textContent = text;
   charEle.setAttribute('src', img);
   authorEle.textContent = char;

   quoteCont.appendChild(textEle);
   quoteCont.appendChild(authorEle);

   container.appendChild(charEle);
   container.appendChild(quoteCont);
}


fetch(url)
   .then(resp => resp.json())
   .then(data => {
      const quote = new Quote(data[0].quote, data[0].character, data[0].image);
      newQuoteStructure(`"${quote.quoteText}"`, `- ${quote.character}`, quote.img);
   });