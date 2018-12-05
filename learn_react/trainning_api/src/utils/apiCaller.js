import axios from 'axios'
import * as Config from '../constants/Config'

export const callAPI = (endPoint, method = "GET", body, uploadFile = false) => {
  if(uploadFile) {
    console.log("aa")
    var formData = new FormData()
    for (var val in body){
      formData.append(val, body[val])
    }
    for (var key of formData.entries())
    {
      console.log(key[0] + ', ' + key[1]);
    }
    return axios.post(`${Config.API_URL}/${endPoint}`, body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).catch(error => console.log(error));
  }
  else{
    return axios({
      method: method,
      url: `${Config.API_URL}/${endPoint}`,
      data : body,
    }).catch(error => console.log(error));
  }
  }
  
  export const callImage = (method = "GET", object, fileName) => {
    return `${Config.API_URL_IMAGE}/${object}/${fileName}`;
  }
  
  export default callAPI