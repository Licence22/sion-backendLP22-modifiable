const { Router } = require("express");

exports.allAccess = (req, res) => {
  res.status(200).send(
    
  );
};

exports.userBoard = (req, res) => {
  res.status(200);
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
