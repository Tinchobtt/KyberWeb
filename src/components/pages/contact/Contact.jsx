import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, MenuItem, TextField, ThemeProvider , Typography, createTheme } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext } from "react"
import { PackageContext } from "../../../context/PackageContext"
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'Yup';
import { services } from "../../../../services";
import Swal from "sweetalert2";

const Contact = () => {
  const { type } = useParams()
  let service = Number(type) > 0 && services.find( serv => serv.id === Number(type))
  const { yourPackage, setYourPackage } = useContext(PackageContext)

  const {handleSubmit, handleChange, handleBlur, touched, values, errors, isSubmitting} = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      auth: false,
      info: false
    },
    onSubmit: (values, action)=>{
      //Armado de Mail
      console.log(values.auth)
      //Seteado del array yourPackage
      Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Your message has been sent successfully!',
        text: 'We will get back to you as soon as possible',
        showConfirmButton: true
      })
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
        <form onSubmit={handleSubmit}>
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
              <FormControlLabel control={<Checkbox 
                  name="info" 
                  sx={{color: '#fff'}}
                  onChange={handleChange}
                  value={values.info}
              />} className="checkbox-label" label="I agree to receive updates and new content to stay informed." />
          </div>
          <Button type="submit" variant="contained" size="lg" disabled={isSubmitting}>Send</Button>
        </form>
      </section>
    </main>
  )
}

export default Contact