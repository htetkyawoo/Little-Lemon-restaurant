import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const BookingPage = ({ availableTime, setAvailableTime }) => {
  const [showAlert, setShowAlert] = useState(false);

  const bookingForm = useFormik({
    initialValues: {
      date: "",
      time: "",
      guest: "",
      occasion: "Birthday",
    },
    onSubmit: (value) => {
      setAvailableTime(prev => ({
        ...prev,
        ...value
      }));
      setShowAlert(true)
      bookingForm.resetForm();
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Please Select Date"),
      time: Yup.string().required("Please Select Time"),
      guest: Yup.number().required("Please Add Guest.").min(1, "Please Select between 1 to 10").max(10, "Please Select between 1 to 10"),
      occasion: Yup.string().required("Please Select Occasion"),
    }),
  });

  return (
    <>
      {showAlert && (
        <div id="alert" role="alert" className="container alert alert-success my-2">
          <p>Date : {availableTime.date}</p>
          <p>Time : {availableTime.time}</p>
          <p>Guest : {availableTime.guest}</p>
          <p>Occasion : {availableTime.occasion}</p>
        </div>
      )}
      <form role="form" className="form container" onSubmit={bookingForm.handleSubmit}>
        <div className="form-floating">
          <input
            {...bookingForm.getFieldProps("date")}
            className="form-control my-4"
            type="date"
            id="res-date"
            name="date"
          />
          <label htmlFor="res-date">Choose date</label>
          {bookingForm.touched.date && bookingForm.errors.date && (
            <p className="text-danger">{bookingForm.errors.date}</p>
          )}
        </div>
        <div className="form-floating">
          <select
            {...bookingForm.getFieldProps("time")}
            className="form-control my-4"
            name="time"
            id="res-time "
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor="res-time">Choose time</label>
          { bookingForm.touched.time &&bookingForm.errors.time && (
            <p className="text-danger">{bookingForm.errors.time}</p>
          )}
        </div>
        <div className="form-floating">
          <input
            {...bookingForm.getFieldProps("guest")}
            className="form-control my-4"
            name="guest"
            type="number"
            id="guests"
            min="1"
            max="10"
          />
          <label htmlFor="guests">Number of guests</label>
          {bookingForm.touched.guest && bookingForm.errors.guest && (
            <p className="text-danger">{bookingForm.errors.guest}</p>
          )}
        </div>

        <div className="form-floating">
          <select
            {...bookingForm.getFieldProps("occassion")}
            className="form-control my-4"
            name="occasion"
            id="occasion"
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <label htmlFor="occasion">Occasion</label>
          {bookingForm.touched.occasion &&bookingForm.errors.occasion && (
            <p className="text-danger">{bookingForm.errors.occasion}</p>
          )}
        </div>
        <input
          className="btn btn-primary form-control my-4"
          type="submit"
          value="Make Your reservation"
        />
      </form>
    </>
  );
};

export default BookingPage;
