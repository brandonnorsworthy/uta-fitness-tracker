const router = require("express").Router();
const path = require('path');
const workout = require("../models/workout.js");

// GET /api/workouts
router.get("/workouts", (req, res) => {

})

// PUT /api/workouts/:id
router.put("/workouts/:id", (req, res) => {

})

// POST /api/workouts
router.post("/workouts", ({ body }, res) => {
  workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

// GET /api/workouts/range
router.get("/workouts/range", (req, res) => {

})

// router.post("/api/transaction", ({ body }, res) => {
// Transaction.create(body)
//   .then(dbTransaction => {
//     res.json(dbTransaction);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
// Transaction.insertMany(body)
//   .then(dbTransaction => {
//     res.json(dbTransaction);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   });
// });

// router.get("/api/transaction", (req, res) => {
// Transaction.find({})
//   .sort({ date: -1 })
//   .then(dbTransaction => {
//     res.json(dbTransaction);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   });
// });

module.exports = router;
