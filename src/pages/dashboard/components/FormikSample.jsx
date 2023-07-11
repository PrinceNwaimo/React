import React from "react";
import {Formik,Form, Field,ErrorMessage} from "formik";

const UserForm = () => {
    const initialData ={
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    }
    return(
        <div>
            <Formik
            initialValues={{firstname: initialData.firstname,lastName:initialData.lastName,email:" ",
                password:initialData.password, confirmPassword:initialData.confirmPassword}}
                validate={(values)=> {
                const errors = {};
                !values.lastName ? errors.lastName ='Required'
                :values.lastName.length < 2 ? errors.lastName ='Invalid last name'
                :values.password ? errors.password ='required'
                :values.password.length < 8 ? errors.password ='unsafe password'
                :values.password !== values.confirmPassword ? 'Passwords Not Compatible'
                :!values.firstName? errors.firstname = 'Required'
                :values.firstName.length < 2 ? errors.firstname = 'Invalid First Name'
                :! values.email ? errors.email = 'Required'
                :!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)? errors.email ='Invalid email address'
                :errors.null='';
                   return errors
                 }}
                onSubmit= {(values,{setSubmitting}) => {
                    setTimeout(()=> {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    },400)
                    }}
            >
            {/*    if(!values.firstName){*/}
            {/*        errors.firstname ='required';*/}
            {/*    }*/}
            {/*    else if(values.firstName.length <2){*/}
            {/*        errors.firstname = 'Invalid first name';*/}
            {/*    }*/}
            {/*    if (!values.email){*/}
            {/*        errors.email = 'required';*/}
            {/*    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)? errors.email ='Invalid email address'*/}
            {/*        :*/}
            {/*    ){*/}
            {/*        errors.email = 'invalid email address';*/}
            {/*    }*/}
            {/*    return errors;*/}
            {/*    }*/}
            {/*}*/}
                {({
                    values,
                    handleChange,
                    isSubmitting,
                    errors,
                    handleSubmit,
                    touched
                }) => (
                <Form onSubmit={handleSubmit}>
                    <div className='fName'>
                    <Field type="text" placeholder="FirstName" onChange={handleChange}/>
                        {errors.firstName && errors.touched && errors.firstName}
                    </div>
                    <div className='lName'>
                    <Field type="text" placeholder="LastName" onChange={handleChange}/>
                        {errors.lastName && errors.touched && errors.lastName}
                    </div>
                    <div className='User'>
                    <Field type="text" placeholder="UserName" onChange={handleChange}/>
                        {errors.userName && errors.touched && errors.userName}
                    </div>
                    <div className='password'>
                    <Field type="text" placeholder="Password" onChange={handleChange}/>
                        {errors.password && errors.touched && errors.password}
                    </div>
                    <div className='email'>
                    <Field type="text" placeholder="Email" onChange= {handleChange}/>
                        {errors.email && errors.touched && errors.email}
                    </div>
                    <div className='button'>
                        <button type ="submit" disabled={isSubmitting}>Submit</button>
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    )
}
export default UserForm