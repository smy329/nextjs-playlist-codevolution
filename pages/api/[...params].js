export default function handler(req, res) {
  const params = req.query.params; //here params refers tot he filename
  console.log('this is the params', params);
  res.status(200).json(params);
}

// there is a little bit difference between[...params]vs[[...params]]
//In the case of [...params] if there is not index page, nextjs will show 404 error.Cause [...params] is supposed to get a parameter from url. This is call 'Catch All Routes'
// In the case of [[...params]] if there is no index page, nexyjs will not show 404 error. It will show a blank page.This is called 'Optional Catch All Routes'
