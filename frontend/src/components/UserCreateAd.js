function UserCreateAd() {
  const handleCreateAd = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/v1/advertisements/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({}),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <form action={handleCreateAd}>
        <button type='submit'>Create Ad</button>
      </form>
      <h1>UserCreateAd</h1>
    </div>
  );
}
export default UserCreateAd;
