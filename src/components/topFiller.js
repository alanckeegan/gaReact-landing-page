import styled from "styled-components";

//You are not declaring this as a variable. See how these are const - https://screencast.com/t/PvCWXHpsL2
// you are really not exporting anything - just because it has a filename doesn't mean you can export
// that file name by putting export in there. you need to give it a value.
const TopFiller = styled.div`
  height: 100px;
  width: 100%;
  background-color: #9942E5;
  margin-top: 30px;
  padding-top: 30px;
`;

export default TopFiller
