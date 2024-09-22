
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    UserPen,
    BriefcaseBusiness,
    GitPullRequest,
    Handshake,
    SendHorizontal,
    Github,
    Linkedin,
    Twitter
} from 'lucide-react';
import { CustomAnchor } from "../ui/anchor";
import { links } from "@/configs";
import { ThemeModeToggle } from "../patterns/theme-mode-toggle";

const SideBar = ({ handleScrollToId }: {
    handleScrollToId: (id: string) => void
}) => {
    return (
        <div className="flex items-start justify-center align-middle">
            <div className="flex flex-col-reverse items-center justify-center h-auto gap-5 lg:flex-row ">
                <div className="flex h-full gap-4 lg:flex-col">
                    <div className="flex flex-col gap-4 p-3 rounded-full bg-background">
                        <ThemeModeToggle />
                    </div>
                    <div className="flex gap-3 p-3 rounded-full bg-background lg:flex-col">
                        <Button variant={'icon'} onClick={() => handleScrollToId('about')}><UserPen /></Button>
                        <Button variant={'icon'} onClick={() => handleScrollToId('service')}><Handshake /></Button>
                        <Button variant={'icon'} onClick={() => handleScrollToId('skill')}><GitPullRequest /></Button>
                        <Button variant={'icon'} onClick={() => handleScrollToId('experience')}><BriefcaseBusiness /></Button>
                        <Button variant={'icon'} onClick={() => handleScrollToId('contact')}><SendHorizontal /></Button>

                    </div>

                </div>
                <div className="lg:w-[360px] w-full max-w-[360px] bg-background rounded-3xl rounded-tr-none p-10 flex flex-col justify-between align-middle items-center gap-6">
                    <img src='/avatar.webp' alt="avatar" className="border-2 rounded-tr-none border-foreground rounded-3xl" />
                    <div className="flex flex-col items-center justify-start gap-2 align-middle">
                        <p className="text-xl font-semibold text-primary">Software Engineer</p>
                        <h1 className="text-4xl text-foreground">Jakir <span className="font-extrabold">Hussain</span></h1>
                    </div>
                    <div className="flex items-stretch justify-between gap-2">
                        <CustomAnchor
                            variant={'outline'}
                            href={links.github}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="Jakir Hussain GitHub">
                            <Github className="stroke-foreground fill-foreground" />
                        </CustomAnchor>
                        <CustomAnchor
                            variant={'outline'}
                            href={links.linkedin}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="Jakir Hussain LinkedIn Profile">
                            <Linkedin className="stroke-foreground fill-foreground" />
                        </CustomAnchor>

                        <CustomAnchor
                            variant={'outline'}
                            href={links.twitter}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="Jakir Hussain Twitter / X.com">
                            <Twitter className="stroke-foreground fill-foreground" />
                        </CustomAnchor>

                    </div>

                    <div className="flex flex-col w-full gap-4">
                        <Separator />

                        <div className="flex justify-between w-full gap-2">
                            <CustomAnchor
                                variant={'ghost'}
                                href={links.cv}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="Jakir Hussain Resume ? CV">
                                Download CV
                            </CustomAnchor>


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

