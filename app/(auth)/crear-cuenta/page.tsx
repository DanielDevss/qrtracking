"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formCreateSchema } from "@/types/account";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";

export default function CreateAccount () {

    const form = useForm<z.infer<typeof formCreateSchema>>({
        resolver: zodResolver(formCreateSchema),
        defaultValues: {
            name : "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const onSubmit = (data: z.infer<typeof formCreateSchema>) => {
        console.table(data)
    }

    return (
        <>
            <main>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre completo <span className="text-gray-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Escribe tu nombre completo" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo electrónico <span className="text-gray-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Escribe tu correo electrónico" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contraseña <span className="text-gray-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Ingresa una contraseña segura" />
                                    </FormControl>
                                    <FormDescription>La contraseña debe tener minimo 8 carácteres.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirmar contraseña <span className="text-gray-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Repite la contraseña" />
                                    </FormControl>
                                    <FormDescription>La contraseña debe coincidir con la de arriba.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex flex-col space-y-2">
                            <Button type="submit" size={"lg"}>Listo, Crear cuenta</Button>
                            <Button variant="secondary" type="button" size={"lg"} asChild>
                                <Link href="/iniciar-sesion">Ya tengo una cuenta</Link>
                            </Button>
                        </div>
                    </form>
                </Form>
            </main>
        </>
    )
}