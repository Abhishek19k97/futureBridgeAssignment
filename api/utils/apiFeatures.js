class APIfeatures{
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  filter() {
    const queryObj = { ...this.queryStr };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];

    excludedFields.forEach(el => delete queryObj[el]);

    // ADVANCED FILTERING
    let queryStr = JSON.stringify(queryObj);
    // TO ADD $ SIGN IN FRONT OF OPERATORS
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    this.query.find(JSON.parse(queryStr));

    return this;
  }
  sort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy)
    } else {
      // DEFAULT SORTING
      this.query = this.query.sort('-crearedAt')
    }
    return this;
  }
  limitFields() {
    if (this.queryStr.fields) {
      const fields = this.queryStr.fields.split(',').join(' ');
      this.query = this.query.select(fields)
    } else {
      // DEFAULT SORTING
      this.query = this.query.select('-__v')
    }
    return this;
  }
  paginate() {
    const page = this.queryStr.page * 1 || 1;
    const limit = this.queryStr.limit * 1 || 100; 
    const skip = (page - 1) * limit

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }

};

module.exports = APIfeatures;