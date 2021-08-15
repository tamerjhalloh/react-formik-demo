import React from "react";
import { Formik, Form, Field, ErrorMessage, isEmptyChildren } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "Tamer",
  email: "",
  channel: "",
  comments: "",
  address: "",
};

const onSubmit = (values) => {
  console.log("From Values", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required!"),
  email: Yup.string()
    .required("E-mail is Required!")
    .email("E-mail format is invalid!"),
  channel: Yup.string().required("Channel is Required!"),
});

function YoutubeFormikComponents() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component={TextError}/>
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" >
            {
              errorMsg =>  <div className="error">{errorMsg}</div>
            }
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            name="channel"
            id="channel"
            placeholder="Youtube Channel Name"
          />
          <ErrorMessage name="channel" />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" name="comments" id="comments" />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {
              props => {
                const {field, form, meta} = props
                //console.log(props);
                return <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              }
            }
          </Field>
        </div>
        <button type="submit"> Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeFormikComponents;
