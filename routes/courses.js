let courseController = require("../controllers/courseController");

const express = require("express");
let router = express.Router();

router.get("/", courseController.get_courses);
router.get("/:id", courseController.get_course);
router.post("/", courseController.createCourse);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
