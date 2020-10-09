//verify if all the submittedUsers are in the goodUsers list

function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every(u => goodUsers.some(u1 => u1.id==u.id))
	}
}


module.exports= checkUsersValid