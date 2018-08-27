import MemberInfo from "./MemberInfo";

const memberContainer = {
  marginLeft: 20,
  marginRight: 20,
  marginTop: 40,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};
export default props => (
  <div>
    <h2>团队成员:</h2>
    <div style={memberContainer}>
      {props.nodes.map(node => (
        <MemberInfo key={node.id} member={node} />
      ))}
    </div>
  </div>
);
