import { useForm, ValidationError } from "@formspree/react";
import styles from "@/styles/style";
import React, { useState } from "react";



export default function ContactForm({ contactDetails }: { contactDetails: any }) {

    const key = (process.env.NEXT_PUBLIC_FORM) as any;

    /* API FORMSPREE */
    const [state, handleSubmit] = useForm(key);
    if (state.succeeded) {
        return <p className={`${styles.paragraph} ml-2`}>Thanks for your submission!</p>;
    }


    return (
        <form
        className={`flex justify-center items-center flex-col border-2 border-rose-500 rounded-md py-10 px-20 font-poppins font-normal text-dimWhite text-[16px] leading-[24px] bg-indigo-500/10 shadow-lg shadow-indigo-500/50 w-[70%]`}
        onSubmit={handleSubmit}
        >
        <div className="flex flex-col text-base">
            <label htmlFor="email">{contactDetails?.email}</label>
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
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
        </div>
        <div className="flex flex-col pt-5 ">
            <label htmlFor="phone">{contactDetails?.phone}</label>
            <input
            className="mt-1 block  w-64 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            id="phone"
            type="phone number"
            name="phone"
            pattern="[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{10}|\d{13})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{13}|\d{17}
                    "
            placeholder="(+593) 988999988"
            required
            />
        </div>
        <div className="flex flex-col pt-5">
            <div className="flex flex-col">
            <label htmlFor="firstName">{contactDetails?.firstName}</label>
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
            </div>
            <div className="flex flex-col pt-5">
            <label htmlFor="lastName">{contactDetails?.lastName}</label>
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
            </div>
        </div>
        <div className="flex flex-col  pt-5">
            <label htmlFor="message">{contactDetails?.message}</label>
            <textarea
            id="message"
            name="message"
            className="mt-1 block w-64 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            placeholder="Write your message here"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div className="flex flex-col  pt-8">
            <button
            type="submit"
            disabled={state.submitting}
            className={`${styles} py-2 px-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none rounded-[10px] hover:translate-x-2  transition-all ease-linear cursor-pointer`}
            >
            {contactDetails?.submit}
            </button>
            <ValidationError errors={state.errors} />
        </div>
        </form>
    );
}