'use client'

import { HiArrowNarrowRight } from "react-icons/hi"
import { SectionTitle } from "../section-title"
import { Button } from '@/app/components/button'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const ContactFormSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    message: z.string().min(5).max(500),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export const ContactForm = () => {

    const { handleSubmit, register} = useForm<ContactFormData>({
        resolver: zodResolver(ContactFormSchema)
    })

     const onSubmit = (data: ContactFormData) => {
        console.log(data)
    }

    return (
        <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
            <div className="w-full max-w-[420px] mx-auto">
                <SectionTitle
                    subtitle="contact"
                    title="Let's work together? Contact me"
                    className="items-center text-center"
                />

            <form 
                className="mt-12 w-full flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
                >
                <input
                    placeholder="Name"
                    className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-500"
                    {...register('name')}
                />
                <input
                    placeholder="E-mail"
                    type="email"
                    className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-500"
                    {...register('email')}
                />
                <textarea
                    placeholder="Message"
                    className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-500"
                    maxLength={500}
                    {...register('message')}
                /> 

                <Button className="w-max mx-auto mt-6 shadow-button">
                    Send Message
                    <HiArrowNarrowRight size={18} />
                </Button>              
            </form>
            </div>
        </section>
    )
}


