import Badge from 'react-bootstrap/Badge';

const Tags = ({tag, colorTag}) => {
  return (
    <>
      <Badge bg={colorTag}>{tag}</Badge>
    </>
  );
};

export default Tags;
