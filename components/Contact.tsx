import styles from "@/styles/style";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';




export default function Contact() {

    /* API FORMSPREE */
    const [state, handleSubmit] = useForm("xpzvznlz");

    if (state.succeeded) {
        return <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Thanks for your submission!</p>;
    }

    /* Validation Phone Number */
    const [Phone, setPhone] = useState('');
    const [valid, setValid] = useState(true);

    const handleChange = (value: any) =>{
        setPhone(value);
        setValid(validatePhone(value));
    };

    const validatePhone = (phone: string) =>{
        const phonePattern = /^\d{12}$/;
        return phonePattern.test(phone);
    }

    return (

        <form onSubmit={handleSubmit} className={`flex justify-center items-center flex-col border-2 border-rose-500 rounded-md py-10 px-20 font-poppins font-normal text-dimWhite text-[16px] leading-[24px] bg-indigo-500/10 shadow-lg shadow-indigo-500/50 w-[70%]`}>

        <div className="flex flex-col text-base">
            <label htmlFor="email">Email</label>
            <input
                className="mt-1 block w-64 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="yourmail@yahoo.com"
                required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex flex-col pt-5 ">
            <label htmlFor="phone">Phone</label>
            <PhoneInput
            inputClass="text-black"
                country={'ec'}
                onChange={handleChange}
                inputProps={
                    {require: true,}
                }
                inputStyle={{
                    width:"260px"
                }}
                value={Phone}
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div className="flex flex-col pt-5">
            <div className="flex flex-col">
                <label htmlFor="firstName">First Name</label>
                <input
                    className="mt-1 block w-64 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    id="firstName"
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    placeholder="your name"
                    required
                />
                <ValidationError prefix="firstName" field="firstName" errors={state.errors} />
            </div>
            <div className="flex flex-col pt-5">
                <label htmlFor="lastName">Last Name</label>
                <input
                    className="mt-1 block w-64 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    id="lastName"
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="your last name"
                    required
                />
                 <ValidationError prefix="lastName" field="lastName" errors={state.errors} />
            </div>
        </div>
        <div className="flex flex-col  pt-5">
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                className="mt-1 block w-64 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="Write your message here" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <div className="flex flex-col  pt-8">
            <button
                type="submit"
                disabled={state.submitting}
                className={`${styles} py-2 px-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none rounded-[10px] hover:translate-x-2  transition-all ease-linear cursor-pointer`}>Submit</button>
                <ValidationError errors={state.errors} />
        </div>
        </form>



    );
}

















/* const Contact: React.FC = () => (



    <form className="flex justify-center items-center flex-col border-2 border-rose-500 rounded-md py-8 px-8 font-poppins font-normal text-dimWhite text-[16px] leading-[24px] ">

        <div className="flex flex-col text-base">
            <label htmlFor="frm-email">Email</label>
            <input
                className="mt-1 block w-96 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                id="frm-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="yourmail@yahoo.com"
                required
            />
        </div>
        <div className="flex flex-col pt-5 ">
            <label htmlFor="frm-phone">Phone</label>
            <input
                className="mt-1 block  w-96 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                id="frm-phone"
                type="text"
                name="phone"
                autoComplete="tel"
                placeholder="(+593) 0988999988"
                required
            />
        </div>
        <div className="flex flex-col pt-5">
            <div className="flex flex-col">
                <label htmlFor="frm-first">First Name</label>
                <input
                    className="mt-1 block w-96 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    id="frm-first"
                    type="text"
                    name="first"
                    autoComplete="given-name"
                    placeholder="your name"
                    required
                />
            </div>
            <div className="flex flex-col pt-5">
                <label htmlFor="frm-last">Last Name</label>
                <input
                    className="mt-1 block w-96 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    id="frm-last"
                    type="text"
                    name="last"
                    autoComplete="family-name"
                    placeholder="your last name"
                    required
                />
            </div>
        </div>
        <div className="flex flex-col  pt-5">
            <label htmlFor="frm-message">Message</label>
            <textarea
                id="frm-message"
                name="message"
                className="mt-1 block w-96 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="Write your message here"></textarea>
        </div>
        <div className="flex flex-col  pt-8">
            <button
                type="submit"
                className={`${styles} py-2 px-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none rounded-[10px] hover:translate-x-2  transition-all ease-linear cursor-pointer`}>Submit</button>
        </div>
    </form>
);


export default Contact; */