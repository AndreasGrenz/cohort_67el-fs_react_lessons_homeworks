import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { ContactUsContainer, InputsContainer, Title } from "./styles";
import { CONTACT_US_FORM_VALUES } from "./types";

const validationSchema = Yup.object().shape({
  [CONTACT_US_FORM_VALUES.FULL_NAME]: Yup.string()
    .required("Full name field is required")
    .min(3, "Full name field should contain min 3 characters")
    .max(50, "Full name field should contain max 50 characters"),

  [CONTACT_US_FORM_VALUES.PHONE]: Yup.string()
    .required("Phone field is required")
    .min(4, "Phone field should contain min 4 characters")
    .max(20, "Phone field should contain max 20 characters"),

  [CONTACT_US_FORM_VALUES.EMAIL]: Yup.string()
    .min(6, "Email field should contain min 6 characters")
    .max(60, "Email field should contain max 60 characters")
    .email("This field should be in email format"),
});

function ContactUsForm() {
  const formik = useFormik({
    initialValues: {
      [CONTACT_US_FORM_VALUES.FULL_NAME]: "",
      [CONTACT_US_FORM_VALUES.PHONE]: "",
      [CONTACT_US_FORM_VALUES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      console.log("Contact us form values:");
      console.log(values);
      helpers.resetForm();
    },
  });

  return (
    <ContactUsContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>

      <InputsContainer>
        <Input
          id="full-name-id"
          name={CONTACT_US_FORM_VALUES.FULL_NAME}
          placeholder="Your full name"
          label="Full name*"
          value={formik.values[CONTACT_US_FORM_VALUES.FULL_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_FORM_VALUES.FULL_NAME]}
        />

        <Input
          id="phone-id"
          name={CONTACT_US_FORM_VALUES.PHONE}
          placeholder="Your phone number"
          label="Phone*"
          value={formik.values[CONTACT_US_FORM_VALUES.PHONE]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_FORM_VALUES.PHONE]}
        />

        <Input
          id="email-id"
          name={CONTACT_US_FORM_VALUES.EMAIL}
          placeholder="Your email"
          label="Email"
          value={formik.values[CONTACT_US_FORM_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_FORM_VALUES.EMAIL]}
        />
      </InputsContainer>

      <Button name="SEND REQUEST" type="submit" />
    </ContactUsContainer>
  );
}

export default ContactUsForm;