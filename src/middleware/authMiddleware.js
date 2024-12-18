const auth = (req, res, next) => {
  const key = process.env.X_API_KEY
  const headerAuth = req.headers['x-api-key']

  if (!headerAuth) return res.status(403).send({ message: 'Missing credentials'})
  if (headerAuth !== key) return res.status(401).send({ message: 'Bad credentials' })
  
  next()
}

export default auth
