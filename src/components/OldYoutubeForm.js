import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "Tamer",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("From Values", values);
};

/* const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(errors.email)) {
      errors.email = "Invalid email format";
    }
  }

  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
}; */


const validationSchema = Yup.object({
  name: Yup.string().required('Name is Required!'),
  email: Yup.string().required('Email is Required!').email('Email format is invalid!'),
  channel: Yup.string().required('Channel is Required!')
});

function OldYoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  //console.log("From Values", formik.values);
  //console.log("From Errors", formik.errors); 
  console.log("From Touched - Related to Blur", formik.touched);


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name  && formik.touched.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.errors.channel && formik.touched.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}

export default OldYoutubeForm;
