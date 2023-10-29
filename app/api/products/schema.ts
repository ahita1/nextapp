import { z } from 'zod'

const proSchema = z.object({
    proName: z.string().min(3),
    price : z.number().min(19).max(1000)
})

export default proSchema