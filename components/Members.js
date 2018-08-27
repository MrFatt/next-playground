import MemberInfo from "./MemberInfo";

const memberContainer = {
  marginLeft: 20,
  marginRight: 20,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};
export default props => (
  <div style={memberContainer}>
    {props.nodes.map(node => (
      <MemberInfo key={node.id} member={node} />
    ))}
  </div>
);
