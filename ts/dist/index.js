"use strict";
const getUserName = document.querySelector('#user');
const formSubmit = document.querySelector('#form');
const main_container = document.querySelector('.main_container');
async function myCustomFunction(url, options) {
    // fetch(url, i);
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Network response was not ok ${response.status}`);
    }
    const data = await response.json();
    console.log('data', data);
    return data;
}
const singleUserUI = (singleUser) => {
    const { avatar_url, id, location, login, url } = singleUser;
    main_container.insertAdjacentHTML("beforeend", `<div class = 'card'>
        <img src=${avatar_url} alt=${login} />
        <hr/>
        <div class = 'card-footer'>
        <img src="${avatar_url}" alt="${login}" />
        <a href="${url}">Github</a>        
        </div>
         </div>
        `);
};
function fetchUserData(url) {
    myCustomFunction(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            singleUserUI(singleUser);
            console.log('first ', +singleUser.login);
        }
    });
}
fetchUserData('https://api.github.com/users');
