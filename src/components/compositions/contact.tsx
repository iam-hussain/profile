import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function Contact() {
    return (
        <div className="flex flex-col gap-12 px-6 py-12 pb-20" id="contact">
            <div className="flex flex-col items-start w-auto gap-4">
                <div className='flex items-center justify-center w-auto gap-2 px-2 py-1 align-middle border rounded-md'>
                    <Send />
                    <span className="text-sm font-medium uppercase text-foreground/60">Contact</span>
                </div>
                <h2 className="text-3xl font-bold">Let's Get in Touch!</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="p-2 rounded-md">
                    <CardContent className="flex items-center gap-6 p-4">
                        <Phone className="w-8 h-8 text-foreground" />
                        <div>
                            <p className="text-sm text-foreground/90">Phone</p>
                            <p className="font-medium">+91 9629 180060</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="p-2 rounded-md">
                    <CardContent className="flex items-center gap-6 p-4">
                        <Mail className="w-8 h-8 text-foreground" />
                        <div>
                            <p className="text-sm text-foreground/90">Email</p>
                            <p className="font-medium uppercase">itsjakirhussain@gmail.com</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="p-2 rounded-md md:col-span-2">
                    <CardContent className="flex items-center gap-6 p-4">
                        <MapPin className="w-8 h-8 text-foreground" />
                        <div>
                            <p className="text-sm text-foreground/90">Address</p>
                            <p className="font-medium">Bangalore, Karnataka, India</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}