
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    UserPen,
    BriefcaseBusiness,
    GitPullRequest,
    Handshake,
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
        <div className="flex items-start justify-center px-6 align-middle 2xl:px-0">
            <div className="flex flex-col-reverse items-center justify-center h-auto gap-5 2xl:flex-row ">
                <div className="flex flex-wrap h-full gap-3 2xl:gap-4 2xl:flex-col">
                    <div className="absolute flex flex-col gap-4 p-2 rounded-full 2xl:relative left-4 top-4 2xl:top-0 2xl:left-0 bg-background">
                        <ThemeModeToggle />
                    </div>
                    <div className="flex gap-3 p-2 rounded-full bg-background 2xl:flex-col">
                        <Button variant={'icon'} onClick={() => handleScrollToId('about')}><UserPen /></Button>
                        <Button variant={'icon'} onClick={() => handleScrollToId('service')}><Handshake /></Button>
                        <Button variant={'icon'} onClick={() => handleScrollToId('skill')}><GitPullRequest /></Button>
                        <Button variant={'icon'} onClick={() => handleScrollToId('experience')}><BriefcaseBusiness /></Button>
                        {/* <Button variant={'icon'} onClick={() => handleScrollToId('contact')}><SendHorizontal /></Button> */}

                    </div>
                    <Separator className="2xl:hidden bg-foreground/20" />

                </div>
                <div className="2xl:w-[300px] 4xl:w-[330px] w-full max-w-[360px] bg-background rounded-3xl rounded-tr-none 4xl:p-10 2xl:p-6 flex flex-col justify-between align-middle items-center gap-6">
                    <img src='/avatar.webp' alt="avatar" className="border-2 rounded-tr-none border-foreground rounded-3xl" />
                    <div className="flex flex-col items-center justify-start gap-2 align-middle">
                        <p className="font-semibold 4xl:text-xl test-lg text-primary">Software Engineer</p>
                        <h1 className="text-3xl 4xl:text-4xl text-foreground">Jakir <span className="font-extrabold">Hussain</span></h1>
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

                        <div className="grid grid-cols-2 gap-2">
                            <CustomAnchor
                                variant={'outline'}
                                href={links.cv}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="Jakir Hussain Resume ? CV">
                                Download CV
                            </CustomAnchor>

                            <Button variant={'outline'} className="w-auto" onClick={() => handleScrollToId('contact')}>Contact me</Button>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default SideBar

