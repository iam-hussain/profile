import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactSection() {
    return (
        <div className="w-full p-8 mx-auto">
            <div className="flex items-center gap-2 mb-4">
                <Send className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-500 uppercase">Contact</span>
            </div>
            <h2 className="mb-8 text-3xl font-bold">Let's Get in Touch!</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Card className="shadow-md">
                    <CardContent className="flex items-center p-4">
                        <Phone className="w-8 h-8 mr-4 text-primary" />
                        <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium">+1 840 841 25 69</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-md">
                    <CardContent className="flex items-center p-4">
                        <Mail className="w-8 h-8 mr-4 text-primary" />
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium uppercase">andrew@website.com</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-md md:col-span-2">
                    <CardContent className="flex items-center p-4">
                        <MapPin className="w-8 h-8 mr-4 text-primary" />
                        <div>
                            <p className="text-sm text-gray-500">Address</p>
                            <p className="font-medium">Los Angeles, California, USA</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}