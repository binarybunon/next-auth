export const userList = async (req, res) => {
	try {
		const users = [{}];
		return res.json(users);
	} catch (err) {
		console.log(err);
	}
};
