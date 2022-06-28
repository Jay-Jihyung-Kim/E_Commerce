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
    <Label htmlFor="email"></Label>
    <Input
      value={formik.values.RegisterEmail}
      name="email"
      onChange={formik.handleChange}
      id="RegisterEmail"
      type="text"
      placeholder="Email"
      error={formik.errors.RegisterEmail}
    />
    <Error>
      {formik.errors.RegisterEmail ? (
        <p>{formik.errors.RegisterEmail}</p>
      ) : null}
    </Error>
  </div>
  <div>
    <Label htmlFor="password"></Label>
    <Input
      value={formik.values.RegisterPassword}
      name="password"
      onChange={formik.handleChange}
      id="RegisterPassword"
      type="password"
      placeholder="Password"
    />
    <Validation>
      {formik.values.RegisterPassword.length > 8 ? (
        <span style={{ color: "green" }}>Must be 8 characters</span>
      ) : (
        <span>Must be 8 characters</span>
      )}
      {isUpper(formik.values.RegisterPassword) ? (
        <span style={{ color: "green" }}>Have 1 Capital</span>
      ) : (
        <span>Have 1 Capital</span>
      )}
      {hasNumber(formik.values.RegisterPassword) ? (
        <span style={{ color: "green" }}>Have 1 Number</span>
      ) : (
        <span>Have 1 Number</span>
      )}
      {containsSpecialChars(formik.values.RegisterPassword) ? (
        <span style={{ color: "green" }}>Have 1 Special Char</span>
      ) : (
        <span>Have 1 Special Char</span>
      )}
    </Validation>
    <Error>
      {formik.errors.RegisterPassword ? (
        <p>{formik.errors.RegisterPassword}</p>
      ) : null}
    </Error>
  </div>
  <div>
    <Label htmlFor="password"></Label>
    <Input
      value={formik.values.confirmPassword}
      name="password"
      onChange={formik.handleChange}
      id="ConfirmPassword"
      type="password"
      placeholder="Password"
    />
    <Error>
      {formik.errors.confirmPassword ? (
        <p>{formik.errors.confirmPassword}</p>
      ) : null}
    </Error>
  </div>
  <Button type="submit">Create Account</Button>
</RegisterForm>;
