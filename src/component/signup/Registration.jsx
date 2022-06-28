import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import styled, { css } from "styled-components";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Icon } from "@iconify/react";
import { mobile } from "../../responsive";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 35% 65%;
  height: 100%;
  margin-bottom: 7rem;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 15rem;
  ${mobile({
    display: "flex",
    flexDirection: "row",
    paddingTop: "2rem",
    justifyContent: "center",
    textAlign: "center",
    border: "none",
  })}
`;
const listbasestyle = css`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 4rem;
  margin-left: 5rem;
  padding: 1.5rem 0rem 1.5rem 5rem;
  background-color: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    color: white;
  }
  ${mobile({
    margin: "0",
    padding: "1rem 3rem",
  })}
`;

const Sign = styled.span`
  ${listbasestyle}
  background-color: ${(props) =>
    props.status === "sign" ? "rgba(0, 0, 0, 0.3)" : "none"};
  color: ${(props) =>
    props.status === "sign" ? "white" : "rgba(0, 0, 0, 0.5)"};
`;
const Register = styled.span`
  ${listbasestyle}
  background-color: ${(props) =>
    props.status === "register" ? "rgba(0, 0, 0, 0.3)" : "none"};
  color: ${(props) =>
    props.status === "register" ? "white" : "rgba(0, 0, 0, 0.5)"};
`;
const Status = styled.span`
  ${listbasestyle}
  background-color: ${(props) =>
    props.status === "status" ? "rgba(0, 0, 0, 0.3)" : "none"};
  color: ${(props) =>
    props.status === "status" ? "white" : "rgba(0, 0, 0, 0.5)"};
`;

const formBasicStyle = css`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 0 auto;
  ${mobile({
    width: "70%",
  })}
`;

//Sign in
const SigninForm = styled.form`
  ${formBasicStyle}
  display: ${(props) => (props.display === "sign" ? "block" : "none")};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 2rem;
  margin-top: 4rem;
`;
const Label = styled.label``;
const Input = styled.input`
  font-size: 2rem;
  width: 100%;
  color: rgba(0, 0, 0, 0.5);
  border: none;
  border-bottom: 1px solid black;
  margin-top: 2rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 2rem;
  }
`;
const InputTagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const RememberTag = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
`;

const ForgotPassword = styled.span`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  font-weight: 100;
  font-size: 2rem;
  border: none;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 1rem 0;
  cursor: pointer;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Register

const RegisterForm = styled.form`
  ${formBasicStyle}
  display: ${(props) => (props.display === "register" ? "block" : "none")};
  position: relative;
`;
const Error = styled.span`
  font-size: 2rem;
  color: red;
  font-weight: 200;
`;

const Validation = styled.span`
  font-size: 2rem;
  color: red;
  font-weight: 200;
  display: ${(props) => props.display};
  flex-direction: column;
  right: 60px;
  top: 200px;
  border: 3px solid rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 30px;
  margin-top: 2rem;
`;

const RegisterText = styled.p`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 2rem;
  & > u {
    font-size: 1.2rem;
  }
