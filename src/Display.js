export function Display(info) {
  return (
    <>
      <>
        <img src={info.image} alt="image" width="150px" height="150px" />
        <h1>{info.name}</h1>
        <p>{info.description}</p>
      </>
    </>
  );
}
