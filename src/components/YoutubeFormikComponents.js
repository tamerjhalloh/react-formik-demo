import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "Tamer",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("From Values", values);
};
 
const validationSchema = Yup.object({
  name: Yup.string().required('Name is Required!'),
  email: Yup.string().required('E-mail is Required!').email('E-mail format is invalid!'),
  channel: Yup.string().required('Channel is Required!')
});

function YoutubeFormikComponents() { 

  return (
    <Formik initialValues={initialValues} 
    validationSchema={validationSchema} 
    onSubmit={onSubmit} >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name='name' />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" name="email" id="email"  />
          <ErrorMessage name='email' />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text"  name="channel" id="channel"  />
          <ErrorMessage name='channel' />
        </div>
        <button type="submit"> Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeFormikComponents;
