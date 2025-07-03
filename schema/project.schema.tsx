import z from "zod"

export const formCreateProjectSchema = z.object({
    name: z.string().min(4, {
        message: "El nombre del proyecto debe tener al menos 4 carácteres."
    })
})