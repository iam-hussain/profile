
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    UserPen,
    BriefcaseBusiness,
    GitPullRequest,
    Handshake,
    Sun,
    SendHorizontal,
    Github,
    Linkedin,
    Twitter
} from 'lucide-react';

const SideBar = () => {
    return (
        <div className="flex items-start justify-center align-middle">
            <div className="flex flex-col-reverse items-center justify-center h-auto gap-5 lg:flex-row ">
                <div className="flex h-full gap-4 lg:flex-col">
                    <div className="flex flex-col gap-4 p-3 rounded-full bg-background">
                        <Button variant={'icon'}><Sun /></Button>
                    </div>
                    <div className="flex gap-3 p-3 rounded-full bg-background lg:py-5 lg:flex-col">
                        <Button variant={'icon'}><UserPen /></Button>
                        <Button variant={'icon'}><Handshake /></Button>
                        <Button variant={'icon'}><GitPullRequest /></Button>
                        <Button variant={'icon'}><BriefcaseBusiness /></Button>
                        <Button variant={'icon'}><SendHorizontal /></Button>

                    </div>

                </div>
                <div className="lg:w-[360px] w-full max-w-[360px] bg-background rounded-3xl rounded-tr-none p-10 flex flex-col justify-between align-middle items-center gap-6">
                    <img src='/avatar.webp' alt="avatar" className="border-2 rounded-tr-none border-foreground rounded-3xl" />
                    <div className="flex flex-col items-center justify-start gap-2 align-middle">
                        <p className="text-xl font-semibold text-primary">Software Engineer</p>
                        <h1 className="text-4xl text-foreground">Jakir <span className="font-extrabold">Hussain</span></h1>
                    </div>
                    <div className="flex items-stretch justify-between gap-2">
                        <Button variant={'outline'} ><Github className="stroke-foreground fill-foreground" /></Button>
                        <Button variant={'outline'}><Linkedin className="stroke-foreground fill-foreground" /></Button>
                        <Button variant={'outline'}><Twitter className="stroke-foreground fill-foreground" /></Button>
                    </div>

                    <div className="flex flex-col w-full gap-4">
                        <Separator />

                        <div className="flex justify-between w-full gap-2">
                            <Button variant={'ghost'} className="w-full">Download CV</Button>
                            <Separator orientation="vertical" />
                            <Button variant={'ghost'} className="w-full">Contact me</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideBar