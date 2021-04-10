SELECT collab.id, collab.firstName, collab.lastName, collab.email, collab.salary, 
		IF(LOCATE(' ',collab.lastName) <> 0, CONCAT(SUBSTRING(collab.lastName,1,LOCATE(' ',collab.lastName)),CONCAT(SUBSTRING(collab.lastName, LOCATE(' ',collab.lastName) + 1, 1), '.')), collab.lastName) as formattedLastName,
		IF(collab.salary < 500, 'Muy Bajo', IF(collab.salary < 1001, 'Bajo', IF(collab.salary < 1501, 'Medio', IF(collab.salary < 1901, 'Alto', 'Muy Alto')))) as state,
		pos.id as positionId, pos.name as positionName, pos.active as positionStatus
		FROM collaborators as collab
        JOIN positions as pos ON pos.id = collab.idPosition;