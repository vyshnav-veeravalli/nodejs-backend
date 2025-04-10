const errorHandler = (error, req, res, next) => {
    console.log("Error: ", error.message);
    res.status(500).json({error: "everything went worse"});
    throw new Error("Something bad happened");

};

module.exports = errorHandler;  