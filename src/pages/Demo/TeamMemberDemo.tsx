import TeamMember from "../../components/layout/TeamMember";

const skills = ["React", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS", "GraphQL", "MongoDB", "Express.js", "Redux"];
const toolNames = ["VsCode", "Git", "Docker", "Postman", "Jira", "Slack", "Figma", "Webpack", "Babel", "ESLint"];

const TeamMemberDemo = () => {
  return (
    <div>
      <h2>Team Member</h2>
      <TeamMember
        avatarUrl="/images/team-member-demo.png"
        name="Frank Williams"
        role="Backend Developers"
        skills={skills}
        toolNames={toolNames}
        previousCompany="Apple"
        onActionClick={() => console.log("View Profile clicked")}
      />
    </div>
  );
};

export default TeamMemberDemo;
