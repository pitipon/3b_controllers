
// Create and Save a new one
export const create = (req, res) => {
  res.json({
    name: 'milk',
    price: 20,
    _id: '3434234233434'
  });
};

// Retrieve all data from the database.
export const findAll = (req, res) => {
  res.json([{
    name: 'milk',
    price: 20,
    _id: '3434234233434'
  },{
    name: 'coke',
    price: 25,
    _id: '756564522423423'
  }]);
};

// Find a single data with an id
export const findOne = (req, res) => {

  const id = req.params.id
  res.json({
    name: 'milk',
    price: 20,
    _id: id
  });
};

// Update a data by the id in the request
export const updateOne = (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const price = req.body.price

  res.json({
    name: body_name,
    price: body_price,
    _id: id
  });
};

// Delete a data with the specified id in the request
export const deleteOne = (req, res) => {
  const id = req.params.id
  res.json({
    name: 'milk',
    price: 20,
    _id: id
  });
};

