import React, { createRef } from "react";

const BookingPage = ({ availableTime, setAvailableTime }) => {
  const dateRef = createRef();
  const resRef = createRef();
  const guestRef = createRef();
  const occasionRef = createRef();

  function handleChange(e) {
    setAvailableTime((prev) => ({
      ...prev,
      date: dateRef.current.value,
      time: resRef.current.value,
      guest: guestRef.current.value,
      occasion: occasionRef.current.value,
    }));
  }

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <>
        {Object.values(availableTime).map((value, index) => <p key={index}>{value}</p>)}
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input onChange={handleChange} ref={dateRef} type="date" id="res-date" name="date"/>
        <label htmlFor="res-time" >Choose time</label>
        <select ref={resRef} onChange={handleChange} name="time" id="res-time ">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
        onChange={handleChange}
        name="guest"
          ref={guestRef}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={"1"}
        />
        <label htmlFor="occasion">Occasion</label>
        <select name="occasion" ref={occasionRef} onChange={handleChange} id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingPage;
