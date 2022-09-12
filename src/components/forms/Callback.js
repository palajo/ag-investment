import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Col, Row } from 'react-bootstrap';

function Callback(props) {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <Formik
      initialValues={{
        fullname: '',
        email: '',
        phone: '',
        vacancy: '',
        cv: '',
      }}
      validationSchema={
        Yup.object().shape({
          fullname: Yup.string().required(`Обов'язкове поле`),
          email: Yup.string().required(`Обов'язкове поле`),
          phone: Yup.string().required(`Обов'язкове поле`),
        })
      }

      onSubmit={(values, { setSubmitting } ) => {
        emailjs.send(
          'service_d754ast',
          'template_i6s1eki',
          values,
          'qAKFpZUW6yGyXLK2G',
        ).then(() => {
          setSubmitSuccess(true);
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 10000);
        });
      }}
    >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit}>
          <Row className="gy-4">
            <Col xs={12}>
              <label htmlFor="name">
                Полное имя
              </label>
              <input
                type="text"
                className="form-control"
                name="fullname"
                placeholder="Alexander McKinsey"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullname}
              />
              <div className="form-error">
                {errors.fullname && touched.fullname && errors.fullname}
              </div>
            </Col>
            <Col xs={12}>
              <label htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="careers@ak-inverstment.pl"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className="form-error">
                {errors.email && touched.email && errors.email}
              </div>
            </Col>
            <Col xs={12}>
              <label htmlFor="phone">
                Контактный телефон
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                placeholder="+373 (22) 34-92-79"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <div className="form-error">
                {errors.phone && touched.phone && errors.phone}
              </div>
            </Col>
            <Col xs={12}>
              <Row className="justify-content-center">
                <Col xs="auto">
                  <button className={`btn btn-primary ${submitSuccess && 'disabled'}`} type="submit">
                    Отправить
                  </button>
                </Col>
              </Row>
            </Col>
            {
              submitSuccess && (
                <Col xs={12}>
                  <div className="form-success">
                    Ваш запрос успешно отправлено!
                  </div>
                </Col>
              )
            }
          </Row>
        </form>
      )}
    </Formik>
  );
}

export default Callback;