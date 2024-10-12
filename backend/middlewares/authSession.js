const checkAuthSession = (req, res, next) => {
	return req.session.user ? next() : res.status(400).send({ msg: 'You must be logged in first!' });
};

export default checkAuthSession;
