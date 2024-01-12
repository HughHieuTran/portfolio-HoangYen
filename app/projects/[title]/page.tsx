
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function project({ params }: { params: { title: string } }) {
    const projectData = projectsData.filter(p => p.title == params.title)[0];

    return (
        <main >
            <div className="flex flex-col items-center px-4">
                <div >
                    <Image className="w-96 max-h-[150px] object-cover" src={projectData.imageUrl} alt="" />

                </div>
            </div>
        </main>
    );
}