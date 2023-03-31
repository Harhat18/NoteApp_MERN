

import NoteModel from "../models/note"

export const getNotes:  = (req, res, next) => {
  try {
    //throw Error("olmadı!");
    const notes = NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};
