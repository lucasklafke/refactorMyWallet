export default function errorHandlingMiddleware(error, req, res, next) {
	// if (error.type === "error_...") return res.sendStatus(500);

	return res.sendStatus(500);
}