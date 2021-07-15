import React from 'react'
import style from './FormRegistration.module.css'
import {useForm} from 'react-hook-form'

const FormRegistration = () => {
    const { register, handleSubmit, formState: { errors, isDirty, isValid  } } = useForm({ mode: "onChange" });
    const onSubmit = (data) => console.log(data);

    return (
        <div className={style.moduleSignUp}>
            <h1>Create a new account</h1>

            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                
                <div className={style.blockInput}>
                    <input {...register('name', {required: true, pattern: /^[A-Za-z]+$/ })} placeholder={"Enter your name"} className={style.input} />
                </div>
                {errors.name && errors.name.type === "pattern" && <span className={style.messageError}>Please enter a valid name</span>}
                {errors.name && errors.name.type === "required" && <span className={style.messageError}>This is required</span>}

                <div className={style.blockInput}>
                    <input {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} placeholder={"Email"} className={style.input} />
                </div>
                {errors.email && errors.email.type === "pattern" && <span className={style.messageError}>Please enter a valid email</span>}
                {errors.email && errors.email.type === "required" && <span className={style.messageError}>This is required</span>}

                <div className={style.blockInput}>
                    <input {...register('password', { required: true, minLength: 6})} placeholder={"Password"} type={"password"} className={style.input} />
                </div>
                {errors.password && errors.password.type === "minLength" && <span className={style.messageError}>Password must contain at least 6 symbols</span>}
                {errors.password && errors.password.type === "required" && <span className={style.messageError}>This is required</span>}

                <div className={style.blockSelectCountry}>
                    <select required {...register('select', { required: true })}>
                        <option value="" disabled selected hidden>Select country</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesonto">Lesonto</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                    </select> 
                </div>
                {errors.select && <span className={style.messageError}>You must select your country</span>}

                <div className={style.blockSex}>
                    <input {...register('sex', { required: true } )} type={"radio"} />
                    {' '}
                    Male
                    <input {...register('sex', { required: true })} type={"radio"}  />
                    {' '}
                    Female
                </div>
                {errors.sex && <span className={style.messageError}>You must select the gender</span>}

                <div className={style.blockAccept}>
                    <input {...register('accept', { required: true })} type={"checkbox"} />
                    {' '}
                    Accept terms and conditions
                </div>
                {errors.accept && <span className={style.messageError}>You must accept the policies</span>}

                <div className={style.signUpButton}>
                    <button disabled={!isDirty || !isValid} type="submit">Sign up</button>
                </div>
            </form>

        </div>
    )
}

export default FormRegistration
