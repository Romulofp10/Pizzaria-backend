import prismaClient from "../../../prisma";

interface DetailRequest{
    order_id: string
}

class DetailsOrderService{
    async execute({order_id}:DetailRequest){
        const items = await prismaClient.item.findMany({
            where:{
                order_id: order_id
            }
        })

        return items
    }
}

export{ DetailsOrderService}