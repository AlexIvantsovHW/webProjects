import axios from "axios";


const API = {

    getBlock (isChecked)  {
        debugger;
        const data = JSON.stringify(isChecked);
        axios({
          method: "post",
          name: "block",
          url: "http://localhost/t4/src/Component/Table/block.php",
          data: data,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (response) {
            console.log(response);
          });
      },

    getUnBlock (isChecked) {
        debugger;
        const data = JSON.stringify(isChecked);
        axios({
          method: "post",
          name: "unblock",
          url: "http://localhost/t4/src/Component/Table/active.php",
          data: data,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (response) {
            console.log(response);
          });
      },
      getDelete (isChecked){
        const data = JSON.stringify(isChecked);
        axios({
          method: "post",
          url: "http://localhost/t4/src/Component/Table/delete.php",
          data: data,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (response) {
            console.log(response);
          });
      },
        getDelAll(){ 
        const data = JSON.stringify('dataTable');
        axios({
          method: "post",
          name: "deleteAll",
          url: "http://localhost/t4/src/Component/Table/allDelete.php",
          data: data,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (response) {
            console.log(response);
          });
          debugger;
      },
};


export default API;