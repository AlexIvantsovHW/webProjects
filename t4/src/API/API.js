import axios from "axios";

const updateData=(tableAC)=>{
  const url="http://localhost/t4/src/Component/Table/data.php";
    axios
        .get(url).then(response=>response.data)
        .then((data)=>{tableAC({data})}); 
}
const userRequest=(method,name,url,data,tableAC)=>{
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
    updateData(tableAC);
}
const API = {
  getForm(fData,values,) {
    axios({
      method: "post",
      url: "http://localhost/t4/src/Component/Registration/form.php",
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
  getBlock(isChecked,tableAC) {
    const data = JSON.stringify(isChecked);
    const url="http://localhost/t4/src/Component/Table/block.php";
    userRequest('post','block',url,data,tableAC)
  },

  getUnBlock(isChecked,tableAC) {
    const data = JSON.stringify(isChecked);
    const url="http://localhost/t4/src/Component/Table/active.php";
    userRequest('post','unblock',url,data,tableAC)
  },
  getDelete(isChecked,tableAC) {
    const data = JSON.stringify(isChecked);
    const url="http://localhost/t4/src/Component/Table/delete.php";
    userRequest('post','delete',url,data,tableAC)
  },
  getDelAll(tableAC) {
    const data = JSON.stringify("dataTable");
    const url="http://localhost/t4/src/Component/Table/allDelete.php";
    userRequest('post','deleteAll',url,data,tableAC)
  },
  getLog(fData,tableAC) {
    const url="hhttp://localhost/t4/src/Component/Login/Log.php";
    userRequest('post','log',url,fData,tableAC);
  },
};

export default API;
