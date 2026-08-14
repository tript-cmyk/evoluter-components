import ProjectCard from "../../components/layout/ProjectCard";

const projectTags = ["Web app", "Mobile app", "Website", "Startup"];

const ProjectCardDemo = () => {
  const handleActionClick = () => {
    console.log("Action button project card clicked");
  };

  return (
    <div>
      <h2>Project Card</h2>
      <ProjectCard
        imageUrl="/images/project-card.png"
        title="Marketplace"
        tags={projectTags}
        labelButton="View Project"
        onActionClick={handleActionClick}
      />
    </div>
  );
};

export default ProjectCardDemo;
