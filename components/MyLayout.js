import Header from "./Header";

const localStyle = {
  margin: 20,
  padding: 20,
};

const bodyStyle = {
  width: 1000,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 100
};


const MyLayout = (props) => (
  <div style={localStyle}>
    <Header/>
    <div style={bodyStyle}>
      {props.children}
    </div>
  </div>
);

export default MyLayout;
