const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET Category
router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }
  })
  .then((categoryData) => {
    res.json(categoryData);
  })
});

// GET Category by ID
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id).then((categoryData) => {
    res.json(categoryData);
  })
});

// POST Category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      resjson(err);
    });
});

// PUT Category
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => {
      res.json(err);
    })
});

// DELETE Category
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
