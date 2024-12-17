/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, img } = person;
        return (
          <div
            className="flex flex-col justify-center items-center border border-spacing-1 py-5"
            key={id} //+
          >
            <img
              className="rounded-full w-24 h-24 "
              width="120px"
              src={img} //+
              alt={name} //+
            />

            <h3>{name}</h3>
            <p>{age} years old</p>
          </div>
        );
      })}
    </>
  );
};

export default List;
