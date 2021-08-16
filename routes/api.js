const router = require("express").Router();
const db = require('../models');

// GET /api/workouts
router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      console.log('responsed: /workouts')
      res.status(200).json(dbWorkout)
    })
    .catch(err => {
      res.status(404).json(err)
    })
})

// PUT /api/workouts/:id
router.put("/workouts/:id", (req, res) => {

})

// POST /api/workouts
router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
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
