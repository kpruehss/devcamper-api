// @desc Get all bootcamps
// @route GET /api/va/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc Get single bootcamp
// @route GET /api/va/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Display bootcamp ${req.params.id}` });
};

// @desc Create a bootcamp
// @route POST /api/va/bootcamps
// @access Private
exports.createBootcamp = (req, res, next) => {
  res.status(201).json({ success: true, msg: 'Create new bootcamp' });
};

// @desc Update a bootcamp
// @route PUT /api/va/bootcamps/:id
// @access private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(201)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

// @desc Delete a bootcamp
// @route DELETE /api/va/bootcamps/:id
// @access private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(201)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
