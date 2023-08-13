import axios from "axios";


const userRequest=(method,name,url,data)=>{
  axios({
    method: method,
    name: name,
    url: url,
    data: data,
    config: { headers: { "Content-Type": "multipart/form-data" } },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
}
const API = {

  getMessage(fData,tableAC) {
    const url="http://localhost/webProjects/t6/chat/src/Component/Window/data.php";
    userRequest('get','Message',url);
  },

  getForm(fData,values,) {
    axios({
      method: "post",
      url: "http://localhost/webProjects/t6/chat/src/Component/Window/form.php",
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response.response.data);
      })
    console.log("Form submit data", values);

  },
};

export default API;