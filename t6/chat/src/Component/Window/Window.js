import { React } from "react";
import {
  initialValues,
  messageForm,
  validateSchema,
  Regform,
  onSubmit,
} from "./Message";
import { Formik, Form } from "formik";
import API from "../API/API";

const Window = (props) => {
  const messageData = props.message.Message;
  const messageList = messageData.map((el) =>
    messageForm(el.name, el.text, el.tag)
  );

  const onSubmit = (values) => {
    debugger;
    let fData = new FormData();
    fData.append("name", values.name);
    fData.append("text", values.email);
    API.getForm(fData, values);
  };

  return (
    <div className="col-sm border border-primary d-flex flex-column mt-5">
      <div
        style={{
          height: 500,
          width: 800,
          backgroundColor: "rgba(255, 0, 0, 0.1)",
        }}
      >
        {messageList}
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();
          }}
        >
          <Form>
            <div className="container my-5">
              <div className="mx-auto mw-100">
                <h1 className="text-center">Registration</h1>
                <div className="mb-3 d-flex align-items-center flex-column">
                  {Regform("name", "input")}
                  {Regform("text", "input")}
                  <button type="submit">Submit</button>
                  <div></div>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Window;
