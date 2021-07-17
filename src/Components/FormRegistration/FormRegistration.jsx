import React from 'react'
import style from './FormRegistration.module.css'
import { useForm } from 'react-hook-form'
import loader from './loader.gif'

const FormRegistration = (props) => {

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        props.activateSignUpMode()
        setTimeout(props.deActivateSignUpMode, 10000)
        console.log(data);
    }

    return (
        <div className={style.moduleSignUp}>
            <h1>Create a new account</h1>

            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>

                <div className={style.blockInputName}>
                    <input {...register('name', { required: true, pattern: /^[A-Za-z]+$/ })} placeholder={"Enter your name"} className={style.inputName} />
                    <div className={style.blockError}>
                        {errors.name && errors.name.type === "pattern" && <span className={style.messageError}>Please enter a valid name</span>}
                        {errors.name && errors.name.type === "required" && <span className={style.messageError}>This is required</span>}
                    </div>
                </div>

                <div className={style.blockInputEmail}>
                    <input {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} placeholder={"Email"} className={style.inputEmail} />
                    <div className={style.blockError}>
                        {errors.email && errors.email.type === "pattern" && <span className={style.messageError}>Please enter a valid email</span>}
                        {errors.email && errors.email.type === "required" && <span className={style.messageError}>This is required</span>}
                    </div>
                </div>

                <div className={style.blockInputPassword}>
                    <input {...register('password', { required: true, minLength: 6 })} placeholder={"Password"} type={"password"} className={style.inputPassword} />
                    <div className={style.blockError}>
                        {errors.password && errors.password.type === "minLength" && <span className={style.messageError}>Password must contain at least 6 symbols</span>}
                        {errors.password && errors.password.type === "required" && <span className={style.messageError}>This is required</span>}
                    </div>
                </div>

                <div className={style.blockSelectCountry}>
                    <select defaultValue="" required {...register('select', { required: true })}>
                        <option value="" disabled hidden >Select country</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesonto">Lesonto</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                    </select>
                    <div className={style.blockError}>
                        {errors.select && <span className={style.messageError}>You must select your country</span>}
                    </div>
                </div>

                <div className={style.blockSex}>
                    <div className={style.blockSelectSex}>
                        <input className={style.radio_item} id="radio_item_1" {...register('sex', { required: true })} type={"radio"} value={"Male"} />
                        <label htmlFor="radio_item_1">Male</label>
                        <input className={style.radio_item} id="radio_item_2" {...register('sex', { required: true })} type={"radio"} value={"Female"} />
                        <label htmlFor="radio_item_2">Female</label>
                    </div>
                    <div className={style.blockError}>
                        {errors.sex && <span className={style.messageError}>You must select the gender</span>}
                    </div>
                </div>

                <div className={style.blockAccept}>
                    <div className={style.blockSelectAccept}>
                        <input className={style.checkbox_item} id="checkbox_item_1" {...register('accept', { required: true })} type={"checkbox"} />
                        <label htmlFor="checkbox_item_1">Accept terms and conditions</label>
                    </div>
                    <div className={style.blockError}>
                        {errors.accept && <span className={style.messageError}>You must accept the policies</span>}
                    </div>
                </div>

                <div className={style.signUpButton}>
                    {!props.signUpMode &&
                        <button disabled={!isDirty || !isValid}>Sign up</button>
                    }
                    {props.signUpMode &&
                        <button disabled>
                            <img src={loader} alt="" />
                        </button>
                    }
                </div>
            </form>
        </div>
    )
}

export default FormRegistration
