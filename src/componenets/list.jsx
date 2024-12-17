const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, img } = person;
        return (
          <div
            className="flex flex-col justify-center items-center border border-spacing-1 py-5"
            key={person.id}
          >
            <img
              className="rounded-full w-24 h-24 "
              width="120px"
              src={person.img}
              alt={person.name}
            />
            <h3>{person.name}</h3>
            <p>{person.age} years old</p>
          </div>
        );
      })}
    </>
  );
};

export default List;
