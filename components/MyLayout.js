import Header from "./Header";

const localStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const MyLayout = (props) => (
  <div style={localStyle}>
    <Header/>
    {props.children}
  </div>
);

export default MyLayout;
