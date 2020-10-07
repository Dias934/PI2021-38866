function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		//submittedUsers.every( u1 => console.log(u1.id))
		submittedUsers.every( u1 => goodUsers.some(u2 => console.log(u2==u1)))
		return submittedUsers.every( u1 => goodUsers.some(u2 => u2.id==u2.id))
	}
}


module.exports= checkUsersValid