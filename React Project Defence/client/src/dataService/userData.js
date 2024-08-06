
function getUserData(){
    return JSON.parse(localStorage.getItem('userData'));
}

function setUserData(userData){
    const { password, ...restUserData } = userData;
    localStorage.setItem('userData',JSON.stringify(restUserData));
}

function clearUserData(){
    localStorage.removeItem('userData');
}

function getUserId(){
    let userData = getUserData();
    return userData? userData._id : '';
}

export {
    getUserData,
    setUserData,
    clearUserData,
    getUserId
}
