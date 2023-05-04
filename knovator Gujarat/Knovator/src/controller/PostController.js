import asyncHandler from 'express-async-handler';

// ! MODEL

/**
 * @POST /api/edit/upload
 * ?DESC UPLOADED IMAGE AND GET $ID AND SAVE TEMPLATE ON DATABASE
 * !access  PRIVATE
 * TODO: UPDATE I HAVE TO CHANGE ACCORDING TO PERMISSION
 */

export const uploadController = asyncHandler(async (req, res) => {
  const { file, user } = req;

  if (!file) {
    return res.status(400).json({ message: 'file is required' });
  }

  try {
    // ! DATA
    res.ok(newTemplate);
  } catch (err) {
    res.badRequest({
      message: 'create issue ' + err.message,
    });
  }
});

/**
 * @GET /api/edit/get/:id
 * ?DESC get Image
 * !access  PUBLIC
 * TODO: don't have idea but some where permission issues need to be improve
 */

export const getByTemplateIdController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
  } catch (err) {
    res.badRequest({
      message: 'create issue ' + err.message,
    });
  }
});

/**
 * @POST /api/edit/render/:id
 * ?DESC GIVE ID OF UPLOADED IMAGE ID WITH EFFECTID
 * !access  PUBLIC
 * TODO: UPDATE I HAVE TO CHANGE ACCORDING TO PERMISSION
 */

export const renderController = asyncHandler(async (req, res) => {
  const {
    file,
    user,
    body: { photoId, effectId, tid },
  } = req;

  try {
  } catch (err) {
    res.badRequest({
      erorr: 'BACKEND axios ' + err,
    });
  }
});
