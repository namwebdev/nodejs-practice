const checkEmpty = (req, res, next) => {
  const { name, amount, price, sale } = req.body;
  if (!name) {
    res.status(400).send("Name is required");
    return;
  }
  if (!amount) {
    res.status(400).send("Amount is required");
    return;
  }
  if (!price) {
    res.status(400).send("Price is required");
    return;
  }
  if (!sale) {
    res.status(400).send("Sale is required");
    return;
  }
  next();
};

const checkValidName = (req, res, next) => {
  const { name } = req.body;
  if (name.length >= 5 && name.length <= 255) next();
  else
    res
      .status(400)
      .send(
        "Name must be at least 5 characters and not more than 255 characters"
      );
};

const checkValidAmount = (req, res, next) => {
  const { amount } = req.body;
  if (amount <= 100) next();
  else res.status(400).send("Amount must not be more than 100");
};

const checkValidSale = (req, res, next) => {
  const { price, sale } = req.body;
  if (sale < price) next();
  else res.status(400).send("Sale cannot be greater than Price");
};

module.exports = {
  checkEmpty,
  checkValidName,
  checkValidAmount,
  checkValidSale,
};
