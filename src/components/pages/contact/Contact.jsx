import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, MenuItem, TextField, ThemeProvider , Typography, createTheme } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext, useRef } from "react"
import { PackageContext } from "../../../context/PackageContext"
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'Yup';
import { services } from "../../../lists/services";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
  const { type } = useParams()
  let service = Number(type) > 0 && services.find( serv => serv.id === Number(type))
  const { yourPackage, setYourPackage } = useContext(PackageContext)
  const form = useRef();

  const {handleSubmit, handleChange, handleBlur, touched, values, errors, isSubmitting} = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      auth: false,
      info: false,
    },
    onSubmit: (values, action)=>{
      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
          Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Your message has been sent successfully!',
            text: 'We will get back to you as soon as possible',
            showConfirmButton: true
          })
      }, (error) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Oops!',
          text: 'Something went wrong!',
          showConfirmButton: true
        })
      });
      
      setYourPackage([]);
      action.resetForm();
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required().max(30),
      email: Yup.string().email().required(),
      phone: Yup.number().required(),
      message: Yup.string(),
      auth: Yup.bool().required().oneOf([true], 'This is a required field')
    })
  })
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <main id="contact">
      <section>
        <h3 className="section-title">Contact</h3>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="inputs-container">
            <ThemeProvider theme={darkTheme}>
            <TextField 
              type="text"
              name="name"
              label="Name"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name && touched.name ? true : false}
              helperText={errors.name && touched.name && errors.name}
              className="input"
            />
            <TextField 
              type="text"
              name="email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email ? true : false}
              helperText={errors.email && touched.email && errors.email}
              className="input"
            />
            <TextField 
              type="number"
              name="phone"
              label="Phone"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              error={errors.phone && touched.phone ? true : false}
              helperText={errors.phone && touched.phone && errors.phone}
              className="input"
            />
            </ThemeProvider>
            <textarea
              type="text"
              name="message"
              placeholder="Type your message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              className="textarea"
            ></textarea>
          </div>
          <div className="form-bottom">
            {
              Number(type) !== 0 && (
                <Accordion className="package-items">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{Number(type) > 0 ? 'Motivo' : 'Your Package'}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {
                      Number(type) > 0 ? (
                        <MenuItem>{service.name}</MenuItem>
                      ) : (
                        yourPackage.map( serv => {
                          return <MenuItem key={serv.id}>{serv.name}</MenuItem>
                        })
                      )
                    }
                  </AccordionDetails>
                </Accordion>
              )
            }
            <div className="terms">
                <FormControlLabel control={<Checkbox 
                    name="auth" 
                    sx={{color: '#fff'}}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.auth}
                />} className="checkbox-label" label="I consent to being contacted after submitting my details." />
                {
                  errors.auth && touched.auth && (
                    <span style={{display: 'block', color: '#D32F2F', fontSize: '12px', margin: '3px 30px 0'}}>{errors.auth}</span>
                  )
                }
                <br />
                <FormControlLabel control={<Checkbox 
                    name="info" 
                    sx={{color: '#fff'}}
                    onChange={handleChange}
                    value={values.info}
                />} className="checkbox-label" label="I agree to receive updates and new content to stay informed." />
            </div>
          </div>
          <Button type="submit" size="lg" variant="contained" disabled={isSubmitting} 
            sx={{
              textTransform: 'unset', 
              borderRadius: '10px',
              margin: '1rem auto',
              padding: '.5rem 2rem',
              fontSize: '18px'  
            }}>
            Send
          </Button>
        </form>
      </section>
    </main>
  )
}

export default Contact