const CrewMember = ({ name, images, role, bio }) => {
    return (
      <div>
        <h2>Name: {name}</h2>
        <p>role: {role}</p>
        <p>bio: {bio}</p>
      </div>
    );
  };

export default CrewMember;