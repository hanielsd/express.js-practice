const schema = Joi.object().keys({
  title: Joi.string()
    .min(minLength)
    .max(maxLength)
    .required()
    .error(errors => {
      return errors.map(error => {
        switch (error.type) {
          case "string.min":
            return { message: "first msg" };
          case "string.max":
            return { message: "second msg" };
          case "any.empty":
            return { message: "third msg" };
        }
      });
    })
});
