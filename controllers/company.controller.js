const db = require('../models');
const Company = db.company;
const Op = db.Sequelize.Op; 

// Create Company
exports.create = (req, res) => {
  const company = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    payment: req.body.payment
  }; 
  Company.create(company)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while creating the Company."
     });
    });
};

// Find All Articles
// exports.findAll = (req, res) => {
//     const id = req.params.id;
//     Article.findAll()
//       .then(data => {
//         if (data) {
//           res.send(data);
//         } else {
//           res.status(404).send({
//             message: `Cannot find Articles`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//         message: "Error retrieving Articles"
//       });
//     });
//   };

// Find Single Article
// exports.findOne = (req, res) => {
//   const id = req.params.id;
//   Article.findByPk(id)
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find Article with id=${id}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//       message: "Error retrieving Article with id=" + id
//     });
//   });
// };

// Update Article
// exports.update = (req, res) => {
//   const id = req.params.id;
//   Article.update(req.body, {
//     where: { id: id }
//   })
//   .then(num => {
//     if (num == 1) {
//       res.send({
//         message: "Article was updated successfully."
//       });
//     } else {
//       res.send({
//         message: `Cannot update Article with id=${id}.`
//       });
//     }
//   })
//   .catch(err => {
//     res.status(500).send({
//       message: "Error updating Article with id=" + id
//     });
//   });
// };

// Delete Article
// exports.delete = (req, res) => {
//   const id = req.params.id;
//   Article.destroy({
//     where: { id: id }
//   })
//   .then(num => {
//     if (num == 1) {
//       res.send({
//         message: "Article was deleted successfully!"
//       });
//     } else {
//       res.send({
//         message: `Cannot delete Article with id=${id}.`
//       });
//     }
//   })
//   .catch(err => {
//     res.status(500).send({
//       message: "Could not delete Article with id=" + id
//     });
//   });
// };