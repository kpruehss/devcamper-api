const Bootcamp = require('../models/Bootcamp');

// @desc Get all bootcamps
// @route GET /api/va/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc Get single bootcamp
// @route GET /api/va/bootcamps/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: 'Bootcamp not found',
      });
    }

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
    });
  }
};

// @desc Create a bootcamp
// @route POST /api/va/bootcamps
// @access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc Update a bootcamp
// @route PUT /api/va/bootcamps/:id
// @access private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: 'Bootcamp not found',
      });
    }
    res.status(202).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Bootcamp not found',
    });
  }
};

// @desc Delete a bootcamp
// @route DELETE /api/va/bootcamps/:id
// @access private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: 'Bootcamp not found',
      });
    }

    res.status(204).json({ success: true, data: {} });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Bootcamp not found',
    });
  }
};
