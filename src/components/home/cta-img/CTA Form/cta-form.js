import React from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";


const ReservationForm = ({name, setName, email, setEmail, phone, setPhone, numOfGuest, setNumOfGuest, date, setDate, time, setTime, specialRequest, setSpecialRequest, errors,addForm, reservation, load, setload, touched, handleBlur}) => {

    return (
        <form className='home__cta-img__reservations__form' onSubmit={(e) => { e.preventDefault(); addForm() }}>
            {load ?

                <div>
                    {reservation.slice(-1).map(item => (
                        <Alert action={
                            <Button onClick={() => setload(false)}> X </Button>
                        } severity="success" >
                            Thank You for setting your reservation {item.name}. Your reservation is set for {item.numOfGuest} guest at {item.time} on {item.date}    </Alert>
                    ))}
                </div> :

                <>

                    <h3 className='home__cta-img__reservations__form__title'>Reservation</h3>
                    <p className='home__cta-img__reservations__form__text'>Pull up a chair and stay a while!  We’re excited to offer both indoor and outdoor seating weather permitting. Book your table now, we'll love to have you!</p>
                    <div className='home__cta-img__reservations__form__input-box'>
                        <input className='home__cta-img__reservations__form__input-box__input' placeholder='Full name' name="name" type='text' value={name} onChange={(e) => setName(e.target.value)} onBlur={handleBlur} />
                        {errors.name && touched.name && errors.name }

                    </div>


                    <div className='home__cta-img__reservations__form__input-section'>

                        <div className='home__cta-img__reservations__form__input-section__input-box' >
                            <input onBlur={handleBlur} className='home__cta-img__reservations__form__input-section__input-box__input' placeholder="Email" type='email' values={email} name='email' onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && touched.email && errors.email}

                        </div>


                        <div className='home__cta-img__reservations__form__input-section__input-box'>
                            <input className='home__cta-img__reservations__form__input-section__input-box__input' placeholder="Phone Number" type='tel' name='phone' values={phone} onChange={(e) => setPhone(e.target.value)} onBlur={handleBlur} />
                            {errors.phone && touched.phone && errors.phone}
                       
                        </div>

                    </div>

                    <div className='home__cta-img__reservations__form__input-box'>
                        <input className='home__cta-img__reservations__form__input-box__input' placeholder="NUmber of guest" type='number'name='numOfGuest' values={numOfGuest} onChange={(e) => setNumOfGuest(e.target.value)} onBlur={handleBlur} />
                        {errors.numOfGuest && touched.numOfGuest && errors.numOfGuest}
                    </div>

                    <div className='home__cta-img__reservations__form__input-section'>


                        <div className='home__cta-img__reservations__form__input-section__input-box'>
                            <input className='home__cta-img__reservations__form__input-section__input-box__input' type='date' name='date' values={date} onChange={(e) => setDate(e.target.value)} onBlur={handleBlur} />
                            {errors.date && touched.date && errors.date ? <Alert severity="error">{errors.date && touched.date && errors.date }</Alert>:null}

                        </div>

                        <div className='home__cta-img__reservations__form__input-section__input-box'>
                            <input className='home__cta-img__reservations__form__input-section__input-box__input' type='time' value={time} onChange={(e) => setTime(e.target.value)} />
                        </div>
                    </div>


                    <div className='home__cta-img__reservations__form__input-box' >
                        <textarea className='home__cta-img__reservations__form__input-box__input' placeholder="Any special request" value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} />
                    </div>

                    <button className='home__cta-img__reservations__form__input-box__btn'>Submit Reservation</button>

                </>
            }

        </form>

    )
}

export default ReservationForm