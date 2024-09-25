const getUserName = document.querySelector('#user') as HTMLInputElement;
const formSubmit = document.querySelector('#form') as HTMLFormElement;
const main_container = document.querySelector('.main_container') as HTMLElement;

interface UserData{
    id: number;
    login: string;
    avatar_url: string;
    location: string;
    url: string;
}

async function myCustomFunction<T>(url:string, options?: RequestInit):Promise<T>{
    // fetch(url, i);
    const response = await fetch(url, options);

    if(!response.ok){
        throw new Error(`Network response was not ok ${response.status}`)
    }

    const data = await response.json();
    console.log('data', data)
    return data;

}

const singleUserUI = (singleUser: UserData) => {
   const {avatar_url,id, location, login,url } = singleUser
    main_container.insertAdjacentHTML(  
        "beforeend",
        `<div class = 'card'>
        <img src=${avatar_url} alt=${login} />
        <hr/>
        <div class = 'card-footer'>
        <img src="${avatar_url}" alt="${login}" />
        <a href="${url}">Github</a>        
        </div>
         </div>
        `
    )
}

function fetchUserData(url:string){
    myCustomFunction<UserData[]>(url, {}).then((userInfo) => {
        for(const singleUser of userInfo){

            singleUserUI(singleUser);
            console.log('first ', + singleUser.login)
        }
    }) 
}


fetchUserData('https://api.github.com/users');

formSubmit.addEventListener("submit", async(e) =>{
    e.preventDefault();

    const searchTerm = getUserName.value.toLowerCase();
    try {

        const url = 'https://api.github.com/users';

        const alluserData = await myCustomFunction<UserData[]>(url, {})

        const matchingUsers = alluserData.filter((user) => {
            return user.login.toLowerCase().includes(searchTerm)
        })

        main_container.innerHTML = " "

        if(matchingUsers.length === 0){
            main_container?.insertAdjacentHTML(
                'beforeend',
                <p class='empty-msg'>No matching user found</p>
            );
        }else{
            for(const singleUser of matchingUsers){
                singleUserUI(singleUser)

            }
        }
        
    } catch (error) {
        console.log('first', error)
    }
})