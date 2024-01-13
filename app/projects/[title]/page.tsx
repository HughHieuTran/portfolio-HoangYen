
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function project({ params }: { params: { title: string } }) {
    const projectData = projectsData.filter(p => p.title == params.title)[0];

    return (
        <main >
            <div className="flex flex-col items-start px-16">
                <Image
                    className="h-52 w-screen object-cover border-[0.35rem]  shadow-xl"
                    src={projectData.imageUrl} alt="" />
                <div className="bg-white w-full rounded-md mt-5 flex flex-col items-start">
                    <h1 className="mx-auto font-bold text-4xl pt-7 font-bg-gray-700">{projectData.title}</h1>
                    <p className="mx-auto text-sm text-gray-800 pb-10">{projectData.description}</p>
                    <div dangerouslySetInnerHTML={{ __html: projectData.html }} />
                </div>
            </div>
        </main>
    );
}