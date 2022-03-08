import React from 'react';
import { UrlConstants } from './UrlConstants';
import { authHeader } from '../helpers/auth-header';
import Axios from 'axios'
export const commonService = {
    getRequestMethod,
    putRequestMethod,
    postRequestMethod,
    postUploadPicRequestMethod

};
// get request method
async function getRequestMethod(requestUrl: any) {
    const jwtToken = localStorage.getItem("token") as string;

    console.log('common service called---');
    
    let res = await Axios(
        {   method: 'get',
            url: UrlConstants.BASE_URL + requestUrl,
            headers:{jwtToken:jwtToken}
        })  
        console.log(res);
              
    return res
}

// put request method

async function putRequestMethod(requesturl: any, requestdata: any) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json', 'platform': 'web' },
        body: JSON.stringify(requestdata)
    };
    console.log('requestdata-----',requestdata);
    const response = await Axios(
        {
            method: 'put',
            url: UrlConstants.BASE_URL+requesturl,
            data:requestdata
        })
        return response

}
// post request method
async function postRequestMethod(requesturl: any, requestdata: any,jwtToken:any) {
    console.log('jwtToken in commonservice',jwtToken);
    let res = await Axios(
        {
            method: 'post',
            url: UrlConstants.BASE_URL+requesturl,
            data:requestdata,
            headers:{
                jwtToken:jwtToken
            }
            
        },)
        console.log(res);
        
    return res
    
}
// post request method For profilepic epload
async function postUploadPicRequestMethod(requesturl: any, requestdata: any) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader() },
        body: requestdata
    };
    let res = await Axios(
        {
            method: 'get',
            url: UrlConstants.BASE_URL,
        })
    return res
    
}
