import React, { useState } from "react";
import { Formik } from 'formik'
import ReservationForm from "./cta-form";
import { Alert } from "@mui/material";



const Validation = () => {
    const [name, setNAme] = useState('')

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [numOfGuest, setNumOfGuest] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [specialRequest, setSpecialRequest] = useState('')
    const [reservation, setReversation] = useState([])
    const [load, setload] = useState(false)


    const addForm = () => {

        const newForm = {
            name: name,
            email: email,
            phone: phone,
            numOfGuest: numOfGuest,
            date: date,
            time: time,
            specialRequest: specialRequest
        }
        setload(true)
        setReversation(reservation.concat(newForm))
        setNAme('')
        setEmail('')
        setPhone('')
        setNumOfGuest('')
        setDate('')
        setTime('')
        setSpecialRequest('')

        // setTimeout(() => {
        //     setload(false)
        // }, 5000)
    }

   return(
    <Formik
    initialValues={{ name ,email, phone}}
    validate={() => {
        const errors = {};
        if (!name) {
            errors.name = <Alert severity="error" >Your name is required!</Alert>
        } else if (
            !/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name)
        ) {
            errors.name = <Alert severity="info" >Must include your full name</Alert>
        }
        if (!email) {
            errors.email = <Alert severity="error" >Your email is required!</Alert>
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
            errors.email = <Alert severity="info" >Invaild email format</Alert>
        }
        if (!phone) {
            errors.phone = <Alert severity="error">Phone Number is required</Alert>
        } else if (
            !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/g.test(phone)
        ) {
            errors.phone = <Alert severity="info">Invaild format! ex: xxx-xxx-xxxx</Alert>
        }
        if (!numOfGuest){
            errors.numOfGuest = <Alert severity="error">The number of guest is required</Alert>
        } else if (
            !/\b([1-9]|10)\b/.test(numOfGuest)
        ) {
            errors.numOfGuest = <Alert severity="info">"10 guest per reservation!"</Alert>
        }
        if (!date){
            errors.date = <Alert severity="error">Arrival date is required!</Alert>
        } else if (
            !/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g.test(date)
        ) {
            errors.date = <Alert severity="info">Only accept dates here!</Alert>
        }
        if (!time){
            errors.time = <Alert severity="error">Arrival Time is required!</Alert>
        } else if (
            !/([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?/.test(time)
        ) {
            errors.time = <Alert severity="info">We dont accepted reservations after 11PM</Alert>
        }
        return errors
    }}
    onSubmit={(values, { setSubmitting}) => {
        setTimeout(() => {
            console.log(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 400)
    }}
    
    >
        {({
            errors, touched, handleBlur
        }) => (
            <ReservationForm  

            name={name}
            setName={setNAme}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            numOfGuest={numOfGuest}
            setNumOfGuest={setNumOfGuest}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            specialRequest={specialRequest}
            setSpecialRequest={setSpecialRequest}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            addForm={addForm}
            load={load}
            setload={setload}
            reservation={reservation}
            setReversation={setReversation}
            
            />
    
        )}


    </Formik>
   )

}

export default Validation