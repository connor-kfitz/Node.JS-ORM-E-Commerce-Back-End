const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET Tags
router.get('/', (req, res) => {
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [
        {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      },
    ],
  })
  .then((tagData) => {
    res.json(tagData);
  })
});

// GET Tag by ID
router.get('/:id', (req, res) => {
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: [
      {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    },
  ],
  })
  .then((tagData) => {
    res.json(tagData);
  })
});

// POST Tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      resjson(err);
    });
});

// PUT Tag
router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => {
      res.json(err);
    })
});

// DELETE Tag
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedTag) => {
    res.json(deletedTag);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
