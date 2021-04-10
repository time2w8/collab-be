SELECT collab.id, collab.firstName, collab.lastName, collab.email, collab.salary, 
		pos.id as positionId, pos.name as positionName, pos.active as positionStatus
		FROM collaborators as collab
        JOIN positions as pos ON pos.id = collab.idPosition
        WHERE collab.id = 1;