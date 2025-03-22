import Booking from "../models/Booking.js";

// create new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Your tour is booked",
        data: savedBooking
      });
  } catch (err) {
    res
      .status(500)
      .json({
        success: true,
        message: "internal server error",
      });
  }
};

// get single booking
export const getBooking = async (req,res) => {
    const id = req.params.id

    try {
        const book = await Booking.findById(id)

        res
        .status(200)
        .json({
          success: true,
          message: "successful",
          data: book
        });

    }catch (err) {
        res
      .status(404)
      .json({
        success: true,
        message: "not found",
      });
    }
}
// get all booking
export const getAllBooking = async (req,res) => {

    try {
        const books = await Booking.find();

        res
        .status(200)
        .json({
          success: true,
          message: "successful",
          data: books
        });

    }catch (err) {
        res
      .status(500)
      .json({
        success: true,
        message: "internal server error",
      });
    }
}



// The async and await keywords in backend development (especially in Node.js) are used to handle asynchronous operations in a more readable and maintainable way compared to traditional callback functions or .then() chains.

// Key Concepts
// async Function:

// Declares a function as asynchronous.
// Always returns a promise.
// Inside the async function, you can use the await keyword.
// await:

// Pauses the execution of an async function until the promise resolves.
// Ensures sequential execution for dependent asynchronous tasks, avoiding "callback hell."
// Why Use async and await?
// Readable Code: Avoids deeply nested callback structures.
// Error Handling: Easier to use try-catch for error handling.
// Sequential Execution: Simplifies handling of tasks that must run in a specific order.
// Integration with Promises: Works seamlessly with promise-based APIs.
