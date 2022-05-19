const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const movieData = [
  {
    "_id": "5c8a1d5b0190b214360dc057",
    "name": "avengers",
    "release": "2012",
    "rating": "3"
  },  
  {
    "_id": "5c8a1d5b0190b21ge60dc057",
    "name": "harry potter",
    "release": "2007",
    "rating": "4"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "The Dark Knight",
    "release": "2012",
    "rating": "5"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "Spiderman",
    "release": "2002",
    "rating": "4"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "Deadpool",
    "release": "206",
    "rating": "2"
  },  
  {
    "_id": "5c8a1d5b0190b214360dc057",
    "name": "avengers",
    "release": "2012",
    "rating": "3"
  },  
  {
    "_id": "5c8a1d5b0190b21ge60dc057",
    "name": "harry potter",
    "release": "2007",
    "rating": "4"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "The Dark Knight",
    "release": "2012",
    "rating": "5"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "Spiderman",
    "release": "2002",
    "rating": "4"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "Deadpool",
    "release": "206",
    "rating": "2"
  },  
  {
    "_id": "5c8a1d5b0190b214360dc057",
    "name": "avengers",
    "release": "2012",
    "rating": "3"
  },  
  {
    "_id": "5c8a1d5b0190b21ge60dc057",
    "name": "harry potter",
    "release": "2007",
    "rating": "4"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "The Dark Knight",
    "release": "2012",
    "rating": "5"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "Spiderman",
    "release": "2002",
    "rating": "4"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "Deadpool",
    "release": "206",
    "rating": "2"
  },  
  {
    "_id": "5c8a1d5b0190b214360dc057",
    "name": "avengers",
    "release": "2012",
    "rating": "3"
  },  
  {
    "_id": "5c8a1d5b0190b21ge60dc057",
    "name": "harry potter",
    "release": "2007",
    "rating": "4"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "The Dark Knight",
    "release": "2012",
    "rating": "5"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "Spiderman",
    "release": "2002",
    "rating": "4"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "Deadpool",
    "release": "206",
    "rating": "2"
  },  
  {
    "_id": "5c8a1d5b0190b214360dc057",
    "name": "avengers",
    "release": "2012",
    "rating": "3"
  },  
  {
    "_id": "5c8a1d5b0190b21ge60dc057",
    "name": "harry potter",
    "release": "2007",
    "rating": "4"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "The Dark Knight",
    "release": "2012",
    "rating": "5"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "Spiderman",
    "release": "2002",
    "rating": "4"
  },  
  {
    "_id": "5c8a1d5b01760b214360dc057",
    "name": "Deadpool",
    "release": "206",
    "rating": "2"
  }  
]

exports.getAllMovies = async (req, res, next) => {
  console.log('inside controller')
  const doc = [...movieData];
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: doc.length,
    data: doc
  })
};
