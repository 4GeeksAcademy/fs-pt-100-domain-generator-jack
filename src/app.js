import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* window.onload = function() {
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  const domain = ['.com', '.es', '.io', '.app']

const arrD = ["pronoun", "adj", "noun"]
  console.log(arrD);

  pronoun.forEach(el => {
    adj.forEach(val => {
      noun.forEach(item => {
        domain.forEach(dom => { 
        console.log(`${el}  ${val} ${item} ${dom}`)
      })
    })
  })
});
}
*/

window.onload = function() {
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  const domain = ['.com', '.es', '.io', '.app'];
  const domainList = document.getElementById('domainList');

  pronoun.forEach(el => {
      adj.forEach(val => {
          noun.forEach(item => {
              domain.forEach(dom => {
                  let domainName = `${el}${val}${item}${dom}`;
                  let li = document.createElement('li');
                  li.textContent = domainName;
                  domainList.appendChild(li);
              });
          });
      });
  });
};

