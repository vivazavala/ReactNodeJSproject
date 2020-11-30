<br /> 
<br /> 
<h3> Admin Type: </h3>
<ListGroup className="linklist" >
    {links.map(e => (
        <ListGroup.item key={e.adminId}>
            {e.links}
        </ListGroup.item>
    ))}
</ListGroup>