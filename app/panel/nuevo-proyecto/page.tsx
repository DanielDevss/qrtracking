"use client"
import AppHeader from "@/components/panel/app-header";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formCreateProjectSchema } from "@/schema/project.schema";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function NewProject () {

    const form = useForm<z.infer<typeof formCreateProjectSchema>>({
        resolver: zodResolver(formCreateProjectSchema),
        defaultValues:{
            name: ""
        }
    })

    return (
        <>
            <AppHeader title="Nuevo proyecto" />

            <Form
                {...form} 
            >
                <form onSubmit={form.handleSubmit((data) => console.table(data))}>
                    <FormField
                        name="name"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Nombre del proyecto</FormLabel>
                                <FormControl>
                                    <Input placeholder="Escribe el nombre con el que relaccionaras tu proyecto" {...field} />
                                </FormControl>
                            </FormItem>
                        )} 
                    />

                    <footer className="mt-5">
                        <Button>Guardar proyecto</Button>
                    </footer>
                </form>
            </Form>
        </>
    )
}