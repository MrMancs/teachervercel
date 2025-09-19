// /api/teacher.js

export default  await function handler(req, res) {
    let found = null;
    if(global) found = global.teachers.find(teacher=>teacher.favorite)

    if (found) {
        res.status(200).json(found)
    } else {
        res.sendStatus(404).json({error: "Not Found"})
    } 
}