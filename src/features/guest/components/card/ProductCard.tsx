type ProjectCardProps = {
    title: string;
    url?: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = props => {
    return <div className="border-2 border-black">{props.title} </div>;
}
