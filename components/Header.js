import Navigation from "./Navigation";

export default () => {
  const backendurl = process.env.BACKEND_URL;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div>
        <img style={{ maxHeight: 40 }} src={`${backendurl}/static/logo.png`} />
      </div>
      <Navigation />
      <a href="https://github.com/TWNTF">
        <img src={`${backendurl}/static/GitHub-Mark-32px.png`} />
      </a>
    </div>
  );
};

