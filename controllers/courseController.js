let Course = require("./../Models/course");
const Joi = require("@hapi/joi");

let courseController = {
  async get_courses(req, res) {
    let courses = await Course.find();
    res.status(200).send(courses);
  },

  async get_course(req, res) {
    //Do you know how i am sure that req.params.id exist
    //it is because, if req.params.id is not sent, then the route handler wouldn't call this method
    //it calls the method named 'get_courses'
    if (req.params.id.length == 24) {
      let course = await Course.findOne({
        _id: req.params.id
      });
      if (course) {
        res.status(200).send(course);
      } else {
        res.status(404).send({
          error: "a course with _id = " + req.params.id + " is not found"
        });
      }
    } else {
      res.status(400).send({
        error: "Invalid course Id"
      });
    }
  },

  async createCourse(req, res) {
    let { body } = req;
    let schema = Joi.object({
      name: Joi.string().required(),
      author: Joi.string().required(),
      tags: Joi.array()
        .items(Joi.string())
        .min(1)
        .max(3)
        .required(),
      isPublished: Joi.boolean().required()
    });

    let { error } = schema.validate(body, {
      abortEarly: false
    });
    if (!error) {
      try {
        const course = new Course({
          name: body.name,
          author: body.author,
          tags: body.tags,
          isPublished: body.isPublished
        });
        const result = await course.save();
        res.status(200).send(result);
      } catch {
        res
          .status(500)
          .send({ error: "something went wrong while creating a course." });
      }
    } else {
      res.status(400).send({ errors: error.details });
    }
  },

  async updateCourse(req, res) {
    if (req.params.id.length == 12) {
      let course = await Course.findOne({
        _id: req.params.id
      });
      if (course) {
        res.status(200).send(course);
      } else {
        res.status(404).send({
          error: "a course with _id = " + req.params.id + " is not found"
        });
      }
    } else {
      res.status(400).send({
        error: "Invalid course Id"
      });
    }
  },

  async deleteCourse(req, res) {
    //check if a course with the given id exist or not
    if (courses.filter(course => course.id == req.params.id).length != 0) {
      courses = courses.filter(course => course.id != req.params.id);
      res
        .status(200)
        .send(`A course with id=${req.params.id} is deleted successfully`);
    } else {
      res
        .status(404)
        .send(`a course with the given id=${req.params.id} is not found.`);
    }
  }
};

module.exports = courseController;
