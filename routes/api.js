const router = require("express").Router();
const Workout = require('../models/Workout.js')

// GET /api/workouts
router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET /api/workouts/range
router.get("/workouts/range", (req, res) => {
  Workout.aggregate([{
    $addFields: {
      totalDuration: {
        $sum: "$exercises.duration",
      },
    },
  },])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT /api/workouts/:id
router.put("/workouts/:id", ({params, body}, res) => {
  Workout.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } }, { new: true })
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
})

// POST /api/workouts
router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
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
