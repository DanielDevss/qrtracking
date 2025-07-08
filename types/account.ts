import z from "zod";

export const formCreateSchema = z.object({
    name: z.string().min(6, "Ingresa un nombre y un apellido"),
    email: z.string().email("Este formato de correo no es válido"),
    password: z.string().min(8, "Ingresa por lo menos 8 carácteres"),
    confirmPassword: z.string()
})
.refine(values => values.password == values.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"]
})