`;

const Registration = () => {
  YupPassword(Yup);
  const [status, setStatus] = useState("sign");
  const [passwordGuide, setPasswordGuide] = useState("none");
  const [isSubmit, setIsSubmit] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      registerEmail: "",
      password: "",
      firstName: "",
      lastName: "",
      registerPassword: "",
      confirmPassword: "",
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is Required"),
      registerEmail: Yup.string()
        .email("Invalid Email Address")
        .required("Email is Required"),
      password: Yup.string().required("Password is Required"),
      firstName: Yup.string().required("Name is Required"),
      lastName: Yup.string().required("Name is Required"),
      registerPassword: Yup.string()
        .required("Password is Required")
        .matches(/[A-Z]+/, "One Uppercase required")
        .matches(/[@$!%*#?&]+/, "One special character required")
        .matches(/\d+/, "One number required"),
      confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("registerPassword")], "Your passwords do not match."),
    }),

    onSubmit: (values) => {
      console.log(values);
      console.log("submitted");
    },
  });

  function handleClick(list) {
    setStatus(list);
  }

  function isUpper(str) {
    return str.toLowerCase() != str;
  }

  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  function handleFocus() {
    setPasswordGuide("flex");
  }

  function handleBlur() {
    setPasswordGuide("none");
  }

  function handleSave() {}

  console.log(formik.values);

  return (
    <Container>
      <ListContainer>
        <Sign onClick={() => handleClick("sign")} status={status}>
          Sign In
        </Sign>
        <Register onClick={() => handleClick("register")} status={status}>
          Register
        </Register>
        {/* <Status onClick={() => handleClick("status")} status={status}>
          Order Status
        </Status> */}
      </ListContainer>
      <SigninForm onSubmit={formik.handleSubmit} display={status}>
        <Title>Sign In</Title>
        <div>
          <Label htmlFor="email"></Label>
          <Input
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            id="email"
            type="text"
            placeholder="Email"
            error={formik.errors.email}
          />
          <Error>
            {formik.errors.email ? <p>{formik.errors.email}</p> : null}
          </Error>
        </div>
        <div>
          <Label htmlFor="password"></Label>
          <Input
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            id="password"
            type="password"
            placeholder="Password"
          />
          <Error>
            {formik.errors.password ? <p>{formik.errors.password}</p> : null}
          </Error>
        </div>
        <InputTagContainer>
          <RememberTag>
            <input
              type="checkbox"
              id="Remember"
              name="Remember"
              style={{ marginRight: "3px" }}
            />
            <label>Remember me</label>
          </RememberTag>
          <ForgotPassword>
            <LockOutlinedIcon />
            Forgot Your Password?
          </ForgotPassword>
        </InputTagContainer>
        <Button type="submit">Sign In</Button>
        <Button
          style={{
            background: "white",
            color: "rgba(0,0,0,.5)",
            border: "1px solid rgba(0,0,0,.5)",
            fontWeight: "200",
          }}
          type="submit"
        >
          <Icon
            icon="flat-color-icons:google"
            style={{ fontSize: "2rem", marginRight: "5px" }}
          />
          Sign in with Google
        </Button>
        <Button
          style={{
            background: "white",
            color: "rgba(0,0,0,.5)",
            border: "1px solid rgba(0,0,0,.5)",
            fontWeight: "200",
          }}
          type="submit"
        >
          <FacebookOutlinedIcon
            style={{
              color: "#3B5998",
              fontSize: "2rem",
              marginRight: "5px",
            }}
          />
          Sign in with Facebook
        </Button>
      </SigninForm>
      <RegisterForm onSubmit={formik.handleSubmit} display={status}>
        <Title>Register</Title>
        <div>
          <Label htmlFor="firstName"></Label>
          <Input
            value={formik.values.firstName}
            name="firstName"
            onChange={formik.handleChange}
            id="firstName"
            type="text"
            placeholder="First Name"
            error={formik.errors.firstName}
          />
          <Error>
            {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
          </Error>
        </div>
        <div>
          <Label htmlFor="lastName"></Label>
          <Input
            value={formik.values.lastName}
            name="lastName"
            onChange={formik.handleChange}
            id="lastName"
            type="text"
            placeholder="Last Name"
            error={formik.errors.lastName}
          />
          <Error>
            {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
          </Error>
        </div>
        <div>
          <Label htmlFor="registerEmail"></Label>
          <Input
            value={formik.values.registerEmail}
            name="registerEmail"
            onChange={formik.handleChange}
            id="registerEmail"
            type="text"
            placeholder="Email"
            error={formik.errors.registerEmail}
          />
          <Error>
            {formik.errors.registerEmail ? (
              <p>{formik.errors.registerEmail}</p>
            ) : null}
          </Error>
        </div>
        <div>
          <Label htmlFor="registerPassword"></Label>
          <Input
            value={formik.values.registerPassword}
            name="registerPassword"
            onChange={formik.handleChange}
            id="RegisterPassword"
            type="password"
            placeholder="Password"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Error>
            {formik.errors.registerPassword ? (
              <p>{formik.errors.registerPassword}</p>
            ) : null}
          </Error>
          <Validation display={passwordGuide}>
            <span style={{ color: "rgba(0, 0, 0, 0.8) " }}>
              Your password must...
            </span>
            {formik.values.registerPassword.length > 8 ? (
              <span style={{ color: "green" }}>
                Have minimum of 8 characters
              </span>
            ) : (
              <span>Have minimum of 8 characters</span>
            )}
            {isUpper(formik.values.registerPassword) ? (
              <span style={{ color: "green" }}>Have 1 uppercase character</span>
            ) : (
              <span>Have 1 uppercase character</span>
            )}
            {hasNumber(formik.values.registerPassword) ? (
              <span style={{ color: "green" }}>Have 1 number</span>
            ) : (
              <span>Have 1 number</span>
            )}
            {containsSpecialChars(formik.values.registerPassword) ? (
              <span style={{ color: "green" }}>Have 1 special character</span>
            ) : (
              <span>Have 1 special character</span>
            )}
          </Validation>
        </div>
        <div>
          <Label htmlFor="confirmPassword"></Label>
          <Input
            value={formik.values.confirmPassword}
            name="confirmPassword"
            onChange={formik.handleChange}
            id="ConfirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
          <Error>
            {formik.errors.confirmPassword ? (
              <p>{formik.errors.confirmPassword}</p>
            ) : null}
          </Error>
        </div>
        <RegisterText>
          I agree to the Website <u>Terms of Use</u>, and the{" "}
          <u>Privacy Policy</u>.
        </RegisterText>
        <Button type="submit">Create Account</Button>
      </RegisterForm>
    </Container>
  );
};

export default Registration;
