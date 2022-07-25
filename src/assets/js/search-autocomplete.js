// obtendo todos os elementos necessários
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// Se o usuário pressionar qualquer tecla e soltar
inputBox.onkeyup = (e) => {
    let userData = e.target.value; 
    
    // Dados inseridos pelo usuário
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter ((data) => {

            // Filtrando o valor da matriz e os caracteres do usuário para letras minúsculas e retornam apenas as palavras que começam com caracteres inseridos pelo usuário
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
          }
        );
        emptyArray = emptyArray.map ((data) => {

            // Passando dados de retorno dentro da tag li
            return data = `<li>${data}</li>`;
          }
        );
        searchWrapper.classList.add("active"); 

        // Mostra caixa de preenchimento automático
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {

            // Adicionando o atributo onclick em todas as tags li
            allList[i].setAttribute("onclick", "select(this)");
        }
    } 
    else 
    {
      // Ocultar caixa de preenchimento automáticowrapper
      searchWrapper.classList.remove("active"); 
    }
}

function select (element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}
function showSuggestions (list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } 
    else 
    {
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}