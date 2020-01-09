export const setCookie = (name, value, days = 1) => {
    let expires = "";
    
	let date = new Date();
	date.setTime(date.getTime() + (days*24*60*60*1000));
	expires = "; expires=" + date.toUTCString();
    
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
export const getCookie = (name) => {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
export const removeCookie = (name) => {   
    document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';  
}

// setCookie('ppkcookie','testcookie',7);

// var x = getCookie('ppkcookie');
