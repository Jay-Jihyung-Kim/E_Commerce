import React, { useState } from "react";
import Joi from "joi-browser";

const data = {};
const error = {};
const errors = {};
const schema = {};

export const validateProperty = (input, value) => {
  const obj = { [input]: value };
  const schemaItem = { [input]: schema[input] };
  const { error } = Joi.validate(obj, schemaItem);
  if (!error) return null;
  return error.details[0].message;
};

export const validate = () => {
  const result = Joi.validate(errors, schema, { abortEarly: false });
  console.log(result);

  if (!result.error) return null;

  const error = {};
  for (let item of result.error.details) {
    error[item.path[0]] = item.message;
  }
  return error;
};
