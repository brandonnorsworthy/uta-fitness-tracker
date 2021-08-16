const router = require("express").Router();
const Transaction = require("../models/workout.js");
const path = require('path');

// GET /exercise
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/exercise.html'));
})

// GET /exercise?
router.get("/exercise?", (req, res) => {
  res.status(200).render()
})

// GET /stats
router.get("/stats", (req, res) => {
  res.status(200).render('../public/stats.html')
})

// GET /api/workouts
router.get("/api/workouts", (req, res) => {
  
})

// PUT /api/workouts/:id
router.put("/api/workouts/:id", (req, res) => {
  
})

// POST /api/workouts
router.post("/api/workouts", (req, res) => {
  
})

// GET /api/workouts/range
router.get("/api/workouts/range", (req, res) => {
  
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
