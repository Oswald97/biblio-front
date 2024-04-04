import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const AdherentCard = () => {
  return (
    <>
        <Card className="shadow-md max-w-lg cursor-pointer hover:scale-105">
            <CardContent className="p-4">
                <div className="flex items-center gap-4">
                    <Avatar className="size-12">
                        <AvatarFallback>CH</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-lg font-medium ">Cédric HAZOUME</p>
                        <p className="text-sm text-muted-foreground">chazoume</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </>
  )
}

export default AdherentCard