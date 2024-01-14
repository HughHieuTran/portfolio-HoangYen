
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function project({ params }: { params: { title: string } }) {
    console.log(params);
    const projectData = projectsData.filter(p => p.path == params.title)[0];

    if(projectData == null){
        return <main>
            <div className="flex flex-col items-start px-4 md:px-16">
            <h1 className="mx-auto font-bold text-4xl pt-7 font-bg-gray-700">Chưa hoàn thiện</h1>
            </div>
        </main>
    }

    return (
        <main >
            <div className="flex flex-col items-start px-4 md:px-16">
                <Image
                    className="h-52 w-screen object-cover border-[0.35rem]  shadow-xl"
                    src={projectData.imageUrl} alt="" />
                <div className="w-full rounded-md mt-5 flex flex-col items-start px-3 md:px-10">
                    <h1 className="mx-auto font-bold text-4xl pt-7 font-bg-gray-700">{projectData.title}</h1>
                    <p className="mx-auto text-sm pb-10">{projectData.description}</p>
                    <div dangerouslySetInnerHTML={{ __html: projectData.html }} />
                </div>
            </div>
        </main>
    );
}