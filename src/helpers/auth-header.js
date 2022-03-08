const authHeader=()=> {
    // return authorization header with jwt token
    let sessionid = sessionStorage.getItem('sessionid');

    if (sessionid) {
       return { 'jwtToken': sessionid,'platform':'web' };
    } else {
       return {};
    }
}
export {authHeader }
